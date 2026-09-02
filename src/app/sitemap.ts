import { MetadataRoute } from 'next'
import { verticals } from '@/lib/config/verticals'
import { products } from '@/lib/config/products'
import { platformCapabilities } from '@/lib/config/platform'
import { blogPosts } from '@/lib/config/blog'
import { siteUrl } from '@/lib/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl

  const staticRoutes = [
    '',
    '/platform',
    '/products',
    '/ai-copilot',
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
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const solutionRoutes = verticals.map((v) => ({
    url: `${baseUrl}/solutions/${v.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const productRoutes = products.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const platformRoutes = platformCapabilities.map((c) => ({
    url: `${baseUrl}/platform/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const blogRoutes = blogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...staticRoutes,
    ...solutionRoutes,
    ...productRoutes,
    ...platformRoutes,
    ...blogRoutes,
  ]
}
