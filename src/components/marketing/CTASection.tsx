import * as React from "react"
import { Container } from "@/components/ui/Layout"
import { Button } from "@/components/ui/Button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface CTASectionProps {
  headline?: string
  description?: string
  primaryCtaText?: string
  primaryCtaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
}

export function CTASection({
  headline = "Ready to connect your operation?",
  description = "Join the operators using RidgeHQ to manage their day from one unified platform.",
  primaryCtaText = "Book a Demo",
  primaryCtaHref = "/book-demo",
  secondaryCtaText = "Explore Features",
  secondaryCtaHref = "/features"
}: CTASectionProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[var(--accent-soft)]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent)]/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <Container className="relative text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{headline}</h2>
          <p className="text-lg md:text-xl text-slate-400">{description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href={primaryCtaHref}>
                {primaryCtaText}
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            {secondaryCtaText && secondaryCtaHref && (
              <Button size="lg" variant="outline" asChild>
                <Link href={secondaryCtaHref}>
                  {secondaryCtaText}
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
