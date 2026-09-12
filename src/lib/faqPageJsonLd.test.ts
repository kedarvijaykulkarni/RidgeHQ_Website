import { faqPageJsonLd } from "./faqPageJsonLd";

describe("faqPageJsonLd", () => {
  it("builds a schema.org FAQPage graph matching the input Q&A pairs", () => {
    const result = faqPageJsonLd([
      { question: "Is my business type supported?", answer: "Yes, for activity operators." },
    ]);

    expect(result["@context"]).toBe("https://schema.org");
    expect(result["@type"]).toBe("FAQPage");
    expect(result.mainEntity).toHaveLength(1);
    expect(result.mainEntity[0]).toEqual({
      "@type": "Question",
      name: "Is my business type supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, for activity operators.",
      },
    });
  });

  it("returns an empty mainEntity for an empty FAQ list", () => {
    const result = faqPageJsonLd([]);
    expect(result.mainEntity).toEqual([]);
  });
});
