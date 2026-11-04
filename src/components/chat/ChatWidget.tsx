"use client";

import Link from "next/link";
import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUp, RotateCcw, X } from "lucide-react";
import type { Locale } from "@/content/types";
import { WHATSAPP_NUMBER } from "@/lib/site";
import { Mascot } from "./Mascot";

// Chat assistant with "De Info Dealer", a small detective who peeks in from the edge of the screen.
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
    title: "De Info Dealer",
    subtitle: "Handelt alleen in informatie en hulp",
    close: "Chat sluiten",
    intro:
      "Pssst… ik ben De Info Dealer. Ik handel alleen in informatie en hulp: stel me je vraag over lachgas, de regels, de gezondheidsrisico’s, cilinders of waar je hulp vindt.",
    placeholder: "Stel je vraag…",
    send: "Versturen",
    notice: "AI-assistent, kan fouten maken. Deel geen persoonsgegevens. Bij nood: bel 112.",
    privacy: "Privacy",
    privacyHref: "/privacy/#chat",
    typing: "De Info Dealer typt",
    suggestions: ["Is lachgas verboden?", "Wat zijn de gezondheidsrisico’s?", "Wat doe ik met een gevonden cilinder?"],
    errors: {
      rate_limited: "Je hebt veel vragen gesteld. Probeer het over een paar minuten opnieuw.",
      unavailable: "De assistent is op dit moment niet beschikbaar.",
      generic: "Er ging iets mis. Probeer het opnieuw.",
      long: "Dit gesprek is lang geworden. Begin een nieuw gesprek.",
    },
    restart: "Nieuw gesprek",
    whatsapp: "Kom je er niet uit?",
    whatsappCta: "WhatsApp ons",
    whatsappLabel: "Kom je er niet uit? Stuur ons een WhatsApp-bericht (opent WhatsApp)",
    whatsappText: "Hallo, ik heb een vraag via lachgasinfo.nl: ",
    whatsappFallback: "Stuur ons liever een WhatsApp-bericht.",
  },
  en: {
    open: "Ask the assistant a question",
    title: "The Info Dealer",
    subtitle: "Deals only in information and help",
    close: "Close chat",
    intro:
      "Pssst… I’m The Info Dealer. I deal only in information and help: ask me about nitrous oxide, the rules, health risks, cylinders or where to find help.",
    placeholder: "Ask your question…",
    send: "Send",
    notice: "AI assistant, may make mistakes. Don’t share personal data. In an emergency: call 112.",
    privacy: "Privacy",
    privacyHref: "/en/privacy/#chat",
    typing: "The Info Dealer is typing",
    suggestions: ["Is laughing gas legal in Amsterdam?", "What are the health risks?", "I found a cylinder, what now?"],
    errors: {
      rate_limited: "You’ve asked a lot of questions. Please try again in a few minutes.",
      unavailable: "The assistant is not available right now.",
      generic: "Something went wrong. Please try again.",
      long: "This conversation has become long. Start a new one.",
    },
    restart: "New conversation",
    whatsapp: "Still stuck?",
    whatsappCta: "WhatsApp us",
    whatsappLabel: "Still stuck? Send us a WhatsApp message (opens WhatsApp)",
    whatsappText: "Hi, I have a question via lachgasinfo.nl: ",
    whatsappFallback: "Send us a WhatsApp message instead.",
  },
} as const;

/** WhatsApp glyph (Simple Icons, CC0). */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

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
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const [psst, setPsst] = useState(false);

  // He whispers "Pssst…" once, a few seconds after the page loads (also shown on hover).
  useEffect(() => {
    const show = window.setTimeout(() => setPsst(true), 3500);
    const hide = window.setTimeout(() => setPsst(false), 8500);
    return () => {
      window.clearTimeout(show);
      window.clearTimeout(hide);
    };
  }, []);

  useEffect(() => {
    if (open) {
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
  const waHref = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsappText)}`
    : null;

  return (
    <div className="chat-root" data-open={open ? "" : undefined}>
      {/* The Info Dealer, peeking in from the edge of the screen */}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => (open ? close() : setOpen(true))}
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-label={open ? t.close : t.open}
        className="chat-peek"
      >
        <span className="chat-peek__say" data-show={psst ? "" : undefined} aria-hidden="true">
          Pssst…
        </span>
        <Mascot />
      </button>

      {/* Hidden behind the detective; slides out when the chat opens, for visitors who want a person */}
      {waHref && (
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          inert={!open}
          aria-label={t.whatsappLabel}
          title={t.whatsappLabel}
          className="chat-wa"
        >
          <WhatsAppIcon className="chat-wa__icon" />
          <span className="chat-wa__text" aria-hidden="true">
            <span className="chat-wa__ask">{t.whatsapp}</span>
            <span className="chat-wa__cta">{t.whatsappCta}</span>
          </span>
        </a>
      )}

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
              {waHref && (
                <>
                  {" "}
                  <a href={waHref} target="_blank" rel="noopener noreferrer" className="chat-link">
                    {t.whatsappFallback}
                  </a>
                </>
              )}
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
