# DEPLOY — live zetten op Vercel

De site is klaar voor Vercel. Inloggen en domeinen koppelen doe je zelf; dat kan en mag niet namens jou.

## 1. Code naar GitHub
```bash
git remote add origin https://github.com/<jouw-account>/lachgas-amsterdam.git
git push -u origin main
```

## 2. Project in Vercel
1. Ga naar vercel.com → **Add New… → Project** → importeer de GitHub-repository.
2. Framework: Next.js wordt automatisch herkend. Build command `npm run build` (draait eerst `npm run scene`).
3. Environment variable is niet nodig: `https://lachgasinfo.nl` is de standaard. Alleen voor een preview-domein zet je `NEXT_PUBLIC_SITE_URL`.
4. Deploy.

## 3. Domeinen
In Vercel → Project → **Settings → Domains**:
- `lachgasinfo.nl` — primair domein
- `www.lachgasinfo.nl`, `lachgasinfo.com`, `www.lachgasinfo.com` — toevoegen en laten doorverwijzen naar `lachgasinfo.nl` (308)

Zet bij je domeinregistrar de DNS-records die Vercel toont (A-record voor het apex-domein, CNAME voor www). HTTPS regelt Vercel automatisch. Als extra vangnet stuurt de site zelf ook door (`next.config.ts`).

## 4. Na livegang
- Google Search Console: domein verifiëren en `https://lachgasinfo.nl/sitemap.xml` indienen.
- PageSpeed Insights draaien op `/` en `/lachgas-verbod/`.
- Controleren op een echte iPhone/Mac (Safari) en Android-telefoon.

## Back-ups
De volledige site staat in Git (GitHub); Vercel bewaart iedere deployment en kan met één klik terugrollen. Er is geen database, dus er is verder niets om te back-uppen.
