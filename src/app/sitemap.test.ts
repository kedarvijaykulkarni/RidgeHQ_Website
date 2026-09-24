import fs from "fs";
import path from "path";
import sitemap from "./sitemap";
import nextConfig from "../../next.config";
import { verticals } from "@/lib/config/verticals";
import { products } from "@/lib/config/products";
import { platformCapabilities } from "@/lib/config/platform";
import { visibleBlogPosts } from "@/lib/config/blog";
import { useCases } from "@/lib/config/use-cases";
import { comparisons } from "@/lib/config/comparisons";
import { siteUrl } from "@/lib/config/site";
import { caseStudies } from "@/lib/config/case-studies";

describe("sitemap", () => {
  const urls = sitemap().map((entry) => entry.url);

  const EXPECTED_STATIC_ROUTES = [
    "",
    "/platform",
    "/products",
    "/ai-copilot",
    "/ai",
    "/tools",
    "/tools/no-show-cost-calculator",
    "/tools/admin-time-cost-calculator",
    "/tools/cancellation-cost-calculator",
    "/tools/revenue-leakage-calculator",
    "/tools/break-even-calculator",
    "/tools/roi-calculator",
    "/tools/cac-ltv-calculator",
    "/tools/instructor-utilization-calculator",
    "/tools/capacity-utilization-calculator",
    "/tools/spreadsheet-readiness-assessment",
    "/use-cases",
    "/compare",
    "/integrations",
    "/pricing",
    "/solutions",
    "/blog",
    "/contact",
    "/book-demo",
    "/design-partners",
    "/about",
    "/security",
    "/privacy",
    "/terms",
  ];

  it("includes every expected static route", () => {
    for (const route of EXPECTED_STATIC_ROUTES) {
      expect(urls).toContain(`${siteUrl}${route}`);
    }
  });

  it("includes one entry per vertical", () => {
    for (const v of verticals) {
      expect(urls).toContain(`${siteUrl}/solutions/${v.slug}`);
    }
  });

  it("includes one entry per product", () => {
    for (const p of products) {
      expect(urls).toContain(`${siteUrl}/products/${p.slug}`);
    }
  });

  it("includes one entry per platform capability", () => {
    for (const c of platformCapabilities) {
      expect(urls).toContain(`${siteUrl}/platform/${c.slug}`);
    }
  });

  it("includes one entry per visible blog post", () => {
    for (const post of visibleBlogPosts) {
      expect(urls).toContain(`${siteUrl}/blog/${post.slug}`);
    }
  });

  it("includes one entry per use case", () => {
    for (const u of useCases) {
      expect(urls).toContain(`${siteUrl}/use-cases/${u.slug}`);
    }
  });

  it("includes one entry per comparison", () => {
    for (const c of comparisons) {
      expect(urls).toContain(`${siteUrl}/compare/${c.slug}`);
    }
  });

  // Static (non-[slug]) page routes, found by walking src/app for page.tsx.
  function staticPageRoutes(dir = __dirname, prefix = ""): string[] {
    const routes: string[] = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isFile() && entry.name === "page.tsx") routes.push(prefix);
      if (!entry.isDirectory() || entry.name.startsWith("[") || entry.name.startsWith("_") || entry.name === "api") continue;
      // Route groups like (marketing) don't add a URL segment.
      const segment = entry.name.startsWith("(") ? "" : `/${entry.name}`;
      routes.push(...staticPageRoutes(path.join(dir, entry.name), `${prefix}${segment}`));
    }
    return routes;
  }

  // Deliberately kept out of the sitemap — each is `robots: { index: false }`
  // in its page.tsx. /case-studies only while caseStudies is empty.
  const NOINDEX_ROUTES = ["/resources", "/thank-you", ...(caseStudies.length === 0 ? ["/case-studies"] : [])];

  it("lists every static page route, except deliberately noindexed ones", () => {
    const missing = staticPageRoutes().filter(
      (route) => !NOINDEX_ROUTES.includes(route) && !urls.includes(`${siteUrl}${route}`),
    );
    expect(missing).toEqual([]);
  });

  it("has no URL without a page behind it", () => {
    const pages = staticPageRoutes();
    // Each [slug] route renders exactly its config's entries (generateStaticParams).
    const dynamicRoutes = [
      ...verticals.map((v) => `/solutions/${v.slug}`),
      ...products.map((p) => `/products/${p.slug}`),
      ...platformCapabilities.map((c) => `/platform/${c.slug}`),
      ...visibleBlogPosts.map((p) => `/blog/${p.slug}`),
      ...useCases.map((u) => `/use-cases/${u.slug}`),
      ...comparisons.map((c) => `/compare/${c.slug}`),
      ...caseStudies.map((cs) => `/case-studies/${cs.slug}`),
    ];
    const stale = urls
      .map((url) => url.slice(siteUrl.length))
      .filter((route) => !pages.includes(route) && !dynamicRoutes.includes(route));
    expect(stale).toEqual([]);
  });

  it("has no duplicate URLs", () => {
    expect(new Set(urls).size).toBe(urls.length);
  });
});

describe("redirects", () => {
  it("permanently redirects stray paths seen in analytics to their real targets", async () => {
    const redirects = await nextConfig.redirects!();
    expect(redirects).toEqual(
      expect.arrayContaining([
        { source: "/demo", destination: "/book-demo", permanent: true },
        { source: "/llm.txt", destination: "/llms.txt", permanent: true },
      ]),
    );
  });
});
