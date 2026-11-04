import { lastReviewed, pagesFor, specialRoutes } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/site";
import { LiveClock } from "@/components/home/LiveClock";
import {
  AmsterdamSection,
  BanExplainer,
  CounterSection,
  DirectAnswer,
  Hero,
  HubSection,
  Independence,
  KnowledgeSection,
  VisitingBand,
} from "@/components/home/Sections";

const route = specialRoutes.find((r) => r.id === "home")!;

export const metadata = buildMetadata({
  id: "home",
  locale: "nl",
  path: "/",
  title: "Lachgas Amsterdam — onafhankelijke informatie over lachgas",
  description:
    "Onafhankelijke informatie over lachgas in Amsterdam: het verbod, regels, gezondheidsrisico’s, soorten, merken, cilinders en hulp. Niet-commercieel, met bronnen.",
  status: route.status,
  type: "website",
});

const ORDER = ["verbod", "regels-amsterdam", "gezondheid", "verslaving", "cilinders", "nieuws"];

export default function Home() {
  const lastChecked = lastReviewed("nl");
  const knowledge = ORDER.map((id) => pagesFor("nl").find((p) => p.id === id)!).filter(Boolean);

  return (
    <>
      <Hero
        kicker="Onafhankelijk informatieplatform"
        subtitle="Alles wat je moet weten. Onafhankelijk en helder uitgelegd."
        text="De centrale informatiebron over lachgas in Amsterdam. Ontdek de wetgeving, gezondheidsrisico’s, soorten, merken en ontwikkelingen."
        primary={{ href: "#informatie", label: "Ontdek de informatie" }}
        secondary={{ href: "/en/", label: "Visiting Amsterdam? Read in English", lang: "en" }}
        scrollLabel="Scroll"
        clock={<LiveClock locale="nl" updated={{ label: "Informatie laatst gecontroleerd op", iso: lastChecked, text: formatDate(lastChecked, "nl") }} />}
      />

      <DirectAnswer
        index="01"
        eyebrow="In het kort"
        title="Lachgas in Amsterdam, zonder ruis."
        lead="Lachgas is sinds 1 januari 2023 in heel Nederland verboden als genotmiddel — dus ook in Amsterdam, en ook voor bezoekers. Op dit platform vind je de [regels](/lachgas-verbod/), de [gezondheidsrisico’s](/gezondheid/), de verschillen tussen [medisch, culinair en technisch lachgas](/lachgas-soorten-en-toepassingen/), wat je doet met een [gevonden cilinder](/lachgascilinder-gevonden/) en waar je [hulp](/hulp/) vindt. Iedere pagina begint met een kort antwoord en eindigt met de bronnen."
        items={[
          { k: "Status", v: "Recreatief verboden sinds 1 januari 2023" },
          { k: "Wet", v: "Opiumwet, lijst II" },
          { k: "Geldt voor", v: "Iedereen in Nederland, ook toeristen" },
          { k: "Bij nood", v: "Bel **112**" },
        ]}
      />

      <BanExplainer
        index="02"
        eyebrow="Het lachgasverbod"
        title="Wat is verboden, en wat niet?"
        intro="Het kabinet plaatste lachgas op lijst II van de Opiumwet. Het verbod richt zich op recreatief gebruik; legitieme toepassingen blijven toegestaan."
        bannedTitle="Verboden voor recreatief gebruik"
        banned={["Bezit", "Verkoop en verstrekken", "Vervoer", "Productie", "In- en uitvoer"]}
        allowedTitle="Wettelijke uitzonderingen"
        allowed={[
          { k: "Medisch", v: "In de zorg, onder toezicht van professionals." },
          { k: "Culinair", v: "Als voedingsadditief, zoals in slagroompatronen." },
          { k: "Technisch", v: "Bijvoorbeeld in motoren en industrie." },
        ]}
        officialTitle="Officiële informatie"
        official={[
          { href: "https://www.rijksoverheid.nl/onderwerpen/drugs/verbod-op-lachgas", label: "Rijksoverheid" },
          { href: "https://wetten.overheid.nl/BWBR0001941", label: "Opiumwet" },
          { href: "https://zoek.officielebekendmakingen.nl/stb-2022-461", label: "Staatsblad 2022, 461" },
        ]}
        more={{ href: "/lachgas-verbod/", label: "Lees de volledige uitleg" }}
        dateLabel="Ingangsdatum: 1 januari 2023"
      />

      <CounterSection
        locale="nl"
        index="03"
        eyebrow="Sinds 1 januari 2023 · 00:00 Amsterdamse tijd"
        title="Het lachgasverbod in Nederland"
        note="Deze teller toont uitsluitend de tijd die is verstreken sinds het verbod op 1 januari 2023 inging (tijdzone Europe/Amsterdam). Het is geen teller van incidenten, overtredingen of slachtoffers."
      />

      <AmsterdamSection
        index="04"
        eyebrow="Amsterdam"
        title="Waarom dit een Amsterdams verhaal is."
        intro="In Amsterdam komen regels, gezondheid en openbare ruimte samen: op de grachten, in de parken en in de afvalverwerking van de stad. Dit zijn gedocumenteerde momenten, elk met bron."
        timeline={[
          {
            year: "2019",
            title: "Straatverkoop aangepakt",
            text: "De gemeente kondigt aan verkopers van lachgas in de openbare ruimte aan te pakken.",
            source: { label: "NOS", href: "https://nos.nl/artikel/2300206-amsterdam-opent-jacht-op-verkopers-van-lachgas" },
          },
          {
            year: "2021",
            title: "Verbod in horeca en bij evenementen",
            text: "De gemeenteraad stemt in met een verbod op de verkoop van lachgas in de horeca en bij evenementen.",
            source: { label: "NOS", href: "https://nos.nl/artikel/2378722-lachgas-wordt-ook-verboden-in-amsterdam" },
          },
          {
            year: "2023",
            title: "Landelijk verbod",
            text: "Lachgas komt op lijst II van de Opiumwet. Daarnaast verbiedt de Amsterdamse APV het gebruik van lachgas.",
            source: { label: "Gemeente Amsterdam", href: "https://assets.amsterdam.nl/publish/pages/1027459/2023-02-08_raadsinformatiebrief_apv_wijziging_blowverbod_en_alcoholoverlastgebied_1_.pdf" },
          },
          {
            year: "AEB",
            title: "Ontploffende cilinders",
            text: "Cilinders in het restafval veroorzaken explosies in de ovens. Een innamepunt haalde in vijf maanden zo’n 80.000 cilinders op.",
            source: { label: "AT5", href: "https://www.at5.nl/artikelen/225064/aeb-stopt-na-vijf-maanden-met-innamepunt-lachgas-maar-liefst-80000-cilinders-ingeleverd" },
          },
        ]}
        more={{ href: "/amsterdam/", label: "Lachgas in Amsterdam" }}
      />

      <HubSection
        index="05"
        eyebrow="Informatiehub"
        title="Alles over lachgas, op één plek."
        intro="Acht thema’s, ieder met een direct antwoord, verdieping en controleerbare bronnen."
        items={[
          { art: "law", index: "01", href: "/lachgas-verbod/", title: "Wetgeving", text: "Het verbod, de uitzonderingen, bezit en vervoer — en wie handhaaft." },
          { art: "health", index: "02", href: "/gezondheid/", title: "Gezondheid", text: "Van duizeligheid tot B12-tekort en zenuwschade." },
          { art: "types", index: "03", href: "/lachgas-soorten-en-toepassingen/", title: "Soorten en toepassingen", text: "Medisch, culinair en technisch lachgas." },
          { art: "brands", index: "04", href: "/lachgas-merken/", title: "Merken", text: "Wat openbare bronnen melden, zonder aanbevelingen." },
          { art: "cylinders", index: "05", href: "/lachgascilinders/", title: "Cilinders en patronen", text: "Waarom ze ontploffen in het afval en hoe je ze afvoert." },
          { art: "city", index: "06", href: "/amsterdam/", title: "Amsterdam", text: "Lokale regels, overlast, afval en gezondheid in de hoofdstad." },
          { art: "help", index: "07", href: "/hulp/", title: "Hulp en ondersteuning", text: "Anoniem advies, de huisarts en verslavingszorg." },
          { art: "visitors", index: "08", href: "/en/visiting-amsterdam/", title: "Toeristen", text: "De Engelstalige gids voor bezoekers van Amsterdam." },
        ]}
      />

      <VisitingBand
        lang="en"
        title="VISITING AMSTERDAM?"
        text="Your independent guide to nitrous oxide laws, health risks and public safety in Amsterdam."
        cta="Explore the English guide"
        href="/en/"
      />

      <KnowledgeSection index="06" eyebrow="Kennisbank" title="Verdieping, met bronnen." pages={knowledge} locale="nl" all={{ href: "/kennisbank/", label: "Alle artikelen" }} />

      <Independence
        index="07"
        eyebrow="Onafhankelijk"
        title="Geen verkoop. Geen reclame. Geen overheid."
        intro="Lachgas Amsterdam is een volledig onafhankelijk en niet-commercieel platform. Wij baseren ons op officiële en controleerbare bronnen, en vermelden op iedere pagina wanneer die voor het laatst is gecontroleerd."
        principles={[
          { k: "Niet-commercieel", v: "Geen webshop, advertenties, affiliate-links of betaalde vermeldingen." },
          { k: "Controleerbaar", v: "Iedere pagina eindigt met bronnen, inclusief de mate van controle." },
          { k: "Privacyvriendelijk", v: "Geen cookies, alleen anonieme bezoekersstatistieken, chatgesprekken worden niet bewaard." },
          { k: "Geen overheidssite", v: "Niet verbonden aan de gemeente Amsterdam of het Rijk." },
        ]}
        orgsTitle="Belangrijkste bronnen"
        orgs={["Rijksoverheid", "Openbaar Ministerie", "RIVM", "wetten.overheid.nl", "Gemeente Amsterdam", "VNG", "Trimbos-instituut", "DrugsInfo", "AT5", "NOS"]}
        links={[
          { href: "/bronnen/", label: "Bronregister" },
          { href: "/redactiebeleid/", label: "Redactiebeleid" },
          { href: "/over-ons/", label: "Over ons" },
        ]}
      />
    </>
  );
}
