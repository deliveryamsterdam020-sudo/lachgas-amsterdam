"use client";

import { useSyncExternalStore } from "react";
import type { Locale } from "@/content/types";

// Live day, date and time in Amsterdam, as a small frosted pill in the hero.
// The page is prerendered, so the server cannot know the visitor's "now": the server
// render shows an empty pill of the same height (no layout shift) and the client fills
// it in and ticks once per second.

const TZ = "Europe/Amsterdam";

const formats = {
  nl: {
    date: new Intl.DateTimeFormat("nl-NL", { weekday: "long", day: "numeric", month: "long", timeZone: TZ }),
    time: new Intl.DateTimeFormat("nl-NL", { hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23", timeZone: TZ }),
  },
  en: {
    date: new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "numeric", month: "long", timeZone: TZ }),
    time: new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23", timeZone: TZ }),
  },
};

const year = new Intl.DateTimeFormat("en-GB", { year: "numeric", timeZone: TZ });

const subscribe = (tick: () => void) => {
  // Align the ticks to the start of each second so the display never lags behind.
  let id: number | undefined;
  const timeout = window.setTimeout(() => {
    tick();
    id = window.setInterval(tick, 1000);
  }, 1000 - (Date.now() % 1000));
  return () => {
    window.clearTimeout(timeout);
    window.clearInterval(id);
  };
};
const currentSecond = () => Math.floor(Date.now() / 1000) * 1000;

const capitalise = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export function LiveClock({ locale }: { locale: Locale }) {
  const now = useSyncExternalStore(subscribe, currentSecond, () => null);
  const f = formats[locale];
  const date = now === null ? null : new Date(now);

  return (
    <div className="rise flex flex-col items-start">
      <p className="live-clock">
        <span className="live-clock__dot" aria-hidden="true" />
        {/* On phones the pill only fits the date and time; "Amsterdam" stays for screen readers */}
        <span className="sr-only font-semibold text-white sm:not-sr-only">Amsterdam</span>
        <span aria-hidden="true" className="live-clock__sep hidden sm:block" />
        {date ? (
          <time dateTime={date.toISOString()} className="flex items-baseline gap-2.5">
            <span>
              {capitalise(f.date.format(date))}
              {/* The year only where there is room for it */}
              <span className="hidden sm:inline"> {year.format(date)}</span>
            </span>
            <span className="tabular font-semibold text-white">{f.time.format(date)}</span>
          </time>
        ) : (
          // Same height as the filled pill, so nothing moves when the time appears.
          <span aria-hidden="true" className="inline-block w-[24ch] sm:w-[30ch]">&nbsp;</span>
        )}
      </p>
    </div>
  );
}
