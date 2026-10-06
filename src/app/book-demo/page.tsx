import { Container, Section } from "@/components/ui/Layout";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { CustomLeadForm } from "@/components/forms/CustomLeadForm";
import { PageFaq } from "@/components/marketing/PageFaq";
import { pageSeo } from "@/lib/config/seo";

export const metadata = {
  ...pageSeo("/book-demo"),
  title: "Book a Demo",
  description: "Book a walkthrough of RidgeHQ mapped to how your activity business runs — bookings, the weekly planner, staff, gear, waivers, and payments — so you can judge whether it fits before committing.",
};

const covers = [
  { title: "Your booking flow", detail: "How a booking made on your website, at the desk, or by an agent lands on one order and one session, with deposits, promo codes, and waivers attached." },
  { title: "The day plan", detail: "The weekly planner by activity, staff, and trip, with overlap checks on instructor assignments and weather and tide for your spots." },
  { title: "Gear and customers", detail: "Gear tracked by unit and size, maintenance that takes kit out of service, and customer profiles with certifications and sizes." },
  { title: "Money and reporting", detail: "Payments against orders, the daily close, revenue by origin, partner commissions, and staff fees." },
  { title: "The AI Copilot", detail: "Asking about today in plain language, and making a scheduling change that waits for your confirmation." },
  { title: "What it doesn't do yet", detail: "An honest look at the gaps that matter for your operation, so there are no surprises later." },
];

const faqs = [
  {
    question: "What should I have ready for the demo?",
    answer:
      "A rough picture of a typical week: the activities you run, how many staff and boats or vehicles you schedule, the gear you rent, and the tools you use today. That lets us show the parts of RidgeHQ that matter to you.",
  },
  {
    question: "Who runs the demo?",
    answer:
      "The founder. RidgeHQ is founder-led, so you talk to the person who builds the product and can answer detailed questions about how it works.",
  },
  {
    question: "Will you show it with our own data?",
    answer:
      "The demo uses example data shaped like your kind of operation. Bringing in your own data — such as your customer list from CSV — is part of onboarding if you go ahead.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "RidgeHQ is currently onboarding operators through a paid Founding Operator Pilot rather than open self-service sign-up. The pricing page has the current terms.",
  },
];

export default function BookDemoPage() {
  return (
    <div className="flex flex-col w-full">
      <Section className="min-h-[80vh] flex items-center">
        <Container>
          <PageBreadcrumbs className="mb-8 justify-center" trail={[{ label: "Book a Demo", href: "/book-demo" }]} />
          <div className="max-w-2xl mx-auto text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Book a Demo</h1>
            <p className="text-lg text-ink-secondary">
              See how RidgeHQ can connect your bookings, schedule, gear, and team. Let us know a bit about your operation so we can tailor the conversation.
            </p>
          </div>

          <CustomLeadForm
            title="Book a Demo"
            description="See RidgeHQ in action and discover how it fits your operation."
            buttonText="Request Demo"
          />
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-3xl font-bold">What the demo covers</h2>
              <p className="text-lg text-ink-secondary leading-relaxed">
                A demo is a working session, not a slide deck. We walk through RidgeHQ against the way your
                business actually runs a day, and focus on the parts where you lose the most time today.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {covers.map((c) => (
                <div key={c.title} className="glass-card glass-card-hover p-6 space-y-2">
                  <h3 className="text-lg font-bold">{c.title}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{c.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <PageFaq faqs={faqs} className="bg-bg-elevated/50 border-t border-border" />
    </div>
  );
}
