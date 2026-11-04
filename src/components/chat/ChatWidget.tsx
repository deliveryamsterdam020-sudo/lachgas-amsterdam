"use client";

import Link from "next/link";
import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUp, RotateCcw, X } from "lucide-react";
import type { Locale } from "@/content/types";
import { Mascot } from "./Mascot";

// Chat assistant with "Incognito", a mascot who peeks in from the edge of the screen.
// The conversation lives only in component state: it disappears on reload, nothing is
// written to cookies or browser storage.

interface Message {
  role: "user" | "assistant";
  content: string;
}

const MAX_CHARS = 800;
const MAX_MESSAGES = 12;

const labels = {
  nl: {
    open: "Stel een vraag aan de assistent",
    hint: "Vraag het mij",
    title: "Incognito",
    subtitle: "Antwoordt op basis van deze website",
    close: "Chat sluiten",
    intro:
      "Hoi! Ik ben Incognito. Ik beantwoord vragen over lachgas met de informatie op deze website: de regels, de gezondheidsrisico’s, cilinders en hulp.",
    placeholder: "Stel je vraag…",
    send: "Versturen",
    notice: "AI-assistent, kan fouten maken. Deel geen persoonsgegevens. Bij nood: bel 112.",
    privacy: "Privacy",
    privacyHref: "/privacy/#chat",
    typing: "Incognito typt",
    suggestions: ["Is lachgas verboden?", "Wat zijn de gezondheidsrisico’s?", "Wat doe ik met een gevonden cilinder?"],
    errors: {
      rate_limited: "Je hebt veel vragen gesteld. Probeer het over een paar minuten opnieuw.",
      unavailable: "De assistent is op dit moment niet beschikbaar.",
      generic: "Er ging iets mis. Probeer het opnieuw.",
      long: "Dit gesprek is lang geworden. Begin een nieuw gesprek.",
    },
    restart: "Nieuw gesprek",
  },
  en: {
    open: "Ask the assistant a question",
    hint: "Ask me",
    title: "Incognito",
    subtitle: "Answers from this website",
    close: "Close chat",
    intro:
      "Hi! I’m Incognito. I answer questions about nitrous oxide using the information on this website: the rules, health risks, cylinders and where to find help.",
    placeholder: "Ask your question…",
    send: "Send",
    notice: "AI assistant, may make mistakes. Don’t share personal data. In an emergency: call 112.",
    privacy: "Privacy",
    privacyHref: "/en/privacy/#chat",
    typing: "Incognito is typing",
    suggestions: ["Is laughing gas legal in Amsterdam?", "What are the health risks?", "I found a cylinder, what now?"],
    errors: {
      rate_limited: "You’ve asked a lot of questions. Please try again in a few minutes.",
      unavailable: "The assistant is not available right now.",
      generic: "Something went wrong. Please try again.",
      long: "This conversation has become long. Start a new one.",
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
      const cls = "chat-link";
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
  const [hint, setHint] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  // A one-time "ask me" bubble a few seconds after the page loads.
  useEffect(() => {
    const show = window.setTimeout(() => setHint(true), 4500);
    const hide = window.setTimeout(() => setHint(false), 11000);
    return () => {
      window.clearTimeout(show);
      window.clearTimeout(hide);
    };
  }, []);

  // The mascot's eyes follow the pointer (fine pointers only, never with reduced motion).
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const eye = root.querySelector(".chat-mascot__eyes")?.getBoundingClientRect();
        if (!eye) return;
        const dx = e.clientX - (eye.left + eye.width / 2);
        const dy = e.clientY - (eye.top + eye.height / 2);
        const d = Math.hypot(dx, dy) || 1;
        const k = Math.min(1, d / 260);
        root.style.setProperty("--look-x", ((dx / d) * k).toFixed(3));
        root.style.setProperty("--look-y", ((dy / d) * k).toFixed(3));
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setHint(false);
      const id = window.setTimeout(() => inputRef.current?.focus(), 250);
      return () => window.clearTimeout(id);
    }
  }, [open]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
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

  const typing = busy && messages[messages.length - 1]?.role === "user";

  return (
    <div ref={rootRef} className="chat-root" data-open={open ? "" : undefined}>
      {/* Incognito, peeking in from the edge of the screen */}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => (open ? close() : setOpen(true))}
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-label={open ? t.close : t.open}
        className="chat-peek"
      >
        <span className="chat-peek__hint" data-show={hint ? "" : undefined} aria-hidden="true">
          {t.hint}
        </span>
        <Mascot />
      </button>

      <div
        id="chat-panel"
        role="dialog"
        aria-modal="false"
        aria-labelledby="chat-title"
        inert={!open}
        onKeyDown={(e) => e.key === "Escape" && close()}
        className="chat-panel"
      >
        <header className="chat-panel__head">
          <span className="chat-panel__avatar">
            <Mascot mini />
          </span>
          <div className="min-w-0 flex-1">
            <h2 id="chat-title" className="text-[15px] font-semibold leading-tight tracking-[-0.01em] text-ink">
              {t.title}
            </h2>
            <p className="truncate text-[12.5px] leading-tight text-muted">{t.subtitle}</p>
          </div>
          {messages.length > 0 && (
            <button type="button" onClick={restart} aria-label={t.restart} title={t.restart} className="chat-icon-btn">
              <RotateCcw aria-hidden="true" className="size-[17px]" />
            </button>
          )}
          <button type="button" onClick={close} aria-label={t.close} className="chat-icon-btn">
            <X aria-hidden="true" className="size-[19px]" />
          </button>
        </header>

        <div id="chat-log" ref={logRef} data-lenis-prevent aria-live="polite" className="chat-panel__log">
          <div className="chat-bubble chat-bubble--bot">{t.intro}</div>
          {messages.length === 0 && (
            <div className="chat-suggestions">
              {t.suggestions.map((s, i) => (
                <button key={s} type="button" onClick={() => ask(s)} className="chat-chip" style={{ animationDelay: `${120 + i * 70}ms` }}>
                  {s}
                </button>
              ))}
            </div>
          )}
          {messages.map((m, i) =>
            m.role === "user" ? (
              <div key={i} className="chat-bubble chat-bubble--user">
                {m.content}
              </div>
            ) : (
              <div key={i} className="chat-bubble chat-bubble--bot space-y-2">
                <Rich text={m.content} />
              </div>
            ),
          )}
          {typing && (
            <div className="chat-bubble chat-bubble--bot chat-typing" role="status" aria-label={t.typing}>
              <span />
              <span />
              <span />
            </div>
          )}
          {err && (
            <p role="alert" className="chat-error">
              {err}
            </p>
          )}
        </div>

        <footer className="chat-panel__foot">
          <div className="chat-composer">
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
              className="chat-composer__input"
            />
            <button
              type="button"
              onClick={() => ask(input)}
              disabled={busy || !input.trim()}
              aria-label={t.send}
              className="chat-composer__send"
            >
              <ArrowUp aria-hidden="true" className="size-[18px]" strokeWidth={2.5} />
            </button>
          </div>
          <p className="mt-2 px-1 text-[11.5px] leading-snug text-muted">
            {t.notice}{" "}
            <Link href={t.privacyHref} className="underline underline-offset-2 hover:text-ink">
              {t.privacy}
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
