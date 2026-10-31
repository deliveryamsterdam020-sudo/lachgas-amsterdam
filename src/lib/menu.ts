import type { Locale } from "@/content/types";

// Navigation structure. Icons are referenced by key so this file stays
// serialisable; the header maps keys to Lucide components.

export type IconKey =
  | "scale"
  | "mapPin"
  | "package"
  | "heartPulse"
  | "activity"
  | "lifeBuoy"
  | "flask"
  | "tag"
  | "cylinder"
  | "recycle"
  | "library"
  | "landmark"
  | "fileText"
  | "bookOpen"
  | "plane"
  | "info"
  | "compass"
  | "repeat"
  | "megaphone"
  | "newspaper";

export interface MenuLink {
  href: string;
  label: string;
  desc: string;
  icon: IconKey;
}

export interface MenuGroup {
  id: string;
  label: string;
  icon: IconKey;
  intro: string;
  overview: { href: string; label: string };
  links: MenuLink[];
}

export interface Menu {
  groups: MenuGroup[];
  help: { href: string; label: string };
  emergency: { label: string; text: string };
  sections: { browse: string; more: string };
}

export const menu: Record<Locale, Menu> = {
  nl: {
    groups: [
      {
        id: "wetgeving",
        label: "Wetgeving",
        icon: "scale",
        intro: "Wat de wet zegt over lachgas, sinds het verbod van 1 januari 2023.",
        overview: { href: "/lachgas-verbod/", label: "Alles over het verbod" },
        links: [
          { href: "/lachgas-verbod/", label: "Het lachgasverbod", desc: "Wat is verboden en wat niet", icon: "scale" },
          { href: "/lachgas-regels-amsterdam/", label: "Regels in Amsterdam", desc: "Landelijk verbod en lokale regels", icon: "mapPin" },
          { href: "/lachgas-bezit/", label: "Bezit en vervoer", desc: "‘Strafbaar, tenzij’ uitgelegd", icon: "package" },
        ],
      },
      {
        id: "gezondheid",
        label: "Gezondheid",
        icon: "heartPulse",
        intro: "De risico’s op korte en lange termijn, en wanneer je naar een arts gaat.",
        overview: { href: "/gezondheid/", label: "Alles over gezondheid" },
        links: [
          { href: "/gezondheid/", label: "Gezondheidsrisico’s", desc: "Van duizeligheid tot bevriezing", icon: "heartPulse" },
          { href: "/lachgas-zenuwschade/", label: "Zenuwschade en B12", desc: "Klachten, diagnose en herstel", icon: "activity" },
          { href: "/lachgas-verslaving/", label: "Verslaving", desc: "Signalen, cijfers en hulp", icon: "repeat" },
          { href: "/hulp/", label: "Hulp en ondersteuning", desc: "Anoniem advies en zorg", icon: "lifeBuoy" },
        ],
      },
      {
        id: "kennis",
        label: "Kennis",
        icon: "bookOpen",
        intro: "Soorten, toepassingen, merken en cilinders — feitelijk en zonder reclame.",
        overview: { href: "/kennisbank/", label: "Naar de kennisbank" },
        links: [
          { href: "/lachgas-soorten-en-toepassingen/", label: "Soorten en toepassingen", desc: "Medisch, culinair en technisch", icon: "flask" },
          { href: "/lachgas-merken/", label: "Merken", desc: "Wat openbare bronnen melden", icon: "tag" },
          { href: "/lachgascilinders/", label: "Cilinders en patronen", desc: "Risico’s en afval", icon: "cylinder" },
          { href: "/lachgascilinder-gevonden/", label: "Cilinder gevonden?", desc: "Zo handel je veilig", icon: "recycle" },
          { href: "/bronnen/", label: "Bronregister", desc: "Alle bronnen, openbaar", icon: "fileText" },
        ],
      },
      {
        id: "amsterdam",
        label: "Amsterdam",
        icon: "landmark",
        intro: "Hoe lachgas de stad raakt: regels, overlast, afval en gezondheid.",
        overview: { href: "/amsterdam/", label: "Lachgas in Amsterdam" },
        links: [
          { href: "/amsterdam/", label: "Lachgas in Amsterdam", desc: "De lokale context", icon: "landmark" },
          { href: "/lachgas-regels-amsterdam/", label: "Amsterdamse regels", desc: "Opiumwet en APV", icon: "mapPin" },
          { href: "/lachgas-overlast-amsterdam/", label: "Overlast melden", desc: "Wie optreedt en hoe je meldt", icon: "megaphone" },
          { href: "/nieuws/", label: "Nieuws en ontwikkelingen", desc: "Tijdlijn sinds 2019", icon: "newspaper" },
          { href: "/en/visiting-amsterdam/", label: "Visiting Amsterdam", desc: "Guide for tourists (English)", icon: "plane" },
          { href: "/over-ons/", label: "Over ons", desc: "Onafhankelijk en niet-commercieel", icon: "info" },
        ],
      },
    ],
    help: { href: "/hulp/", label: "Hulp" },
    emergency: { label: "Bij nood: bel 112", text: "Bewusteloos, ademhalingsproblemen of een ongeval" },
    sections: { browse: "Onderwerpen", more: "Snel naar" },
  },
  en: {
    groups: [
      {
        id: "guide",
        label: "Guide",
        icon: "compass",
        intro: "The short answers for visitors to Amsterdam.",
        overview: { href: "/en/visiting-amsterdam/", label: "Visiting Amsterdam" },
        links: [
          { href: "/en/is-laughing-gas-legal-in-amsterdam/", label: "Is it legal?", desc: "The one-minute answer", icon: "scale" },
          { href: "/en/visiting-amsterdam/", label: "Visiting Amsterdam", desc: "Five things to know", icon: "plane" },
          { href: "/en/nitrous-oxide-laws-netherlands/", label: "Dutch law", desc: "The 2023 ban explained", icon: "fileText" },
        ],
      },
      {
        id: "health",
        label: "Health",
        icon: "heartPulse",
        intro: "Risks, symptoms and where to get help in Amsterdam.",
        overview: { href: "/en/nitrous-oxide-health-risks/", label: "Health risks" },
        links: [
          { href: "/en/nitrous-oxide-health-risks/", label: "Health risks", desc: "From fainting to nerve damage", icon: "heartPulse" },
          { href: "/en/nitrous-oxide-health-risks/#help", label: "Getting help", desc: "Emergency and medical help", icon: "lifeBuoy" },
        ],
      },
      {
        id: "knowledge",
        label: "Knowledge",
        icon: "bookOpen",
        intro: "Types, brands and cylinders — factual, never promotional.",
        overview: { href: "/en/nitrous-oxide-types/", label: "Types and uses" },
        links: [
          { href: "/en/nitrous-oxide-types/", label: "Types and uses", desc: "Medical, culinary, technical", icon: "flask" },
          { href: "/en/nitrous-oxide-brands/", label: "Brands", desc: "What public sources report", icon: "tag" },
          { href: "/en/nitrous-oxide-cylinders/", label: "Cylinders", desc: "Found one? What to do", icon: "cylinder" },
          { href: "/en/sources/", label: "Source register", desc: "Every source, in public", icon: "library" },
          { href: "/en/about/", label: "About us", desc: "Independent and non-commercial", icon: "info" },
        ],
      },
    ],
    help: { href: "/en/nitrous-oxide-health-risks/#help", label: "Help" },
    emergency: { label: "Emergency: call 112", text: "Unconscious, breathing problems or an accident" },
    sections: { browse: "Topics", more: "Quick links" },
  },
};
