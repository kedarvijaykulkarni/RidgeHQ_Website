import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/ui/Layout"
import { footerNav } from "@/lib/config/navigation"

const socialLinks: { label: string; href: string; path: string }[] = [
  {
    label: "X",
    href: "https://x.com/ridgehqapp",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ridgehqapp/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "Reddit",
    href: "https://www.reddit.com/user/ridgehq/",
    path: "M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.762.075-5.256.855-7.017 2.031-.478-.46-1.126-.746-1.842-.746C1.193 9.134 0 10.32 0 11.779c0 .969.527 1.815 1.308 2.271-.03.226-.045.455-.045.688 0 3.475 4.041 6.304 9.009 6.304 4.966 0 9.007-2.829 9.007-6.304 0-.232-.015-.461-.045-.687.783-.456 1.311-1.302 1.311-2.272zM6.539 12.849c0-.918.746-1.663 1.663-1.663.918 0 1.664.745 1.664 1.663 0 .917-.746 1.663-1.664 1.663-.917.001-1.663-.746-1.663-1.663zm9.457 4.161c-.797.798-2.048 1.185-3.824 1.185l-.013-.003-.013.003c-1.777 0-3.028-.387-3.824-1.185-.145-.145-.145-.381 0-.526.145-.145.381-.145.526 0 .65.65 1.729.965 3.298.965l.013.003.013-.003c1.569 0 2.648-.315 3.298-.965.145-.145.381-.146.526 0 .145.145.145.381 0 .526zm-.964-2.498c-.917 0-1.663-.746-1.663-1.663 0-.918.746-1.663 1.663-1.663.918 0 1.664.745 1.664 1.663 0 .917-.746 1.663-1.664 1.663z",
  },
  {
    label: "YouTube",
    href: "http://youtube.com/@ridgehq-app",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ridgehq",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.848 3.37-1.848 3.601 0 4.267 2.37 4.267 5.455v6.284zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
]

const linkColumns: { heading: string; links: { title: string; href: string }[] }[] = [
  { heading: "Products", links: footerNav.products },
  { heading: "Built For", links: footerNav.builtFor },
  { heading: "Company", links: footerNav.company },
  { heading: "Legal", links: footerNav.legal },
]

export function Footer() {
  return (
    <footer
      className="relative isolate border-t border-[var(--border)] bg-[#0D1116] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/footer.svg)" }}
    >
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(13,17,22,0.45)_0%,rgba(13,17,22,0.7)_45%,rgba(13,17,22,0.88)_100%)]"
        aria-hidden="true"
      />

      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col gap-4">
            <Link
              href="/"
              aria-label="RidgeHQ Home"
              className="font-mono text-lg font-semibold tracking-tight text-[var(--ink)]"
            >
              <span className="text-gradient-accent">R</span>idge
              <span className="text-gradient-accent">HQ</span>
            </Link>
            <p className="max-w-xs text-sm text-[var(--ink-tertiary)]">
              Run your entire activity business from one HQ.
            </p>
            <div className="mt-2 flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] text-[var(--ink-tertiary)] transition-colors hover:border-[var(--accent-border)] hover:text-[var(--accent)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {linkColumns.map((col) => (
            <nav key={col.heading} aria-label={col.heading} className="flex flex-col gap-3">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-secondary)]">
                {col.heading}
              </h2>
              <ul className="flex flex-col gap-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-[var(--ink-tertiary)] transition-colors hover:text-[var(--accent)]"
                    >
                      {l.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-[var(--border)] pt-6 text-xs text-[var(--ink-tertiary)] sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} RidgeHQ. All rights reserved.</p>
          <div className="flex items-center gap-x-5 gap-y-2">
            <Link href="/privacy" className="transition-colors hover:text-[var(--accent)]">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-[var(--accent)]">Terms</Link>
            <Link href="/security" className="transition-colors hover:text-[var(--accent)]">Security</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
