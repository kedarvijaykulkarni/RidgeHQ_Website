export interface CancellationCostInputs {
  bookingsPerWeek: number;
  avgBookingValue: number;
  cancellationRate: number; // percent, e.g. 12 for 12%
  backfillRate: number; // percent of cancelled slots successfully rebooked
  weeksPerYear: number;
}

export interface CancellationCostResult {
  weeklyLoss: number;
  annualLoss: number;
}

export function calculateCancellationCost(inputs: CancellationCostInputs): CancellationCostResult {
  const cancelledPerWeek = inputs.bookingsPerWeek * (inputs.cancellationRate / 100);
  const unrecoveredPerWeek = cancelledPerWeek * (1 - inputs.backfillRate / 100);
  const weeklyLoss = unrecoveredPerWeek * inputs.avgBookingValue;
  const annualLoss = weeklyLoss * inputs.weeksPerYear;
  return { weeklyLoss, annualLoss };
}
