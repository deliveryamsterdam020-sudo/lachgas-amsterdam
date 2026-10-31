"use client";

import { useSyncExternalStore } from "react";
import type { Locale } from "@/content/types";

// 1 January in Amsterdam is always winter time (CET, UTC+1), so each
// anniversary of the ban starts at 23:00 UTC on 31 December.
const anniversary = (year: number) => Date.UTC(year - 1, 11, 31, 23, 0, 0);
const START_YEAR = 2023;

function elapsed(now: number) {
  let years = 0;
  while (now >= anniversary(START_YEAR + years + 1)) years++;
  let rest = Math.floor((now - anniversary(START_YEAR + years)) / 1000);
  const days = Math.floor(rest / 86400);
  rest -= days * 86400;
  const hours = Math.floor(rest / 3600);
  rest -= hours * 3600;
  const minutes = Math.floor(rest / 60);
  const seconds = rest - minutes * 60;
  return { years, days, hours, minutes, seconds };
}

const subscribe = (tick: () => void) => {
  const id = window.setInterval(tick, 1000);
  return () => window.clearInterval(id);
};
const currentSecond = () => Math.floor(Date.now() / 1000) * 1000;

const labels = {
  nl: { years: "jaar", days: "dagen", hours: "uur", minutes: "minuten", seconds: "seconden" },
  en: { years: "years", days: "days", hours: "hours", minutes: "minutes", seconds: "seconds" },
};

/** Elapsed time since the ban took effect. Shows time only — never incidents or violations. */
export function BanCounter({ locale }: { locale: Locale }) {
  // Server render shows placeholders; the client subscribes to a one-second tick.
  const now = useSyncExternalStore(subscribe, currentSecond, () => null);

  const parts = now === null ? null : elapsed(now);
  const units = ["years", "days", "hours", "minutes", "seconds"] as const;

  return (
    <div>
      {/* Static summary for assistive tech; the ticking digits are hidden to avoid constant announcements. */}
      <p className="sr-only">
        {locale === "nl"
          ? `Het lachgasverbod geldt sinds 1 januari 2023${parts ? `: ${parts.years} jaar en ${parts.days} dagen` : ""}.`
          : `The nitrous oxide ban has applied since 1 January 2023${parts ? `: ${parts.years} years and ${parts.days} days` : ""}.`}
      </p>
      <dl aria-hidden="true" className="grid grid-cols-3 gap-2 sm:grid-cols-5 sm:gap-3">
        {units.map((u, i) => (
          <div
            key={u}
            className={`relative flex flex-col-reverse overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-5 text-center sm:px-4 sm:py-7 ${
              i === 0 ? "border-lamp/30" : ""
            }`}
          >
            <dt className="eyebrow mt-3 text-[10.5px] text-white/55">{labels[locale][u]}</dt>
            <dd className="tabular text-[clamp(2rem,1.3rem+3vw,4.25rem)] font-semibold leading-none tracking-[-0.04em] text-white">
              {parts ? String(parts[u]).padStart(u === "days" ? 3 : 2, "0") : "—"}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
