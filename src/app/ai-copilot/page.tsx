import { Container, Section } from "@/components/ui/Layout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/marketing/CTASection";
import { ScreenshotFrame } from "@/components/marketing/ScreenshotFrame";
import { CheckCircle2 } from "lucide-react";
import { pageSeo } from "@/lib/config/seo";

export const metadata = {
  ...pageSeo("/ai-copilot"),
  title: "AI Copilot",
  description: "AI that works inside the operation, with full operational context.",
};

export default function AICopilotPage() {
  return (
    <div className="flex flex-col w-full">
      <Section className="pb-12 pt-24">
        <Container>
          <Breadcrumbs className="mb-8" items={[{ label: "AI Copilot" }]} />
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-[#8B5CF6] font-medium">
              Intelligence built for operations
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">AI that works inside the operation.</h1>
            <p className="text-xl text-slate-400">
              The Copilot isn&rsquo;t just a chatbot answering FAQs. It understands your live operational context, capacity, and schedule.
            </p>
          </div>
        </Container>
      </Section>
      
      <Section className="pt-0">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Context-Aware Assistance</h2>
              <p className="text-lg text-slate-400">
                Because RidgeHQ connects all your data, the Copilot can inspect bookings, staff schedules, and resource availability across the entire business. It uses the exact same permission model as your team.
              </p>
            </div>
            <ScreenshotFrame src="/images/product/ai-what-needs-attention-today.png" alt="AI Copilot summarizing what needs attention today" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <ScreenshotFrame src="/images/product/ai-copilot-create-and-verify.gif" alt="AI Copilot creating a session and asking for confirmation before it commits" className="order-last lg:order-first" />
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Create and verify, in one flow</h2>
              <p className="text-lg text-slate-400">
                Ask the Copilot to add a session and it drafts the full change &mdash; program, time, staff, capacity &mdash; then shows you exactly what it will do. Nothing is written until you confirm, and the result is checked back against your live schedule.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4">Controlled Actions</h3>
              <p className="text-slate-400 mb-6">The Copilot can suggest and stage actions, but medium and high-risk operations require your explicit confirmation before execution.</p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-slate-400"><CheckCircle2 className="w-5 h-5 text-[#8B5CF6]" /> Safe tool boundary</li>
                <li className="flex gap-3 text-sm text-slate-400"><CheckCircle2 className="w-5 h-5 text-[#8B5CF6]" /> Operator-first confirmation</li>
              </ul>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4">Audit & Undo</h3>
              <p className="text-slate-400 mb-6">Every non-read action the AI takes is recorded in the operational audit log. Selected schedule and assignment actions have explicit undo support.</p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-slate-400"><CheckCircle2 className="w-5 h-5 text-[#8B5CF6]" /> Full mutation history</li>
                <li className="flex gap-3 text-sm text-slate-400"><CheckCircle2 className="w-5 h-5 text-[#8B5CF6]" /> Reversible planning tools</li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4">Provider Choice</h3>
              <p className="text-slate-400 mb-6">The RidgeHQ AI layer is provider-agnostic. Depending on your configuration, it supports major models to balance intelligence with privacy.</p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-slate-400"><CheckCircle2 className="w-5 h-5 text-[#8B5CF6]" /> Anthropic</li>
                <li className="flex gap-3 text-sm text-slate-400"><CheckCircle2 className="w-5 h-5 text-[#8B5CF6]" /> OpenAI</li>
                <li className="flex gap-3 text-sm text-slate-400"><CheckCircle2 className="w-5 h-5 text-[#8B5CF6]" /> Ollama support</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
      
      <CTASection headline="Ready to test the Copilot?" description="Join our Design Partner program to help shape AI workflows for activity operations." primaryCtaText="Request Early Access" primaryCtaHref="/design-partners" />
    </div>
  );
}
