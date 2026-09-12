import { calculateRoi } from "./roi";

describe("calculateRoi", () => {
  it("computes net monthly value and annual ROI percent", () => {
    const result = calculateRoi({ monthlyCost: 200, monthlySavingsOrGains: 500 });

    expect(result.netMonthlyValue).toBe(300);
    // annual net value 3600 / annual cost 2400 * 100 = 150%
    expect(result.annualRoiPercent).toBeCloseTo(150);
  });

  it("returns negative ROI when gains are less than cost", () => {
    const result = calculateRoi({ monthlyCost: 200, monthlySavingsOrGains: 100 });

    expect(result.netMonthlyValue).toBe(-100);
    expect(result.annualRoiPercent).toBeCloseTo(-50);
  });

  it("returns zero ROI when there is no cost to measure against", () => {
    const result = calculateRoi({ monthlyCost: 0, monthlySavingsOrGains: 500 });
    expect(result.annualRoiPercent).toBe(0);
  });
});
