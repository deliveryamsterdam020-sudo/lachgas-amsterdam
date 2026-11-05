import type { Page } from "./types.ts";

// Nederlandstalige pagina's. Iedere pagina beantwoordt één zoekintentie.
// Gecontroleerd en vrijgegeven door de uitgever op 31 oktober 2026; iedere
// bewering is herleidbaar naar een volledig gelezen bron in het register.

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
      "Sinds 1 januari 2023 staat lachgas (distikstofmonoxide, N₂O) op lijst II van de Opiumwet. Bezit, verkoop, vervoer en productie voor recreatief gebruik zijn verboden, net als in- en uitvoer. Medisch, culinair en technisch gebruik blijven toegestaan. Het verbod geldt in heel Nederland, dus ook in Amsterdam en ook voor toeristen.",
    body: [
      { type: "h2", id: "wat-is-verboden", text: "Wat is er precies verboden?" },
      {
        type: "p",
        text: "Het kabinet heeft lachgas na een risicobeoordeling op **lijst II van de Opiumwet** geplaatst, de lijst waarop ook softdrugs staan. Het besluit dateert van 17 november 2022 en geldt sinds 1 januari 2023. Artikel 3 van de [Opiumwet](https://wetten.overheid.nl/BWBR0001941) verbiedt voor middelen op lijst II onder meer:",
      },
      {
        type: "list",
        items: [
          "lachgas **aanwezig hebben** (bezit);",
          "lachgas **verkopen**, afleveren of verstrekken;",
          "lachgas **vervoeren**;",
          "lachgas **bereiden of vervaardigen**;",
          "lachgas Nederland **binnenbrengen of uitvoeren**.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Gebruik zelf",
        text: "Volgens de [VNG-factsheet](https://vng.nl/artikelen/factsheet-landelijk-lachgasverbod) valt het enkele gebruik van lachgas niet onder het verbod in de Opiumwet. In de praktijk heeft wie lachgas gebruikt het ook in bezit — en dat bezit is wél verboden. In Amsterdam verbiedt bovendien de APV het gebruik van lachgas, zie [Lachgasregels in Amsterdam](/lachgas-regels-amsterdam/).",
      },
      { type: "h2", id: "uitzonderingen", text: "Welke wettelijke uitzonderingen bestaan er?" },
      {
        type: "p",
        text: "Lachgas heeft veel legitieme toepassingen. Artikel 15a van het Opiumwetbesluit bepaalt daarom dat de verboden niet gelden als het lachgas **bestemd is voor technische doeleinden of als voedingsadditief** ([Staatsblad 2022, 461](https://zoek.officielebekendmakingen.nl/stb-2022-461)). Medisch gebruik blijft eveneens toegestaan.",
      },
      {
        type: "facts",
        items: [
          { label: "Medisch", value: "Artsen, apothekers en ziekenhuizen hebben geen ontheffing nodig. Fabrikanten en groothandels van medisch lachgas wel een opiumontheffing." },
          { label: "Culinair", value: "Als voedingsadditief, bijvoorbeeld om slagroom op te kloppen. Kleine ampullen in de horeca mogen niet worden doorverkocht aan derden." },
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
        text: "Het verbod werkt volgens het principe ‘strafbaar, tenzij’: wie lachgas bij zich heeft, moet aannemelijk maken dat het onder een uitzondering valt. De nota van toelichting bij het besluit stelt dat aan particulieren per aankoop niet meer dan één verpakking van maximaal tien ampullen wordt geleverd, en dat **bezit van meer dan tien ampullen** een sterke aanwijzing is dat het niet om gebruik als voedingsadditief gaat. Zie ook [Lachgas bezit en vervoer](/lachgas-bezit/).",
      },
      { type: "h2", id: "handhaving", text: "Wie handhaaft het verbod?" },
      {
        type: "p",
        text: "Handhaving van de Opiumwet is voorbehouden aan de **politie**; politie en Openbaar Ministerie handhaven sinds 1 juli 2023. Gemeentelijke handhavers (boa’s) kunnen optreden op basis van de Algemene Plaatselijke Verordening (APV). De burgemeester kan op grond van artikel 13b Opiumwet een waarschuwing geven, een last onder dwangsom opleggen of een pand sluiten.",
      },
      { type: "h2", id: "straffen", text: "Welke straffen zijn mogelijk?" },
      {
        type: "p",
        text: "De strafmaat bepaalt het **Openbaar Ministerie** per zaak, aan de hand van de strafvorderingsrichtlijn voor softdrugs. Volgens het [OM](https://www.om.nl/actueel/nieuws/2023/07/01/lachgasverbod) geldt één ampul of één ballon als gebruikershoeveelheid; wie daarmee voor het eerst wordt aangetroffen, moet er afstand van doen. Bij grotere hoeveelheden volgt een geldboete of taakstraf, afhankelijk van hoeveelheid en omstandigheden. Bij zeer grote hoeveelheden kan een gevangenisstraf volgen, en herhaling kan leiden tot een onvoorwaardelijke gevangenisstraf van enkele maanden.",
      },
      { type: "h2", id: "verkeer", text: "Lachgas en verkeer" },
      {
        type: "p",
        text: "Lachgas verstoort waarneming en coördinatie. Volgens [DrugsInfo](https://www.drugsinfo.nl/lachgas/wat-je-moet-weten-over-lachgas/) zijn er aanwijzingen dat de rijvaardigheid het eerste uur na gebruik verminderd is. De Rijksoverheid noemt verkeersongevallen uitdrukkelijk als reden voor het verbod. Daarnaast verbiedt artikel 8 van de [Wegenverkeerswet 1994](https://wetten.overheid.nl/BWBR0006622) om een voertuig te besturen onder invloed van een stof waarvan je weet of redelijkerwijs moet weten dat die de rijvaardigheid kan verminderen.",
      },
      { type: "h2", id: "afval", text: "Ook de afvalfase is geregeld" },
      {
        type: "p",
        text: "Lachgascilinders gelden als **gevaarlijk afval**. Ze mogen niet bij het gewone afval en horen bij een milieustraat — in Amsterdam heet dat een Recyclepunt. Lees hoe je dat veilig doet op [Lachgascilinder gevonden](/lachgascilinder-gevonden/).",
      },
      { type: "h2", id: "officiele-informatie", text: "Waar vind je officiële informatie?" },
      {
        type: "list",
        items: [
          "[Rijksoverheid — Verbod op lachgas](https://www.rijksoverheid.nl/onderwerpen/drugs/verbod-op-lachgas)",
          "[Openbaar Ministerie — Lachgasverbod, vragen en antwoorden](https://www.om.nl/actueel/nieuws/2023/07/01/lachgasverbod)",
          "[Opiumwet op wetten.overheid.nl](https://wetten.overheid.nl/BWBR0001941)",
          "[Staatsblad 2022, 461 — wijziging Opiumwetbesluit](https://zoek.officielebekendmakingen.nl/stb-2022-461)",
          "[VNG — Factsheet landelijk lachgasverbod](https://vng.nl/artikelen/factsheet-landelijk-lachgasverbod)",
        ],
      },
    ],
    faq: [
      { q: "Sinds wanneer is lachgas verboden?", a: "Sinds 1 januari 2023. Op die datum is lachgas op lijst II van de Opiumwet geplaatst. Politie en OM handhaven sinds 1 juli 2023." },
      {
        q: "Is slagroompatronen kopen nog toegestaan?",
        a: "Gebruik als voedingsadditief — zoals slagroom kloppen — valt onder de wettelijke uitzondering. Aan particulieren wordt per aankoop maximaal één verpakking van tien ampullen geleverd; bezit van meer dan tien ampullen is een sterke aanwijzing dat het niet om culinair gebruik gaat.",
      },
      { q: "Geldt het verbod ook voor toeristen?", a: "Ja. De Opiumwet geldt voor iedereen die zich in Nederland bevindt, ongeacht nationaliteit of verblijfsduur." },
      {
        q: "Hoe hoog is de boete?",
        a: "Boetes en straffen worden per zaak door het Openbaar Ministerie bepaald. Volgens het OM volgt bij meer dan een gebruikershoeveelheid een geldboete of taakstraf, en bij zeer grote hoeveelheden mogelijk een gevangenisstraf.",
      },
    ],
    sources: ["rijk-verbod", "rijk-nieuws-2022", "opiumwet", "stb-2022-461", "om-lachgasverbod-2023", "vng-factsheet", "drugsinfo-lachgas", "wvw-1994"],
    related: ["bezit", "regels-amsterdam", "soorten", "gezondheid"],
    translationOf: "en-laws",
    status: "published",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
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
      "Welke lachgasregels gelden er in Amsterdam? Het landelijke verbod, het gebruiksverbod in de APV en de eerdere Amsterdamse maatregelen — met bronnen.",
    answer:
      "In Amsterdam geldt het landelijke lachgasverbod uit de Opiumwet: bezit, verkoop en vervoer voor recreatief gebruik zijn verboden. Daarnaast verbiedt de Amsterdamse APV het gebruik van lachgas. Vóór 2023 trad de stad al op tegen straatverkoop en verbood ze de verkoop in de horeca en bij evenementen.",
    body: [
      { type: "h2", id: "landelijk", text: "Het landelijke verbod geldt ook in Amsterdam" },
      {
        type: "p",
        text: "De Opiumwet is een landelijke wet. Het [lachgasverbod](/lachgas-verbod/) geldt daarom overal in Amsterdam: op straat, in parken, op het water, in de horeca en bij evenementen. Er bestaan geen gebieden waar recreatief bezit wel is toegestaan.",
      },
      { type: "h2", id: "apv", text: "Gebruik verboden in de APV" },
      {
        type: "p",
        text: "Naast de Opiumwet heeft Amsterdam eigen regels in de Algemene Plaatselijke Verordening (APV). In een [raadsinformatiebrief van 9 februari 2023](https://assets.amsterdam.nl/publish/pages/1027459/2023-02-08_raadsinformatiebrief_apv_wijziging_blowverbod_en_alcoholoverlastgebied_1_.pdf) schrijft het college dat het gebruik van lachgas in de APV al verboden is. Op APV-regels kunnen ook gemeentelijke handhavers optreden.",
      },
      { type: "h2", id: "geschiedenis", text: "Amsterdam was al eerder actief" },
      {
        type: "steps",
        items: [
          {
            title: "September 2019 — straatverkoop aangepakt",
            text: "Burgemeester Halsema meldde de raad een ‘explosief toenemende overlast’ door straatverkoop. Verkoop in de openbare ruimte zonder vergunning werd niet toegestaan, ook als het lachgas online was besteld; in evenementenvergunningen kwam een verkoopverbod ([NOS](https://nos.nl/artikel/2300206-amsterdam-opent-jacht-op-verkopers-van-lachgas)).",
          },
          {
            title: "April 2021 — verbod in horeca en bij evenementen",
            text: "De gemeenteraad stemde in met een verbod op de verkoop van lachgas in de horeca en bij evenementen ([NOS](https://nos.nl/artikel/2378722-lachgas-wordt-ook-verboden-in-amsterdam)).",
          },
          {
            title: "Januari 2023 — landelijk verbod",
            text: "Op 1 januari 2023 ging het landelijke verbod in. Sindsdien regelt de Opiumwet bezit, verkoop en vervoer.",
          },
        ],
      },
      { type: "h2", id: "wat-mag-de-gemeente", text: "Wat mag de gemeente nu nog zelf regelen?" },
      {
        type: "p",
        text: "Volgens de [VNG](https://vng.nl/artikelen/factsheet-landelijk-lachgasverbod) zijn specifieke lokale verkoopverboden voor lachgas sinds het landelijke verbod van rechtswege vervallen; een nieuw lokaal verkoopverbod zou onverbindend zijn. Gemeenten houden wel:",
      },
      {
        type: "list",
        items: [
          "**APV-regels** tegen gebruik, overlast en openlijk drugsgebruik, waarop boa’s kunnen handhaven;",
          "de bevoegdheid van de burgemeester op grond van **artikel 13b Opiumwet** (waarschuwing, last onder dwangsom of sluiting van een pand);",
          "regels voor **afval en de openbare ruimte**, zoals de inzameling van cilinders.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Gemeentelijke regels kunnen veranderen",
        text: "De actuele tekst van de Amsterdamse APV staat op [lokaleregelgeving.overheid.nl](https://lokaleregelgeving.overheid.nl). Officiële gemeentelijke informatie vind je op [amsterdam.nl](https://www.amsterdam.nl).",
      },
      { type: "h2", id: "praktijk", text: "Wat betekent dit in de praktijk?" },
      {
        type: "p",
        text: "Wie in Amsterdam lachgas voor recreatief gebruik bij zich heeft, overtreedt de Opiumwet; wie het gebruikt, ook de APV. De politie kan het lachgas in beslag nemen. Over straffen beslist het Openbaar Ministerie. Voor bezoekers uit het buitenland gelden dezelfde regels — zie [Visiting Amsterdam](/en/visiting-amsterdam/). Last van overlast? Lees [Lachgasoverlast in Amsterdam](/lachgas-overlast-amsterdam/).",
      },
    ],
    faq: [
      { q: "Is lachgas in Amsterdam strenger verboden dan elders?", a: "Het strafrechtelijke verbod is landelijk en overal gelijk. Gemeenten verschillen wel in hun APV-regels en handhavingsbeleid; in Amsterdam is het gebruik van lachgas ook in de APV verboden." },
      { q: "Mag ik lachgas gebruiken in een Amsterdams park?", a: "Nee. Recreatief bezit is verboden op grond van de Opiumwet, en de Amsterdamse APV verbiedt het gebruik van lachgas." },
    ],
    sources: ["rijk-verbod", "amsterdam-rib-2023", "vng-factsheet", "nos-amsterdam-2019", "nos-amsterdam-2021", "om-lachgasverbod-2023"],
    related: ["verbod", "uitgaan", "overlast", "amsterdam"],
    translationOf: "en-is-legal",
    status: "published",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
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
      "Mag je lachgas bezitten of vervoeren? Wat ‘strafbaar, tenzij’ betekent, welke hoeveelheden gelden en wat het OM doet als de politie lachgas vindt.",
    answer:
      "Recreatief bezit en vervoer van lachgas zijn sinds 1 januari 2023 verboden. Het verbod werkt als ‘strafbaar, tenzij’: wie lachgas bij zich heeft, moet aannemelijk maken dat het voor medisch, culinair of technisch gebruik is. Volgens het OM geldt één ampul of ballon als gebruikershoeveelheid; bij meer volgt een boete of taakstraf.",
    body: [
      { type: "h2", id: "bezit", text: "Bezit: ‘aanwezig hebben’" },
      {
        type: "p",
        text: "De Opiumwet spreekt van ‘aanwezig hebben’. Dat is ruimer dan eigendom: ook lachgas in je tas, auto of woning valt eronder. Omdat lachgas op lijst II staat, is aanwezig hebben verboden, tenzij een van de [wettelijke uitzonderingen](/lachgas-verbod/#uitzonderingen) van toepassing is.",
      },
      { type: "h2", id: "hoeveelheden", text: "Welke hoeveelheden gelden?" },
      {
        type: "facts",
        items: [
          { label: "Gebruikershoeveelheid", value: "Eén ampul of één ballon (Openbaar Ministerie)." },
          { label: "Particulier, culinair", value: "Per aankoop maximaal één verpakking van tien ampullen; bezit van meer dan tien ampullen is een sterke aanwijzing voor ander gebruik (nota van toelichting, Stb. 2022, 461)." },
          { label: "Aangewezen eindgebruikers", value: "Maximaal 5 verpakkingen van maximaal 50 ampullen in bezit." },
        ],
      },
      { type: "h2", id: "vervoer", text: "Vervoer" },
      {
        type: "p",
        text: "Ook vervoer valt onder het verbod. Technisch lachgas wordt in de praktijk rechtstreeks van producent aan eindgebruiker geleverd, waarbij een digitale verklaring en een uittreksel uit het Handelsregister worden gevraagd ([VNG](https://vng.nl/artikelen/factsheet-landelijk-lachgasverbod)). Wie cilinders vervoert zonder zo’n aantoonbare bestemming, loopt het risico op inbeslagname en vervolging.",
      },
      { type: "h2", id: "wat-gebeurt-er", text: "Wat gebeurt er als de politie lachgas aantreft?" },
      {
        type: "steps",
        items: [
          { title: "Inbeslagname", text: "De politie kan het lachgas in beslag nemen. Wie voor het eerst met één ampul of ballon wordt aangetroffen, moet er volgens het OM afstand van doen." },
          { title: "Boete of taakstraf", text: "Bij grotere hoeveelheden volgt een geldboete of taakstraf, afhankelijk van de hoeveelheid en de omstandigheden." },
          { title: "Gevangenisstraf", text: "Bij zeer grote hoeveelheden kan een gevangenisstraf volgen. Herhaling kan leiden tot een onvoorwaardelijke gevangenisstraf van enkele maanden. Handel of een bedrijfsmatige aanpak weegt zwaarder." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "De strafmaat bepaalt het OM",
        text: "Boetes en straffen worden per zaak bepaald door het Openbaar Ministerie, aan de hand van de strafvorderingsrichtlijn voor softdrugs. Bron: [OM — Lachgasverbod](https://www.om.nl/actueel/nieuws/2023/07/01/lachgasverbod).",
      },
    ],
    faq: [
      { q: "Is één ballon of patroon al strafbaar?", a: "Recreatief bezit is verboden, ongeacht de hoeveelheid. Volgens het OM moet wie voor het eerst met één ampul of ballon wordt aangetroffen daar afstand van doen." },
      { q: "Mag ik slagroompatronen in huis hebben?", a: "Ja, voor culinair gebruik. Bezit van meer dan tien ampullen is volgens de toelichting bij het besluit een sterke aanwijzing voor ander gebruik." },
    ],
    sources: ["om-lachgasverbod-2023", "stb-2022-461", "vng-factsheet", "opiumwet", "rijk-verbod"],
    related: ["verbod", "regels-amsterdam", "soorten", "cilinders"],
    status: "published",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
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
      "De gezondheidsrisico’s van lachgas: van duizeligheid en bevriezing tot vitamine B12-tekort en zenuwschade, op basis van RIVM, Trimbos-instituut en DrugsInfo.",
    answer:
      "Lachgas kan direct duizeligheid, hoofdpijn, misselijkheid en tintelingen veroorzaken. Er is geen veilige gebruikslimiet: volgens het RIVM kan zelfs één ballon tintelingen in handen en voeten geven. Bij veel of vaak gebruik maakt lachgas vitamine B12 onwerkzaam, met zenuwschade en in ernstige gevallen verlamming als gevolg.",
    body: [
      {
        type: "callout",
        tone: "help",
        title: "Acute nood?",
        text: "Is iemand bewusteloos, ademt iemand slecht of raakt iemand ernstig gewond? Bel direct **112**. Bij tintelingen, gevoelloosheid of krachtverlies: neem contact op met de huisarts. Meer op [Hulp](/hulp/).",
      },
      { type: "h2", id: "geen-veilige-grens", text: "Geen veilige gebruikslimiet" },
      {
        type: "p",
        text: "In zijn [notitie van maart 2026](https://www.rivm.nl/sites/default/files/2026-03/CAM-notitie-Stand-van-zaken-omtrent-lachgas-%282019-2025%29-beveiligd.pdf) herhaalt het RIVM de conclusie van de risicobeoordeling: er is geen veilige gebruikslimiet. Zelfs het inademen van één ballon kan al leiden tot tintelingen in handen en voeten, wat kan wijzen op schade aan hersenen of zenuwen.",
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
        text: "Het grootste gezondheidsrisico is schade aan het zenuwstelsel. Lachgas maakt vitamine B12 onwerkzaam. Bij veel of vaak gebruik kan dat leiden tot een functioneel tekort, met klachten als tintelingen, gevoelloosheid, krachtverlies en loopproblemen. Het Trimbos-instituut waarschuwt dat overmatig gebruik kan leiden tot zenuwschade en in het ergste geval tot verlamming. Lees de verdieping op [Lachgas en zenuwschade](/lachgas-zenuwschade/).",
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
        text: "Frequente gebruikers melden craving en gewenning, en volgens het RIVM zijn er steeds meer signalen dat een deel van de gebruikers tekenen van verslaving vertoont. Lees meer op [Lachgas en verslaving](/lachgas-verslaving/).",
      },
      { type: "h2", id: "risicogroepen", text: "Wie loopt extra risico?" },
      {
        type: "p",
        text: "Volgens DrugsInfo zijn jongeren en mensen met een lage B12-waarde — bijvoorbeeld door een vegetarisch of veganistisch eetpatroon — mogelijk kwetsbaarder. Extra vitamine B12 slikken tijdens gebruik lijkt het risico niet te verkleinen.",
      },
      { type: "h2", id: "cijfers", text: "Wat laten de cijfers zien?" },
      {
        type: "p",
        text: "Het recreatieve gebruik is sinds 2019 gedaald: in 2024 had 0,5% van de volwassenen in het afgelopen jaar lachgas gebruikt, tegen 2,7% in 2018. Tegelijk stegen de informatieverzoeken over lachgas bij het Nationaal Vergiftigingen Informatie Centrum van 24 in 2023 naar 48 in 2024, en nemen meldingen van neurologische klachten volgens het RIVM toe. Er blijft een kleine, kwetsbare groep met ernstige klachten.",
      },
      { type: "h2", id: "amsterdam", text: "Wat zien Amsterdamse artsen?" },
      {
        type: "p",
        text: "In augustus 2019 meldde een neuroloog van het Amsterdamse OLVG via [AT5](https://www.at5.nl/artikelen/196351/neuroloog-olvg-aantal-patienten-met-klachten-door-lachgas-verdriedubbeld) dat het aantal patiënten met neurologische klachten door lachgas was verdrievoudigd: van vier in 2018 tot twaalf in 2019 tot dan toe. Volgens het RIVM stegen na 2019 vooral in Amsterdam ook de verwijzingen naar revalidatie; sinds 2023 nemen die af. Zie ook [Lachgas in Amsterdam](/amsterdam/).",
      },
    ],
    faq: [
      { q: "Is lachgas onschuldig omdat het ook in ziekenhuizen wordt gebruikt?", a: "Nee. Medisch lachgas wordt gedoseerd, gemengd met zuurstof en onder toezicht toegediend. Recreatief gebruik kent die waarborgen niet." },
      { q: "Helpt het om vitamine B12 te slikken?", a: "Volgens DrugsInfo lijkt extra B12 tijdens gebruik het risico op zenuwschade niet te verkleinen. Stoppen en medische begeleiding zijn de belangrijkste stappen." },
      { q: "Is één ballon veilig?", a: "Nee. Volgens het RIVM is er geen veilige gebruikslimiet; zelfs één ballon kan al tintelingen in handen en voeten geven." },
    ],
    sources: ["rivm-cam-2026", "trimbos-lachgas", "drugsinfo-lachgas", "rijk-verbod", "at5-olvg"],
    related: ["zenuwschade", "verslaving", "hulp", "verbod"],
    translationOf: "en-health",
    status: "published",
    published: D,
    reviewed: D,
    nextReview: "2027-04-30",
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
        text: "Vitamine B12 bevat het element kobalt. Lachgas oxideert dat kobalt in de werkzame vormen van B12, waardoor enzymen die het lichaam nodig heeft voor de aanmaak en het onderhoud van de myelineschede — de beschermlaag rond zenuwen — worden geremd. Daardoor stapelen de stoffen homocysteïne en methylmalonzuur zich op. De schade treft vooral de achterstrengen van het ruggenmerg en de zenuwen in armen en benen. Deze uitleg is gebaseerd op een [medisch-wetenschappelijke publicatie](https://pmc.ncbi.nlm.nih.gov/articles/PMC10575797/) en [DrugsInfo](https://www.drugsinfo.nl/lachgas/wat-je-moet-weten-over-lachgas/).",
      },
      { type: "h2", id: "klachten", text: "Klachten om serieus te nemen" },
      {
        type: "list",
        items: [
          "tintelingen of een doof gevoel in handen en voeten;",
          "krachtverlies of uitvalsverschijnselen in armen of benen;",
          "onzeker lopen of evenwichtsproblemen.",
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
        text: "Een arts doet neurologisch onderzoek en laat bloed prikken. Naast vitamine B12 wordt gekeken naar homocysteïne en methylmalonzuur, omdat die beter laten zien of B12 in het lichaam nog werkt. Een normale B12-waarde sluit een probleem niet uit: in de medische literatuur wordt die bij 20 tot 40 procent van de patiënten beschreven.",
      },
      { type: "h2", id: "behandeling", text: "Behandeling en herstel" },
      {
        type: "p",
        text: "De belangrijkste stap is **stoppen met lachgas**. Artsen geven daarnaast hooggedoseerde vitamine B12, en fysiotherapie helpt bij het herstel van kracht en coördinatie. Volgens DrugsInfo is de schade meestal te behandelen. Hoe snel en hoe volledig iemand herstelt, verschilt per persoon; bij ernstige schade kan herstel lang duren of onvolledig blijven.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "B12 slikken is geen bescherming",
        text: "Wie doorgaat met lachgas en ondertussen B12 slikt, is niet beschermd. Volgens DrugsInfo lijkt extra B12 tijdens gebruik het risico niet te verkleinen.",
      },
      { type: "h2", id: "trends", text: "Hoe vaak komt het voor?" },
      {
        type: "p",
        text: "Volgens het [RIVM](https://www.rivm.nl/sites/default/files/2026-03/CAM-notitie-Stand-van-zaken-omtrent-lachgas-%282019-2025%29-beveiligd.pdf) daalde het aantal patiënten met lachgasgerelateerde klachten bij neurologen fors na het verbod, maar nemen meldingen van neurologische klachten bij het Nationaal Vergiftigingen Informatie Centrum sinds 2024 weer toe. Een landelijk volledige registratie bestaat niet.",
      },
    ],
    sources: ["drugsinfo-lachgas", "trimbos-lachgas", "meissner-2023", "rivm-cam-2026"],
    related: ["gezondheid", "verslaving", "hulp"],
    status: "published",
    published: D,
    reviewed: D,
    nextReview: "2027-04-30",
  },
  {
    id: "verslaving",
    locale: "nl",
    path: "/lachgas-verslaving/",
    category: "gezondheid",
    eyebrow: "Gezondheid",
    title: "Lachgas en verslaving",
    metaTitle: "Lachgasverslaving: signalen, cijfers en hulp",
    metaDescription:
      "Kun je verslaafd raken aan lachgas? Wat het RIVM en DrugsInfo zeggen over afhankelijkheid, de signalen om op te letten en waar je in Amsterdam hulp vindt.",
    answer:
      "Lichamelijke afhankelijkheid van lachgas wordt als gering ingeschat, geestelijke afhankelijkheid als gering tot matig. Toch melden frequente gebruikers craving en gewenning, en volgens het RIVM zijn er steeds meer signalen van verslaving en zoeken meer mensen hulp. Hulp is anoniem beschikbaar via de DrugsInfo Infolijn en de huisarts.",
    body: [
      { type: "h2", id: "afhankelijkheid", text: "Kun je verslaafd raken aan lachgas?" },
      {
        type: "p",
        text: "De risicobeoordeling uit 2019 schat het risico op lichamelijke afhankelijkheid als gering en op geestelijke afhankelijkheid als gering tot matig. In de [RIVM-notitie van maart 2026](https://www.rivm.nl/sites/default/files/2026-03/CAM-notitie-Stand-van-zaken-omtrent-lachgas-%282019-2025%29-beveiligd.pdf) staat echter dat frequente gebruikers symptomen van craving en gewenning rapporteren, en dat er steeds meer signalen zijn dat een deel van de gebruikers tekenen van verslaving vertoont.",
      },
      { type: "h2", id: "signalen", text: "Signalen om op te letten" },
      {
        type: "list",
        items: [
          "een sterke drang om opnieuw en meer te gebruiken;",
          "steeds meer ballonnen nodig hebben voor hetzelfde effect;",
          "gebruik dat begint in een groep maar steeds vaker alleen plaatsvindt;",
          "lichamelijke klachten zoals tintelingen of krachtverlies, en toch doorgaan;",
          "problemen op school, werk, met geld of huisvesting die samenhangen met gebruik.",
        ],
      },
      {
        type: "p",
        text: "Het eerste signaal noemt [DrugsInfo](https://www.drugsinfo.nl/lachgas/wat-je-moet-weten-over-lachgas/); de overige komen uit de waarnemingen in de RIVM-notitie.",
      },
      { type: "h2", id: "cijfers", text: "Hoeveel mensen zoeken hulp?" },
      {
        type: "p",
        text: "In 2024 werden 190 mensen in de verslavingszorg behandeld voor lachgasproblematiek. Dat is minder dan 1% van alle mensen in behandeling voor drugs, maar de problematiek kan ernstig zijn: het gaat vaak om jongeren en jongvolwassenen met bredere problemen op het gebied van gezondheid, onderwijs, schulden of huisvesting. Een deel van de problematische gebruikers zoekt pas laat of geen hulp.",
      },
      { type: "h2", id: "hulp", text: "Waar vind je hulp?" },
      {
        type: "facts",
        items: [
          { label: "Anoniem advies", value: "DrugsInfo Infolijn: 0900-1995 (€ 0,10 per minuut), maandag t/m vrijdag 9.00–17.00 uur. Chatten kan gratis van 13.00–17.00 uur." },
          { label: "Huisarts", value: "Eerste aanspreekpunt voor behandeling en verwijzing; de huisarts heeft een beroepsgeheim." },
          { label: "Amsterdam", value: "Jellinek biedt verslavingszorg en preventie, met meerdere locaties in Amsterdam." },
        ],
      },
      { type: "p", text: "Meer adressen en tips voor ouders en naasten staan op [Hulp bij lachgas](/hulp/)." },
    ],
    sources: ["rivm-cam-2026", "drugsinfo-lachgas", "drugsinfo-contact", "jellinek-locaties"],
    related: ["hulp", "gebruik", "gezondheid", "zenuwschade"],
    status: "published",
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
        text: "In de keuken dient lachgas als drijfgas in slagroomspuiten, meestal in kleine stalen patronen. Als voedingsadditief valt het onder de uitzondering in artikel 15a van het Opiumwetbesluit. Aan particulieren wordt per aankoop maximaal één verpakking van tien ampullen geleverd.",
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
        text: "Patronen zijn kleine, eenmalige capsules voor slagroomspuiten. Cilinders zijn veel grotere drukhouders. Volgens het RIVM zijn de kleine patronen uit het straatbeeld verdwenen en vervangen door wegwerpcilinders. Die veroorzaken in Amsterdam problemen in de afvalverwerking — lees meer op [Lachgascilinders en patronen](/lachgascilinders/).",
      },
    ],
    sources: ["rijk-verbod", "rijk-nieuws-2022", "stb-2022-461", "vng-factsheet", "drugsinfo-lachgas", "rivm-cam-2026"],
    related: ["verbod", "merken", "cilinders", "gezondheid"],
    translationOf: "en-types",
    status: "published",
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
      "Welke lachgasmerken noemen het RIVM, journalisten en gemeenteraden, en waarom? Onafhankelijke duiding — geen aanbevelingen, prijzen of verkooppunten.",
    answer:
      "Op cilinders die op straat worden gevonden, staan merknamen. Het RIVM noemt Fastgas als merk van de wegwerpcilinders die de kleine slagroompatronen uit het straatbeeld hebben verdrongen; AVROTROS Radar noemt ook Fastwhip. Een merkvermelding is nooit een aanbeveling: wij geven geen prijzen, verkooppunten of productvergelijkingen.",
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
        text: "Sinds het verbod is de markt verschoven van losse slagroompatronen naar grote wegwerpcilinders. Op die cilinders staan merknamen, en dezelfde namen duiken op in overheidsrapporten, nieuwsberichten, gemeentelijke discussies en de afvalverwerking. Wie wil begrijpen hoe de markt na 2023 werkt, komt die namen tegen.",
      },
      { type: "h2", id: "wat-bronnen-melden", text: "Wat openbare bronnen melden" },
      {
        type: "steps",
        items: [
          {
            title: "RIVM — 2 maart 2026",
            text: "In de [CAM-notitie](https://www.rivm.nl/sites/default/files/2026-03/CAM-notitie-Stand-van-zaken-omtrent-lachgas-%282019-2025%29-beveiligd.pdf) schrijft het RIVM dat de kleine lachgaspatronen uit het straatbeeld lijken te zijn verdwenen en vervangen door wegwerpcilinders van onder meer Fastgas, en dat webwinkels weer actiever zijn met de promotie ervan.",
          },
          {
            title: "AVROTROS Radar — 22 september 2025",
            text: "Radar schreef dat straten ondanks het verbod bezaaid liggen met cilinders ‘met namen als Fastgast en Fastwhip’ (spelling zoals in het artikel), en dat de politie geen specifieke aanpak voor dit middel heeft.",
          },
          {
            title: "Gemeenteraad Rotterdam — 20 juni 2025",
            text: "De VVD-fractie stelde [schriftelijke vragen](https://rotterdamraad.bestuurlijkeinformatie.nl/Document/View/a252a85f-8511-462a-bddd-f143f5a70aef) naar aanleiding van een NRC-onderzoek van 19 juni 2025 naar de internationale handel in lachgas, met vragen over het bedrijf Fastgas.",
          },
        ],
      },
      { type: "h2", id: "merk-en-wet", text: "Merk, etiket en de wet" },
      {
        type: "p",
        text: "Veel cilinders worden aangeduid als product voor culinair gebruik. Juridisch beslist niet het etiket, maar de bestemming. Is het lachgas bedoeld om te inhaleren, dan valt het onder het [verbod](/lachgas-verbod/), ongeacht merk of verpakking.",
      },
      { type: "h2", id: "merkpaginas", text: "Merkpagina’s" },
      { type: "list", items: ["[FastGas — wat openbare bronnen melden](/lachgas-merken/fastgas/)"] },
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
    sources: ["rivm-cam-2026", "radar-2025", "rotterdam-vragen-2025", "rijk-verbod"],
    related: ["fastgas", "cilinders", "verbod", "soorten"],
    translationOf: "en-brands",
    status: "published",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
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
      "FastGas is een merknaam op lachgascilinders die in Nederlandse straten worden gevonden. Wat het RIVM, journalisten en gemeenteraden melden, en wat de wet zegt.",
    answer:
      "FastGas (ook geschreven als Fastgas) is een merknaam op wegwerpcilinders met lachgas. Volgens het RIVM hebben zulke cilinders de kleine slagroompatronen uit het straatbeeld verdrongen. Een culinair etiket maakt recreatief bezit niet legaal. Deze pagina is geen aanbeveling en bevat geen verkoop- of productinformatie.",
    body: [
      {
        type: "callout",
        tone: "warning",
        title: "Onafhankelijke duiding — geen endorsement",
        text: "Lachgas Amsterdam heeft geen enkele relatie met FastGas of met verkopers van lachgas. Wij noemen de naam alleen omdat die in openbare bronnen voorkomt.",
      },
      { type: "h2", id: "wat-bekend-is", text: "Wat melden openbare bronnen?" },
      {
        type: "list",
        items: [
          "**RIVM (2 maart 2026):** de kleine lachgaspatronen lijken uit het straatbeeld verdwenen en vervangen door wegwerpcilinders van onder meer Fastgas; webwinkels zijn weer actiever met de promotie van ‘Fastgas’.",
          "**AVROTROS Radar (22 september 2025):** straten liggen bezaaid met cilinders ‘met namen als Fastgast en Fastwhip’ (spelling uit het artikel).",
          "**Gemeenteraad Rotterdam (20 juni 2025):** de VVD-fractie schrijft dat NRC beschrijft hoe Fastgas, ‘één van de grootste leveranciers van lachgastanks ter wereld’, op papier ook in Rotterdam is gevestigd, en dat een aanzienlijk deel van de in Nederland aangetroffen tanks van dit merk afkomstig is. De fractie vroeg het college of het mogelijk is zulke partijen aansprakelijk te stellen voor de schade door gedumpte tanks.",
        ],
      },
      {
        type: "p",
        text: "De redactie heeft het NRC-artikel zelf niet gelezen (het staat achter een betaalmuur); de weergave hierboven is die van de Rotterdamse raadsfractie. Over eigendom, productie en distributie van het merk doen wij geen eigen uitspraken.",
      },
      { type: "h2", id: "juridisch", text: "Wat zegt de wet?" },
      {
        type: "p",
        text: "Voor de Opiumwet maakt het merk niet uit. Lachgas dat bestemd is voor recreatief gebruik, is verboden — ook als de verpakking een culinaire toepassing noemt. Zie [Het lachgasverbod](/lachgas-verbod/) en [Lachgas bezit en vervoer](/lachgas-bezit/).",
      },
      { type: "h2", id: "afval", text: "Wegwerpcilinders en afval" },
      {
        type: "p",
        text: "Wegwerpcilinders komen vaak in het restafval terecht. In Amsterdam veroorzaken ze explosies in de verbrandingsovens van AEB — volgens NOS Nieuwsuur in 2025 nog 15 tot 20 per week. Gooi een gevonden cilinder daarom nooit weg; lees wat je wél doet op [Lachgascilinder gevonden](/lachgascilinder-gevonden/).",
      },
    ],
    sources: ["rivm-cam-2026", "radar-2025", "rotterdam-vragen-2025", "nos-nieuwsuur-afval", "rijk-verbod"],
    related: ["merken", "cilinders", "cilinder-gevonden", "verbod"],
    status: "published",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
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
      "Het verschil tussen lachgaspatronen en -cilinders, waarom wegwerpcilinders ontploffen in de Amsterdamse verbrandingsovens en hoe je ze veilig afvoert.",
    answer:
      "Patronen zijn kleine capsules voor slagroomspuiten; cilinders zijn grote drukhouders. Lachgascilinders zijn gevaarlijk afval: in de verbrandingsoven kunnen ze ontploffen. Gooi ze nooit bij het restafval of PMD. Meld een gevonden cilinder bij de gemeente of breng een lege cilinder naar een Amsterdams Recyclepunt.",
    body: [
      { type: "h2", id: "verschil", text: "Patroon of cilinder?" },
      {
        type: "facts",
        items: [
          { label: "Patroon", value: "Kleine stalen capsule voor eenmalig gebruik in een slagroomspuit." },
          { label: "Cilinder", value: "Grote drukhouder, vaak als wegwerpverpakking. Bevat het gas vloeibaar onder hoge druk." },
          { label: "Status", value: "Lachgascilinders gelden als gevaarlijk afval (Wet milieubeheer)." },
          { label: "Inbeslagname", value: "De politie nam 68.000 cilinders in beslag in 2023, 66.000 in 2024 en 77.000 in 2025 (RIVM)." },
        ],
      },
      { type: "h2", id: "explosies", text: "Waarom cilinders gevaarlijk zijn in het afval" },
      {
        type: "p",
        text: "Een cilinder die bij het restafval belandt, gaat mee naar de verbrandingsoven. Restgas zet uit door de hitte en kan onder hoge druk exploderen. Het Amsterdamse afvalenergiebedrijf **AEB** meldde vanaf half januari 2023 vaker en hardere explosies, met schade aan roostervloeren en ketelwanden ([AT5](https://www.at5.nl/artikelen/219327/lachgascilinders-ontploffen-steeds-vaker-en-harder-in-afvalverbrandingsoven)). In maart 2025 opende AEB een speciale loods waar cilinders uit het afval worden vermalen voordat het afval de oven in gaat ([NH Nieuws](https://www.nhnieuws.nl/nieuws/346301/nieuwe-lachgasloods-moet-explosies-in-ovens-aeb-voorkomen-heel-veel-schade-voor-bedrijf)). Toch waren er volgens een AEB-woordvoerder in 2025 nog 15 tot 20 explosies per week ([NOS Nieuwsuur](https://nos.nl/nieuwsuur/artikel/2573331-problemen-lachgascilinders-in-afval-nemen-toe-bewoners-draaien-op-voor-kosten)).",
      },
      { type: "h2", id: "inzameling", text: "Het Amsterdamse inleverexperiment" },
      {
        type: "steps",
        items: [
          { title: "September 2023 — innamepunt geopend", text: "AEB gaf € 10 per ingeleverde cilinder, later verlaagd naar € 5 vanwege de grote toeloop." },
          { title: "Februari 2024 — innamepunt gestopt", text: "Na vijf maanden en zo’n 80.000 ingeleverde cilinders stopte AEB; het bedrijf vindt dat het Rijk verantwoordelijk is voor een landelijke regeling ([AT5](https://www.at5.nl/artikelen/225064/aeb-stopt-na-vijf-maanden-met-innamepunt-lachgas-maar-liefst-80000-cilinders-ingeleverd))." },
          { title: "Mei 2024 — meer dumpingen", text: "De gemeente zag na het stoppen van de vergoeding meer gedumpte cilinders in de stad ([AT5](https://www.at5.nl/artikelen/226649/lachgascilinders-vaker-gedumpt-in-de-stad-na-afschaffing-statiegeld-door-aeb))." },
        ],
      },
      {
        type: "p",
        text: "AEB berekent de extra kosten door aan gemeenten, die ze verhalen via de gemeentelijke belastingen. Een landelijk statiegeldsysteem is voorgesteld maar niet ingevoerd (NOS Nieuwsuur, juli 2025).",
      },
      { type: "h2", id: "afvoeren", text: "Hoe voer je een cilinder veilig af?" },
      {
        type: "steps",
        items: [
          { title: "Niet bij het gewone afval", text: "Nooit in de restafvalcontainer, de PMD-bak of het grofvuil." },
          { title: "Niet openmaken of verhitten", text: "Probeer een cilinder niet open te boren, door te prikken of in de buurt van vuur te leggen." },
          { title: "Naar een Recyclepunt", text: "Amsterdammers kunnen gasflessen gratis inleveren bij een van de zeven [Recyclepunten](https://www.amsterdam.nl/afval/spullen-wegbrengen-naar-een-recyclepunt/); neem een identiteitsbewijs en een bewijs van je Amsterdamse adres mee. Lachgascilinders worden daar niet apart genoemd — vraag het bij twijfel ter plekke." },
          { title: "Of melden", text: "Ligt de cilinder op straat? Meld hem via [meldingen.amsterdam.nl](https://meldingen.amsterdam.nl). Gemeentelijke diensten nemen gevonden cilinders mee; volle cilinders worden verwijderd door THOR of de politie." },
        ],
      },
    ],
    sources: ["rijk-verbod", "amsterdam-recyclepunt", "amsterdam-meldingen", "rivm-cam-2026", "at5-explosies", "at5-aeb-stopt", "at5-dumping", "nhnieuws-loods", "nos-nieuwsuur-afval"],
    related: ["wegwerp", "cilinder-gevonden", "amsterdam", "merken"],
    translationOf: "en-cylinders",
    status: "published",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
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
      "Gooi een gevonden lachgascilinder niet bij het restafval: hij kan in de verbrandingsoven ontploffen. Maak hem niet open en houd hem uit de buurt van warmte. Meld een cilinder op straat via meldingen.amsterdam.nl, of breng een lege cilinder naar een Amsterdams Recyclepunt.",
    body: [
      { type: "h2", id: "stappen", text: "Stap voor stap" },
      {
        type: "steps",
        items: [
          { title: "Laat de cilinder heel", text: "Niet openmaken, doorprikken, verhitten of in de zon laten liggen." },
          { title: "Niet in de container", text: "Ook niet in de PMD-bak of bij het grofvuil. In de verbrandingsoven kan een cilinder ontploffen." },
          { title: "Melden", text: "Ligt de cilinder in de openbare ruimte? Meld hem via [meldingen.amsterdam.nl](https://meldingen.amsterdam.nl). Gemeentelijke diensten — reinigers, Stadswerken, afvalinzamelaars, THOR en politie — nemen gevonden cilinders mee." },
          { title: "Of zelf wegbrengen", text: "Een lege cilinder kun je naar een Amsterdams [Recyclepunt](https://www.amsterdam.nl/afval/spullen-wegbrengen-naar-een-recyclepunt/) brengen; daar kunnen bewoners gratis gasflessen inleveren met een identiteits- en adresbewijs. Volle cilinders laat je liggen en meld je: die worden verwijderd door THOR of de politie." },
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
        text: "Cilinders in het restafval veroorzaken explosies in de ovens van AEB. Dat leidt tot schade en hogere kosten, die via de gemeentelijke belastingen bij bewoners terechtkomen. Meer achtergrond op [Lachgascilinders en patronen](/lachgascilinders/).",
      },
    ],
    sources: ["rijk-verbod", "amsterdam-meldingen", "amsterdam-recyclepunt", "at5-dumping", "at5-explosies", "nos-nieuwsuur-afval"],
    related: ["cilinders", "overlast", "regels-amsterdam"],
    status: "published",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
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
      "Lachgas in Amsterdam: hoe het verbod en de APV hier uitwerken, wat de cijfers zeggen, de problemen met cilinders bij AEB en wat Amsterdamse artsen zagen.",
    answer:
      "In Amsterdam geldt het landelijke lachgasverbod en verbiedt de APV het gebruik van lachgas. Het gebruik is gedaald, maar ligt in de regio Amsterdam nog relatief hoog. Lachgas raakt de stad op drie manieren: gezondheid, overlast in de openbare ruimte en cilinders die ontploffen in de afvalverbranding van AEB.",
    body: [
      { type: "h2", id: "waarom-amsterdam", text: "Waarom een Amsterdamse informatiebron?" },
      {
        type: "p",
        text: "Amsterdam is een stad van bewoners én miljoenen bezoekers. Regels, gezondheid en afval komen hier samen: op de grachten, in de parken, bij evenementen en in de afvalverwerking. Deze site brengt de landelijke regels en de Amsterdamse context samen, in het Nederlands en het Engels.",
      },
      { type: "h2", id: "regels", text: "Regels" },
      {
        type: "p",
        text: "Sinds 1 januari 2023 geldt het [landelijke verbod](/lachgas-verbod/), en de Amsterdamse APV verbiedt het gebruik van lachgas. Daarvoor pakte de stad al straatverkoop aan (2019) en verbood ze de verkoop in de horeca en bij evenementen (2021). Lees meer op [Lachgasregels in Amsterdam](/lachgas-regels-amsterdam/).",
      },
      { type: "h2", id: "cijfers", text: "Wat zeggen de cijfers?" },
      {
        type: "facts",
        items: [
          { label: "Jongvolwassenen", value: "In de GGD-regio Amsterdam gebruikte in 2024 3,0% van de 16- tot 25-jarigen lachgas in het afgelopen jaar — het op één na hoogste percentage van Nederland." },
          { label: "Cafébezoekers", value: "Het laatste-jaar-gebruik onder jonge Amsterdamse cafébezoekers daalde van 35% in 2015 naar 9% in 2024." },
          { label: "Trend", value: "Gebruik vindt volgens het RIVM steeds minder in het uitgaansleven plaats en vaker thuis, in hotelkamers en in auto’s." },
        ],
      },
      {
        type: "p",
        text: "Bron: [RIVM, CAM-notitie maart 2026](https://www.rivm.nl/sites/default/files/2026-03/CAM-notitie-Stand-van-zaken-omtrent-lachgas-%282019-2025%29-beveiligd.pdf).",
      },
      { type: "h2", id: "afval", text: "Afval: ontploffende cilinders" },
      {
        type: "p",
        text: "AEB, dat het Amsterdamse restafval verbrandt, kampt sinds begin 2023 met explosies door lachgascilinders. Een innamepunt met vergoeding haalde tussen september 2023 en februari 2024 zo’n 80.000 cilinders op; sinds maart 2025 vermaalt AEB cilinders in een speciale loods. Meer op [Lachgascilinders](/lachgascilinders/).",
      },
      { type: "h2", id: "gezondheid", text: "Gezondheid" },
      {
        type: "p",
        text: "In 2019 meldde een OLVG-neuroloog een verdrievoudiging van het aantal patiënten met klachten door lachgas, en na 2019 stegen vooral in Amsterdam de verwijzingen naar revalidatie. Zie [Lachgas en gezondheid](/gezondheid/) en [Lachgas en zenuwschade](/lachgas-zenuwschade/).",
      },
      { type: "h2", id: "overlast", text: "Overlast" },
      { type: "p", text: "Hoe je overlast meldt en wie er optreedt, lees je op [Lachgasoverlast in Amsterdam](/lachgas-overlast-amsterdam/)." },
      { type: "h2", id: "officieel", text: "Officiële Amsterdamse informatie" },
      {
        type: "p",
        text: "Lachgas Amsterdam is **geen website van de gemeente Amsterdam**. Voor officiële gemeentelijke informatie, meldingen en de actuele regels ga je naar [amsterdam.nl](https://www.amsterdam.nl).",
      },
    ],
    sources: ["rivm-cam-2026", "amsterdam-rib-2023", "nos-amsterdam-2019", "nos-amsterdam-2021", "at5-explosies", "at5-aeb-stopt", "nhnieuws-loods", "at5-olvg"],
    related: ["regels-amsterdam", "overlast", "cilinders", "gezondheid"],
    status: "published",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
  },
  {
    id: "overlast",
    locale: "nl",
    path: "/lachgas-overlast-amsterdam/",
    category: "amsterdam",
    eyebrow: "Amsterdam · Openbare ruimte",
    title: "Lachgasoverlast in Amsterdam",
    metaTitle: "Lachgasoverlast in Amsterdam: melden en wie optreedt",
    metaDescription:
      "Last van lachgas in je straat? Welke regels gelden in Amsterdam, wie er optreedt en hoe je gebruik, handel of gedumpte cilinders meldt.",
    answer:
      "In Amsterdam is lachgasgebruik verboden in de APV en is recreatief bezit verboden in de Opiumwet. Gedumpte cilinders meld je via meldingen.amsterdam.nl. Bij vermoeden van handel bel je de politie op 0900-8844 of anoniem Meld Misdaad Anoniem op 0800-7000. Bij direct gevaar: 112.",
    body: [
      { type: "h2", id: "regels", text: "Welke regels gelden?" },
      {
        type: "list",
        items: [
          "**Opiumwet:** recreatief bezit, verkoop en vervoer zijn verboden sinds 1 januari 2023 — handhaving door de politie.",
          "**APV Amsterdam:** het gebruik van lachgas is verboden, volgens een [raadsinformatiebrief van 9 februari 2023](https://assets.amsterdam.nl/publish/pages/1027459/2023-02-08_raadsinformatiebrief_apv_wijziging_blowverbod_en_alcoholoverlastgebied_1_.pdf). Op de APV kunnen ook handhavers van THOR optreden.",
        ],
      },
      { type: "h2", id: "melden", text: "Hoe meld je overlast?" },
      {
        type: "facts",
        items: [
          { label: "Gedumpte cilinders", value: "Melding openbare ruimte via meldingen.amsterdam.nl" },
          { label: "Vermoeden van handel", value: "Politie: 0900-8844 · anoniem: Meld Misdaad Anoniem 0800-7000" },
          { label: "Direct gevaar of ongeval", value: "112" },
        ],
      },
      { type: "h2", id: "vormen", text: "Welke vormen van overlast zijn er?" },
      {
        type: "steps",
        items: [
          {
            title: "Van straatverkoop naar afval",
            text: "In 2019 meldde burgemeester Halsema de gemeenteraad een ‘explosief toenemende overlast’ door straatverkoop van lachgas ([NOS](https://nos.nl/artikel/2300206-amsterdam-opent-jacht-op-verkopers-van-lachgas)). Sinds het landelijke verbod is de straatoverlast afgenomen, maar zijn de afvalproblemen gegroeid ([NOS Nieuwsuur](https://nos.nl/nieuwsuur/artikel/2573331-problemen-lachgascilinders-in-afval-nemen-toe-bewoners-draaien-op-voor-kosten)).",
          },
          {
            title: "Gedumpte cilinders",
            text: "Na het stoppen van het AEB-innamepunt in februari 2024 zag de gemeente meer gedumpte cilinders, bijvoorbeeld tientallen bij een container aan het Bos en Lommerplantsoen. Meestal worden er twee tot vier cilinders bij elkaar gevonden ([AT5](https://www.at5.nl/artikelen/226649/lachgascilinders-vaker-gedumpt-in-de-stad-na-afschaffing-statiegeld-door-aeb)).",
          },
          {
            title: "Gebruik in auto’s en uit het zicht",
            text: "Volgens het [RIVM](https://www.rivm.nl/sites/default/files/2026-03/CAM-notitie-Stand-van-zaken-omtrent-lachgas-%282019-2025%29-beveiligd.pdf) vindt gebruik steeds minder plaats in het uitgaansleven en vaker thuis, op hotelkamers en in auto’s. Gebruik in en rond auto’s brengt extra verkeersrisico’s mee: lachgas verstoort waarneming en coördinatie.",
          },
          {
            title: "Politie-incidenten",
            text: "Het aantal lachgasgerelateerde politie-incidenten lijkt na een flinke daling in 2023 in 2024 en 2025 weer te zijn toegenomen, maar ligt nog duidelijk lager dan vóór het verbod (RIVM).",
          },
        ],
      },
      { type: "h2", id: "wat-doet-de-gemeente", text: "Wat doet de gemeente?" },
      {
        type: "list",
        items: [
          "Reinigers, Stadswerken, afvalinzamelaars, handhavers van THOR en de politie nemen cilinders mee die ze op straat aantreffen.",
          "Cilinders van ongeveer een meter of groter worden opgehaald door een bedrijf dat Stadswerken daarvoor inhuurt; volle cilinders worden verwijderd door THOR of de politie.",
          "Ingezamelde cilinders gaan naar een centraal afvalpunt aan de Seineweg.",
        ],
      },
      {
        type: "p",
        text: "Bron: [AT5, 15 mei 2024](https://www.at5.nl/artikelen/226649/lachgascilinders-vaker-gedumpt-in-de-stad-na-afschaffing-statiegeld-door-aeb). Waarom gedumpte cilinders zo’n probleem zijn, lees je op [Wegwerpcilinders](/wegwerp-lachgascilinders/).",
      },
      { type: "h2", id: "kosten", text: "Wie betaalt de rekening?" },
      {
        type: "p",
        text: "Cilinders die toch in het restafval belanden, veroorzaken explosies in de verbrandingsovens van AEB. AEB sprak in 2024 van schade die kan oplopen tot 20 miljoen euro per jaar ([AT5](https://www.at5.nl/artikelen/226649/lachgascilinders-vaker-gedumpt-in-de-stad-na-afschaffing-statiegeld-door-aeb)). Het bedrijf berekent de extra kosten door aan gemeenten, die ze verhalen via de gemeentelijke belastingen ([NOS Nieuwsuur](https://nos.nl/nieuwsuur/artikel/2573331-problemen-lachgascilinders-in-afval-nemen-toe-bewoners-draaien-op-voor-kosten)). Uiteindelijk betalen bewoners dus mee.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Zorg om iemand?",
        text: "Achter overlast zit soms een persoon die hulp nodig heeft. Lees op [Hulp bij lachgas](/hulp/) waar je anoniem advies krijgt.",
      },
    ],
    sources: ["amsterdam-rib-2023", "amsterdam-meldingen", "nos-amsterdam-2019", "nos-nieuwsuur-afval", "at5-dumping", "rivm-cam-2026", "om-lachgasverbod-2023", "drugsinfo-lachgas"],
    related: ["wegwerp", "cilinder-gevonden", "regels-amsterdam", "gebruik"],
    status: "published",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
  },

  {
    id: "wegwerp",
    locale: "nl",
    path: "/wegwerp-lachgascilinders/",
    category: "cilinders",
    eyebrow: "Cilinders · Wegwerptanks",
    title: "Wegwerpcilinders: de grote lachgastanks",
    metaTitle: "Wegwerp lachgascilinders: risico’s, afval en overlast",
    metaDescription:
      "Waarom grote wegwerpcilinders de slagroompatronen verdrongen, en wat dat betekent voor gezondheid, afval, overlast en beleid. Met bronnen.",
    answer:
      "Sinds het verbod zijn de kleine slagroompatronen volgens het RIVM uit het straatbeeld verdwenen en vervangen door grote wegwerpcilinders. Die zijn op drie manieren een probleem: ze maken intensief gebruik makkelijker, het ijskoude gas kan bevriezingswonden geven, en weggegooide cilinders ontploffen in afvalovens. De kosten daarvan komen bij gemeenten en bewoners terecht.",
    body: [
      {
        type: "callout",
        tone: "warning",
        title: "Informatie, geen productinformatie",
        text: "Deze pagina beschrijft het maatschappelijke probleem. Je vindt hier geen prijzen, verkooppunten, merkvergelijkingen of gebruiksinstructies.",
      },
      { type: "h2", id: "wat-zijn", text: "Wat is een wegwerpcilinder?" },
      {
        type: "p",
        text: "Een wegwerpcilinder is een grote drukhouder met vloeibaar lachgas, bedoeld om na gebruik weg te gooien. Vóór 2023 konden cilinders vaak worden hervuld of tegen statiegeld worden ingeleverd ([NOS Nieuwsuur](https://nos.nl/nieuwsuur/artikel/2573331-problemen-lachgascilinders-in-afval-nemen-toe-bewoners-draaien-op-voor-kosten)). Sinds het verbod circuleren vooral wegwerpexemplaren. Het RIVM noemt cilinders van 2 kilo en merken als Fastgas.",
      },
      { type: "h2", id: "verschuiving", text: "Van patroon naar tank" },
      {
        type: "p",
        text: "Volgens de [RIVM-notitie van maart 2026](https://www.rivm.nl/sites/default/files/2026-03/CAM-notitie-Stand-van-zaken-omtrent-lachgas-%282019-2025%29-beveiligd.pdf) lijken de kleine lachgaspatronen — bedoeld voor de slagroomspuit — uit het straatbeeld verdwenen en vervangen door wegwerpcilinders. Straatverkopers lijken voorzichtiger en een deel is overgestapt op de verkoop van vapes, terwijl webwinkels weer actiever zijn met promotie. Meer over de merknamen op [Lachgasmerken](/lachgas-merken/).",
      },
      { type: "h2", id: "gezondheid", text: "Waarom tanks riskanter zijn voor de gezondheid" },
      {
        type: "list",
        items: [
          "**Meer per keer.** Het Trimbos-instituut signaleert dat het vullen van ballonnen uit grote tanks de kans op gezondheidsproblemen vergroot. Onder mbo-studenten die in de laatste maand lachgas gebruikten, gebruikte in 2023 40,2% tien of meer ballonnen per keer (RIVM).",
          "**Bevriezing.** Het gas komt ijskoud uit de cilinder. Brandwondencentra hebben ernstige vrieswonden gezien bij mensen die tanks vasthielden of tussen hun benen klemden; sommigen hielden blijvende littekens over ([DrugsInfo](https://www.drugsinfo.nl/lachgas/wat-je-moet-weten-over-lachgas/)).",
          "**Geen veilige grens.** Volgens het RIVM kan zelfs één ballon al tintelingen geven. Zie [Lachgas en gezondheid](/gezondheid/).",
        ],
      },
      { type: "h2", id: "afval", text: "Ontploffingen in de afvalverwerking" },
      {
        type: "p",
        text: "Cilinders zonder ontluchtingssysteem kunnen in de verbrandingsoven ontploffen ([NOS Nieuwsuur](https://nos.nl/nieuwsuur/artikel/2573331-problemen-lachgascilinders-in-afval-nemen-toe-bewoners-draaien-op-voor-kosten)). Het Amsterdamse AEB meldde vanaf half januari 2023 vaker en hardere explosies, met schade aan roostervloeren en ketelwanden. Sinds maart 2025 controleert AEB wekelijks zo’n 1.800 ton huishoudelijk en 1.250 ton bedrijfsafval op cilinders en vermaalt die in een speciale loods ([NH Nieuws](https://www.nhnieuws.nl/nieuws/346301/nieuwe-lachgasloods-moet-explosies-in-ovens-aeb-voorkomen-heel-veel-schade-voor-bedrijf)). Toch waren er volgens een AEB-woordvoerder in 2025 nog 15 tot 20 explosies per week.",
      },
      { type: "h2", id: "straat", text: "Overlast op straat" },
      {
        type: "p",
        text: "Gedumpte cilinders liggen in portieken, parken en naast containers. Rotterdam haalde in twaalf maanden ruim 33.000 cilinders van straat (NOS Nieuwsuur, juli 2025). In Amsterdam nam het aantal dumpingen toe nadat AEB in februari 2024 stopte met zijn inleververgoeding ([AT5](https://www.at5.nl/artikelen/226649/lachgascilinders-vaker-gedumpt-in-de-stad-na-afschaffing-statiegeld-door-aeb)). Hoe je een gevonden cilinder meldt, lees je op [Lachgascilinder gevonden](/lachgascilinder-gevonden/).",
      },
      { type: "h2", id: "kosten", text: "De kosten" },
      {
        type: "facts",
        items: [
          { label: "Schade AEB", value: "Volgens AEB kan de schade oplopen tot 20 miljoen euro per jaar (AT5, mei 2024)." },
          { label: "Doorberekend", value: "AEB berekent de kosten door aan gemeenten, die ze verhalen via de gemeentelijke belastingen (NOS Nieuwsuur)." },
          { label: "Voorbeeld", value: "In Heemstede steeg de afvalstoffenheffing in 2025 gemiddeld met 42 euro, vooral door lachgas (NOS Nieuwsuur)." },
        ],
      },
      { type: "h2", id: "beleid", text: "Wat wordt eraan gedaan?" },
      {
        type: "list",
        items: [
          "**Statiegeld:** een landelijk statiegeldsysteem is voorgesteld, maar niet ingevoerd. AEB’s eigen inleverpunt haalde in vijf maanden zo’n 80.000 cilinders op en stopte in februari 2024.",
          "**Pilot:** het kabinet-Rutte IV stelde 450.000 euro beschikbaar voor een pilot met innovatieve technieken; de afvalbranche noemt dat te weinig.",
          "**Rechtszaak:** eind 2024 kondigden gemeenten en afvalverwerkers aan de Staat aan te klagen. De betrokken ministeries stellen dat de schade wordt veroorzaakt door mensen die de wet overtreden, niet door het verbod.",
          "**Europa:** de ministeries staan open voor een Europees verbod, om de invoer uit landen zonder verbod te beperken; anderen pleiten voor een verplicht ontluchtingssysteem via Europese regels.",
        ],
      },
      { type: "p", text: "Bron van deze vier punten: [NOS Nieuwsuur, 2 juli 2025](https://nos.nl/nieuwsuur/artikel/2573331-problemen-lachgascilinders-in-afval-nemen-toe-bewoners-draaien-op-voor-kosten) en [AT5](https://www.at5.nl/artikelen/225064/aeb-stopt-na-vijf-maanden-met-innamepunt-lachgas-maar-liefst-80000-cilinders-ingeleverd)." },
    ],
    sources: ["rivm-cam-2026", "nos-nieuwsuur-afval", "trimbos-lachgas", "drugsinfo-lachgas", "at5-explosies", "at5-aeb-stopt", "at5-dumping", "nhnieuws-loods"],
    related: ["cilinders", "cilinder-gevonden", "overlast", "merken"],
    translationOf: "en-tanks",
    status: "published",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
  },
  {
    id: "gebruik",
    locale: "nl",
    path: "/lachgas-gebruik/",
    category: "gebruik",
    eyebrow: "Gebruik en cijfers",
    title: "Lachgasgebruik: cijfers en trends",
    metaTitle: "Lachgasgebruik in Nederland en Amsterdam: cijfers en trends",
    metaDescription:
      "Hoeveel mensen gebruiken lachgas, wie, waar en hoe vaak? De belangrijkste cijfers en trends sinds 2019 voor Nederland en Amsterdam, op basis van het RIVM.",
    answer:
      "Het recreatieve lachgasgebruik daalt sinds 2019 in vrijwel alle groepen. In 2024 had 0,5% van de Nederlandse volwassenen in het afgelopen jaar lachgas gebruikt, tegen 2,7% in 2018. Tegelijk blijft er een kleine, kwetsbare groep die intensief en vaak alleen gebruikt, met relatief veel gezondheidsproblemen. In de regio Amsterdam ligt het gebruik onder jongvolwassenen hoger dan gemiddeld.",
    body: [
      {
        type: "callout",
        tone: "info",
        title: "Over deze pagina",
        text: "Hier staan cijfers en trends over gebruik, niet hoe je lachgas gebruikt. Recreatief gebruik is verboden en schadelijk. Alle cijfers komen uit de [RIVM-notitie van 2 maart 2026](https://www.rivm.nl/sites/default/files/2026-03/CAM-notitie-Stand-van-zaken-omtrent-lachgas-%282019-2025%29-beveiligd.pdf), tenzij anders vermeld.",
      },
      { type: "h2", id: "16-35", text: "In één oogopslag: 16 tot 35 jaar" },
      {
        type: "facts",
        items: [
          { label: "Uitgaanders 16–35", value: "Jaargebruik daalde van 35,2% in 2020 naar 15,0% in 2023." },
          { label: "Amsterdam 16–25", value: "3,0% gebruikte in 2024 lachgas in het afgelopen jaar — het op één na hoogste percentage van Nederland." },
          { label: "Volwassenen 18–29", value: "Ooit-gebruik daalde van 24,3% in 2018 naar 20,7% in 2024; het is de leeftijdsgroep waarin het meest is gebruikt." },
          { label: "Intensief", value: "40,2% van de mbo-studenten die in de laatste maand gebruikten, gebruikte tien of meer ballonnen per keer." },
        ],
      },
      { type: "h2", id: "volwassenen", text: "Volwassenen" },
      {
        type: "facts",
        items: [
          { label: "Afgelopen jaar", value: "0,5% in 2024 — tegen 0,9% in 2023 en 2,7% in 2018." },
          { label: "Ooit gebruikt", value: "7,5% van de volwassenen; minder dan 0,1% gebruikte in de laatste maand." },
          { label: "Hoe vaak", value: "80,7% van de jaargebruikers gebruikte één of enkele keren; 19,4% maandelijks of vaker." },
          { label: "Wie", value: "Vooral mannen, 18- tot 29-jarigen, hoger opgeleiden en mensen in (zeer) sterk stedelijke gebieden." },
          { label: "Leeftijd", value: "Jaargebruikers waren in 2024 gemiddeld 30,3 jaar, het hoogste sinds 2018; de gemiddelde startleeftijd was 24,8 jaar." },
        ],
      },
      { type: "h2", id: "jongeren", text: "Jongeren" },
      {
        type: "list",
        items: [
          "**Scholieren (12–16 jaar):** het gebruik is in 2023 meer dan gehalveerd ten opzichte van 2015. In 2023 had 3,1% ooit lachgas gebruikt en 0,9% in de laatste maand. De sterkste daling viel tussen 2019 en 2021, vooral na de aankondiging van het verbod in december 2019.",
          "**Mbo-studenten (16–18 jaar):** ooit-gebruik daalde van 17,2% (2015) naar 10,5% (2023). Wie nog gebruikt, doet dat vaak intensief: 40,2% van de maandgebruikers gebruikte tien of meer ballonnen per keer.",
          "**Uitgaanders (16–35 jaar):** jaargebruik daalde van 35,2% in 2020 naar 15,0% in 2023. In een panel van uitgaanders zag de meerderheid nauwelijks nog lachgas in het nachtleven.",
        ],
      },
      { type: "h2", id: "amsterdam", text: "Amsterdam" },
      {
        type: "list",
        items: [
          "In de GGD-regio Amsterdam gebruikte in 2024 3,0% van de 16- tot 25-jarigen lachgas in het afgelopen jaar — na Groningen (3,9%) het hoogste percentage van Nederland.",
          "Onder jonge Amsterdamse cafébezoekers steeg het jaargebruik van 11% in 2010 naar 35% in 2015 en daalde het daarna tot 9% in 2024 — terug op het niveau van 2010.",
          "Onder Amsterdamse mbo-studenten daalde het gebruik tussen 2016 en 2021, maar wie wel gebruikte, deed dat vaker.",
        ],
      },
      { type: "h2", id: "waar", text: "Waar en hoe wordt gebruikt?" },
      {
        type: "p",
        text: "Door strengere regels en lokale verboden vindt gebruik volgens het RIVM vooral nog plaats thuis, op hotelkamers en in auto’s. Lachgas heeft een negatief imago gekregen en er zijn minder groepen waarin het wordt gebruikt. Een veldwerker van Jellinek in Utrecht ziet dat gebruik vaak in een groep begint maar uiteindelijk vaak alleen plaatsvindt. Gebruik in en rond auto’s brengt extra verkeersrisico’s mee.",
      },
      { type: "h2", id: "intensief", text: "Een kleine groep intensieve gebruikers" },
      {
        type: "p",
        text: "Terwijl het algemene gebruik daalt, blijft er een kleine maar kwetsbare groep die intensief en problematisch gebruikt, vaak met bredere problemen rond gezondheid, school, schulden of huisvesting. AVROTROS Radar beschrijft problematisch gebruik als meer dan vijftig ballonnen per sessie. In 2024 werden 190 mensen in de verslavingszorg behandeld voor lachgasproblematiek, en de informatieverzoeken bij het Nationaal Vergiftigingen Informatie Centrum verdubbelden van 24 in 2023 naar 48 in 2024. Lees meer op [Lachgas en verslaving](/lachgas-verslaving/) en [Lachgas en zenuwschade](/lachgas-zenuwschade/).",
      },
      { type: "h2", id: "handhaving", text: "Handhaving in cijfers" },
      {
        type: "facts",
        items: [
          { label: "In beslag genomen", value: "68.000 cilinders in 2023, 66.000 in 2024 en 77.000 in 2025 (politie, via RIVM)." },
          { label: "Incidenten", value: "Na een flinke daling in 2023 lijkt het aantal lachgasgerelateerde politie-incidenten in 2024 en 2025 weer te stijgen; de meeste in Zuid-Holland." },
        ],
      },
      {
        type: "callout",
        tone: "help",
        title: "Zelf hulp nodig of zorgen om iemand?",
        text: "Bel of chat anoniem met de DrugsInfo Infolijn (0900-1995) of praat met je huisarts. Meer op [Hulp bij lachgas](/hulp/).",
      },
    ],
    sources: ["rivm-cam-2026", "radar-2025", "drugsinfo-lachgas"],
    related: ["verslaving", "gezondheid", "wegwerp", "uitgaan"],
    status: "published",
    published: D,
    reviewed: D,
    nextReview: "2027-04-30",
  },
  {
    id: "uitgaan",
    locale: "nl",
    path: "/lachgas-uitgaan-festivals/",
    category: "amsterdam",
    eyebrow: "Uitgaan en festivals",
    title: "Lachgas bij uitgaan en festivals",
    metaTitle: "Lachgas op festivals en in het uitgaansleven: wat mag?",
    metaDescription:
      "Lachgas in clubs en op festivals in Amsterdam: de regels, wat er gebeurt als je ermee wordt betrapt en wat je doet als een vriend onwel wordt.",
    answer:
      "Lachgas is verboden, ook op festivals, in clubs en bij evenementen. Wie ballonnen verkoopt of uitdeelt, overtreedt de Opiumwet; wie ermee wordt aangetroffen, moet het inleveren en kan een boete of taakstraf krijgen. In het uitgaansleven is lachgas de laatste jaren sterk afgenomen. Wordt iemand onwel, haal dan de EHBO of bel 112.",
    body: [
      { type: "h2", id: "regels", text: "Wat zijn de regels?" },
      {
        type: "list",
        items: [
          "**Landelijk verbod:** sinds 1 januari 2023 zijn bezit, verkoop en vervoer van lachgas voor recreatief gebruik verboden — overal, dus ook op een festivalterrein of in een club. Zie [Het lachgasverbod](/lachgas-verbod/).",
          "**Amsterdam:** al in 2019 nam de gemeente in evenementenvergunningen op dat lachgasverkoop verboden is ([NOS](https://nos.nl/artikel/2300206-amsterdam-opent-jacht-op-verkopers-van-lachgas)), en in 2021 besloot de raad tot een verkoopverbod in horeca en bij evenementen ([NOS](https://nos.nl/artikel/2378722-lachgas-wordt-ook-verboden-in-amsterdam)). De APV verbiedt ook het gebruik.",
          "**Ballonnen zijn geen grijs gebied:** wie ballonnen met lachgas verkoopt of uitdeelt, overtreedt de Opiumwet.",
        ],
      },
      { type: "h2", id: "betrapt", text: "Wat gebeurt er als je ermee wordt betrapt?" },
      {
        type: "p",
        text: "Volgens het [Openbaar Ministerie](https://www.om.nl/actueel/nieuws/2023/07/01/lachgasverbod) geldt één ampul of één ballon als gebruikershoeveelheid; wie daarmee voor het eerst wordt aangetroffen, moet er afstand van doen. Bij grotere hoeveelheden volgt een geldboete of taakstraf. Wie verkoopt of handelt, riskeert een zwaardere straf. De strafmaat bepaalt het OM per zaak. Organisatoren kunnen daarnaast hun eigen huisregels hanteren.",
      },
      { type: "h2", id: "risico", text: "Waarom het tussen de mensen extra riskant is" },
      {
        type: "list",
        items: [
          "**Bijna buiten bewustzijn.** DrugsInfo beschrijft het effect als een gevoel van bijna buiten bewustzijn raken. In een volle zaal of op een festivalterrein kun je dan vallen of je bezeren.",
          "**Geen veilige grens.** Volgens het RIVM kan zelfs één ballon al tintelingen in handen en voeten geven; bij veel of vaak gebruik dreigt zenuwschade. Zie [Lachgas en gezondheid](/gezondheid/).",
          "**Grote tanks.** Ballonnen worden steeds vaker gevuld uit grote cilinders, wat de risico’s vergroot en bevriezingswonden kan geven. Zie [Wegwerpcilinders](/wegwerp-lachgascilinders/).",
        ],
      },
      { type: "h2", id: "vriend", text: "Wat doe je als een vriend onwel wordt?" },
      {
        type: "steps",
        items: [
          { title: "Blijf bij diegene", text: "Laat iemand die onwel is niet alleen, en zorg dat er ruimte en frisse lucht is." },
          { title: "Haal hulp", text: "Ga naar de EHBO-post of spreek de beveiliging aan. Is iemand bewusteloos, ademt iemand slecht of is iemand gewond geraakt? Bel direct 112." },
          { title: "Vertel eerlijk wat er is gebruikt", text: "Hulpverleners hebben die informatie nodig om goed te kunnen helpen." },
          { title: "Later nog klachten?", text: "Tintelingen, gevoelloosheid of krachtverlies in de dagen erna zijn een reden om dezelfde dag de huisarts te bellen. Zie [Lachgas en zenuwschade](/lachgas-zenuwschade/)." },
        ],
      },
      { type: "h2", id: "naar-huis", text: "Veilig naar huis" },
      {
        type: "p",
        text: "Lachgas verstoort waarneming en coördinatie; volgens [DrugsInfo](https://www.drugsinfo.nl/lachgas/wat-je-moet-weten-over-lachgas/) is de rijvaardigheid waarschijnlijk het eerste uur na gebruik verminderd. Artikel 8 van de Wegenverkeerswet verbiedt rijden onder invloed van een middel dat je rijvaardigheid kan verminderen. Ga met het openbaar vervoer of rij mee met iemand die niets heeft gebruikt.",
      },
      { type: "h2", id: "trend", text: "Hoe vaak komt het nog voor?" },
      {
        type: "p",
        text: "Steeds minder. Onder uitgaanders van 16 tot 35 jaar daalde het jaargebruik van 35,2% in 2020 naar 15,0% in 2023, en onder jonge Amsterdamse cafébezoekers van 35% in 2015 naar 9% in 2024. De meerderheid van een panel uitgaanders ziet nauwelijks nog lachgas in het nachtleven; het middel heeft een negatief imago gekregen ([RIVM, maart 2026](https://www.rivm.nl/sites/default/files/2026-03/CAM-notitie-Stand-van-zaken-omtrent-lachgas-%282019-2025%29-beveiligd.pdf)). Meer cijfers op [Lachgasgebruik](/lachgas-gebruik/).",
      },
      {
        type: "callout",
        tone: "help",
        title: "Twijfel of zorgen?",
        text: "Bel of chat anoniem met de DrugsInfo Infolijn: 0900-1995. Meer op [Hulp bij lachgas](/hulp/).",
      },
    ],
    sources: ["rijk-verbod", "nos-amsterdam-2019", "nos-amsterdam-2021", "amsterdam-rib-2023", "om-lachgasverbod-2023", "drugsinfo-lachgas", "rivm-cam-2026", "trimbos-lachgas", "wvw-1994"],
    related: ["gebruik", "gezondheid", "regels-amsterdam", "hulp"],
    translationOf: "en-nightlife",
    status: "published",
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
      "Bij acute nood bel je 112. Voor medische klachten zoals tintelingen of krachtverlies ga je naar de huisarts. Anonieme vragen over je eigen gebruik of dat van een ander kun je stellen aan de DrugsInfo Infolijn: 0900-1995, maandag tot en met vrijdag van 9.00 tot 17.00 uur. In Amsterdam biedt onder meer Jellinek verslavingszorg.",
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
          { label: "Bellen", value: "DrugsInfo Infolijn: 0900-1995 (€ 0,10 per minuut), maandag t/m vrijdag 9.00–17.00 uur." },
          { label: "Chatten", value: "Gratis via drugsinfo.nl, maandag t/m vrijdag 13.00–17.00 uur." },
          { label: "Mailen", value: "Gratis via drugsinfo.nl; antwoord binnen vijf werkdagen." },
          { label: "Voor wie", value: "Vragen over je eigen gebruik, het gebruik van een ander of over verslaving." },
        ],
      },
      { type: "p", text: "Actuele bereikbaarheid staat op [drugsinfo.nl/contact](https://www.drugsinfo.nl/contact)." },
      { type: "h2", id: "amsterdam", text: "Verslavingszorg in Amsterdam" },
      {
        type: "p",
        text: "[Jellinek](https://www.jellinek.nl) biedt verslavingszorg en preventie, met meerdere [locaties in Amsterdam](https://www.jellinek.nl/locaties/). Je kunt je via de website aanmelden voor een intake; ook je huisarts kan je verwijzen en is een goed eerste aanspreekpunt. Meer over afhankelijkheid lees je op [Lachgas en verslaving](/lachgas-verslaving/).",
      },
      { type: "h2", id: "ouders", text: "Voor ouders en naasten" },
      {
        type: "p",
        text: "Maak je je zorgen over het gebruik van je kind, partner of vriend? Ook dan kun je anoniem bellen of chatten met de DrugsInfo Infolijn. Een rustig gesprek zonder oordeel werkt meestal beter dan confrontatie. Let op de lichamelijke signalen die op [Lachgas en gezondheid](/gezondheid/) staan, en op signalen als terugtrekken, alleen gebruiken of geldproblemen.",
      },
      { type: "h2", id: "jongeren", text: "Voor jongeren" },
      {
        type: "p",
        text: "Twijfel je over je eigen gebruik, of merk je dat stoppen moeilijk is? Je hoeft het niet alleen uit te zoeken. Chat of bel anoniem met DrugsInfo of praat met je huisarts — die heeft een beroepsgeheim.",
      },
    ],
    sources: ["drugsinfo-lachgas", "drugsinfo-contact", "jellinek-locaties", "trimbos-lachgas", "rivm-cam-2026"],
    related: ["verslaving", "gezondheid", "zenuwschade", "amsterdam"],
    status: "published",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
  },

  // ───────────────────────────────────────────────────────────── NIEUWS ──
  {
    id: "nieuws",
    locale: "nl",
    path: "/nieuws/",
    category: "nieuws",
    eyebrow: "Nieuws en ontwikkelingen",
    title: "Lachgas: nieuws en ontwikkelingen",
    metaTitle: "Lachgas nieuws: tijdlijn van verbod, Amsterdam en afval",
    metaDescription:
      "De belangrijkste ontwikkelingen rond lachgas in Nederland en Amsterdam sinds 2019, op datum en met bron: regels, handhaving, gezondheid, afval en markt.",
    answer:
      "Sinds 2019 is lachgas van een vrij verkrijgbaar product een verboden middel geworden. Amsterdam trad al vroeg op, het landelijke verbod geldt sinds 1 januari 2023 en sindsdien verschuiven de problemen van straatverkoop naar afval en een kleinere groep intensieve gebruikers. Deze tijdlijn wordt bij iedere controle bijgewerkt.",
    body: [
      { type: "h2", id: "tijdlijn", text: "Tijdlijn" },
      {
        type: "steps",
        items: [
          { title: "2 maart 2026 — RIVM: gebruik gedaald, kleine groep met ernstige klachten", text: "De [CAM-notitie](https://www.rivm.nl/sites/default/files/2026-03/CAM-notitie-Stand-van-zaken-omtrent-lachgas-%282019-2025%29-beveiligd.pdf) meldt dalend gebruik, meer signalen van verslaving en 77.000 in beslag genomen cilinders in 2025." },
          { title: "22 september 2025 — Radar: verboden maar makkelijk te krijgen", text: "[AVROTROS Radar](https://radar.avrotros.nl/artikel/verboden-maar-simpel-te-krijgen-lachgas-blijft-hardnekkig-probleem-61881) beschrijft hoe lachgas ondanks het verbod verkrijgbaar blijft." },
          { title: "2 juli 2025 — Nieuwsuur: afvalproblemen nemen toe", text: "Bij AEB nog 15 tot 20 explosies per week; gemeenten verhalen de kosten via lokale belastingen ([NOS](https://nos.nl/nieuwsuur/artikel/2573331-problemen-lachgascilinders-in-afval-nemen-toe-bewoners-draaien-op-voor-kosten))." },
          { title: "20 juni 2025 — Rotterdamse raadsvragen over Fastgas", text: "Naar aanleiding van een NRC-onderzoek naar de internationale lachgashandel ([schriftelijke vragen](https://rotterdamraad.bestuurlijkeinformatie.nl/Document/View/a252a85f-8511-462a-bddd-f143f5a70aef))." },
          { title: "3 maart 2025 — AEB opent lachgasloods", text: "Cilinders worden vermalen voordat afval de oven in gaat ([NH Nieuws](https://www.nhnieuws.nl/nieuws/346301/nieuwe-lachgasloods-moet-explosies-in-ovens-aeb-voorkomen-heel-veel-schade-voor-bedrijf))." },
          { title: "15 mei 2024 — meer gedumpte cilinders in Amsterdam", text: "De gemeente ziet meer dumpingen na het stoppen van de AEB-vergoeding ([AT5](https://www.at5.nl/artikelen/226649/lachgascilinders-vaker-gedumpt-in-de-stad-na-afschaffing-statiegeld-door-aeb))." },
          { title: "14 februari 2024 — AEB stopt innamepunt", text: "Na vijf maanden en zo’n 80.000 cilinders ([AT5](https://www.at5.nl/artikelen/225064/aeb-stopt-na-vijf-maanden-met-innamepunt-lachgas-maar-liefst-80000-cilinders-ingeleverd))." },
          { title: "1 juli 2023 — politie en OM handhaven", text: "Het [OM](https://www.om.nl/actueel/nieuws/2023/07/01/lachgasverbod) publiceert hoe het lachgaszaken afdoet." },
          { title: "3 maart 2023 — explosies bij AEB", text: "Sinds half januari vaker en hardere explosies door cilinders ([AT5](https://www.at5.nl/artikelen/219327/lachgascilinders-ontploffen-steeds-vaker-en-harder-in-afvalverbrandingsoven))." },
          { title: "1 januari 2023 — landelijk verbod", text: "Lachgas staat op lijst II van de Opiumwet ([Staatsblad 2022, 461](https://zoek.officielebekendmakingen.nl/stb-2022-461))." },
          { title: "29 april 2021 — Amsterdam verbiedt verkoop in horeca en bij evenementen", text: "Besluit van de gemeenteraad ([NOS](https://nos.nl/artikel/2378722-lachgas-wordt-ook-verboden-in-amsterdam))." },
          { title: "3 september 2019 — Amsterdam pakt straatverkoop aan", text: "Verkoop in de openbare ruimte zonder vergunning niet toegestaan ([NOS](https://nos.nl/artikel/2300206-amsterdam-opent-jacht-op-verkopers-van-lachgas))." },
          { title: "26 augustus 2019 — OLVG ziet meer patiënten", text: "Het aantal patiënten met neurologische klachten door lachgas verdrievoudigde ([AT5](https://www.at5.nl/artikelen/196351/neuroloog-olvg-aantal-patienten-met-klachten-door-lachgas-verdriedubbeld))." },
        ],
      },
    ],
    sources: ["rivm-cam-2026", "radar-2025", "nos-nieuwsuur-afval", "rotterdam-vragen-2025", "nhnieuws-loods", "at5-dumping", "at5-aeb-stopt", "om-lachgasverbod-2023", "at5-explosies", "stb-2022-461", "nos-amsterdam-2021", "nos-amsterdam-2019", "at5-olvg"],
    related: ["verbod", "amsterdam", "cilinders", "merken"],
    status: "published",
    published: D,
    reviewed: D,
    nextReview: "2027-01-31",
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
      "Lachgas Amsterdam is een onafhankelijk en volledig niet-commercieel informatieplatform, uitgegeven door Lachgas info Amsterdam. We leggen wetgeving, gezondheidsrisico’s en de Amsterdamse context helder uit, op basis van controleerbare bronnen. We verkopen niets, tonen geen advertenties en zijn geen overheidswebsite.",
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
          "geen cookies, geen advertentietrackers en geen nieuwsbrief;",
          "geen relatie met de gemeente Amsterdam of andere overheden.",
        ],
      },
      { type: "h2", id: "uitgever", text: "Uitgever" },
      {
        type: "facts",
        items: [
          { label: "Uitgever", value: "Lachgas info Amsterdam" },
          { label: "Postadres", value: "Sarphatipark 8, Amsterdam" },
          { label: "Website", value: "lachgasinfo.nl" },
        ],
      },
      {
        type: "p",
        text: "Deze website heeft geen contactformulier of e-mailadres. Kom je er met de artikelen en de chatassistent niet uit, dan kun je ons een WhatsApp-bericht sturen via de groene knop die verschijnt als je de chat opent. Correspondentie, bijvoorbeeld over je rechten onder de AVG, kan per post naar het adres hierboven.",
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
    status: "published",
    published: D,
    reviewed: D,
    nextReview: "2027-04-30",
    unlisted: true,
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
      "Hoe Lachgas Amsterdam bronnen kiest, feiten controleert, juridische en medische content controleert en verouderde informatie signaleert.",
    answer:
      "Iedere pagina doorloopt vaste stappen: concept, feitencheck, juridische of medische controle, goedkeuring en publicatie. Wij baseren ons bij voorkeur op primaire en officiële bronnen, tonen per pagina de controledatum en vermelden nooit beweringen die we niet kunnen herleiden.",
    body: [
      { type: "h2", id: "bronnen", text: "Bronnen" },
      {
        type: "p",
        text: "Wij gebruiken bij voorkeur primaire bronnen: wetteksten, officiële bekendmakingen en informatie van de Rijksoverheid, het Openbaar Ministerie, RIVM, NVWA, het Trimbos-instituut en de Nederlandse Arbeidsinspectie. Journalistieke bronnen gebruiken we voor context en lokale ontwikkelingen, altijd met naam en datum.",
      },
      {
        type: "p",
        text: "In het [bronregister](/bronnen/) staat per bron hoe grondig die is gecontroleerd. Gepubliceerde pagina’s steunen uitsluitend op bronnen die de redactie volledig heeft gelezen.",
      },
      { type: "h2", id: "workflow", text: "Redactionele statussen" },
      {
        type: "steps",
        items: [
          { title: "Concept", text: "Eerste versie, nog niet gecontroleerd." },
          { title: "Feitencheck", text: "Iedere bewering wordt aan een bron gekoppeld." },
          { title: "Juridische of medische controle", text: "Wetgeving en gezondheidsinformatie worden inhoudelijk gecontroleerd." },
          { title: "Goedgekeurd", text: "Vrijgegeven door de uitgever." },
          { title: "Gepubliceerd", text: "Openbaar en vindbaar in zoekmachines." },
          { title: "Update nodig", text: "Een bron of regel is veranderd; de pagina wordt herzien." },
        ],
      },
      { type: "h2", id: "geen-verzinsels", text: "Wat wij nooit doen" },
      {
        type: "list",
        items: [
          "deskundigen, auteurs of reviews verzinnen;",
          "cijfers, incidenten of maatregelen noemen die we niet kunnen herleiden;",
          "individueel juridisch of medisch advies geven;",
          "merken aanbevelen, prijzen noemen of naar verkopers verwijzen.",
        ],
      },
      { type: "h2", id: "actualiteit", text: "Actualiteit" },
      {
        type: "p",
        text: "Iedere pagina heeft een datum voor de volgende controle. Juridische pagina’s controleren we minimaal ieder kwartaal, gezondheidspagina’s minimaal ieder halfjaar, en direct wanneer regels veranderen. Ontwikkelingen houden we bij op [Nieuws en ontwikkelingen](/nieuws/).",
      },
    ],
    sources: [],
    related: ["over-ons", "disclaimer", "privacy"],
    translationOf: "en-editorial",
    status: "published",
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
      "Lachgas Amsterdam verzamelt zo min mogelijk gegevens: geen cookies, geen externe trackers en alleen anonieme bezoekersstatistieken. Chatvragen worden niet bewaard.",
    answer:
      "Wij verzamelen zo min mogelijk gegevens. Deze website gebruikt geen cookies en laadt geen externe scripts of lettertypen. Voor anonieme bezoekersstatistieken gebruiken wij Vercel Web Analytics, zonder cookies. De hostingprovider Vercel verwerkt technisch noodzakelijke serverlogs. Als je de chatassistent gebruikt, wordt je vraag naar Anthropic gestuurd om een antwoord te maken; wij bewaren je gesprek niet.",
    body: [
      { type: "h2", id: "verantwoordelijke", text: "Verwerkingsverantwoordelijke" },
      { type: "p", text: "Lachgas info Amsterdam, Sarphatipark 8, Amsterdam. Vragen of verzoeken over je gegevens kun je per post naar dit adres sturen." },
      { type: "h2", id: "cookies", text: "Cookies en tracking" },
      {
        type: "p",
        text: "Deze website plaatst geen cookies en gebruikt geen advertentienetwerken of social-media-plug-ins. Daarom tonen wij ook geen cookiebanner. Alle lettertypen worden vanaf ons eigen domein geladen. Klik je de waarschuwing op de homepage weg, dan onthoudt je browser dat alleen tot je het tabblad sluit (via sessionStorage, geen cookie). Dat gegeven blijft op je eigen apparaat en wordt niet naar ons verstuurd.",
      },
      { type: "h2", id: "statistieken", text: "Bezoekersstatistieken" },
      {
        type: "p",
        text: "Om te weten hoeveel mensen de website bezoeken en welke pagina’s worden gelezen, gebruiken wij Vercel Web Analytics. Dat werkt zonder cookies en slaat niets op in je browser. Per paginabezoek worden de bekeken pagina, de verwijzende website, het land en het type browser, besturingssysteem en apparaat geregistreerd. Om bezoeken van dezelfde bezoeker op één dag samen te tellen, maakt Vercel een anonieme code van technische gegevens van het verzoek; die code wordt na 24 uur weggegooid en je IP-adres wordt niet opgeslagen. Wij zien alleen totalen en kunnen niemand herkennen. Dit doen wij op grond van gerechtvaardigd belang (art. 6 lid 1 sub f AVG): de website verbeteren.",
      },
      { type: "h2", id: "serverlogs", text: "Hosting en serverlogs" },
      {
        type: "p",
        text: "De website wordt gehost door Vercel Inc. Bij ieder bezoek verwerkt Vercel technische gegevens, zoals IP-adres, tijdstip en opgevraagde pagina, om de website veilig en beschikbaar te houden (gerechtvaardigd belang, art. 6 lid 1 sub f AVG). Vercel bewaart deze logs volgens zijn eigen beleid; de uitgever bewaart zelf geen bezoekersgegevens. Voor doorgifte buiten de EU hanteert Vercel de standaardcontractbepalingen van de Europese Commissie.",
      },
      { type: "h2", id: "chat", text: "Chatassistent" },
      {
        type: "p",
        text: "Op iedere pagina kun je vragen stellen aan een AI-chatassistent. Die gebruik je alleen als je zelf een vraag typt. Je vraag en het lopende gesprek worden dan via onze server naar Anthropic PBC (Verenigde Staten) gestuurd, die met het taalmodel Claude een antwoord maakt op basis van de inhoud van deze website. Wij slaan gesprekken niet op en schrijven ze niet in logbestanden. Anthropic verwerkt de gegevens volgens zijn eigen beleid voor zakelijke API-klanten, bewaart ze maximaal een beperkte periode en gebruikt ze niet om modellen te trainen.",
      },
      {
        type: "p",
        text: "Het gesprek staat alleen in je browservenster en verdwijnt zodra je de pagina sluit of herlaadt. Er worden geen cookies of andere gegevens in je browser opgeslagen. Deel in de chat geen naam, adres, telefoonnummer of medische gegevens. De assistent kan fouten maken; de artikelen en hun bronnen zijn leidend. Bij nood bel je altijd 112.",
      },
      { type: "h2", id: "whatsapp", text: "WhatsApp" },
      {
        type: "p",
        text: "Als je de chat opent, verschijnt een knop om ons een WhatsApp-bericht te sturen. Die knop is een gewone link: er wordt niets geladen of doorgegeven totdat je erop tikt. Stuur je ons een bericht, dan zien wij je telefoonnummer, je profielnaam en wat je schrijft. Wij gebruiken dat alleen om je vraag te beantwoorden en verwijderen het gesprek zodra je vraag is afgehandeld. WhatsApp is een dienst van WhatsApp Ireland Ltd. (Meta) en verwerkt je gegevens volgens zijn eigen privacybeleid. Wil je dat niet, gebruik dan de chatassistent of stuur een brief.",
      },
      { type: "h2", id: "geen-formulieren", text: "Geen accounts of nieuwsbrief" },
      { type: "p", text: "Er zijn geen accounts, contactformulieren of nieuwsbrieven. Wij vragen je dus nooit om persoonsgegevens." },
      { type: "h2", id: "rechten", text: "Je rechten" },
      {
        type: "p",
        text: "Je hebt op grond van de AVG onder meer recht op inzage, correctie en verwijdering, en het recht om een klacht in te dienen bij de [Autoriteit Persoonsgegevens](https://www.autoriteitpersoonsgegevens.nl).",
      },
    ],
    sources: [],
    related: ["disclaimer", "over-ons"],
    translationOf: "en-privacy",
    status: "published",
    published: D,
    reviewed: "2026-11-04",
    nextReview: "2027-04-30",
    unlisted: true,
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
      { type: "p", text: "Wij linken uitsluitend naar bronnen en hulpinstanties, nooit naar verkopers. Voor de inhoud van externe websites zijn wij niet verantwoordelijk." },
    ],
    sources: [],
    related: ["privacy", "redactiebeleid"],
    translationOf: "en-disclaimer",
    status: "published",
    published: D,
    reviewed: D,
    nextReview: "2027-04-30",
    unlisted: true,
  },
];
