import { Container, Section } from "@/components/ui/Layout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata = {
  title: "Resources",
  description: "Guides, operational insights, and product updates.",
};

export default function ResourcesPage() {
  return (
    <div className="flex flex-col w-full">
      <Section className="min-h-[60vh]">
        <Container>
          <Breadcrumbs className="mb-8" items={[{ label: "Resources" }]} />
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Resources</h1>
            <p className="text-xl text-slate-400">
              Operational guides, product updates, and insights for activity businesses.
            </p>
          </div>
          
          <div className="mt-24 text-center">
            <div className="glass-card max-w-2xl mx-auto p-12">
              <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
              <p className="text-slate-400">
                We are currently focused on onboarding our founding operators and will be publishing our operational guides soon.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <CTASection />
    </div>
  );
}
