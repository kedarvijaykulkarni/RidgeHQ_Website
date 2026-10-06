import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <nav aria-label="Breadcrumb" data-ga-location="breadcrumb" className={cn("flex items-center text-sm text-[var(--ink-secondary)]", className)}>
      <ol className="flex min-w-0 flex-wrap items-center gap-y-1">
        {trail.map((item, index) => {
          const isLast = index === trail.length - 1;

          return (
            <li key={index} className={cn("flex items-center", isLast && "min-w-0")}>
              {item.href && !isLast ? (
                <Link href={item.href} className="link-muted">
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={cn(isLast && "block max-w-[60vw] truncate font-medium text-[var(--ink)] sm:max-w-none")}
                  title={isLast ? item.label : undefined}
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <ChevronRight className="w-4 h-4 mx-2 text-[var(--ink-tertiary)] shrink-0" aria-hidden />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
