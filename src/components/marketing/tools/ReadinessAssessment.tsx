"use client";

import * as React from "react";
import { event } from "@/lib/analytics/google-analytics";
import { readinessQuestions, scoreReadiness, getReadinessBand } from "@/lib/calculators/readinessAssessment";

export function ReadinessAssessment() {
  const [answers, setAnswers] = React.useState<(number | null)[]>(
    readinessQuestions.map(() => null),
  );
  const hasTrackedCompletion = React.useRef(false);

  const allAnswered = answers.every((a) => a !== null);
  const score = allAnswered ? scoreReadiness(answers as number[]) : null;
  const band = score !== null ? getReadinessBand(score) : null;

  function selectAnswer(questionIndex: number, points: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[questionIndex] = points;
      return next;
    });

    if (!hasTrackedCompletion.current) {
      hasTrackedCompletion.current = true;
      event("calculator_completed", { calculator: "readiness_assessment" });
    }
  }

  return (
    <div className="glass-card rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10 space-y-10">
      <div className="space-y-8">
        {readinessQuestions.map((q, qIndex) => (
          <fieldset key={q.id}>
            <legend className="text-sm font-medium text-slate-300 mb-3">{q.question}</legend>
            <div className="flex flex-col gap-2">
              {q.options.map((option) => {
                const inputId = `${q.id}-${option.points}`;
                const checked = answers[qIndex] === option.points;
                return (
                  <label
                    key={inputId}
                    htmlFor={inputId}
                    className={`flex items-center gap-3 rounded-lg border px-4 py-2.5 cursor-pointer transition-colors ${
                      checked
                        ? "border-[#22D3EE] bg-[#22D3EE]/10 text-white"
                        : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20"
                    }`}
                  >
                    <input
                      id={inputId}
                      type="radio"
                      name={q.id}
                      className="accent-[#22D3EE]"
                      checked={checked}
                      onChange={() => selectAnswer(qIndex, option.points)}
                    />
                    {option.label}
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="border-t border-white/10 pt-8" aria-live="polite">
        {band ? (
          <div className="space-y-2">
            <p className="text-sm text-slate-400">Your result</p>
            <p className="text-2xl font-bold text-[#22D3EE]">{band.label}</p>
            <p className="text-slate-300 leading-relaxed">{band.description}</p>
          </div>
        ) : (
          <p className="text-sm text-slate-500">Answer every question above to see your result.</p>
        )}
      </div>
    </div>
  );
}
