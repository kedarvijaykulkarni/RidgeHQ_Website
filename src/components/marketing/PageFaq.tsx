import { Container, Section } from "@/components/ui/Layout";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { StructuredData } from "@/components/seo/StructuredData";
import { faqPageJsonLd } from "@/lib/faqPageJsonLd";
import type { FAQ } from "@/lib/config/faq";

/**
 * A page's FAQ section plus its FAQPage JSON-LD, built from one list so the
 * visible questions and the structured data can't drift apart.
 */
export function PageFaq({
  faqs,
  heading = "Frequently asked questions",
  className,
}: {
  faqs: FAQ[];
  heading?: string;
  className?: string;
}) {
  if (faqs.length === 0) return null;
  return (
    <Section className={className}>
      <StructuredData data={faqPageJsonLd(faqs)} />
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-ink text-center">{heading}</h2>
          <FAQAccordion items={faqs} />
        </div>
      </Container>
    </Section>
  );
}
