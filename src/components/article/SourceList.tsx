import { ExternalLink } from "lucide-react";
import type { Locale, Source } from "@/content/types";
import { formatDate, ui } from "@/lib/site";

export const checkLabel: Record<Locale, Record<Source["check"], string>> = {
  nl: { full: "Volledig gelezen", summary: "Samenvatting gecontroleerd", pending: "Nog te beoordelen" },
  en: { full: "Read in full", summary: "Summary checked", pending: "Not yet reviewed" },
};

const checkStyle: Record<Source["check"], string> = {
  full: "bg-help-soft text-help",
  summary: "bg-mist text-navy-700",
  pending: "bg-alert-soft text-alert",
};

export function CheckBadge({ check, locale }: { check: Source["check"]; locale: Locale }) {
  return <span className={`rounded-full px-2 py-0.5 text-[11.5px] font-medium ${checkStyle[check]}`}>{checkLabel[locale][check]}</span>;
}

export function SourceList({ sources, locale }: { sources: Source[]; locale: Locale }) {
  const t = ui[locale];
  return (
    <section aria-labelledby="bronnen" className="mt-16">
      <h2 id="bronnen" className="text-[clamp(1.5rem,1.2rem+1vw,1.875rem)] font-semibold tracking-tight text-ink">
        {t.sources}
      </h2>
      <ol className="mt-6 space-y-3">
        {sources.map((s, i) => (
          <li key={s.id} className="grid grid-cols-[28px_1fr] gap-3 rounded-2xl border border-line bg-paper p-4 text-[14.5px]">
            <span className="font-mono text-[12px] text-muted tabular">{String(i + 1).padStart(2, "0")}</span>
            <div className="min-w-0">
              <p className="eyebrow text-[10.5px] text-muted">{s.organisation}</p>
              <a href={s.url} rel="noopener noreferrer" className="inline-link mt-1 inline-flex items-start gap-1.5 break-words font-medium">
                {s.title}
                <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              </a>
              <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[12.5px] text-muted">
                {s.published && <span>{s.published.length === 10 ? formatDate(s.published, locale) : s.published}</span>}
                <span>
                  {t.accessed} {formatDate(s.accessed, locale)}
                </span>
                <CheckBadge check={s.check} locale={locale} />
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
