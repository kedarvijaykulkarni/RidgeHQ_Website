interface FAQ {
  question: string;
  answer: string;
}

/**
 * Build a schema.org FAQPage graph for the given Q&A pairs. Pass the same
 * items rendered by <FAQAccordion /> on the page — the schema must match
 * visible content.
 */
export function faqPageJsonLd(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
