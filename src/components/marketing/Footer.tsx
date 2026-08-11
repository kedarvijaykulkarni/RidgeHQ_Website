import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/ui/Layout"

const socialLinks = [
  { label: "GitHub", href: "https://github.com/ridgehq" },
  { label: "Twitter", href: "https://twitter.com/ridgehq" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ridgehq" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-alt)]">
      <Container className="py-6 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="RidgeHQ Home"
          className="font-mono text-sm font-semibold tracking-tight text-[var(--ink)]"
        >
          <span className="text-gradient-accent">R</span>idge<span className="text-gradient-accent">HQ</span>
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[var(--ink-tertiary)]">
          {socialLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Link href="/terms" className="hover:text-[var(--accent)] transition-colors">Terms</Link>
          <Link href="/privacy" className="hover:text-[var(--accent)] transition-colors">Privacy</Link>
        </div>
      </Container>
    </footer>
  )
}
