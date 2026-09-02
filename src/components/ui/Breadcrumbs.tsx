import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  /** The trail after Home. A "Home" crumb linking to "/" is prepended automatically. */
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const trail: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-sm text-[var(--ink-secondary)] ${className ?? ""}`}
    >
      <ol className="flex flex-wrap items-center gap-y-1">
        {trail.map((item, index) => {
          const isLast = index === trail.length - 1;

          return (
            <li key={index} className="flex items-center">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-[var(--accent)] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-[var(--ink)] font-medium" : ""}>{item.label}</span>
              )}

              {!isLast && (
                <ChevronRight className="w-4 h-4 mx-2 text-[var(--ink-tertiary)] shrink-0" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
