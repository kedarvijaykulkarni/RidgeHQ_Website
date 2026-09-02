import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import { FeatureCard } from "@/components/marketing/FeatureCard";
import { products } from "@/lib/config/products";
import { CTASection } from "@/components/marketing/CTASection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";

export const metadata = {
  title: "Products",
  description: "One platform for the operational day, plus the parts you can go deep on.",
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full">
      <StructuredData data={breadcrumbJsonLd([{ name: "Products", path: "/products" }])} />
      <Section className="pb-12 pt-24">
        <Container>
          <Breadcrumbs className="mb-8" items={[{ label: "Products" }]} />
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">The RidgeHQ product line.</h1>
            <p className="text-xl text-slate-400">
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
          <p className="text-center text-slate-400">
            Looking for how the capabilities fit together?{" "}
            <Link href="/platform" className="text-[#22D3EE] hover:underline">Explore the platform &rarr;</Link>
          </p>
        </Container>
      </Section>

      <CTASection />
    </div>
  );
}
