"use client";

import { useEffect, useRef } from "react";
import { Check, Hand, ShieldCheck, X, type LucideProps } from "lucide-react";
import type { Locale } from "@/content/types";

// Age check on the homepage: a modal <dialog> with two answers. Either answer closes it and
// the visitor continues on the site; there is no close button and Escape does nothing, so an
// answer is required. sessionStorage remembers it until the tab is closed. The text is
// server-rendered inside the dialog, so it is in the HTML. Nothing is sent anywhere.

const KEY = "age-confirmed";

/** A cylinder (valve, handle, the two end caps) with two balloons, in the same line style as the other icons. */
function CylinderBalloons({ className, strokeWidth = 2 }: LucideProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2.5" y="8.5" width="8.5" height="13" rx="2.5" />
      <path d="M2.5 11.5h8.5M2.5 18.5h8.5" />
      <path d="M5 8.5V7a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1v1.5" />
      <path d="M6.75 6V4" />
      <path d="M11 12.5h1.5v5H11" />
      <path d="M16.2 2.6C18 2.6 18.9 4 18.9 5.6C18.9 7.6 17.4 9 16.2 9.6C15 9 13.5 7.6 13.5 5.6C13.5 4 14.4 2.6 16.2 2.6Z" fill="currentColor" fillOpacity={0.18} />
      <path d="M16.2 9.6c0 1.5-.9 2.2-.9 3.6s.6 2 .6 3.3" />
      <path d="M21 8.4C22.3 8.4 23 9.4 23 10.6C23 12.1 21.9 13.1 21 13.6C20.1 13.1 19 12.1 19 10.6C19 9.4 19.7 8.4 21 8.4Z" fill="currentColor" fillOpacity={0.18} />
      <path d="M21 13.6c0 1.3-.8 1.9-.8 3.1s.5 1.6.5 2.6" />
    </svg>
  );
}

// One icon per line of text: age, the balloon itself, and a stop hand for under-18s.
const POINT_ICONS = [
  { Icon: ShieldCheck, tone: "bg-mist text-navy-700", size: "size-[20px]" },
  { Icon: CylinderBalloons, tone: "bg-[#ffe9e7] text-[#d70015]", size: "size-[23px]" },
  { Icon: Hand, tone: "bg-[#fff1e0] text-[#9a3412]", size: "size-[20px]" },
];

const labels = {
  nl: {
    badge: "18+",
    label: "Leeftijdscontrole",
    title: "Ben je 18 jaar of ouder?",
    points: [
      "Lachgas Amsterdam is bedoeld voor bezoekers van 18 jaar en ouder.",
      "Een ballon met lachgas is niet zonder risico’s voor je gezondheid, ook niet als het bij af en toe blijft.",
      "Ben je jonger dan 18? Begin er dan niet aan.",
    ],
    yes: "Ja, ik ben 18 of ouder",
    no: "Nee, ik ben jonger dan 18",
  },
  en: {
    badge: "18+",
    label: "Age check",
    title: "Are you 18 or older?",
    points: [
      "Lachgas Amsterdam is intended for visitors aged 18 and over.",
      "A balloon of laughing gas is not without risks to your health, even if it’s only now and then.",
      "If you’re under 18, don’t start.",
    ],
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
        <ul id="age-text" className="mt-5 w-full space-y-3.5 text-left">
          {t.points.map((point, i) => {
            const { Icon, tone, size } = POINT_ICONS[i];
            return (
              <li key={point} className="flex items-start gap-3.5">
                <span aria-hidden="true" className={`grid size-10 flex-none place-items-center rounded-[12px] ${tone}`}>
                  <Icon className={size} strokeWidth={2.1} />
                </span>
                <span className="pt-[1px] text-pretty text-[15px] leading-snug text-graphite">{point}</span>
              </li>
            );
          })}
        </ul>
        <div className="mt-6 flex w-full flex-col gap-2.5">
          <button type="button" onClick={confirm} className="alarm-dialog__ack inline-flex items-center justify-center gap-2">
            <Check aria-hidden="true" className="size-[18px]" strokeWidth={2.6} />
            {t.yes}
          </button>
          <button type="button" onClick={confirm} className="alarm-dialog__ack alarm-dialog__ack--secondary inline-flex items-center justify-center gap-2">
            <X aria-hidden="true" className="size-[18px]" strokeWidth={2.6} />
            {t.no}
          </button>
        </div>
      </div>
    </dialog>
  );
}
