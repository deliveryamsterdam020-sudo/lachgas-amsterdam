import type { Locale } from "@/content/types";
import { systemPrompt } from "@/lib/chat/knowledge";

// Chat assistant endpoint. The browser posts the visible conversation; this handler
// forwards it to the Claude API with the website content as context and streams the
// answer back as plain text. Nothing is stored: no database, no cookies, and message
// contents are never logged.
//
// Required environment variable (set in Vercel, never in code): ANTHROPIC_API_KEY.
// Optional: CHAT_MODEL (defaults to Claude Haiku, the fastest and cheapest model).

const MODEL = process.env.CHAT_MODEL ?? "claude-haiku-5-5";
const MAX_TOKENS = 700;
const MAX_MESSAGES = 12;
const MAX_CHARS = 800;

// Best-effort abuse protection. Serverless instances do not share memory, so this
// limits bursts per instance rather than enforcing an exact global quota. The real
// cost ceiling is the monthly spend limit set in the Anthropic Console (see DEPLOY.md).
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 20;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_REQUESTS_PER_WINDOW;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function parseBody(body: unknown): { locale: Locale; messages: ChatMessage[] } | null {
  if (!body || typeof body !== "object") return null;
  const { locale, messages } = body as { locale?: unknown; messages?: unknown };
  if (locale !== "nl" && locale !== "en") return null;
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_MESSAGES) return null;
  const clean: ChatMessage[] = [];
  for (const m of messages) {
    if (!m || typeof m !== "object") return null;
    const { role, content } = m as { role?: unknown; content?: unknown };
    if ((role !== "user" && role !== "assistant") || typeof content !== "string") return null;
    const text = content.trim();
    if (!text || (role === "user" && text.length > MAX_CHARS)) return null;
    clean.push({ role, content: text.slice(0, 4000) });
  }
  // The API expects alternating turns that start and end with the visitor.
  if (clean[0].role !== "user" || clean[clean.length - 1].role !== "user") return null;
  for (let i = 1; i < clean.length; i++) if (clean[i].role === clean[i - 1].role) return null;
  return { locale, messages: clean };
}

function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

function error(status: number, message: string) {
  return Response.json({ error: message }, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  // Only the site itself may use this endpoint (and thereby the API key).
  if (!sameOrigin(request)) return error(403, "forbidden");

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return error(503, "unavailable");

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) return error(429, "rate_limited");

  let parsed;
  try {
    parsed = parseBody(await request.json());
  } catch {
    parsed = null;
  }
  if (!parsed) return error(400, "invalid_request");

  const upstream = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      stream: true,
      // The system prompt (instructions + all site content) is identical for every
      // visitor of a language, so prompt caching keeps repeat requests cheap and fast.
      system: [{ type: "text", text: systemPrompt(parsed.locale), cache_control: { type: "ephemeral" } }],
      messages: parsed.messages,
    }),
    signal: request.signal,
  }).catch(() => null);

  if (!upstream?.ok || !upstream.body) {
    // Log the status only, never the conversation.
    console.error("chat: upstream error", upstream?.status ?? "network");
    return error(502, "upstream_error");
  }

  // Convert the server-sent events from the API into a plain text stream.
  const reader = upstream.body.getReader();
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let buffer = "";

  const stream = new ReadableStream<Uint8Array>({
    async pull(controller) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          controller.close();
          return;
        }
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        let emitted = false;
        for (const line of lines) {
          if (!line.startsWith("data:")) continue;
          try {
            const event = JSON.parse(line.slice(5));
            if (event.type === "content_block_delta" && event.delta?.type === "text_delta") {
              controller.enqueue(encoder.encode(event.delta.text));
              emitted = true;
            } else if (event.type === "error") {
              console.error("chat: stream error", event.error?.type);
              controller.close();
              await reader.cancel();
              return;
            }
          } catch {
            // Ignore partial or non-JSON lines.
          }
        }
        if (emitted) return;
      }
    },
    cancel() {
      reader.cancel().catch(() => {});
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
