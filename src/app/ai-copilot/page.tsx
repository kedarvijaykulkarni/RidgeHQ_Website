import { Container, Section } from "@/components/ui/Layout";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { CTASection } from "@/components/marketing/CTASection";
import { ScreenshotFrame } from "@/components/marketing/ScreenshotFrame";
import { VideoFrame } from "@/components/marketing/VideoFrame";
import { CheckCircle2 } from "lucide-react";
import { pageSeo } from "@/lib/config/seo";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { PageFaq } from "@/components/marketing/PageFaq";

export const metadata = {
  ...pageSeo("/ai-copilot"),
  title: "AI Copilot",
  description: "RidgeHQ's AI Copilot answers questions about today's sessions, trips, gear, waivers, and bookings, and can make scheduling changes you confirm first — inside the same permissions as your team.",
};

// Sourced from the Brain vault's Modules/AI-Copilot.md and MCP-Server.md
// (2026-10-06). Tool names, risk levels, and the undo window are as documented
// there — don't widen them.
const copilotDetail = [
  {
    heading: "What it can look at",
    body: "Ask in plain language and the Copilot reads the same live records your team works from, so its answers reflect today rather than a summary from last week.",
    points: [
      "A morning brief of what needs attention today, with a suggested next step for each alert",
      "Who on a trip still has an unsigned or expired waiver",
      "Which divers need gear from you, and in what sizes",
      "Why a trip's gear prep list is short — out for service, on another trip, or not in stock",
      "Recent bookings, including unpaid or outstanding orders",
      "How the season is going: slow days, under-used boats, returning-customer trends",
    ],
  },
  {
    heading: "What it can change — after you confirm",
    body: "When you ask for a change, the Copilot prepares it and shows you exactly what it will do. Nothing is written until you confirm, and the confirmation applies to every role, including the Owner.",
    points: [
      "Create a session, or reschedule one, from a sentence like “add a dive tomorrow at 10:00 for 10”",
      "Take a piece of gear out of service with a maintenance record",
      "Draft a gear-return reminder — drafted only, never sent without a person",
      "Bookings, cancellations, and refunds are high-risk actions: always confirmed, and limited to senior roles",
    ],
  },
  {
    heading: "What it deliberately won't do",
    body: "The Copilot is built to reduce coordination work, not to replace your judgement. Its limits are part of the design.",
    points: [
      "Act beyond the role of the person using it",
      "Skip the confirmation step on a medium- or high-risk change",
      "Offer booking, cancellation, or refund actions to outside AI assistants",
      "Send a drafted message on its own",
    ],
  },
  {
    heading: "Your choice of AI provider",
    body: "The Copilot isn't tied to one model vendor. A manager chooses the provider in Settings, and the change applies on the next question — no restart.",
    points: [
      "Anthropic by default, or OpenAI",
      "Your own API key, or a self-hosted Ollama model",
      "Every recorded action notes which provider and model carried it out",
    ],
  },
];

const copilotFaqs = [
  {
    question: "Can the AI Copilot change bookings on its own?",
    answer:
      "No. It can answer questions straight away, but any change rated medium or high risk is shown to you first and only runs after you confirm. Creating, cancelling, or refunding a booking is high risk and limited to senior roles.",
  },
  {
    question: "Can AI changes be undone?",
    answer:
      "Some can. Reversible scheduling actions — such as rescheduling a session — can be undone from the Copilot panel within one hour. Money-moving actions such as refunds are not reversible this way, which is why they always need confirmation first.",
  },
  {
    question: "Does the Copilot see things my staff shouldn't?",
    answer:
      "No. It works within the role of the person using it, and revenue figures follow the same per-business visibility rule as the rest of RidgeHQ.",
  },
  {
    question: "Which AI models does it use?",
    answer:
      "Anthropic by default. A manager can switch to OpenAI or to a self-hosted Ollama model, and can supply the business's own API key.",
  },
  {
    question: "What counts as an AI action?",
    answer:
      "A completed change the AI makes on your behalf. Questions, searches, previews, failed attempts, and undoing an action are not counted as actions.",
  },
  {
    question: "Can I use it from Claude or ChatGPT instead of the RidgeHQ app?",
    answer:
      "Yes. The same tools are available over MCP using an access token you create and can revoke. The token carries a staff role no higher than Manager, and booking, cancellation, and refund actions are never available that way.",
  },
];

