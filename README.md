# Dragonfly Catering & Event Space — Website

Premium marketing site for Dragonfly Catering LLC, a boutique chef-led
catering, private chef, event bartending, and private event space business
in Downingtown, PA, serving Chester County and the Main Line.

## Stack

- Next.js 16 (App Router, static export-friendly)
- Tailwind CSS 4
- TypeScript
- Framer Motion (subtle reveals, hero entrance, menu/review/FAQ transitions)

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve production build
```

## Where things live

- `src/lib/site.ts` — central config for the public business identity, primary
  CTA, contact information, address, navigation, venues, menu previews, and
  differentiators.
- `src/lib/seo.ts` / `src/lib/schema.ts` — per-page metadata and JSON-LD
  (Caterer, Service, FAQ, Breadcrumb).
- `src/lib/analytics.ts` — GA4/GTM placeholder. Set
  `NEXT_PUBLIC_GA_MEASUREMENT_ID` to activate; CTA/form/email/menu events
  are already wired.
- `src/components/` — reusable UI (Header, Footer, ServiceCard, PageHero,
  ServicePage template, GalleryGrid, ProposalForm, etc.).
- `public/__forms.html` — static Netlify Forms detection markup for the shared
  `catering-inquiry` form. The React form posts URL-encoded data to this path.
- `public/assets/dragonfly/` — public runtime photography and logo assets.
- `docs/dragonfly-assets/` — internal asset manifests, source notes, missing
  asset lists, and archived reference material. These files are deliberately
  kept outside the public web root.

## Netlify Forms

The proposal form is registered as `catering-inquiry` and uses Netlify's
honeypot spam protection. Before accepting production inquiries, enable Forms
for the `dragonflycatering` project, trigger a new production deployment,
confirm the form is detected, and configure submission notifications under
**Project configuration → Notifications** to send inquiries to
`dragonflycatering727@gmail.com`.

## Before launch

See `QA-NOTES.md` for the current punch list: Netlify production activation,
menu PDFs, venue verification, missing photography, photo approvals, and final
launch testing.
