"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Compass,
  Cylinder,
  FileText,
  FlaskConical,
  Globe,
  HeartPulse,
  Info,
  Landmark,
  Megaphone,
  Newspaper,
  Library,
  LifeBuoy,
  MapPin,
  Package,
  Phone,
  Plane,
  Recycle,
  Repeat,
  Scale,
  Tag,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import type { Locale } from "@/content/types";
import type { IconKey, Menu, MenuGroup } from "@/lib/menu";

const ICONS: Record<IconKey, LucideIcon> = {
  scale: Scale,
  mapPin: MapPin,
  package: Package,
  heartPulse: HeartPulse,
  activity: Activity,
  lifeBuoy: LifeBuoy,
  flask: FlaskConical,
  tag: Tag,
  cylinder: Cylinder,
  recycle: Recycle,
  library: Library,
  landmark: Landmark,
  fileText: FileText,
  bookOpen: BookOpen,
  plane: Plane,
  info: Info,
  compass: Compass,
  repeat: Repeat,
  megaphone: Megaphone,
  newspaper: Newspaper,
};

interface Props {
  locale: Locale;
  menu: Menu;
  altMap: Record<string, string>;
  labels: { skip: string; menu: string; close: string; langLabel: string; langShort: string };
}

const withSlash = (p: string) => (p.endsWith("/") ? p : `${p}/`);
const pathOf = (href: string) => href.split("#")[0];

