import type { Page } from "./types.ts";

// English pages, written for international visitors rather than translated
// line by line. Each answers the question a tourist actually types.

const D = "2026-10-31";

export const enPages: Page[] = [
  {
    id: "en-is-legal",
    locale: "en",
    path: "/en/is-laughing-gas-legal-in-amsterdam/",
    category: "toeristen",
    eyebrow: "The short answer",
    title: "Is laughing gas legal in Amsterdam?",
    metaTitle: "Is laughing gas legal in Amsterdam? What the law says",
    metaDescription:
      "Laughing gas has been banned for recreational use in the Netherlands since 1 January 2023. What that means in Amsterdam and for tourists, with official sources.",
    answer:
      "No. Since 1 January 2023, nitrous oxide (laughing gas, N₂O) has been on List II of the Dutch Opium Act. Possessing, selling, transporting or producing it for recreational use is illegal everywhere in the Netherlands — including Amsterdam — and the law applies to tourists exactly as it does to residents.",
    body: [
      { type: "h2", id: "what-is-banned", text: "What exactly is banned?" },
      {
        type: "list",
        items: [
          "**having** nitrous oxide on you for recreational use (in your bag, car or accommodation);",
          "**selling** or handing it out — including balloons;",
          "**transporting** it;",
          "**bringing it into** or **taking it out of** the Netherlands.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Coming from a country where it’s legal?",
        text: "It doesn’t matter. Dutch law applies to everyone in the Netherlands, regardless of nationality or what is allowed at home.",
      },
      { type: "h2", id: "exceptions", text: "What is still allowed?" },
      {
        type: "p",
        text: "Nitrous oxide has legitimate uses, so the law makes exceptions for **medical** use (for example in hospitals), **culinary** use as a food additive (such as whipped-cream chargers) and **technical** use (for example in engines). What counts is the intended purpose, not the label: a cylinder sold as ‘culinary’ is illegal to possess if it’s meant for inhaling.",
      },
      { type: "h2", id: "amsterdam", text: "Is Amsterdam stricter than the rest of the country?" },
      {
        type: "p",
        text: "The criminal ban is national, so it is the same everywhere. Before 2023 Amsterdam already had its own measures against street sales and against sales in bars and at events ([DutchNews](https://www.dutchnews.nl/news/2021/04/amsterdam-to-ban-sale-of-laughing-gas-in-cafes-at-festivals/)). Today, the city can still act against public nuisance under its local bylaws.",
      },
      { type: "h2", id: "consequences", text: "What happens if you’re caught?" },
      {
        type: "p",
        text: "Police can confiscate the gas and file a report. The Public Prosecution Service (Openbaar Ministerie) decides on any penalty. We don’t list fine amounts because we haven’t been able to verify current official figures. Read more on [Nitrous oxide laws in the Netherlands](/en/nitrous-oxide-laws-netherlands/).",
      },
      { type: "h2", id: "official", text: "Official information" },
      {
        type: "list",
        items: [
          "[Dutch government — Ban on nitrous oxide (Dutch)](https://www.rijksoverheid.nl/onderwerpen/drugs/verbod-op-lachgas)",
          "[Opium Act on wetten.overheid.nl (Dutch)](https://wetten.overheid.nl/BWBR0001941)",
          "[City of Amsterdam](https://www.amsterdam.nl)",
        ],
      },
    ],
    faq: [
      {
        q: "Is laughing gas legal in the Netherlands?",
        a: "Not for recreational use. Since 1 January 2023 it has been on List II of the Opium Act. Medical, culinary and technical uses remain allowed.",
      },
      {
        q: "Does the Dutch nitrous oxide ban apply to tourists?",
        a: "Yes. The Opium Act applies to everyone in the Netherlands, whatever your nationality.",
      },
      {
        q: "Can I buy whipped-cream chargers in Amsterdam?",
        a: "Culinary use is an exception to the ban. According to the Association of Netherlands Municipalities, more than ten chargers in the hands of a private individual is a strong sign the gas isn’t meant for the kitchen.",
      },
    ],
    sources: ["rijk-verbod", "rijk-nieuws-2022", "opiumwet", "vng-factsheet", "dutchnews-2021"],
    related: ["en-laws", "en-visiting", "en-health", "en-cylinders"],
    translationOf: "regels-amsterdam",
    status: "legal-review",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
    uncertainties: ["Current fine amounts and prosecution guidelines have not yet been verified."],
  },
  {
    id: "en-laws",
    locale: "en",
    path: "/en/nitrous-oxide-laws-netherlands/",
    category: "wetgeving",
    eyebrow: "Law",
    title: "Nitrous oxide laws in the Netherlands",
    metaTitle: "Nitrous oxide laws in the Netherlands: the 2023 ban",
    metaDescription:
      "The Dutch nitrous oxide ban explained in plain English: what the Opium Act prohibits, the medical, culinary and technical exceptions, enforcement and driving.",
    answer:
      "Since 1 January 2023 nitrous oxide has been listed on List II of the Dutch Opium Act — the same list as cannabis. Possession, sale, transport, production, import and export for recreational use are prohibited. Exceptions apply to medical use, use as a food additive and technical purposes.",
    body: [
      { type: "h2", id: "the-ban", text: "The ban in one paragraph" },
      {
        type: "p",
        text: "After a government risk assessment, the Dutch cabinet placed nitrous oxide (dinitrogen monoxide, N₂O) on List II of the Opium Act. The ban targets recreational supply and possession. According to the Association of Netherlands Municipalities (VNG), merely using it is not itself an offence under the Opium Act — but you can’t use it without having it, and possession is prohibited.",
      },
      { type: "h2", id: "exceptions", text: "The exceptions" },
      {
        type: "facts",
        items: [
          { label: "Medical", value: "Doctors, pharmacists and hospitals need no exemption. Manufacturers and wholesalers of medical nitrous oxide need an Opium Act exemption." },
          { label: "Culinary", value: "Use as a food additive, for example whipping cream (Article 15a, Opium Act Decree)." },
          { label: "Technical", value: "For example extra power in combustion engines; supplied directly from producer to end user." },
        ],
      },
      { type: "h2", id: "burden", text: "‘Punishable, unless…’" },
      {
        type: "p",
        text: "The ban works on a ‘punishable, unless’ basis: if nitrous oxide is found on you, you have to make it plausible that it falls under an exception. For private individuals, the VNG says more than ten chargers is a strong indication that it isn’t for culinary use.",
      },
      { type: "h2", id: "enforcement", text: "Who enforces it?" },
      {
        type: "p",
        text: "Enforcing the Opium Act is a police matter. Municipal enforcement officers can only act under local bylaws, for example against public nuisance. Mayors can also issue warnings, impose penalty payments or close premises under Article 13b of the Opium Act.",
      },
      { type: "h2", id: "driving", text: "Driving" },
      {
        type: "p",
        text: "Nitrous oxide disturbs perception and coordination; DrugsInfo says driving ability is probably reduced for the first hour after use. Road accidents were one of the reasons the government gave for the ban. Dutch traffic law separately prohibits driving under the influence of a substance that impairs your driving.",
      },
      { type: "h2", id: "waste", text: "Disposal" },
      {
        type: "p",
        text: "Nitrous oxide cylinders are hazardous waste and must not go in normal bins. See [Nitrous oxide cylinders](/en/nitrous-oxide-cylinders/).",
      },
    ],
    sources: ["rijk-verbod", "rijk-nieuws-2022", "opiumwet", "stb-2022-461", "vng-factsheet", "drugsinfo-lachgas", "wvw-1994"],
    related: ["en-is-legal", "en-types", "en-visiting", "en-cylinders"],
    translationOf: "verbod",
    status: "legal-review",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
    uncertainties: ["Current fine amounts and the prosecution guideline have not yet been verified."],
  },
  {
    id: "en-health",
    locale: "en",
    path: "/en/nitrous-oxide-health-risks/",
    category: "gezondheid",
    eyebrow: "Health",
    title: "Nitrous oxide health risks",
    metaTitle: "Nitrous oxide health risks: B12, nerve damage and more",
    metaDescription:
      "What are the health risks of laughing gas? Dizziness, frostbite, vitamin B12 deficiency and nerve damage explained, based on Dutch public health sources.",
    answer:
      "Nitrous oxide can cause dizziness, headaches, nausea and tingling straight away. Heavy or frequent use inactivates vitamin B12, which can lead to nerve damage and, in severe cases, paralysis. Gas released from large cylinders is extremely cold and can cause serious frostbite.",
    body: [
      {
        type: "callout",
        tone: "help",
        title: "Emergency?",
        text: "If someone is unconscious, struggling to breathe or badly hurt, call **112** — the European emergency number, free from any phone.",
      },
      { type: "h2", id: "short-term", text: "Short-term risks" },
      {
        type: "list",
        items: [
          "**Dizziness, headaches, nausea** and tingling in hands and feet (Trimbos Institute).",
          "**Near-loss of consciousness**, which can lead to falls and injuries.",
          "**No oxygen.** Medical nitrous oxide is always given mixed with oxygen; recreational use isn’t.",
          "**Frostbite.** Dutch burns centres have reported severe freezing injuries in people filling balloons from large tanks.",
          "**Traffic.** Perception and coordination are impaired.",
        ],
      },
      { type: "h2", id: "long-term", text: "Long-term risks: B12 and nerve damage" },
      {
        type: "p",
        text: "Nitrous oxide inactivates vitamin B12, which your nerves need. Heavy or repeated use can damage the spinal cord and peripheral nerves, causing numbness, weakness and difficulty walking. The Trimbos Institute warns that excessive use can lead to nerve damage and, at worst, paralysis. Taking extra B12 while continuing to use does not appear to reduce the risk, according to DrugsInfo.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Large cylinders increase the risk",
        text: "The Trimbos Institute notes that people increasingly fill balloons from large tanks instead of single chargers — which raises the chance of health problems.",
      },
      { type: "h2", id: "dependence", text: "Dependence" },
      {
        type: "p",
        text: "Some people find it hard to stop and feel a strong urge to keep using. That can be a sign of dependence.",
      },
      { type: "h2", id: "help", text: "Getting help in Amsterdam" },
      {
        type: "list",
        items: [
          "**112** — emergencies.",
          "**A GP (huisarts) or out-of-hours GP service (huisartsenpost)** — for tingling, numbness or weakness after use. Visitors can also go to a hospital emergency department.",
          "**DrugsInfo Infolijn: 0900-1995** — anonymous advice (Dutch-language service).",
        ],
      },
    ],
    sources: ["trimbos-lachgas", "drugsinfo-lachgas", "rijk-verbod", "alrijne-protocol"],
    related: ["en-is-legal", "en-visiting", "en-laws"],
    translationOf: "gezondheid",
    status: "medical-review",
    published: D,
    reviewed: D,
    nextReview: "2027-04-30",
  },
  {
    id: "en-types",
    locale: "en",
    path: "/en/nitrous-oxide-types/",
    category: "soorten",
    eyebrow: "Types and uses",
    title: "Types of nitrous oxide: medical, culinary and technical",
    metaTitle: "Types of nitrous oxide: medical, culinary and technical uses",
    metaDescription:
      "Nitrous oxide (N₂O) is used in medicine, kitchens and industry. How the grades differ in purpose, quality and Dutch regulation.",
    answer:
      "Nitrous oxide is dinitrogen monoxide (N₂O), a colourless gas. Hospitals use it for pain relief and anaesthesia, kitchens use it as a propellant for whipped cream, and industry uses it in engines and processes. Each use has its own quality standards and rules. Recreational use is banned in the Netherlands.",
    body: [
      {
        type: "facts",
        items: [
          { label: "Chemical name", value: "Dinitrogen monoxide" },
          { label: "Formula", value: "N₂O" },
          { label: "CAS number", value: "10024-97-2" },
          { label: "Food additive number", value: "E942" },
        ],
      },
      { type: "h2", id: "medical", text: "Medical nitrous oxide" },
      {
        type: "p",
        text: "Used for pain relief and anaesthesia, always mixed with oxygen and supervised by professionals. It is a medicine and must meet pharmaceutical quality standards.",
      },
      { type: "h2", id: "culinary", text: "Culinary nitrous oxide" },
      {
        type: "p",
        text: "Used as a propellant in whipped-cream dispensers, usually in small steel chargers. As a food additive it falls under the exception in Article 15a of the Dutch Opium Act Decree.",
      },
      { type: "h2", id: "technical", text: "Technical nitrous oxide" },
      {
        type: "p",
        text: "Used, among other things, to add power to combustion engines and in industrial processes. It is not intended for human consumption.",
      },
      {
        type: "callout",
        tone: "info",
        title: "The label doesn’t make it legal",
        text: "The exceptions depend on what the gas is meant for. A cylinder labelled ‘culinary’ that is intended for inhaling is covered by the [ban](/en/nitrous-oxide-laws-netherlands/).",
      },
    ],
    sources: ["rijk-verbod", "stb-2022-461", "vng-factsheet"],
    related: ["en-laws", "en-brands", "en-cylinders"],
    translationOf: "soorten",
    status: "fact-check",
    published: D,
    reviewed: D,
    nextReview: "2027-04-30",
  },
  {
    id: "en-brands",
    locale: "en",
    path: "/en/nitrous-oxide-brands/",
    category: "merken",
    eyebrow: "Brands · Independent reporting",
    title: "Nitrous oxide brands in the news",
    metaTitle: "Nitrous oxide brands: what public sources report",
    metaDescription:
      "Why brand names like FastGas appear in Dutch reporting on nitrous oxide — an independent, non-commercial overview. No recommendations, prices or sellers.",
    answer:
      "Brand names are printed on many of the cylinders found on Dutch streets, and journalists have named some of them, including FastGas and Fastwhip. This page summarises what public sources report. Mentioning a brand is never a recommendation: we list no prices, sellers or product comparisons.",
    body: [
      {
        type: "callout",
        tone: "warning",
        title: "Not an endorsement",
        text: "Lachgas Amsterdam sells nothing, links to no sellers and receives no money from any brand.",
      },
      { type: "h2", id: "reported", text: "What has been reported" },
      {
        type: "steps",
        items: [
          {
            title: "AVROTROS Radar — 22 September 2025",
            text: "The Dutch consumer programme reported that streets are littered with cylinders ‘with names like Fastgast and Fastwhip’ (spelling as published), despite the ban, and that the police have no specific approach to the drug.",
          },
          {
            title: "NRC — 19 June 2025",
            text: "The newspaper published an investigation into the international nitrous oxide trade. We have not yet read it ourselves and therefore do not quote from it.",
          },
        ],
      },
      { type: "h2", id: "law", text: "Brand, label and the law" },
      {
        type: "p",
        text: "Under Dutch law the brand doesn’t matter: nitrous oxide meant for inhaling is illegal to possess, whatever is printed on the cylinder.",
      },
    ],
    sources: ["radar-2025", "nrc-2025", "rijk-verbod"],
    related: ["en-types", "en-cylinders", "en-laws"],
    translationOf: "merken",
    status: "fact-check",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
  },
  {
    id: "en-cylinders",
    locale: "en",
    path: "/en/nitrous-oxide-cylinders/",
    category: "cilinders",
    eyebrow: "Cylinders",
    title: "Nitrous oxide cylinders: what to do if you find one",
    metaTitle: "Found a nitrous oxide cylinder in Amsterdam? What to do",
    metaDescription:
      "Nitrous oxide cylinders are hazardous waste and can explode in incinerators. What to do if you find one in Amsterdam, and why it matters.",
    answer:
      "Don’t put a nitrous oxide cylinder in a normal bin — it can explode in the waste incinerator. Don’t open or heat it. Residents can take it to one of Amsterdam’s waste points (Afvalpunten); visitors can leave it where it is and report it to the city via amsterdam.nl.",
    body: [
      { type: "h2", id: "why", text: "Why it matters" },
      {
        type: "p",
        text: "Cylinders thrown into household waste end up in AEB’s incinerators, where they explode with increasing frequency, according to Amsterdam broadcaster AT5. AEB built a dedicated shed to shred cylinders before incineration. A paid return scheme collected roughly 80,000 cylinders in five months before it was stopped.",
      },
      { type: "h2", id: "steps", text: "What to do" },
      {
        type: "steps",
        items: [
          { title: "Leave it intact", text: "Don’t open, puncture or heat it." },
          { title: "Not in the bin", text: "Not in household waste, recycling or bulky waste." },
          { title: "Drop it off or report it", text: "Take it to an Amsterdam Afvalpunt (check amsterdam.nl first), or report it to the city if it’s in a public space." },
        ],
      },
      {
        type: "p",
        text: "Suspect dealing or storage? Call the police non-emergency line on **0900-8844**. Emergencies: **112**.",
      },
    ],
    sources: ["rijk-verbod", "at5-explosies", "at5-aeb-stopt", "nhnieuws-loods"],
    related: ["en-visiting", "en-is-legal", "en-brands"],
    translationOf: "cilinders",
    status: "fact-check",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
    uncertainties: ["Which Afvalpunten currently accept cylinders has not yet been verified."],
  },
  {
    id: "en-visiting",
    locale: "en",
    path: "/en/visiting-amsterdam/",
    category: "toeristen",
    eyebrow: "Visiting Amsterdam",
    title: "Visiting Amsterdam: nitrous oxide, the law and staying safe",
    metaTitle: "Nitrous oxide in Amsterdam: a guide for tourists",
    metaDescription:
      "Visiting Amsterdam? What tourists need to know about the Dutch nitrous oxide ban, health risks, discarded cylinders and where to get help.",
    answer:
      "Laughing gas is illegal for recreational use in Amsterdam and the rest of the Netherlands, and the law applies to visitors too. Balloons offered on the street or in nightlife are illegal. If you feel unwell or see someone in trouble, call 112.",
    body: [
      { type: "h2", id: "five-things", text: "Five things to know" },
      {
        type: "steps",
        items: [
          { title: "It’s banned", text: "Since 1 January 2023, possessing, selling or transporting nitrous oxide for recreational use is illegal. [Read the law](/en/nitrous-oxide-laws-netherlands/)." },
          { title: "It applies to you", text: "Dutch law applies to everyone in the country, whatever is allowed at home." },
          { title: "Street balloons are illegal", text: "Anyone selling balloons in the street or at a party is breaking the law." },
          { title: "It’s not harmless", text: "Risks range from fainting and frostbite to nerve damage. [Health risks](/en/nitrous-oxide-health-risks/)." },
          { title: "Cylinders are hazardous waste", text: "Never bin them. [What to do](/en/nitrous-oxide-cylinders/)." },
        ],
      },
      { type: "h2", id: "cannabis", text: "But isn’t Amsterdam tolerant about drugs?" },
      {
        type: "p",
        text: "The Netherlands tolerates the sale of small amounts of cannabis in licensed coffeeshops under strict conditions. That policy does not extend to nitrous oxide. Its listing on the same Opium Act list as cannabis does not mean it is sold or tolerated in the same way.",
      },
      { type: "h2", id: "help", text: "Help and emergencies" },
      {
        type: "facts",
        items: [
          { label: "Emergency", value: "112 — police, ambulance, fire" },
          { label: "Police (non-emergency)", value: "0900-8844" },
          { label: "Medical, non-urgent", value: "Out-of-hours GP service (huisartsenpost) or a hospital emergency department" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Independent guide",
        text: "Lachgas Amsterdam is an independent, non-commercial information platform. It is not a website of the City of Amsterdam. Official city information is at [amsterdam.nl](https://www.amsterdam.nl).",
      },
    ],
    sources: ["rijk-verbod", "vng-factsheet", "trimbos-lachgas", "drugsinfo-lachgas", "at5-explosies"],
    related: ["en-is-legal", "en-health", "en-cylinders", "en-laws"],
    status: "legal-review",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
  },
  {
    id: "en-about",
    locale: "en",
    path: "/en/about/",
    category: "redactie",
    eyebrow: "About",
    title: "About Lachgas Amsterdam",
    metaTitle: "About Lachgas Amsterdam: independent and non-commercial",
    metaDescription:
      "Lachgas Amsterdam is an independent, non-commercial information platform about nitrous oxide in Amsterdam. How we work, our sources and our privacy approach.",
    answer:
      "Lachgas Amsterdam is an independent, fully non-commercial information platform. We explain Dutch law, health risks and the Amsterdam context using verifiable sources. We sell nothing, show no ads, use no cookies or trackers, and are not a government website.",
    body: [
      { type: "h2", id: "independent", text: "Independent and non-commercial" },
      {
        type: "list",
        items: [
          "no sales, shop, affiliate links or advertising;",
          "no paid mentions or sponsorship;",
          "no cookies, analytics or newsletter;",
          "no connection to the City of Amsterdam or any other authority.",
        ],
      },
      { type: "h2", id: "editorial", text: "Editorial standards" },
      {
        type: "p",
        text: "Every page goes through fact-checking and, where relevant, legal or medical review before it is published. Pages show when they were last checked and list their sources. Pages still under review say so and are not indexed by search engines. All sources are listed in our [source register](/en/sources/).",
      },
      { type: "h2", id: "advice", text: "Not personal advice" },
      {
        type: "p",
        text: "The information here is general. It is not legal or medical advice for your situation. In an emergency, call 112.",
      },
    ],
    sources: [],
    related: ["en-visiting", "en-is-legal"],
    translationOf: "over-ons",
    status: "draft",
    published: D,
    reviewed: D,
    nextReview: "2027-04-30",
    unlisted: true,
    uncertainties: ["Publisher details still need to be added before launch."],
  },
];
