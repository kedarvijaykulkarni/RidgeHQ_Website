"use client";

import * as React from "react";
import { event } from "@/lib/analytics/google-analytics";
import { calculateCancellationCost } from "@/lib/calculators/cancellationCost";
import { clampPercent } from "@/lib/calculators/clampPercent";

function formatCurrency(n: number) {
  if (!Number.isFinite(n)) return "$0";
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#22D3EE]";

export function CancellationCostCalculator() {
  const [bookingsPerWeek, setBookingsPerWeek] = React.useState(50);
  const [avgBookingValue, setAvgBookingValue] = React.useState(100);
  const [cancellationRate, setCancellationRate] = React.useState(15);
  const [backfillRate, setBackfillRate] = React.useState(40);
  const [weeksPerYear, setWeeksPerYear] = React.useState(48);
  const hasTrackedCompletion = React.useRef(false);

  function trackCompletionOnce() {
    if (hasTrackedCompletion.current) return;
    hasTrackedCompletion.current = true;
    event("calculator_completed", { calculator: "cancellation_cost" });
  }

  const { weeklyLoss, annualLoss } = calculateCancellationCost({
    bookingsPerWeek,
    avgBookingValue,
    cancellationRate,
    backfillRate,
    weeksPerYear,
  });

  return (
    <div className="glass-card rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div>
            <label htmlFor="cc-bookings-per-week" className="block text-sm font-medium text-slate-300 mb-2">
              Bookings per week
            </label>
            <input
              id="cc-bookings-per-week"
              type="number"
              min={0}
              className={inputClass}
              value={bookingsPerWeek}
              onChange={(e) => { setBookingsPerWeek(Number(e.target.value)); trackCompletionOnce(); }}
            />
          </div>
          <div>
            <label htmlFor="cc-avg-booking-value" className="block text-sm font-medium text-slate-300 mb-2">
              Average booking value (USD)
            </label>
            <input
              id="cc-avg-booking-value"
              type="number"
              min={0}
              className={inputClass}
              value={avgBookingValue}
              onChange={(e) => { setAvgBookingValue(Number(e.target.value)); trackCompletionOnce(); }}
            />
          </div>
          <div>
            <label htmlFor="cc-cancellation-rate" className="block text-sm font-medium text-slate-300 mb-2">
              Cancellation rate (%)
            </label>
            <input
              id="cc-cancellation-rate"
              type="number"
              min={0}
              max={100}
              className={inputClass}
              value={cancellationRate}
              onChange={(e) => { setCancellationRate(clampPercent(Number(e.target.value))); trackCompletionOnce(); }}
            />
          </div>
          <div>
            <label htmlFor="cc-backfill-rate" className="block text-sm font-medium text-slate-300 mb-2">
              Of those, % you typically rebook (backfill rate)
            </label>
            <input
              id="cc-backfill-rate"
              type="number"
              min={0}
              max={100}
              className={inputClass}
              value={backfillRate}
              onChange={(e) => { setBackfillRate(clampPercent(Number(e.target.value))); trackCompletionOnce(); }}
            />
          </div>
          <div>
            <label htmlFor="cc-weeks-per-year" className="block text-sm font-medium text-slate-300 mb-2">
              Operating weeks per year
            </label>
            <input
              id="cc-weeks-per-year"
              type="number"
              min={0}
              max={52}
              className={inputClass}
              value={weeksPerYear}
              onChange={(e) => { setWeeksPerYear(Number(e.target.value)); trackCompletionOnce(); }}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6 border-t border-white/10 pt-8 md:border-t-0 md:border-l md:pl-10 md:pt-0">
          <div>
            <p className="text-sm text-slate-400 mb-1">Estimated unrecovered revenue per week</p>
            <p className="text-3xl font-bold text-white">{formatCurrency(weeklyLoss)}</p>
          </div>
          <div>
            <p className="text-sm text-slate-400 mb-1">Estimated unrecovered revenue per year</p>
            <p className="text-4xl font-bold text-[#22D3EE]">{formatCurrency(annualLoss)}</p>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Formula: (bookings/week &times; cancellation rate &times; (1 &minus; backfill rate)) &times;
            average booking value &times; operating weeks/year. This is an estimate from the numbers you
            enter, not a measured result or a guaranteed RidgeHQ saving.
          </p>
        </div>
      </div>
    </div>
  );
}
