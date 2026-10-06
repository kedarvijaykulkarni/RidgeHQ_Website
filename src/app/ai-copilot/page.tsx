import { Container, Section } from "@/components/ui/Layout";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { CTASection } from "@/components/marketing/CTASection";
import { ScreenshotFrame } from "@/components/marketing/ScreenshotFrame";
import { VideoFrame } from "@/components/marketing/VideoFrame";
import { CheckCircle2 } from "lucide-react";
import { pageSeo } from "@/lib/config/seo";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata = {
  ...pageSeo("/ai-copilot"),
  title: "AI Copilot",
  description: "RidgeHQ's AI Copilot reads live bookings, staff schedules, and resource availability across your business, using the same permission model as your team, and confirms before it acts.",
};

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

      <CTASection headline="Ready to test the Copilot?" description="Join our Design Partner program to help shape AI workflows for activity operations." primaryCtaText="Request Early Access" primaryCtaHref="/design-partners" />
    </div>
  );
}
