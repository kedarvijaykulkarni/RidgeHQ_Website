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
    <div className="glass-card rounded-2xl border border-[var(--border)] p-6 md:p-10 space-y-10">
      <div className="space-y-8">
        {readinessQuestions.map((q, qIndex) => (
          <fieldset key={q.id}>
            <legend className="text-sm font-medium text-ink-secondary mb-3">{q.question}</legend>
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
                        ? "border-accent bg-accent/10 text-ink"
                        : "border-[var(--border-strong)] bg-[var(--bg-elevated)] text-ink-secondary hover:border-[var(--accent-border)]"
                    }`}
                  >
                    <input
                      id={inputId}
                      type="radio"
                      name={q.id}
                      className="accent-accent"
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

      <div className="border-t border-[var(--border)] pt-8" aria-live="polite">
        {band ? (
          <div className="space-y-2">
            <p className="text-sm text-ink-secondary">Your result</p>
            <p className="text-2xl font-bold text-accent">{band.label}</p>
            <p className="text-ink-secondary leading-relaxed">{band.description}</p>
          </div>
        ) : (
          <p className="text-sm text-ink-tertiary">Answer every question above to see your result.</p>
        )}
      </div>
    </div>
  );
}
