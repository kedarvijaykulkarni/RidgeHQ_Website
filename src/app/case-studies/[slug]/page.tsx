import { notFound } from "next/navigation";
import { Container, Section } from "@/components/ui/Layout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/marketing/CTASection";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";
import { pageSeo } from "@/lib/config/seo";
import { caseStudies } from "@/lib/config/case-studies";
import { platformCapabilities } from "@/lib/config/platform";
import Link from "next/link";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);
  if (!caseStudy) return {};

  return {
    ...pageSeo(`/case-studies/${caseStudy.slug}`),
    title: `${caseStudy.businessType} Case Study`,
    description: caseStudy.problem,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  const capabilities = platformCapabilities.filter((c) =>
    caseStudy.relevantCapabilities.includes(c.slug),
  );

  return (
    <div className="flex flex-col w-full">
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Case Studies", path: "/case-studies" },
          { name: caseStudy.businessType, path: `/case-studies/${caseStudy.slug}` },
        ])}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: `${caseStudy.businessType} case study`,
          description: caseStudy.problem,
          datePublished: caseStudy.publishedAt,
        }}
      />
      <Section className="pb-8 pt-24">
        <Container>
          <Breadcrumbs
            className="mb-8"
            items={[{ label: "Case Studies", href: "/case-studies" }, { label: caseStudy.businessType }]}
          />
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              {caseStudy.businessType}
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">{caseStudy.problem}</p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12 text-slate-300">
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">Previous workflow</h2>
              <p>{caseStudy.previousWorkflow}</p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">The operational challenge</h2>
              <p>{caseStudy.operationalChallenge}</p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">Why RidgeHQ was evaluated</h2>
              <p>{caseStudy.whyEvaluated}</p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">Implementation</h2>
              <p>{caseStudy.implementation}</p>
            </div>
            <div className="space-y-3 glass-card p-8 rounded-2xl bg-white/5 border border-white/10">
              <h2 className="text-xl font-bold text-white">Observed result</h2>
              <p>{caseStudy.observedResult}</p>
              {caseStudy.customerQuote && (
                <blockquote className="border-l-2 border-[#22D3EE] pl-4 italic text-slate-400">
                  &ldquo;{caseStudy.customerQuote}&rdquo;
                </blockquote>
              )}
            </div>
            {capabilities.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-white">Relevant capabilities</h2>
                <div className="flex flex-wrap gap-3">
                  {capabilities.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/platform/${c.slug}`}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:border-white/20 hover:text-white transition-colors"
                    >
                      {c.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>

      <CTASection
        headline="See if RidgeHQ fits your operation the same way"
        description="Book a demo and we'll walk through your own bookings, staff, and gear."
      />
    </div>
  );
}
