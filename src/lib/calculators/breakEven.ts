export interface BreakEvenInputs {
  fixedCostsPerMonth: number;
  avgBookingValue: number;
  variableCostPerBooking: number; // e.g. payment gateway fee, per-booking consumables
}

export interface BreakEvenResult {
  contributionMargin: number;
  breakEvenBookingsPerMonth: number;
}

/**
 * Standard contribution-margin break-even formula:
 * break-even units = fixed costs / (price - variable cost per unit).
 * Returns Infinity when the contribution margin is zero or negative
 * (every booking sold at or below its variable cost) — there is no
 * finite volume that breaks even.
 */
export function calculateBreakEven(inputs: BreakEvenInputs): BreakEvenResult {
  const contributionMargin = inputs.avgBookingValue - inputs.variableCostPerBooking;
  const breakEvenBookingsPerMonth =
    contributionMargin > 0 ? inputs.fixedCostsPerMonth / contributionMargin : Infinity;
  return { contributionMargin, breakEvenBookingsPerMonth };
}