function IconTile({ icon, tone = "ink", size = "md" }: { icon: IconKey; tone?: "ink" | "mist" | "help"; size?: "sm" | "md" }) {
  const Icon = ICONS[icon];
  const tones = { ink: "bg-ink text-white", mist: "bg-mist text-navy-700", help: "bg-help text-white" };
  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center ${size === "sm" ? "h-8 w-8 rounded-[9px]" : "h-10 w-10 rounded-[12px]"} ${tones[tone]}`}
    >
      <Icon className={size === "sm" ? "h-4 w-4" : "h-[18px] w-[18px]"} strokeWidth={1.8} />
    </span>
  );
}

export function Header({ locale, menu, altMap, labels }: Props) {
  const pathname = withSlash(usePathname() ?? "/");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [panel, setPanel] = useState<string | null>(null);
  const hoverTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen && !panel) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setPanel(null);
      }
    };
    document.addEventListener("keydown", onKey);
    if (mobileOpen) document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen, panel]);

  const closeAll = () => {
    window.clearTimeout(hoverTimer.current);
    setMobileOpen(false);
    setPanel(null);
  };
  // Small delays make hover intent feel deliberate, like a native menu bar.
  const hoverOpen = (id: string | null) => {
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setPanel(id), id ? 90 : 160);
  };

  const otherLocale = locale === "nl" ? "en" : "nl";
  const altHref = altMap[pathname] ?? (locale === "nl" ? "/en/" : "/");
  const home = locale === "nl" ? "/" : "/en/";
  // Frosted white whenever the page is scrolled or a menu is open; otherwise it floats over the dark hero.
  const light = scrolled || mobileOpen || panel !== null;
  const activeGroup = menu.groups.find((g) => g.links.some((l) => pathOf(l.href) === pathname))?.id;
  const openGroup = menu.groups.find((g) => g.id === panel);

  return (
    <>
      <a
        href="#inhoud"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
      >
        {labels.skip}
      </a>

      <header
        onMouseLeave={() => hoverOpen(null)}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          light
            ? `${panel ? "bg-paper" : "bg-paper/80"} text-ink shadow-[0_1px_0_rgba(16,28,50,0.08)] backdrop-blur-2xl backdrop-saturate-150`
            : "on-dark bg-gradient-to-b from-[#070e1c]/60 to-transparent text-white"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <Link href={home} aria-label="Lachgas Amsterdam — home" className="shrink-0" onClick={closeAll}>
            <Logo tone={light ? "dark" : "light"} />
          </Link>

          <nav aria-label={locale === "nl" ? "Hoofdnavigatie" : "Main navigation"} className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {menu.groups.map((g) => {
                const open = panel === g.id;
                return (
                  <li key={g.id} onMouseEnter={() => hoverOpen(g.id)}>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={`panel-${g.id}`}
                      onClick={() => {
                        window.clearTimeout(hoverTimer.current);
                        setPanel(open ? null : g.id);
                      }}
                      className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors ${
                        light
                          ? open || activeGroup === g.id
                            ? "bg-ink/[0.06] text-ink"
                            : "text-graphite hover:bg-ink/[0.05]"
                          : activeGroup === g.id
                            ? "bg-white/15 text-white"
                            : "text-white/85 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {g.label}
                      <ChevronDown className={`h-3.5 w-3.5 opacity-60 transition-transform duration-300 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
                    </button>
                  </li>
                );
              })}
              <li onMouseEnter={() => hoverOpen(null)}>
                <Link
                  href={menu.help.href}
                  onClick={closeAll}
                  className={`ml-1 flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors ${
                    light ? "bg-help-soft text-help hover:bg-help hover:text-white" : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  <LifeBuoy className="h-4 w-4" aria-hidden="true" />
                  {menu.help.label}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={altHref}
              hrefLang={otherLocale}
              lang={otherLocale}
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[13px] font-medium transition-colors ${
                light ? "border-ink/10 text-ink hover:bg-ink/[0.04]" : "border-white/25 text-white hover:bg-white/10"
              }`}
            >
              <Globe className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">{labels.langLabel}</span>
              <span className="sm:hidden">{labels.langShort}</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className={`relative flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${light ? "text-ink hover:bg-ink/5" : "text-white hover:bg-white/10"}`}
            >
              <span className="sr-only">{mobileOpen ? labels.close : labels.menu}</span>
              {/* Two-line burger that morphs into a cross */}
              <span aria-hidden="true" className={`absolute h-[1.5px] w-[18px] rounded bg-current transition-transform duration-300 ${mobileOpen ? "rotate-45" : "-translate-y-[4px]"}`} />
              <span aria-hidden="true" className={`absolute h-[1.5px] w-[18px] rounded bg-current transition-transform duration-300 ${mobileOpen ? "-rotate-45" : "translate-y-[4px]"}`} />
            </button>
          </div>
        </div>

        {openGroup && <Flyout group={openGroup} onNavigate={closeAll} pathname={pathname} />}
      </header>

      {/* Dim and blur the page behind an open flyout */}
      <div
        aria-hidden="true"
        onClick={() => setPanel(null)}
        className={`fixed inset-0 z-40 hidden bg-ink/25 backdrop-blur-sm transition-opacity duration-300 lg:block ${panel ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />

      {/* Mobile sheet: grouped lists with icon tiles, in the manner of iOS Settings */}
      <div id="mobile-menu" hidden={!mobileOpen} className="fixed inset-0 z-40 overflow-y-auto bg-canvas px-4 pb-12 pt-20 sm:px-6 lg:hidden">
        <nav aria-label={locale === "nl" ? "Mobiele navigatie" : "Mobile navigation"} className="mx-auto max-w-xl space-y-7">
          {menu.groups.map((g, gi) => (
            <section key={g.id} className="rise" style={{ ["--rise-delay" as string]: `${gi * 60}ms` }}>
              <h2 className="eyebrow mb-2.5 px-1 text-[11px] text-muted">{g.label}</h2>
              <ul className="divide-y divide-line overflow-hidden rounded-[20px] bg-paper ring-1 ring-line">
                {g.links.map((l) => {
                  const current = pathOf(l.href) === pathname;
                  return (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        onClick={closeAll}
                        aria-current={current ? "page" : undefined}
                        className="flex items-center gap-3.5 px-4 py-3.5 transition-colors active:bg-mist"
                      >
                        <IconTile icon={l.icon} tone={l.icon === "lifeBuoy" ? "help" : current ? "ink" : "mist"} size="sm" />
                        <span className="min-w-0 flex-1">
                          <span className="block text-[16px] font-medium leading-tight text-ink">{l.label}</span>
                          <span className="mt-0.5 block truncate text-[13px] text-muted">{l.desc}</span>
                        </span>
                        <ChevronRight className="h-4 w-4 shrink-0 text-slate" aria-hidden="true" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}

          <section className="rise space-y-3" style={{ ["--rise-delay" as string]: `${menu.groups.length * 60}ms` }}>
            <a href="tel:112" className="flex items-center gap-3.5 rounded-[20px] bg-ink p-4 text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-white/10" aria-hidden="true">
                <Phone className="h-[18px] w-[18px]" />
              </span>
              <span>
                <span className="block text-[16px] font-semibold">{menu.emergency.label}</span>
                <span className="block text-[13px] text-white/70">{menu.emergency.text}</span>
              </span>
            </a>
            <a href={altHref} hrefLang={otherLocale} lang={otherLocale} className="flex items-center gap-3.5 rounded-[20px] bg-paper p-4 ring-1 ring-line">
              <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-mist text-navy-700" aria-hidden="true">
                <Globe className="h-[18px] w-[18px]" />
              </span>
              <span className="flex-1 text-[16px] font-medium text-ink">{labels.langLabel}</span>
              <ChevronRight className="h-4 w-4 text-slate" aria-hidden="true" />
            </a>
          </section>
        </nav>
      </div>
    </>
  );
}

function Flyout({ group, onNavigate, pathname }: { group: MenuGroup; onNavigate: () => void; pathname: string }) {
  return (
    <div id={`panel-${group.id}`} className="absolute inset-x-0 top-full hidden border-t border-ink/[0.06] bg-paper shadow-[0_30px_60px_-30px_rgba(16,28,50,0.3)] backdrop-blur-2xl lg:block">
      <div key={group.id} className="flyout-in mx-auto grid max-w-7xl grid-cols-[300px_1fr] gap-12 px-8 pb-10 pt-8">
        <div>
          <IconTile icon={group.icon} />
          <p className="mt-5 text-[26px] font-semibold leading-tight tracking-[-0.02em] text-ink">{group.label}</p>
          <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{group.intro}</p>
          <Link href={group.overview.href} onClick={onNavigate} className="group mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-navy-700">
            {group.overview.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
        <ul className="grid grid-cols-2 content-start gap-1.5 xl:grid-cols-3">
          {group.links.map((l, i) => {
            const current = pathOf(l.href) === pathname;
            return (
              <li key={l.href} className="flyout-item" style={{ ["--i" as string]: i }}>
                <Link
                  href={l.href}
                  onClick={onNavigate}
                  aria-current={current ? "page" : undefined}
                  className={`group flex items-start gap-3.5 rounded-2xl p-3.5 transition-colors ${current ? "bg-mist" : "hover:bg-canvas"}`}
                >
                  <IconTile icon={l.icon} tone={l.icon === "lifeBuoy" ? "help" : "mist"} />
                  <span className="pt-0.5">
                    <span className="flex items-center gap-1 text-[15px] font-semibold text-ink">
                      {l.label}
                      <ChevronRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-60" aria-hidden="true" />
                    </span>
                    <span className="mt-0.5 block text-[13.5px] leading-snug text-muted">{l.desc}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
