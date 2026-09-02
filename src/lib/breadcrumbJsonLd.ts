const SITE_URL = "https://ridgehq.app";

interface Crumb {
  name: string;
  /** Path beginning with "/" (e.g. "/platform" or "/platform/scheduling"). */
  path: string;
}

/**
 * Build a schema.org BreadcrumbList for the given trail. A "Home" item
 * pointing at the site root is prepended automatically, matching the
 * visible <Breadcrumbs /> component.
 */
export function breadcrumbJsonLd(trail: Crumb[]) {
  const items: Crumb[] = [{ name: "Home", path: "/" }, ...trail];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
