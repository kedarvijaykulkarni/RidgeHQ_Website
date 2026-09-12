export interface RoiInputs {
  monthlyCost: number; // cost of the new system/process being evaluated
  monthlySavingsOrGains: number; // estimated monthly value (time saved, revenue recovered, etc.), user-supplied
}

export interface RoiResult {
  netMonthlyValue: number;
  annualRoiPercent: number;
}

/**
 * Standard ROI formula applied to recurring monthly cost/gain figures:
 * ROI% = (annual gain - annual cost) / annual cost * 100.
 * Returns 0% ROI when there's no cost to measure a return against.
 */
export function calculateRoi(inputs: RoiInputs): RoiResult {
  const netMonthlyValue = inputs.monthlySavingsOrGains - inputs.monthlyCost;
  const annualCost = inputs.monthlyCost * 12;
  const annualNetValue = netMonthlyValue * 12;
  const annualRoiPercent = annualCost > 0 ? (annualNetValue / annualCost) * 100 : 0;
  return { netMonthlyValue, annualRoiPercent };
}
