import { Container, Section } from "@/components/ui/Layout";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { CustomLeadForm } from "@/components/forms/CustomLeadForm";
import { PageFaq } from "@/components/marketing/PageFaq";
import { pageSeo } from "@/lib/config/seo";

export const metadata = {
  ...pageSeo("/design-partners"),
  title: "Design Partner Program",
  description: "Join RidgeHQ's Founding Operator Pilot as a design partner: founder-led onboarding, help migrating your data, regular feedback calls, and early influence over the booking, scheduling, and gear workflows you use.",
};

// Programme terms from the Brain vault's public-page-source-brief.md §5 and
// business-context.md. Commercial terms (price, contract length) are
// deliberately not stated here while pricing is in pilot mode.
const steps = [
  { title: "Apply", detail: "Tell us about your operation below — what you run, how many staff and bookings, and the tools you use today." },
  { title: "Talk it through", detail: "A conversation with the founder about where your day goes wrong and whether RidgeHQ is a fit right now. If it isn't, we'll say so." },
  { title: "Set up together", detail: "Founder-led onboarding: your activities, staff, gear, and customers set up with you, with help bringing existing data across." },
  { title: "Shape the product", detail: "Regular feedback calls while you run real days on RidgeHQ. What you find becomes the roadmap." },
];

const faqs = [
  {
    question: "Who is the Design Partner Program for?",
    answer:
      "Owner-operated and growing activity businesses that need more than a booking button — typically with staff to schedule, gear to rent or allocate, waivers or certifications to track, and partners or agents who send bookings. Dive centers and watersports operators are the first focus.",
  },
  {
    question: "What do design partners get?",
    answer:
      "Founder-led onboarding, help migrating your existing data, regular feedback calls, early pricing access, and a direct line into what gets built next.",
  },
  {
    question: "What do you expect from a design partner?",
    answer:
      "Running real operational days on RidgeHQ and giving structured, honest feedback about what works and what doesn't. That feedback is the point of the programme.",
  },
  {
    question: "How much does it cost?",
    answer:
      "The pilot is a paid programme. Current terms are on the pricing page and are confirmed with you directly before you start.",
  },
  {
    question: "Is RidgeHQ only for dive centers?",
    answer:
      "No. Dive centers are the first focus, but RidgeHQ also runs surf, kite, sailing, and windsurf schools, ski schools, outdoor and whitewater operators, resorts, camps, and rental and tour businesses.",
  },
];

export default function DesignPartnersPage() {
  return (
    <div className="flex flex-col w-full">
      <Section className="min-h-[80vh]">
        <Container>
          <PageBreadcrumbs className="mb-8 justify-center" trail={[{ label: "Design Partners", href: "/design-partners" }]} />
          <div className="max-w-2xl mx-auto text-center mb-12 space-y-4">
            <div className="inline-flex items-center rounded-full border border-border bg-bg-elevated px-3 py-1 text-sm text-accent-2 font-medium mb-4">
              Founding Operator Pilot
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Design Partner Program</h1>
            <p className="text-lg text-ink-secondary">
              RidgeHQ runs bookings, scheduling, staff, gear, and payments for dive centers, surf schools, and other activity businesses in one system. We&rsquo;re onboarding a small group of operators before the broad launch and working with each one directly &mdash; apply below.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-4">
              <h2 className="text-xl font-bold">What to expect</h2>
              <ul className="space-y-3 text-ink-secondary">
                <li>• Founder-led onboarding</li>
                <li>• Help migrating your existing data</li>
                <li>• Regular feedback calls and early influence over the roadmap</li>
                <li>• Early pricing access</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Who we&rsquo;re looking for</h2>
              <ul className="space-y-3 text-ink-secondary">
                <li>• Operators with real scheduling, staff, and gear coordination to do</li>
                <li>• Willing to provide structured, honest feedback</li>
                <li>• Open to trying AI Copilot workflows, with confirmation on every change</li>
              </ul>
            </div>
          </div>

          <CustomLeadForm />
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold">Why a design partner programme</h2>
              <p className="text-lg text-ink-secondary leading-relaxed">
                Activity businesses lose hours every week being the link between a booking widget, a
                spreadsheet, a whiteboard, and a group chat. RidgeHQ is built to remove that work &mdash; and
                the fastest way to get it right is to build it alongside operators running real days, rather
                than guessing from the outside. A small group means every partner works with the founder
                directly.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {steps.map((s, i) => (
                <div key={s.title} className="glass-card glass-card-hover p-6 space-y-2">
                  <p className="text-sm font-mono text-accent">Step {i + 1}</p>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{s.detail}</p>
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
