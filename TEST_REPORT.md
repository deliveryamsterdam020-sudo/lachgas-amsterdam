# TEST_REPORT — Lachgas Amsterdam

Datum: 31 oktober 2026 · Getest op de **productiebuild** (`next build` + `next start`) tenzij anders vermeld.

## Samenvatting

| Onderdeel | Resultaat |
|---|---|
| TypeScript, ESLint | ✅ schoon |
| Content-audit (`npm run content:audit`) | ✅ 0 fouten, 4 waarschuwingen (bronnen nog niet beoordeeld) |
| Routes (29) | ✅ alle 200; onbekende URL’s 404; zonder slash → 308 |
| Interne links en ankers | ✅ 0 gebroken (crawl vanaf `/` en `/en/`) |
| Metadata | ✅ na fixes: titels ≤ 60 tekens, beschrijvingen ≤ 160, canonical op elke pagina |
| hreflang | ✅ wederkerig voor alle paren, x-default → NL |
| Structured data | ✅ geldige JSON-LD (Organization, WebSite, Article, BreadcrumbList) |
| Headings | ✅ precies één h1 per pagina, geen niveausprongen |
| Mobiel (360 px) | ✅ geen horizontale overflow op alle paginatypes |
| Toetsenbord | ✅ skiplink eerst, zichtbare focus, menu met Enter open, Escape sluit |
| Contrast (WCAG AA) | ✅ na fixes (zie onder) |
| Beveiligingsheaders | ✅ CSP, HSTS, X-Frame-Options, nosniff, Referrer- en Permissions-Policy |
| Privacy | ✅ 0 cookies, 0 externe requests, fonts self-hosted |
| Performance (lab) | ⚠️ deels gemeten, zie onder |

## Gevonden en opgelost tijdens de audit

| # | Probleem | Oplossing |
|---|---|---|
| 1 | Titels tot 89 tekens door automatisch achtervoegsel | Merknaam alleen toevoegen als het past; lange titels ingekort |
| 2 | Geen og:image op enige pagina | Gegenereerde deelafbeeldingen `/og-nl.png` en `/og-en.png`, expliciet op elke pagina |
| 3 | Zes meta-descriptions > 160 tekens | Ingekort |
| 4 | Dubbele SVG-id’s op de homepage | Labelpaden alleen renderen als labels zichtbaar zijn |
| 5 | Homepage-HTML 440 KB (78 KB gzip): heroscène dubbel in HTML én React-payload | Scène als losse, cachebare `/canal-scene.svg`; HTML nu 285 KB (54 KB gzip) |
| 6 | Kort-antwoordkaart pas zichtbaar na JavaScript | Rendert direct, animatie via CSS |
| 7 | Inhoud onzichtbaar zonder JavaScript (scroll-reveal) | `<noscript>`-fallback |
| 8 | Mobiele header te breed op 375 px | Ondertitel logo verborgen < 400 px |
| 9 | Lege grijze vlakken in feitenraster tijdens animatie | Raster herbouwd met losse kaarten |
| 10 | Hubgrid met lege cellen | Laatste kaarten over twee kolommen |
| 11 | Kleine tekst onder AA-contrast (wit 45 % op navy: 4,4:1; slate op wit: 4,2:1) | Naar wit 60 % (6,8:1) en `muted` (6,0:1) |
| 12 | Waarschuwing Partial Prefetching op dynamische route | Experimentele optie uitgezet (alle pagina’s zijn statisch) |
| 13 | Lint-fouten (setState in effect) in header en teller | Teller via `useSyncExternalStore`, menu sluit via klik |

## Performance (homepage, productiebuild, lokaal)

- TTFB 13 ms · 13 requests · JS 142 KB · CSS 11 KB · fonts 51 KB · heroscène 55 KB · HTML 54 KB (gzip)
- 0 externe requests.
- **Niet gemeten:** LCP/INP. Het browserpaneel draaide op de achtergrond, waardoor LCP niet werd gerapporteerd. Meet na deployment met PageSpeed Insights.
- Aandachtspunt: de heroscène wordt lokaal ongecomprimeerd geserveerd; zet compressie aan op de host (Vercel en de meeste CDN’s doen dit standaard).

## Bewust zo — geen fout

- `<meta name="robots" content="noindex">` op alle pagina’s en een **lege sitemap**: geen enkele pagina heeft nog status `published` (juridische/medische controle staat open).
- Canonicals wijzen naar `http://localhost:3000` zolang `NEXT_PUBLIC_SITE_URL` niet is ingesteld.

## Niet getest

- Echte schermlezers (NVDA/VoiceOver): alleen structurele controles gedaan (namen, landmarks, headings, aria-attributen).
- Andere browsers dan Chromium.
- Field data (CrUX) — pas beschikbaar na livegang.

## Hoe opnieuw testen

```bash
npm run check
npm run build && npx next start -p 3100
```
