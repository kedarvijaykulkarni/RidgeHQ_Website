import * as React from "react"
import { Integration } from "@/lib/config/integrations"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/Badge"
import { ArrowRight } from "lucide-react"

interface IntegrationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  integration: Integration
}

export function IntegrationCard({ integration, className, ...props }: IntegrationCardProps) {
  return (
    <div className={cn("glass-card p-6 flex flex-col gap-4 group glass-card-hover cursor-pointer h-full", className)} {...props}>
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">{integration.name}</h3>
        <Badge 
          variant={integration.state === 'implemented' ? 'default' : 'secondary'}
        >
          {integration.state}
        </Badge>
      </div>
      <div className="space-y-2 flex-1">
        <p className="text-xs text-[var(--accent)] font-medium tracking-wide uppercase">{integration.category}</p>
        <p className="text-sm text-[var(--ink-secondary)]">{integration.description}</p>
      </div>
      <div className="flex items-center text-[var(--accent)] text-sm font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
        Connect <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  )
}
