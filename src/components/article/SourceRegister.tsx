import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Locale, Source } from "@/content/types";
import { sources } from "@/content/sources";
import { pagesCitingSource } from "@/content";
import { formatDate } from "@/lib/site";
import { CheckBadge } from "./SourceList";

const kindLabel: Record<Locale, Record<Source["kind"], string>> = {
  nl: {
    wetgeving: "Wet- en regelgeving",
    overheid: "Overheid",
    kennisinstituut: "Kennisinstituten",
    medisch: "Medisch",
    gemeente: "Gemeenten",
    journalistiek: "Journalistiek",
  },
  en: {
    wetgeving: "Legislation",
    overheid: "Government",
    kennisinstituut: "Knowledge institutes",
    medisch: "Medical",
    gemeente: "Municipalities",
    journalistiek: "Journalism",
  },
};

const ORDER: Source["kind"][] = ["wetgeving", "overheid", "kennisinstituut", "medisch", "gemeente", "journalistiek"];

/** The public source register: every source, how well it was checked, and which pages cite it. */
export function SourceRegister({ locale }: { locale: Locale }) {
  const t =
    locale === "nl"
      ? { accessed: "Geraadpleegd", published: "Publicatie", citedBy: "Gebruikt in", none: "Nog niet gekoppeld" }
      : { accessed: "Accessed", published: "Published", citedBy: "Cited in", none: "Not yet linked" };
  return (
    <div className="space-y-16">
      {ORDER.map((kind) => {
        const list = sources.filter((s) => s.kind === kind);
        if (!list.length) return null;
        return (
          <section key={kind} aria-labelledby={`k-${kind}`}>
            <h2 id={`k-${kind}`} className="flex items-baseline gap-3 text-[clamp(1.4rem,1.2rem+0.8vw,1.75rem)] font-semibold tracking-tight text-ink">
              {kindLabel[locale][kind]}
              <span className="font-mono text-[13px] font-normal text-muted tabular">{list.length}</span>
            </h2>
            <ul className="mt-6 divide-y divide-line overflow-hidden rounded-[24px] border border-line bg-paper">
              {list.map((s) => {
                const citing = pagesCitingSource(s.id).filter((p) => p.locale === locale);
                return (
                  <li key={s.id} className="grid gap-4 p-6 lg:grid-cols-[1.4fr_1fr]">
                    <div className="min-w-0">
                      <p className="eyebrow text-[10.5px] text-muted">{s.organisation}</p>
                      <a href={s.url} rel="noopener noreferrer" className="inline-link mt-1.5 inline-flex items-start gap-1.5 break-words text-[16px] font-medium">
                        {s.title}
                        <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      </a>
                      {s.note && <p className="mt-2 text-[14px] leading-relaxed text-muted">{s.note}</p>}
                      <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12.5px] text-muted">
                        {s.published && (
                          <span>
                            {t.published}: {s.published.length === 10 ? formatDate(s.published, locale) : s.published}
                          </span>
                        )}
                        <span>
                          {t.accessed}: {formatDate(s.accessed, locale)}
                        </span>
                        <CheckBadge check={s.check} locale={locale} />
                      </p>
                    </div>
                    <div>
                      <p className="eyebrow text-[10.5px] text-muted">{t.citedBy}</p>
                      {citing.length ? (
                        <ul className="mt-2 flex flex-wrap gap-2">
                          {citing.map((p) => (
                            <li key={p.id}>
                              <Link href={p.path} className="inline-block rounded-full bg-mist px-3 py-1 text-[12.5px] font-medium text-navy-700 hover:bg-navy-700 hover:text-white">
                                {p.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-2 text-[13px] text-muted">{t.none}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
