import { Container, Section } from "@/components/ui/Layout";
import { VerticalCard } from "@/components/marketing/VerticalCard";
import { verticals } from "@/lib/config/verticals";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata = {
  title: "Solutions by Industry",
  description: "One operational model. Different ways to run the day.",
};

export default function SolutionsIndexPage() {
  return (
    <div className="flex flex-col w-full">
      <Section className="pb-12 pt-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Solutions by Industry</h1>
            <p className="text-xl text-slate-400">
              One operational model. Different ways to run the day. Explore how RidgeHQ maps to your specific operational constraints.
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
