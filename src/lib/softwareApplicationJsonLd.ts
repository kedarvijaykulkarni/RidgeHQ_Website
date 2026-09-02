import { siteUrl } from "@/lib/config/site";
import { marketingConfig } from "@/lib/config/marketing";
import { platformCapabilities } from "@/lib/config/platform";
import type { Product } from "@/lib/config/products";

const ORG_ID = `${siteUrl}/#organization`;
export const SOFTWARE_ID = `${siteUrl}/#software`;

const abs = (path: string) => `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

/**
 * Shared Offer for the RidgeHQ subscription. No `price` is emitted while
 * pricing is pilot-only — the figure is quoted on request, and inventing
 * one would be false structured data. Add `price` / `priceSpecification`
 * here when public pricing launches.
 */
function ridgeHqOffer() {
  return {
    "@type": "Offer",
    url: `${siteUrl}/pricing`,
    priceCurrency: "USD",
    category: "Subscription",
    availability:
      marketingConfig.pricingMode === "pilot"
        ? "https://schema.org/LimitedAvailability"
        : "https://schema.org/InStock",
    description: `Flat monthly subscription with ${marketingConfig.commissionRateDirectBookings} platform commission on direct bookings. You pay only your payment-gateway fee.`,
  };
}

/** Full SoftwareApplication entity for RidgeHQ. Emit once, on the homepage. */
export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": SOFTWARE_ID,
    name: "RidgeHQ",
    alternateName: "The Activity Business OS",
    description:
      "Run your entire activity business from one HQ. RidgeHQ connects bookings, schedules, staff, customers, gear, rentals, trips and payments in one live system, with an AI copilot built into the operational core.",
    url: siteUrl,
    image: abs("/images/brand/og-image.jpg"),
    screenshot: abs("/images/product/dash-responsive-desktop.webp"),
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Booking & Operations Management Software",
    operatingSystem: "Web browser",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    featureList: platformCapabilities.map((c) => c.title),
    audience: {
      "@type": "BusinessAudience",
      name: "Activity, tour and rental operators",
    },
    publisher: { "@id": ORG_ID },
    provider: { "@id": ORG_ID },
    offers: ridgeHqOffer(),
    // aggregateRating / review: add once genuine customer reviews exist.
  };
}

/**
 * Lightweight reference to the RidgeHQ SoftwareApplication carrying the
 * Offer. Use on /pricing so the offer sits on the page that is about it.
 */
export function softwareOfferJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": SOFTWARE_ID,
    name: "RidgeHQ",
    url: siteUrl,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web browser",
    offers: ridgeHqOffer(),
  };
}

/** Per-module SoftwareApplication for a /products/[slug] page. */
export function productSoftwareJsonLd(product: Product, screenshotPath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteUrl}${product.href}#software`,
    name: `RidgeHQ ${product.title}`,
    description: product.description,
    url: `${siteUrl}${product.href}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web browser",
    screenshot: abs(screenshotPath),
    isPartOf: { "@id": SOFTWARE_ID },
    publisher: { "@id": ORG_ID },
    offers: {
      ...ridgeHqOffer(),
      availability:
        product.status === "early-access"
          ? "https://schema.org/PreOrder"
          : ridgeHqOffer().availability,
    },
  };
}

/** ItemList of the product modules for the /products index. */
export function productsItemListJsonLd(products: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "RidgeHQ products",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}${p.href}#software`,
        name: `RidgeHQ ${p.title}`,
        url: `${siteUrl}${p.href}`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web browser",
      },
    })),
  };
}
