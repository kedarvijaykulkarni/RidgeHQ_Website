import { Metadata } from 'next';
import { siteUrl } from '@/lib/config/site';

export const defaultSeo: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | RidgeHQ',
    default: 'RidgeHQ | The Activity Business OS',
  },
  description: 'Run your entire activity business from one HQ. Connect bookings, schedules, staff, customers, gear, rentals, trips, and payments in one live system.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'RidgeHQ | The Activity Business OS',
    description: 'Run your entire activity business from one HQ. Connect bookings, schedules, staff, customers, gear, rentals, trips, and payments in one live system.',
    url: '/',
    siteName: 'RidgeHQ',
    images: [
      {
        url: '/images/brand/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RidgeHQ | The Activity Business OS',
    description: 'Run your entire activity business from one HQ. Connect bookings, schedules, staff, customers, gear, rentals, trips, and payments in one live system.',
    images: ['/images/brand/og-image.jpg'],
  },
};

/**
 * Per-page URL metadata: a self-referencing canonical plus a matching
 * og:url. Spread it into a page's `metadata` (or `generateMetadata`
 * return) alongside `title` / `description`.
 *
 * `openGraph` does not deep-merge across segments in the Metadata API, so
 * the site-wide openGraph fields are re-spread here to preserve them.
 */
export function pageSeo(path: string): Metadata {
  const canonicalPath = path === '/' ? '/' : `/${path.replace(/^\/+/, '')}`;
  return {
    alternates: { canonical: canonicalPath },
    openGraph: { ...defaultSeo.openGraph, url: canonicalPath },
  };
}
