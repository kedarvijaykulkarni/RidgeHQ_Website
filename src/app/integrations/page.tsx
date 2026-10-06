import { Container, Section } from "@/components/ui/Layout";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { IntegrationCard } from "@/components/marketing/IntegrationCard";
import { integrations } from "@/lib/config/integrations";
import { CTASection } from "@/components/marketing/CTASection";
import { PageFaq } from "@/components/marketing/PageFaq";
import { pageSeo } from "@/lib/config/seo";

export const metadata = {
  ...pageSeo("/integrations"),
  title: "Integrations",
  description:
    "What RidgeHQ connects to today — Stripe payments, your website's booking widget, marine weather, email, calendar feeds, and AI assistants — and what is still on the roadmap.",
};

// Grouped explanation of the integration surfaces. Facts from the Brain
// vault's Architecture/Integration-Architecture.md, Modules/Settings.md,
// Modules/MCP-Server.md, and Operations/Tenant-Onboarding.md (2026-10-06).
const groups = [
  {
    heading: "Taking money",
    body: "Online checkout takes card payments through Stripe, and every payment is recorded against the order it settles, so the booking and the money never drift apart. An online order is only confirmed once its payment succeeds, which means a checkout that never paid doesn't hold a seat. Direct bookings carry 0% RidgeHQ commission; the payment provider's normal processing fee still applies.",
  },
  {
    heading: "Selling on your own website",
    body: "The booking widget embeds on your own site, so customers book and pay without leaving your brand. You can list the exact domains allowed to show it, which stops your checkout from being framed on a site you don't control. Availability is the same one your front desk and planner use.",
  },
  {
    heading: "Conditions, email, and calendars",
    body: "Marine data from Stormglass — wind, waves, swell, water temperature, and tide — is fetched for each of your spots and shown beside the sessions it affects. Booking confirmations, cancellations, and messages to everyone on a session or trip are sent by email from RidgeHQ. A private iCal link lets staff subscribe to the session schedule in the calendar app they already use; it contains no customer data and can be rotated.",
  },
  {
    heading: "AI, on your terms",
    body: "The AI Copilot can run on Anthropic, OpenAI, or a self-hosted Ollama model, with your business's own API key if you prefer. Outside assistants such as Claude or ChatGPT can connect over MCP using an access token you create, scope to a role, and revoke at any time.",
  },
];

const faqs = [
  {
    question: "Which payment provider does RidgeHQ support?",
    answer:
      "Stripe is the supported payment provider for online checkout today. Adapters for PayPal and Redsys also exist; if you depend on one of them, talk to us before relying on it.",
  },
  {
    question: "Does RidgeHQ integrate with PADI or SSI?",
    answer:
      "Not as a system-to-system integration yet — it's on the roadmap. Today your staff record each customer's certification and level in RidgeHQ, with the staff member who verified it, and mark course completions, which creates the certification record on the customer's profile.",
  },
  {
    question: "Can we export to our accounting software?",
    answer:
      "A direct accounting export is planned but not built. Today you have the daily close, revenue and P&L reports, and staff fee statements in RidgeHQ, with CSV downloads for customers, fee statements, and the maintenance register.",
  },
  {
    question: "Can we use our existing waiver tool?",
    answer:
      "RidgeHQ has digital waivers built in — per participant, with a typed signature and optional conditional medical questions — so most operators don't need a separate waiver product. A third-party waiver integration isn't offered.",
  },
  {
    question: "Can the booking widget go on any website builder?",
    answer:
      "It is an embeddable snippet, so it works on sites that let you add custom embed code. Add each domain (including the www. version) to your allowed embed sites so the widget is permitted to load there.",
  },
];

export default function IntegrationsPage() {
  const implemented = integrations.filter((i) => i.state === "implemented");
  const roadmap = integrations.filter((i) => i.state !== "implemented");

  return (
    <div className="flex flex-col w-full">
      <Section className="pb-12 pt-24">
        <Container>
          <PageBreadcrumbs className="mb-8 justify-center" trail={[{ label: "Integrations", href: "/integrations" }]} />
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Connected to your ecosystem.</h1>
            <p className="text-xl text-ink-secondary">
              RidgeHQ is the operational core; integrations bring payments, your website, conditions, email,
              calendars, and AI into it. Below is what connects today, what is partly available, and what is
              still on the roadmap &mdash; labelled honestly.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="space-y-16">
            <div>
              <h2 className="text-2xl font-bold mb-8">Available today</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {implemented.map((int) => (
                  <IntegrationCard key={int.id} integration={int} />
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {groups.map((g) => (
                <div key={g.heading} className="space-y-3">
                  <h2 className="text-2xl font-bold">{g.heading}</h2>
                  <p className="text-ink-secondary leading-relaxed">{g.body}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-8">Partly available and on the roadmap</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {roadmap.map((int) => (
                  <IntegrationCard key={int.id} integration={int} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <PageFaq faqs={faqs} className="bg-bg-elevated/50 border-t border-border" />

      <CTASection headline="Need a specific integration?" description="We prioritize our roadmap based on operator needs. Let us know what you're connecting." primaryCtaText="Contact Us" primaryCtaHref="/contact" />
    </div>
  );
}
