import { calculateNoShowCost } from "./noShowCost";

describe("calculateNoShowCost", () => {
  it("computes weekly and annual loss from bookings, value, and rate", () => {
    const result = calculateNoShowCost({
      bookingsPerWeek: 40,
      avgBookingValue: 120,
      noShowRate: 8,
      weeksPerYear: 48,
    });

    expect(result.weeklyLoss).toBeCloseTo(384);
    expect(result.annualLoss).toBeCloseTo(18432);
  });

  it("returns zero loss when the no-show rate is zero", () => {
    const result = calculateNoShowCost({
      bookingsPerWeek: 40,
      avgBookingValue: 120,
      noShowRate: 0,
      weeksPerYear: 48,
    });

    expect(result.weeklyLoss).toBe(0);
    expect(result.annualLoss).toBe(0);
  });
});
