import { calculateAdminTimeCost } from "./adminTimeCost";

describe("calculateAdminTimeCost", () => {
  it("computes weekly and annual cost from hours, hourly cost, and weeks", () => {
    const result = calculateAdminTimeCost({
      hoursPerWeek: 8,
      hourlyCost: 35,
      weeksPerYear: 50,
    });

    expect(result.weeklyCost).toBe(280);
    expect(result.annualCost).toBe(14000);
  });

  it("returns zero cost when hours per week is zero", () => {
    const result = calculateAdminTimeCost({
      hoursPerWeek: 0,
      hourlyCost: 35,
      weeksPerYear: 50,
    });

    expect(result.weeklyCost).toBe(0);
    expect(result.annualCost).toBe(0);
  });
});
