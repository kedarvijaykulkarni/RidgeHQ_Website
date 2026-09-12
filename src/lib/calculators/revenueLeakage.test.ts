import { calculateRevenueLeakage } from "./revenueLeakage";

describe("calculateRevenueLeakage", () => {
  it("computes weekly and annual leakage from booking revenue and a leakage rate", () => {
    const result = calculateRevenueLeakage({
      bookingsPerWeek: 60,
      avgBookingValue: 150,
      leakageRate: 5,
      weeksPerYear: 48,
    });

    // 60 * 150 = 9000/week revenue; 5% leakage = 450/week
    expect(result.weeklyLeakage).toBeCloseTo(450);
    expect(result.annualLeakage).toBeCloseTo(21600);
  });

  it("returns zero leakage when the leakage rate is zero", () => {
    const result = calculateRevenueLeakage({
      bookingsPerWeek: 60,
      avgBookingValue: 150,
      leakageRate: 0,
      weeksPerYear: 48,
    });

    expect(result.weeklyLeakage).toBe(0);
    expect(result.annualLeakage).toBe(0);
  });
});
