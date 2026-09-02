import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import { Button } from "@/components/ui/Button";
import { CustomLeadForm } from "@/components/forms/CustomLeadForm";
import { platformCapabilities } from "@/lib/config/platform";
import { notFound } from "next/navigation";
import { ScreenshotFrame } from "@/components/marketing/ScreenshotFrame";
import { CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";
import { pageSeo } from "@/lib/config/seo";

const DEFAULT_FEATURE_IMAGES = [
  "/images/product/dash-responsive-desktop.png",
  "/images/product/event-planner.png",
  "/images/product/gear.png",
];

// Per-capability screenshot sets for the three feature sections.
const FEATURE_IMAGES_BY_SLUG: Record<string, string[]> = {
  "bookings-pos": ["/images/product/booking-wizard.jpg", "/images/product/reports-sales.jpg", "/images/product/bookings.png"],
  "scheduling": ["/images/product/event-planner.png", "/images/product/staff.png", "/images/product/gear.png"],
  "gear-rentals": ["/images/product/gear.png", "/images/product/fleet.png", "/images/product/event-planner.png"],
  "staff": ["/images/product/staff.png", "/images/product/event-planner.png", "/images/product/client-profile.jpg"],
  "customers-participants": ["/images/product/client-profile.jpg", "/images/product/bookings.png", "/images/product/dashboard-overview.jpg"],
  "payments": ["/images/product/reports-sales.jpg", "/images/product/reports-financials.jpg", "/images/product/partners.png"],
};

const PROOF_IMAGE_BY_SLUG: Record<string, string> = {
  "bookings-pos": "/images/product/bookings.png",
  "scheduling": "/images/product/event-planner.png",
  "gear-rentals": "/images/product/gear.png",
  "staff": "/images/product/staff.png",
  "customers-participants": "/images/product/client-profile.jpg",
  "payments": "/images/product/reports-sales.jpg",
};

export function generateStaticParams() {
  return platformCapabilities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const capability = platformCapabilities.find((c) => c.slug === slug);
  if (!capability) return {};

  return {
    ...pageSeo(`/platform/${capability.slug}`),
    title: capability.title,
    description: capability.heroTagline ?? capability.description,
  };
}

export default async function PlatformCapabilityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const capability = platformCapabilities.find((c) => c.slug === slug);

  if (!capability) {
    notFound();
  }

  const featureImages = FEATURE_IMAGES_BY_SLUG[capability.slug] ?? DEFAULT_FEATURE_IMAGES;
  const proofImage = PROOF_IMAGE_BY_SLUG[capability.slug] ?? "/images/product/dash-responsive-desktop.png";

  return (
    <div className="flex flex-col w-full">
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Platform", path: "/platform" },
          { name: capability.title, path: `/platform/${capability.slug}` },
        ])}
      />
      {/* Hero */}
      <Section className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-[var(--accent-soft)] pointer-events-none"></div>
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-w-xl">
              <Breadcrumbs
                className="mb-2"
                items={[{ label: "Platform", href: "/platform" }, { label: capability.title }]}
              />
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-[#22D3EE] font-medium">
                Platform &mdash; {capability.title}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                {capability.heroHeadline ?? capability.title}
              </h1>
              <p className="text-xl text-slate-400">
                {capability.heroTagline ?? capability.description}
              </p>
              {capability.heroProofPoints && capability.heroProofPoints.length > 0 && (
                <ul className="flex flex-wrap gap-2 pt-2">
                  {capability.heroProofPoints.map((point, i) => (
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
                  A short walkthrough of how {capability.title.toLowerCase()} works in RidgeHQ and connects to the rest of the operational day.
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

      {/* Feature Sections */}
      {capability.featureSections && capability.featureSections.length > 0 && (
        <Section className="border-t border-white/5">
          <Container>
            <div className="space-y-20 md:space-y-28">
              {capability.featureSections.map((feature, i) => (
                <div key={i} className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                  <div className={i % 2 === 1 ? "lg:order-last" : ""}>
                    <ScreenshotFrame
                      src={featureImages[i % featureImages.length]}
                      alt={`${capability.title}: ${feature.heading}`}
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

      {/* How it connects */}
      {capability.connections && capability.connections.length > 0 && (
        <Section className="bg-slate-900/50 border-t border-b border-white/5">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">How it connects to the rest of the system</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Nothing in RidgeHQ works in isolation. {capability.title} feeds &mdash; and is fed by &mdash; every other part of the operational day.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {capability.connections.map((connection, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-[#22D3EE] font-semibold mb-2">
                    <ArrowRight className="w-4 h-4 shrink-0" />
                    {connection.to}
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{connection.detail}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Outcomes */}
      {capability.outcomes && capability.outcomes.length > 0 && (
        <Section className="border-t border-white/5">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">What it changes day to day</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {capability.outcomes.map((outcome, i) => (
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
      <Section className="bg-slate-900/50 border-t border-b border-white/5">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">One system for the operational day</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              <Link href="/platform" className="text-[#22D3EE] hover:underline">See how every capability fits together &rarr;</Link>
            </p>
          </div>
          <ScreenshotFrame src={proofImage} alt={`${capability.title} in RidgeHQ`} />
        </Container>
      </Section>

      {/* FAQs */}
      {capability.faqs && capability.faqs.length > 0 && (
        <Section>
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Common Questions</h2>
            </div>
            <FAQAccordion items={capability.faqs} />
          </Container>
        </Section>
      )}

      {/* Book a demo */}
      <Section id="book-demo" className="relative overflow-hidden border-t border-white/5 scroll-mt-24">
        <div className="absolute inset-0 bg-[var(--accent-soft)] pointer-events-none"></div>
        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-10 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">See {capability.title} in RidgeHQ</h2>
            <p className="text-lg text-slate-400">
              Book a demo and we&apos;ll walk through your real operational workflows &mdash; bookings, schedule, resources, and the day close.
            </p>
          </div>
          <CustomLeadForm
            title={`Book a demo — ${capability.title}`}
            description="Tell us about your operation and we'll tailor the walkthrough."
            buttonText="Book a Demo"
          />
          <p className="text-center mt-8">
            <Link href="/platform" className="text-[#22D3EE] hover:underline text-sm">
              Or explore the full platform &rarr;
            </Link>
          </p>
        </Container>
      </Section>
    </div>
  );
}
