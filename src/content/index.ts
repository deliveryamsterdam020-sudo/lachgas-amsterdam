import type { Locale, Page, Status } from "./types.ts";
import { nlPages } from "./nl.ts";
import { enPages } from "./en.ts";
import { sourceById } from "./sources.ts";

export const pages: Page[] = [...nlPages, ...enPages];

const byId = new Map(pages.map((p) => [p.id, p]));
const byPath = new Map(pages.map((p) => [p.path, p]));

/**
 * Routes that are not article pages but still belong in navigation, the
 * language switch and the sitemap. `status` follows the same indexing rule.
 */
export interface SpecialRoute {
  id: string;
  locale: Locale;
  path: string;
  translationOf?: string;
  status: Status;
  reviewed: string;
}

export const specialRoutes: SpecialRoute[] = [
  { id: "home", locale: "nl", path: "/", translationOf: "en-home", status: "legal-review", reviewed: "2026-10-31" },
  { id: "en-home", locale: "en", path: "/en/", translationOf: "home", status: "legal-review", reviewed: "2026-10-31" },
  { id: "kennisbank", locale: "nl", path: "/kennisbank/", status: "approved", reviewed: "2026-10-31" },
  { id: "bronnen", locale: "nl", path: "/bronnen/", translationOf: "en-sources", status: "approved", reviewed: "2026-10-31" },
  { id: "en-sources", locale: "en", path: "/en/sources/", translationOf: "bronnen", status: "approved", reviewed: "2026-10-31" },
];

const specialById = new Map(specialRoutes.map((r) => [r.id, r]));

/** Only content that has passed every review step may be indexed. */
export function isIndexable(status: Status): boolean {
  return status === "published";
}

export function getPageByPath(path: string): Page | undefined {
  return byPath.get(path);
}

export function getPage(id: string): Page | undefined {
  return byId.get(id);
}

export function pagesFor(locale: Locale): Page[] {
  return pages.filter((p) => p.locale === locale);
}

export function relatedPages(page: Page): Page[] {
  return page.related.map((id) => byId.get(id)).filter((p): p is Page => !!p && p.id !== page.id);
}

export function sourcesFor(page: Page) {
  return page.sources.map((id) => sourceById.get(id)).filter((s) => s !== undefined);
}

/** Path of the equivalent route in the other locale, if one exists. */
export function alternatePath(id: string): string | undefined {
  const target = byId.get(id)?.translationOf ?? specialById.get(id)?.translationOf;
  if (!target) return undefined;
  return byId.get(target)?.path ?? specialById.get(target)?.path;
}

/** Map of every path to its translation, used by the language switch. */
export function alternateMap(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const r of [...pages, ...specialRoutes]) {
    const alt = alternatePath(r.id);
    if (alt) map[r.path] = alt;
  }
  return map;
}

/** Articles that sources cite, for the source register. */
export function pagesCitingSource(sourceId: string): Page[] {
  return pages.filter((p) => p.sources.includes(sourceId));
}

/** Article segments for generateStaticParams, e.g. "/lachgas-merken/fastgas/" → ["lachgas-merken", "fastgas"]. */
export function slugSegments(page: Page): string[] {
  const path = page.locale === "en" ? page.path.replace(/^\/en/, "") : page.path;
  return path.split("/").filter(Boolean);
}
