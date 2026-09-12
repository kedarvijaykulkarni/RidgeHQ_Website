"use client";

import * as React from "react";
import { event } from "@/lib/analytics/google-analytics";
import { calculateCapacityUtilization } from "@/lib/calculators/capacityUtilization";

function formatPercent(n: number) {
  if (!Number.isFinite(n)) return "0%";
  return `${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}%`;
}

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#22D3EE]";

export function CapacityUtilizationCalculator() {
  const [unitsAvailable, setUnitsAvailable] = React.useState(10);
  const [availableHoursPerUnitPerWeek, setAvailableHoursPerUnitPerWeek] = React.useState(8);
  const [bookedHoursPerWeek, setBookedHoursPerWeek] = React.useState(40);
  const hasTrackedCompletion = React.useRef(false);

  function trackCompletionOnce() {
    if (hasTrackedCompletion.current) return;
    hasTrackedCompletion.current = true;
    event("calculator_completed", { calculator: "capacity_utilization" });
  }

  const { totalAvailableHours, utilizationPercent } = calculateCapacityUtilization({
    unitsAvailable,
    availableHoursPerUnitPerWeek,
    bookedHoursPerWeek,
  });

  return (
    <div className="glass-card rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div>
            <label htmlFor="cu-units-available" className="block text-sm font-medium text-slate-300 mb-2">
              Units available (boats, bikes, rooms, gear sets)
            </label>
            <input
              id="cu-units-available"
              type="number"
              min={0}
              className={inputClass}
              value={unitsAvailable}
              onChange={(e) => { setUnitsAvailable(Number(e.target.value)); trackCompletionOnce(); }}
            />
          </div>
          <div>
            <label htmlFor="cu-available-hours" className="block text-sm font-medium text-slate-300 mb-2">
              Available hours per unit per week
            </label>
            <input
              id="cu-available-hours"
              type="number"
              min={0}
              className={inputClass}
              value={availableHoursPerUnitPerWeek}
              onChange={(e) => { setAvailableHoursPerUnitPerWeek(Number(e.target.value)); trackCompletionOnce(); }}
            />
          </div>
          <div>
            <label htmlFor="cu-booked-hours" className="block text-sm font-medium text-slate-300 mb-2">
              Total booked hours per week, across all units
            </label>
            <input
              id="cu-booked-hours"
              type="number"
              min={0}
              className={inputClass}
              value={bookedHoursPerWeek}
              onChange={(e) => { setBookedHoursPerWeek(Number(e.target.value)); trackCompletionOnce(); }}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6 border-t border-white/10 pt-8 md:border-t-0 md:border-l md:pl-10 md:pt-0">
          <div>
            <p className="text-sm text-slate-400 mb-1">Total available hours per week</p>
            <p className="text-3xl font-bold text-white">{totalAvailableHours.toLocaleString("en-US")}</p>
          </div>
          <div>
            <p className="text-sm text-slate-400 mb-1">Capacity utilization</p>
            <p className="text-4xl font-bold text-[#22D3EE]">{formatPercent(utilizationPercent)}</p>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Formula: booked hours &divide; (units &times; available hours per unit) &times; 100. This is
            a standalone educational calculator — check the current product pages for what RidgeHQ
            reports today rather than assuming this figure is a built-in report.
          </p>
        </div>
      </div>
    </div>
  );
}
