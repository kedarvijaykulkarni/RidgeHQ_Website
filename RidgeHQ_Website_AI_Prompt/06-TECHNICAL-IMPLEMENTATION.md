# 06 — Technical Implementation

## First principle

This is a **production marketing site**, not a one-file Tailwind CDN mock-up and not a rewrite of the SaaS product.

## Repository reconnaissance

Before choosing the location/framework:

- inspect root and app-level `package.json` files;
- inspect repository instructions/CLAUDE files;
- inspect deployment config;
- locate existing marketing/public pages;
- locate authenticated/admin product boundaries;
- inspect current Tailwind/design tokens;
- inspect analytics;
- inspect existing public-form code only to understand what can be removed/reused;
- inspect screenshots/assets;
- identify lint/typecheck/test/build commands.

Use current package versions. Do not perform a major framework upgrade unless required to complete the task.

## Preferred architecture

If compatible with the repo:

- Next.js App Router;
- TypeScript strict;
- Tailwind CSS;
- server/static rendering for marketing content;
- minimal client components;
- Vercel-compatible deployment;
- Cloudflare DNS/domain compatibility.

If a clean dedicated marketing app already exists, keep it rather than rewriting it merely to match this preference.

## Isolation

The marketing app must not depend on authenticated product modules at runtime.

Do not:

- rename API packages;
- rename database tables/migrations;
- move SaaS modules;
- alter auth architecture;
- perform repository-wide branding replacement.

## Suggested project structure

```text
apps/marketing/
  app/
    (marketing)/
      page.tsx
      platform/
      features/
      ai-copilot/
      integrations/
      pricing/
      solutions/
      design-partners/
      contact/
      book-demo/
      thank-you/
      about/
      security/
      privacy/
      terms/
    sitemap.ts
    robots.ts
    layout.tsx
  components/
    marketing/
    forms/
      ZohoLeadForm.tsx
    analytics/
    seo/
    ui/
  content/
    navigation.ts
    platform.ts
    verticals.ts
    faq.ts
    integrations.ts
    pricing.ts
  lib/
    analytics/
    zoho/
      buildZohoFormUrl.ts
      formIntent.ts
    seo/
  public/
    images/
      product/
      brand/
```

Adapt to actual repository conventions.

## Marketing-state configuration

Create one centralized config rather than scattering launch assumptions:

```ts
type MarketingPhase = 'pilot' | 'public'

type PricingMode = 'pilot' | 'public'
```

Default current state:

- `marketingPhase = 'pilot'`
- `pricingMode = 'pilot'`
- no self-service account-creation CTA
- no final public numeric tier ladder

A later founder decision should be able to switch packaging without rewriting every page.

## Zoho Forms integration — website side

Use **one Zoho Forms public form** for all lead-generation contexts.

Recommended public configuration variables:

- `NEXT_PUBLIC_ZOHO_FORM_URL` — exact public form permalink from the founder's Zoho Forms India account
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` if GA exists

The Zoho form URL is public, not a secret. Never add Zoho CRM OAuth tokens/API secrets to the marketing app.

### Default embed mode

Prefer an **advanced iframe/permalink embed** for the first implementation because it is isolated, reliable across React re-renders, supports referrer tracking, and keeps Zoho's hosted validation/spam controls intact.

Only choose Zoho's JavaScript embed if it materially improves layout and is tested against client navigation/unmount/remount behavior.

Do **not** use downloaded HTML/CSS as the default. It creates a separate form implementation and can bypass hosted CAPTCHA behavior.

### Component contract

Create a single reusable component:

```ts
type LeadIntent =
  | 'contact'
  | 'design_partner'
  | 'book_demo'
  | 'pricing_interest'
  | 'partner_interest'

interface ZohoLeadFormProps {
  intent: LeadIntent
  sourcePage: string
  sourceCta?: string
  vertical?: string
  planInterest?: string
}
```

`buildZohoFormUrl()` must:

- use `URL` / `URLSearchParams`;
- encode values;
- map internal intent keys to exact Zoho choice labels;
- append only non-PII context;
- preserve approved UTM/GCLID tracking strategy;
- reject or omit unexpected values;
- never append name/email/phone/message.

Test the URL builder independently.

### Lazy third-party loading

Do not load Zoho scripts globally on every page.

- Load the iframe only where the form is actually visible.
- If form is below the fold, lazy-load when appropriate.
- On dedicated conversion pages, prioritize usable form rendering rather than aggressive lazy loading.

### CSP

If CSP/security headers exist, add only the minimum Zoho Forms origins required by the exact public form URL. Because the founder's account is in the India data center, the public form is expected to use a Zoho public `.in` origin; do not hard-code that assumption if the real permalink differs.

## Zoho submission success

Do not try to read inside a cross-origin iframe.

Preferred flow:

`Zoho Forms submission → Zoho success/redirection → parent window → https://ridgehq.app/thank-you?intent=<non-PII-intent>`

The `/thank-you` page fires the site analytics success event using the safe intent value.

If the founder's Zoho plan does not support the required redirect behavior, document the limitation and use Zoho's own acknowledgment/tracking configuration rather than implementing insecure iframe hacks.

## No duplicate lead backend

For the website lead flow:

- do not insert into Supabase;
- do not add a FastAPI lead endpoint;
- do not add service-role keys;
- do not keep a second lead table “just in case.”

Zoho Forms + Zoho CRM is the lead system of record for this website unless a later requirement explicitly adds another sink.

## Components and content

- one meaningful component per file;
- typed props;
- server components by default;
- typed repeated content/config;
- no monolithic homepage;
- no unsafe user HTML;
- real local screenshots only.

## Performance

- optimize LCP;
- responsive images;
- no autoplay hero video by default;
- minimal third-party script footprint;
- no heavy animation library unless already present and justified;
- below-fold media lazy loaded;
- avoid loading Zoho on pages without a form.

## Build discipline

Before completion run repository-appropriate:

- lint;
- typecheck;
- tests;
- production build.

Record the exact commands and results.
