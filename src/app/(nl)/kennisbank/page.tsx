import { PageHero } from "@/components/article/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { KnowledgeList } from "@/components/home/Sections";
import { pagesFor, specialRoutes } from "@/content";
import type { Category } from "@/content/types";
import { categoryLabel } from "@/lib/site";
import { breadcrumbLd, buildMetadata, graph } from "@/lib/seo";

const crumbs = [{ name: "Home", path: "/" }, { name: "Kennisbank", path: "/kennisbank/" }];
const route = specialRoutes.find((r) => r.id === "kennisbank")!;

export const metadata = buildMetadata({
  id: "kennisbank",
  locale: "nl",
  path: "/kennisbank/",
  title: "Kennisbank — alle artikelen over lachgas",
  description: "Alle artikelen van Lachgas Amsterdam over wetgeving, gezondheid, soorten, merken, cilinders, Amsterdam en hulp — met publicatie- en controledatum.",
  status: route.status,
  type: "website",
});

const ORDER: Category[] = ["wetgeving", "gezondheid", "soorten", "merken", "cilinders", "amsterdam", "hulp", "nieuws"];

export default function Kennisbank() {
  const listed = pagesFor("nl").filter((p) => !p.unlisted);
  return (
    <>
      <JsonLd data={graph(breadcrumbLd(crumbs))} />
      <PageHero crumbs={crumbs} eyebrow="Kennisbank" title="Alle artikelen" seed={89}>
        <p className="rise mt-6 max-w-2xl text-[17px] leading-relaxed text-white/75" style={{ ["--rise-delay" as string]: "160ms" }}>
          {listed.length} artikelen over lachgas in Amsterdam, geordend per thema. Ieder artikel toont wanneer het is gepubliceerd en voor het laatst is gecontroleerd.
        </p>
      </PageHero>
      <div className="mx-auto max-w-7xl space-y-16 px-4 pb-40 pt-12 sm:px-6 lg:px-8">
        {ORDER.map((cat) => {
          const items = listed.filter((p) => p.category === cat);
          if (!items.length) return null;
          return (
            <section key={cat} aria-labelledby={`cat-${cat}`}>
              <h2 id={`cat-${cat}`} className="eyebrow text-muted">
                {categoryLabel.nl[cat]}
              </h2>
              <div className="mt-4">
                <KnowledgeList pages={items} locale="nl" />
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
