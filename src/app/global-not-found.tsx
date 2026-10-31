import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { NotFoundContent } from "@/components/layout/NotFoundContent";

export const metadata: Metadata = { title: "404 — Lachgas Amsterdam", robots: { index: false } };

export default function GlobalNotFound() {
  return (
    <SiteShell locale="nl">
      <NotFoundContent locale="nl" />
    </SiteShell>
  );
}
