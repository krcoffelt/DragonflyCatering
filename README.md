# Dragonfly Catering & Event Space — Website

Premium marketing site for Dragonfly Catering LLC, a boutique chef-led
catering, private chef, event bartending, and private event space business
in Downingtown, PA, serving Chester County and the Main Line.

## Stack

- Next.js 16 (App Router, static export-friendly)
- Tailwind CSS 4
- TypeScript
- Framer Motion (subtle reveals, hero crossfade, menu/FAQ transitions)

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve production build
```

## Where things live

- `src/lib/site.ts` — central config: contact info, nav, venues, menu
  previews, differentiators. **The public phone number is intentionally
  `null`** until the correct number is confirmed (old site: 484-228-1993 vs
  email signature: 484-947-3296). Set `site.phone` + `site.phoneDisplay` to
  enable phone display sitewide.
- `src/lib/seo.ts` / `src/lib/schema.ts` — per-page metadata and JSON-LD
  (Caterer, Service, FAQ, Breadcrumb).
- `src/lib/analytics.ts` — GA4/GTM placeholder. Set
  `NEXT_PUBLIC_GA_MEASUREMENT_ID` to activate; CTA/form/email/menu events
  are already wired.
- `src/components/` — reusable UI (Header, Footer, ServiceCard, PageHero,
  ServicePage template, GalleryGrid, ProposalForm, etc.).
- `public/assets/dragonfly/` — Codex-prepared brand asset library and
  manifests (source of truth for imagery).

## Before launch

See `QA-NOTES.md` for the full punch list: form backend integration,
menu PDFs, venue verifications, photo approvals, and the phone-number
confirmation.
