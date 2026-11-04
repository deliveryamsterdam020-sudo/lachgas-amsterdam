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
3. Environment variables: zie **Chatassistent** hieronder. `NEXT_PUBLIC_SITE_URL` is alleen nodig voor een preview-domein (`https://www.lachgasinfo.nl` is de standaard).
4. Deploy.

## Chatassistent
De chatassistent heeft een API-sleutel van Anthropic nodig. Zonder sleutel blijft de site gewoon werken; de chat meldt dan dat de assistent niet beschikbaar is.

1. Maak een account op console.anthropic.com en voeg een betaalmethode toe.
2. Zet onder **Settings → Limits** een maandelijkse bestedingslimiet (bijvoorbeeld € 20). Dit is het echte kostenplafond.
3. Maak onder **API Keys** een sleutel aan.
4. Vercel → Project → **Settings → Environment Variables**: voeg `ANTHROPIC_API_KEY` toe (Production en Preview) en plak de sleutel. Zet de sleutel nooit in de code of in Git.
5. Optioneel: `CHAT_MODEL` om een ander Claude-model te kiezen (standaard `claude-haiku-5-5`).
6. Redeploy, zodat de variabele actief wordt.

## 3. Domeinen
In Vercel → Project → **Settings → Domains**:
- `www.lachgasinfo.nl` — primair domein
- `lachgasinfo.nl`, `lachgasinfo.com`, `www.lachgasinfo.com` — toevoegen en laten doorverwijzen naar `www.lachgasinfo.nl`

Let op: de code stuurt dezelfde domeinen door naar www. Maak in Vercel dus nooit `lachgasinfo.nl` (zonder www) primair, anders ontstaat een redirect-lus.

Zet bij je domeinregistrar de DNS-records die Vercel toont (A-record voor het apex-domein, CNAME voor www). HTTPS regelt Vercel automatisch. Als extra vangnet stuurt de site zelf ook door (`next.config.ts`).

## 4. Na livegang
- Google Search Console: domein verifiëren en `https://www.lachgasinfo.nl/sitemap.xml` indienen.
- PageSpeed Insights draaien op `/` en `/lachgas-verbod/`.
- Controleren op een echte iPhone/Mac (Safari) en Android-telefoon.

## Back-ups
De volledige site staat in Git (GitHub); Vercel bewaart iedere deployment en kan met één klik terugrollen. Er is geen database, dus er is verder niets om te back-uppen.
