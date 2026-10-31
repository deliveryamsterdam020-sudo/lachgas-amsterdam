# PROGRESS — Lachgas Amsterdam

Laatst bijgewerkt: 31 oktober 2026

## Status

De site is **inhoudelijk en technisch klaar voor livegang**. Alle 35 pagina’s staan op `published` en zijn indexeerbaar; de sitemap bevat 40 URL’s en de slotcontrole is afgerond. Wat nog rest, vraagt een handeling van de uitgever (deployen, DNS, Search Console) — zie DEPLOY.md.

## Afgerond

| Onderdeel | Wat |
|---|---|
| Uitgever | Lachgas info Amsterdam, Sarphatipark 8, Amsterdam — op Over ons, privacy (NL/EN) en in de Organization-structured data. |
| Domein | `https://lachgasinfo.nl` als canoniek domein; lachgasinfo.com en www-varianten → 308 naar lachgasinfo.nl. |
| Hosting | Klaar voor Vercel (DEPLOY.md); privacyverklaring noemt Vercel. |
| Publicatie | Pagina’s gecontroleerd en vrijgegeven door de uitgever (31-10-2026). Strafmaat: “wordt door het OM bepaald”, met de OM-uitleg erbij. |
| Bronnen | 27 bronnen; alle bronnen die pagina’s gebruiken zijn volledig gelezen (o.a. Opiumwet, Stb. 2022-461, OM, RIVM CAM-notitie maart 2026, gemeente Amsterdam). De audit blokkeert publicatie op niet-volledig gecontroleerde bronnen. |
| Correcties na broncontrole | NOS 2021 noemt geen overlastverbod → verwijderd; AEB-data (sept 2023–feb 2024, € 10 → € 5) toegevoegd; OLVG-cijfers (4 → 12, 2019); Alrijne-link dood → vervangen door peer-reviewed bron; APV-gebruiksverbod Amsterdam bevestigd via raadsinformatiebrief 9-2-2023. |
| Nieuwe pagina’s | `/lachgas-verslaving/`, `/lachgas-overlast-amsterdam/`, `/nieuws/`, `/lachgas-gebruik/`, `/wegwerp-lachgascilinders/`, `/en/disposable-nitrous-oxide-tanks/`, `/lachgas-uitgaan-festivals/`, `/en/nitrous-oxide-festivals-nightlife/`, `/en/privacy/`, `/en/disclaimer/`, `/en/editorial-policy/`. |
| Doelgroep | 16–35 jaar: toon, onderwerpen en cijfers daarop afgestemd (CONTENT_PLAN.md, SEO_STRATEGY.md). |
| Design | Apple-achtige navigatie met dropdownpanelen en iconen; iOS-achtig mobiel menu; Amsterdam-sectie op de Engelse homepage. |
| Performance | Heroscène gesplitst in statische laag + lichtlaag (statische, gecomprimeerde SVG’s: 5,6 KB + 2,5 KB gzip); camerabeweging via GPU-transform; mono-font niet meer preloaded; LCP-elementen niet meer onzichtbaar geanimeerd. |
| Cross-browser | Chromium (Edge), Firefox en WebKit getest; CSP-directive die WebKit lokaal brak verwijderd. |
| Slotcontrole | Alle code en teksten regel voor regel nagelopen; 15 verbeteringen (o.a. Recyclepunten, bronvaste formuleringen, toetsenbordvolgorde, structured data). axe 0 overtredingen, 32/32 externe links werken. Zie TEST_REPORT.md. |

## Gemaakte keuzes

- Geen stockfoto’s: Amsterdamse beeldtaal in code (SVG), licentievrij en licht.
- Content-as-code met redactionele statussen en `npm run content:audit` in plaats van een database-CMS.
- Geen boetebedragen: het OM bepaalt de strafmaat per zaak; de site citeert de OM-uitleg.
- Geen contactkanaal; correspondentie (o.a. AVG-verzoeken) per post naar het uitgeversadres.
- Bewust niet gemaakt (te dun of dubbel): zie CONTENT_PLAN.md.

## Open — vraagt handeling van de uitgever

1. Deployen op Vercel en domeinen/DNS koppelen (DEPLOY.md).
2. Search Console instellen en sitemap indienen.
3. Controle op een echte iPhone/Mac: WebKit op Windows toont de letters dunner dan Safari normaal doet.

## Open — optioneel

- Concurrentieanalyse met echte Nederlandse zoekdata (Search Console na livegang).
- Eigen of gelicenseerde Amsterdamse fotografie als aanvulling op de illustraties.
- Interactieve stadskaart (de grachtengordel is nu decoratief).
- Headless CMS met inlog en rollen, zodra er meerdere redacteuren zijn.
- Bronnen die niet meer gebruikt worden (Raad van State-advies, Kamervragen 2023, NRC-artikel) alsnog lezen als er een pagina over komt.

## Volgende concrete stap

Volg DEPLOY.md: push naar GitHub, importeer in Vercel, koppel lachgasinfo.nl.
