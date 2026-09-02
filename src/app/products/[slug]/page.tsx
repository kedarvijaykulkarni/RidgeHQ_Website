import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import { Button } from "@/components/ui/Button";
import { CustomLeadForm } from "@/components/forms/CustomLeadForm";
import { products } from "@/lib/config/products";
import { notFound } from "next/navigation";
import { ScreenshotFrame } from "@/components/marketing/ScreenshotFrame";
import { CheckCircle2, ArrowRight, ChevronRight, Clock } from "lucide-react";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";
import { pageSeo } from "@/lib/config/seo";

const DEFAULT_FEATURE_IMAGES = [
  "/images/product/dash-responsive-desktop.png",
  "/images/product/event-planner.png",
  "/images/product/client-profile.jpg",
];

const FEATURE_IMAGES_BY_SLUG: Record<string, string[]> = {
  "activity-platform": ["/images/product/dash-responsive-desktop.png", "/images/product/event-planner.png", "/images/product/client-profile.jpg"],
  "rental-app": ["/images/product/gear.png", "/images/product/fleet.png", "/images/product/booking-wizard.jpg"],
  "waiver-app": ["/images/product/client-profile.jpg", "/images/product/booking-wizard.jpg", "/images/product/bookings.png"],
};

const PROOF_IMAGE_BY_SLUG: Record<string, string> = {
  "activity-platform": "/images/product/dashboard-overview.jpg",
  "rental-app": "/images/product/gear.png",
  "waiver-app": "/images/product/client-profile.jpg",
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    ...pageSeo(`/products/${product.slug}`),
    title: product.title,
    description: product.heroTagline ?? product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const isEarlyAccess = product.status === "early-access";
  const featureImages = FEATURE_IMAGES_BY_SLUG[product.slug] ?? DEFAULT_FEATURE_IMAGES;
  const proofImage = PROOF_IMAGE_BY_SLUG[product.slug];

  return (
    <div className="flex flex-col w-full">
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Products", path: "/products" },
          { name: product.title, path: `/products/${product.slug}` },
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
                items={[{ label: "Products", href: "/products" }, { label: product.title }]}
              />
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-[#22D3EE] font-medium">
                Product{isEarlyAccess ? " — In development" : ""}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                {product.heroHeadline}
              </h1>
              <p className="text-xl text-slate-400">{product.heroTagline}</p>

              {isEarlyAccess && product.roadmapNote && (
                <div className="flex gap-3 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-slate-300">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                  <p>{product.roadmapNote}</p>
                </div>
              )}

              {!isEarlyAccess && product.heroProofPoints && product.heroProofPoints.length > 0 && (
                <ul className="flex flex-wrap gap-2 pt-2">
                  {product.heroProofPoints.map((point, i) => (
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
                <h3 className="text-xl font-bold text-white">
                  {isEarlyAccess ? "Tell us about your channels" : "See it on your operation"}
                </h3>
                <p className="text-sm text-slate-400">
                  {isEarlyAccess
                    ? `Bring your channel mix and volume to a short call — it factors into what we build first.`
                    : `A short walkthrough of how ${product.title} works in RidgeHQ and connects to the rest of the operational day.`}
                </p>
                <Button size="lg" asChild className="w-full">
                  <Link href="#book-demo">
                    {isEarlyAccess ? "Talk to us" : "Book a Demo"}
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
      {product.featureSections && product.featureSections.length > 0 && (
        <Section className="border-t border-white/5">
          <Container>
            <div className="space-y-20 md:space-y-28">
              {product.featureSections.map((feature, i) => (
                <div key={i} className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                  {!isEarlyAccess && (
                    <div className={i % 2 === 1 ? "lg:order-last" : ""}>
                      <ScreenshotFrame
                        src={featureImages[i % featureImages.length]}
                        alt={`${product.title}: ${feature.heading}`}
                      />
                    </div>
                  )}
                  <div className={`space-y-5 ${isEarlyAccess ? "lg:col-span-2 max-w-3xl" : ""}`}>
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
      {product.connections && product.connections.length > 0 && (
        <Section className="bg-slate-900/50 border-t border-b border-white/5">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">How it connects to the rest of the system</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Nothing in RidgeHQ works in isolation. {product.title} feeds &mdash; and is fed by &mdash; every other part of the operational day.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {product.connections.map((connection, i) => (
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
      {product.outcomes && product.outcomes.length > 0 && (
        <Section className="border-t border-white/5">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                {isEarlyAccess ? "What it is built toward" : "What it changes day to day"}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {product.outcomes.map((outcome, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-2">{outcome.label}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{outcome.detail}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Product Proof (available products only) */}
      {!isEarlyAccess && proofImage && (
        <Section className="bg-slate-900/50 border-t border-b border-white/5">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">One system for the operational day</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                <Link href="/platform" className="text-[#22D3EE] hover:underline">See how every capability fits together &rarr;</Link>
              </p>
            </div>
            <ScreenshotFrame src={proofImage} alt={`${product.title} in RidgeHQ`} />
          </Container>
        </Section>
      )}

      {/* FAQs */}
      {product.faqs && product.faqs.length > 0 && (
        <Section>
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Common Questions</h2>
            </div>
            <FAQAccordion items={product.faqs} />
          </Container>
        </Section>
      )}

      {/* Book a demo */}
      <Section id="book-demo" className="relative overflow-hidden border-t border-white/5 scroll-mt-24">
        <div className="absolute inset-0 bg-[var(--accent-soft)] pointer-events-none"></div>
        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-10 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {isEarlyAccess ? `Help shape ${product.title}` : `See ${product.title} in RidgeHQ`}
            </h2>
            <p className="text-lg text-slate-400">
              {isEarlyAccess
                ? "Tell us how you sell today and which channels matter. Design partners get the first connectors and a direct line to the build."
                : "Book a demo and we'll walk through your real operational workflows — bookings, schedule, resources, and the day close."}
            </p>
          </div>
          <CustomLeadForm
            title={`${isEarlyAccess ? "Talk to us" : "Book a demo"} — ${product.title}`}
            description="Tell us about your operation and we'll tailor the conversation."
            buttonText={isEarlyAccess ? "Request a Call" : "Book a Demo"}
          />
          <p className="text-center mt-8">
            <Link href="/products" className="text-[#22D3EE] hover:underline text-sm">
              Or see all products &rarr;
            </Link>
          </p>
        </Container>
      </Section>
    </div>
  );
}
