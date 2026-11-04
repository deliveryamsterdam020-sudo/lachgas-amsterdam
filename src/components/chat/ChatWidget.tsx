"use client";

import Link from "next/link";
import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUp, MessageCircle, X } from "lucide-react";
import type { Locale } from "@/content/types";

// Chat assistant. The conversation lives only in component state: it disappears on
// reload, nothing is written to cookies or browser storage.

interface Message {
  role: "user" | "assistant";
  content: string;
}

const MAX_CHARS = 800;
const MAX_MESSAGES = 12;

const labels = {
  nl: {
    open: "Stel een vraag",
    title: "Vraag het de assistent",
    close: "Chat sluiten",
    intro:
      "Hoi! Ik beantwoord vragen over lachgas op basis van de informatie op deze website: de regels, de gezondheidsrisico’s, cilinders en hulp.",
    placeholder: "Typ je vraag…",
    send: "Versturen",
    notice: "AI-assistent, kan fouten maken. Deel geen persoonsgegevens. Bij nood: bel 112.",
    privacy: "Privacy",
    privacyHref: "/privacy/#chat",
    thinking: "Even denken…",
    suggestions: ["Is lachgas verboden?", "Wat zijn de gezondheidsrisico’s?", "Wat doe ik met een gevonden cilinder?"],
    errors: {
      rate_limited: "Je hebt veel vragen gesteld. Probeer het over een paar minuten opnieuw.",
      unavailable: "De assistent is op dit moment niet beschikbaar.",
      generic: "Er ging iets mis. Probeer het opnieuw.",
      long: "Je gesprek is te lang geworden. Begin opnieuw met een nieuwe vraag.",
    },
    restart: "Nieuw gesprek",
  },
  en: {
    open: "Ask a question",
    title: "Ask the assistant",
    close: "Close chat",
    intro:
      "Hi! I answer questions about nitrous oxide based on the information on this website: the rules, health risks, cylinders and where to find help.",
    placeholder: "Type your question…",
    send: "Send",
    notice: "AI assistant, may make mistakes. Don’t share personal data. In an emergency: call 112.",
    privacy: "Privacy",
    privacyHref: "/en/privacy/#chat",
    thinking: "Thinking…",
    suggestions: ["Is laughing gas legal in Amsterdam?", "What are the health risks?", "I found a cylinder, what now?"],
    errors: {
      rate_limited: "You’ve asked a lot of questions. Please try again in a few minutes.",
      unavailable: "The assistant is not available right now.",
      generic: "Something went wrong. Please try again.",
      long: "This conversation has become too long. Start a new one with a fresh question.",
    },
    restart: "New conversation",
  },
} as const;

