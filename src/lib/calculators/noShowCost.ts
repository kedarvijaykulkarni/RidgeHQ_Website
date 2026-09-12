export interface NoShowCostInputs {
  bookingsPerWeek: number;
  avgBookingValue: number;
  noShowRate: number; // percent, e.g. 8 for 8%
  weeksPerYear: number;
}

export interface NoShowCostResult {
  weeklyLoss: number;
  annualLoss: number;
}

export function calculateNoShowCost(inputs: NoShowCostInputs): NoShowCostResult {
  const weeklyLoss = inputs.bookingsPerWeek * inputs.avgBookingValue * (inputs.noShowRate / 100);
  const annualLoss = weeklyLoss * inputs.weeksPerYear;
  return { weeklyLoss, annualLoss };
}
