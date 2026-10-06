import * as React from "react"
import { Integration } from "@/lib/config/integrations"
import { cn } from "@/lib/utils"
import { Badge, type BadgeProps } from "@/components/ui/Badge"

interface IntegrationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  integration: Integration
}

const STATE_LABEL: Record<Integration["state"], string> = {
  implemented: "Connected & live",
  partial: "Partially available",
  planned: "Coming soon",
}

const STATE_VARIANT: Record<Integration["state"], BadgeProps["variant"]> = {
  implemented: "default",
  partial: "outline",
  planned: "secondary",
}

export function IntegrationCard({ integration, className, ...props }: IntegrationCardProps) {
  return (
    <div className={cn("glass-card p-6 flex flex-col gap-4 h-full", className)} {...props}>
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-[var(--ink)]">{integration.name}</h3>
        <Badge variant={STATE_VARIANT[integration.state]}>
          {STATE_LABEL[integration.state]}
        </Badge>
      </div>
      <div className="space-y-2 flex-1">
        <p className="text-xs text-[var(--accent)] font-medium tracking-wide uppercase">{integration.category}</p>
        <p className="text-sm text-[var(--ink-secondary)]">{integration.description}</p>
      </div>
    </div>
  )
}
