import { Container, Section } from "@/components/ui/Layout";
import { Button } from "@/components/ui/Button";
import { FeatureCard } from "@/components/marketing/FeatureCard";
import { IntegrationCard } from "@/components/marketing/IntegrationCard";
import { ScreenshotFrame } from "@/components/marketing/ScreenshotFrame";
import { CTASection } from "@/components/marketing/CTASection";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { HeroSection } from "@/components/marketing/HeroSection";
import { VerticalsExplorer } from "@/components/marketing/VerticalsExplorer";
import { platformCapabilities } from "@/lib/config/platform";
import { integrations } from "@/lib/config/integrations";
import { generalFaqs } from "@/lib/config/faq";
import Link from "next/link";
import { Calendar, Users, Box, MapPin, CreditCard, Shield } from "lucide-react";

// Map string icon names to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  bookings: <CreditCard />,
  scheduling: <Calendar />,
  resources: <Box />,
  staff: <Users />,
  customers: <MapPin />,
  payments: <Shield />,
};

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[var(--bg)]">
      {/* 1. Animated Hero */}
      <HeroSection />

      {/* Hero Visual / Product Proof */}
      <Section className="pt-0 -mt-16 relative z-20">
        <Container>
          <ScreenshotFrame src="/images/product/event-planner.png" alt="RidgeHQ Event Planner Interface" />
        </Container>
      </Section>

      {/* Problem & Solution */}
      <Section className="bg-[var(--bg-alt)]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)]">Your operation is connected. Your tools aren&apos;t.</h2>
            <p className="text-lg text-[var(--ink-secondary)]">
              When online booking, front desk, schedules, staff, inventory, and reporting behave like separate businesses, you spend your day acting as the API between them.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformCapabilities.map(cap => (
              <FeatureCard
                key={cap.id}
                title={cap.title}
                description={cap.description}
                icon={iconMap[cap.id]}
                href={cap.href}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* AI Copilot */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)]">AI that works inside the operation.</h2>
              <p className="text-lg text-[var(--ink-secondary)]">
                The Copilot is not a decorative chat bubble. It understands current operational context, inspects bookings and staff schedules, and can safely use product tools to help you manage the day.
              </p>
              <ul className="space-y-4 text-[var(--ink-tertiary)]">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></div>
                  Medium/high-risk actions require your confirmation.
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></div>
                  Fully auditable AI actions with explicit undo support for selected operations.
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></div>
                  Powered by Anthropic, OpenAI, or Ollama depending on configuration.
                </li>
              </ul>
              <Button variant="outline" asChild className="mt-4 border-[var(--border)] text-[var(--ink)] hover:border-[var(--accent)] bg-[var(--bg-elevated)]">
                <Link href="/ai-copilot">Learn about the Copilot</Link>
              </Button>
            </div>
            <ScreenshotFrame src="/images/product/ai-what-needs-attention-today.png" alt="RidgeHQ Copilot summarizing what needs attention today" />
          </div>
        </Container>
      </Section>

      {/* Tabbed 12-Vertical Explorer */}
      <VerticalsExplorer />

      {/* Integrations */}
      <Section>
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center text-[var(--ink)]">Connected to your ecosystem</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {integrations.map(int => (
              <IntegrationCard key={int.id} integration={int} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Pricing Philosophy */}
      <Section className="bg-[var(--bg-alt)] border-t border-b border-[var(--border)]">
        <Container className="text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--ink)]">Transparent subscription. Zero direct booking fees.</h2>
          <p className="text-lg text-[var(--ink-secondary)] mb-8">
            RidgeHQ is available via a predictable subscription. We charge 0% platform commission on your direct bookings, because you shouldn&rsquo;t be penalized for your own marketing success.
          </p>
          <Button asChild className="bg-[var(--cta)] hover:bg-[var(--cta-hover)] text-[var(--cta-text)] border-none">
            <Link href="/pricing">View Pilot Pricing Details</Link>
          </Button>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center text-[var(--ink)]">Frequently asked questions</h2>
          <FAQAccordion items={generalFaqs} />
        </Container>
      </Section>

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
