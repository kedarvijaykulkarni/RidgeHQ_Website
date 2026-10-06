import * as React from "react"
import { cn } from "@/lib/utils"

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value: string
}

const Stat = React.forwardRef<HTMLDivElement, StatProps>(
  ({ label, value, className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-1", className)} {...props}>
      <span className="font-display font-bold text-3xl text-[var(--ink)]">{value}</span>
      <span className="text-xs font-semibold uppercase tracking-wide text-[var(--ink-tertiary)]">
        {label}
      </span>
    </div>
  )
)
Stat.displayName = "Stat"

export { Stat }
