# TEST_REPORT — Lachgas Amsterdam

Datum: 31 oktober 2026 · Getest op de **productiebuild** (`next build` + `next start`).

## Samenvatting

| Onderdeel | Resultaat |
|---|---|
| TypeScript, ESLint | ✅ schoon |
| Content-audit | ✅ 0 fouten · 30 pagina’s `published` · 5 waarschuwingen (ongebruikte bronnen) |
| Crawl (35 URL’s) | ✅ alle 200, 0 gebroken links of ankers, onbekende URL’s 404 |
| Metadata | ✅ titels ≤ 60, beschrijvingen ≤ 160, canonical en og:image op elke pagina |
| hreflang | ✅ wederkerig, x-default → NL, ook in de sitemap |
| Sitemap / robots | ✅ 35 URL’s met alternates; `index, follow`; sitemap-verwijzing in robots.txt |
| Domein | ✅ canonicals op https://lachgasinfo.nl; .com en www → 308 |
| Structured data | ✅ geldige JSON-LD: Organization (met adres), WebSite, Article (met citations), BreadcrumbList |
| Lighthouse mobiel | ✅ toegankelijkheid 100 · best practices 100 · SEO 100 op alle geteste pagina’s |
| Lighthouse performance | Homepage 92 mobiel / 99 desktop · artikelpagina 96 mobiel |
| Cross-browser | ✅ Chromium, Firefox, WebKit: geen JS-fouten, menu’s werken, geen horizontale scroll (desktop en mobiel) |
| Toetsenbord | ✅ skiplink, zichtbare focus, Enter opent menu, Escape sluit |
| Beveiliging | ✅ CSP, HSTS, X-Frame-Options, nosniff, Referrer- en Permissions-Policy |
| Privacy | ✅ 0 cookies, 0 externe requests |

## Lighthouse in detail (mobiel, gesimuleerd 4G, Edge headless)

| Pagina | Perf | A11y | BP | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| `/` | 92 | 100 | 100 | 100 | 3,1 s | 0,04 | 130 ms |
| `/lachgas-verbod/` | 96 | 100 | 100 | 100 | 2,7 s | 0 | 90 ms |
| `/` desktop | 99 | — | — | — | 0,7 s | 0 | 0 ms |

LCP mobiel ligt in de labsimulatie nog boven de 2,5 s-norm. Velddata (echte bezoekers) komen pas na livegang beschikbaar via Search Console / CrUX.

## Opgelost in deze ronde

| # | Probleem | Oplossing |
|---|---|---|
| 1 | Heroscène werd ieder frame volledig opnieuw getekend (583 elementen + blur) | Gesplitst in statische laag en lichtlaag; drift als GPU-transform |
| 2 | Heroscène ongecomprimeerd (42 KB) | Statische bestanden in `/public`, gzip 5,6 KB |
| 3 | LCP-tekst startte onzichtbaar door entree-animatie | `rise-soft`: alleen beweging, geen opacity |
| 4 | Mono-font concurreerde om bandbreedte | Niet meer preloaded |
| 5 | WebKit laadde lokaal geen scripts door `upgrade-insecure-requests` | Directive verwijderd (HSTS dekt HTTPS al af) |
| 6 | Bewering over overlastverbod 2021 niet door bron gedekt | Verwijderd; APV-gebruiksverbod nu onderbouwd met gemeentelijke brief |
| 7 | Dode bronlink (Alrijne) | Vervangen door peer-reviewed publicatie |
| 8 | Engelse juridische pagina’s ontbraken | `/en/privacy/`, `/en/disclaimer/`, `/en/editorial-policy/` |

Eerdere ronde (zie Git-historie): titels, og:image, beschrijvingen, dubbele id’s, contrast, no-JS-fallback, mobiele header, hubgrid.

## Bekende beperkingen

- WebKit op Windows toont Geist dunner dan Safari op macOS/iOS; controleer op een echt Apple-apparaat.
- Domeinredirect via de site zelf gaat in twee stappen (host → zonder slash → met slash); laat Vercel de domeinredirect doen (DEPLOY.md), dan is het één stap.
- Niet getest met echte schermlezers (NVDA/VoiceOver); Lighthouse-toegankelijkheid 100 en structurele controles wel.

## Opnieuw testen

```bash
npm run check
npm run build && npx next start -p 3100
```
