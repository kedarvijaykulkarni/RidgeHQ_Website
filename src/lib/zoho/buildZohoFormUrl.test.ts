import { buildZohoFormUrl } from "./buildZohoFormUrl";

describe("buildZohoFormUrl", () => {
  const baseUrl = "https://forms.zohopublic.in/ridgehq/form/RidgeHQWebsiteEnquiry/formperma/abc123xyz";

  it("should append the mapped intent parameter", () => {
    const url = buildZohoFormUrl(baseUrl, {
      intent: "book_demo",
      sourcePage: "/book-demo"
    });
    
    expect(url).toContain("intent=Book+a+demo");
    expect(url).toContain("source_page=%2Fbook-demo");
    expect(url).toContain("zf_rszfm=1");
  });

  it("should append vertical and planInterest context when provided", () => {
    const url = buildZohoFormUrl(baseUrl, {
      intent: "pricing_interest",
      sourcePage: "/pricing",
      vertical: "Dive Centers",
      planInterest: "Founding Operator Pilot"
    });
    
    expect(url).toContain("intent=Pricing+%2F+pilot+interest");
    expect(url).toContain("vertical=Dive+Centers");
    expect(url).toContain("plan_interest=Founding+Operator+Pilot");
  });

  it("should append UTM parameters", () => {
    const url = buildZohoFormUrl(baseUrl, {
      intent: "contact",
      sourcePage: "/",
      utmSource: "google",
      utmMedium: "cpc",
      utmCampaign: "summer_sale"
    });
    
    expect(url).toContain("utm_source=google");
    expect(url).toContain("utm_medium=cpc");
    expect(url).toContain("utm_campaign=summer_sale");
  });
  
  it("should ignore undefined parameters", () => {
    const url = buildZohoFormUrl(baseUrl, {
      intent: "design_partner",
      sourcePage: "/design-partners"
    });
    
    expect(url).not.toContain("vertical=");
    expect(url).not.toContain("utm_source=");
  });
});
