import { Metadata } from 'next';

export const defaultSeo: Metadata = {
  title: {
    template: '%s | RidgeHQ',
    default: 'RidgeHQ | The Activity Business OS',
  },
  description: 'Run your entire activity business from one HQ. Connect bookings, schedules, staff, customers, gear, rentals, trips, and payments in one live system.',
  openGraph: {
    title: 'RidgeHQ | The Activity Business OS',
    description: 'Run your entire activity business from one HQ. Connect bookings, schedules, staff, customers, gear, rentals, trips, and payments in one live system.',
    url: 'https://ridgehq.app',
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
