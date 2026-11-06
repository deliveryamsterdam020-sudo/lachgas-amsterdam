"use client";

import dynamic from "next/dynamic";
import type { Locale } from "@/content/types";

// Loads the age check as its own lazily loaded chunk (JS + AgeGate.css). The dynamic import has
// to live in a Client Component for Next.js to split it off. The chunk is only requested when
// this component is rendered, which AgeGateSlot does for normal visitors only, so known AI bots
// never receive the age check's code, text, SVGs or styles. Still server-rendered for visitors.
const AgeGate = dynamic(() => import("./AgeGate").then((m) => m.AgeGate));

export function AgeGateLoader({ locale }: { locale: Locale }) {
  return <AgeGate locale={locale} />;
}
