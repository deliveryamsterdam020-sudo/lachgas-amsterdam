# ARCHITECTURE

## Stack
Next.js 16.4 (App Router, Turbopack, Cache Components) · React 19 · TypeScript · Tailwind CSS 4 · Lucide icons · next/font (Geist, self-hosted). Geen database, geen externe diensten.

## Mappen
```
src/
  app/
    (nl)/                 root layout NL (<html lang="nl-NL">), homepage, [...slug], kennisbank, bronnen, not-found
    (en)/en/              root layout EN (<html lang="en">), homepage, [...slug], sources, not-found
    canal-scene.svg/      route: geanimeerde heroscène als cachebare SVG
    og-nl.png, og-en.png/ routes: gegenereerde deelafbeeldingen
    sitemap.ts, robots.ts, icon.svg, global-not-found.tsx, globals.css
  content/                contentmodel (types.ts), nl.ts, en.ts, sources.ts, index.ts (registry + helpers)
  components/
    article/              ArticleView, Blocks, PageHero, SourceList, SourceRegister
    home/                 secties, HubCard, BanCounter
    layout/               SiteShell, Header (dropdownpanelen + mobiel menu), Footer, NotFoundContent
    visual/               gables.ts (gevelgenerator), canalScene.ts, GableSkyline, CanalRings
    seo/                  JsonLd, shareImage
  lib/                    site.ts (config, UI-teksten), menu.ts (navigatie), seo.ts (metadata + JSON-LD)
scripts/content-audit.mts redactionele controle (CI-geschikt)
```

## Rendering
Alle pagina’s worden bij de build statisch gegenereerd (`generateStaticParams`). Enige client-JavaScript: header/menu, scroll-reveal en de verbodsteller.

## Taalstructuur
Twee root layouts zodat `lang` per taal klopt. Vertalingen koppelen via `translationOf` (wederkerig, gecontroleerd door de audit). De taalknop gebruikt dezelfde koppeling; zonder vertaling gaat hij naar de homepage van de andere taal.

## Redactioneel systeem
Content-as-code: iedere pagina is een getypeerd object met status, publicatiedatum, controledatum, volgende controle, bronnen, gerelateerde pagina’s en onzekerheden. Wijzigingen lopen via Git (review, historie, terugdraaien). `npm run content:audit` controleert gebroken links en ankers, onbekende bronnen, niet-wederkerige vertalingen, verlopen controles, en gepubliceerde pagina’s met onvolledig gecontroleerde bronnen of open onzekerheden.

Statussen: `draft → fact-check → legal-review / medical-review → approved → published` (+ `needs-update`). Alleen `published` is indexeerbaar.

**Later (optioneel):** een headless CMS met rollen en inlog kan hetzelfde contentmodel vullen. Nu niet gebouwd: er is één redactie, en een inlogomgeving voegt aanvalsoppervlak toe zonder directe meerwaarde.

## Beveiliging
Strikte CSP, HSTS, X-Frame-Options DENY, nosniff, Referrer- en Permissions-Policy (`next.config.ts`). Geen formulieren, geen cookies, geen secrets in de code.

## Configuratie
`NEXT_PUBLIC_SITE_URL` — productiedomein (verplicht vóór livegang).
