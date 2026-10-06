import * as React from "react"
import { cn } from "@/lib/utils"

interface VideoFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Source basename without extension; `.webm` and `.mp4` are both loaded. */
  src: string
  /** Poster image shown before the video plays / while it loads. */
  poster: string
  /** Describes what the clip shows, for assistive tech. */
  label: string
}

/**
 * Same browser-chrome shell as <ScreenshotFrame />, but plays a short,
 * muted, looping clip instead of a still. Replaces heavyweight animated
 * GIFs — a WebM/MP4 pair is an order of magnitude smaller.
 */
export function VideoFrame({ src, poster, label, className, ...props }: VideoFrameProps) {
  return (
    <div className={cn("relative rounded-2xl overflow-hidden border border-border shadow-2xl bg-bg-elevated/50 backdrop-blur-sm", className)} {...props}>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-elevated/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
        </div>
      </div>
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-bg-elevated">
        <video
          className="w-full h-full object-cover object-left-top"
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-label={label}
        >
          <source src={`${src}.webm`} type="video/webm" />
          <source src={`${src}.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 ring-1 ring-inset ring-border pointer-events-none rounded-b-2xl"></div>
      </div>
    </div>
  )
}
