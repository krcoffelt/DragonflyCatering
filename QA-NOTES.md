# Dragonfly Catering — Final QA Notes

Build date: 2026-07-03 · Next.js 16 / Tailwind CSS 4 / TypeScript / Framer Motion

## Pages built (17 routes)

| Route | Status |
| --- | --- |
| `/` | Complete — full 12-section homepage |
| `/services` | Complete — 9-service hub + process section |
| `/custom-catering` | Complete |
| `/wedding-catering-rehearsal-dinners-showers` | Complete |
| `/corporate-catering` | Complete (photo placeholder) |
| `/social-events` | Complete |
| `/private-chef-experiences` | Complete |
| `/event-bartending` | Complete (photo placeholder) |
| `/dragonfly-event-space` | Complete (photo placeholders — no space photos exist) |
| `/preferred-venues` | Complete — all 14 venues marked "Confirming details" |
| `/sample-menus` | Complete — preview sections; PDFs missing from assets |
| `/gallery` | Complete — filterable, 4 real images, honest pending notes |
| `/reviews` | Complete — no invented testimonials; honest holding state |
| `/about` | Complete — Chef Matt bio, Buchanan Mansion removed |
| `/community` | Complete — no unverified pricing promises |
| `/gift-cards` | Complete — supper club omitted (unconfirmed) |
| `/contact` | Complete — full proposal form (mailto integration; see below) |

Plus `sitemap.xml` and `robots.txt`.

## Verified in browser QA

- Production build passes with zero TypeScript/ESLint errors; all routes static.
- Desktop (1280px) and mobile (390px) layouts reviewed page by page.
- Mobile hamburger menu, mobile sticky proposal CTA, gallery category filter,
  and FAQ accordions all tested working.
- Hero crossfade, scroll reveals, and hover states verified.
- No broken images; all imagery comes from `/public/assets/dragonfly/`.
- No stock photography anywhere. Missing categories use branded plum
  "photography coming soon" panels, clearly labeled in code comments.

## Asset manifest usage

- Manifests read: `asset-manifest.json`, `asset-summary.md`,
  `photo-selection-guide.md`, `missing-assets.md`, source notes.
- Logos: header horizontal (nav), stacked (footer, inverted), social preview
  JPG (OpenGraph), favicon source (site icon).
- Photos used per guide: dragon-fruit hero + food (custom catering, home
  hero), chef-plating (private chef, about, home hero slide 2), engagement
  appetizers + private-event duplicate (weddings, social, gallery, home
  mosaic).
- Image categories used: hero, food, private-chef, private-events,
  engagement-party. Empty categories honored as placeholders per the guide.

## Placeholders that must be replaced before launch

1. **Sample menu content** — `menuCategories` in `src/lib/site.ts` is
   placeholder menu copy. Replace with approved menus/PDFs. Wire PDF
   downloads to `events.menuDownload()`.
2. **Venue descriptions** — all 14 preferred venues carry placeholder
   descriptions and a visible "Confirming details" badge. Verify each
   partnership, description, and URL (only Lauxmont Farms and Blue Heron
   have URLs, both unverified).
3. **Photo placeholder panels** — bartending, corporate, event space,
   community, venue cards.
4. **Contact form backend** — currently opens a pre-filled email draft
   (mailto). Swap in Supabase/Formspree/API route for reliable delivery
   (`src/components/ProposalForm.tsx`).
5. **Zip code** — 19335 inferred for Downingtown in `src/lib/site.ts`; verify.

## Client confirmations needed

- **Phone number conflict**: old site lists 484-228-1993; Chef Matt's email
  signature lists 484-947-3296. Phone is `null` in `src/lib/site.ts` and
  hidden sitewide until confirmed. Set `site.phone`/`site.phoneDisplay` to enable.
- Public address display formatting (4325 W. Lincoln Highway used per email).
- Event-space capacity wording ("up to approximately 50 guests" used).
- Supper Club status (omitted from site — add back if active).
- Gift cards remaining active (page built assuming yes; fulfillment is manual/email).
- Preferred venue list approval (all marked unverified).
- Approved testimonials (reviews page intentionally has none; add Review
  schema when real reviews arrive).
- Menu PDFs / approved menu copy.
- "Award-winning" — NOT used anywhere (unverified).
- RAMP-certified bartending language (used per client email; confirm final wording).
- Nonprofit/first responder/healthcare special pricing language (deliberately
  omitted; community page uses "generous where we can be" only).
- Photo rights for engagement-party images (`needs_owner_approval: true` in
  manifest — used on weddings/social/gallery/home pages pending approval).
- Social profile URLs for footer/schema.

## Old-site cleanup verified

- No Buchanan Mansion references anywhere.
- No Thorndale address anywhere.
- No "historic mansion" positioning.
- No generic "Book Now" CTAs — all CTAs are proposal/experience-specific.
- No award claims, no invented testimonials, no Eventbrite links.
- Preserved and modernized: "Food is Love", "Let us feed your moment",
  "Seasonal. Local. Special.", chef-led positioning, 2020 origin story with
  Rhiannon, Johnson & Wales / Capital Grille / True Food Kitchen background,
  all service styles (plated, buffet, family-style, tapas, a la carte,
  pairings, mocktails, responsible service).

## Technical SEO shipped

- Unique title + meta description on all 17 pages (matching the recommended
  titles), canonical URLs, OpenGraph + Twitter cards using the logo social
  preview image.
- JSON-LD: FoodEstablishment/Caterer (sitewide), Service (6 service pages +
  event space), BreadcrumbList (all pages), FAQPage (service + event-space
  pages). Review schema deliberately withheld until verified reviews exist.
- `sitemap.xml`, `robots.txt`, semantic H1→H2→H3 hierarchy, descriptive alt
  text from the manifest, `next/image` with priority hero loading and
  responsive `sizes` (no layout shift).
- Local keywords woven through headings, body copy, and metadata:
  Downingtown PA, Chester County, Main Line, private chef, event bartending,
  small event space, wedding/rehearsal/shower catering.

## Analytics placeholders

- `src/lib/analytics.ts`: GA4 loads when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is
  set; events also push to `window.dataLayer` for GTM.
- Tracked events wired: `cta_click` (with label + location), `form_submit`,
  `email_click`, `phone_click` (activates with phone), `menu_download`
  (ready for PDF buttons).

## Accessibility

- Labeled form fields with required indicators, focus-visible outlines,
  aria-expanded on menu/FAQ toggles, aria-labels on icon buttons, skip-safe
  contrast (ivory/plum, gold on plum), `prefers-reduced-motion` respected by
  all animations, semantic landmarks (header/nav/main/footer/address).
