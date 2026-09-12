import { calculateBreakEven } from "./breakEven";

describe("calculateBreakEven", () => {
  it("computes contribution margin and break-even volume", () => {
    const result = calculateBreakEven({
      fixedCostsPerMonth: 6000,
      avgBookingValue: 120,
      variableCostPerBooking: 20,
    });

    expect(result.contributionMargin).toBe(100);
    expect(result.breakEvenBookingsPerMonth).toBe(60);
  });

  it("returns Infinity when the contribution margin is zero or negative", () => {
    const zeroMargin = calculateBreakEven({
      fixedCostsPerMonth: 6000,
      avgBookingValue: 50,
      variableCostPerBooking: 50,
    });
    expect(zeroMargin.breakEvenBookingsPerMonth).toBe(Infinity);

    const negativeMargin = calculateBreakEven({
      fixedCostsPerMonth: 6000,
      avgBookingValue: 40,
      variableCostPerBooking: 50,
    });
    expect(negativeMargin.breakEvenBookingsPerMonth).toBe(Infinity);
  });
});
