import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CanalRings } from "@/components/visual/CanalRings";
import { GableSkyline } from "@/components/visual/GableSkyline";

export type HubArt = "law" | "health" | "types" | "brands" | "cylinders" | "city" | "help" | "visitors";

export interface HubItem {
  href: string;
  title: string;
  text: string;
  art: HubArt;
  index: string;
}

// Each card has its own composition and surface, so the hub reads as an
// editorial spread rather than a grid of identical tiles.
const surface: Record<HubArt, string> = {
  law: "on-dark bg-ink text-white",
  health: "bg-paper text-ink",
  types: "bg-mist text-ink",
  brands: "bg-paper text-ink",
  cylinders: "on-dark bg-navy-700 text-white",
  city: "on-dark bg-navy text-white",
  help: "bg-help-soft text-ink",
  visitors: "bg-paper text-ink",
};

function Art({ art }: { art: HubArt }) {
  switch (art) {
    case "law":
      return (
        <div aria-hidden="true" className="pointer-events-none absolute -right-4 -top-6 select-none text-right">
          <span className="block text-[200px] font-semibold leading-none tracking-tighter text-white/[0.06]">§</span>
          <span className="eyebrow absolute right-10 top-14 whitespace-nowrap text-[13px] text-lamp/80">01 · 01 · 2023</span>
        </div>
      );
    case "health":
      return (
        <svg aria-hidden="true" viewBox="0 0 240 80" className="absolute right-5 top-6 w-44 text-navy-700/30">
          <path d="M0 40h70l12-26 18 52 16-40 10 14h114" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        </svg>
      );
    case "types":
      return (
        <div aria-hidden="true" className="absolute right-5 top-4 flex items-baseline gap-0.5 text-navy-700/25">
          <span className="text-[86px] font-semibold leading-none tracking-tighter">N</span>
          <span className="text-[40px] font-semibold">₂</span>
          <span className="text-[86px] font-semibold leading-none tracking-tighter">O</span>
        </div>
      );
    case "brands":
      return (
        <div aria-hidden="true" className="absolute right-6 top-7 w-28 space-y-2">
          {[100, 72, 86, 54].map((w, i) => (
            <span key={i} className="block h-2 rounded-full bg-ink/10" style={{ width: `${w}%` }} />
          ))}
        </div>
      );
    case "cylinders":
      return (
        <svg aria-hidden="true" viewBox="0 0 120 120" className="absolute right-5 top-5 h-24 text-white/20">
          <rect x="28" y="30" width="40" height="84" rx="14" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <rect x="40" y="14" width="16" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <rect x="84" y="78" width="14" height="36" rx="7" fill="none" stroke="var(--color-lamp)" strokeWidth="2.5" opacity="0.8" />
        </svg>
      );
    case "city":
      return (
        <>
          <CanalRings labels={false} className="pointer-events-none absolute -right-20 -top-16 w-[460px] max-w-none text-mist opacity-40" />
          <GableSkyline seed={41} className="absolute bottom-0 left-0 h-14 w-full text-white/[0.07]" />
        </>
      );
    case "help":
      return (
        <span aria-hidden="true" className="absolute right-6 top-4 text-[72px] font-semibold leading-none tracking-tighter text-help/20">
          112
        </span>
      );
    case "visitors":
      return (
        <span aria-hidden="true" className="eyebrow absolute right-6 top-7 rounded-full border border-ink/15 px-3 py-1.5 text-[11px] text-muted">
          English
        </span>
      );
  }
}

export function HubCard({ item }: { item: HubItem }) {
  const dark = ["law", "cylinders", "city"].includes(item.art);
  return (
    <Link
      href={item.href}
      className={`group relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-[28px] p-7 ring-1 ring-ink/[0.06] transition-[transform,box-shadow] duration-500 ease-out-soft hover:-translate-y-1 hover:shadow-[0_30px_70px_-30px_rgba(16,28,50,0.45)] sm:p-8 ${surface[item.art]}`}
    >
      <Art art={item.art} />
      <span aria-hidden="true" className={`eyebrow absolute left-7 top-7 text-[11px] sm:left-8 sm:top-8 ${dark ? "text-white/50" : "text-muted"}`}>{item.index}</span>
      <div className="relative pr-12">
        <h3 className="text-[clamp(1.35rem,1.1rem+0.8vw,1.75rem)] font-semibold leading-tight tracking-[-0.02em]">{item.title}</h3>
        <p className={`mt-2 max-w-md text-[15px] leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>{item.text}</p>
      </div>
      <span
        className={`absolute bottom-7 right-7 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 group-hover:rotate-45 sm:bottom-8 sm:right-8 ${
          dark ? "bg-white/10 text-white" : "bg-ink text-white"
        }`}
        aria-hidden="true"
      >
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
