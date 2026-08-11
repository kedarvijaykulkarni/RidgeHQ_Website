# 10 — Implementation Acceptance Criteria

The RidgeHQ marketing website is complete only when the applicable criteria below are satisfied.

## A. Architecture

- [ ] Repository inspected before editing.
- [ ] Marketing site location documented.
- [ ] Authenticated SaaS app remains isolated.
- [ ] No repository-wide AquaRosters → RidgeHQ replacement.
- [ ] Current dependency versions retained unless change is justified.
- [ ] Typed reusable content/config created.
- [ ] Current marketing phase/pricing mode centralized.

## B. Brand and launch truth

- [ ] Public brand is RidgeHQ.
- [ ] Domain metadata uses ridgehq.app.
- [ ] No accidental stale AquaRosters public branding.
- [ ] Homepage is not dive-only or mountain-only.
- [ ] 12 verticals represented without claiming equal adoption.
- [ ] Controlled-pilot phase is respected.
- [ ] No self-service “Start Free” path unless later approved.
- [ ] No trademark/registration claim without proof.

## C. Pages

- [ ] Home
- [ ] Platform
- [ ] Features
- [ ] AI Copilot
- [ ] Integrations
- [ ] Pricing / pilot state
- [ ] Solutions index
- [ ] 12 unique vertical pages
- [ ] Design Partners
- [ ] Contact
- [ ] Book Demo
- [ ] Thank You
- [ ] About
- [ ] Security/Trust
- [ ] Privacy
- [ ] Terms
- [ ] 404
- [ ] Resources/Blog shell if appropriate

## D. Content integrity

- [ ] Latest 2026-08-11 Brain business/launch files read.
- [ ] Present-tense claims verified against owning implementation docs.
- [ ] No stale €29/€59/€99 pricing.
- [ ] No unvalidated €49/€89/€149 ladder presented as final public pricing.
- [ ] No fake testimonials/logos/metrics/certifications.
- [ ] No unsupported integration claims.
- [ ] AI wording reflects partial undo, not universal reversibility.
- [ ] Waiver wording verified before use.

## E. Design

- [ ] Responsive 320px+.
- [ ] Polished desktop.
- [ ] RidgeHQ operational-terrain visual system.
- [ ] Product screenshots used honestly.
- [ ] No water-only or mountain-only lock-in.
- [ ] Consistent icons.
- [ ] Reduced-motion support.

## F. One Zoho form

- [ ] Contact uses the shared Zoho form.
- [ ] Design Partner uses the shared Zoho form.
- [ ] Book Demo uses the shared Zoho form.
- [ ] Pricing/solution CTA context can reuse the same form.
- [ ] One reusable `ZohoLeadForm` component exists.
- [ ] Public form URL is configured externally; no invented form ID.
- [ ] Intent mapping is typed and tested.
- [ ] Source page/CTA/vertical context is non-PII.
- [ ] No name/email/phone/message appears in query parameters.
- [ ] No CRM token/secret exists client-side.
- [ ] No redundant Supabase lead-write path remains unless explicitly retained by decision.
- [ ] Embedded form has direct-link fallback.
- [ ] Zoho spam protection configured/documented.
- [ ] Zoho → CRM integration setup documented.
- [ ] CRM upsert/assignment/workflow/tag behavior documented where enabled.

## G. Thank-you/conversion tracking

- [ ] `/thank-you` exists.
- [ ] It only accepts safe known intent values.
- [ ] Zoho successful submission redirects parent window there where plan/config allows.
- [ ] No PII passed in redirect.
- [ ] Conversion event fires without PII.
- [ ] Fallback documented if Zoho plan does not support redirect.

## H. Accessibility

- [ ] Skip link.
- [ ] Semantic landmarks.
- [ ] One logical H1.
- [ ] Heading hierarchy.
- [ ] Keyboard navigation.
- [ ] Visible focus.
- [ ] Accessible mobile nav.
- [ ] Accessible FAQ.
- [ ] 44px touch targets.
- [ ] Contrast verified.
- [ ] Meaningful alt text.
- [ ] Embedded Zoho form manually checked for keyboard usability.

## I. SEO and analytics

- [ ] Unique titles/descriptions.
- [ ] Canonicals.
- [ ] Open Graph/social metadata.
- [ ] Sitemap.
- [ ] Robots.
- [ ] Accurate structured data.
- [ ] No fake review schema.
- [ ] Unique 12-vertical SEO content.
- [ ] Internal links.
- [ ] Old public-site redirect plan if applicable.
- [ ] GA/event helper is PII-safe.
- [ ] UTM/source context strategy documented.

## J. Performance/security

- [ ] Optimized images.
- [ ] Minimal client JS.
- [ ] Zoho is not loaded site-wide unnecessarily.
- [ ] CSP allows only required Zoho origins if CSP exists.
- [ ] No secrets in client bundles.
- [ ] No obvious layout shift.

## K. Build quality

Run and record:

- [ ] lint
- [ ] typecheck
- [ ] tests
- [ ] production build

Fix errors introduced by the work.

## L. Manual QA

Check:

- [ ] 360px
- [ ] 768px
- [ ] 1024px
- [ ] 1440px
- [ ] keyboard-only navigation
- [ ] form embed on Contact
- [ ] form embed on Design Partners
- [ ] form embed on Book Demo
- [ ] Zoho direct-form fallback
- [ ] success redirect/thank-you when external Zoho config is available
- [ ] all 12 vertical routes
- [ ] broken links
- [ ] no stale public branding

## Final report

Report:

1. architecture/location chosen;
2. routes built;
3. screenshots/assets used;
4. Zoho embed implementation;
5. Zoho admin steps still required;
6. CRM field-map/automation assumptions;
7. analytics/SEO work;
8. tests/build results;
9. claims intentionally softened due insufficient evidence;
10. deployment secrets/config still required;
11. concise files-changed list.

Do not call the website production-ready while the real Zoho form permalink/CRM mapping is still missing; call the code integration complete and list the external configuration gate accurately.
