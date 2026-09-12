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
