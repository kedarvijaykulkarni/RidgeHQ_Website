import { MetadataRoute } from 'next'
import { verticals } from '@/lib/config/verticals'
import { products } from '@/lib/config/products'
import { platformCapabilities } from '@/lib/config/platform'
import { visibleBlogPosts } from '@/lib/config/blog'
import { useCases } from '@/lib/config/use-cases'
import { comparisons } from '@/lib/config/comparisons'
import { caseStudies } from '@/lib/config/case-studies'
import { siteUrl } from '@/lib/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl

  // `lastModified` reflects the last commit that actually touched each
  // route's content (a static page's file, or the config entry's own
  // `lastUpdated` field) — never `new Date()` at build time, which would
  // make every `<lastmod>` change on every crawl and teach Google to ignore it.

  const staticRoutes = (
    [
      ['', '2026-09-12'],
      ['/platform', '2026-09-12'],
      ['/products', '2026-09-12'],
      ['/ai-copilot', '2026-09-05'],
      ['/ai', '2026-09-12'],
      ['/tools', '2026-09-12'],
      ['/tools/no-show-cost-calculator', '2026-09-25'],
      ['/tools/admin-time-cost-calculator', '2026-09-25'],
      ['/tools/cancellation-cost-calculator', '2026-09-25'],
      ['/tools/revenue-leakage-calculator', '2026-09-25'],
      ['/tools/break-even-calculator', '2026-09-25'],
      ['/tools/roi-calculator', '2026-09-25'],
      ['/tools/cac-ltv-calculator', '2026-09-25'],
      ['/tools/instructor-utilization-calculator', '2026-09-25'],
      ['/tools/capacity-utilization-calculator', '2026-09-25'],
      ['/tools/spreadsheet-readiness-assessment', '2026-09-25'],
      ['/use-cases', '2026-09-12'],
      ['/compare', '2026-09-12'],
      ['/integrations', '2026-09-05'],
      ['/pricing', '2026-09-12'],
      ['/solutions', '2026-09-05'],
      ['/blog', '2026-09-12'],
      ['/contact', '2026-09-05'],
      ['/book-demo', '2026-09-12'],
      ['/design-partners', '2026-09-12'],
      ['/about', '2026-09-02'],
      ['/security', '2026-09-05'],
      ['/privacy', '2026-09-05'],
      ['/terms', '2026-09-05'],
    ] as const
  ).map(([route, lastModified]) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const solutionRoutes = verticals.map((v) => ({
    url: `${baseUrl}/solutions/${v.slug}`,
    lastModified: v.lastUpdated,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const productRoutes = products.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: p.lastUpdated,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const platformRoutes = platformCapabilities.map((c) => ({
    url: `${baseUrl}/platform/${c.slug}`,
    lastModified: c.lastUpdated,
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
    lastModified: u.lastUpdated,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const comparisonRoutes = comparisons.map((c) => ({
    url: `${baseUrl}/compare/${c.slug}`,
    lastModified: c.lastUpdated,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // /case-studies is noindex while caseStudies is empty (see its page.tsx) —
  // kept out of the sitemap the same way /resources is, and included
  // automatically the moment a real entry is added, no further code change.
  const caseStudyRoutes =
    caseStudies.length > 0
      ? [
          { url: `${baseUrl}/case-studies`, changeFrequency: 'weekly' as const, priority: 0.7 },
          ...caseStudies.map((cs) => ({
            url: `${baseUrl}/case-studies/${cs.slug}`,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
          })),
        ]
      : []

  return [
    ...staticRoutes,
    ...solutionRoutes,
    ...productRoutes,
    ...platformRoutes,
    ...blogRoutes,
    ...useCaseRoutes,
    ...comparisonRoutes,
    ...caseStudyRoutes,
  ]
}
