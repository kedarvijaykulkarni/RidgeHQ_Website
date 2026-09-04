# 03 — Website Information Architecture

## Navigation objective

Keep the first-level navigation concise while giving all 12 verticals a crawlable, useful destination.

Recommended desktop navigation:

- Platform
- Solutions
- AI Copilot
- Integrations
- Pricing
- Resources
- Company
- **Book a Demo**

Mobile must expose the same destinations without hover dependence.

## Required routes

### Core

- `/` — Home
- `/platform` — platform overview
- `/features` — capability index
- `/ai-copilot` — AI Copilot
- `/integrations` — verified integrations and roadmap state
- `/pricing` — pricing philosophy / pilot state, not unvalidated final self-service pricing
- `/design-partners` — design partner / early access
- `/contact` — contact
- `/book-demo` — demo request
- `/thank-you` — non-PII post-Zoho submission landing route

### Solutions

- `/solutions`
- `/solutions/dive-centers`
- `/solutions/surf-schools`
- `/solutions/kitesurf-schools`
- `/solutions/sailing-schools`
- `/solutions/windsurf-schools`
- `/solutions/outdoor-whitewater`
- `/solutions/ski-schools`
- `/solutions/dive-resorts`
- `/solutions/surf-camps`
- `/solutions/kayak-rental-tours`
- `/solutions/bike-rental-tours`
- `/solutions/boat-rental-courses`

### Capability depth

Where enough verified product depth exists:

- `/platform/scheduling`
- `/platform/bookings-pos`
- `/platform/customers-participants`
- `/platform/staff`
- `/platform/gear-rentals`
- `/platform/fleet-trips`
- `/platform/accommodation`
- `/platform/payments`
- `/platform/partners`
- `/platform/weather-conditions`
- `/platform/reports-audit`

If route count is too large for the first release, keep high-quality anchored platform sections and add deep routes later. The 12 vertical pages remain required because they represent the master-brand architecture and long-tail discovery layer.

### Trust / company

- `/about`
- `/security` or `/trust`
- `/privacy`
- `/terms`

### Resources

- `/resources` and/or `/blog` if a content system exists
- `/docs` only for customer-facing docs; never expose the internal Brain vault

## Conversion architecture — one Zoho form

Do **not** create independent Contact, Design Partner, and Demo backends.

Use the same `ZohoLeadForm` component and the same Zoho Forms form on:

| Page | Default form intent |
|---|---|
| `/contact` | `Contact / question` |
| `/design-partners` | `Design partner / early access` |
| `/book-demo` | `Book a demo` |
| `/pricing` CTA | `Pricing / pilot interest` |
| solution-page CTA | `Book a demo` plus vertical context |

The first visible form field should be an editable **“How can we help?”** choice, prefilled from page context using Zoho field-alias parameters. Field Rules inside Zoho Forms then show only the questions relevant to that intent.

Do not pass names, emails, phone numbers, messages, or other PII in URL parameters.

## Homepage structure

1. Header
2. Hero
3. Truthful credibility/product-proof strip
4. Problem: fragmented operational stack
5. Platform model: booking → session → people → resources → payment → reporting
6. Capability pillars
7. AI Copilot
8. 12-vertical explorer
9. Real product screenshots
10. How it works
11. Why RidgeHQ / generic comparison
12. Verified integrations
13. Pilot/pricing philosophy
14. FAQ
15. Final conversion CTA
16. Footer

## Homepage conversion message

The homepage should make four things clear quickly:

1. who RidgeHQ is for;
2. that it goes beyond booking into operations;
3. that AI is embedded in the operational model rather than decorative;
4. that the next step is a demo/design-partner conversation, not anonymous self-service signup.

## Product proof

Use real screenshots from:

`Brain/RidgeHQAPP/wiki/development-reference/Docs/marketing/screenshots/`

Prefer crops and frames that focus on functionality and avoid prominent stale AquaRosters branding.

Do not fabricate product KPIs, customer names, dashboards, or testimonials.

## Pricing section/page

Default `pilot` state:

- headline around predictable subscription pricing;
- supporting 0% RidgeHQ platform commission on direct bookings if still current;
- explain that Founding Operator / early access is currently conversation-led;
- CTA to demo/pilot form;
- no “Buy now” or self-service checkout;
- no public hard-coded €49/€89/€149 ladder until explicitly approved after validation.

The code may retain a reusable tier model behind a configuration flag so validated packaging can be published later without a redesign.

## Vertical page template

Every vertical page must be meaningfully specific:

1. vertical-specific hero;
2. operational pain;
3. a representative day/flow;
4. relevant capabilities;
5. resource/capacity constraints;
6. conditions/qualifications where relevant;
7. real product proof;
8. FAQ;
9. one Zoho-powered CTA with vertical context.

Never imply that an unvalidated vertical already has customers.
