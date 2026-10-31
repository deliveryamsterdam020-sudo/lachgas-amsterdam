// Editorial audit: run with `npm run content:audit`.
// Checks the content model for broken references, overdue reviews, weakly
// verified sources and missing translations. Exits non-zero on errors so it
// can gate CI; warnings are informational.

import { pages, specialRoutes } from "../src/content/index.ts";
import { sources, sourceById } from "../src/content/sources.ts";
import type { Block, Page } from "../src/content/types.ts";

const today = new Date().toISOString().slice(0, 10);
const errors: string[] = [];
const warnings: string[] = [];

const knownPaths = new Set([...pages.map((p) => p.path), ...specialRoutes.map((r) => r.path)]);
const ids = new Set([...pages.map((p) => p.id), ...specialRoutes.map((r) => r.id)]);

const textOf = (b: Block): string[] => {
  switch (b.type) {
    case "p":
    case "h2":
    case "h3":
      return [b.text];
    case "list":
      return b.items;
    case "callout":
      return [b.title, b.text];
    case "facts":
      return b.items.map((i) => i.value);
    case "steps":
      return b.items.flatMap((i) => [i.title, i.text]);
  }
};

const LINK = /\[[^\]]+\]\(([^)\s]+)\)/g;

function auditPage(p: Page) {
  const where = `${p.locale.toUpperCase()} ${p.path}`;

  if (!p.path.startsWith("/") || !p.path.endsWith("/")) errors.push(`${where}: path must start and end with "/"`);
  if (p.locale === "en" && !p.path.startsWith("/en/")) errors.push(`${where}: English page outside /en/`);
  if (p.metaTitle.length > 70) warnings.push(`${where}: metaTitle is ${p.metaTitle.length} chars (aim ≤ 60–70)`);
  if (p.metaDescription.length > 170) warnings.push(`${where}: metaDescription is ${p.metaDescription.length} chars (aim ≤ 160)`);

  for (const id of p.sources) if (!sourceById.has(id)) errors.push(`${where}: unknown source "${id}"`);
  for (const id of p.related) if (!ids.has(id)) errors.push(`${where}: unknown related page "${id}"`);
  if (p.translationOf) {
    const t = pages.find((x) => x.id === p.translationOf) ?? specialRoutes.find((x) => x.id === p.translationOf);
    if (!t) errors.push(`${where}: unknown translation "${p.translationOf}"`);
    else if (t.locale === p.locale) errors.push(`${where}: translation has the same locale`);
    else if (t.translationOf !== p.id) errors.push(`${where}: translation "${t.id}" does not link back (hreflang must be reciprocal)`);
  }

  const headingIds = new Set<string>();
  const texts = [p.answer, ...p.body.flatMap(textOf), ...(p.faq ?? []).flatMap((f) => [f.q, f.a])];
  for (const b of p.body) {
    if (b.type === "h2") {
      if (headingIds.has(b.id)) errors.push(`${where}: duplicate heading id "${b.id}"`);
      headingIds.add(b.id);
    }
  }
  for (const t of texts) {
    for (const m of t.matchAll(LINK)) {
      const href = m[1];
      if (/^https?:\/\//.test(href)) continue;
      const [path, hash] = href.split("#");
      if (!knownPaths.has(path)) errors.push(`${where}: broken internal link ${href}`);
      if (hash && path === p.path && !headingIds.has(hash)) errors.push(`${where}: missing anchor #${hash}`);
    }
  }

  if (p.nextReview < today) errors.push(`${where}: review overdue since ${p.nextReview}`);
  if (p.status === "needs-update") warnings.push(`${where}: marked "needs-update"`);
  if (p.status === "published") {
    const weak = p.sources.map((id) => sourceById.get(id)).filter((s) => s && s.check !== "full");
    if (weak.length) errors.push(`${where}: published while citing sources not read in full: ${weak.map((s) => s!.id).join(", ")}`);
    if (p.uncertainties?.length) errors.push(`${where}: published with open uncertainties`);
  }
  if (p.category !== "redactie" && p.sources.length === 0) errors.push(`${where}: no sources`);
}

for (const p of pages) auditPage(p);

const pathCounts = new Map<string, number>();
for (const p of pages) pathCounts.set(p.path, (pathCounts.get(p.path) ?? 0) + 1);
for (const [path, n] of pathCounts) if (n > 1) errors.push(`duplicate path ${path}`);

for (const s of sources) {
  if (!pages.some((p) => p.sources.includes(s.id))) warnings.push(`source "${s.id}" is not cited by any page`);
  if (s.check === "pending") warnings.push(`source "${s.id}" not yet reviewed — do not cite figures from it`);
  const ageDays = (Date.parse(today) - Date.parse(s.accessed)) / 86_400_000;
  if (ageDays > 180) warnings.push(`source "${s.id}" last consulted ${Math.round(ageDays)} days ago`);
}

// ── Report ──────────────────────────────────────────────────────────────────
const byStatus = new Map<string, string[]>();
for (const p of pages) byStatus.set(p.status, [...(byStatus.get(p.status) ?? []), p.path]);

console.log(`\nContent audit — ${today}`);
console.log(`${pages.length} pages · ${sources.length} sources\n`);
console.log("Status overview");
for (const [status, list] of byStatus) console.log(`  ${status.padEnd(15)} ${list.length}  ${list.join(" ")}`);

const upcoming = pages.filter((p) => p.nextReview >= today).sort((a, b) => a.nextReview.localeCompare(b.nextReview)).slice(0, 5);
console.log("\nNext reviews due");
for (const p of upcoming) console.log(`  ${p.nextReview}  ${p.path}`);

if (warnings.length) {
  console.log(`\nWarnings (${warnings.length})`);
  for (const w of warnings) console.log(`  ! ${w}`);
}
if (errors.length) {
  console.log(`\nErrors (${errors.length})`);
  for (const e of errors) console.log(`  ✗ ${e}`);
  process.exit(1);
}
console.log("\n✓ No errors\n");
