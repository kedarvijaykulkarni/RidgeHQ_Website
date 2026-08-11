import * as React from "react"
import { Vertical } from "@/lib/config/verticals"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface VerticalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  vertical: Vertical
}

export function VerticalCard({ vertical, className, ...props }: VerticalCardProps) {
  return (
    <Link href={`/solutions/${vertical.slug}`} className="group block h-full">
      <div className={cn("glass-card h-full p-6 flex flex-col gap-4 glass-card-hover", className)} {...props}>
        <div className="flex-1 space-y-2">
          <h3 className="text-xl font-semibold tracking-tight group-hover:text-[#6366F1] transition-colors">{vertical.name}</h3>
          <p className="text-sm text-slate-400 line-clamp-2">{vertical.heroDescription}</p>
        </div>
        <div className="flex items-center text-[#6366F1] text-sm font-medium mt-4">
          View solution <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
