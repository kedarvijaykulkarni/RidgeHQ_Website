import { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/config/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // /thank-you, /resources, and /case-studies (while it has no real
      // entries) are crawlable so Google can see their `noindex` meta tag;
      // they are kept out of the index that way.
      // /api/public/* (product/industries/features/pricing JSON) is
      // intentionally kept out of the crawl/index too — it's meant to be
      // called programmatically (by a tool/agent that already knows the
      // URL, documented in llms.txt), not indexed as a searchable page.
      disallow: ['/api/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
