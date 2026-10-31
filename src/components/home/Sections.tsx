import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Ban, Check, ExternalLink, Scale } from "lucide-react";
import { CanalRings } from "@/components/visual/CanalRings";
import { GableSkyline } from "@/components/visual/GableSkyline";
import { Reveal } from "@/components/ui/Reveal";
import { Inline } from "@/components/ui/Inline";
import { BanCounter } from "./BanCounter";
import { HubCard, type HubItem } from "./HubCard";
import type { Locale, Page } from "@/content/types";
import { categoryLabel, formatDate, ui } from "@/lib/site";

// ── Shared section chrome ──────────────────────────────────────────────────

export function SectionHead({ index, eyebrow, title, intro, dark = false }: { index: string; eyebrow: string; title: ReactNode; intro?: ReactNode; dark?: boolean }) {
  return (
    <Reveal className="max-w-3xl">
      <p className={`eyebrow flex items-center gap-3 ${dark ? "text-lamp" : "text-muted"}`}>
        <span className={`tabular ${dark ? "text-white/55" : "text-muted"}`}>{index}</span>
        <span aria-hidden="true" className={`h-px w-8 ${dark ? "bg-white/25" : "bg-ink/20"}`} />
        {eyebrow}
      </p>
      <h2 className={`mt-5 text-balance text-[clamp(2rem,1.4rem+2.6vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.035em] ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {intro && <p className={`mt-6 max-w-2xl text-pretty text-[17px] leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>{intro}</p>}
    </Reveal>
  );
}

const container = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

// ── 1. Hero ────────────────────────────────────────────────────────────────

