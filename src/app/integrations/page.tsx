import { Container, Section } from "@/components/ui/Layout";
import { IntegrationCard } from "@/components/marketing/IntegrationCard";
import { integrations } from "@/lib/config/integrations";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata = {
  title: "Integrations",
  description: "Connected to your ecosystem. See what tools RidgeHQ supports.",
};

export default function IntegrationsPage() {
  const implemented = integrations.filter(i => i.state === 'implemented');
  const planned = integrations.filter(i => i.state !== 'implemented');

  return (
    <div className="flex flex-col w-full">
      <Section className="pb-12 pt-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Connected to your ecosystem.</h1>
            <p className="text-xl text-slate-400">
              RidgeHQ is designed to be your operational center, integrating with the payment gateways and certification authorities you already use.
            </p>
          </div>
        </Container>
      </Section>
      
      <Section className="pt-0">
        <Container>
          <div className="space-y-16">
            <div>
              <h2 className="text-2xl font-bold mb-8">Active Integrations</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {implemented.map(int => (
                  <IntegrationCard key={int.id} integration={int} />
                ))}
                {implemented.length === 0 && (
                  <p className="text-slate-400 col-span-full">No active integrations found in configuration.</p>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-8">On the Roadmap</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {planned.map(int => (
                  <IntegrationCard key={int.id} integration={int} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
      <CTASection headline="Need a specific integration?" description="We prioritize our roadmap based on operator needs. Let us know what you're connecting." primaryCtaText="Contact Us" primaryCtaHref="/contact" />
    </div>
  );
}
