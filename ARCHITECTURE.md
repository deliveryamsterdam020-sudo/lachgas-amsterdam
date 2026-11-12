# ARCHITECTURE

## Stack
Next.js 16.4 (App Router, Turbopack, Cache Components) · React 19 · TypeScript · Tailwind CSS 4 · Lucide icons · next/font (Geist, self-hosted). Geen database. Eén externe dienst: de Claude API van Anthropic, alleen server-side aangeroepen door de chatassistent.

## Mappen
```
src/
  app/
    (nl)/                 root layout NL (<html lang="nl-NL">), homepage, [...slug], kennisbank, bronnen, not-found
    (en)/en/              root layout EN (<html lang="en">), homepage, [...slug], sources, not-found
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
public/canal-scene.svg    heroscène, statische laag (gegenereerd door scripts/build-scene.mts)
public/canal-lights.svg   heroscène, geanimeerde lichtlaag
scripts/content-audit.mts redactionele controle (CI-geschikt)
scripts/build-scene.mts   schrijft de heroscène-SVG’s; draait vóór dev en build
```

## Rendering
Alle pagina’s worden bij de build statisch gegenereerd (`generateStaticParams`). Enige client-JavaScript: header/menu, scroll-reveal, de verbodsteller, de leeftijdscheck en de chatassistent.

**Leeftijdscheck op de homepages (`/`, `/en/`).** Iedere homepage bestaat in twee volledig statische varianten: met de bestaande `AgeGate` (voor bezoekers) en zonder (`/zonder-leeftijdscheck/`, `/en/without-age-check/`, zelfde component en metadata). Een `beforeFiles`-rewrite in `next.config.ts` met een `user-agent`-voorwaarde (`src/lib/bots.ts`) stuurt herkenbare crawlers en andere geautomatiseerde clients naar de variant zonder popup; de URL blijft gelijk. Die beslissing valt in de routering, vóór de CDN-cache: beide varianten worden gecachet en er draait geen serverfunctie voor. Direct opgevraagd verwijzen de varianten door naar de homepage. User-Agent-detectie is niet waterdicht en is geen toegangscontrole; de popupcode zit in de openbare JavaScript-chunk van de homepage, die ook de variant laadt.

## Chatassistent
`src/components/chat/ChatWidget.tsx` (knop en venster, NL/EN) post het gesprek naar `src/app/api/chat/route.ts`. Die route stuurt het met alle **gepubliceerde** pagina’s als context (`src/lib/chat/knowledge.ts`) naar de Claude API en streamt het antwoord terug als platte tekst.

- Geen opslag: het gesprek staat alleen in de React-state; geen cookies, geen browseropslag, geen database. De route logt nooit berichtinhoud.
- Grenzen in de systeemprompt: alleen antwoorden uit de site-inhoud; vragen over kopen, bestellen, dosering of gebruik krijgen alleen een korte verwijzing naar het verbod; acute klachten → 112.
- Misbruik: alleen same-origin verzoeken, max. 12 berichten en 800 tekens per vraag, eenvoudige rate limit per IP (per serverinstantie). Het echte kostenplafond is de bestedingslimiet in de Anthropic Console.
- Kosten: het systeemprompt (instructies + content) is per taal gelijk en wordt met prompt caching hergebruikt.
- Nieuwe of gewijzigde pagina’s komen automatisch in de kennis van de assistent zodra ze `published` zijn.

## Taalstructuur
Twee root layouts zodat `lang` per taal klopt. Vertalingen koppelen via `translationOf` (wederkerig, gecontroleerd door de audit). De taalknop gebruikt dezelfde koppeling; zonder vertaling gaat hij naar de homepage van de andere taal.

## Redactioneel systeem
Content-as-code: iedere pagina is een getypeerd object met status, publicatiedatum, controledatum, volgende controle, bronnen, gerelateerde pagina’s en onzekerheden. Wijzigingen lopen via Git (review, historie, terugdraaien). `npm run content:audit` controleert gebroken links en ankers, onbekende bronnen, niet-wederkerige vertalingen, verlopen controles, en gepubliceerde pagina’s met onvolledig gecontroleerde bronnen of open onzekerheden.

Statussen: `draft → fact-check → legal-review / medical-review → approved → published` (+ `needs-update`). Alleen `published` is indexeerbaar.

**Later (optioneel):** een headless CMS met rollen en inlog kan hetzelfde contentmodel vullen. Nu niet gebouwd: er is één redactie, en een inlogomgeving voegt aanvalsoppervlak toe zonder directe meerwaarde.

## Beveiliging
Strikte CSP, HSTS, X-Frame-Options DENY, nosniff, Referrer- en Permissions-Policy (`next.config.ts`). Geen formulieren, geen cookies, geen secrets in de code.

## Configuratie
Canoniek domein: `https://www.lachgasinfo.nl` (primair domein in Vercel) (standaard in `src/lib/site.ts`). `NEXT_PUBLIC_SITE_URL` overschrijft dit, bijvoorbeeld voor previews. Hosting: Vercel — zie DEPLOY.md.
