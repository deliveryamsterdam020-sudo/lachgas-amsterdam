import type { Locale } from "@/content/types";

/**
 * Production domain (the primary domain in Vercel). lachgasinfo.nl and both
 * .com variants redirect here
 * (next.config.ts). NEXT_PUBLIC_SITE_URL overrides it, e.g. for previews.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lachgasinfo.nl").replace(/\/$/, "");

export const SITE_NAME = "Lachgas Amsterdam";

/**
 * WhatsApp number for visitors who would rather talk to a person than to the chat
 * assistant: digits only, international format without "+" or leading zeros
 * (06 12345678 → "31612345678"). An empty string hides the WhatsApp button.
 */
export const WHATSAPP_NUMBER = "";

/** Publisher identification (legal notice). */
export const PUBLISHER = {
  name: "Lachgas info Amsterdam",
  street: "Sarphatipark 8",
  city: "Amsterdam",
  country: "NL",
};

export const absoluteUrl = (path: string) => `${SITE_URL}${path}`;

export interface NavItem {
  href: string;
  label: string;
}

export const footerNav: Record<Locale, { title: string; items: NavItem[] }[]> = {
  nl: [
    {
      title: "Wetgeving",
      items: [
        { href: "/lachgas-verbod/", label: "Het lachgasverbod" },
        { href: "/lachgas-regels-amsterdam/", label: "Regels in Amsterdam" },
        { href: "/lachgas-bezit/", label: "Bezit en vervoer" },
      ],
    },
    {
      title: "Gezondheid & hulp",
      items: [
        { href: "/gezondheid/", label: "Gezondheidsrisico’s" },
        { href: "/lachgas-zenuwschade/", label: "Zenuwschade en B12" },
        { href: "/lachgas-verslaving/", label: "Verslaving" },
        { href: "/hulp/", label: "Hulp en ondersteuning" },
      ],
    },
    {
      title: "Kennisbank",
      items: [
        { href: "/lachgas-soorten-en-toepassingen/", label: "Soorten en toepassingen" },
        { href: "/lachgas-merken/", label: "Merken" },
        { href: "/lachgas-gebruik/", label: "Gebruik en cijfers" },
        { href: "/lachgascilinders/", label: "Cilinders en patronen" },
        { href: "/wegwerp-lachgascilinders/", label: "Wegwerpcilinders" },
        { href: "/amsterdam/", label: "Amsterdam" },
        { href: "/lachgas-uitgaan-festivals/", label: "Uitgaan en festivals" },
        { href: "/lachgas-overlast-amsterdam/", label: "Overlast melden" },
        { href: "/nieuws/", label: "Nieuws" },
        { href: "/kennisbank/", label: "Alle artikelen" },
      ],
    },
    {
      title: "Redactie",
      items: [
        { href: "/over-ons/", label: "Over ons" },
        { href: "/redactiebeleid/", label: "Redactiebeleid" },
        { href: "/bronnen/", label: "Bronregister" },
        { href: "/privacy/", label: "Privacy" },
        { href: "/disclaimer/", label: "Disclaimer" },
      ],
    },
  ],
  en: [
    {
      title: "Guide",
      items: [
        { href: "/en/is-laughing-gas-legal-in-amsterdam/", label: "Is it legal?" },
        { href: "/en/nitrous-oxide-laws-netherlands/", label: "Dutch law" },
        { href: "/en/visiting-amsterdam/", label: "Visiting Amsterdam" },
        { href: "/en/nitrous-oxide-festivals-nightlife/", label: "Festivals and nightlife" },
      ],
    },
    {
      title: "Knowledge",
      items: [
        { href: "/en/nitrous-oxide-health-risks/", label: "Health risks" },
        { href: "/en/nitrous-oxide-types/", label: "Types and uses" },
        { href: "/en/nitrous-oxide-brands/", label: "Brands" },
        { href: "/en/nitrous-oxide-cylinders/", label: "Cylinders" },
        { href: "/en/disposable-nitrous-oxide-tanks/", label: "Disposable tanks" },
      ],
    },
    {
      title: "About",
      items: [
        { href: "/en/about/", label: "About us" },
        { href: "/en/editorial-policy/", label: "Editorial policy" },
        { href: "/en/sources/", label: "Source register" },
        { href: "/en/privacy/", label: "Privacy" },
        { href: "/en/disclaimer/", label: "Disclaimer" },
      ],
    },
  ],
};

