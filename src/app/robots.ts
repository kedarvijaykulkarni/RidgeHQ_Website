import { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/config/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // /thank-you and /resources are crawlable so Google can see their
      // `noindex` meta tag; they are kept out of the index that way.
      disallow: ['/api/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
