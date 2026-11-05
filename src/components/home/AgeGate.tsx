"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/content/types";

// Age check on the homepage: a modal <dialog> with two choices. The visitor has to pick one;
// there is no close button and Escape does nothing. "Yes" closes it, and sessionStorage
// remembers that until the tab is closed. "No" explains the site is for adults and points to
// DrugsInfo (Trimbos-instituut), where young people find reliable information and anonymous help.
// The text is server-rendered inside the dialog, so it is in the HTML. Nothing is sent anywhere.

const KEY = "age-confirmed";
const DRUGSINFO = "https://www.drugsinfo.nl/lachgas/wat-je-moet-weten-over-lachgas/";

const labels = {
  nl: {
    badge: "18+",
    label: "Leeftijdscontrole",
    title: "Ben je 18 jaar of ouder?",
    text: "Lachgas Amsterdam is bedoeld voor bezoekers van 18 jaar en ouder.",
    yes: "Ja, ik ben 18 of ouder",
    no: "Nee, ik ben jonger dan 18",
    minorTitle: "Deze site is voor 18+",
    minorText:
      "Heb je vragen over lachgas, of maak je je zorgen om jezelf of een vriend? Bij DrugsInfo van het Trimbos-instituut vind je betrouwbare informatie en kun je anoniem je vraag stellen. Bij nood: bel 112.",
    drugsinfo: "Naar DrugsInfo",
    back: "Terug",
  },
  en: {
    badge: "18+",
    label: "Age check",
    title: "Are you 18 or older?",
    text: "Lachgas Amsterdam is intended for visitors aged 18 and over.",
    yes: "Yes, I’m 18 or older",
    no: "No, I’m under 18",
    minorTitle: "This site is for 18+",
    minorText:
      "Got questions about laughing gas, or worried about yourself or a friend? DrugsInfo, run by the Trimbos Institute, has reliable information (in Dutch) and lets you ask questions anonymously. In an emergency, call 112.",
    drugsinfo: "Go to DrugsInfo",
    back: "Back",
  },
} as const;

export function AgeGate({ locale }: { locale: Locale }) {
  const t = labels[locale];
  const ref = useRef<HTMLDialogElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [minor, setMinor] = useState(false);

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

  const show = (isMinor: boolean) => {
    setMinor(isMinor);
    bodyRef.current?.focus({ preventScroll: true });
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
          {minor ? t.minorTitle : t.title}
        </h2>
        <p id="age-text" className="mt-3 text-pretty text-[15.5px] leading-relaxed text-graphite">
          {minor ? t.minorText : t.text}
        </p>
        {minor ? (
          <div className="mt-6 flex w-full flex-col gap-2.5">
            <a href={DRUGSINFO} rel="noopener noreferrer" className="alarm-dialog__ack inline-flex items-center justify-center gap-1.5">
              {t.drugsinfo}
              <ArrowUpRight className="size-[18px]" aria-hidden="true" />
            </a>
            <button type="button" onClick={() => show(false)} className="alarm-dialog__ack alarm-dialog__ack--secondary">
              {t.back}
            </button>
          </div>
        ) : (
          <div className="mt-6 flex w-full flex-col gap-2.5">
            <button type="button" onClick={confirm} className="alarm-dialog__ack">
              {t.yes}
            </button>
            <button type="button" onClick={() => show(true)} className="alarm-dialog__ack alarm-dialog__ack--secondary">
              {t.no}
            </button>
          </div>
        )}
      </div>
    </dialog>
  );
}
