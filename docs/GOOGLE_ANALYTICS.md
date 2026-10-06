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
- `src/components/analytics/GoogleAnalyticsPageView.tsx` — sends a `page_view` event (`page_path`, `page_location`, `page_title`) on every App Router client-side navigation, including browser back/forward (`usePathname`/`useSearchParams`). It skips its first run, because the init script's `gtag('config', …)` already sends the landing page view; without the skip, every visit counted its landing page twice. Wrapped in `<Suspense>` in `src/app/layout.tsx` since `useSearchParams` requires it.
- `src/components/analytics/ClickTracker.tsx` — a single document-level click listener (capture phase) that sends a `ui_click` event for **every** link, button and tab on the site. Params are built by the unit-tested `src/lib/analytics/click-tracking.ts`.
- `src/components/analytics/CTAEventTracker.tsx` — a single document-level click listener that fires `event()` for any element carrying a `data-ga-event="..."` attribute. This keeps the CTA buttons themselves as plain server components — no page has to become a client component to get click tracking.

## Adding event tracking to a CTA

Add a `data-ga-event="..."` attribute to any link or button (or an ancestor of the clicked element). The document-level listener in `CTAEventTracker` picks it up:

```tsx
<Link href="/book-demo" data-ga-event="book_demo_click">Book a Demo</Link>
```

`src/components/marketing/CTASection.tsx` already tags its primary/secondary buttons (`cta_primary_click`, `cta_secondary_click`).

## Click tracking (`ui_click`)

Every click on a link, button or `role="tab"` sends:

| Param | Value |
|---|---|
| `link_text` | Visible label: a card link's heading, a menu link's title (first line, not its description), or `aria-label` for icon buttons. Max 100 chars. |
| `link_url` | Absolute URL (links only) |
| `outbound` | `true` when the link leaves the site over http(s) (links only) |
| `ui_element` | `link` / `button` / `tab` |
| `ui_location` | Nearest `data-ga-location`: `main_nav`, `mega_menu`, `mobile_nav`, `breadcrumb`. Otherwise `header`, `footer` or `content`. |

To tag a new region, add `data-ga-location="..."` to its container; the nearest one wins. `data-ga-event` (above) still fires its own named event in addition to `ui_click`.

## Required GA4 admin settings for page views and clicks

In **Admin → Data streams → (web stream) → Enhanced measurement**:

- **Page views → Show advanced settings → "Page changes based on browser history events": OFF.** The site sends a `page_view` for each client-side navigation itself. Leaving this on counts every in-site navigation twice. Keep "Page views" itself on.
- **Outbound clicks: optional.** `ui_click` already carries `outbound: true`. If you keep enhanced measurement's own outbound `click` event on, outbound links are recorded under both event names (not double-counted within one event).

To report on the click params, register under **Admin → Custom definitions → Custom dimensions** (event scope): `ui_location`, `ui_element`, `outbound`. `link_text` and `link_url` are built-in dimensions and need nothing.

## Video tracking (YouTube embeds)

`src/components/marketing/YouTubeEmbed.tsx` (the home page's Copilot demo) sends GA4's standard video events itself, via the YouTube IFrame API, which attaches to the lazy-loaded embed when it scrolls into view:

| Event | When | Parameters |
|---|---|---|
| `video_start` | first play | `video_provider`, `video_title`, `video_url`, `video_current_time`, `video_duration`, `visible` |
| `video_progress` | 10%, 25%, 50%, 75% (each once) | the above plus `video_percent` |
| `video_complete` | video ends | the above plus `video_percent: 100` |

Logic lives in `src/lib/analytics/videoTracking.ts` (tested). Required GA4 admin settings, in **Admin → Data streams → (web stream) → Enhanced measurement**:

- **Video engagement: OFF.** The site sends these events itself, with the same names and parameters, so leaving enhanced measurement's video tracking on counts every play twice.
- To report on `video_percent`, `video_current_time`, or `video_duration`, register each under **Admin → Custom definitions → Custom metrics** (event scope; `video_percent` as Standard unit, the two times in seconds). `video_title`, `video_url`, and `video_provider` are built-in dimensions and need nothing.
- Optional: mark `video_complete` as a key event if a finished demo should count as a conversion signal.

## Notes

- The GA script loads only when `NEXT_PUBLIC_GA_ID` is present and only in production.
- Page views are tracked once per landing and once per App Router client-side navigation.
- Every link, button and tab click is tracked as `ui_click`.
- Do not hard-code the GA ID in source files.
