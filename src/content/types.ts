// Content model for the editorial system. Content lives in version-controlled
// TypeScript modules, so every change is reviewable in Git and checked by
// `npm run content:audit`. Only erasable TypeScript syntax is used here so the
// audit script can run these files directly with Node's type stripping.

export type Locale = "nl" | "en";

/** Editorial workflow. Only `published` pages are indexable by search engines. */
export type Status =
  | "draft"
  | "fact-check"
  | "legal-review"
  | "medical-review"
  | "approved"
  | "published"
  | "needs-update";

export type Category =
  | "wetgeving"
  | "gezondheid"
  | "soorten"
  | "merken"
  | "cilinders"
  | "amsterdam"
  | "hulp"
  | "toeristen"
  | "nieuws"
  | "redactie";

/**
 * Inline text supports two markers:
 *   [label](/internal/path/) or [label](https://external)  → link
 *   **text**                                               → strong
 */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "callout"; tone: "info" | "warning" | "help"; title: string; text: string }
  | { type: "facts"; items: { label: string; value: string }[] }
  | { type: "steps"; items: { title: string; text: string }[] };

export interface Faq {
  q: string;
  a: string;
}

export interface Page {
  /** Stable id, used for translations, related links and the audit. */
  id: string;
  locale: Locale;
  /** Path with leading and trailing slash, e.g. "/lachgas-verbod/". */
  path: string;
  category: Category;
  /** Short label above the title. */
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** The direct answer shown at the top of the page. */
  answer: string;
  body: Block[];
  faq?: Faq[];
  /** Ids from the source register. */
  sources: string[];
  /** Ids of related pages in the same locale. */
  related: string[];
  /** Id of the equivalent page in the other locale (drives hreflang). */
  translationOf?: string;
  status: Status;
  /** ISO dates (YYYY-MM-DD). */
  published: string;
  reviewed: string;
  nextReview: string;
  /** Known gaps or points still to verify. Shown on the page. */
  uncertainties?: string[];
  /** Hide from the knowledge base listing (e.g. legal pages). */
  unlisted?: boolean;
}

export type SourceCheck = "full" | "summary" | "pending";

export interface Source {
  id: string;
  title: string;
  organisation: string;
  url: string;
  kind: "wetgeving" | "overheid" | "kennisinstituut" | "medisch" | "journalistiek" | "gemeente";
  /** Publication or last-updated date of the source, if known. */
  published?: string;
  /** Date the editors consulted the source. */
  accessed: string;
  /**
   * full    — the source itself was read
   * summary — only a search summary or excerpt was checked; read in full before publication
   * pending — not yet readable or reviewed; do not cite figures from it
   */
  check: SourceCheck;
  topics: string[];
  note?: string;
}
