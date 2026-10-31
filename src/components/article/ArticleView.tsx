import Link from "next/link";
import { ArrowUpRight, CalendarCheck, CircleDashed, Plus, UsersRound } from "lucide-react";
import type { Page } from "@/content/types";
import { relatedPages, sourcesFor } from "@/content";
import { categoryLabel, formatDate, statusLabel, ui } from "@/lib/site";
import { articleLd, breadcrumbLd, graph } from "@/lib/seo";
import { Blocks } from "./Blocks";
import { PageHero, type Crumb } from "./PageHero";
import { SourceList } from "./SourceList";
import { JsonLd } from "@/components/seo/JsonLd";
import { Inline } from "@/components/ui/Inline";
import { Reveal } from "@/components/ui/Reveal";

const SEEDS: Record<string, number> = { wetgeving: 3, gezondheid: 8, soorten: 13, merken: 21, cilinders: 34, amsterdam: 55, hulp: 89, toeristen: 144, redactie: 233 };

export function ArticleView({ page }: { page: Page }) {
  const t = ui[page.locale];
  const home = page.locale === "nl" ? "/" : "/en/";
  const crumbs: Crumb[] = [{ name: t.home, path: home }];
  // Nested pages (e.g. a brand page) get their parent as an intermediate crumb.
  const segments = page.path.split("/").filter(Boolean);
  if (segments.length > (page.locale === "en" ? 2 : 1)) {
    const parentPath = `/${segments.slice(0, -1).join("/")}/`;
    const parent = relatedPages(page).find((p) => p.path === parentPath);
    if (parent) crumbs.push({ name: parent.title, path: parent.path });
  }
  crumbs.push({ name: page.title, path: page.path });

  const toc = page.body.filter((b) => b.type === "h2");
  const sources = sourcesFor(page);
  const related = relatedPages(page);
  const pending = page.status !== "published";

  return (
    <article>
      <JsonLd data={graph(articleLd(page, sources.map((s) => s.url)), breadcrumbLd(crumbs))} />
      <PageHero crumbs={crumbs} eyebrow={page.eyebrow} title={page.title} seed={SEEDS[page.category]} />

      <div className="relative mx-auto -mt-24 max-w-7xl px-4 sm:px-6 lg:-mt-32 lg:px-8">
        {/* Direct answer */}
        <section
          aria-labelledby="kort-antwoord"
          style={{ ["--rise-delay" as string]: "160ms" }}
          className="rise relative max-w-4xl overflow-hidden rounded-3xl bg-paper p-6 shadow-[0_30px_80px_-30px_rgba(16,28,50,0.35)] ring-1 ring-ink/5 sm:p-10">
            <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-lamp to-navy-700" />
            <h2 id="kort-antwoord" className="eyebrow text-muted">
              {t.shortAnswer}
            </h2>
            <p className="mt-4 text-pretty text-[clamp(1.15rem,1rem+0.6vw,1.45rem)] font-medium leading-[1.5] tracking-[-0.01em] text-ink">
              {page.answer}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-5 text-[13px] text-muted">
              <span className="flex items-center gap-1.5">
                <UsersRound className="h-4 w-4" aria-hidden="true" />
                {t.author}
              </span>
              <span>
                {t.published}: <time dateTime={page.published}>{formatDate(page.published, page.locale)}</time>
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                {t.reviewed}: <time dateTime={page.reviewed}>{formatDate(page.reviewed, page.locale)}</time>
              </span>
              <span className="rounded-full bg-mist px-2.5 py-1 text-[12px] text-navy-700">{categoryLabel[page.locale][page.category]}</span>
              {pending && (
                <span className="flex items-center gap-1.5 rounded-full border border-alert/25 bg-alert-soft px-2.5 py-1 text-[12px] font-medium text-alert">
                  <CircleDashed className="h-3.5 w-3.5" aria-hidden="true" />
                  {statusLabel[page.locale][page.status]}
                </span>
              )}
            </div>
        </section>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20">
          <div className="min-w-0 max-w-[70ch]">
            <Blocks blocks={page.body} />

            {page.uncertainties?.length ? (
              <aside className="mt-12 rounded-2xl border border-dashed border-slate/50 p-5 text-[14.5px] text-graphite">
                <p className="flex items-center gap-2 font-semibold text-ink">
                  <CircleDashed className="h-4 w-4 text-muted" aria-hidden="true" />
                  {t.uncertainties}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {page.uncertainties.map((u) => (
                    <li key={u}>{u}</li>
                  ))}
                </ul>
              </aside>
            ) : null}

            {page.faq?.length ? (
              <section aria-labelledby="faq" className="mt-16">
                <h2 id="faq" className="text-[clamp(1.5rem,1.2rem+1vw,1.875rem)] font-semibold tracking-tight text-ink">
                  {t.faq}
                </h2>
                <div className="mt-6 divide-y divide-line border-y border-line">
                  {page.faq.map((f) => (
                    <details key={f.q} className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[17px] font-medium text-ink [&::-webkit-details-marker]:hidden">
                        {f.q}
                        <Plus className="h-5 w-5 shrink-0 text-muted transition-transform duration-300 group-open:rotate-45" aria-hidden="true" />
                      </summary>
                      <p className="pb-6 pr-10 text-[16px] leading-relaxed text-graphite">
                        <Inline text={f.a} />
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            ) : null}

            {sources.length > 0 && <SourceList sources={sources} locale={page.locale} />}

            <p className="mt-12 text-[13px] text-muted">{t.disclaimer}</p>
          </div>

          {toc.length > 2 && (
            <aside className="hidden lg:block">
              <nav aria-label={t.onThisPage} className="sticky top-28">
                <p className="eyebrow text-muted">{t.onThisPage}</p>
                <ol className="mt-4 space-y-1 border-l border-line">
                  {toc.map((h) =>
                    h.type === "h2" ? (
                      <li key={h.id}>
                        <a href={`#${h.id}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-[14px] leading-snug text-muted transition-colors hover:border-ink hover:text-ink">
                          {h.text}
                        </a>
                      </li>
                    ) : null,
                  )}
                </ol>
              </nav>
            </aside>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <section aria-labelledby="related" className="mx-auto mt-24 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8">
          <h2 id="related" className="eyebrow text-muted">
            {t.related}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r, i) => (
              <Reveal as="li" key={r.id} delay={i * 70}>
                <Link
                  href={r.path}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-paper p-6 transition-all duration-500 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_20px_50px_-25px_rgba(16,28,50,0.35)]"
                >
                  <div>
                    <p className="eyebrow text-[10.5px] text-muted">{categoryLabel[r.locale][r.category]}</p>
                    <p className="mt-3 text-[17px] font-semibold leading-snug tracking-tight text-ink">{r.title}</p>
                  </div>
                  <ArrowUpRight className="mt-8 h-5 w-5 text-muted transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
