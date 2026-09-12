import { breadcrumbJsonLd } from "./breadcrumbJsonLd";
import { siteUrl } from "./config/site";

describe("breadcrumbJsonLd", () => {
  it("prepends a Home item and builds an ordered BreadcrumbList", () => {
    const result = breadcrumbJsonLd([
      { name: "Platform", path: "/platform" },
      { name: "Scheduling & Dispatch", path: "/platform/scheduling" },
    ]);

    expect(result["@type"]).toBe("BreadcrumbList");
    expect(result.itemListElement).toEqual([
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Platform", item: `${siteUrl}/platform` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Scheduling & Dispatch",
        item: `${siteUrl}/platform/scheduling`,
      },
    ]);
  });

  it("returns just the Home item for an empty trail", () => {
    const result = breadcrumbJsonLd([]);
    expect(result.itemListElement).toEqual([
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
    ]);
  });
});
