export interface AdminTimeCostInputs {
  hoursPerWeek: number;
  hourlyCost: number;
  weeksPerYear: number;
}

export interface AdminTimeCostResult {
  weeklyCost: number;
  annualCost: number;
}

export function calculateAdminTimeCost(inputs: AdminTimeCostInputs): AdminTimeCostResult {
  const weeklyCost = inputs.hoursPerWeek * inputs.hourlyCost;
  const annualCost = weeklyCost * inputs.weeksPerYear;
  return { weeklyCost, annualCost };
}
