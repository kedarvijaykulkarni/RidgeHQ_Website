import { calculateCacLtv } from "./cacLtv";

describe("calculateCacLtv", () => {
  it("computes lifetime value and the LTV:CAC ratio", () => {
    const result = calculateCacLtv({
      customerAcquisitionCost: 100,
      avgOrderValue: 150,
      ordersPerYear: 4,
      avgCustomerLifespanYears: 3,
      grossMarginPercent: 60,
    });

    // 150 * 4 * 3 * 0.6 = 1080
    expect(result.lifetimeValue).toBeCloseTo(1080);
    expect(result.ratio).toBeCloseTo(10.8);
  });

  it("returns a zero ratio when acquisition cost is zero", () => {
    const result = calculateCacLtv({
      customerAcquisitionCost: 0,
      avgOrderValue: 150,
      ordersPerYear: 4,
      avgCustomerLifespanYears: 3,
      grossMarginPercent: 60,
    });

    expect(result.ratio).toBe(0);
  });
});
