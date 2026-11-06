"use client";

import { useEffect, useRef } from "react";
import { track } from "@vercel/analytics";
import { Check, Hand, ShieldCheck, X, type LucideProps } from "lucide-react";
import type { Locale } from "@/content/types";

// Age check on the homepage: a modal <dialog> with two answers. Either answer closes it and
// the visitor continues on the site; there is no close button and Escape does nothing, so an
// answer is required. Nothing is remembered: it appears on every visit to the homepage, also
// when the visitor comes back with the browser's back button (from the back/forward cache).
// The text is server-rendered inside the dialog, so it is in the HTML. Nothing is stored or sent.


/**
 * A gas tank like the ones sold for balloons (tall cylinder, end caps, a light band under the
 * top cap, a side strap as handle) with two balloons. A pictogram, not a copy of any brand.
 * Hierarchical fills like an SF Symbol: solid caps and balloon, a lighter body.
 */
function TankBalloons({ className }: LucideProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="5.2" width="8" height="14.4" fill="currentColor" opacity=".22" />
      <rect x="3" y="6.3" width="8" height="1.1" fill="currentColor" opacity=".6" />
      <path d="M2.3 5.6V3.9c0-1.3 1-2.3 2.3-2.3h4.8c1.3 0 2.3 1 2.3 2.3v1.7Z" fill="currentColor" />
      <rect x="2.3" y="19.2" width="9.4" height="3.4" rx="1.3" fill="currentColor" />
      <rect x="11.4" y="3.1" width="1.4" height="2" rx=".4" fill="currentColor" />
      <rect x="11.4" y="19.8" width="1.4" height="2" rx=".4" fill="currentColor" />
      <path d="M12.6 4.6c1.3 1.2 1.5 2.6 1.1 4.2v8.2c.3 1.4.1 2.5-1 3.5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M21.7 11.6c1.1 0 1.9.9 1.9 2.1 0 1.6-1.2 2.9-2 3.4-.8-.5-2-1.8-2-3.4 0-1.2.9-2.1 2.1-2.1Z" fill="currentColor" opacity=".5" />
      <path d="M21.6 17.3c0 1.6-1 2.3-1 3.7v1.3" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity=".6" />
      <path d="M19.1 1.4c2 0 3.5 1.7 3.5 3.9 0 2.8-2 4.9-3.5 5.8-1.5-.9-3.5-3-3.5-5.8 0-2.2 1.5-3.9 3.5-3.9Z" fill="currentColor" />
      <path d="M18.5 12.1h1.2l-.6-.9Z" fill="currentColor" />
      <ellipse cx="17.8" cy="4.1" rx=".75" ry="1.2" fill="#fff" opacity=".6" transform="rotate(-20 17.8 4.1)" />
      <path d="M19.1 12.1c0 2-1.4 2.9-1.4 4.9s.9 3 .9 5.4" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

// One icon per line of text: age, the balloon itself, and a stop hand for under-18s.
const POINT_ICONS = [
  { Icon: ShieldCheck, tone: "bg-mist text-navy-700", size: "size-[20px]" },
  { Icon: TankBalloons, tone: "bg-[#ffe9e7] text-[#d70015]", size: "size-[27px]" },
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

// `showForVisitor` is decided on the server (src/proxy.ts → AgeGateSlot): false for known AI
// bots, which then get neither the dialog markup nor the code that opens it.
export function AgeGate({ locale, showForVisitor = true }: { locale: Locale; showForVisitor?: boolean }) {
  const t = labels[locale];
  const ref = useRef<HTMLDialogElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showForVisitor) return;
    const dialog = ref.current;
    if (!dialog || typeof dialog.showModal !== "function") return;
    let id: number | undefined;
    const open = (delay: number) => {
      window.clearTimeout(id);
      id = window.setTimeout(() => {
        if (dialog.open) return;
        dialog.removeAttribute("data-closing");
        dialog.showModal();
        // Focus the card, not the first button, so no focus ring shows on opening.
        bodyRef.current?.focus({ preventScroll: true });
        document.documentElement.classList.add("alarm-open");
      }, delay);
    };
    // A short pause so the hero is painted first.
    open(450);
    // Coming back with the back button can restore the page from memory without reloading it;
    // ask again in that case too.
    const onShow = (e: PageTransitionEvent) => {
      if (e.persisted) open(150);
    };
    window.addEventListener("pageshow", onShow);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener("pageshow", onShow);
      document.documentElement.classList.remove("alarm-open");
    };
  }, [showForVisitor]);

  const confirm = () => {
    const dialog = ref.current;
    if (!dialog?.open) return;
    const finish = () => {
      dialog.close();
      dialog.removeAttribute("data-closing");
      document.documentElement.classList.remove("alarm-open");
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return finish();
    dialog.setAttribute("data-closing", "");
    window.setTimeout(finish, 200);
  };

  if (!showForVisitor) return null;

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
          <button
            type="button"
            onClick={() => {
              // Count the click in Vercel Web Analytics (custom event, no personal data), then
              // leave after a short pause so the event is sent before the page unloads.
              track("age_gate_yes", { locale });
              window.setTimeout(() => {
                window.location.href = "https://www.fastgasservice.nl";
              }, 150);
            }}
            className="alarm-dialog__ack inline-flex items-center justify-center gap-2"
          >
            <Check aria-hidden="true" className="size-[18px]" strokeWidth={2.6} />
            {t.yes}
          </button>
          <button
            type="button"
            onClick={confirm}
            className="alarm-dialog__ack alarm-dialog__ack--secondary inline-flex items-center justify-center gap-2"
          >
            <X aria-hidden="true" className="size-[18px]" strokeWidth={2.6} />
            {t.no}
          </button>
        </div>
      </div>
    </dialog>
  );
}