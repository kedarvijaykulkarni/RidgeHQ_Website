"use client";

import * as React from "react";
import { event } from "@/lib/analytics/google-analytics";
import { calculateRevenueLeakage } from "@/lib/calculators/revenueLeakage";
import { clampPercent } from "@/lib/calculators/clampPercent";

function formatCurrency(n: number) {
  if (!Number.isFinite(n)) return "$0";
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#22D3EE]";

export function RevenueLeakageCalculator() {
  const [bookingsPerWeek, setBookingsPerWeek] = React.useState(60);
  const [avgBookingValue, setAvgBookingValue] = React.useState(150);
  const [leakageRate, setLeakageRate] = React.useState(5);
  const [weeksPerYear, setWeeksPerYear] = React.useState(48);
  const hasTrackedCompletion = React.useRef(false);

  function trackCompletionOnce() {
    if (hasTrackedCompletion.current) return;
    hasTrackedCompletion.current = true;
    event("calculator_completed", { calculator: "revenue_leakage" });
  }

  const { weeklyLeakage, annualLeakage } = calculateRevenueLeakage({
    bookingsPerWeek,
    avgBookingValue,
    leakageRate,
    weeksPerYear,
  });

  return (
    <div className="glass-card rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div>
            <label htmlFor="rl-bookings-per-week" className="block text-sm font-medium text-slate-300 mb-2">
              Bookings per week
            </label>
            <input
              id="rl-bookings-per-week"
              type="number"
              min={0}
              className={inputClass}
              value={bookingsPerWeek}
              onChange={(e) => { setBookingsPerWeek(Number(e.target.value)); trackCompletionOnce(); }}
            />
          </div>
          <div>
            <label htmlFor="rl-avg-booking-value" className="block text-sm font-medium text-slate-300 mb-2">
              Average booking value (USD)
            </label>
            <input
              id="rl-avg-booking-value"
              type="number"
              min={0}
              className={inputClass}
              value={avgBookingValue}
              onChange={(e) => { setAvgBookingValue(Number(e.target.value)); trackCompletionOnce(); }}
            />
          </div>
          <div>
            <label htmlFor="rl-leakage-rate" className="block text-sm font-medium text-slate-300 mb-2">
              Estimated leakage rate (%) &mdash; missed charges, unbilled add-ons, pricing errors
            </label>
            <input
              id="rl-leakage-rate"
              type="number"
              min={0}
              max={100}
              className={inputClass}
              value={leakageRate}
              onChange={(e) => { setLeakageRate(clampPercent(Number(e.target.value))); trackCompletionOnce(); }}
            />
          </div>
          <div>
            <label htmlFor="rl-weeks-per-year" className="block text-sm font-medium text-slate-300 mb-2">
              Operating weeks per year
            </label>
            <input
              id="rl-weeks-per-year"
              type="number"
              min={0}
              max={52}
              className={inputClass}
              value={weeksPerYear}
              onChange={(e) => { setWeeksPerYear(Number(e.target.value)); trackCompletionOnce(); }}
            />
          </div>
        </div>

        <div
          className="flex flex-col justify-center space-y-6 border-t border-white/10 pt-8 md:border-t-0 md:border-l md:pl-10 md:pt-0"
          aria-live="polite"
        >
          <div>
            <p className="text-sm text-slate-400 mb-1">Estimated revenue leaked per week</p>
            <p className="text-3xl font-bold text-white">{formatCurrency(weeklyLeakage)}</p>
          </div>
          <div>
            <p className="text-sm text-slate-400 mb-1">Estimated revenue leaked per year</p>
            <p className="text-4xl font-bold text-[#22D3EE]">{formatCurrency(annualLeakage)}</p>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Formula: bookings/week &times; average booking value &times; leakage rate &times; operating
            weeks/year. The leakage rate is your own estimate — this is not a measured result or a
            guaranteed RidgeHQ saving.
          </p>
        </div>
      </div>
    </div>
  );
}