/** Renders the assistant's text: paragraphs, "- " lists, **bold** and [label](href) links. */
function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) {
      const href = m[2];
      const cls = "font-medium text-navy-700 underline underline-offset-2 hover:text-ink";
      out.push(
        href.startsWith("/") ? (
          <Link key={m.index} href={href} className={cls}>
            {m[1]}
          </Link>
        ) : href.startsWith("https://") ? (
          <a key={m.index} href={href} className={cls} target="_blank" rel="noopener noreferrer">
            {m[1]}
          </a>
        ) : (
          m[1]
        ),
      );
    } else {
      out.push(<strong key={m.index}>{m[3]}</strong>);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function Rich({ text }: { text: string }) {
  const blocks = text.trim().split(/\n{2,}/);
  return (
    <>
      {blocks.map((block, i) => {
        const lines = block.split("\n");
        if (lines.every((l) => /^\s*[-*•]\s+/.test(l))) {
          return (
            <ul key={i} className="ml-4 list-disc space-y-1">
              {lines.map((l, j) => (
                <li key={j}>{inline(l.replace(/^\s*[-*•]\s+/, ""))}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i}>
            {lines.map((l, j) => (
              <Fragment key={j}>
                {j > 0 && <br />}
                {inline(l.replace(/^#+\s*/, ""))}
              </Fragment>
            ))}
          </p>
        );
      })}
    </>
  );
}

export function ChatWidget({ locale }: { locale: Locale }) {
  const t = labels[locale];
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [messages, busy]);

  useEffect(() => () => abortRef.current?.abort(), []);

  const close = () => {
    setOpen(false);
    buttonRef.current?.focus();
  };

  async function ask(question: string) {
    const q = question.trim().slice(0, MAX_CHARS);
    if (!q || busy) return;
    if (messages.length + 1 > MAX_MESSAGES) {
      setErr(t.errors.long);
      return;
    }
    const history: Message[] = [...messages, { role: "user", content: q }];
    setMessages(history);
    setInput("");
    setErr(null);
    setBusy(true);

    const controller = new AbortController();
    abortRef.current = controller;
    try {
      const res = await fetch("/api/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale, messages: history }),
        signal: controller.signal,
      });
      if (!res.ok || !res.body) {
        const code = res.status === 429 ? "rate_limited" : res.status === 503 ? "unavailable" : "generic";
        throw new Error(code);
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";
      setMessages([...history, { role: "assistant", content: "" }]);
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        answer += decoder.decode(value, { stream: true });
        setMessages([...history, { role: "assistant", content: answer }]);
      }
      if (!answer.trim()) throw new Error("generic");
    } catch (e) {
      if (controller.signal.aborted) return;
      const code = e instanceof Error ? e.message : "generic";
      setErr(t.errors[code as keyof typeof t.errors] ?? t.errors.generic);
      // Drop the unanswered question so the next request still alternates turns.
      setMessages(messages);
      setInput(q);
    } finally {
      setBusy(false);
    }
  }

  const restart = () => {
    abortRef.current?.abort();
    setMessages([]);
    setErr(null);
    setBusy(false);
    inputRef.current?.focus();
  };

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => (open ? close() : setOpen(true))}
        aria-expanded={open}
        aria-controls="chat-panel"
        className={`fixed bottom-4 right-4 z-[60] flex items-center gap-2 rounded-full bg-navy px-4 py-3 text-[15px] font-medium text-white shadow-lg shadow-ink/20 transition-transform duration-200 hover:bg-navy-700 sm:bottom-6 sm:right-6 ${open ? "max-sm:hidden" : ""}`}
      >
        {open ? <X aria-hidden="true" className="size-5" /> : <MessageCircle aria-hidden="true" className="size-5" />}
        <span>{open ? t.close : t.open}</span>
      </button>

      <div
        id="chat-panel"
        role="dialog"
        aria-modal="false"
        aria-labelledby="chat-title"
        hidden={!open}
        onKeyDown={(e) => e.key === "Escape" && close()}
        className="fixed inset-x-0 bottom-0 z-[60] flex h-[min(85dvh,640px)] flex-col overflow-hidden rounded-t-2xl border border-line bg-paper shadow-2xl shadow-ink/25 sm:inset-x-auto sm:bottom-24 sm:right-6 sm:h-[min(70dvh,600px)] sm:w-[380px] sm:rounded-2xl"
      >
        <div className="flex items-center justify-between border-b border-line bg-navy px-4 py-3 text-white">
          <h2 id="chat-title" className="text-[15px] font-semibold">
            {t.title}
          </h2>
          <div className="flex items-center gap-1">
            {messages.length > 0 && (
              <button type="button" onClick={restart} className="rounded-full px-3 py-1 text-[13px] text-white/80 hover:bg-white/10 hover:text-white">
                {t.restart}
              </button>
            )}
            <button type="button" onClick={close} aria-label={t.close} className="rounded-full p-1.5 hover:bg-white/10">
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>

        <div
          id="chat-log"
          ref={logRef}
          data-lenis-prevent
          aria-live="polite"
          className="flex-1 space-y-3 overflow-y-auto overscroll-contain px-4 py-4 text-[15px] leading-relaxed"
        >
          <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-mist px-3.5 py-2.5 text-ink">{t.intro}</div>
          {messages.length === 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {t.suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => ask(s)}
                  className="rounded-full border border-line bg-paper px-3 py-1.5 text-left text-[13px] text-navy-700 hover:border-navy-700"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
          {messages.map((m, i) =>
            m.role === "user" ? (
              <div key={i} className="ml-auto max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-tr-sm bg-navy px-3.5 py-2.5 text-white">
                {m.content}
              </div>
            ) : (
              <div key={i} className="max-w-[90%] space-y-2 rounded-2xl rounded-tl-sm bg-mist px-3.5 py-2.5 text-ink">
                {m.content ? <Rich text={m.content} /> : <span className="text-muted">{t.thinking}</span>}
              </div>
            ),
          )}
          {busy && messages[messages.length - 1]?.role === "user" && (
            <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-mist px-3.5 py-2.5 text-muted">{t.thinking}</div>
          )}
          {err && (
            <p role="alert" className="rounded-xl bg-alert-soft px-3.5 py-2.5 text-[14px] text-alert">
              {err}
            </p>
          )}
        </div>

        <div className="border-t border-line px-3 pb-3 pt-2.5">
          <div className="flex items-end gap-2">
            <label htmlFor="chat-input" className="sr-only">
              {t.placeholder}
            </label>
            <textarea
              id="chat-input"
              ref={inputRef}
              rows={1}
              value={input}
              maxLength={MAX_CHARS}
              placeholder={t.placeholder}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  ask(input);
                }
              }}
              className="max-h-32 min-h-[44px] flex-1 resize-none rounded-xl border border-line bg-canvas px-3 py-2.5 text-[16px] text-ink placeholder:text-muted focus:border-navy-700 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => ask(input)}
              disabled={busy || !input.trim()}
              aria-label={t.send}
              className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy text-white hover:bg-navy-700 disabled:opacity-40"
            >
              <ArrowUp aria-hidden="true" className="size-5" />
            </button>
          </div>
          <p className="mt-2 text-[12px] leading-snug text-muted">
            {t.notice}{" "}
            <Link href={t.privacyHref} className="underline underline-offset-2 hover:text-ink">
              {t.privacy}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
