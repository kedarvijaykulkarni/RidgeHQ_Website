import { renderToStaticMarkup } from "react-dom/server";
import { verticals } from "@/lib/config/verticals";
import { tools } from "@/lib/config/tools";
import { comparisons } from "@/lib/config/comparisons";
import VerticalPage from "./solutions/[slug]/page";

// The page's lead form calls useRouter(), which needs a mounted app router.
jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useRouter: () => ({ push: jest.fn() }),
}));

function hrefs(html: string): string[] {
  return [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
}

// The cross-links are the point of this pass — assert them on the rendered
// page, not just in config, so a template change that drops them fails here.
describe("internal links", () => {
  it.each(verticals.map((v) => v.slug))("/solutions/%s links to its calculators, pricing, and every comparison", async (slug) => {
    const html = renderToStaticMarkup(await VerticalPage({ params: Promise.resolve({ slug }) }));
    const links = hrefs(html);
    for (const t of tools.filter((t) => t.relatedVerticalSlugs.includes(slug))) expect(links).toContain(`/tools/${t.slug}`);
    expect(links).toContain("/pricing");
    for (const c of comparisons) expect(links).toContain(`/compare/${c.slug}`);
  });

  it.each(tools.map((t) => t.slug))("/tools/%s links back to its verticals", async (slug) => {
    const { default: ToolPage } = await import(`./tools/${slug}/page`);
    const links = hrefs(renderToStaticMarkup(<ToolPage />));
    for (const v of tools.find((t) => t.slug === slug)!.relatedVerticalSlugs) expect(links).toContain(`/solutions/${v}`);
  });
});
