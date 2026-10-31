import { PageHero } from "@/components/article/PageHero";
import { SourceRegister } from "@/components/article/SourceRegister";
import { specialRoutes } from "@/content";
import { sources } from "@/content/sources";
import { buildMetadata } from "@/lib/seo";

const route = specialRoutes.find((r) => r.id === "bronnen")!;

export const metadata = buildMetadata({
  id: "bronnen",
  locale: "nl",
  path: "/bronnen/",
  title: "Bronregister — alle bronnen van Lachgas Amsterdam",
  description: "Het openbare bronregister: iedere bron met organisatie, datum, mate van controle en de pagina’s waarin hij wordt gebruikt.",
  status: route.status,
  type: "website",
});

export default function Bronnen() {
  const counts = { full: 0, summary: 0, pending: 0 };
  for (const s of sources) counts[s.check]++;
  return (
    <>
      <PageHero crumbs={[{ name: "Home", path: "/" }, { name: "Bronregister", path: "/bronnen/" }]} eyebrow="Redactie · Transparantie" title="Bronregister" seed={144}>
        <p className="rise mt-6 max-w-2xl text-[17px] leading-relaxed text-white/75" style={{ ["--rise-delay" as string]: "160ms" }}>
          Iedere bewering op deze website is herleidbaar. Hier staan alle {sources.length} bronnen, met de mate waarin de redactie ze heeft gecontroleerd: {counts.full} volledig gelezen, {counts.summary} op samenvatting gecontroleerd, {counts.pending} nog te beoordelen.
        </p>
      </PageHero>
      <div className="mx-auto max-w-7xl px-4 pb-40 pt-12 sm:px-6 lg:px-8">
        <SourceRegister locale="nl" />
      </div>
    </>
  );
}
