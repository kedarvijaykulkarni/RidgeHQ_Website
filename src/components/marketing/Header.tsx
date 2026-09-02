import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ChevronRight } from "lucide-react"
import { Container } from "@/components/ui/Layout"
import { NavMenu } from "@/components/marketing/NavMenu"
import { MobileNav } from "@/components/marketing/MobileNav"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-mono text-lg font-semibold tracking-tight text-[var(--ink)]">
                <span className="text-gradient-accent">R</span>idge<span className="text-gradient-accent">HQ</span>
              </span>
            </Link>
            <NavMenu />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex text-[var(--ink)] hover:text-[var(--accent)]" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
            <Button className="hidden sm:inline-flex bg-[var(--cta)] hover:bg-[var(--cta-hover)] text-[var(--cta-text)] border-none font-bold" asChild>
              <Link href="/book-demo">Book a Demo <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" /></Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  )
}
