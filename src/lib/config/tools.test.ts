import fs from "fs";
import path from "path";
import { tools } from "./tools";
import { verticals } from "./verticals";

describe("tools config", () => {
  it("lists exactly the calculators that exist under /tools", () => {
    const toolsDir = path.join(__dirname, "../../app/tools");
    const pages = fs
      .readdirSync(toolsDir, { withFileTypes: true })
      .filter((e) => e.isDirectory() && fs.existsSync(path.join(toolsDir, e.name, "page.tsx")))
      .map((e) => e.name);
    expect(tools.map((t) => t.slug).sort()).toEqual(pages.sort());
  });

  it("only relates tools to verticals that exist", () => {
    const slugs = verticals.map((v) => v.slug);
    for (const tool of tools) {
      for (const slug of tool.relatedVerticalSlugs) expect(slugs).toContain(slug);
    }
  });

  it("gives every vertical at least two calculators to link to", () => {
    for (const v of verticals) {
      const count = tools.filter((t) => t.relatedVerticalSlugs.includes(v.slug)).length;
      expect([v.slug, count >= 2]).toEqual([v.slug, true]);
    }
  });
});
