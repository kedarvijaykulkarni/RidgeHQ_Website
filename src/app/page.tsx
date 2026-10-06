import { Container, Section } from "@/components/ui/Layout";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { FeatureCard } from "@/components/marketing/FeatureCard";
import { IntegrationCard } from "@/components/marketing/IntegrationCard";
import { ScreenshotFrame } from "@/components/marketing/ScreenshotFrame";
import { CTASection } from "@/components/marketing/CTASection";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { HeroSection } from "@/components/marketing/HeroSection";
import { VerticalsExplorer } from "@/components/marketing/VerticalsExplorer";
import { Testimonial } from "@/components/marketing/Testimonial";
import { LogoBand } from "@/components/marketing/LogoBand";
import { StructuredData } from "@/components/seo/StructuredData";
import { softwareApplicationJsonLd } from "@/lib/softwareApplicationJsonLd";
import { faqPageJsonLd } from "@/lib/faqPageJsonLd";
import { videoObjectJsonLd } from "@/lib/videoObjectJsonLd";
import { YouTubeEmbed } from "@/components/marketing/YouTubeEmbed";
import { CopilotTranscript } from "@/components/marketing/CopilotTranscript";
import { homeVideo } from "@/lib/config/videos";
import { platformCapabilities } from "@/lib/config/platform";
import { integrations } from "@/lib/config/integrations";
import { generalFaqs } from "@/lib/config/faq";
import { testimonials } from "@/lib/config/testimonials";
import { clientLogos } from "@/lib/config/logos";
import Link from "next/link";
import { Calendar, Users, Box, MapPin, CreditCard, Shield, HandHeart, Lock, Users2 } from "lucide-react";

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
      <StructuredData data={softwareApplicationJsonLd()} />
      <StructuredData data={faqPageJsonLd(generalFaqs)} />
      <StructuredData data={videoObjectJsonLd(homeVideo)} />

      {/* 1. Animated Hero */}
      <HeroSection />

      {/* Hero Visual / Product Proof */}
      <Section className="pt-0 -mt-16 relative z-20">
        <Container>
          <ScreenshotFrame src="/images/product/event-planner.webp" alt="RidgeHQ event planner showing a day's sessions, staff, and resources on one timeline" priority sizes="full" />
        </Container>
      </Section>

      {/* Pricing Philosophy */}
      <Section className="bg-[var(--bg-alt)] border-t border-b border-[var(--border)]">
        <Container className="text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--ink)]">Transparent subscription. Zero direct booking fees.</h2>
          <p className="text-lg text-[var(--ink-secondary)] mb-8">
            RidgeHQ is available via a predictable subscription. We charge 0% platform commission on your direct bookings, because you shouldn&rsquo;t be penalized for your own marketing success.
          </p>
          <Button asChild>
            <Link href="/pricing">View Pilot Pricing Details</Link>
          </Button>
        </Container>
      </Section>

      {/* Problem & Solution */}
      <Section>
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
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button variant="outline" asChild>
                  <Link href="/ai-copilot">Learn about the Copilot</Link>
                </Button>
                <Link href="/docs" className="text-sm link-inline">
                  Prefer Claude or ChatGPT directly? Connect an AI assistant over MCP &rarr;
                </Link>
              </div>
            </div>
            <CopilotTranscript />
          </div>
        </Container>
      </Section>

      {/* Copilot demo video */}
      <Section className="bg-[var(--bg-alt)]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)]">See the Copilot run a dive center&apos;s schedule.</h2>
            <p className="text-lg text-[var(--ink-secondary)]">
              A one-minute look at moving off spreadsheets: the Copilot reads the day&apos;s bookings and handles scheduling inside RidgeHQ.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <YouTubeEmbed video={homeVideo} />
          </div>
        </Container>
      </Section>

      {/* Tabbed 12-Vertical Explorer */}
      <VerticalsExplorer />

      {/* Integrations */}
      <Section>
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center text-[var(--ink)]">Integrations: Connected to the RidgeHQ Software Ecosystem</h2>
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
          <Button asChild>
            <Link href="/pricing">View Pilot Pricing Details</Link>
          </Button>
        </Container>
      </Section>

      {/* Trust / Credibility */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)]">Built in the open, with real operators.</h2>
            <p className="text-lg text-[var(--ink-secondary)]">
              RidgeHQ is in its Design Partner pilot. Here&rsquo;s how we handle your data and your onboarding while we build.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <Users2 className="w-6 h-6 text-[var(--accent)] mb-3" aria-hidden />
                <CardTitle>Design Partner Program</CardTitle>
                <CardDescription>
                  We&rsquo;re onboarding a small group of operators before the broad launch and working with each one directly &mdash; direct access to the founding team, priority feature requests for your workflows, and long-term pricing benefits for early adopters.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/design-partners" className="text-sm font-medium link-inline">
                  Apply to the pilot &rarr;
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Lock className="w-6 h-6 text-[var(--accent)] mb-3" aria-hidden />
                <CardTitle>Security &amp; data ownership</CardTitle>
                <CardDescription>
                  Role-based access control across all systems, data encrypted in transit and at rest, and an AI Copilot that shares your staff&rsquo;s permission boundaries &mdash; high-risk actions require explicit operator confirmation before execution.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/security" className="text-sm font-medium link-inline">
                  Read our security posture &rarr;
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <HandHeart className="w-6 h-6 text-[var(--accent)] mb-3" aria-hidden />
                <CardTitle>Founder-led onboarding</CardTitle>
                <CardDescription>
                  Hands-on setup and data migration help from the team building the product &mdash; not a support queue. You work directly with the people who can ship the fix.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/design-partners" className="text-sm font-medium link-inline">
                  See what to expect &rarr;
                </Link>
              </CardFooter>
            </Card>
          </div>

          <Testimonial testimonials={testimonials} className="mb-12" />
          <LogoBand logos={clientLogos} />
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-[var(--bg-alt)]">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center text-[var(--ink)]">RidgeHQ App Frequently Asked Questions</h2>
          <FAQAccordion items={generalFaqs} />
        </Container>
      </Section>

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
