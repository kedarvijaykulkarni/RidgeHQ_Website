import { isRateLimited } from "./publicApiRateLimit";

describe("isRateLimited", () => {
  it("allows requests under the limit and blocks once the limit is exceeded", () => {
    const id = `test-${Math.random()}`;
    for (let i = 0; i < 60; i++) {
      expect(isRateLimited(id)).toBe(false);
    }
    expect(isRateLimited(id)).toBe(true);
  });

  it("tracks separate identifiers independently", () => {
    const a = `a-${Math.random()}`;
    const b = `b-${Math.random()}`;
    for (let i = 0; i < 60; i++) isRateLimited(a);
    expect(isRateLimited(a)).toBe(true);
    expect(isRateLimited(b)).toBe(false);
  });
});
