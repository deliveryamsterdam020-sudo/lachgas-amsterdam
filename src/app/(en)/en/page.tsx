import { pagesFor, specialRoutes } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { AmsterdamSection, BanExplainer, CounterSection, DirectAnswer, Hero, HubSection, Independence, KnowledgeSection } from "@/components/home/Sections";

const route = specialRoutes.find((r) => r.id === "en-home")!;

export const metadata = buildMetadata({
  id: "en-home",
  locale: "en",
  path: "/en/",
  title: "Nitrous oxide in Amsterdam — the independent guide",
  description:
    "Is laughing gas legal in Amsterdam? An independent guide to the Dutch nitrous oxide ban, health risks, discarded cylinders and help — for visitors.",
  status: route.status,
  type: "website",
});

const ORDER = ["en-is-legal", "en-laws", "en-health", "en-visiting", "en-cylinders", "en-types"];

export default function EnglishHome() {
  const knowledge = ORDER.map((id) => pagesFor("en").find((p) => p.id === id)!).filter(Boolean);
  return (
    <>
      <Hero
        kicker="Independent guide for visitors"
        subtitle="Nitrous oxide in Amsterdam: the law, the risks, clearly explained."
        text="Laughing gas is banned for recreational use in the Netherlands. This independent guide explains what that means for you — with official sources."
        primary={{ href: "#informatie", label: "Explore the guide" }}
        secondary={{ href: "/", label: "Lees in het Nederlands", lang: "nl" }}
        scrollLabel="Scroll"
      />

      <DirectAnswer
        index="01"
        eyebrow="The short answer"
        title="Is laughing gas legal in Amsterdam? No."
        lead="Since 1 January 2023, possessing, selling or transporting nitrous oxide for recreational use is illegal everywhere in the Netherlands — and Dutch law applies to visitors just as it does to residents. Read [whether it’s legal](/en/is-laughing-gas-legal-in-amsterdam/), [the law in detail](/en/nitrous-oxide-laws-netherlands/), [the health risks](/en/nitrous-oxide-health-risks/) and [what to do with a discarded cylinder](/en/nitrous-oxide-cylinders/)."
        items={[
          { k: "Status", v: "Banned for recreational use since 1 January 2023" },
          { k: "Law", v: "Dutch Opium Act, List II" },
          { k: "Applies to", v: "Everyone in the Netherlands, including tourists" },
          { k: "Emergency", v: "Call **112**" },
        ]}
      />

      <BanExplainer
        index="02"
        eyebrow="The ban"
        title="What’s banned, and what isn’t?"
        intro="Nitrous oxide is on List II of the Opium Act. The ban targets recreational use; medical, culinary and technical uses remain legal."
        bannedTitle="Banned for recreational use"
        banned={["Possession", "Selling and handing out", "Transport", "Production", "Import and export"]}
        allowedTitle="Legal exceptions"
        allowed={[
          { k: "Medical", v: "In healthcare, supervised by professionals." },
          { k: "Culinary", v: "As a food additive, e.g. whipped-cream chargers." },
          { k: "Technical", v: "For example in engines and industry." },
        ]}
        officialTitle="Official information (Dutch)"
        official={[
          { href: "https://www.rijksoverheid.nl/onderwerpen/drugs/verbod-op-lachgas", label: "Dutch government" },
          { href: "https://wetten.overheid.nl/BWBR0001941", label: "Opium Act" },
          { href: "https://www.amsterdam.nl", label: "City of Amsterdam" },
        ]}
        more={{ href: "/en/nitrous-oxide-laws-netherlands/", label: "Read the full explanation" }}
        dateLabel="In force since 1 January 2023"
      />

      <CounterSection
        locale="en"
        index="03"
        eyebrow="Since 1 January 2023 · 00:00 Amsterdam time"
        title="The nitrous oxide ban in the Netherlands"
        note="This counter only shows the time elapsed since the ban took effect on 1 January 2023 (Europe/Amsterdam time zone). It does not count incidents, offences or victims."
      />

      <AmsterdamSection
        index="04"
        eyebrow="Amsterdam"
        title="Why this is an Amsterdam story."
        intro="In Amsterdam, the law, public health and public space come together: on the canals, in the parks and in the city’s waste incinerators. These are documented moments, each with a source."
        timeline={[
          {
            year: "2019",
            title: "Street sales tackled",
            text: "The city bans selling nitrous oxide in public space without a permit, including gas ordered online.",
            source: { label: "NOS", href: "https://nos.nl/artikel/2300206-amsterdam-opent-jacht-op-verkopers-van-lachgas" },
          },
          {
            year: "2021",
            title: "No sales in bars or at events",
            text: "The city council votes to ban the sale of nitrous oxide in hospitality venues and at events.",
            source: { label: "DutchNews", href: "https://www.dutchnews.nl/news/2021/04/amsterdam-to-ban-sale-of-laughing-gas-in-cafes-at-festivals/" },
          },
          {
            year: "2023",
            title: "National ban",
            text: "Nitrous oxide goes on List II of the Opium Act. Amsterdam’s bylaws also prohibit using it.",
            source: { label: "Dutch government", href: "https://www.rijksoverheid.nl/onderwerpen/drugs/verbod-op-lachgas" },
          },
          {
            year: "AEB",
            title: "Exploding cylinders",
            text: "Cylinders in household waste explode in the city’s incinerators. A return scheme collected about 80,000 in five months.",
            source: { label: "AT5", href: "https://www.at5.nl/artikelen/225064/aeb-stopt-na-vijf-maanden-met-innamepunt-lachgas-maar-liefst-80000-cilinders-ingeleverd" },
          },
        ]}
        more={{ href: "/en/visiting-amsterdam/", label: "Visiting Amsterdam" }}
      />

      <HubSection
        index="05"
        eyebrow="The guide"
        title="Everything a visitor needs to know."
        intro="Each page starts with a direct answer and ends with its sources."
        items={[
          { art: "law", index: "01", href: "/en/nitrous-oxide-laws-netherlands/", title: "Dutch law", text: "The ban, the exceptions, and who enforces it." },
          { art: "health", index: "02", href: "/en/nitrous-oxide-health-risks/", title: "Health risks", text: "From fainting and frostbite to nerve damage." },
          { art: "types", index: "03", href: "/en/nitrous-oxide-types/", title: "Types and uses", text: "Medical, culinary and technical nitrous oxide." },
          { art: "brands", index: "04", href: "/en/nitrous-oxide-brands/", title: "Brands", text: "What public sources report — no recommendations." },
          { art: "cylinders", index: "05", href: "/en/nitrous-oxide-cylinders/", title: "Cylinders", text: "Found one? Here’s what to do." },
          { art: "city", index: "06", href: "/en/visiting-amsterdam/", title: "Visiting Amsterdam", text: "Five things every visitor should know." },
          { art: "help", index: "07", href: "/en/nitrous-oxide-health-risks/#help", title: "Help", text: "Emergency numbers and medical help." },
          { art: "visitors", index: "08", href: "/en/is-laughing-gas-legal-in-amsterdam/", title: "Is it legal?", text: "The one-minute answer." },
        ]}
      />

      <KnowledgeSection index="06" eyebrow="Guides" title="In depth, with sources." pages={knowledge} locale="en" />

      <Independence
        index="07"
        eyebrow="Independent"
        title="No sales. No ads. Not the government."
        intro="Lachgas Amsterdam is fully independent and non-commercial. We rely on official, verifiable sources and show on every page when it was last checked."
        principles={[
          { k: "Non-commercial", v: "No shop, advertising, affiliate links or paid mentions." },
          { k: "Verifiable", v: "Every page ends with its sources and how thoroughly they were checked." },
          { k: "Private by design", v: "No cookies, tracking or forms." },
          { k: "Not a government site", v: "Not affiliated with the City of Amsterdam or the Dutch state." },
        ]}
        orgsTitle="Key sources"
        orgs={["Dutch government", "Public Prosecution Service", "RIVM", "wetten.overheid.nl", "City of Amsterdam", "Trimbos Institute", "DrugsInfo", "AT5"]}
        links={[
          { href: "/en/sources/", label: "Source register" },
          { href: "/en/about/", label: "About us" },
        ]}
      />
    </>
  );
}
