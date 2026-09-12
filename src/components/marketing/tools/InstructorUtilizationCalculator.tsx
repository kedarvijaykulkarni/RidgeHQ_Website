"use client";

import * as React from "react";
import { event } from "@/lib/analytics/google-analytics";
import { calculateInstructorUtilization } from "@/lib/calculators/instructorUtilization";

function formatPercent(n: number) {
  if (!Number.isFinite(n)) return "0%";
  return `${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}%`;
}

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#22D3EE]";

export function InstructorUtilizationCalculator() {
  const [instructorCount, setInstructorCount] = React.useState(5);
  const [availableHoursPerWeek, setAvailableHoursPerWeek] = React.useState(30);
  const [bookedHoursPerWeek, setBookedHoursPerWeek] = React.useState(90);
  const hasTrackedCompletion = React.useRef(false);

  function trackCompletionOnce() {
    if (hasTrackedCompletion.current) return;
    hasTrackedCompletion.current = true;
    event("calculator_completed", { calculator: "instructor_utilization" });
  }

  const { totalAvailableHours, utilizationPercent } = calculateInstructorUtilization({
    instructorCount,
    availableHoursPerWeek,
    bookedHoursPerWeek,
  });

  return (
    <div className="glass-card rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div>
            <label htmlFor="iu-instructor-count" className="block text-sm font-medium text-slate-300 mb-2">
              Number of instructors/guides
            </label>
            <input
              id="iu-instructor-count"
              type="number"
              min={0}
              className={inputClass}
              value={instructorCount}
              onChange={(e) => { setInstructorCount(Number(e.target.value)); trackCompletionOnce(); }}
            />
          </div>
          <div>
            <label htmlFor="iu-available-hours" className="block text-sm font-medium text-slate-300 mb-2">
              Available hours per instructor per week
            </label>
            <input
              id="iu-available-hours"
              type="number"
              min={0}
              className={inputClass}
              value={availableHoursPerWeek}
              onChange={(e) => { setAvailableHoursPerWeek(Number(e.target.value)); trackCompletionOnce(); }}
            />
          </div>
          <div>
            <label htmlFor="iu-booked-hours" className="block text-sm font-medium text-slate-300 mb-2">
              Total booked hours per week, across all instructors
            </label>
            <input
              id="iu-booked-hours"
              type="number"
              min={0}
              className={inputClass}
              value={bookedHoursPerWeek}
              onChange={(e) => { setBookedHoursPerWeek(Number(e.target.value)); trackCompletionOnce(); }}
            />
          </div>
        </div>

        <div
          className="flex flex-col justify-center space-y-6 border-t border-white/10 pt-8 md:border-t-0 md:border-l md:pl-10 md:pt-0"
          aria-live="polite"
        >
          <div>
            <p className="text-sm text-slate-400 mb-1">Total available hours per week</p>
            <p className="text-3xl font-bold text-white">{totalAvailableHours.toLocaleString("en-US")}</p>
          </div>
          <div>
            <p className="text-sm text-slate-400 mb-1">Instructor utilization</p>
            <p className="text-4xl font-bold text-[#22D3EE]">{formatPercent(utilizationPercent)}</p>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Formula: booked hours &divide; (instructor count &times; available hours per instructor)
            &times; 100. This is a standalone educational calculator — RidgeHQ does not currently
            publish an automated instructor-utilization report.
          </p>
        </div>
      </div>
    </div>
  );
}
