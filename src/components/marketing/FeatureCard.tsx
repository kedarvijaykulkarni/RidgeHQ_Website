import * as React from "react"
import { cn } from "@/lib/utils"

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  icon?: React.ReactNode
}

export function FeatureCard({ title, description, icon, className, ...props }: FeatureCardProps) {
  return (
    <div className={cn("glass-card p-6 flex flex-col gap-4", className)} {...props}>
      {icon && (
        <div className="w-12 h-12 rounded-lg bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1]">
          {icon}
        </div>
      )}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
