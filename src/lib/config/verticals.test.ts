import { verticals } from "./verticals";
import { platformCapabilities } from "./platform";

describe("verticals config", () => {
  it("only relates verticals to platform capabilities that exist", () => {
    const slugs = platformCapabilities.map((c) => c.slug);
    for (const v of verticals) {
      for (const slug of v.relatedPlatformSlugs) expect(slugs).toContain(slug);
    }
  });

  it("gives every vertical at least two related platform capabilities", () => {
    for (const v of verticals) {
      expect([v.slug, v.relatedPlatformSlugs.length >= 2]).toEqual([v.slug, true]);
    }
  });
});
