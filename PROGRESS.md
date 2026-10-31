# PROGRESS — Lachgas Amsterdam

Laatst bijgewerkt: 31 oktober 2026

## Status in één zin

De technische en visuele basis staat en is getest; het platform is **nog niet klaar voor publicatie**, omdat juridische en medische controle, uitgeversgegevens en het productiedomein ontbreken.

## Afgerond

| Fase | Wat |
|---|---|
| 1 Analyse | Lege werkmap; Next.js 16.4 (App Router, Turbopack, Cache Components), React 19, Tailwind 4, TypeScript. |
| 2 Strategie | Informatiearchitectuur, contentmodel, SEO-structuur, bronregister (zie ARCHITECTURE.md, SEO_STRATEGY.md, CONTENT_PLAN.md). |
| 3 Design | Eigen visuele taal: grachtenpanden-generator (trap-, hals-, klok-, tuit- en lijstgevels), geanimeerde grachtscène met lichtjesbrug en waterreflecties, abstracte grachtengordelkaart, designsysteem (DESIGN_SYSTEM.md). |
| 4 Bouw | Homepage (9 secties), artikelsjabloon, kennisbank, bronregister, 404, Apple-achtige navigatie met dropdownpanelen en iOS-achtig mobiel menu met iconen. |
| 5 Content | 15 NL-pagina’s + 8 EN-pagina’s + 2 homepages, 24 bronnen. Feiten gecontroleerd tegen Rijksoverheid, VNG, Trimbos, DrugsInfo, AT5, NOS. |
| 6 Redactie | Contentmodel met statussen (draft → published), controledatums, onzekerheden per pagina, openbaar bronregister met controleniveau, `npm run content:audit`. |
| 7 Testen | Crawl van alle routes, metadata, hreflang, JSON-LD, mobiel, toetsenbord, contrast, performance — zie TEST_REPORT.md. |
| 8 Visuele audit | Desktop en mobiel bekeken in de browser; verbeterpunten doorgevoerd (heroscène, hubgrid, mobiele header, navigatie). |

## Gemaakte keuzes

- **Geen stockfoto’s**: de Amsterdamse beeldtaal is volledig in code getekend (SVG). Geen licentierisico, ~55 KB, scherp op elk scherm, animaties uit bij reduced motion.
- **Twee root layouts** (`(nl)` en `(en)/en`) zodat `<html lang>` per taal klopt.
- **Content als code** (TypeScript-modules in Git) i.p.v. een database-CMS: reviewbaar, versiebeheer, geen inlog-aanvalsoppervlak. Een headless CMS kan later op hetzelfde contentmodel aansluiten.
- **Niet-gepubliceerde pagina’s zijn `noindex`** en staan niet in de sitemap. Juridische/medische content wacht op controle door een professional, zoals de opdracht voorschrijft. De sitemap is daarom nu bewust leeg.
- **Geen boetebedragen**: niet geverifieerd, dus niet genoemd.
- **Dunne pagina’s niet gemaakt**: `/lachgas-boete/`, `/lachgas-vervoer/`, `/lachgas-verslaving/`, `/nieuws/` e.a. zijn opgenomen in bestaande pagina’s of wachten op voldoende geverifieerde inhoud.
- **Geen contactmogelijkheden**, geen cookies, geen analytics, geen externe scripts of fonts.

## Open — blokkerend voor livegang

1. **Juridische controle** van alle wetgevingspagina’s, privacy en disclaimer door een jurist.
2. **Medische controle** van gezondheids- en hulppagina’s door een arts.
3. **Uitgeversgegevens** invullen (`PUBLISHER` in `src/lib/site.ts`, /over-ons/, /privacy/): naam, verwerkingsverantwoordelijke, hostingprovider, bewaartermijn serverlogs. Laat toetsen welke identificatieverplichtingen gelden.
4. **Productiedomein** instellen via `NEXT_PUBLIC_SITE_URL` (canonicals, hreflang, sitemap en structured data hangen ervan af).
5. Bronnen met status *summary* volledig lezen; *pending*-bronnen (NRC 2025, RIVM CAM-notitie 2026, WVW, Kamervragen 2023) beoordelen.
6. Actuele Amsterdamse APV-tekst en inzamelroute voor cilinders (Afvalpunten) verifiëren.

## Open — niet blokkerend

- Concurrentieanalyse met echte Nederlandse SERP-data (Search Console / rankingtool); nu alleen hypotheses (SEO_STRATEGY.md).
- Lighthouse/PageSpeed op de productieomgeving (LCP kon lokaal niet betrouwbaar gemeten worden).
- Eventueel headless CMS met rollen en inlog, als er meerdere redacteuren komen.
- Extra pagina’s zodra er geverifieerde inhoud is: verslaving, overlast Amsterdam, hulp voor ouders/jongeren als eigen pagina’s.

## Volgende concrete stap

Laat een jurist `/lachgas-verbod/`, `/lachgas-regels-amsterdam/`, `/lachgas-bezit/` en de drie Engelse wetgevingspagina’s beoordelen; zet na akkoord de status op `published` en draai `npm run check`.
