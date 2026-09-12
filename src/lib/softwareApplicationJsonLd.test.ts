import {
  softwareApplicationJsonLd,
  softwareOfferJsonLd,
  productSoftwareJsonLd,
  productsItemListJsonLd,
  SOFTWARE_ID,
} from "./softwareApplicationJsonLd";
import type { Product } from "./config/products";
import { siteUrl } from "./config/site";

const sampleProduct: Product = {
  id: "sample-product",
  title: "Sample Product",
  slug: "sample-product",
  href: "/products/sample-product",
  status: "available",
  description: "A sample product for testing.",
  heroHeadline: "Sample headline",
  heroTagline: "Sample tagline",
};

const earlyAccessProduct: Product = { ...sampleProduct, slug: "early-product", href: "/products/early-product", status: "early-access" };

describe("softwareApplicationJsonLd", () => {
  it("builds a SoftwareApplication/WebApplication entity with the shared @id", () => {
    const result = softwareApplicationJsonLd();

    expect(result["@context"]).toBe("https://schema.org");
    expect(result["@type"]).toEqual(["SoftwareApplication", "WebApplication"]);
    expect(result["@id"]).toBe(SOFTWARE_ID);
    expect(result.url).toBe(siteUrl);
    expect(result.offers["@type"]).toBe("Offer");
  });
});

describe("softwareOfferJsonLd", () => {
  it("builds a lightweight SoftwareApplication reference carrying the Offer", () => {
    const result = softwareOfferJsonLd();

    expect(result["@type"]).toBe("SoftwareApplication");
    expect(result["@id"]).toBe(SOFTWARE_ID);
    expect(result.offers["@type"]).toBe("Offer");
  });
});

describe("productSoftwareJsonLd", () => {
  it("builds a per-product SoftwareApplication scoped to the product's own @id and url", () => {
    const result = productSoftwareJsonLd(sampleProduct, "/images/product/sample.webp");

    expect(result["@type"]).toBe("SoftwareApplication");
    expect(result["@id"]).toBe(`${siteUrl}${sampleProduct.href}#software`);
    expect(result.url).toBe(`${siteUrl}${sampleProduct.href}`);
    expect(result.name).toBe(`RidgeHQ ${sampleProduct.title}`);
    expect(result.isPartOf).toEqual({ "@id": SOFTWARE_ID });
    expect(result.screenshot).toBe(`${siteUrl}/images/product/sample.webp`);
  });

  it("marks an early-access product's offer as PreOrder availability", () => {
    const result = productSoftwareJsonLd(earlyAccessProduct, "/images/product/early.webp");
    expect(result.offers.availability).toBe("https://schema.org/PreOrder");
  });

  it("uses the shared offer's availability for an available product", () => {
    const available = productSoftwareJsonLd(sampleProduct, "/images/product/sample.webp");
    const sharedOffer = softwareOfferJsonLd();
    expect(available.offers.availability).toBe(sharedOffer.offers.availability);
  });
});

describe("productsItemListJsonLd", () => {
  it("builds an ordered ItemList of SoftwareApplication entries", () => {
    const result = productsItemListJsonLd([sampleProduct, earlyAccessProduct]);

    expect(result["@type"]).toBe("ItemList");
    expect(result.itemListElement).toHaveLength(2);
    expect(result.itemListElement[0].position).toBe(1);
    expect(result.itemListElement[0].item["@id"]).toBe(`${siteUrl}${sampleProduct.href}#software`);
    expect(result.itemListElement[1].position).toBe(2);
  });

  it("returns an empty list for no products", () => {
    const result = productsItemListJsonLd([]);
    expect(result.itemListElement).toEqual([]);
  });
});
