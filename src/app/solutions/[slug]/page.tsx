import { Container, Section } from "@/components/ui/Layout";
import { CustomLeadForm } from "@/components/forms/CustomLeadForm";
import { verticals } from "@/lib/config/verticals";
import { notFound } from "next/navigation";
import { ScreenshotFrame } from "@/components/marketing/ScreenshotFrame";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";

export async function generateStaticParams() {
  return verticals.map((v) => ({
    slug: v.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const vertical = verticals.find((v) => v.slug === resolvedParams.slug);
  if (!vertical) return {};
  
  return {
    title: `${vertical.name} Operations Software — RidgeHQ`,
    description: vertical.heroDescription,
  };
}

export default async function VerticalPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const vertical = verticals.find((v) => v.slug === resolvedParams.slug);
  
  if (!vertical) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      {/* Vertical Hero */}
      <Section className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-[var(--accent-soft)] pointer-events-none"></div>
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-w-xl">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-[#22D3EE] font-medium">
                Built for {vertical.name}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                {vertical.heroHeadline}
              </h1>
              <p className="text-xl text-slate-400">
                {vertical.heroDescription}
              </p>
            </div>
            <div>
              <div className="glass-card p-6 md:p-8 space-y-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl shadow-xl shadow-black/50">
                <h3 className="text-xl font-bold text-white">See RidgeHQ in action</h3>
                <p className="text-sm text-slate-400">Book a personalized demo to see how we handle your specific operational workflows.</p>
                <CustomLeadForm 
                  title={`See RidgeHQ for ${vertical.name}`}
                  description="Book a demo to see how we handle your specific operational workflows."
                  buttonText="Book a Demo"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Specific Pain & Capability */}
      <Section className="border-t border-white/5">
        <Container>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white">The operational reality</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                {vertical.painPoint}
              </p>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Core Constraints Managed</h3>
                <ul className="space-y-3">
                  {vertical.constraints.map((constraint, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-400">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      {constraint}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="glass-card p-8 border-l-4 border-l-[#22D3EE] bg-white/5 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-white">How RidgeHQ helps</h3>
              <p className="text-[#22D3EE] font-medium text-lg mb-6">{vertical.keyCapability}</p>
              
              <div className="space-y-6">
                <h4 className="font-semibold text-white">Representative Flow:</h4>
                <div className="space-y-4">
                  {vertical.representativeFlow.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-[var(--accent)]/20 text-[var(--accent)] flex items-center justify-center shrink-0 text-sm font-bold">
                        {i + 1}
                      </div>
                      <p className="text-sm text-slate-300">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Product Proof */}
      <Section className="bg-slate-900/50 border-t border-b border-white/5">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Built around the work</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Stop acting as the manual API between your booking engine and your team.</p>
          </div>
          <ScreenshotFrame src="/images/product/event-planner.png" alt={`${vertical.name} schedule management`} />
        </Container>
      </Section>
      
      {/* FAQs */}
      {vertical.faqs && vertical.faqs.length > 0 && (
        <Section>
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Common Questions</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">How RidgeHQ handles {vertical.name.toLowerCase()} edge cases.</p>
            </div>
            <FAQAccordion items={vertical.faqs} />
          </Container>
        </Section>
      )}
    </div>
  );
}
