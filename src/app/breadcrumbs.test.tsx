import fs from "fs";
import path from "path";
import { renderToStaticMarkup } from "react-dom/server";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { siteUrl } from "@/lib/config/site";

const APP_DIR = path.join(process.cwd(), "src/app");
// Home has no trail; /thank-you is noindex and a dead end.
const EXEMPT = new Set(["page.tsx", "thank-you/page.tsx"]);

function pageFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return pageFiles(full);
    return entry.name === "page.tsx" ? [full] : [];
  });
}

describe("breadcrumb coverage", () => {
  const pages = pageFiles(APP_DIR)
    .map((file) => path.relative(APP_DIR, file).replace(/\\/g, "/"))
    .filter((rel) => !EXEMPT.has(rel));

  it.each(pages)("%s renders PageBreadcrumbs (visual + JSON-LD from one trail)", (rel) => {
    const source = fs.readFileSync(path.join(APP_DIR, rel), "utf8");
    expect(source).toMatch(/<PageBreadcrumbs|<CalculatorPageShell/);
    // Hand-built trails are how the visual crumb and JSON-LD drifted apart.
    expect(source).not.toMatch(/<Breadcrumbs\b|breadcrumbJsonLd\(|"BreadcrumbList"/);
  });
});

describe("PageBreadcrumbs", () => {
  const html = renderToStaticMarkup(
    <PageBreadcrumbs
      trail={[
        { label: "Blog", href: "/blog" },
        { label: "A post", href: "/blog/a-post" },
      ]}
    />
  );

  it("emits a BreadcrumbList matching the visible trail", () => {
    const json = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/)![1]);
    expect(json.itemListElement.map((i: { name: string; item: string }) => [i.name, i.item])).toEqual([
      ["Home", `${siteUrl}/`],
      ["Blog", `${siteUrl}/blog`],
      ["A post", `${siteUrl}/blog/a-post`],
    ]);
  });

  it("links every crumb but the current page, which gets aria-current", () => {
    expect(html).toContain('href="/"');
    expect(html).toContain('href="/blog"');
    expect(html).not.toContain('href="/blog/a-post"');
    expect(html).toMatch(/<span aria-current="page"[^>]*>A post<\/span>/);
  });
});
