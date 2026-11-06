import { Suspense } from "react";
import { headers } from "next/headers";
import type { Locale } from "@/content/types";
import { VISITOR_AI_BOT, VISITOR_HEADER } from "@/lib/ai-bots";
import { AgeGateLoader } from "./AgeGateLoader";

// Server wrapper around the age check. The decision comes from src/proxy.ts (internal request
// header, always overwritten there). Reading a request header makes this part request-time, so
// it sits in its own <Suspense> boundary: the rest of the homepage stays in the prerendered
// static shell, and only this slot is rendered per request (Partial Prerendering). The fallback
// is empty, so nothing of the dialog is in the shared shell.
//
// For a known AI bot nothing is rendered here: no dialog HTML, no reference to the age check's
// client chunk, so its JavaScript and CSS are never sent or requested (see AgeGateLoader).
async function VisitorAgeGate({ locale }: { locale: Locale }) {
  const showForVisitor = (await headers()).get(VISITOR_HEADER) !== VISITOR_AI_BOT;
  if (!showForVisitor) return null;
  return <AgeGateLoader locale={locale} />;
}

export function AgeGateSlot({ locale }: { locale: Locale }) {
  return (
    <Suspense fallback={null}>
      <VisitorAgeGate locale={locale} />
    </Suspense>
  );
}