export const ui = {
  nl: {
    skip: "Naar de inhoud",
    menu: "Menu",
    close: "Sluiten",
    langLabel: "English",
    langShort: "EN",
    home: "Home",
    shortAnswer: "Kort antwoord",
    onThisPage: "Op deze pagina",
    faq: "Veelgestelde vragen",
    sources: "Bronnen",
    related: "Lees ook",
    published: "Gepubliceerd",
    reviewed: "Laatst gecontroleerd",
    nextReview: "Volgende controle",
    author: "Redactie Lachgas Amsterdam",
    uncertainties: "Nog niet geverifieerd",
    accessed: "geraadpleegd",
    notGov: "Onafhankelijk en niet-commercieel. Geen website van de gemeente Amsterdam of de overheid.",
    disclaimer:
      "Algemene informatie, geen persoonlijk juridisch of medisch advies. Bij nood: bel 112.",
  },
  en: {
    skip: "Skip to content",
    menu: "Menu",
    close: "Close",
    langLabel: "Nederlands",
    langShort: "NL",
    home: "Home",
    shortAnswer: "Short answer",
    onThisPage: "On this page",
    faq: "Frequently asked questions",
    sources: "Sources",
    related: "Read next",
    published: "Published",
    reviewed: "Last checked",
    nextReview: "Next review",
    author: "Lachgas Amsterdam editorial team",
    uncertainties: "Not yet verified",
    accessed: "accessed",
    notGov: "Independent and non-commercial. Not a website of the City of Amsterdam or any government body.",
    disclaimer: "General information, not personal legal or medical advice. In an emergency, call 112.",
  },
} as const;

export const statusLabel: Record<Locale, Record<string, string>> = {
  nl: {
    draft: "Concept",
    "fact-check": "In feitencheck",
    "legal-review": "Wacht op juridische controle",
    "medical-review": "Wacht op medische controle",
    approved: "Goedgekeurd",
    published: "Gepubliceerd",
    "needs-update": "Update nodig",
  },
  en: {
    draft: "Draft",
    "fact-check": "Being fact-checked",
    "legal-review": "Awaiting legal review",
    "medical-review": "Awaiting medical review",
    approved: "Approved",
    published: "Published",
    "needs-update": "Update needed",
  },
};

export const categoryLabel: Record<Locale, Record<string, string>> = {
  nl: {
    wetgeving: "Wetgeving",
    gezondheid: "Gezondheid",
    soorten: "Soorten",
    merken: "Merken",
    cilinders: "Cilinders",
    amsterdam: "Amsterdam",
    hulp: "Hulp",
    toeristen: "Toeristen",
    nieuws: "Nieuws",
    gebruik: "Gebruik en cijfers",
    redactie: "Redactie",
  },
  en: {
    wetgeving: "Law",
    gezondheid: "Health",
    soorten: "Types",
    merken: "Brands",
    cilinders: "Cylinders",
    amsterdam: "Amsterdam",
    hulp: "Help",
    toeristen: "Visitors",
    nieuws: "News",
    gebruik: "Use and figures",
    redactie: "About",
  },
};

export function formatDate(iso: string, locale: Locale) {
  const [y, m, d] = iso.split("-").map(Number);
  if (!d) return iso;
  return new Intl.DateTimeFormat(locale === "nl" ? "nl-NL" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Amsterdam",
  }).format(new Date(Date.UTC(y, m - 1, d, 12)));
}
