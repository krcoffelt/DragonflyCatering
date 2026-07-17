# Dragonfly Catering — QA Notes

Updated: 2026-07-16 · Phase 2 inquiry-form pass

## Phase 1 completed

- Standardized the public business name as **Dragonfly Catering & Event Space**.
- Updated the public address to **4325 W. Lincoln Highway, Downingtown, PA 19335**.
- Updated the public phone number to **(484) 947-3296**.
- Removed Buchanan Mansion references from public-facing site content and reviews.
- Moved internal source notes, manifests, and asset guidance out of the public web root to `docs/dragonfly-assets/`.
- Standardized the main conversion CTA as **Request a Custom Proposal**.
- Added **RAMP-certified** language to event-bartending content.
- Preserved the existing upscale purple, gold, and ivory visual system and existing motion treatment.

## Phase 2 completed

- Replaced the email-draft inquiry handoff with a production-ready Netlify Forms integration.
- Registered one shared Netlify form named **`catering-inquiry`**.
- Added qualification fields for contact information, event details, catering preferences, dietary needs, referral source, and contact consent.
- Added a honeypot field, hidden notification subject, URL-encoded submission, duplicate-submit prevention, and an inline success state.
- Added field-level validation for required information, email, phone, guest count, and past event dates.
- Added accessible validation, failure, and success feedback with keyboard focus management.
- Added `public/__forms.html` so Netlify can detect every submitted field in the Next.js build.

## Client details confirmed

- Netlify submission notifications should go to **`dragonflycatering727@gmail.com`**.
- The event space rents for **$100 per hour**.
- The room-rental fee is waived when the Dragonfly event proposal reaches **$2,000 or more**.
- Event-space capacity should be stated as **up to 50 guests**.
- The Downingtown ZIP code is **19335**.
- Sample-menu files and final menu content are deferred to a later phase.
- All listed preferred venues are confirmed as current Dragonfly partners.
- All testimonials currently published on the site are approved.
- The Facebook, Instagram, and LinkedIn profiles in `src/lib/site.ts` are current.
- Photography and photo-rights review, community special-pricing language, gift-card fulfillment, and analytics are deferred.
- A website privacy policy was requested and added at `/privacy`.

## Verification completed

- `npm run lint` passes.
- `npm run build` passes with TypeScript validation and all 27 static outputs generated.
- Desktop layout checked at 1280 × 720 with no horizontal overflow or header collision.
- Mobile layout checked at 390 × 844.
- Mobile menu verified for scroll locking, focus trapping, Escape-to-close, focus restoration, link navigation, and automatic close at the desktop breakpoint.
- Public source audit found no Buchanan references, old phone number, incomplete street address, or superseded primary CTA labels in `src/` or `public/`.
- Homepage verification confirmed the new business name, address, phone number, proposal CTA, and RAMP-certified language.
- Generated contact markup contains `name="catering-inquiry"`, `form-name`, the honeypot field, and all submitted field names.
- Desktop form checked at 1280 × 720 with a two-column layout and no horizontal overflow.
- Mobile form checked at 390 × 844 with a single-column layout and no horizontal overflow.
- Required, email, phone, guest-count, and past-date validation were verified in the browser.
- Submitting, success, and failure states were verified with controlled local responses; failed submissions preserve entered values.
- Browser verification completed with no console warnings or errors.
- Privacy page verified at 1280 × 720 and 390 × 844 with no horizontal overflow; footer and inquiry-form privacy links are present.

## Highest-priority remaining work

1. Enable Netlify Forms for the `dragonflycatering` project, deploy, configure notifications to `dragonflycatering727@gmail.com`, and complete a real production submission test.
2. Add approved downloadable sample-menu PDFs without public pricing when the files are ready.
3. Add or replace photography when the client is ready to resume the deferred photo pass.
4. Add or correct official venue website links when supplied.
5. Revisit community special-pricing language, gift-card fulfillment, and analytics when the client is ready.

## Client confirmations still needed

- Official website links for preferred venues that do not currently have one.

## Next recommendation

Activate and test the form on the production Netlify deployment first. Then add downloadable menus and improve the most conversion-critical photography.
