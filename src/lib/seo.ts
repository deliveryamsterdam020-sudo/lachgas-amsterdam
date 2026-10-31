import type { Metadata } from "next";
import type { Locale, Page, Status } from "@/content/types";
import { alternatePath, isIndexable } from "@/content";
import { SITE_NAME, SITE_URL, absoluteUrl } from "./site";

interface MetaInput {
  id: string;
  locale: Locale;
  path: string;
  title: string;
  description: string;
  status: Status;
  type?: "website" | "article";
}

export function buildMetadata({ id, locale, path, title, description, status, type = "article" }: MetaInput): Metadata {
  const alt = alternatePath(id);
  const languages: Record<string, string> = { [locale === "nl" ? "nl-NL" : "en"]: path };
  if (alt) languages[locale === "nl" ? "en" : "nl-NL"] = alt;
  // x-default points at the Dutch version: the primary market.
  const nlPath = locale === "nl" ? path : alt;
  if (nlPath) languages["x-default"] = nlPath;

  const indexable = isIndexable(status);
  // Search results show roughly 60 characters: append the brand only when it fits.
  const fullTitle = title.includes(SITE_NAME) || title.length + SITE_NAME.length + 3 > 60 ? title : `${title} | ${SITE_NAME}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path, languages },
    robots: indexable ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
      type,
      siteName: SITE_NAME,
      title,
      description,
      url: path,
      locale: locale === "nl" ? "nl_NL" : "en_GB",
      alternateLocale: alt ? [locale === "nl" ? "en_GB" : "nl_NL"] : undefined,
      images: [{ url: `/og-${locale}.png`, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`/og-${locale}.png`] },
  };
}

export const pageMetadata = (page: Page) =>
  buildMetadata({
    id: page.id,
    locale: page.locale,
    path: page.path,
    title: page.metaTitle,
    description: page.metaDescription,
    status: page.status,
  });

// ── Structured data ────────────────────────────────────────────────────────

const ORG_ID = `${SITE_URL}/#organization`;

export function organizationLd() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/icon.svg"),
    description:
      "Onafhankelijk, niet-commercieel informatieplatform over lachgas in Amsterdam. Geen overheidswebsite.",
  };
}

export function websiteLd(locale: Locale) {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website-${locale}`,
    name: SITE_NAME,
    url: absoluteUrl(locale === "nl" ? "/" : "/en/"),
    inLanguage: locale === "nl" ? "nl-NL" : "en",
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleLd(page: Page, citations: string[]) {
  return {
    "@type": "Article",
    headline: page.title,
    description: page.metaDescription,
    inLanguage: page.locale === "nl" ? "nl-NL" : "en",
    mainEntityOfPage: absoluteUrl(page.path),
    datePublished: page.published,
    dateModified: page.reviewed,
    // The editorial team is an organisation; Person markup is reserved for real, named authors.
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    ...(citations.length ? { citation: citations } : {}),
  };
}

export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
