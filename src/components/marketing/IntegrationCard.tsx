import * as React from "react"
import { Integration } from "@/lib/config/integrations"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/Badge"

interface IntegrationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  integration: Integration
}

export function IntegrationCard({ integration, className, ...props }: IntegrationCardProps) {
  return (
    <div className={cn("glass-card p-6 flex flex-col gap-4", className)} {...props}>
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold">{integration.name}</h3>
        <Badge 
          variant={integration.state === 'implemented' ? 'default' : 'secondary'}
        >
          {integration.state}
        </Badge>
      </div>
      <div className="space-y-1">
        <p className="text-xs text-[#6366F1] font-medium tracking-wide uppercase">{integration.category}</p>
        <p className="text-sm text-slate-400">{integration.description}</p>
      </div>
    </div>
  )
}
