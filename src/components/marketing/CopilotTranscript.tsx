import { CheckCircle2 } from "lucide-react"

// Static mockup of a real Copilot exchange. Content is restricted to what
// business-context.md §2 verifies as shipped: the Copilot reads the day and
// can reschedule a session or move a rental/accommodation block, each behind
// a confirm step. No money-moving action is shown or implied here.
const ACTIONS = [
  { label: "Move gear reservation to the 11 AM slot" },
  { label: "Reschedule the 2 PM session to 3 PM" },
]

export function CopilotTranscript() {
  return (
    <div className="glass-card rounded-2xl border border-[var(--border)] p-6 space-y-5">
      <div className="flex justify-end">
        <p className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[var(--accent)]/15 px-4 py-2.5 text-sm text-[var(--ink)]">
          What needs attention today?
        </p>
      </div>
      <div className="flex justify-start">
        <div className="max-w-[90%] space-y-3 rounded-2xl rounded-tl-sm border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3">
          <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">
            Two things: the 9 AM Discovery Dive has 6 bookings but only 4 sets of fins
            reserved — the gear block is short. And the 2 PM session overlaps an
            instructor&apos;s day off that just got approved.
          </p>
          <div className="space-y-2 pt-1">
            {ACTIONS.map((action) => (
              <div
                key={action.label}
                className="flex items-center justify-between gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2"
              >
                <span className="text-xs text-[var(--ink)]">{action.label}</span>
                <span className="shrink-0 rounded-md bg-[var(--accent)] px-2.5 py-1 text-xs font-medium text-[var(--cta-text)]">
                  Confirm
                </span>
              </div>
            ))}
          </div>
          <p className="flex items-center gap-1.5 text-xs text-[var(--ink-tertiary)]">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            Each action is reversible and requires your confirmation before it runs.
          </p>
        </div>
      </div>
    </div>
  )
}
