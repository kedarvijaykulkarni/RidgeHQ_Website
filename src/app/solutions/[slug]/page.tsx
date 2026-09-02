import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import { Button } from "@/components/ui/Button";
import { CustomLeadForm } from "@/components/forms/CustomLeadForm";
import { verticals } from "@/lib/config/verticals";
import { notFound } from "next/navigation";
import { ScreenshotFrame } from "@/components/marketing/ScreenshotFrame";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";

const DEFAULT_FEATURE_IMAGES = [
  "/images/product/bookings.png",
  "/images/product/event-planner.png",
  "/images/product/client-profile.jpg",
];

// Per-vertical screenshot sets for the three feature sections
// (order: "sell every seat" / "day-of operations" / "the admin runs itself").
const FEATURE_IMAGES_BY_SLUG: Record<string, string[]> = {
  "dive-centers": ["/images/product/bookings.png", "/images/product/event-planner.png", "/images/product/client-profile.jpg"],
  "surf-schools": ["/images/product/bookings.png", "/images/product/event-planner.png", "/images/product/client-profile.jpg"],
  "kitesurf-schools": ["/images/product/bookings.png", "/images/product/event-planner.png", "/images/product/client-profile.jpg"],
  "sailing-schools": ["/images/product/bookings.png", "/images/product/fleet.png", "/images/product/client-profile.jpg"],
  "windsurf-schools": ["/images/product/booking-wizard.jpg", "/images/product/gear.png", "/images/product/client-profile.jpg"],
  "outdoor-whitewater": ["/images/product/bookings.png", "/images/product/event-planner.png", "/images/product/client-profile.jpg"],
  "ski-schools": ["/images/product/bookings.png", "/images/product/event-planner.png", "/images/product/staff.png"],
  "dive-resorts": ["/images/product/bookings.png", "/images/product/accommodation-calendar.jpg", "/images/product/reports-sales.jpg"],
  "surf-camps": ["/images/product/bookings.png", "/images/product/accommodation-calendar.jpg", "/images/product/client-profile.jpg"],
  "kayak-rental-tours": ["/images/product/bookings.png", "/images/product/gear.png", "/images/product/client-profile.jpg"],
  "bike-rental-tours": ["/images/product/bookings.png", "/images/product/fleet.png", "/images/product/client-profile.jpg"],
  "boat-rental-courses": ["/images/product/bookings.png", "/images/product/fleet.png", "/images/product/client-profile.jpg"],
};

const PROOF_IMAGE_BY_SLUG: Record<string, string> = {
  "dive-resorts": "/images/product/accommodation-calendar.jpg",
  "surf-camps": "/images/product/accommodation-calendar.jpg",
  "sailing-schools": "/images/product/fleet.png",
  "boat-rental-courses": "/images/product/fleet.png",
  "bike-rental-tours": "/images/product/fleet.png",
};

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

  const featureImages = FEATURE_IMAGES_BY_SLUG[vertical.slug] ?? DEFAULT_FEATURE_IMAGES;
  const proofImage = PROOF_IMAGE_BY_SLUG[vertical.slug] ?? "/images/product/dash-responsive-desktop.png";

  return (
    <div className="flex flex-col w-full">
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Built For", path: "/solutions" },
          { name: vertical.name, path: `/solutions/${vertical.slug}` },
        ])}
      />
      {/* Vertical Hero */}
      <Section className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-[var(--accent-soft)] pointer-events-none"></div>
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-w-xl">
              <Breadcrumbs
                className="mb-2"
                items={[{ label: "Built For", href: "/solutions" }, { label: vertical.name }]}
              />
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-[#22D3EE] font-medium">
                Built for {vertical.name}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                {vertical.heroHeadline}
              </h1>
              <p className="text-xl text-slate-400">
                {vertical.heroDescription}
              </p>
              {vertical.heroProofPoints && vertical.heroProofPoints.length > 0 && (
                <ul className="flex flex-wrap gap-2 pt-2">
                  {vertical.heroProofPoints.map((point, i) => (
                    <li
                      key={i}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="lg:pl-8">
              <div className="glass-card p-8 space-y-5 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl shadow-xl shadow-black/50">
                <h3 className="text-xl font-bold text-white">See it on your operation</h3>
                <p className="text-sm text-slate-400">
                  A short walkthrough of RidgeHQ mapped to how {vertical.name.toLowerCase()} actually run the day &mdash; bookings, schedule, resources, and the close.
                </p>
                <Button size="lg" asChild className="w-full">
                  <Link href="#book-demo">
                    Book a Demo
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <p className="text-xs text-slate-500 text-center">Takes about two minutes to request.</p>
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
                <h4 className="font-semibold text-white">From booking to day close:</h4>
                <div className="space-y-4">
                  {vertical.workflow && vertical.workflow.length > 0
                    ? vertical.workflow.map((step, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-6 h-6 rounded-full bg-[var(--accent)]/20 text-[var(--accent)] flex items-center justify-center shrink-0 text-sm font-bold">
                            {i + 1}
                          </div>
                          <p className="text-sm text-slate-300">
                            <span className="font-semibold text-white">{step.title}.</span>{" "}
                            {step.detail}
                          </p>
                        </div>
                      ))
                    : vertical.representativeFlow.map((step, i) => (
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
      
      {/* Feature Sections */}
      {vertical.featureSections && vertical.featureSections.length > 0 && (
        <Section className="border-t border-white/5">
          <Container>
            <div className="space-y-20 md:space-y-28">
              {vertical.featureSections.map((feature, i) => (
                <div
                  key={i}
                  className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"
                >
                  <div className={i % 2 === 1 ? "lg:order-last" : ""}>
                    <ScreenshotFrame
                      src={featureImages[i % featureImages.length]}
                      alt={`${vertical.name}: ${feature.heading}`}
                    />
                  </div>
                  <div className="space-y-5">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">{feature.heading}</h2>
                    <p className="text-lg text-slate-400 leading-relaxed">{feature.body}</p>
                    <ul className="space-y-3">
                      {feature.points.map((point, j) => (
                        <li key={j} className="flex gap-3 text-sm text-slate-300">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Outcomes */}
      {vertical.outcomes && vertical.outcomes.length > 0 && (
        <Section className="bg-slate-900/50 border-t border-b border-white/5">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">What changes when the operation is connected</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {vertical.outcomes.map((outcome, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-2">{outcome.label}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{outcome.detail}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Product Proof */}
      <Section className="border-t border-white/5">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Built around the work</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Stop acting as the manual API between your booking engine and your team.</p>
          </div>
          <ScreenshotFrame src={proofImage} alt={`${vertical.name} operations in RidgeHQ`} />
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

      {/* Book a demo */}
      <Section id="book-demo" className="relative overflow-hidden border-t border-white/5 scroll-mt-24">
        <div className="absolute inset-0 bg-[var(--accent-soft)] pointer-events-none"></div>
        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-10 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">See RidgeHQ for {vertical.name.toLowerCase()}</h2>
            <p className="text-lg text-slate-400">
              Book a demo and we&apos;ll walk through your real operational workflows &mdash; bookings, schedule, resources, and the day close.
            </p>
          </div>
          <CustomLeadForm
            title={`Book a demo — ${vertical.name}`}
            description="Tell us about your operation and we'll tailor the walkthrough."
            buttonText="Book a Demo"
          />
          <p className="text-center mt-8">
            <Link href="/platform" className="text-[#22D3EE] hover:underline text-sm">
              Or explore the platform &rarr;
            </Link>
          </p>
        </Container>
      </Section>
    </div>
  );
}
