import { Container, Section } from "@/components/ui/Layout";
import { VerticalCard } from "@/components/marketing/VerticalCard";
import { verticals } from "@/lib/config/verticals";
import { CTASection } from "@/components/marketing/CTASection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";
import { pageSeo } from "@/lib/config/seo";

export const metadata = {
  ...pageSeo("/solutions"),
  title: "Built For — Industries RidgeHQ Runs",
  description: "One operational model. Different ways to run the day.",
};

export default function SolutionsIndexPage() {
  return (
    <div className="flex flex-col w-full">
      <StructuredData data={breadcrumbJsonLd([{ name: "Built For", path: "/solutions" }])} />
      <Section className="pb-12 pt-24">
        <Container>
          <Breadcrumbs className="mb-8" items={[{ label: "Built For" }]} />
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Built for how your operation runs.</h1>
            <p className="text-xl text-slate-400">
              One operational model, mapped to the constraints of your industry. Find the workflows that match your day.
            </p>
          </div>
        </Container>
      </Section>
      
      <Section className="pt-0">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map(v => (
              <VerticalCard key={v.id} vertical={v} />
            ))}
          </div>
        </Container>
      </Section>
      
      <CTASection headline="Don't see your specific industry?" description="RidgeHQ is built to handle complex combinations of time, people, and resources. Let's discuss your operational needs." />
    </div>
  );
}
