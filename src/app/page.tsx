import { Container, Section } from "@/components/ui/Layout";
import { Button } from "@/components/ui/Button";
import { FeatureCard } from "@/components/marketing/FeatureCard";
import { VerticalCard } from "@/components/marketing/VerticalCard";
import { IntegrationCard } from "@/components/marketing/IntegrationCard";
import { ScreenshotFrame } from "@/components/marketing/ScreenshotFrame";
import { CTASection } from "@/components/marketing/CTASection";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { platformCapabilities } from "@/lib/config/platform";
import { verticals } from "@/lib/config/verticals";
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
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <Section className="relative overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 bg-[url('/images/topography.svg')] opacity-10 pointer-events-none"></div>
        <Container className="relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-[#6366F1] font-medium mb-8">
            The Activity Business OS
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Run your entire activity business from one HQ.
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            RidgeHQ connects bookings, schedules, staff, customers, gear, rentals, trips, payments and daily operations in one live system &mdash; with an AI copilot built around the work.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/book-demo">Book a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/design-partners">Join the Design Partner Program</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Hero Visual / Product Proof */}
      <Section className="pt-0">
        <Container>
          <ScreenshotFrame src="/images/product/event-planner.png" alt="RidgeHQ Event Planner Interface" />
        </Container>
      </Section>

      {/* Problem & Solution */}
      <Section className="bg-slate-900/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Your operation is connected. Your tools aren't.</h2>
            <p className="text-lg text-slate-400">
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
              <h2 className="text-3xl md:text-4xl font-bold">AI that works inside the operation.</h2>
              <p className="text-lg text-slate-400">
                The Copilot is not a decorative chat bubble. It understands current operational context, inspects bookings and staff schedules, and can safely use product tools to help you manage the day.
              </p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1]"></div>
                  Medium/high-risk actions require your confirmation.
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1]"></div>
                  Fully auditable AI actions with explicit undo support for selected operations.
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1]"></div>
                  Powered by Anthropic, OpenAI, or Ollama depending on configuration.
                </li>
              </ul>
              <Button variant="outline" asChild className="mt-4">
                <Link href="/ai-copilot">Learn about the Copilot</Link>
              </Button>
            </div>
            <ScreenshotFrame src="/images/product/dash-responsive-desktop.png" alt="RidgeHQ Dashboard with AI Context" />
          </div>
        </Container>
      </Section>

      {/* 12-Vertical Explorer */}
      <Section className="bg-slate-900/30">
        <Container>
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">One operational model. Different ways to run the day.</h2>
            <p className="text-lg text-slate-400">
              Whether you schedule instructors, boats, boards, bikes, rooms or guided trips, the core challenge is similar: coordinate people, capacity, resources, time and payment without losing the operational picture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {verticals.slice(0, 4).map(v => (
              <VerticalCard key={v.id} vertical={v} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="link" asChild>
              <Link href="/solutions">View all supported industries &rarr;</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Integrations */}
      <Section>
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">Connected to your ecosystem</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {integrations.map(int => (
              <IntegrationCard key={int.id} integration={int} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Pricing Philosophy */}
      <Section className="bg-slate-900/30">
        <Container className="text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transparent subscription. Zero direct booking fees.</h2>
          <p className="text-lg text-slate-400 mb-8">
            RidgeHQ is available via a predictable subscription. We charge 0% platform commission on your direct bookings, because you shouldn't be penalized for your own marketing success.
          </p>
          <Button asChild>
            <Link href="/pricing">View Pilot Pricing Details</Link>
          </Button>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently asked questions</h2>
          <FAQAccordion items={generalFaqs} />
        </Container>
      </Section>

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
