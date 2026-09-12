"use client";

import * as React from "react";
import { event } from "@/lib/analytics/google-analytics";
import { calculateCacLtv } from "@/lib/calculators/cacLtv";

function formatCurrency(n: number) {
  if (!Number.isFinite(n)) return "$0";
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#22D3EE]";

export function CacLtvCalculator() {
  const [customerAcquisitionCost, setCustomerAcquisitionCost] = React.useState(80);
  const [avgOrderValue, setAvgOrderValue] = React.useState(120);
  const [ordersPerYear, setOrdersPerYear] = React.useState(3);
  const [avgCustomerLifespanYears, setAvgCustomerLifespanYears] = React.useState(2);
  const [grossMarginPercent, setGrossMarginPercent] = React.useState(60);
  const hasTrackedCompletion = React.useRef(false);

  function trackCompletionOnce() {
    if (hasTrackedCompletion.current) return;
    hasTrackedCompletion.current = true;
    event("calculator_completed", { calculator: "cac_ltv" });
  }

  const { lifetimeValue, ratio } = calculateCacLtv({
    customerAcquisitionCost,
    avgOrderValue,
    ordersPerYear,
    avgCustomerLifespanYears,
    grossMarginPercent,
  });

  return (
    <div className="glass-card rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div>
            <label htmlFor="cl-cac" className="block text-sm font-medium text-slate-300 mb-2">
              Customer acquisition cost (USD)
            </label>
            <input
              id="cl-cac"
              type="number"
              min={0}
              className={inputClass}
              value={customerAcquisitionCost}
              onChange={(e) => { setCustomerAcquisitionCost(Number(e.target.value)); trackCompletionOnce(); }}
            />
          </div>
          <div>
            <label htmlFor="cl-avg-order" className="block text-sm font-medium text-slate-300 mb-2">
              Average order/booking value (USD)
            </label>
            <input
              id="cl-avg-order"
              type="number"
              min={0}
              className={inputClass}
              value={avgOrderValue}
              onChange={(e) => { setAvgOrderValue(Number(e.target.value)); trackCompletionOnce(); }}
            />
          </div>
          <div>
            <label htmlFor="cl-orders-per-year" className="block text-sm font-medium text-slate-300 mb-2">
              Orders/bookings per customer per year
            </label>
            <input
              id="cl-orders-per-year"
              type="number"
              min={0}
              className={inputClass}
              value={ordersPerYear}
              onChange={(e) => { setOrdersPerYear(Number(e.target.value)); trackCompletionOnce(); }}
            />
          </div>
          <div>
            <label htmlFor="cl-lifespan" className="block text-sm font-medium text-slate-300 mb-2">
              Average customer lifespan (years)
            </label>
            <input
              id="cl-lifespan"
              type="number"
              min={0}
              step={0.5}
              className={inputClass}
              value={avgCustomerLifespanYears}
              onChange={(e) => { setAvgCustomerLifespanYears(Number(e.target.value)); trackCompletionOnce(); }}
            />
          </div>
          <div>
            <label htmlFor="cl-margin" className="block text-sm font-medium text-slate-300 mb-2">
              Gross margin (%)
            </label>
            <input
              id="cl-margin"
              type="number"
              min={0}
              max={100}
              className={inputClass}
              value={grossMarginPercent}
              onChange={(e) => { setGrossMarginPercent(Number(e.target.value)); trackCompletionOnce(); }}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6 border-t border-white/10 pt-8 md:border-t-0 md:border-l md:pl-10 md:pt-0">
          <div>
            <p className="text-sm text-slate-400 mb-1">Estimated customer lifetime value</p>
            <p className="text-3xl font-bold text-white">{formatCurrency(lifetimeValue)}</p>
          </div>
          <div>
            <p className="text-sm text-slate-400 mb-1">LTV : CAC ratio</p>
            <p className="text-4xl font-bold text-[#22D3EE]">{ratio.toFixed(1)}:1</p>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Formula: LTV = average order value &times; orders/year &times; lifespan &times; gross margin.
            A commonly cited healthy benchmark is 3:1 or higher — a generic subscription-business
            heuristic, not a RidgeHQ claim.
          </p>
        </div>
      </div>
    </div>
  );
}
