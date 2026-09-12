"use client";

import * as React from "react";
import { event } from "@/lib/analytics/google-analytics";
import { calculateBreakEven } from "@/lib/calculators/breakEven";

function formatCurrency(n: number) {
  if (!Number.isFinite(n)) return "$0";
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function formatCount(n: number) {
  if (!Number.isFinite(n)) return "—";
  return Math.ceil(n).toLocaleString("en-US");
}

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#22D3EE]";

export function BreakEvenCalculator() {
  const [fixedCostsPerMonth, setFixedCostsPerMonth] = React.useState(4000);
  const [avgBookingValue, setAvgBookingValue] = React.useState(120);
  const [variableCostPerBooking, setVariableCostPerBooking] = React.useState(20);
  const hasTrackedCompletion = React.useRef(false);

  function trackCompletionOnce() {
    if (hasTrackedCompletion.current) return;
    hasTrackedCompletion.current = true;
    event("calculator_completed", { calculator: "break_even" });
  }

  const { contributionMargin, breakEvenBookingsPerMonth } = calculateBreakEven({
    fixedCostsPerMonth,
    avgBookingValue,
    variableCostPerBooking,
  });

  return (
    <div className="glass-card rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div>
            <label htmlFor="be-fixed-costs" className="block text-sm font-medium text-slate-300 mb-2">
              Fixed costs per month (USD) &mdash; rent, salaries, software, insurance
            </label>
            <input
              id="be-fixed-costs"
              type="number"
              min={0}
              className={inputClass}
              value={fixedCostsPerMonth}
              onChange={(e) => { setFixedCostsPerMonth(Number(e.target.value)); trackCompletionOnce(); }}
            />
          </div>
          <div>
            <label htmlFor="be-avg-booking-value" className="block text-sm font-medium text-slate-300 mb-2">
              Average booking price (USD)
            </label>
            <input
              id="be-avg-booking-value"
              type="number"
              min={0}
              className={inputClass}
              value={avgBookingValue}
              onChange={(e) => { setAvgBookingValue(Number(e.target.value)); trackCompletionOnce(); }}
            />
          </div>
          <div>
            <label htmlFor="be-variable-cost" className="block text-sm font-medium text-slate-300 mb-2">
              Variable cost per booking (USD) &mdash; gateway fees, consumables, per-booking staff time
            </label>
            <input
              id="be-variable-cost"
              type="number"
              min={0}
              className={inputClass}
              value={variableCostPerBooking}
              onChange={(e) => { setVariableCostPerBooking(Number(e.target.value)); trackCompletionOnce(); }}
            />
          </div>
        </div>

        <div
          className="flex flex-col justify-center space-y-6 border-t border-white/10 pt-8 md:border-t-0 md:border-l md:pl-10 md:pt-0"
          aria-live="polite"
        >
          <div>
            <p className="text-sm text-slate-400 mb-1">Contribution margin per booking</p>
            <p className="text-3xl font-bold text-white">{formatCurrency(contributionMargin)}</p>
          </div>
          <div>
            <p className="text-sm text-slate-400 mb-1">Bookings needed per month to break even</p>
            <p className="text-4xl font-bold text-[#22D3EE]">
              {Number.isFinite(breakEvenBookingsPerMonth)
                ? formatCount(breakEvenBookingsPerMonth)
                : "Not reachable at this price"}
            </p>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Formula: break-even bookings = fixed costs &divide; (price &minus; variable cost per
            booking). Standard contribution-margin break-even math, not a RidgeHQ-specific figure.
          </p>
        </div>
      </div>
    </div>
  );
}
