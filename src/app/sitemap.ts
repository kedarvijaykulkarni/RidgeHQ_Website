import { MetadataRoute } from 'next'
import { verticals } from '@/lib/config/verticals'
import { products } from '@/lib/config/products'
import { platformCapabilities } from '@/lib/config/platform'
import { visibleBlogPosts } from '@/lib/config/blog'
import { useCases } from '@/lib/config/use-cases'
import { comparisons } from '@/lib/config/comparisons'
import { siteUrl } from '@/lib/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl

  // `lastModified` is only emitted where we have a real signal for it (blog
  // posts, below). Stamping `new Date()` on every URL on every build makes
  // every `<lastmod>` change on every crawl, which Google learns to ignore.

  const staticRoutes = [
    '',
    '/platform',
    '/products',
    '/ai-copilot',
    '/ai',
    '/tools',
    '/tools/no-show-cost-calculator',
    '/tools/admin-time-cost-calculator',
    '/tools/cancellation-cost-calculator',
    '/tools/revenue-leakage-calculator',
    '/tools/break-even-calculator',
    '/tools/roi-calculator',
    '/tools/cac-ltv-calculator',
    '/tools/instructor-utilization-calculator',
    '/tools/capacity-utilization-calculator',
    '/tools/spreadsheet-readiness-assessment',
    '/use-cases',
    '/compare',
    '/integrations',
    '/pricing',
    '/solutions',
    '/blog',
    '/contact',
    '/book-demo',
    '/design-partners',
    '/about',
    '/security',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const solutionRoutes = verticals.map((v) => ({
    url: `${baseUrl}/solutions/${v.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const productRoutes = products.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const platformRoutes = platformCapabilities.map((c) => ({
    url: `${baseUrl}/platform/${c.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const blogRoutes = visibleBlogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: p.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const useCaseRoutes = useCases.map((u) => ({
    url: `${baseUrl}/use-cases/${u.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const comparisonRoutes = comparisons.map((c) => ({
    url: `${baseUrl}/compare/${c.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticRoutes,
    ...solutionRoutes,
    ...productRoutes,
    ...platformRoutes,
    ...blogRoutes,
    ...useCaseRoutes,
    ...comparisonRoutes,
  ]
}
