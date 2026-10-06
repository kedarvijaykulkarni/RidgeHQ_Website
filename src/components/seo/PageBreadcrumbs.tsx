import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";

export interface PageCrumb {
  label: string;
  /** Path beginning with "/". The last crumb is the current page. */
  href: string;
}

/**
 * The visible breadcrumb and its BreadcrumbList JSON-LD, built from one
 * trail so the two can't drift apart. "Home" is prepended to both.
 */
export function PageBreadcrumbs({ trail, className }: { trail: PageCrumb[]; className?: string }) {
  return (
    <>
      <StructuredData data={breadcrumbJsonLd(trail.map((c) => ({ name: c.label, path: c.href })))} />
      <Breadcrumbs items={trail} className={className} />
    </>
  );
}
