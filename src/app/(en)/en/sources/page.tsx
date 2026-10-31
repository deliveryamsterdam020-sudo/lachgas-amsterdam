import { PageHero } from "@/components/article/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { SourceRegister } from "@/components/article/SourceRegister";
import { specialRoutes } from "@/content";
import { sources } from "@/content/sources";
import { breadcrumbLd, buildMetadata, graph } from "@/lib/seo";

const crumbs = [{ name: "Home", path: "/en/" }, { name: "Source register", path: "/en/sources/" }];
const route = specialRoutes.find((r) => r.id === "en-sources")!;

export const metadata = buildMetadata({
  id: "en-sources",
  locale: "en",
  path: "/en/sources/",
  title: "Source register — every source behind Lachgas Amsterdam",
  description: "The public source register: every source with its organisation, date, how thoroughly it was checked and the pages that cite it.",
  status: route.status,
  type: "website",
});

export default function Sources() {
  const counts = { full: 0, summary: 0, pending: 0 };
  for (const s of sources) counts[s.check]++;
  return (
    <>
      <JsonLd data={graph(breadcrumbLd(crumbs))} />
      <PageHero crumbs={crumbs} eyebrow="Editorial · Transparency" title="Source register" seed={144}>
        <p className="rise mt-6 max-w-2xl text-[17px] leading-relaxed text-white/75" style={{ ["--rise-delay" as string]: "160ms" }}>
          Every claim on this site can be traced. These are all {sources.length} sources and how thoroughly our editors checked them: {counts.full} read in full, {counts.summary} checked by summary, {counts.pending} not yet reviewed. Most sources are in Dutch.
        </p>
      </PageHero>
      <div className="mx-auto max-w-7xl px-4 pb-40 pt-12 sm:px-6 lg:px-8">
        <SourceRegister locale="en" />
      </div>
    </>
  );
}
