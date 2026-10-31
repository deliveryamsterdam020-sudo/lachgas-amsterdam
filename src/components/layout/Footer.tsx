import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { GableSkyline } from "@/components/visual/GableSkyline";
import { footerNav, ui } from "@/lib/site";
import type { Locale } from "@/content/types";

export function Footer({ locale }: { locale: Locale }) {
  const t = ui[locale];
  return (
    <footer className="on-dark relative mt-auto bg-ink text-white">
      <GableSkyline seed={locale === "nl" ? 17 : 23} className="absolute -top-[59px] left-0 h-[60px] w-full text-ink" />
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/70">
              {locale === "nl"
                ? "Het onafhankelijke, niet-commerciële informatieplatform over lachgas in Amsterdam. Wetgeving, gezondheid en publieke veiligheid — helder uitgelegd en controleerbaar onderbouwd."
                : "The independent, non-commercial information platform on nitrous oxide in Amsterdam. Law, health and public safety — clearly explained and fully sourced."}
            </p>
            <p className="mt-6 flex max-w-sm items-start gap-2.5 rounded-2xl border border-white/10 bg-white/5 p-4 text-[13px] leading-relaxed text-white/75">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-lamp" aria-hidden="true" />
              {t.notGov}
            </p>
          </div>
          <nav aria-label={locale === "nl" ? "Footer" : "Footer"} className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav[locale].map((col) => (
              <div key={col.title}>
                <h2 className="eyebrow text-white/60">{col.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-[14px] text-white/80 transition-colors hover:text-white">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[12.5px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.disclaimer}</p>
          <p className="eyebrow text-[10.5px]">52.3676° N · 4.9041° E</p>
        </div>
      </div>
    </footer>
  );
}
