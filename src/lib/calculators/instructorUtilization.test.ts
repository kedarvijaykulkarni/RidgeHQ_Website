import { calculateInstructorUtilization } from "./instructorUtilization";

describe("calculateInstructorUtilization", () => {
  it("computes utilization percent from total available vs. booked hours", () => {
    const result = calculateInstructorUtilization({
      instructorCount: 4,
      availableHoursPerWeek: 30,
      bookedHoursPerWeek: 90,
    });

    expect(result.totalAvailableHours).toBe(120);
    expect(result.utilizationPercent).toBeCloseTo(75);
  });

  it("returns zero utilization when there are no available hours", () => {
    const result = calculateInstructorUtilization({
      instructorCount: 0,
      availableHoursPerWeek: 30,
      bookedHoursPerWeek: 0,
    });

    expect(result.utilizationPercent).toBe(0);
  });
});
