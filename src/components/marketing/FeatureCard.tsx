import * as React from "react"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  icon?: React.ReactNode
}

export function FeatureCard({ title, description, icon, className, ...props }: FeatureCardProps) {
  return (
    <div className={cn("glass-card p-6 flex flex-col gap-4 group glass-card-hover cursor-pointer h-full", className)} {...props}>
      {icon && (
        <div className="w-12 h-12 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center text-[var(--accent)]">
          {icon}
        </div>
      )}
      <div className="space-y-2 flex-1">
        <h3 className="text-xl font-semibold tracking-tight text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">{title}</h3>
        <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">{description}</p>
      </div>
      <div className="flex items-center text-[var(--accent)] text-sm font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
        Learn more <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  )
}
