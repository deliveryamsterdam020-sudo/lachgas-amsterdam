import { Suspense } from "react";
import { headers } from "next/headers";
import type { Locale } from "@/content/types";
import { isAutomatedClient } from "@/lib/bots";
import { AgeGate } from "./AgeGate";

// Server-side decision whether to render the age check: people get the existing AgeGate, and
// recognisable crawlers and other automated clients get nothing, so the popup is not in the HTML
// they receive. The rest of the page is identical for everyone.
//
// Reading the User-Agent is request-time data. Inside this <Suspense> boundary it only affects
// this slot: with Cache Components the page around it stays a prerendered, cached static shell,
// and only this small part is rendered per request. No variant is cached, so a decision for one
// client can never be served to another.

async function AgeGateForVisitor({ locale }: { locale: Locale }) {
  const userAgent = (await headers()).get("user-agent");
  if (isAutomatedClient(userAgent)) return null;
  return <AgeGate locale={locale} />;
}

export function AgeGateSlot({ locale }: { locale: Locale }) {
  return (
    <Suspense fallback={null}>
      <AgeGateForVisitor locale={locale} />
    </Suspense>
  );
}
