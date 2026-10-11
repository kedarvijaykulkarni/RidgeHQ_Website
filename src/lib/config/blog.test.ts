describe("loadBlogPosts pillar validation", () => {
  const validFrontmatter = [
    "---",
    'title: "Test Post"',
    'excerpt: "A test post."',
    'publishedAt: "2026-01-01"',
    "pillar: {{PILLAR}}",
    "---",
    "Body content.",
  ].join("\n");

  function loadWithPillar(pillarLine: string) {
    jest.resetModules();
    jest.doMock("node:fs", () => ({
      readdirSync: () => ["test-post.md"],
      readFileSync: () => validFrontmatter.replace("{{PILLAR}}", pillarLine),
    }));
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    return require("./blog");
  }

  afterEach(() => {
    jest.dontMock("node:fs");
  });

  it("loads a post with a valid pillar", () => {
    const { blogPosts } = loadWithPillar('"Operations"');
    expect(blogPosts[0].pillar).toBe("Operations");
  });

  it("throws for a post with an invalid pillar value", () => {
    expect(() => loadWithPillar('"Technolgy"')).toThrow(/invalid pillar/i);
  });
});

describe("loadBlogPosts video frontmatter", () => {
  function loadWithVideo(uploadDateLine: string) {
    const raw = [
      "---",
      'title: "Test Post"',
      'excerpt: "A test post."',
      'publishedAt: "2026-01-01"',
      'pillar: "Operations"',
      "video:",
      '  youtubeId: "abc123"',
      '  title: "Video title"',
      '  description: "Video description."',
      `  uploadDate: ${uploadDateLine}`,
      "  durationSeconds: 49",
      "---",
      "Body content.",
    ].join("\n");
    jest.resetModules();
    jest.doMock("node:fs", () => ({
      readdirSync: () => ["test-post.md"],
      readFileSync: () => raw,
    }));
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    return require("./blog");
  }

  afterEach(() => {
    jest.dontMock("node:fs");
  });

  it("loads a post's video with YouTube's exact upload timestamp", () => {
    const { blogPosts } = loadWithVideo('"2026-10-10T22:46:31-07:00"');
    expect(blogPosts[0].video).toEqual({
      youtubeId: "abc123",
      title: "Video title",
      description: "Video description.",
      uploadDate: "2026-10-10T22:46:31-07:00",
      durationSeconds: 49,
    });
  });

  it("throws for an unquoted uploadDate, which YAML would turn into a Date", () => {
    expect(() => loadWithVideo("2026-10-10T22:46:31-07:00")).toThrow(/video\.uploadDate/);
  });
});

describe("published blog post dates", () => {
  // An unquoted YAML date parses as a Date object and stringifies as
  // "Tue Oct 06 ...", which then leaks into the sitemap's <lastmod>.
  it("are all ISO YYYY-MM-DD strings", () => {
    jest.resetModules();
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { blogPosts } = require("./blog") as typeof import("./blog");
    expect(blogPosts.length).toBeGreaterThan(0);
    for (const post of blogPosts) {
      expect(post.publishedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      if (post.updatedAt) expect(post.updatedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });
});
