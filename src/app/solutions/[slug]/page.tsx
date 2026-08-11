import { Container, Section } from "@/components/ui/Layout";
import { ZohoLeadForm } from "@/components/forms/ZohoLeadForm";
import { verticals } from "@/lib/config/verticals";
import { notFound } from "next/navigation";
import { ScreenshotFrame } from "@/components/marketing/ScreenshotFrame";
import { CheckCircle2 } from "lucide-react";

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
    title: `${vertical.name} Operations Software`,
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
        <div className="absolute inset-0 bg-[#6366F1]/5 pointer-events-none"></div>
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-w-xl">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-[#22D3EE] font-medium">
                Built for {vertical.name}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                {vertical.heroHeadline}
              </h1>
              <p className="text-xl text-slate-400">
                {vertical.heroDescription}
              </p>
            </div>
            <div>
              {/* Fake form/CTA trigger card */}
              <div className="glass-card p-6 md:p-8 space-y-6">
                <h3 className="text-xl font-bold">See RidgeHQ in action</h3>
                <p className="text-sm text-slate-400">Book a personalized demo to see how we handle your specific operational workflows.</p>
                <ZohoLeadForm intent="book_demo" sourcePage={`/solutions/${vertical.slug}`} vertical={vertical.name} />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Specific Pain & Capability */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">The operational reality</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                {vertical.painPoint}
              </p>
            </div>
            <div className="glass-card p-8 border-l-4 border-l-[#22D3EE]">
              <h3 className="text-xl font-bold mb-3">How RidgeHQ helps</h3>
              <p className="text-slate-300 font-medium">{vertical.keyCapability}</p>
              <ul className="mt-6 space-y-3">
                <li className="flex gap-3 text-sm text-slate-400"><CheckCircle2 className="w-5 h-5 text-[#6366F1]" /> Unified booking and dispatch</li>
                <li className="flex gap-3 text-sm text-slate-400"><CheckCircle2 className="w-5 h-5 text-[#6366F1]" /> Smart staff availability mapping</li>
                <li className="flex gap-3 text-sm text-slate-400"><CheckCircle2 className="w-5 h-5 text-[#6366F1]" /> Live gear and resource inventory</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
      
      <Section className="bg-slate-900/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Built around the work</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Stop acting as the manual API between your booking engine and your team.</p>
          </div>
          <ScreenshotFrame src="/images/product/event-planner.png" alt={`${vertical.name} schedule management`} />
        </Container>
      </Section>
    </div>
  );
}
