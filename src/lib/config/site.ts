/**
 * Canonical origin for the marketing site.
 *
 * Override per environment (preview deploys, staging) with
 * NEXT_PUBLIC_SITE_URL. Falls back to the production origin.
 *
 * This MUST match the host Vercel actually serves on. Production redirects
 * the apex `ridgehq.app` (308) to `www.ridgehq.app`, so every canonical,
 * sitemap `<loc>`, and robots `Sitemap:` line has to use the `www` host —
 * otherwise Google sees redirecting/duplicate URLs and indexes nothing,
 * which is why Search Console had no data to report.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ridgehq.app'
).replace(/\/$/, '');
