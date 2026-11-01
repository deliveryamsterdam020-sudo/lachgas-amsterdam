# DESIGN_SYSTEM

## Richting
Apple-achtige rust en precisie, editorial magazine-typografie, Amsterdam als beeldtaal: grachtenpanden, lichtjesbruggen, waterreflecties en de grachtengordel. Alles getekend in code: geen stockfoto’s en geen beelden die gebruik aantrekkelijk maken.

## Kleur (tokens in `globals.css`)
| Token | Hex | Gebruik |
|---|---|---|
| canvas | #F8F9FB | paginabasis |
| paper | #FFFFFF | kaarten |
| ink | #101C32 | tekst, donkere vlakken |
| navy | #172C49 | secties |
| navy-700 | #1F3A5E | links, accenten |
| mist | #EAF2FB | lichte vlakken, icoontegels |
| slate | #737D8C | alleen grote tekst en decoratie (4,2:1) |
| muted | #5A6474 | kleine secundaire tekst (6,0:1) |
| graphite | #242B35 | lopende tekst |
| lamp | #E8B96F | grachtenlicht, alleen op donker |
| help / alert | #0F5F4A / #9A3412 | hulp- en waarschuwingsblokken |

## Typografie
Geist (sans) en Geist Mono (labels). Display-koppen gewicht 650, letterspacing −0,035em, regelhoogte 0,95. Lopende tekst 17 px / 1,75. Eyebrow: mono, 12 px, hoofdletters, spatiëring 0,16em.

## Beeldelementen
- **Gevelgenerator** (`gables.ts`): deterministisch, vijf geveltypes, hijsbalken, ramen.
- **Grachtscène** (`/canal-scene.svg`): hero met trage camerabeweging, flikkerende ramen, lichtreflecties en rimpelend water.
- **Skyline-band**: overgang van donkere headers naar de pagina, en de footer.
- **Grachtengordel**: abstracte kaart met Singel, Heren-, Keizers- en Prinsengracht.

## Componenten
Kort-antwoordkaart · feitentabel · stappen · callouts (info, waarschuwing, hulp) · FAQ · bronnenlijst met controlelabel · hubkaarten met elk een eigen compositie · navigatie met dropdownpanelen en icoontegels · iOS-achtig mobiel menu.

## Beweging
Ease `cubic-bezier(.22,1,.36,1)`. Entree via `rise`, scroll-reveal via IntersectionObserver, dropdown-cascade van 35 ms per item. Alles staat uit bij `prefers-reduced-motion`; inhoud blijft zichtbaar zonder JavaScript.

- **Scrollen met gevoel:** Lenis (`lerp 0.085`) geeft muiswiel en trackpad traagheid. Alleen bij een fijne aanwijzer met hover; touchtoestellen houden hun eigen momentum. Ankers (skiplink, inhoudsopgave) blijven native, zodat de focus meegaat. Het mobiele menu scrolt zelfstandig.
- **Diepte in de hero:** CSS-scrolltijdlijnen, dus geen JavaScript per frame. Op de homepage beweegt de grachtscène trager mee (`hero-depth`) en tilt de kop weg met een fade (`hero-lift`). Op artikelpagina's drijven de grachtringen mee (`hero-trail`). Browsers zonder scrolltijdlijn tonen een statische hero.
- **Reveal:** 32 px en `scale(.985)` naar rust, ease `cubic-bezier(.16,1,.3,1)` (`--ease-out-expo`), 1,0–1,2 s.
- `<html data-scroll-behavior="smooth">`: Next.js zet vloeiend scrollen uit tijdens paginawissels, zodat een nieuwe pagina direct bovenaan begint.
