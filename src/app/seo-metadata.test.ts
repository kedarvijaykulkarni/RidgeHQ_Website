import fs from "fs";
import path from "path";
import { verticals } from "@/lib/config/verticals";
import { comparisons } from "@/lib/config/comparisons";
import { tools } from "@/lib/config/tools";
import { generateMetadata as solutionMetadata } from "./solutions/[slug]/page";
import { generateMetadata as compareMetadata } from "./compare/[slug]/page";

// The highest search-intent pages: every one needs its own title and a
// description that fits in a search result.
interface PageMeta {
  path: string;
  title: string;
  description: string;
  keyword: string;
}

async function collect(): Promise<PageMeta[]> {
  const pages: PageMeta[] = [];
  for (const v of verticals) {
    const m = await solutionMetadata({ params: Promise.resolve({ slug: v.slug }) });
    pages.push({ path: `/solutions/${v.slug}`, title: String(m.title), description: String(m.description), keyword: v.searchKeyword });
  }
  for (const c of comparisons) {
    const m = await compareMetadata({ params: Promise.resolve({ slug: c.slug }) });
    pages.push({ path: `/compare/${c.slug}`, title: String(m.title), description: String(m.description), keyword: c.title.replace(/^RidgeHQ vs\. /, "") });
  }
  for (const t of tools) {
    const { metadata } = await import(`./tools/${t.slug}/page`);
    pages.push({ path: `/tools/${t.slug}`, title: String(metadata.title), description: String(metadata.description), keyword: t.title });
  }
  return pages;
}

describe("search metadata", () => {
  let pages: PageMeta[];
  beforeAll(async () => {
    pages = await collect();
  });

  it("gives every page a unique title and description", () => {
    expect(new Set(pages.map((p) => p.title)).size).toBe(pages.length);
    expect(new Set(pages.map((p) => p.description)).size).toBe(pages.length);
  });

  it("keeps descriptions within 160 characters", () => {
    const long = pages.filter((p) => p.description.length > 160).map((p) => `${p.path} (${p.description.length})`);
    expect(long).toEqual([]);
  });

  it("puts the target keyword in the title and description", () => {
    const missing = pages
      .filter((p) => {
        const k = p.keyword.toLowerCase();
        return !p.title.toLowerCase().includes(k) || !p.description.toLowerCase().includes(k);
      })
      .map((p) => `${p.path} [${p.keyword}]`);
    expect(missing).toEqual([]);
  });

  it("covers every calculator page", () => {
    const dir = path.join(__dirname, "tools");
    const onDisk = fs.readdirSync(dir).filter((d) => fs.existsSync(path.join(dir, d, "page.tsx")));
    expect(pages.filter((p) => p.path.startsWith("/tools/")).length).toBe(onDisk.length);
  });
});
