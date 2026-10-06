"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { mainNav, type NavItem, type NavLink, type NavGroup } from "@/lib/config/navigation";
import { NavIcon as Icon } from "@/components/marketing/nav-icons";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function MenuLink({ item }: { item: NavLink }) {
  return (
    <NavigationMenu.Link asChild>
      <Link
        href={item.href}
        className="group/link flex gap-3 rounded-xl p-2.5 transition-colors hover:bg-[var(--accent-soft)]"
      >
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)] group-hover/link:bg-[var(--accent)] group-hover/link:text-bg transition-colors">
          <Icon name={item.icon} className="h-4 w-4" />
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-[var(--ink)] group-hover/link:text-[var(--accent)] transition-colors">
            {item.title}
          </span>
          {item.description && (
            <span className="mt-0.5 text-[13px] leading-snug text-[var(--ink-tertiary)] line-clamp-2">
              {item.description}
            </span>
          )}
        </span>
      </Link>
    </NavigationMenu.Link>
  );
}

function GroupColumn({ group, listClassName }: { group: NavGroup; listClassName?: string }) {
  return (
    <div>
      {group.title && (
        <div className="flex items-center gap-2 px-2.5 pb-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--ink-secondary)]">
          <Icon name={group.icon} className="h-3.5 w-3.5 text-[var(--accent)]" />
          {group.title}
        </div>
      )}
      <ul className={listClassName}>
        {group.items.map((link) => (
          <li key={link.href}>
            <MenuLink item={link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ViewAllLink({ href, label }: { href: string; label: string }) {
  return (
    <NavigationMenu.Link asChild>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-semibold text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-colors"
      >
        {label}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </NavigationMenu.Link>
  );
}

interface Axis {
  id: string;
  label: string;
  /** One-line summary shown under the label in the rail. */
  summary: string;
  groups: NavGroup[];
  viewAllHref: string;
  viewAllLabel: string;
}

/**
 * Two-axis mega-menu: a left rail picks the axis (e.g. "Built For" vs
 * "Platform") and the right side shows that axis's groups in three columns.
 * Showing one axis at a time keeps columns wide enough to read and the panel
 * inside the viewport at laptop widths.
 */
function TwoAxisPanel({ axes }: { axes: Axis[] }) {
  const [activeId, setActiveId] = React.useState(axes[0].id);
  const active = axes.find((a) => a.id === activeId) ?? axes[0];
  const baseId = React.useId();
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const next = (index + (e.key === "ArrowDown" ? 1 : -1) + axes.length) % axes.length;
    setActiveId(axes[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="flex w-[min(58rem,calc(100vw-2rem))]">
      <div
        role="tablist"
        aria-orientation="vertical"
        aria-label="Browse by"
        className="flex w-56 shrink-0 flex-col gap-1 border-r border-[var(--border)] bg-[var(--bg-alt)] p-3"
      >
        {axes.map((axis, i) => {
          const selected = axis.id === active.id;
          return (
            <button
              key={axis.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${axis.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${axis.id}`}
              tabIndex={selected ? 0 : -1}
              onPointerEnter={() => setActiveId(axis.id)}
              onFocus={() => setActiveId(axis.id)}
              onClick={() => setActiveId(axis.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={cn(
                "flex items-center justify-between gap-2 rounded-xl px-3 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
                selected ? "bg-[var(--bg-elevated)] shadow-sm" : "hover:bg-[var(--accent-soft)]"
              )}
            >
              <span>
                <span
                  className={cn(
                    "block text-sm font-semibold",
                    selected ? "text-[var(--accent)]" : "text-[var(--ink)]"
                  )}
                >
                  {axis.label}
                </span>
                <span className="mt-0.5 block text-xs leading-snug text-[var(--ink-tertiary)]">{axis.summary}</span>
              </span>
              <ChevronRight
                className={cn("h-4 w-4 shrink-0", selected ? "text-[var(--accent)]" : "text-[var(--ink-tertiary)]")}
                aria-hidden
              />
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel-${active.id}`}
        aria-labelledby={`${baseId}-tab-${active.id}`}
        className="min-w-0 flex-1 p-4"
      >
        <div className="grid grid-cols-3 gap-x-4 gap-y-5">
          {active.groups.map((group, gi) => (
            <GroupColumn key={group.title ?? gi} group={group} />
          ))}
        </div>
        <div className="mt-3 border-t border-[var(--border)] pt-3">
          <ViewAllLink href={active.viewAllHref} label={active.viewAllLabel} />
        </div>
      </div>
    </div>
  );
}

function countLinks(groups: NavGroup[]) {
  return groups.reduce((n, g) => n + g.items.length, 0);
}

export function NavMenu() {
  const pathname = usePathname() ?? "/";

  return (
    <NavigationMenu.Root className="hidden lg:block" delayDuration={100} data-ga-location="main_nav">
      <NavigationMenu.List className="flex items-center gap-7">
        {mainNav.map((item: NavItem) => {
          const active = isActive(pathname, item.href);
          const groups = item.groups ?? [];
          const hasMenu = groups.length > 0;

          if (!hasMenu) {
            return (
              <NavigationMenu.Item key={item.href}>
                <NavigationMenu.Link asChild active={active}>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded text-sm font-medium transition-colors hover:text-[var(--accent)]",
                      active ? "text-[var(--accent)]" : "text-[var(--ink-secondary)]"
                    )}
                  >
                    {item.title}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            );
          }

          const singleGroup = groups.length === 1;
          const secondaryGroups = item.secondaryGroups ?? [];

          return (
            <NavigationMenu.Item key={item.href}>
              <NavigationMenu.Trigger
                className={cn(
                  "group inline-flex items-center gap-1 rounded text-sm font-medium transition-colors hover:text-[var(--accent)] data-[state=open]:text-[var(--accent)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
                  active ? "text-[var(--accent)]" : "text-[var(--ink-secondary)]"
                )}
              >
                {item.title}
                <ChevronDown
                  className="w-3.5 h-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180"
                  aria-hidden
                />
              </NavigationMenu.Trigger>

              <NavigationMenu.Content className="absolute left-0 top-0" data-ga-location="mega_menu">
                <div className="max-h-[calc(100dvh-6rem)] overflow-y-auto">
                  {secondaryGroups.length > 0 ? (
                    <TwoAxisPanel
                      axes={[
                        {
                          id: "primary",
                          label: item.groupsLabel ?? item.title,
                          summary: `${countLinks(groups)} industries`,
                          groups,
                          viewAllHref: item.groupsViewAllHref ?? item.href,
                          viewAllLabel: item.groupsViewAllLabel ?? item.viewAllLabel ?? "See all",
                        },
                        {
                          id: "secondary",
                          label: item.secondaryGroupsLabel ?? "More",
                          summary: "Capabilities, AI and integrations",
                          groups: secondaryGroups,
                          viewAllHref: item.secondaryGroupsViewAllHref ?? item.href,
                          viewAllLabel: item.secondaryGroupsViewAllLabel ?? "See all",
                        },
                      ]}
                    />
                  ) : (
                    <div className="p-4">
                      {singleGroup ? (
                        // One group: flow its links across two columns instead
                        // of leaving the second grid column empty.
                        <div className="w-[36rem]">
                          <GroupColumn group={groups[0]} listClassName="grid grid-cols-2 gap-x-4 gap-y-1" />
                        </div>
                      ) : (
                        <div className="grid w-[48rem] grid-cols-3 gap-x-4 gap-y-5">
                          {groups.map((group, gi) => (
                            <GroupColumn key={group.title ?? gi} group={group} />
                          ))}
                        </div>
                      )}
                      <div className="mt-3 border-t border-[var(--border)] pt-3">
                        <ViewAllLink
                          href={item.href}
                          label={item.viewAllLabel ?? `All ${item.title.toLowerCase()}`}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          );
        })}
      </NavigationMenu.List>

      {/* Positioned against the sticky <header> (the nearest positioned
          ancestor), so every panel is centred under the full header instead
          of hanging off its trigger's left edge and overflowing at ~1024px. */}
      <div className="pointer-events-none absolute inset-x-0 top-full flex justify-center px-4 pt-2">
        <NavigationMenu.Viewport className="pointer-events-auto relative h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] shadow-2xl shadow-black/20 transition-[width,height] duration-200" />
      </div>
    </NavigationMenu.Root>
  );
}
