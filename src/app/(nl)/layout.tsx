import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  applicationName: SITE_NAME,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#101c32" };

export default function DutchRootLayout({ children }: { children: ReactNode }) {
  return <SiteShell locale="nl">{children}</SiteShell>;
}
