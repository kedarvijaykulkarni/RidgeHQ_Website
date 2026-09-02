"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { mainNav, type NavItem } from "@/lib/config/navigation";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState<string | null>(null);

  const close = React.useCallback(() => setOpen(false), []);

  // Lock body scroll + close on Escape while the panel is open.
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center rounded-lg p-2 text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-[var(--border)] bg-[var(--bg)]">
          <nav className="px-4 py-4">
            <ul className="flex flex-col divide-y divide-[var(--border)]">
              {mainNav.map((item: NavItem) => {
                const groups = item.groups ?? (item.children ? [{ title: "", items: item.children }] : []);
                const hasMenu = groups.length > 0;
                const isExpanded = expanded === item.href;

                return (
                  <li key={item.href} className="py-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={close}
                        className="flex-1 py-2 text-base font-medium text-[var(--ink)]"
                      >
                        {item.title}
                      </Link>
                      {hasMenu && (
                        <button
                          type="button"
                          aria-label={`Toggle ${item.title} section`}
                          aria-expanded={isExpanded}
                          onClick={() => setExpanded(isExpanded ? null : item.href)}
                          className="p-2 text-[var(--ink-secondary)]"
                        >
                          <ChevronDown
                            className={cn("w-4 h-4 transition-transform", isExpanded && "rotate-180")}
                          />
                        </button>
                      )}
                    </div>

                    {hasMenu && isExpanded && (
                      <div className="pb-2 pl-3">
                        {groups.map((group, gi) => (
                          <div key={group.title || gi} className="mb-2 last:mb-0">
                            {group.title && (
                              <p className="px-1 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-[var(--ink-tertiary)]">
                                {group.title}
                              </p>
                            )}
                            <ul>
                              {group.items.map((link) => (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    onClick={close}
                                    className="block rounded-lg px-1 py-2 text-sm text-[var(--ink-secondary)] hover:text-[var(--accent)]"
                                  >
                                    {link.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              <Button variant="ghost" className="w-full text-[var(--ink)]" asChild>
                <Link href="/contact" onClick={close}>Contact</Link>
              </Button>
              <Button
                className="w-full bg-[var(--cta)] hover:bg-[var(--cta-hover)] text-[var(--cta-text)] border-none font-bold"
                asChild
              >
                <Link href="/book-demo" onClick={close}>Book a Demo</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
