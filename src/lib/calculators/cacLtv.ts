export interface CacLtvInputs {
  customerAcquisitionCost: number;
  avgOrderValue: number;
  ordersPerYear: number;
  avgCustomerLifespanYears: number;
  grossMarginPercent: number;
}

export interface CacLtvResult {
  lifetimeValue: number;
  /** LTV : CAC, e.g. 3 means 3:1. null when acquisition cost is 0 and lifetime
   *  value is positive — the ratio is unbounded, not zero, in that case. */
  ratio: number | null;
}

/**
 * Standard LTV formula: average order value x orders per year x customer
 * lifespan x gross margin, compared against acquisition cost as a ratio.
 * A commonly cited healthy benchmark is 3:1 or higher — not a RidgeHQ
 * claim, a generic SaaS/subscription heuristic.
 */
export function calculateCacLtv(inputs: CacLtvInputs): CacLtvResult {
  const lifetimeValue =
    inputs.avgOrderValue *
    inputs.ordersPerYear *
    inputs.avgCustomerLifespanYears *
    (inputs.grossMarginPercent / 100);

  if (inputs.customerAcquisitionCost <= 0) {
    return { lifetimeValue, ratio: lifetimeValue > 0 ? null : 0 };
  }

  return { lifetimeValue, ratio: lifetimeValue / inputs.customerAcquisitionCost };
}
