/**
 * Canonical origin for the marketing site.
 *
 * Override per environment (preview deploys, staging) with
 * NEXT_PUBLIC_SITE_URL. Falls back to the production origin.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ridgehq.app'
).replace(/\/$/, '');
