import * as React from "react"
import Image from "next/image"
import { ClientLogo } from "@/lib/config/logos"
import { cn } from "@/lib/utils"

interface LogoBandProps extends React.HTMLAttributes<HTMLDivElement> {
  logos: ClientLogo[]
}

// Renders nothing when `logos` is empty — never substitute a placeholder logo.
// See src/lib/config/logos.ts.
export function LogoBand({ logos, className, ...props }: LogoBandProps) {
  if (logos.length === 0) return null

  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-8", className)} {...props}>
      {logos.map((logo) => {
        const image = (
          <Image
            src={logo.src}
            alt={logo.name}
            width={120}
            height={40}
            className={cn(
              "h-8 w-auto object-contain opacity-70",
              logo.href && "transition-opacity hover:opacity-100"
            )}
          />
        )
        return logo.href ? (
          <a key={logo.name} href={logo.href} target="_blank" rel="noopener noreferrer">
            {image}
          </a>
        ) : (
          <span key={logo.name}>{image}</span>
        )
      })}
    </div>
  )
}
