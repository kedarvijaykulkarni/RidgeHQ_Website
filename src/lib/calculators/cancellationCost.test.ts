import { calculateCancellationCost } from "./cancellationCost";

describe("calculateCancellationCost", () => {
  it("computes unrecovered loss after backfill is applied", () => {
    const result = calculateCancellationCost({
      bookingsPerWeek: 50,
      avgBookingValue: 100,
      cancellationRate: 20,
      backfillRate: 50,
      weeksPerYear: 48,
    });

    // 50 * 0.2 = 10 cancelled/week; 50% backfilled -> 5 unrecovered/week
    expect(result.weeklyLoss).toBeCloseTo(500);
    expect(result.annualLoss).toBeCloseTo(24000);
  });

  it("returns zero loss when every cancellation is backfilled", () => {
    const result = calculateCancellationCost({
      bookingsPerWeek: 50,
      avgBookingValue: 100,
      cancellationRate: 20,
      backfillRate: 100,
      weeksPerYear: 48,
    });

    expect(result.weeklyLoss).toBe(0);
    expect(result.annualLoss).toBe(0);
  });
});
