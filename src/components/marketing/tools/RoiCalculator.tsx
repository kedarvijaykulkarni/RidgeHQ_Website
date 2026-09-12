"use client";

import * as React from "react";
import { event } from "@/lib/analytics/google-analytics";
import { calculateRoi } from "@/lib/calculators/roi";

function formatCurrency(n: number) {
  if (!Number.isFinite(n)) return "$0";
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function formatPercent(n: number) {
  if (!Number.isFinite(n)) return "0%";
  return `${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}%`;
}

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#22D3EE]";

export function RoiCalculator() {
  const [monthlyCost, setMonthlyCost] = React.useState(300);
  const [monthlySavingsOrGains, setMonthlySavingsOrGains] = React.useState(600);
  const hasTrackedCompletion = React.useRef(false);

  function trackCompletionOnce() {
    if (hasTrackedCompletion.current) return;
    hasTrackedCompletion.current = true;
    event("calculator_completed", { calculator: "roi" });
  }

  const { netMonthlyValue, annualRoiPercent } = calculateRoi({ monthlyCost, monthlySavingsOrGains });

  return (
    <div className="glass-card rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div>
            <label htmlFor="roi-monthly-cost" className="block text-sm font-medium text-slate-300 mb-2">
              Monthly cost of the system/process being evaluated (USD)
            </label>
            <input
              id="roi-monthly-cost"
              type="number"
              min={0}
              className={inputClass}
              value={monthlyCost}
              onChange={(e) => { setMonthlyCost(Number(e.target.value)); trackCompletionOnce(); }}
            />
          </div>
          <div>
            <label htmlFor="roi-monthly-gains" className="block text-sm font-medium text-slate-300 mb-2">
              Your own estimate of monthly savings or gains (USD) &mdash; e.g. from the calculators above
            </label>
            <input
              id="roi-monthly-gains"
              type="number"
              min={0}
              className={inputClass}
              value={monthlySavingsOrGains}
              onChange={(e) => { setMonthlySavingsOrGains(Number(e.target.value)); trackCompletionOnce(); }}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6 border-t border-white/10 pt-8 md:border-t-0 md:border-l md:pl-10 md:pt-0">
          <div>
            <p className="text-sm text-slate-400 mb-1">Net value per month</p>
            <p className="text-3xl font-bold text-white">{formatCurrency(netMonthlyValue)}</p>
          </div>
          <div>
            <p className="text-sm text-slate-400 mb-1">Annual ROI</p>
            <p className="text-4xl font-bold text-[#22D3EE]">{formatPercent(annualRoiPercent)}</p>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Formula: ROI% = (annual gains &minus; annual cost) &divide; annual cost &times; 100. The
            monthly-gains figure is your own estimate — plug in a number from the No-Show, Admin Time,
            Cancellation, or Revenue Leakage calculators above, not a RidgeHQ-guaranteed saving.
          </p>
        </div>
      </div>
    </div>
  );
}
