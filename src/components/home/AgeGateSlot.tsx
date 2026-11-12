import { cache } from "react";
import type { Locale } from "@/content/types";
import { AgeGate } from "./AgeGate";

// Where the age check sits on the homepages. Each homepage is prerendered twice, both fully static
// and cached by the CDN:
//
// - the normal route (/ and /en/), with the existing AgeGate, for visitors;
// - a variant without it (zonder-leeftijdscheck/, en/without-age-check/), which renders the same
//   page component with the same metadata, only without the popup.
//
// next.config.ts decides per request, in routing and before the cache, which of the two is served:
// requests from recognisable automated clients (src/lib/bots.ts) to / and /en/ are rewritten to the
// variant. The URL stays the same, and the variant URLs themselves redirect to the homepages.

// Per render (React's cache() is scoped to one server render), so the two variants never share it.
const ageGate = cache(() => ({ render: true }));

/** Called by a variant page before it renders the homepage component: leave the age check out. */
export function renderWithoutAgeGate() {
  ageGate().render = false;
}

export function AgeGateSlot({ locale }: { locale: Locale }) {
  return ageGate().render ? <AgeGate locale={locale} /> : null;
}