export function Hero({
  kicker,
  subtitle,
  text,
  primary,
  secondary,
  scrollLabel,
}: {
  kicker: string;
  subtitle: string;
  text: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string; lang?: string };
  scrollLabel: string;
}) {
  return (
    <section className="on-dark grain relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-white">
      {/* On wide screens the scene shifts right so the bridge and its reflection sit beside the headline. */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 overflow-hidden">
        {/* Static scene plus a light layer with the animated reflections. The slow camera
            drift is a transform on the wrapper, so the browser composites it on the GPU. */}
        <div className="scene-drift absolute inset-0 lg:left-[16%]">
          {/* eslint-disable-next-line @next/next/no-img-element -- SVG scene; next/image adds nothing for SVG */}
          <img src="/canal-scene.svg" alt="" fetchPriority="high" className="absolute inset-0 h-full w-full" />
          {/* eslint-disable-next-line @next/next/no-img-element -- animated SVG overlay */}
          <img src="/canal-lights.svg" alt="" loading="lazy" className="absolute inset-0 h-full w-full" />
        </div>
      </div>
      {/* Overlays for legibility: a left vignette that hides the scene edge, and a short fade at the bottom */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,14,28,0.92)_0%,rgba(7,14,28,0.7)_38%,rgba(7,14,28,0.15)_70%,transparent_85%)] lg:bg-[linear-gradient(90deg,#070e1c_0%,#070e1c_20%,rgba(7,14,28,0.78)_36%,rgba(7,14,28,0.25)_56%,transparent_72%)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-[#070e1c]/90 to-transparent" />

      <div className={`${container} relative w-full pb-16 pt-32 sm:pb-24 lg:pb-28`}>
        <p className="eyebrow rise flex items-center gap-3 text-lamp">
          <span aria-hidden="true" className="h-px w-10 bg-lamp/60" />
          {kicker}
        </p>
        <h1 className="display rise-soft mt-6 text-[clamp(3.3rem,1.2rem+9.4vw,10.5rem)]" style={{ ["--rise-delay" as string]: "90ms" }}>
          LACHGAS
          <br />
          <span className="text-white/90">AMSTERDAM</span>
        </h1>
        <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(0,560px)_1fr] lg:items-end">
          <div className="rise-soft" style={{ ["--rise-delay" as string]: "180ms" }}>
            <p className="text-balance text-[clamp(1.25rem,1rem+1vw,1.75rem)] font-medium leading-snug tracking-[-0.015em]">{subtitle}</p>
            <p className="mt-4 max-w-xl text-[16.5px] leading-relaxed text-white/72">{text}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={primary.href}
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-mist"
              >
                {primary.label}
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
              </Link>
              <a
                href={secondary.href}
                hrefLang={secondary.lang}
                lang={secondary.lang}
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/30 px-6 py-3.5 text-[15px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                {secondary.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>
          <a href="#direct" className="eyebrow hidden items-center gap-3 justify-self-end text-[11px] text-white/50 transition-colors hover:text-white lg:flex">
            {scrollLabel}
            <span className="flex h-10 w-6 justify-center rounded-full border border-white/30 pt-2" aria-hidden="true">
              <span className="h-2 w-px animate-bounce bg-white/70" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ── 2. Direct answer ───────────────────────────────────────────────────────

export function DirectAnswer({ index, eyebrow, title, lead, items }: { index: string; eyebrow: string; title: string; lead: string; items: { k: string; v: string }[] }) {
  return (
    <section id="direct" className="scroll-mt-16 bg-canvas py-24 sm:py-32">
      <div className={container}>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <div>
            <SectionHead index={index} eyebrow={eyebrow} title={title} />
            <Reveal delay={100}>
              <p className="mt-8 text-pretty text-[clamp(1.15rem,1rem+0.5vw,1.375rem)] leading-[1.6] text-graphite">
                <Inline text={lead} />
              </p>
            </Reveal>
          </div>
          <dl className="grid content-start gap-3 sm:grid-cols-2">
            {items.map((it, i) => (
              <Reveal key={it.k} delay={i * 80} className="rounded-[22px] bg-paper p-7 ring-1 ring-line">
                <dt className="eyebrow text-[11px] text-muted">{it.k}</dt>
                <dd className="mt-3 text-[17px] font-medium leading-snug text-ink">
                  <Inline text={it.v} />
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

// ── 3. The ban ─────────────────────────────────────────────────────────────

export function BanExplainer({
  index,
  eyebrow,
  title,
  intro,
  banned,
  allowed,
  bannedTitle,
  allowedTitle,
  official,
  officialTitle,
  more,
}: {
  index: string;
  eyebrow: string;
  title: string;
  intro: string;
  banned: string[];
  allowed: { k: string; v: string }[];
  bannedTitle: string;
  allowedTitle: string;
  official: { href: string; label: string }[];
  officialTitle: string;
  more: { href: string; label: string };
}) {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className={container}>
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHead index={index} eyebrow={eyebrow} title={title} intro={intro} />
          <Reveal className="flex items-baseline gap-4 lg:justify-end">
            <span className="tabular text-[clamp(4.5rem,3rem+6vw,9rem)] font-semibold leading-none tracking-[-0.06em] text-ink">1.1</span>
            <span className="tabular text-[clamp(1.8rem,1.3rem+2vw,3rem)] font-semibold tracking-[-0.04em] text-slate">2023</span>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          <Reveal className="on-dark relative overflow-hidden rounded-[28px] bg-ink p-8 text-white sm:p-10">
            <Ban className="absolute -right-6 -top-6 h-40 w-40 text-white/[0.05]" aria-hidden="true" />
            <h3 className="eyebrow text-lamp">{bannedTitle}</h3>
            <ul className="mt-6 space-y-0 divide-y divide-white/10">
              {banned.map((b) => (
                <li key={b} className="flex items-center gap-4 py-4 text-[18px] font-medium">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10" aria-hidden="true">
                    <Ban className="h-3.5 w-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="rounded-[28px] bg-mist p-8 sm:p-10">
            <h3 className="eyebrow text-navy-700">{allowedTitle}</h3>
            <ul className="mt-6 divide-y divide-navy-700/10">
              {allowed.map((a) => (
                <li key={a.k} className="flex gap-4 py-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-paper text-navy-700" aria-hidden="true">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>
                    <span className="block text-[18px] font-medium text-ink">{a.k}</span>
                    <span className="mt-1 block text-[15px] leading-relaxed text-graphite">{a.v}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-5 flex flex-col gap-6 rounded-[28px] border border-line p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <Scale className="mt-1 h-6 w-6 shrink-0 text-navy-700" aria-hidden="true" />
            <div>
              <h3 className="text-[17px] font-semibold text-ink">{officialTitle}</h3>
              <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                {official.map((o) => (
                  <li key={o.href}>
                    <a href={o.href} rel="noopener noreferrer" className="inline-link inline-flex items-center gap-1.5 text-[15px]">
                      {o.label}
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link href={more.href} className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-ink px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-navy lg:self-center">
            {more.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

// ── 4. Counter ─────────────────────────────────────────────────────────────

export function CounterSection({ locale, index, eyebrow, title, note }: { locale: Locale; index: string; eyebrow: string; title: string; note: string }) {
  return (
    <section className="on-dark grain relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_120%,#1f3a5e_0%,transparent_70%)]" />
      <GableSkyline seed={61} className="absolute inset-x-0 bottom-0 h-24 w-full text-white/[0.04]" />
      <div className={`${container} relative`}>
        <SectionHead index={index} eyebrow={eyebrow} title={title} dark />
        <Reveal delay={120} className="mt-14">
          <BanCounter locale={locale} />
        </Reveal>
        <p className="mt-8 max-w-2xl text-[14px] leading-relaxed text-white/55">{note}</p>
      </div>
    </section>
  );
}

// ── 5. Amsterdam ───────────────────────────────────────────────────────────

export function AmsterdamSection({
  index,
  eyebrow,
  title,
  intro,
  timeline,
  more,
}: {
  index: string;
  eyebrow: string;
  title: string;
  intro: string;
  timeline: { year: string; title: string; text: string; source: { label: string; href: string } }[];
  more: { href: string; label: string };
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-navy py-24 text-white sm:py-32">
      <CanalRings className="pointer-events-none absolute -right-48 top-10 w-[900px] max-w-none text-mist opacity-25 lg:-right-24" />
      <div className={`${container} relative`}>
        <SectionHead index={index} eyebrow={eyebrow} title={title} intro={intro} dark />
        <ol className="relative mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {timeline.map((t, i) => (
            <Reveal as="li" key={t.year + t.title} delay={i * 90} className="flex flex-col rounded-[24px] border border-white/10 bg-ink/50 p-7 backdrop-blur-md">
              <span className="tabular text-[44px] font-semibold leading-none tracking-[-0.04em] text-lamp">{t.year}</span>
              <h3 className="mt-5 text-[18px] font-semibold leading-snug">{t.title}</h3>
              <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-white/70">{t.text}</p>
              <a href={t.source.href} rel="noopener noreferrer" className="eyebrow mt-6 inline-flex items-center gap-1.5 text-[10.5px] text-white/50 hover:text-white">
                {t.source.label}
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-10">
          <Link href={more.href} className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-ink hover:bg-mist">
            {more.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

// ── 6. Hub ─────────────────────────────────────────────────────────────────

export function HubSection({ index, eyebrow, title, intro, items }: { index: string; eyebrow: string; title: string; intro: string; items: HubItem[] }) {
  return (
    <section id="informatie" className="scroll-mt-16 bg-canvas py-24 sm:py-32">
      <div className={container}>
        <SectionHead index={index} eyebrow={eyebrow} title={title} intro={intro} />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.href} delay={(i % 4) * 70} className={item.art === "law" || item.art === "city" ? "sm:col-span-2" : item.art === "help" || item.art === "visitors" ? "lg:col-span-2" : ""}>
              <HubCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 7. Visiting Amsterdam ─────────────────────────────────────────────────

export function VisitingBand({ title, text, cta, href, lang }: { title: string; text: string; cta: string; href: string; lang?: string }) {
  return (
    <section lang={lang} className="on-dark grain relative isolate overflow-hidden bg-[#070e1c] text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(70%_90%_at_70%_100%,rgba(232,185,111,0.18)_0%,transparent_60%),linear-gradient(180deg,#0b1730_0%,#070e1c_100%)]" />
      {/* Skyline and its reflection on the water */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-1/2">
        <GableSkyline seed={77} className="absolute inset-x-0 top-0 h-28 w-full -translate-y-full text-[#1a2f52] sm:h-44" />
        <div className="absolute inset-x-0 top-0 h-px bg-lamp/30" />
        <GableSkyline seed={77} className="absolute inset-x-0 top-0 h-28 w-full -scale-y-100 text-[#152745] opacity-70 blur-[2px] sm:h-44" />
        <div className="ripple-lines absolute inset-y-0 left-0 w-[calc(100%+240px)] bg-[repeating-linear-gradient(180deg,transparent_0_6px,rgba(7,14,28,0.7)_6px_8px)]" />
      </div>
      <div className={`${container} relative py-28 sm:py-40`}>
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-lamp">English · Tourist guide</p>
          <h2 className="display mt-5 text-[clamp(2.8rem,1.6rem+5.4vw,6.5rem)]">{title}</h2>
          <p className="mt-6 max-w-xl text-[clamp(1.1rem,1rem+0.5vw,1.35rem)] leading-relaxed text-white/75">{text}</p>
          <a href={href} hrefLang="en" className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-mist">
            {cta}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

// ── 8. Knowledge base ─────────────────────────────────────────────────────

export function KnowledgeList({ pages, locale }: { pages: Page[]; locale: Locale }) {
  const t = ui[locale];
  return (
    <ul className="divide-y divide-line border-y border-line">
      {pages.map((p, i) => (
        <Reveal as="li" key={p.id} delay={(i % 3) * 60}>
          <Link href={p.path} className="group grid gap-3 py-7 transition-colors sm:grid-cols-[140px_1fr_auto] sm:gap-8">
            <span className="eyebrow pt-1.5 text-[11px] text-muted">{categoryLabel[locale][p.category]}</span>
            <span>
              <span className="block text-[clamp(1.2rem,1rem+0.7vw,1.6rem)] font-semibold leading-snug tracking-[-0.02em] text-ink transition-colors group-hover:text-navy-700">{p.title}</span>
              <span className="mt-2 block max-w-3xl text-[15px] leading-relaxed text-muted">{p.metaDescription}</span>
              <span className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[12.5px] text-muted">
                <span>{t.author}</span>
                <span>
                  {t.published} <time dateTime={p.published}>{formatDate(p.published, locale)}</time>
                </span>
                <span>
                  {t.reviewed} <time dateTime={p.reviewed}>{formatDate(p.reviewed, locale)}</time>
                </span>
              </span>
            </span>
            <ArrowUpRight className="hidden h-6 w-6 text-slate transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink sm:block" aria-hidden="true" />
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}

export function KnowledgeSection({ index, eyebrow, title, pages, locale, all }: { index: string; eyebrow: string; title: string; pages: Page[]; locale: Locale; all?: { href: string; label: string } }) {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className={container}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHead index={index} eyebrow={eyebrow} title={title} />
          {all && (
            <Link href={all.href} className="group inline-flex shrink-0 items-center gap-2 text-[15px] font-semibold text-ink">
              {all.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          )}
        </div>
        <div className="mt-12">
          <KnowledgeList pages={pages} locale={locale} />
        </div>
      </div>
    </section>
  );
}

// ── 9. Independence ───────────────────────────────────────────────────────

export function Independence({
  index,
  eyebrow,
  title,
  intro,
  principles,
  orgs,
  orgsTitle,
  links,
}: {
  index: string;
  eyebrow: string;
  title: string;
  intro: string;
  principles: { k: string; v: string }[];
  orgs: string[];
  orgsTitle: string;
  links: { href: string; label: string }[];
}) {
  return (
    <section className="bg-canvas pb-40 pt-24 sm:pb-48 sm:pt-32">
      <div className={container}>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <div>
            <SectionHead index={index} eyebrow={eyebrow} title={title} intro={intro} />
            <Reveal delay={100} className="mt-10 flex flex-wrap gap-3">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-[14.5px] font-medium text-ink transition-colors hover:bg-paper">
                  {l.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              ))}
            </Reveal>
          </div>
          <div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {principles.map((p, i) => (
                <Reveal as="li" key={p.k} delay={i * 70} className="rounded-[24px] bg-paper p-6 ring-1 ring-line">
                  <p className="tabular font-mono text-[12px] text-muted">{String(i + 1).padStart(2, "0")}</p>
                  <p className="mt-4 text-[17px] font-semibold text-ink">{p.k}</p>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-muted">{p.v}</p>
                </Reveal>
              ))}
            </ul>
            <Reveal className="mt-8">
              <p className="eyebrow text-[11px] text-muted">{orgsTitle}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {orgs.map((o) => (
                  <li key={o} className="rounded-full bg-mist px-3.5 py-1.5 text-[13px] font-medium text-navy-700">
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
