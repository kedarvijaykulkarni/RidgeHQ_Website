import * as React from "react"
import { cn } from "@/lib/utils"

interface ScreenshotFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
}

export function ScreenshotFrame({ src, alt, className, ...props }: ScreenshotFrameProps) {
  return (
    <div className={cn("relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 backdrop-blur-sm", className)} {...props}>
      {/* Fake Browser/App Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-slate-950/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
        </div>
      </div>
      {/* Content */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-950">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-left-top"
          loading="lazy"
        />
        {/* Subtle Halo */}
        <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none rounded-b-2xl"></div>
      </div>
    </div>
  )
}
