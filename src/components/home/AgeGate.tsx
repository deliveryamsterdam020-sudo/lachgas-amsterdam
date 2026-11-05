"use client";

import { useEffect, useRef } from "react";
import type { Locale } from "@/content/types";

// Age check on the homepage: a modal <dialog> with two answers. Either answer closes it and
// the visitor continues on the site; there is no close button and Escape does nothing, so an
// answer is required. sessionStorage remembers it until the tab is closed. The text is
// server-rendered inside the dialog, so it is in the HTML. Nothing is sent anywhere.

const KEY = "age-confirmed";

const labels = {
  nl: {
    badge: "18+",
    label: "Leeftijdscontrole",
    title: "Ben je 18 jaar of ouder?",
    text: "Lachgas Amsterdam is bedoeld voor bezoekers van 18 jaar en ouder. Een ballon met lachgas is niet zonder risico’s voor je gezondheid, ook niet als het bij af en toe blijft. Ben je jonger dan 18? Begin er dan niet aan.",
    yes: "Ja, ik ben 18 of ouder",
    no: "Nee, ik ben jonger dan 18",
  },
  en: {
    badge: "18+",
    label: "Age check",
    title: "Are you 18 or older?",
    text: "Lachgas Amsterdam is intended for visitors aged 18 and over. A balloon of laughing gas is not without risks to your health, even if it’s only now and then. If you’re under 18, don’t start.",
    yes: "Yes, I’m 18 or older",
    no: "No, I’m under 18",
  },
} as const;

export function AgeGate({ locale }: { locale: Locale }) {
  const t = labels[locale];
  const ref = useRef<HTMLDialogElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog || typeof dialog.showModal !== "function") return;
    try {
      if (window.sessionStorage.getItem(KEY)) return;
    } catch {
      // Storage unavailable (private mode, blocked): just ask.
    }
    // A short pause so the hero is painted first.
    const id = window.setTimeout(() => {
      dialog.showModal();
      // Focus the card, not the first button, so no focus ring shows on opening.
      bodyRef.current?.focus({ preventScroll: true });
      document.documentElement.classList.add("alarm-open");
    }, 450);
    return () => window.clearTimeout(id);
  }, []);

  const confirm = () => {
    const dialog = ref.current;
    if (!dialog?.open) return;
    try {
      window.sessionStorage.setItem(KEY, "1");
    } catch {}
    const finish = () => {
      dialog.close();
      dialog.removeAttribute("data-closing");
      document.documentElement.classList.remove("alarm-open");
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return finish();
    dialog.setAttribute("data-closing", "");
    window.setTimeout(finish, 200);
  };


  return (
    <dialog
      id="age-gate"
      ref={ref}
      aria-labelledby="age-title"
      aria-describedby="age-text"
      className="alarm-dialog"
      // A choice is required: Escape does not close the age check.
      onCancel={(e) => e.preventDefault()}
    >
      <div ref={bodyRef} tabIndex={-1} className="alarm-dialog__body" data-lenis-prevent>
        <span className="alarm-dialog__icon alarm-dialog__icon--badge" aria-hidden="true">
          {t.badge}
        </span>
        <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#c4001a]">{t.label}</p>
        <h2 id="age-title" className="mt-2 text-balance text-[clamp(1.3rem,1.15rem+0.6vw,1.6rem)] font-semibold leading-snug tracking-[-0.02em] text-ink">
          {t.title}
        </h2>
        <p id="age-text" className="mt-3 text-pretty text-[15.5px] leading-relaxed text-graphite">
          {t.text}
        </p>
        <div className="mt-6 flex w-full flex-col gap-2.5">
          <button type="button" onClick={confirm} className="alarm-dialog__ack">
            {t.yes}
          </button>
          <button type="button" onClick={confirm} className="alarm-dialog__ack alarm-dialog__ack--secondary">
            {t.no}
          </button>
        </div>
      </div>
    </dialog>
  );
}
