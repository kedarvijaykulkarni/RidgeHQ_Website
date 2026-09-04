"use client";

import * as React from "react";

function formatCurrency(n: number) {
  if (!Number.isFinite(n)) return "$0";
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#22D3EE]";

export function AdminTimeCostCalculator() {
  const [hoursPerWeek, setHoursPerWeek] = React.useState(8);
  const [hourlyCost, setHourlyCost] = React.useState(35);
  const [weeksPerYear, setWeeksPerYear] = React.useState(50);

  const weeklyCost = hoursPerWeek * hourlyCost;
  const annualCost = weeklyCost * weeksPerYear;

  return (
    <div className="glass-card rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div>
            <label htmlFor="hours-per-week" className="block text-sm font-medium text-slate-300 mb-2">
              Hours per week spent re-keying bookings, chasing waivers, or reconciling gear/staff
              across separate tools
            </label>
            <input
              id="hours-per-week"
              type="number"
              min={0}
              className={inputClass}
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="hourly-cost" className="block text-sm font-medium text-slate-300 mb-2">
              Fully-loaded cost of that time (USD/hour)
            </label>
            <input
              id="hourly-cost"
              type="number"
              min={0}
              className={inputClass}
              value={hourlyCost}
              onChange={(e) => setHourlyCost(Number(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="admin-weeks-per-year" className="block text-sm font-medium text-slate-300 mb-2">
              Operating weeks per year
            </label>
            <input
              id="admin-weeks-per-year"
              type="number"
              min={0}
              max={52}
              className={inputClass}
              value={weeksPerYear}
              onChange={(e) => setWeeksPerYear(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6 border-t border-white/10 pt-8 md:border-t-0 md:border-l md:pl-10 md:pt-0">
          <div>
            <p className="text-sm text-slate-400 mb-1">Estimated admin cost per week</p>
            <p className="text-3xl font-bold text-white">{formatCurrency(weeklyCost)}</p>
          </div>
          <div>
            <p className="text-sm text-slate-400 mb-1">Estimated admin cost per year</p>
            <p className="text-4xl font-bold text-[#22D3EE]">{formatCurrency(annualCost)}</p>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Formula: hours/week &times; hourly cost &times; operating weeks/year. This is an estimate
            from the numbers you enter, not a measured result or a guaranteed RidgeHQ saving — edit the
            inputs above to match your own operation.
          </p>
        </div>
      </div>
    </div>
  );
}