export default function AICopilotPage() {
  return (
    <div className="flex flex-col w-full">
      <Section className="pb-12 pt-24">
        <Container>
          <PageBreadcrumbs className="mb-8 justify-center" trail={[{ label: "AI Copilot", href: "/ai-copilot" }]} />
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center rounded-full border border-border bg-bg-elevated px-3 py-1 text-sm text-accent-2 font-medium">
              Intelligence built for operations
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">AI that works inside the operation.</h1>
            <p className="text-xl text-ink-secondary">
              RidgeHQ is the operations platform for dive centers, surf schools, and other activity businesses. Its AI Copilot isn&rsquo;t a chatbot answering FAQs &mdash; it reads your live bookings, staff schedule, and capacity, and confirms with you before it changes anything.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Button size="lg" asChild>
                <Link href="/book-demo">Book a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/platform">Explore the Platform</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
      
      <Section className="pt-0">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Context-Aware Assistance</h2>
              <p className="text-lg text-ink-secondary">
                Because RidgeHQ connects all your data, the Copilot can inspect bookings, staff schedules, and resource availability across the entire business. It uses the exact same permission model as your team.
              </p>
            </div>
            <ScreenshotFrame src="/images/product/ai-what-needs-attention-today.webp" alt="AI Copilot summarizing what needs attention today" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <VideoFrame src="/images/product/ai-copilot-create-and-verify" poster="/images/product/ai-copilot-create-and-verify-poster.webp" label="AI Copilot creating a session and asking for confirmation before it commits" className="order-last lg:order-first" />
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Create and verify, in one flow</h2>
              <p className="text-lg text-ink-secondary">
                Ask the Copilot to add a session and it drafts the full change &mdash; program, time, staff, capacity &mdash; then shows you exactly what it will do. Nothing is written until you confirm, and the result is checked back against your live schedule.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card glass-card-hover p-8">
              <h3 className="text-xl font-bold mb-4">Controlled Actions</h3>
              <p className="text-ink-secondary mb-6">The Copilot can suggest and stage actions, but medium and high-risk operations require your explicit confirmation before execution.</p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-ink-secondary"><CheckCircle2 className="w-5 h-5 text-accent-2" /> Safe tool boundary</li>
                <li className="flex gap-3 text-sm text-ink-secondary"><CheckCircle2 className="w-5 h-5 text-accent-2" /> Operator-first confirmation</li>
              </ul>
            </div>
            
            <div className="glass-card glass-card-hover p-8">
              <h3 className="text-xl font-bold mb-4">Audit & Undo</h3>
              <p className="text-ink-secondary mb-6">Every non-read action the AI takes is recorded in the operational audit log. Selected schedule and assignment actions have explicit undo support.</p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-ink-secondary"><CheckCircle2 className="w-5 h-5 text-accent-2" /> Full mutation history</li>
                <li className="flex gap-3 text-sm text-ink-secondary"><CheckCircle2 className="w-5 h-5 text-accent-2" /> Reversible planning tools</li>
              </ul>
            </div>

            <div className="glass-card glass-card-hover p-8">
              <h3 className="text-xl font-bold mb-4">Provider Choice</h3>
              <p className="text-ink-secondary mb-6">The RidgeHQ AI layer is provider-agnostic. Depending on your configuration, it supports major models to balance intelligence with privacy.</p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-ink-secondary"><CheckCircle2 className="w-5 h-5 text-accent-2" /> Anthropic</li>
                <li className="flex gap-3 text-sm text-ink-secondary"><CheckCircle2 className="w-5 h-5 text-accent-2" /> OpenAI</li>
                <li className="flex gap-3 text-sm text-ink-secondary"><CheckCircle2 className="w-5 h-5 text-accent-2" /> Ollama support</li>
              </ul>
            </div>
          </div>

          <div className="mt-24 grid lg:grid-cols-2 gap-12">
            {copilotDetail.map((block) => (
              <div key={block.heading} className="space-y-4">
                <h2 className="text-2xl font-bold">{block.heading}</h2>
                <p className="text-ink-secondary leading-relaxed">{block.body}</p>
                <ul className="space-y-3">
                  {block.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-ink-secondary">
                      <CheckCircle2 className="w-5 h-5 shrink-0 text-accent-2" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-24 glass-card p-8 md:p-12 grid md:grid-cols-[2fr_1fr] gap-8 items-center">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">Prefer to use it from Claude or ChatGPT directly?</h2>
              <p className="text-ink-secondary">
                The same tools are available over MCP, so you can ask Claude, ChatGPT, or Claude Code
                to work with your RidgeHQ account from the assistant you already use &mdash; same
                permissions, same confirmation step, same audit log.
              </p>
            </div>
            <Button size="lg" variant="outline" asChild>
              <Link href="/docs">Connect an AI assistant &rarr;</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <PageFaq faqs={copilotFaqs} className="bg-bg-elevated/50 border-t border-border" />

      <CTASection headline="Ready to test the Copilot?" description="Join our Design Partner program to help shape AI workflows for activity operations." primaryCtaText="Request Early Access" primaryCtaHref="/design-partners" />
    </div>
  );
}
