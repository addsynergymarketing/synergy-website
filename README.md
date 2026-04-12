# Synergy Marketing — Website

Bilingual (DE/EN) marketing website for Synergy Marketing. Built with Next.js 14 (App Router), TypeScript and Tailwind CSS.

## Stack
- Next.js 14 App Router
- TypeScript (strict)
- Tailwind CSS
- Custom design system (Power Grotesk + Nunito)
- `next/image` for optimised images
- JSON-LD for Organization + FAQPage
- Formsubmit for the contact form (no backend needed)

## Languages
- DE (Swiss High German) — `/de`
- EN (International business English) — `/en`
- Root `/` redirects to `/de`

## Routes
```
/de                     Home (DE)
/de/impressum           Impressum
/de/agb                 AGB
/de/datenschutz         Datenschutz
/en                     Home (EN)
/en/imprint             Imprint
/en/terms               Terms
/en/privacy             Privacy
/sitemap.xml
/robots.txt
```

## Content
All bilingual site copy lives in a single file: `content/site.ts`. Components import `content[locale]`.
No i18n library, no middleware — simple, maintainable, fast.

## Development
```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm start
```

## Deployment
This repo is Netlify-ready (`netlify.toml` with `@netlify/plugin-nextjs`).
Push to GitHub, connect the repo in Netlify → builds automatically.

## Contact
hello@synergymarketing.ch · +41 76 393 68 92
