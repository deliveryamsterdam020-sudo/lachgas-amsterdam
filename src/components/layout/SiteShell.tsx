import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { JsonLd } from "@/components/seo/JsonLd";
import { alternateMap } from "@/content";
import type { Locale } from "@/content/types";
import { ui } from "@/lib/site";
import { menu } from "@/lib/menu";
import { graph, organizationLd, websiteLd } from "@/lib/seo";
import "@/app/globals.css";

// next/font self-hosts the files at build time: no requests to Google at runtime.
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
// The mono face only styles small labels, so it is not preloaded on the critical path.
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap", preload: false });

/** Shared root markup for both language trees (each has its own root layout so `<html lang>` is correct). */
export function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = ui[locale];
  return (
    // data-scroll-behavior: Next turns CSS smooth scrolling off during page changes, so a new page starts at the top instantly.
    <html
      lang={locale === "nl" ? "nl-NL" : "en"}
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      {/* eslint-disable-next-line @next/next/no-head-element -- App Router root layout */}
      <head>
        {/* Without JavaScript, scroll-reveal content must still be visible. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-dvh flex-col">
        <JsonLd data={graph(organizationLd(), websiteLd(locale))} />
        <Header locale={locale} menu={menu[locale]} altMap={alternateMap()} labels={t} />
        <main id="inhoud" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} />
        <ChatWidget locale={locale} />
        <SmoothScroll />
        <Analytics />
      </body>
    </html>
  );
}
