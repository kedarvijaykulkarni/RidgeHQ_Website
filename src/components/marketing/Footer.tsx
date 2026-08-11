import * as React from "react"
import Link from "next/link"
import { footerNav } from "@/lib/config/navigation"
import { Container } from "@/components/ui/Layout"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <Link href="/" className="text-xl font-bold tracking-tight text-white">
              RidgeHQ
            </Link>
            <p className="text-sm text-slate-400 max-w-xs">
              The operating system for activity businesses. Run your entire operational day from one HQ.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerNav.solutions.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} RidgeHQ. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
