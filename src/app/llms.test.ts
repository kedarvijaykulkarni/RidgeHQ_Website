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
});
