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
  const toggleRef = React.useRef<HTMLButtonElement>(null);
  const panelRef = React.useRef<HTMLDivElement>(null);
  const wasOpen = React.useRef(false);

  const close = React.useCallback(() => setOpen(false), []);

  // Lock body scroll, close on Escape, and trap Tab focus while the panel is open.
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Restore focus to the toggle button after the panel closes.
  React.useEffect(() => {
    if (!open && wasOpen.current) toggleRef.current?.focus();
    wasOpen.current = open;
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center rounded-lg p-2 text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {open && (
        <div
          ref={panelRef}
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-[var(--border)] bg-[var(--bg)]"
        >
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
                        {item.groupsLabel && (
                          <p className="px-1 pt-2 pb-1 text-xs font-bold uppercase tracking-wide text-[var(--ink-secondary)]">
                            {item.groupsLabel}
                          </p>
                        )}
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

                        {item.groups && item.secondaryGroups && item.secondaryGroups.length > 0 && (
                          <Link
                            href={item.groupsViewAllHref ?? item.href}
                            onClick={close}
                            className="mt-1 block rounded-lg px-1 py-2 text-sm font-semibold text-[var(--accent)]"
                          >
                            {item.groupsViewAllLabel ?? item.viewAllLabel ?? "See all"}
                          </Link>
                        )}

                        {item.secondaryGroups && item.secondaryGroups.length > 0 && (
                          <>
                            <div className="my-2 border-t border-[var(--border)]" />
                            {item.secondaryGroupsLabel && (
                              <p className="px-1 pt-2 pb-1 text-xs font-bold uppercase tracking-wide text-[var(--ink-secondary)]">
                                {item.secondaryGroupsLabel}
                              </p>
                            )}
                            {item.secondaryGroups.map((group, gi) => (
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
                            {item.secondaryGroupsViewAllHref && (
                              <Link
                                href={item.secondaryGroupsViewAllHref}
                                onClick={close}
                                className="mt-1 block rounded-lg px-1 py-2 text-sm font-semibold text-[var(--accent)]"
                              >
                                {item.secondaryGroupsViewAllLabel ?? "See all"}
                              </Link>
                            )}
                          </>
                        )}
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
