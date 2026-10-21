import fs from "fs";
import path from "path";
import { visibleBlogPosts } from "@/lib/config/blog";
import { BLOG_REDIRECTS } from "@/lib/config/blog-redirects";

const llms = fs.readFileSync(path.join(process.cwd(), "public/llms.txt"), "utf8");

describe("public/llms.txt", () => {
  it("links every published blog post", () => {
    for (const post of visibleBlogPosts.filter((p) => !p.draft)) {
      expect(llms).toContain(`https://www.ridgehq.app/blog/${post.slug})`);
    }
  });

  it("does not link merged (redirected) blog posts", () => {
    for (const [from] of BLOG_REDIRECTS) {
      expect(llms).not.toContain(`/blog/${from})`);
    }
  });

  it("points to an OpenAPI document that describes every public API route", () => {
    expect(llms).toContain("https://www.ridgehq.app/openapi.json");
    const spec = JSON.parse(fs.readFileSync(path.join(process.cwd(), "public/openapi.json"), "utf8"));
    expect(Object.keys(spec.paths).sort()).toEqual(
      ["/api/public/features", "/api/public/industries", "/api/public/pricing", "/api/public/product"],
    );
    for (const route of Object.keys(spec.paths)) {
      expect(fs.existsSync(path.join(process.cwd(), "src/app", route, "route.ts"))).toBe(true);
    }
  });
});
