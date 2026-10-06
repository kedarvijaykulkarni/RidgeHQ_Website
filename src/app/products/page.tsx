import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import { FeatureCard } from "@/components/marketing/FeatureCard";
import { products } from "@/lib/config/products";
import { CTASection } from "@/components/marketing/CTASection";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import { productsItemListJsonLd } from "@/lib/softwareApplicationJsonLd";
import { pageSeo } from "@/lib/config/seo";
import { PageFaq } from "@/components/marketing/PageFaq";

const productsFaqs = [
  {
    question: "Do I need to buy the Rental App or Waiver App separately?",
    answer:
      "No. Rentals and waivers are parts of the same RidgeHQ platform, sharing one calendar, one customer record, and one order model with bookings and scheduling. Digital waivers are included, not a metered add-on.",
  },
  {
    question: "Is the Channel Manager available today?",
    answer:
      "Not yet. Orders already record their origin and any external reference, but the live connectors to external sales channels are still being built with design partners.",
  },
  {
    question: "Which product is right for a dive center or surf school?",
    answer:
      "The Activity Platform. It covers lessons, courses, trips, staff, gear, waivers, and payments together; the Rental and Waiver pages go deeper on those parts of it.",
  },
  {
    question: "Do you take commission on bookings?",
    answer:
      "No. Direct bookings through your own website carry 0% RidgeHQ commission; the payment provider's normal processing fee still applies.",
  },
];

export const metadata = {
  ...pageSeo("/products"),
  title: "Products & Software Apps",
  description: "The RidgeHQ software lineup: the Activity Platform, plus the Rental App, Waiver App, and Channel Manager for activity-based businesses.",
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full">
      <StructuredData data={productsItemListJsonLd(products)} />
      <Section className="pb-12 pt-24">
        <Container>
          <PageBreadcrumbs className="mb-8 justify-center" trail={[{ label: "Products", href: "/products" }]} />
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">The RidgeHQ product line.</h1>
            <p className="text-xl text-ink-secondary">
              One connected platform for the whole operational day &mdash; and named parts of it you can focus on: rentals, waivers, and channel distribution.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product) => (
              <FeatureCard
                key={product.id}
                title={product.status === "early-access" ? `${product.title} — in development` : product.title}
                description={product.description}
                href={product.href}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-center">One system, named by the job it does</h2>
            <p className="text-lg text-ink-secondary leading-relaxed">
              The Activity Platform is the whole operational core: bookings and point of sale, the
              weekly planner, staff, gear and fleet, customer profiles, payments, and the daily close.
              The Rental App and the Waiver App are not separate systems to integrate &mdash; they are the
              rental and waiver sides of that same platform, described on their own pages for operators
              who come looking for that specific job. The Channel Manager, for selling through external
              channels, is still in development with design partners.
            </p>
            <h2 className="text-2xl font-bold pt-4">Which page should you start with?</h2>
            <ul className="space-y-3 text-ink-secondary list-disc pl-6">
              <li><strong className="text-ink">You run lessons, courses, trips, or tours</strong> with staff and a schedule &mdash; start with the Activity Platform.</li>
              <li><strong className="text-ink">Hire is a big part of the business</strong> &mdash; boards, bikes, kayaks, wetsuits &mdash; read the Rental App for how gear is tracked by unit and size.</li>
              <li><strong className="text-ink">Paper or PDF waivers are slowing check-in</strong> &mdash; read the Waiver App for per-participant digital waivers built into the booking.</li>
              <li><strong className="text-ink">You sell through external channels</strong> &mdash; read the Channel Manager to see what exists today and what is still being built.</li>
            </ul>
            <p className="text-center text-ink-secondary pt-4">
              Looking for how the capabilities fit together?{" "}
              <Link href="/platform" className="link-inline">Explore the platform &rarr;</Link>
            </p>
          </div>
        </Container>
      </Section>

      <PageFaq faqs={productsFaqs} className="bg-bg-elevated/50 border-t border-border" />

      <CTASection />
    </div>
  );
}
