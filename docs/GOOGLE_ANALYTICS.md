# Google Analytics Setup

RidgeHQ supports Google Analytics 4 through the environment variable:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Local setup

Add to `.env.local`:

```env
NEXT_PUBLIC_GA_ID=your_ga_measurement_id
```

Do not commit real values.

## Production setup

Set the same variable in the hosting provider dashboard.

## Development and localhost behavior

Google Analytics is intentionally disabled during local development.

GA will not load or send page views/events when:

- `NODE_ENV !== "production"`
- The hostname is `localhost`
- The hostname is `127.0.0.1`
- The hostname ends with `.local`

This prevents test visits, local QA, and developer navigation from polluting production analytics. It also covers the case of running a production build locally — the inline init script re-checks the hostname at runtime, not just at build time, so a production build served from `localhost` still won't send data.

## How it's wired

- `src/lib/analytics/google-analytics.ts` — `GA_MEASUREMENT_ID`, `isLocalhost()`, `isGoogleAnalyticsEnabled()`, `pageview()`, `event()`. Every exported function is a safe no-op when GA is disabled; none of them throw.
- `src/types/gtag.d.ts` — ambient `window.dataLayer` / `window.gtag` type declarations.
- `src/components/analytics/GoogleAnalytics.tsx` — loads `gtag.js` and bootstraps `dataLayer`/`gtag` via `next/script` (`afterInteractive`). Renders nothing if the measurement ID is missing or `NODE_ENV !== "production"`.
- `src/components/analytics/GoogleAnalyticsPageView.tsx` — fires a `pageview()` on every App Router client-side navigation (`usePathname`/`useSearchParams`). Wrapped in `<Suspense>` in `src/app/layout.tsx` since `useSearchParams` requires it.
- `src/components/analytics/CTAEventTracker.tsx` — a single document-level click listener that fires `event()` for any element carrying a `data-ga-event="..."` attribute. This keeps the CTA buttons themselves as plain server components — no page has to become a client component to get click tracking.

## Adding event tracking to a CTA

Add a `data-ga-event="..."` attribute to any link or button (or an ancestor of the clicked element). The document-level listener in `CTAEventTracker` picks it up:

```tsx
<Link href="/book-demo" data-ga-event="book_demo_click">Book a Demo</Link>
```

`src/components/marketing/CTASection.tsx` already tags its primary/secondary buttons (`cta_primary_click`, `cta_secondary_click`).

## Notes

- The GA script loads only when `NEXT_PUBLIC_GA_ID` is present and only in production.
- Page views are tracked for App Router client-side navigation.
- Do not hard-code the GA ID in source files.
