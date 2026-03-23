# Formation HACCP France — Site SEO

## Stack
- Next.js 14 App Router (SSG)
- Tailwind CSS
- TypeScript
- Netlify deploy

## Structure
- `data/villes.ts` → 130+ villes françaises
- `lib/seo.ts` → helpers Schema.org JSON-LD
- `app/formation-haccp-[slug]/` → pages villes dynamiques
- `app/formation-haccp-[secteur]/` → 11 pages secteurs
- `app/sitemap.ts` → sitemap auto-généré

## Deploy sur Netlify
1. `git init && git add . && git commit -m "init"`
2. Créer un repo GitHub
3. Connecter à Netlify
4. Build command: `npm run build`
5. Publish dir: `.next`
6. Installer le plugin Netlify Next.js

## Avant le lancement
1. Remplacer `SITE_URL` dans `lib/seo.ts` par votre vrai domaine
2. Ajouter le code de vérification Google Search Console dans `app/layout.tsx`
3. Configurer Resend pour la capture des leads
4. Remplacer `Inter` font si besoin (ou décommenter avec accès internet)

## Pages disponibles
- `/` — Accueil
- `/formation-hygiene-alimentaire` — Page pilier principale
- `/permis-exploitation` — Permis exploitation
- `/iso-22000` — ISO 22000
- `/plan-maitrise-sanitaire` — PMS
- `/formation-haccp-[ville]` — 130+ pages villes
- `/formation-haccp-[secteur]` — 11 secteurs
- `/formation-haccp-cpf` — Financement CPF
- `/villes` — Liste toutes les villes
- `/blog` — Blog
- `/devis` — Formulaire lead
- `/sitemap.xml` — Sitemap auto
