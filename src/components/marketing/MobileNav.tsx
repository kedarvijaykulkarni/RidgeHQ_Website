"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { mainNav, type NavItem, type NavGroup, type NavLink } from "@/lib/config/navigation";
import { NavIcon } from "@/components/marketing/nav-icons";
import { cn } from "@/lib/utils";

const PANEL_ID = "mobile-nav-panel";

function MobileLink({ link, onNavigate }: { link: NavLink; onNavigate: () => void }) {
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className="group/link flex min-h-11 items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-[var(--accent-soft)]"
    >
      {link.icon && (
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
          <NavIcon name={link.icon} className="h-4 w-4" />
        </span>
      )}
      <span className="min-w-0">
        <span className="block text-[15px] font-medium text-[var(--ink)] group-hover/link:text-[var(--accent)] transition-colors">
          {link.title}
        </span>
        {link.description && (
          <span className="block truncate text-xs text-[var(--ink-tertiary)]">{link.description}</span>
        )}
      </span>
    </Link>
  );
}

/** One axis of a menu (e.g. "Built For"), rendered as a flat, always-expanded list of groups. */
function MobileSection({
  label,
  groups,
  viewAllHref,
  viewAllLabel,
  onNavigate,
}: {
  label?: string;
  groups: NavGroup[];
  viewAllHref?: string;
  viewAllLabel?: string;
  onNavigate: () => void;
}) {
  return (
    <div className="pt-2">
      {label && (
        <p className="px-2 pt-2 pb-1 text-sm font-bold text-[var(--ink)]">{label}</p>
      )}
      {groups.map((group, gi) => (
        <div key={group.title || gi} className="mt-2">
          {group.title && (
            <p className="px-2 pb-1 text-xs font-semibold uppercase tracking-wide text-[var(--ink-secondary)]">
              {group.title}
            </p>
          )}
          <ul>
            {group.items.map((link) => (
              <li key={link.href}>
                <MobileLink link={link} onNavigate={onNavigate} />
              </li>
            ))}
          </ul>
        </div>
      ))}
      {viewAllHref && (
        <Link
          href={viewAllHref}
          onClick={onNavigate}
          className="mt-1 flex min-h-11 items-center gap-1.5 rounded-lg px-2 text-sm font-semibold text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-colors"
        >
          {viewAllLabel ?? "See all"}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      )}
    </div>
  );
}

export function MobileNav() {
  const pathname = usePathname() ?? "/";
  // The drawer is open only on the route it was opened on, so any navigation
  // (link click, back/forward) closes it without a state-syncing effect.
  const [openPath, setOpenPath] = React.useState<string | null>(null);
  const open = openPath === pathname;
  const [expanded, setExpanded] = React.useState<string | null>(null);
  const toggleRef = React.useRef<HTMLButtonElement>(null);
  const panelRef = React.useRef<HTMLDivElement>(null);
  const wasOpen = React.useRef(false);

  const close = React.useCallback(() => setOpenPath(null), []);

  // Lock body scroll, close on Escape, and trap Tab focus while the panel is open.
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenPath(null);
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      // The toggle stays visible above the panel, so it is part of the trap.
      const focusable = [
        ...(toggleRef.current ? [toggleRef.current] : []),
        ...panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ),
      ];
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
    panelRef.current?.querySelector<HTMLElement>("a[href], button")?.focus();
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

  // Portaled to <body>: the header's backdrop-filter would otherwise become the
  // containing block for this `fixed` panel and collapse it to the header's height.
  const panel = (
    <div
      id={PANEL_ID}
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Main menu"
      data-ga-location="mobile_nav"
      className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto overscroll-contain border-t border-[var(--border)] bg-[var(--bg)] lg:hidden"
    >
      <nav aria-label="Main" className="px-4 py-4">
        <ul className="flex flex-col divide-y divide-[var(--border)]">
          {mainNav.map((item: NavItem) => {
            const groups = item.groups ?? (item.children ? [{ title: "", items: item.children }] : []);
            const hasMenu = groups.length > 0;
            const isExpanded = expanded === item.href;
            const sectionId = `mobile-nav-${item.href.replace(/\W+/g, "")}`;
            const secondaryGroups = item.secondaryGroups ?? [];

            return (
              <li key={item.href} className="py-1">
                <div className="flex items-center justify-between gap-2">
                  <Link
                    href={item.href}
                    onClick={close}
                    className={cn(
                      "flex min-h-12 flex-1 items-center rounded-lg px-2 text-base font-semibold transition-colors hover:text-[var(--accent)]",
                      pathname === item.href || pathname.startsWith(`${item.href}/`)
                        ? "text-[var(--accent)]"
                        : "text-[var(--ink)]"
                    )}
                  >
                    {item.title}
                  </Link>
                  {hasMenu && (
                    <button
                      type="button"
                      aria-label={`${isExpanded ? "Collapse" : "Expand"} ${item.title}`}
                      aria-expanded={isExpanded}
                      aria-controls={sectionId}
                      onClick={() => setExpanded(isExpanded ? null : item.href)}
                      className="flex h-11 w-11 items-center justify-center rounded-lg text-[var(--ink-secondary)] transition-colors hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
                    >
                      <ChevronDown
                        className={cn("h-5 w-5 transition-transform", isExpanded && "rotate-180")}
                        aria-hidden
                      />
                    </button>
                  )}
                </div>

                {hasMenu && isExpanded && (
                  <div id={sectionId} className="pb-3">
                    <MobileSection
                      label={secondaryGroups.length > 0 ? item.groupsLabel : undefined}
                      groups={groups}
                      viewAllHref={item.groupsViewAllHref ?? item.href}
                      viewAllLabel={
                        item.groupsViewAllLabel ?? item.viewAllLabel ?? `All ${item.title.toLowerCase()}`
                      }
                      onNavigate={close}
                    />
                    {secondaryGroups.length > 0 && (
                      <div className="mt-3 border-t border-[var(--border)]">
                        <MobileSection
                          label={item.secondaryGroupsLabel}
                          groups={secondaryGroups}
                          viewAllHref={item.secondaryGroupsViewAllHref}
                          viewAllLabel={item.secondaryGroupsViewAllLabel}
                          onNavigate={close}
                        />
                      </div>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-6 flex flex-col gap-3">
          <Button variant="ghost" className="w-full" asChild>
            <Link href="/contact" onClick={close}>Contact</Link>
          </Button>
          <Button className="w-full" asChild>
            <Link href="/book-demo" onClick={close}>Book a Demo</Link>
          </Button>
        </div>
      </nav>
    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={PANEL_ID}
        onClick={() => setOpenPath(open ? null : pathname)}
        className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-[var(--ink)] transition-colors hover:bg-[var(--accent-soft)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      >
        {open ? <X className="w-5 h-5" aria-hidden /> : <Menu className="w-5 h-5" aria-hidden />}
      </button>

      {open && createPortal(panel, document.body)}
    </div>
  );
}
