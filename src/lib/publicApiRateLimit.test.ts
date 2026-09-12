import { isRateLimited, _getTrackedIdentifierCountForTesting } from "./publicApiRateLimit";

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

  it("sweeps stale identifiers instead of growing the tracked map forever", () => {
    const nowSpy = jest.spyOn(Date, "now");
    let simulatedNow = 1_000_000;
    nowSpy.mockImplementation(() => simulatedNow);

    // A burst of single-use identifiers (e.g. a spoofed header value that
    // changes every request) — each adds one entry.
    for (let i = 0; i < 600; i++) {
      isRateLimited(`spoofed-${i}`);
    }
    const countRightAfterBurst = _getTrackedIdentifierCountForTesting();
    expect(countRightAfterBurst).toBeGreaterThan(0);

    // Move time past the rate-limit window, then make enough calls to
    // trigger the periodic sweep (every 500 calls) — all the burst
    // identifiers should now read as stale and be reclaimed.
    simulatedNow += 120_000;
    for (let i = 0; i < 500; i++) {
      isRateLimited(`filler-${i}`);
    }

    const countAfterSweep = _getTrackedIdentifierCountForTesting();
    expect(countAfterSweep).toBeLessThan(countRightAfterBurst + 500);

    nowSpy.mockRestore();
  });
});
