import type { Page } from "./types.ts";

// Nederlandstalige pagina's. Iedere pagina beantwoordt één zoekintentie.
// Statussen zijn eerlijk ingevuld: juridische en medische pagina's wachten op
// controle door een jurist of arts en zijn tot die tijd niet indexeerbaar.

const D = "2026-10-31";

export const nlPages: Page[] = [
  // ───────────────────────────────────────────────────────── WETGEVING ──
  {
    id: "verbod",
    locale: "nl",
    path: "/lachgas-verbod/",
    category: "wetgeving",
    eyebrow: "Wetgeving",
    title: "Het lachgasverbod in Nederland",
    metaTitle: "Lachgasverbod: wat is verboden sinds 1 januari 2023?",
    metaDescription:
      "Sinds 1 januari 2023 staat lachgas op lijst II van de Opiumwet. Wat verboden is, welke uitzonderingen gelden en wie handhaaft — met officiële bronnen.",
    answer:
      "Sinds 1 januari 2023 staat lachgas (distikstofmonoxide, N₂O) op lijst II van de Opiumwet. Bezit, verkoop, vervoer en productie voor recreatief gebruik zijn verboden. Medisch, culinair en technisch gebruik blijven toegestaan. Het verbod geldt in heel Nederland, dus ook in Amsterdam en ook voor toeristen.",
    body: [
      { type: "h2", id: "wat-is-verboden", text: "Wat is er precies verboden?" },
      {
        type: "p",
        text: "Het kabinet heeft lachgas na een risicobeoordeling op **lijst II van de Opiumwet** geplaatst, de lijst waarop ook softdrugs staan. Volgens de [Rijksoverheid](https://www.rijksoverheid.nl/onderwerpen/drugs/verbod-op-lachgas) is lachgas sinds 1 januari 2023 als genotmiddel verboden. Onder het verbod vallen onder meer:",
      },
      {
        type: "list",
        items: [
          "lachgas **in bezit hebben** (in de wet: ‘aanwezig hebben’);",
          "lachgas **verkopen**, afleveren of verstrekken;",
          "lachgas **vervoeren**;",
          "lachgas **produceren** of bereiden;",
          "lachgas Nederland **binnenbrengen of uitvoeren**.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Gebruik zelf",
        text: "Volgens de [VNG-factsheet](https://vng.nl/artikelen/factsheet-landelijk-lachgasverbod) valt het enkele gebruik van lachgas niet onder het verbod in de Opiumwet. In de praktijk heeft wie lachgas gebruikt het ook in bezit — en dat bezit is wél verboden.",
      },
      { type: "h2", id: "uitzonderingen", text: "Welke wettelijke uitzonderingen bestaan er?" },
      {
        type: "p",
        text: "Lachgas heeft veel legitieme toepassingen. Daarom bevat de regelgeving uitzonderingen. Artikel 15a van het Opiumwetbesluit bepaalt dat het verbod niet geldt als het lachgas **bestemd is voor technische doeleinden of als voedingsadditief**. Daarnaast blijft medisch gebruik toegestaan.",
      },
      {
        type: "facts",
        items: [
          { label: "Medisch", value: "Artsen, apothekers en ziekenhuizen hebben geen ontheffing nodig. Fabrikanten en groothandels van medisch lachgas wel een opiumontheffing." },
          { label: "Culinair", value: "Als voedingsadditief, bijvoorbeeld om slagroom op te kloppen." },
          { label: "Technisch", value: "Bijvoorbeeld voor extra vermogen in verbrandingsmotoren. Levering gaat in de praktijk rechtstreeks van producent naar eindgebruiker." },
        ],
      },
      {
        type: "p",
        text: "Let op: het gaat om de **bestemming** van het lachgas, niet om wat er op de verpakking staat. Een cilinder met een culinair etiket valt niet onder de uitzondering als het lachgas voor recreatief gebruik is bedoeld. Meer over de verschillen lees je op [Soorten en toepassingen](/lachgas-soorten-en-toepassingen/).",
      },
      { type: "h2", id: "strafbaar-tenzij", text: "‘Strafbaar, tenzij’: wie moet wat bewijzen?" },
      {
        type: "p",
        text: "Het verbod werkt volgens het principe ‘strafbaar, tenzij’. De VNG schrijft dat degene bij wie lachgas wordt aangetroffen, aannemelijk moet maken dat het niet onder het verbod valt. Voor particulieren geldt volgens dezelfde factsheet dat **meer dan tien ampullen** een sterke aanwijzing is dat het niet om gebruik als voedingsadditief gaat. Zie ook [Lachgas bezit en vervoer](/lachgas-bezit/).",
      },
      { type: "h2", id: "handhaving", text: "Wie handhaaft het verbod?" },
      {
        type: "p",
        text: "Handhaving van het verbod in de Opiumwet is voorbehouden aan de **politie**. Gemeentelijke handhavers (boa’s) kunnen alleen optreden op basis van regels in de Algemene Plaatselijke Verordening (APV), bijvoorbeeld bij overlast. De burgemeester kan op grond van artikel 13b Opiumwet een waarschuwing geven, een last onder dwangsom opleggen of een pand sluiten. Wat dit voor de hoofdstad betekent, lees je op [Lachgasregels in Amsterdam](/lachgas-regels-amsterdam/).",
      },
      { type: "h2", id: "verkeer", text: "Lachgas en verkeer" },
      {
        type: "p",
        text: "Lachgas verstoort waarneming en coördinatie. Volgens [DrugsInfo](https://www.drugsinfo.nl/lachgas/wat-je-moet-weten-over-lachgas/) zijn er aanwijzingen dat de rijvaardigheid het eerste uur na gebruik verminderd is. De Rijksoverheid noemt verkeersongevallen uitdrukkelijk als een van de redenen voor het verbod. Los van de Opiumwet verbiedt de Wegenverkeerswet om te rijden onder invloed van een middel waarvan je weet of moet weten dat het de rijvaardigheid vermindert.",
      },
      { type: "h2", id: "afval", text: "Ook de afvalfase is geregeld" },
      {
        type: "p",
        text: "Lachgascilinders gelden als **gevaarlijk afval**. Ze mogen niet bij het gewone afval en horen bij een milieustraat — in Amsterdam een Afvalpunt. Lees hoe je dat veilig doet op [Lachgascilinder gevonden](/lachgascilinder-gevonden/).",
      },
      { type: "h2", id: "officiele-informatie", text: "Waar vind je officiële informatie?" },
      {
        type: "list",
        items: [
          "[Rijksoverheid — Verbod op lachgas](https://www.rijksoverheid.nl/onderwerpen/drugs/verbod-op-lachgas)",
          "[Opiumwet op wetten.overheid.nl](https://wetten.overheid.nl/BWBR0001941)",
          "[Staatsblad 2022, 461 — wijziging Opiumwetbesluit](https://zoek.officielebekendmakingen.nl/stb-2022-461)",
          "[VNG — Factsheet landelijk lachgasverbod](https://vng.nl/artikelen/factsheet-landelijk-lachgasverbod)",
        ],
      },
    ],
    faq: [
      {
        q: "Sinds wanneer is lachgas verboden?",
        a: "Sinds 1 januari 2023. Op die datum is lachgas op lijst II van de Opiumwet geplaatst.",
      },
      {
        q: "Is slagroompatronen kopen nog toegestaan?",
        a: "Gebruik als voedingsadditief — zoals slagroom kloppen — valt onder de wettelijke uitzondering. Volgens de VNG zijn meer dan tien ampullen bij een particulier wel een sterke aanwijzing dat het niet om culinair gebruik gaat.",
      },
      {
        q: "Geldt het verbod ook voor toeristen?",
        a: "Ja. De Opiumwet geldt voor iedereen die zich in Nederland bevindt, ongeacht nationaliteit of verblijfsduur.",
      },
      {
        q: "Hoe hoog is de boete?",
        a: "De strafmaat bepaalt het Openbaar Ministerie per zaak. De redactie heeft nog geen actuele, officiële bedragen kunnen verifiëren en noemt daarom geen bedragen.",
      },
    ],
    sources: ["rijk-verbod", "rijk-nieuws-2022", "opiumwet", "stb-2022-461", "raad-van-state-2022", "vng-factsheet", "drugsinfo-lachgas", "wvw-1994"],
    related: ["bezit", "regels-amsterdam", "soorten", "gezondheid"],
    translationOf: "en-laws",
    status: "legal-review",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
    uncertainties: [
      "Actuele boetebedragen en de geldende OM-richtlijn zijn nog niet geverifieerd.",
      "De geconsolideerde tekst van artikel 15a Opiumwetbesluit moet nog woordelijk worden gecontroleerd.",
    ],
  },
  {
    id: "regels-amsterdam",
    locale: "nl",
    path: "/lachgas-regels-amsterdam/",
    category: "wetgeving",
    eyebrow: "Wetgeving · Amsterdam",
    title: "Lachgasregels in Amsterdam",
    metaTitle: "Lachgas regels in Amsterdam: verbod en lokale regels",
    metaDescription:
      "Welke lachgasregels gelden er in Amsterdam? Het landelijke verbod, de eerdere Amsterdamse maatregelen en wat de gemeente nog zelf mag regelen — met bronnen.",
    answer:
      "In Amsterdam geldt het landelijke lachgasverbod uit de Opiumwet: bezit, verkoop en vervoer voor recreatief gebruik zijn verboden. Vóór 2023 had Amsterdam al eigen regels tegen verkoop en overlast. Sinds het landelijke verbod kan de gemeente geen eigen verkoopverbod meer maken, maar wel optreden tegen overlast.",
    body: [
      { type: "h2", id: "landelijk", text: "Het landelijke verbod geldt ook in Amsterdam" },
      {
        type: "p",
        text: "De Opiumwet is een landelijke wet. Het [lachgasverbod](/lachgas-verbod/) geldt daarom overal in Amsterdam: op straat, in parken, op het water, in de horeca en bij evenementen. Er bestaan geen gebieden waar recreatief bezit wel is toegestaan.",
      },
      { type: "h2", id: "geschiedenis", text: "Amsterdam was al eerder actief" },
      {
        type: "steps",
        items: [
          {
            title: "2019 — verkoop op straat aangepakt",
            text: "De gemeente kondigde aan verkopers van lachgas aan te pakken. Verkoop in de openbare ruimte zonder vergunning werd niet toegestaan ([NOS](https://nos.nl/artikel/2300206-amsterdam-opent-jacht-op-verkopers-van-lachgas)).",
          },
          {
            title: "2021 — verbod in horeca en bij evenementen",
            text: "Amsterdam besloot de verkoop van lachgas in de horeca en bij evenementen te verbieden en recreatief gebruik aan te pakken wanneer dat overlast veroorzaakt ([NOS](https://nos.nl/artikel/2378722-lachgas-wordt-ook-verboden-in-amsterdam)).",
          },
          {
            title: "2023 — landelijk verbod",
            text: "Op 1 januari 2023 ging het landelijke verbod in. Daarmee nam de Opiumwet de hoofdrol over van lokale regels.",
          },
        ],
      },
      { type: "h2", id: "wat-mag-de-gemeente", text: "Wat mag de gemeente nu nog zelf regelen?" },
      {
        type: "p",
        text: "Volgens de [VNG](https://vng.nl/artikelen/factsheet-landelijk-lachgasverbod) zijn specifieke lokale verkoopverboden voor lachgas sinds het landelijke verbod van rechtswege vervallen; een nieuw lokaal verkoopverbod zou onverbindend zijn. Wat gemeenten wél houden:",
      },
      {
        type: "list",
        items: [
          "**APV-regels tegen overlast** en openlijk drugsgebruik, waarop boa’s kunnen handhaven;",
          "de bevoegdheid van de burgemeester op grond van **artikel 13b Opiumwet** (waarschuwing, last onder dwangsom of sluiting van een pand);",
          "regels voor **afval en de openbare ruimte**, zoals de inzameling van cilinders.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Controleer de actuele APV",
        text: "Gemeentelijke regels veranderen. De redactie heeft de geldende tekst van de Amsterdamse APV nog niet woordelijk gecontroleerd. Raadpleeg voor de actuele tekst [lokaleregelgeving.overheid.nl](https://lokaleregelgeving.overheid.nl) of [amsterdam.nl](https://www.amsterdam.nl).",
      },
      { type: "h2", id: "praktijk", text: "Wat betekent dit in de praktijk?" },
      {
        type: "p",
        text: "Wie in Amsterdam lachgas voor recreatief gebruik bij zich heeft, overtreedt de Opiumwet. De politie kan het lachgas in beslag nemen. Veroorzaakt gebruik overlast, dan kunnen ook gemeentelijke handhavers optreden. Voor bezoekers uit het buitenland gelden dezelfde regels — zie [Visiting Amsterdam](/en/visiting-amsterdam/).",
      },
    ],
    faq: [
      {
        q: "Is lachgas in Amsterdam strenger verboden dan elders?",
        a: "Het strafrechtelijke verbod is landelijk en overal gelijk. Gemeenten verschillen wel in hun overlastregels en handhavingsbeleid.",
      },
      {
        q: "Mag ik lachgas gebruiken in een Amsterdams park?",
        a: "Nee. Om lachgas te gebruiken moet je het in bezit hebben, en recreatief bezit is verboden. Daarnaast kunnen APV-regels tegen overlast van toepassing zijn.",
      },
    ],
    sources: ["vng-factsheet", "nos-amsterdam-2019", "nos-amsterdam-2021", "dutchnews-2021", "rijk-verbod"],
    related: ["verbod", "bezit", "amsterdam", "cilinder-gevonden"],
    translationOf: "en-is-legal",
    status: "legal-review",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
    uncertainties: [
      "Of de Amsterdamse APV-bepaling over lachgasoverlast na 2023 is ingetrokken of gewijzigd, is nog niet geverifieerd.",
    ],
  },
  {
    id: "bezit",
    locale: "nl",
    path: "/lachgas-bezit/",
    category: "wetgeving",
    eyebrow: "Wetgeving",
    title: "Lachgas bezit en vervoer",
    metaTitle: "Lachgas bezit en vervoer: wanneer ben je strafbaar?",
    metaDescription:
      "Mag je lachgas bezitten of vervoeren? Wat ‘strafbaar, tenzij’ betekent, welke hoeveelheden de VNG noemt en wat er gebeurt als de politie lachgas vindt.",
    answer:
      "Recreatief bezit en vervoer van lachgas zijn sinds 1 januari 2023 verboden. Het verbod werkt als ‘strafbaar, tenzij’: wie lachgas bij zich heeft, moet aannemelijk maken dat het voor medisch, culinair of technisch gebruik is. Bij particulieren zijn meer dan tien ampullen volgens de VNG al een sterke aanwijzing voor ander gebruik.",
    body: [
      { type: "h2", id: "bezit", text: "Bezit: ‘aanwezig hebben’" },
      {
        type: "p",
        text: "De Opiumwet spreekt van ‘aanwezig hebben’. Dat is ruimer dan eigendom: ook lachgas in je tas, auto of woning valt eronder. Omdat lachgas op lijst II staat, is aanwezig hebben verboden, tenzij een van de [wettelijke uitzonderingen](/lachgas-verbod/#uitzonderingen) van toepassing is.",
      },
      { type: "h2", id: "hoeveelheden", text: "Welke hoeveelheden noemt de VNG?" },
      {
        type: "facts",
        items: [
          { label: "Particulier", value: "Meer dan 10 ampullen is een sterke aanwijzing dat het niet om gebruik als voedingsadditief gaat." },
          { label: "Aangewezen eindgebruikers", value: "Maximaal 5 verpakkingen van maximaal 50 ampullen." },
          { label: "Cilinders", value: "Grote cilinders passen niet bij huishoudelijk culinair gebruik; aannemelijk maken dat het om een uitzondering gaat, ligt bij de bezitter." },
        ],
      },
      {
        type: "p",
        text: "Bron: [VNG-factsheet landelijk lachgasverbod](https://vng.nl/artikelen/factsheet-landelijk-lachgasverbod), laatst bijgewerkt 4 september 2024. De laatste rij is een redactionele toelichting op het ‘strafbaar, tenzij’-principe, geen letterlijke norm.",
      },
      { type: "h2", id: "vervoer", text: "Vervoer" },
      {
        type: "p",
        text: "Ook vervoer valt onder het verbod. Technisch lachgas wordt in de praktijk rechtstreeks van producent aan eindgebruiker geleverd, waarbij een digitale verklaring en een uittreksel uit het Handelsregister worden gevraagd. Wie met cilinders in de auto rijdt zonder zo’n aantoonbare bestemming, loopt het risico op inbeslagname en vervolging.",
      },
      { type: "h2", id: "wat-gebeurt-er", text: "Wat gebeurt er als de politie lachgas aantreft?" },
      {
        type: "p",
        text: "De politie kan het lachgas in beslag nemen en proces-verbaal opmaken. Over de afdoening — zoals een strafbeschikking of vervolging — beslist het Openbaar Ministerie. Hoe zwaar een overtreding wordt bestraft, hangt af van onder meer de hoeveelheid en de omstandigheden.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Geen boetebedragen",
        text: "Op internet circuleren bedragen die niet altijd actueel of juist zijn. Zolang de redactie geen actuele officiële bron heeft gecontroleerd, noemen wij geen bedragen.",
      },
    ],
    faq: [
      {
        q: "Is één ballon of patroon al strafbaar?",
        a: "Recreatief bezit is in beginsel strafbaar, ongeacht de hoeveelheid. Hoe de politie en het OM in een concreet geval optreden, kan verschillen.",
      },
      {
        q: "Mag ik slagroompatronen in huis hebben?",
        a: "Ja, voor culinair gebruik. Volgens de VNG wijzen meer dan tien ampullen bij een particulier sterk op ander gebruik.",
      },
    ],
    sources: ["vng-factsheet", "rijk-verbod", "opiumwet", "rijk-nieuws-2022"],
    related: ["verbod", "regels-amsterdam", "soorten", "cilinders"],
    status: "legal-review",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
    uncertainties: ["De actuele OM-richtlijn voor afdoening van lachgaszaken is nog niet geverifieerd."],
  },

  // ───────────────────────────────────────────────────────── GEZONDHEID ──
  {
    id: "gezondheid",
    locale: "nl",
    path: "/gezondheid/",
    category: "gezondheid",
    eyebrow: "Gezondheid",
    title: "Lachgas en gezondheid",
    metaTitle: "Lachgas gezondheidsrisico’s op korte en lange termijn",
    metaDescription:
      "De gezondheidsrisico’s van lachgas: van duizeligheid en bevriezing tot vitamine B12-tekort en zenuwschade, op basis van Trimbos-instituut en DrugsInfo.",
    answer:
      "Lachgas kan direct duizeligheid, hoofdpijn, misselijkheid en tintelingen veroorzaken. Bij veel of vaak gebruik kan het vitamine B12 in het lichaam onwerkzaam maken, met zenuwschade en in ernstige gevallen verlamming als gevolg. Gas uit grote cilinders kan bovendien ernstige bevriezingswonden geven.",
    body: [
      {
        type: "callout",
        tone: "help",
        title: "Acute nood?",
        text: "Is iemand bewusteloos, ademt iemand slecht of raakt iemand ernstig gewond? Bel direct **112**. Bij tintelingen, gevoelloosheid of krachtverlies: neem contact op met de huisarts. Meer op [Hulp](/hulp/).",
      },
      { type: "h2", id: "korte-termijn", text: "Risico’s op korte termijn" },
      {
        type: "list",
        items: [
          "**Duizeligheid, hoofdpijn en misselijkheid.** Het Trimbos-instituut noemt ook tintelingen in handen en voeten.",
          "**Bijna-bewustzijnsverlies.** DrugsInfo beschrijft het effect als een gevoel van bijna buiten bewustzijn raken. Daardoor kun je vallen of je bezeren.",
          "**Zuurstof.** Medisch lachgas wordt altijd met zuurstof toegediend. Bij recreatief gebruik ontbreekt die zuurstof.",
          "**Bevriezing.** Brandwondencentra hebben ernstige vrieswonden gemeld bij mensen die ballonnen vulden uit grote tanks.",
          "**Verkeer.** Lachgas verstoort waarneming en coördinatie; de rijvaardigheid is volgens DrugsInfo waarschijnlijk het eerste uur verminderd.",
        ],
      },
      { type: "h2", id: "lange-termijn", text: "Risico’s op lange termijn" },
      {
        type: "p",
        text: "Het grootste gezondheidsrisico is schade aan het zenuwstelsel. Lachgas maakt vitamine B12 onwerkzaam. Bij veel of vaak gebruik kan dat leiden tot een tekort, met klachten als tintelingen, gevoelloosheid, krachtverlies en loopproblemen. Het Trimbos-instituut waarschuwt dat overmatig gebruik kan leiden tot zenuwschade en in het ergste geval tot verlamming. Lees de verdieping op [Lachgas en zenuwschade](/lachgas-zenuwschade/).",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Grote cilinders, grotere risico’s",
        text: "Het Trimbos-instituut signaleert dat gebruikers steeds vaker ballonnen vullen uit grote tanks in plaats van losse patronen. Daardoor neemt de kans op gezondheidsproblemen toe.",
      },
      { type: "h2", id: "afhankelijkheid", text: "Afhankelijkheid" },
      {
        type: "p",
        text: "Sommige mensen merken dat ze moeilijk kunnen stoppen en een sterke drang voelen om opnieuw en meer te gebruiken. DrugsInfo noemt dat signalen van afhankelijkheid. Hulp is anoniem beschikbaar via de [DrugsInfo Infolijn](/hulp/).",
      },
      { type: "h2", id: "risicogroepen", text: "Wie loopt extra risico?" },
      {
        type: "p",
        text: "Volgens DrugsInfo zijn jongeren en mensen met een lage B12-waarde — bijvoorbeeld door een vegetarisch of veganistisch eetpatroon — mogelijk kwetsbaarder. Extra vitamine B12 slikken tijdens gebruik lijkt het risico niet te verkleinen.",
      },
      { type: "h2", id: "amsterdam", text: "Wat zien Amsterdamse artsen?" },
      {
        type: "p",
        text: "Neurologen van het Amsterdamse OLVG meldden via [AT5](https://www.at5.nl/artikelen/196351/neuroloog-olvg-aantal-patienten-met-klachten-door-lachgas-verdriedubbeld) een sterke toename van het aantal patiënten met klachten door lachgas. Zie ook [Lachgas in Amsterdam](/amsterdam/).",
      },
    ],
    faq: [
      {
        q: "Is lachgas onschuldig omdat het ook in ziekenhuizen wordt gebruikt?",
        a: "Nee. Medisch lachgas wordt gedoseerd, gemengd met zuurstof en onder toezicht toegediend. Recreatief gebruik kent die waarborgen niet.",
      },
      {
        q: "Helpt het om vitamine B12 te slikken?",
        a: "Volgens DrugsInfo lijkt extra B12 tijdens gebruik het risico op zenuwschade niet te verkleinen. Stoppen en medische begeleiding zijn de belangrijkste stappen.",
      },
    ],
    sources: ["trimbos-lachgas", "drugsinfo-lachgas", "rijk-verbod", "at5-olvg", "rivm-cam-2026"],
    related: ["zenuwschade", "hulp", "verbod", "cilinders"],
    translationOf: "en-health",
    status: "medical-review",
    published: D,
    reviewed: D,
    nextReview: "2027-04-30",
    uncertainties: ["De RIVM CAM-notitie (maart 2026) is nog niet inhoudelijk verwerkt."],
  },
  {
    id: "zenuwschade",
    locale: "nl",
    path: "/lachgas-zenuwschade/",
    category: "gezondheid",
    eyebrow: "Gezondheid",
    title: "Lachgas, vitamine B12 en zenuwschade",
    metaTitle: "Lachgas, zenuwschade en vitamine B12: klachten en herstel",
    metaDescription:
      "Hoe lachgas vitamine B12 onwerkzaam maakt, welke zenuwklachten kunnen ontstaan, wanneer je naar een arts moet en wat bekend is over herstel.",
    answer:
      "Lachgas maakt vitamine B12 onwerkzaam. B12 is nodig voor gezonde zenuwen. Bij veel of herhaald gebruik kan daardoor schade aan het ruggenmerg en de zenuwen ontstaan, met tintelingen, gevoelloosheid, krachtverlies en loopproblemen. Wie zulke klachten heeft, moet stoppen met gebruik en snel een arts raadplegen.",
    body: [
      { type: "h2", id: "mechanisme", text: "Hoe ontstaat de schade?" },
      {
        type: "p",
        text: "Vitamine B12 bevat het element kobalt. Lachgas oxideert dat kobalt, waardoor B12 zijn functie verliest. Het lichaam heeft B12 nodig voor de myelineschede, de beschermlaag rond zenuwen. Zonder werkzame B12 kan die laag beschadigd raken — vooral in het ruggenmerg en de zenuwen in armen en benen. Deze uitleg is gebaseerd op het [ziekenhuisprotocol van Alrijne](https://www.alrijne.nl/media/5763/protocol-over-lachgas.pdf) en [DrugsInfo](https://www.drugsinfo.nl/lachgas/wat-je-moet-weten-over-lachgas/).",
      },
      { type: "h2", id: "klachten", text: "Klachten om serieus te nemen" },
      {
        type: "list",
        items: [
          "tintelingen of een doof gevoel in handen en voeten;",
          "krachtverlies in armen of benen;",
          "onzeker lopen of evenwichtsproblemen;",
          "problemen met plassen of ontlasting;",
          "concentratie- en geheugenproblemen.",
        ],
      },
      {
        type: "callout",
        tone: "help",
        title: "Ga naar een arts",
        text: "Herken je deze klachten na lachgasgebruik? Stop met gebruiken en neem dezelfde dag contact op met je huisarts of de huisartsenpost. Vertel eerlijk over het gebruik — artsen hebben die informatie nodig voor de juiste diagnose.",
      },
      { type: "h2", id: "diagnose", text: "Hoe stelt een arts de diagnose?" },
      {
        type: "p",
        text: "Een arts doet neurologisch onderzoek en laat bloed prikken. Naast vitamine B12 wordt vaak gekeken naar stoffen die laten zien of B12 in het lichaam nog werkt, zoals homocysteïne en methylmalonzuur. Een normale B12-waarde in het bloed sluit een probleem dus niet altijd uit.",
      },
      { type: "h2", id: "behandeling", text: "Behandeling en herstel" },
      {
        type: "p",
        text: "De belangrijkste stap is **stoppen met lachgas**. Artsen geven daarnaast vaak B12-injecties, en fysiotherapie helpt bij het herstel van kracht en coördinatie. Volgens DrugsInfo is de schade meestal te behandelen. Hoe snel en hoe volledig iemand herstelt, verschilt per persoon; bij ernstige schade kan herstel lang duren of onvolledig blijven.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "B12 slikken is geen bescherming",
        text: "Wie doorgaat met lachgas en ondertussen B12 slikt, is niet beschermd. Volgens DrugsInfo lijkt extra B12 tijdens gebruik het risico niet te verkleinen.",
      },
    ],
    sources: ["drugsinfo-lachgas", "trimbos-lachgas", "alrijne-protocol", "at5-olvg"],
    related: ["gezondheid", "hulp", "verbod"],
    status: "medical-review",
    published: D,
    reviewed: D,
    nextReview: "2027-04-30",
  },

  // ───────────────────────────────────────────────── SOORTEN & MERKEN ──
  {
    id: "soorten",
    locale: "nl",
    path: "/lachgas-soorten-en-toepassingen/",
    category: "soorten",
    eyebrow: "Soorten en toepassingen",
    title: "Lachgas: soorten en toepassingen",
    metaTitle: "Lachgas soorten: medisch, culinair en technisch",
    metaDescription:
      "Lachgas is distikstofmonoxide (N₂O). Wat is het verschil tussen medisch, culinair en technisch lachgas in toepassing, kwaliteit en regelgeving?",
    answer:
      "Lachgas is de gangbare naam voor distikstofmonoxide (N₂O), een kleurloos gas. Het wordt medisch gebruikt bij pijnbestrijding en anesthesie, culinair als drijfgas voor slagroom en technisch in onder meer motoren en industrie. Voor elke toepassing gelden eigen kwaliteitseisen en regels. Recreatief gebruik is in Nederland verboden.",
    body: [
      { type: "h2", id: "wat-is-lachgas", text: "Wat is lachgas?" },
      {
        type: "facts",
        items: [
          { label: "Scheikundige naam", value: "Distikstofmonoxide" },
          { label: "Formule", value: "N₂O — twee stikstofatomen, één zuurstofatoom" },
          { label: "CAS-nummer", value: "10024-97-2" },
          { label: "Als voedingsadditief", value: "E942" },
        ],
      },
      {
        type: "p",
        text: "Lachgas is onder normale omstandigheden een kleurloos gas. Onder druk wordt het vloeibaar opgeslagen in patronen en cilinders. Bij het vrijkomen zet het uit en koelt het sterk af — de reden dat gas uit grote cilinders bevriezingswonden kan veroorzaken.",
      },
      { type: "h2", id: "medisch", text: "Medisch lachgas" },
      {
        type: "p",
        text: "In de zorg wordt lachgas gebruikt voor pijnstilling en bij anesthesie, altijd gemengd met zuurstof en onder toezicht van professionals. Medisch lachgas is een geneesmiddel en moet aan farmaceutische kwaliteitseisen voldoen. Artsen, apothekers en ziekenhuizen hebben geen ontheffing nodig; fabrikanten en groothandels van medisch lachgas wel een opiumontheffing.",
      },
      { type: "h2", id: "culinair", text: "Culinair lachgas" },
      {
        type: "p",
        text: "In de keuken dient lachgas als drijfgas in slagroomspuiten, meestal in kleine stalen patronen. Als voedingsadditief valt het onder de uitzondering in artikel 15a van het Opiumwetbesluit. Het moet voldoen aan de eisen voor levensmiddelenadditieven.",
      },
      { type: "h2", id: "technisch", text: "Technisch lachgas" },
      {
        type: "p",
        text: "Technisch lachgas wordt onder meer gebruikt voor extra vermogen in verbrandingsmotoren en in industriële processen. Het is niet bedoeld voor menselijke consumptie. Volgens de VNG verloopt levering in de praktijk rechtstreeks van producent naar eindgebruiker, met een digitale verklaring en een uittreksel uit het Handelsregister.",
      },
      { type: "h2", id: "regels", text: "Verschillen in regelgeving" },
      {
        type: "facts",
        items: [
          { label: "Medisch", value: "Geneesmiddelenregels; opiumontheffing voor fabrikanten en groothandels." },
          { label: "Culinair", value: "Uitzondering ‘voedingsadditief’ (art. 15a Opiumwetbesluit); levensmiddelenregels." },
          { label: "Technisch", value: "Uitzondering ‘technische doeleinden’ (art. 15a Opiumwetbesluit); levering aan aantoonbare eindgebruikers." },
          { label: "Recreatief", value: "Verboden sinds 1 januari 2023 (Opiumwet, lijst II)." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Het etiket bepaalt niet of iets legaal is",
        text: "De uitzonderingen hangen af van de bestemming van het lachgas. Een cilinder met een culinair of technisch etiket die voor recreatief gebruik is bedoeld, valt gewoon onder het [verbod](/lachgas-verbod/).",
      },
      { type: "h2", id: "verpakkingen", text: "Patronen en cilinders" },
      {
        type: "p",
        text: "Patronen zijn kleine, eenmalige capsules voor slagroomspuiten. Cilinders zijn veel grotere drukhouders. Grote wegwerpcilinders veroorzaken in Amsterdam problemen in de afvalverwerking. Lees meer op [Lachgascilinders en patronen](/lachgascilinders/).",
      },
    ],
    sources: ["rijk-verbod", "stb-2022-461", "vng-factsheet", "drugsinfo-lachgas", "trimbos-lachgas"],
    related: ["verbod", "merken", "cilinders", "gezondheid"],
    translationOf: "en-types",
    status: "fact-check",
    published: D,
    reviewed: D,
    nextReview: "2027-04-30",
  },
  {
    id: "merken",
    locale: "nl",
    path: "/lachgas-merken/",
    category: "merken",
    eyebrow: "Merken · Onafhankelijk onderzoek",
    title: "Lachgasmerken in het nieuws",
    metaTitle: "Lachgas merken: wat openbare bronnen melden",
    metaDescription:
      "Welke lachgasmerken noemen journalisten en overheden, en waarom? Onafhankelijke duiding — geen aanbevelingen, prijzen of verkooppunten.",
    answer:
      "Op cilinders die op straat worden gevonden, staan vaak merknamen. Journalisten noemen daarbij onder meer Fastgas en Fastwhip. Deze pagina legt uit wat openbare bronnen daarover melden. Een merkvermelding is nooit een aanbeveling: wij geven geen prijzen, verkooppunten of productvergelijkingen.",
    body: [
      {
        type: "callout",
        tone: "warning",
        title: "Geen aanbeveling",
        text: "Lachgas Amsterdam verkoopt niets, verwijst niet naar verkopers en ontvangt geen vergoeding van merken. Merknamen noemen wij uitsluitend omdat ze in betrouwbare openbare bronnen voorkomen en relevant zijn voor het publieke debat.",
      },
      { type: "h2", id: "waarom", text: "Waarom merken een rol spelen in het debat" },
      {
        type: "p",
        text: "Sinds het verbod verschuift de aandacht van losse slagroompatronen naar grote cilinders. Op die cilinders staan merknamen, en dezelfde namen duiken op in nieuwsberichten, gemeentelijke discussies en de afvalverwerking. Wie wil begrijpen hoe de markt na 2023 werkt, komt die namen tegen.",
      },
      { type: "h2", id: "wat-bronnen-melden", text: "Wat openbare bronnen melden" },
      {
        type: "steps",
        items: [
          {
            title: "AVROTROS Radar — 22 september 2025",
            text: "Radar schreef dat straten ondanks het verbod bezaaid liggen met cilinders ‘met namen als Fastgast en Fastwhip’ (spelling zoals in het artikel). Radar beschrijft ook hoe eenvoudig lachgas ondanks het verbod verkrijgbaar blijft en dat de politie geen specifieke aanpak voor dit middel heeft.",
          },
          {
            title: "NRC — 19 juni 2025",
            text: "NRC publiceerde een onderzoek naar de internationale handel in lachgas. De redactie heeft de inhoud van dit artikel nog niet zelf gelezen en citeert er daarom niet uit.",
          },
          {
            title: "Gemeenteraad Rotterdam — 2025",
            text: "Naar aanleiding van het NRC-onderzoek werden in Rotterdam schriftelijke vragen gesteld over de ‘Rotterdamse rol in lachgasdistributie’.",
          },
        ],
      },
      { type: "h2", id: "merk-en-wet", text: "Merk, etiket en de wet" },
      {
        type: "p",
        text: "Veel cilinders worden aangeduid als product voor culinair gebruik. Juridisch beslist niet het etiket, maar de bestemming. Is het lachgas bedoeld om te inhaleren, dan valt het onder het [verbod](/lachgas-verbod/), ongeacht merk of verpakking.",
      },
      { type: "h2", id: "merkpaginas", text: "Merkpagina’s" },
      {
        type: "list",
        items: ["[FastGas — wat openbare bronnen melden](/lachgas-merken/fastgas/)"],
      },
      { type: "h2", id: "wat-we-niet-doen", text: "Wat je hier nooit vindt" },
      {
        type: "list",
        items: [
          "prijzen, aanbiedingen of beschikbaarheid;",
          "verkooppunten, webshops of leveranciers;",
          "productvergelijkingen of ‘beste merk’-lijstjes;",
          "instructies voor gebruik, vullen of overbrengen.",
        ],
      },
    ],
    sources: ["radar-2025", "nrc-2025", "rotterdam-vragen-2025", "rijk-verbod"],
    related: ["fastgas", "cilinders", "verbod", "soorten"],
    translationOf: "en-brands",
    status: "fact-check",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
    uncertainties: ["Het NRC-onderzoek van 19 juni 2025 is nog niet inhoudelijk gelezen."],
  },
  {
    id: "fastgas",
    locale: "nl",
    path: "/lachgas-merken/fastgas/",
    category: "merken",
    eyebrow: "Merken · FastGas",
    title: "FastGas: wat openbare bronnen melden",
    metaTitle: "FastGas lachgas: wat openbare bronnen melden",
    metaDescription:
      "FastGas is een merknaam op lachgascilinders die in Nederlandse straten worden gevonden. Wat openbare bronnen melden, wat de wet zegt en wat onbekend is.",
    answer:
      "FastGas is een merknaam op lachgascilinders. AVROTROS Radar noemde de naam in september 2025 bij cilinders die ondanks het verbod in Nederlandse straten liggen. Een culinair etiket maakt recreatief bezit niet legaal. Deze pagina is geen aanbeveling en bevat geen verkoop- of productinformatie.",
    body: [
      {
        type: "callout",
        tone: "warning",
        title: "Onafhankelijke duiding — geen endorsement",
        text: "Lachgas Amsterdam heeft geen enkele relatie met FastGas of met verkopers van lachgas. Wij noemen de naam alleen omdat die in openbare bronnen voorkomt.",
      },
      { type: "h2", id: "wat-bekend-is", text: "Wat is aantoonbaar bekend?" },
      {
        type: "list",
        items: [
          "AVROTROS Radar schreef op 22 september 2025 dat straten bezaaid liggen met cilinders ‘met namen als Fastgast en Fastwhip’. ‘Fastgast’ is de spelling uit het artikel.",
          "Sinds het verbod komen grote wegwerpcilinders steeds vaker terecht in het straatbeeld en het afval — ook in Amsterdam, waar ze explosies veroorzaken in de afvalverbrandingsovens van AEB.",
        ],
      },
      { type: "h2", id: "wat-onbekend-is", text: "Wat is (nog) niet geverifieerd?" },
      {
        type: "p",
        text: "Over eigendom, productielocatie, distributiestructuur en marktaandeel van het merk heeft de redactie nog geen informatie uit primaire of betrouwbare openbare bronnen kunnen controleren. Zolang dat zo is, doen wij daar geen uitspraken over.",
      },
      { type: "h2", id: "juridisch", text: "Wat zegt de wet?" },
      {
        type: "p",
        text: "Voor de Opiumwet maakt het merk niet uit. Lachgas dat bestemd is voor recreatief gebruik, is verboden — ook als de verpakking een culinaire toepassing noemt. Zie [Het lachgasverbod](/lachgas-verbod/) en [Lachgas bezit en vervoer](/lachgas-bezit/).",
      },
      { type: "h2", id: "gevonden", text: "Een cilinder gevonden?" },
      {
        type: "p",
        text: "Gooi een gevonden cilinder nooit bij het restafval: hij kan in de verbrandingsoven ontploffen. Lees wat je wél moet doen op [Lachgascilinder gevonden](/lachgascilinder-gevonden/).",
      },
    ],
    sources: ["radar-2025", "at5-explosies", "nhnieuws-loods", "rijk-verbod", "nrc-2025"],
    related: ["merken", "cilinders", "cilinder-gevonden", "verbod"],
    status: "fact-check",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
    uncertainties: [
      "Eigendoms- en distributiegegevens zijn niet geverifieerd en worden daarom niet vermeld.",
      "Het NRC-onderzoek van 19 juni 2025 is nog niet inhoudelijk gelezen.",
    ],
  },

  // ───────────────────────────────────────────────────────── CILINDERS ──
  {
    id: "cilinders",
    locale: "nl",
    path: "/lachgascilinders/",
    category: "cilinders",
    eyebrow: "Cilinders en patronen",
    title: "Lachgascilinders en patronen",
    metaTitle: "Lachgascilinders en patronen: risico’s, afval en inleveren",
    metaDescription:
      "Het verschil tussen lachgaspatronen en -cilinders, waarom wegwerpcilinders ontploffen in verbrandingsovens en hoe je ze in Amsterdam veilig afvoert.",
    answer:
      "Patronen zijn kleine capsules voor slagroomspuiten; cilinders zijn grote drukhouders. Lachgascilinders zijn gevaarlijk afval: in de verbrandingsoven kunnen ze ontploffen. Gooi ze nooit bij het restafval of PMD, maar breng ze naar een milieustraat — in Amsterdam een Afvalpunt.",
    body: [
      { type: "h2", id: "verschil", text: "Patroon of cilinder?" },
      {
        type: "facts",
        items: [
          { label: "Patroon", value: "Kleine stalen capsule voor eenmalig gebruik in een slagroomspuit." },
          { label: "Cilinder", value: "Grote drukhouder, vaak als wegwerpverpakking. Bevat het gas vloeibaar onder hoge druk." },
          { label: "Status", value: "Lachgascilinders gelden als gevaarlijk afval (Wet milieubeheer)." },
        ],
      },
      { type: "h2", id: "explosies", text: "Waarom cilinders gevaarlijk zijn in het afval" },
      {
        type: "p",
        text: "Een cilinder die bij het restafval belandt, gaat mee naar de afvalverbrandingsoven. Restgas en druk kunnen daar tot explosies leiden. AT5 berichtte dat lachgascilinders steeds vaker en harder ontploffen in de ovens van het Amsterdamse afvalenergiebedrijf **AEB**. AEB richtte een speciale loods in waar cilinders worden vermalen voordat ze de oven in gaan ([NH Nieuws](https://www.nhnieuws.nl/nieuws/346301/nieuwe-lachgasloods-moet-explosies-in-ovens-aeb-voorkomen-heel-veel-schade-voor-bedrijf)).",
      },
      { type: "h2", id: "inzameling", text: "Het Amsterdamse inleverexperiment" },
      {
        type: "p",
        text: "AEB opende een innamepunt waar mensen lege cilinders tegen een vergoeding konden inleveren. Volgens [AT5](https://www.at5.nl/artikelen/225064/aeb-stopt-na-vijf-maanden-met-innamepunt-lachgas-maar-liefst-80000-cilinders-ingeleverd) werden in vijf maanden zo’n 80.000 cilinders ingeleverd, waarna AEB met het innamepunt stopte. Na het afschaffen van de vergoeding werden cilinders volgens AT5 weer vaker in de stad gedumpt.",
      },
      {
        type: "p",
        text: "De kosten van het verwerken van cilinders komen uiteindelijk vaak bij bewoners terecht, meldde [NOS Nieuwsuur](https://nos.nl/nieuwsuur/artikel/2573331-problemen-lachgascilinders-in-afval-nemen-toe-bewoners-draaien-op-voor-kosten).",
      },
      { type: "h2", id: "afvoeren", text: "Hoe voer je een cilinder veilig af?" },
      {
        type: "steps",
        items: [
          { title: "Niet bij het gewone afval", text: "Nooit in de restafvalcontainer, de PMD-bak of het grofvuil." },
          { title: "Niet openmaken of verhitten", text: "Probeer een cilinder niet open te boren, door te prikken of in de buurt van vuur te leggen." },
          { title: "Naar het Afvalpunt", text: "Breng de cilinder naar een milieustraat. In Amsterdam heten die Afvalpunten. Controleer vooraf op [amsterdam.nl](https://www.amsterdam.nl) welke locatie cilinders accepteert." },
        ],
      },
      {
        type: "p",
        text: "Een cilinder op straat gevonden? Lees de stappen op [Lachgascilinder gevonden](/lachgascilinder-gevonden/).",
      },
    ],
    sources: ["rijk-verbod", "at5-explosies", "at5-aeb-stopt", "at5-dumping", "nhnieuws-loods", "nos-nieuwsuur-afval", "kamervragen-statiegeld-2023"],
    related: ["cilinder-gevonden", "amsterdam", "merken", "soorten"],
    translationOf: "en-cylinders",
    status: "fact-check",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
    uncertainties: [
      "Welke Amsterdamse Afvalpunten op dit moment lachgascilinders accepteren, is nog niet geverifieerd.",
      "Exacte data van start en einde van het AEB-innamepunt zijn nog niet gecontroleerd.",
    ],
  },
  {
    id: "cilinder-gevonden",
    locale: "nl",
    path: "/lachgascilinder-gevonden/",
    category: "cilinders",
    eyebrow: "Cilinders · Wat moet je doen",
    title: "Lachgascilinder gevonden: wat nu?",
    metaTitle: "Lachgascilinder gevonden? Zo handel je veilig in Amsterdam",
    metaDescription:
      "Lachgascilinder gevonden op straat of in je portiek? Stap voor stap wat je wel en niet doet, en waar je hem in Amsterdam inlevert of meldt.",
    answer:
      "Gooi een gevonden lachgascilinder niet bij het restafval: hij kan in de verbrandingsoven ontploffen. Maak hem niet open en houd hem uit de buurt van warmte. Breng hem naar een Afvalpunt of meld hem bij de gemeente als je hem niet zelf kunt of wilt verplaatsen.",
    body: [
      { type: "h2", id: "stappen", text: "Stap voor stap" },
      {
        type: "steps",
        items: [
          { title: "Laat de cilinder heel", text: "Niet openmaken, doorprikken, verhitten of in de zon laten liggen." },
          { title: "Niet in de container", text: "Ook niet in de PMD-bak of bij het grofvuil. In de verbrandingsoven kan een cilinder ontploffen." },
          { title: "Zelf wegbrengen", text: "Breng de cilinder naar een Amsterdams Afvalpunt. Controleer vooraf op amsterdam.nl welke locatie cilinders aanneemt." },
          { title: "Of melden", text: "Ligt de cilinder in de openbare ruimte en wil je hem niet zelf verplaatsen? Doe een melding openbare ruimte bij de gemeente via amsterdam.nl." },
        ],
      },
      { type: "h2", id: "veel-cilinders", text: "Veel cilinders of vermoeden van handel?" },
      {
        type: "p",
        text: "Zie je regelmatig grote aantallen cilinders, of vermoed je verkoop of opslag? Neem contact op met de politie via **0900-8844**. Anoniem melden kan bij **Meld Misdaad Anoniem: 0800-7000**. Bij direct gevaar: **112**.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Waarom dit ertoe doet",
        text: "Cilinders in het restafval veroorzaken explosies in de ovens van AEB. Dat leidt tot schade en hogere kosten, die uiteindelijk vaak bij bewoners terechtkomen. Meer achtergrond op [Lachgascilinders en patronen](/lachgascilinders/).",
      },
    ],
    sources: ["rijk-verbod", "at5-explosies", "nos-nieuwsuur-afval", "at5-dumping"],
    related: ["cilinders", "amsterdam", "regels-amsterdam"],
    status: "fact-check",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
    uncertainties: ["De exacte route voor meldingen van cilinders in de Amsterdamse openbare ruimte is nog niet geverifieerd."],
  },

  // ───────────────────────────────────────────────────────── AMSTERDAM ──
  {
    id: "amsterdam",
    locale: "nl",
    path: "/amsterdam/",
    category: "amsterdam",
    eyebrow: "Amsterdam",
    title: "Lachgas in Amsterdam",
    metaTitle: "Lachgas Amsterdam: regels, gezondheid, afval en overlast",
    metaDescription:
      "Lachgas in Amsterdam: hoe het landelijke verbod hier uitwerkt, wat de stad eerder zelf deed, de problemen met cilinders bij AEB en wat Amsterdamse artsen zien.",
    answer:
      "In Amsterdam geldt het landelijke lachgasverbod. De stad trad al vóór 2023 op tegen verkoop en overlast. Lachgas raakt Amsterdam op drie manieren: gezondheid, overlast in de openbare ruimte en cilinders die ontploffen in de afvalverbranding van AEB.",
    body: [
      { type: "h2", id: "waarom-amsterdam", text: "Waarom een Amsterdamse informatiebron?" },
      {
        type: "p",
        text: "Amsterdam is een stad van bewoners én miljoenen bezoekers. Regels, gezondheid en afval komen hier samen: op de grachten, in de parken, bij evenementen en in de afvalverwerking. Deze site brengt de landelijke regels en de Amsterdamse context samen, in het Nederlands en het Engels.",
      },
      { type: "h2", id: "regels", text: "Regels" },
      {
        type: "p",
        text: "Sinds 1 januari 2023 geldt het [landelijke verbod](/lachgas-verbod/). Amsterdam pakte daarvoor al straatverkoop aan (2019) en besloot tot een verbod in horeca en bij evenementen (2021). Hoe die lokale regels zich verhouden tot de Opiumwet, lees je op [Lachgasregels in Amsterdam](/lachgas-regels-amsterdam/).",
      },
      { type: "h2", id: "afval", text: "Afval: ontploffende cilinders" },
      {
        type: "p",
        text: "AEB, dat het Amsterdamse restafval verbrandt, kampt met explosies door lachgascilinders. Het bedrijf richtte een loods in om cilinders te vermalen en probeerde een inleverpunt met vergoeding, dat na ongeveer 80.000 cilinders stopte. Meer op [Lachgascilinders](/lachgascilinders/).",
      },
      { type: "h2", id: "gezondheid", text: "Gezondheid" },
      {
        type: "p",
        text: "Neurologen van het OLVG meldden een sterke toename van patiënten met klachten door lachgas. Zie [Lachgas en gezondheid](/gezondheid/) en [Lachgas en zenuwschade](/lachgas-zenuwschade/).",
      },
      { type: "h2", id: "officieel", text: "Officiële Amsterdamse informatie" },
      {
        type: "p",
        text: "Lachgas Amsterdam is **geen website van de gemeente Amsterdam**. Voor officiële gemeentelijke informatie, meldingen en de actuele regels ga je naar [amsterdam.nl](https://www.amsterdam.nl).",
      },
    ],
    sources: ["nos-amsterdam-2019", "nos-amsterdam-2021", "at5-explosies", "at5-aeb-stopt", "at5-dumping", "nhnieuws-loods", "at5-olvg", "vng-factsheet"],
    related: ["regels-amsterdam", "cilinders", "gezondheid", "hulp"],
    status: "fact-check",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
  },

  // ───────────────────────────────────────────────────────────── HULP ──
  {
    id: "hulp",
    locale: "nl",
    path: "/hulp/",
    category: "hulp",
    eyebrow: "Hulp en ondersteuning",
    title: "Hulp bij lachgas",
    metaTitle: "Hulp bij lachgas in Amsterdam: anoniem advies en zorg",
    metaDescription:
      "Hulp bij lachgasgebruik voor jezelf of een ander: anoniem advies via de DrugsInfo Infolijn, de huisarts, verslavingszorg in Amsterdam en 112 bij nood.",
    answer:
      "Bij acute nood bel je 112. Voor medische klachten zoals tintelingen of krachtverlies ga je naar de huisarts. Anonieme vragen over je eigen gebruik of dat van een ander kun je stellen aan de DrugsInfo Infolijn: 0900-1995. In Amsterdam biedt Jellinek verslavingszorg.",
    body: [
      { type: "h2", id: "nood", text: "Acute nood" },
      {
        type: "callout",
        tone: "help",
        title: "Bel 112",
        text: "Bij bewusteloosheid, ademhalingsproblemen, ernstige verwondingen of een ongeval. Blijf bij de persoon en volg de instructies van de meldkamer.",
      },
      { type: "h2", id: "medisch", text: "Medische klachten" },
      {
        type: "p",
        text: "Tintelingen, gevoelloosheid, krachtverlies of loopproblemen na lachgasgebruik zijn reden om dezelfde dag de huisarts of huisartsenpost te bellen. Lees waarom op [Lachgas en zenuwschade](/lachgas-zenuwschade/).",
      },
      { type: "h2", id: "anoniem", text: "Anoniem advies" },
      {
        type: "facts",
        items: [
          { label: "DrugsInfo Infolijn", value: "0900-1995 (€ 0,10 per minuut). Ook anoniem chatten of mailen via drugsinfo.nl." },
          { label: "Voor wie", value: "Vragen over je eigen gebruik, het gebruik van een ander of over verslaving." },
        ],
      },
      {
        type: "p",
        text: "Actuele openingstijden staan op [drugsinfo.nl](https://www.drugsinfo.nl/lachgas/wat-je-moet-weten-over-lachgas/).",
      },
      { type: "h2", id: "amsterdam", text: "Verslavingszorg in Amsterdam" },
      {
        type: "p",
        text: "[Jellinek](https://www.jellinek.nl) is de verslavingszorgorganisatie in de regio Amsterdam. Voor behandeling is meestal een verwijzing van de huisarts nodig; de huisarts is daarom een goed eerste aanspreekpunt.",
      },
      { type: "h2", id: "ouders", text: "Voor ouders en naasten" },
      {
        type: "p",
        text: "Maak je je zorgen over het gebruik van je kind, partner of vriend? Ook dan kun je anoniem bellen met de DrugsInfo Infolijn. Een rustig gesprek zonder oordeel werkt meestal beter dan confrontatie. Wees alert op de lichamelijke signalen die op [Lachgas en gezondheid](/gezondheid/) staan.",
      },
      { type: "h2", id: "jongeren", text: "Voor jongeren" },
      {
        type: "p",
        text: "Twijfel je over je eigen gebruik, of merk je dat stoppen moeilijk is? Je hoeft het niet alleen uit te zoeken. Chat of bel anoniem met DrugsInfo of praat met je huisarts — die heeft een beroepsgeheim.",
      },
    ],
    sources: ["drugsinfo-lachgas", "trimbos-lachgas"],
    related: ["gezondheid", "zenuwschade", "amsterdam"],
    status: "medical-review",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
    uncertainties: ["Openingstijden van de DrugsInfo Infolijn en het actuele aanbod van Jellinek zijn nog niet gecontroleerd."],
  },

  // ───────────────────────────────────────────────────────── REDACTIE ──
  {
    id: "over-ons",
    locale: "nl",
    path: "/over-ons/",
    category: "redactie",
    eyebrow: "Over ons",
    title: "Over Lachgas Amsterdam",
    metaTitle: "Over Lachgas Amsterdam: onafhankelijk en niet-commercieel",
    metaDescription:
      "Lachgas Amsterdam is een onafhankelijk, niet-commercieel informatieplatform over lachgas in Amsterdam. Wie we zijn, wat we doen en wat we nooit doen.",
    answer:
      "Lachgas Amsterdam is een onafhankelijk en volledig niet-commercieel informatieplatform. We leggen wetgeving, gezondheidsrisico’s en de Amsterdamse context helder uit, op basis van controleerbare bronnen. We verkopen niets, tonen geen advertenties en zijn geen overheidswebsite.",
    body: [
      { type: "h2", id: "missie", text: "Onze missie" },
      {
        type: "p",
        text: "Betrouwbare, begrijpelijke informatie over lachgas voor Amsterdammers en bezoekers — in het Nederlands en het Engels. Wij informeren over regels, risico’s en publieke veiligheid. Wij bevorderen geen gebruik.",
      },
      { type: "h2", id: "onafhankelijk", text: "Onafhankelijk en niet-commercieel" },
      {
        type: "list",
        items: [
          "geen verkoop, webshop, affiliate-links of advertenties;",
          "geen betaalde vermeldingen en geen sponsoring door merken of verkopers;",
          "geen tracking, geen cookies en geen nieuwsbrief;",
          "geen relatie met de gemeente Amsterdam of andere overheden.",
        ],
      },
      { type: "h2", id: "uitgever", text: "Uitgever" },
      {
        type: "callout",
        tone: "warning",
        title: "Nog in te vullen vóór lancering",
        text: "De gegevens van de uitgever worden vóór publicatie aangevuld, conform de wettelijke publicatieverplichtingen.",
      },
      { type: "h2", id: "werkwijze", text: "Werkwijze" },
      {
        type: "p",
        text: "Hoe wij bronnen kiezen, informatie controleren en pagina’s actueel houden, staat in het [redactiebeleid](/redactiebeleid/). Alle bronnen staan in het openbare [bronregister](/bronnen/).",
      },
    ],
    sources: [],
    related: ["redactiebeleid", "privacy", "disclaimer"],
    translationOf: "en-about",
    status: "draft",
    published: D,
    reviewed: D,
    nextReview: "2027-04-30",
    unlisted: true,
    uncertainties: ["Uitgeversgegevens ontbreken nog."],
  },
  {
    id: "redactiebeleid",
    locale: "nl",
    path: "/redactiebeleid/",
    category: "redactie",
    eyebrow: "Redactie",
    title: "Redactiebeleid",
    metaTitle: "Redactiebeleid van Lachgas Amsterdam",
    metaDescription:
      "Hoe Lachgas Amsterdam bronnen kiest, feiten controleert, juridische en medische content laat beoordelen en verouderde informatie signaleert.",
    answer:
      "Iedere pagina doorloopt vaste stappen: concept, feitencheck, juridische of medische controle, goedkeuring en publicatie. Wij baseren ons bij voorkeur op primaire en officiële bronnen, tonen per pagina de controledatum en markeren onzekerheden openlijk.",
    body: [
      { type: "h2", id: "bronnen", text: "Bronnen" },
      {
        type: "p",
        text: "Wij gebruiken bij voorkeur primaire bronnen: wetteksten, officiële bekendmakingen en informatie van de Rijksoverheid, het Openbaar Ministerie, RIVM, NVWA, het Trimbos-instituut en de Nederlandse Arbeidsinspectie. Journalistieke bronnen gebruiken we voor context en lokale ontwikkelingen, altijd met naam en datum.",
      },
      {
        type: "p",
        text: "In het [bronregister](/bronnen/) staat per bron hoe grondig die is gecontroleerd: volledig gelezen, alleen samenvatting gecontroleerd, of nog te beoordelen.",
      },
      { type: "h2", id: "workflow", text: "Redactionele statussen" },
      {
        type: "steps",
        items: [
          { title: "Concept", text: "Eerste versie, nog niet gecontroleerd." },
          { title: "Feitencheck", text: "Iedere bewering wordt aan een bron gekoppeld." },
          { title: "Juridische of medische controle", text: "Wetgeving wordt beoordeeld door een jurist, gezondheidsinformatie door een arts." },
          { title: "Goedgekeurd", text: "Klaar voor publicatie." },
          { title: "Gepubliceerd", text: "Openbaar en vindbaar in zoekmachines." },
          { title: "Update nodig", text: "Een bron of regel is veranderd; de pagina wordt herzien." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Transparant over de status",
        text: "Pagina’s die nog niet gepubliceerd zijn, tonen hun status bovenaan en worden niet door zoekmachines geïndexeerd.",
      },
      { type: "h2", id: "geen-verzinsels", text: "Wat wij nooit doen" },
      {
        type: "list",
        items: [
          "deskundigen, auteurs of reviews verzinnen;",
          "cijfers, incidenten of maatregelen noemen die we niet kunnen herleiden;",
          "individueel juridisch of medisch advies geven.",
        ],
      },
      { type: "h2", id: "actualiteit", text: "Actualiteit" },
      {
        type: "p",
        text: "Iedere pagina heeft een datum voor de volgende controle. Juridische pagina’s controleren we minimaal ieder kwartaal, gezondheidspagina’s minimaal ieder halfjaar, en direct wanneer regels veranderen.",
      },
    ],
    sources: [],
    related: ["over-ons", "disclaimer"],
    status: "approved",
    published: D,
    reviewed: D,
    nextReview: "2027-04-30",
    unlisted: true,
  },
  {
    id: "privacy",
    locale: "nl",
    path: "/privacy/",
    category: "redactie",
    eyebrow: "Privacy",
    title: "Privacyverklaring",
    metaTitle: "Privacyverklaring — Lachgas Amsterdam",
    metaDescription:
      "Lachgas Amsterdam verzamelt zo min mogelijk gegevens: geen cookies, geen analytics, geen formulieren en geen externe trackers.",
    answer:
      "Wij verzamelen zo min mogelijk gegevens. Deze website gebruikt geen cookies, geen analytics, geen formulieren en laadt geen externe scripts of lettertypen. Alleen de hostingprovider verwerkt technisch noodzakelijke serverlogs.",
    body: [
      { type: "h2", id: "cookies", text: "Cookies en tracking" },
      {
        type: "p",
        text: "Deze website plaatst geen cookies en gebruikt geen analytics, advertentienetwerken of social-media-plug-ins. Daarom tonen wij ook geen cookiebanner. Alle lettertypen worden vanaf ons eigen domein geladen.",
      },
      { type: "h2", id: "serverlogs", text: "Serverlogs" },
      {
        type: "p",
        text: "Bij ieder bezoek verwerkt de hostingprovider technische gegevens, zoals IP-adres, tijdstip en opgevraagde pagina. Dat is nodig om de website veilig en beschikbaar te houden (gerechtvaardigd belang, art. 6 lid 1 sub f AVG). De bewaartermijn en de naam van de hostingprovider worden vóór lancering aangevuld.",
      },
      { type: "h2", id: "geen-formulieren", text: "Geen formulieren" },
      {
        type: "p",
        text: "Er zijn geen formulieren, accounts of nieuwsbrieven. Wij vragen je dus nooit om persoonsgegevens.",
      },
      { type: "h2", id: "rechten", text: "Je rechten" },
      {
        type: "p",
        text: "Je hebt op grond van de AVG onder meer recht op inzage, correctie en verwijdering, en het recht om een klacht in te dienen bij de [Autoriteit Persoonsgegevens](https://www.autoriteitpersoonsgegevens.nl).",
      },
    ],
    sources: [],
    related: ["disclaimer", "over-ons"],
    status: "legal-review",
    published: D,
    reviewed: D,
    nextReview: "2027-04-30",
    unlisted: true,
    uncertainties: ["Hostingprovider, bewaartermijn van serverlogs en verwerkingsverantwoordelijke moeten nog worden ingevuld."],
  },
  {
    id: "disclaimer",
    locale: "nl",
    path: "/disclaimer/",
    category: "redactie",
    eyebrow: "Disclaimer",
    title: "Disclaimer",
    metaTitle: "Disclaimer — Lachgas Amsterdam",
    metaDescription:
      "De informatie op Lachgas Amsterdam is algemeen van aard en geen juridisch of medisch advies. Wij zijn geen overheidsinstantie en verkopen niets.",
    answer:
      "De informatie op deze website is algemeen en bedoeld voor educatie en publieke veiligheid. Het is geen individueel juridisch of medisch advies. Lachgas Amsterdam is geen overheidswebsite en is niet verbonden aan de gemeente Amsterdam.",
    body: [
      { type: "h2", id: "algemeen", text: "Algemene informatie" },
      {
        type: "p",
        text: "Wij doen ons best om informatie juist en actueel te houden. Regels kunnen echter veranderen. Iedere pagina toont daarom de datum van de laatste controle en de bronnen. Raadpleeg bij twijfel altijd de officiële bron.",
      },
      { type: "h2", id: "geen-advies", text: "Geen persoonlijk advies" },
      {
        type: "p",
        text: "Heb je een juridische vraag over je eigen situatie, neem dan contact op met een advocaat of het Juridisch Loket. Bij gezondheidsklachten ga je naar je huisarts, of bel je 112 bij nood.",
      },
      { type: "h2", id: "geen-overheid", text: "Geen overheidswebsite" },
      {
        type: "p",
        text: "Lachgas Amsterdam is niet verbonden aan de gemeente Amsterdam, de Rijksoverheid of een andere overheidsinstantie. Wij gebruiken geen overheidslogo’s of -huisstijl.",
      },
      { type: "h2", id: "externe-links", text: "Externe links" },
      {
        type: "p",
        text: "Wij linken uitsluitend naar bronnen en hulpinstanties, nooit naar verkopers. Voor de inhoud van externe websites zijn wij niet verantwoordelijk.",
      },
    ],
    sources: [],
    related: ["privacy", "redactiebeleid"],
    status: "legal-review",
    published: D,
    reviewed: D,
    nextReview: "2027-04-30",
    unlisted: true,
  },
];
