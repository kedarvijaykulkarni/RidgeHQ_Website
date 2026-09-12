export interface RevenueLeakageInputs {
  bookingsPerWeek: number;
  avgBookingValue: number;
  leakageRate: number; // percent of booking revenue lost to missed charges, unbilled add-ons, or manual pricing errors
  weeksPerYear: number;
}

export interface RevenueLeakageResult {
  weeklyLeakage: number;
  annualLeakage: number;
}

export function calculateRevenueLeakage(inputs: RevenueLeakageInputs): RevenueLeakageResult {
  const weeklyRevenue = inputs.bookingsPerWeek * inputs.avgBookingValue;
  const weeklyLeakage = weeklyRevenue * (inputs.leakageRate / 100);
  const annualLeakage = weeklyLeakage * inputs.weeksPerYear;
  return { weeklyLeakage, annualLeakage };
}
