import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { GableSkyline } from "@/components/visual/GableSkyline";
import { CanalRings } from "@/components/visual/CanalRings";

export interface Crumb {
  name: string;
  path: string;
}

/** Navy page header with breadcrumb and a canal-house skyline dissolving into the page. */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  children,
  seed = 9,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  children?: ReactNode;
  seed?: number;
}) {
  return (
    <section className="on-dark grain relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_80%_0%,#1f3a5e_0%,transparent_70%)]" />
      <CanalRings labels={false} className="hero-trail pointer-events-none absolute -right-40 -top-10 w-[720px] max-w-none text-mist opacity-[0.18] sm:-right-24" />
      <div className="relative mx-auto max-w-7xl px-4 pb-36 pt-28 sm:px-6 lg:px-8 lg:pb-44 lg:pt-36">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-white/60">
            {crumbs.map((c, i) => (
              <li key={c.path} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-white/30" aria-hidden="true" />}
                {i < crumbs.length - 1 ? (
                  <Link href={c.path} className="inline-flex min-h-6 items-center hover:text-white">
                    {c.name}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-white/85">
                    {c.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <p className="eyebrow rise mt-10 text-lamp">{eyebrow}</p>
        <h1 className="display rise-soft mt-4 max-w-4xl text-balance text-[clamp(2.4rem,1.6rem+3.6vw,4.75rem)]" style={{ ["--rise-delay" as string]: "80ms" }}>
          {title}
        </h1>
        {children}
      </div>
      <GableSkyline seed={seed} className="absolute bottom-0 left-0 h-[72px] w-full text-canvas sm:h-[96px]" />
    </section>
  );
}
