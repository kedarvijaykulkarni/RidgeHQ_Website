import { calculateCapacityUtilization } from "./capacityUtilization";

describe("calculateCapacityUtilization", () => {
  it("computes utilization percent from total available vs. booked hours", () => {
    const result = calculateCapacityUtilization({
      unitsAvailable: 10,
      availableHoursPerUnitPerWeek: 8,
      bookedHoursPerWeek: 40,
    });

    expect(result.totalAvailableHours).toBe(80);
    expect(result.utilizationPercent).toBeCloseTo(50);
  });

  it("returns zero utilization when there are no units", () => {
    const result = calculateCapacityUtilization({
      unitsAvailable: 0,
      availableHoursPerUnitPerWeek: 8,
      bookedHoursPerWeek: 0,
    });

    expect(result.utilizationPercent).toBe(0);
  });
});
