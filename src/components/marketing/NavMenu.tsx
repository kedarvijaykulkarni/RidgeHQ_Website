"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {
  ChevronDown,
  ArrowRight,
  ShoppingCart,
  CalendarClock,
  CalendarRange,
  Boxes,
  Users,
  IdCard,
  BarChart3,
  Store,
  Workflow,
  Sparkles,
  Plug,
  LayoutGrid,
  Package,
  FileSignature,
  GraduationCap,
  Building2,
  Bike,
  Waves,
  Sailboat,
  Snowflake,
  Ship,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";
import { mainNav, type NavItem, type NavLink, type NavGroup } from "@/lib/config/navigation";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  ShoppingCart,
  CalendarClock,
  CalendarRange,
  Boxes,
  Users,
  IdCard,
  BarChart3,
  Store,
  Workflow,
  Sparkles,
  Plug,
  LayoutGrid,
  Package,
  FileSignature,
  GraduationCap,
  Building2,
  Bike,
  Waves,
  Sailboat,
  Snowflake,
  Ship,
  LifeBuoy,
};

function Icon({ name, className }: { name?: string; className?: string }) {
  const Cmp = name ? ICONS[name] : undefined;
  if (!Cmp) return null;
  return <Cmp className={className} aria-hidden />;
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function MenuLink({ item }: { item: NavLink }) {
  return (
    <NavigationMenu.Link asChild>
      <Link
        href={item.href}
        className="group/link flex gap-3 rounded-xl p-3 transition-colors hover:bg-[var(--accent-soft)]"
      >
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)] group-hover/link:bg-[var(--accent)] group-hover/link:text-white transition-colors">
          <Icon name={item.icon} className="h-4 w-4" />
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-[var(--ink)] group-hover/link:text-[var(--accent)] transition-colors">
            {item.title}
          </span>
          {item.description && (
            <span className="mt-0.5 block text-xs leading-snug text-[var(--ink-tertiary)]">
              {item.description}
            </span>
          )}
        </span>
      </Link>
    </NavigationMenu.Link>
  );
}

function GroupColumn({ group }: { group: NavGroup }) {
  return (
    <div>
      {group.title && (
        <div className="flex items-center gap-2 px-3 pb-1 text-[0.7rem] font-semibold uppercase tracking-wide text-[var(--ink-tertiary)]">
          <Icon name={group.icon} className="h-3.5 w-3.5" />
          {group.title}
        </div>
      )}
      <ul>
        {group.items.map((link) => (
          <li key={link.href}>
            <MenuLink item={link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function NavMenu() {
  const pathname = usePathname() ?? "/";

  return (
    <NavigationMenu.Root className="hidden md:block" delayDuration={100}>
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
                      "text-sm font-medium transition-colors hover:text-[var(--accent)]",
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

          return (
            <NavigationMenu.Item key={item.href} className="relative">
              <NavigationMenu.Trigger
                className={cn(
                  "group inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-[var(--accent)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded",
                  active ? "text-[var(--accent)]" : "text-[var(--ink-secondary)]"
                )}
              >
                {item.title}
                <ChevronDown
                  className="w-3.5 h-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180"
                  aria-hidden
                />
              </NavigationMenu.Trigger>

              <NavigationMenu.Content className="absolute left-0 top-full z-50 pt-3">
                <div className="glass-card rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4 shadow-2xl shadow-black/30">
                  <div
                    className={cn(
                      "grid gap-x-6 gap-y-5",
                      singleGroup ? "grid-cols-2 w-[36rem]" : "grid-cols-3 w-[48rem]"
                    )}
                  >
                    {groups.map((group, gi) => (
                      <GroupColumn key={group.title ?? gi} group={group} />
                    ))}
                  </div>
                  <div className="mt-3 border-t border-[var(--border)] pt-3">
                    <NavigationMenu.Link asChild>
                      <Link
                        href={item.href}
                        className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-colors"
                      >
                        {item.viewAllLabel ?? `All ${item.title.toLowerCase()}`}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                    </NavigationMenu.Link>
                  </div>
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          );
        })}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
