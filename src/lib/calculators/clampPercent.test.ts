import { clampPercent } from "./clampPercent";

describe("clampPercent", () => {
  it("clamps values above 100 down to 100", () => {
    expect(clampPercent(200)).toBe(100);
  });

  it("clamps negative values up to 0", () => {
    expect(clampPercent(-50)).toBe(0);
  });

  it("passes through in-range values unchanged", () => {
    expect(clampPercent(42)).toBe(42);
  });

  it("treats non-finite input as 0", () => {
    expect(clampPercent(NaN)).toBe(0);
  });
});
