import * as React from "react"
import Image from "next/image"
import { Testimonial as TestimonialData } from "@/lib/config/testimonials"
import { cn } from "@/lib/utils"

interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: TestimonialData[]
}

// Renders nothing when `testimonials` is empty — never fill this with
// illustrative/fabricated quotes. See src/lib/config/testimonials.ts.
export function Testimonial({ testimonials, className, ...props }: TestimonialProps) {
  if (testimonials.length === 0) return null

  return (
    <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)} {...props}>
      {testimonials.map((t) => (
        <figure key={`${t.name}-${t.business}`} className="glass-card p-6 flex flex-col gap-4">
          <blockquote className="text-base text-[var(--ink)] leading-relaxed">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <figcaption className="flex items-center gap-3">
            {t.avatarSrc && (
              <Image
                src={t.avatarSrc}
                alt={t.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            <div>
              <p className="text-sm font-semibold text-[var(--ink)]">{t.name}</p>
              <p className="text-xs text-[var(--ink-tertiary)]">
                {t.role}, {t.business}
              </p>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
