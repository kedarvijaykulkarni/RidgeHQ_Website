import sitemap from "./sitemap";
import { verticals } from "@/lib/config/verticals";
import { products } from "@/lib/config/products";
import { platformCapabilities } from "@/lib/config/platform";
import { visibleBlogPosts } from "@/lib/config/blog";
import { useCases } from "@/lib/config/use-cases";
import { comparisons } from "@/lib/config/comparisons";
import { siteUrl } from "@/lib/config/site";

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
});
