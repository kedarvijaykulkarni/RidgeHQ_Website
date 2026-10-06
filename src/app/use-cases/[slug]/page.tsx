import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section } from "@/components/ui/Layout";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { CTASection } from "@/components/marketing/CTASection";
import { StructuredData } from "@/components/seo/StructuredData";
import { faqPageJsonLd } from "@/lib/faqPageJsonLd";
import { pageSeo } from "@/lib/config/seo";
import { useCases } from "@/lib/config/use-cases";
import { platformCapabilities } from "@/lib/config/platform";
import { verticals } from "@/lib/config/verticals";
import { CheckCircle2, AlertTriangle } from "lucide-react";

export function generateStaticParams() {
  return useCases.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const useCase = useCases.find((u) => u.slug === slug);
  if (!useCase) return {};

  return {
    ...pageSeo(`/use-cases/${useCase.slug}`),
    title: useCase.title,
    description: useCase.heroTagline,
  };
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const useCase = useCases.find((u) => u.slug === slug);

  if (!useCase) {
    notFound();
  }

  const relatedCapability = platformCapabilities.find((c) => c.slug === useCase.relatedPlatformSlug);
  const relatedVerticals = verticals.filter((v) => useCase.relatedVerticalSlugs.includes(v.slug));

  return (
    <div className="flex flex-col w-full">
      {useCase.faqs.length > 0 && <StructuredData data={faqPageJsonLd(useCase.faqs)} />}

      <Section className="pt-24 pb-16">
        <Container>
          <PageBreadcrumbs className="mb-8" trail={[{ label: "Use Cases", href: "/use-cases" }, { label: useCase.title, href: `/use-cases/${useCase.slug}` }]} />
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink">
              {useCase.heroHeadline}
            </h1>
            <p className="text-xl text-ink-secondary">{useCase.heroTagline}</p>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-ink">The problem</h2>
              <p className="text-lg text-ink-secondary leading-relaxed">{useCase.problem}</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-ink">Why it happens</h2>
              <p className="text-lg text-ink-secondary leading-relaxed">{useCase.whyItHappens}</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-ink">The cost of leaving it unmanaged</h2>
              <p className="text-lg text-ink-secondary leading-relaxed">{useCase.costOfInaction}</p>
            </div>
            <div className="space-y-4 glass-card glass-card-hover p-8">
              <h2 className="text-2xl font-bold text-ink flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                How RidgeHQ helps
              </h2>
              <p className="text-lg text-ink-secondary leading-relaxed">{useCase.howRidgeHqHelps}</p>
              {relatedCapability && (
                <Link
                  href={`/platform/${relatedCapability.slug}`}
                  className="link-inline text-sm inline-block"
                >
                  See the {relatedCapability.title} capability &rarr;
                </Link>
              )}
            </div>
            <div className="space-y-4 glass-card glass-card-hover p-8 bg-amber-500/5 border-amber-500/20">
              <h2 className="text-2xl font-bold text-ink flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-warning shrink-0" />
                When RidgeHQ may not be the right fit
              </h2>
              <p className="text-lg text-ink-secondary leading-relaxed">{useCase.whenNotSuitable}</p>
            </div>

            {relatedVerticals.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-ink">Businesses that run into this</h2>
                <div className="flex flex-wrap gap-3">
                  {relatedVerticals.map((v) => (
                    <Link
                      key={v.slug}
                      href={`/solutions/${v.slug}`}
                      className="chip-link"
                    >
                      {v.name}
                    </Link>
                  ))}
                  <Link
                    href="/pricing"
                    className="chip-link"
                  >
                    Pricing
                  </Link>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {useCase.faqs.length > 0 && (
        <Section className="border-t border-border">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-ink text-center">Common Questions</h2>
              <FAQAccordion items={useCase.faqs} />
            </div>
          </Container>
        </Section>
      )}

      <CTASection
        headline={`Ready to see ${useCase.title.toLowerCase()} solved on your operation?`}
        description="Book a demo and we'll walk through your real bookings, staff, and gear — not a generic script."
      />
    </div>
  );
}
