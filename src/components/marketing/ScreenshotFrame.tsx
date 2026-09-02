import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ScreenshotFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  /** Set on an above-the-fold screenshot (e.g. the homepage hero visual). */
  priority?: boolean
  /**
   * `sizes` hint. Default assumes one column of a two-column grid on
   * desktop. Pass `"full"` for a full-container-width placement, or a
   * custom media-query string.
   */
  sizes?: "column" | "full" | (string & {})
}

// One column of a lg:grid-cols-2 inside a max-w-7xl container.
const SIZES_COLUMN = "(min-width: 1024px) 560px, (min-width: 640px) 90vw, 100vw"
// Full max-w-7xl container width (≈1216px content box on desktop).
const SIZES_FULL = "(min-width: 1280px) 1216px, (min-width: 640px) 92vw, 100vw"

export function ScreenshotFrame({ src, alt, priority = false, sizes = "column", className, ...props }: ScreenshotFrameProps) {
  const resolvedSizes =
    sizes === "column" ? SIZES_COLUMN : sizes === "full" ? SIZES_FULL : sizes

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
        <Image
          src={src}
          alt={alt}
          fill
          sizes={resolvedSizes}
          priority={priority}
          quality={90}
          className="object-cover object-left-top"
        />
        {/* Subtle Halo */}
        <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none rounded-b-2xl"></div>
      </div>
    </div>
  )
}
