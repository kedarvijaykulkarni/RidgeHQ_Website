import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-sm text-[var(--ink-secondary)]">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {item.href ? (
                <Link href={item.href} className="hover:text-[var(--accent)] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-[var(--ink)] font-medium" : ""}>
                  {item.label}
                </span>
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
