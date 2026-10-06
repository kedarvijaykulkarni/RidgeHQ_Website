import { Container, Section } from "@/components/ui/Layout";
import { VerticalCard } from "@/components/marketing/VerticalCard";
import { verticals } from "@/lib/config/verticals";
import { CTASection } from "@/components/marketing/CTASection";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { pageSeo } from "@/lib/config/seo";

export const metadata = {
  ...pageSeo("/solutions"),
  title: { absolute: "Built For — Industries RidgeHQ Runs" },
  description: "How RidgeHQ fits dive centers, surf and kite schools, sailing and windsurf schools, ski schools, outdoor operators, resorts, camps, and rental/tour operators.",
};

export default function SolutionsIndexPage() {
  return (
    <div className="flex flex-col w-full">
      <Section className="pb-12 pt-24">
        <Container>
          <PageBreadcrumbs className="mb-8 justify-center" trail={[{ label: "Solutions", href: "/solutions" }]} />
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Built for how your operation runs.</h1>
            <p className="text-xl text-ink-secondary">
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
