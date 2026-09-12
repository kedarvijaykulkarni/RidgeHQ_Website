import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section } from "@/components/ui/Layout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/marketing/CTASection";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";
import { pageSeo } from "@/lib/config/seo";
import { comparisons } from "@/lib/config/comparisons";
import { ComparisonTable } from "@/components/marketing/comparisons/ComparisonTable";
import { CheckCircle2, AlertTriangle } from "lucide-react";

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comparison = comparisons.find((c) => c.slug === slug);
  if (!comparison) return {};

  return {
    ...pageSeo(`/compare/${comparison.slug}`),
    title: comparison.title,
    description: comparison.heroTagline,
  };
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comparison = comparisons.find((c) => c.slug === slug);

  if (!comparison) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Compare", path: "/compare" },
          { name: comparison.title, path: `/compare/${comparison.slug}` },
        ])}
      />
      <Section className="pb-8 pt-24">
        <Container>
          <Breadcrumbs
            className="mb-8"
            items={[{ label: "Compare", href: "/compare" }, { label: comparison.title }]}
          />
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              {comparison.heroHeadline}
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">{comparison.heroTagline}</p>
            <p className="text-xs text-slate-500">Last updated {comparison.lastUpdated}.</p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <ComparisonTable rows={comparison.rows} categoryLabel={comparison.categoryLabel} />
        </Container>
      </Section>

      <Section className="border-t border-white/5">
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                What this category does well
              </h2>
              <p className="text-slate-400 leading-relaxed">{comparison.categoryStrengths}</p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                Where RidgeHQ currently falls short
              </h2>
              <p className="text-slate-400 leading-relaxed">{comparison.ridgehqLimitations}</p>
              {comparison.relatedToolSlug && (
                <Link
                  href={`/tools/${comparison.relatedToolSlug}`}
                  className="text-[#22D3EE] hover:underline text-sm inline-block"
                >
                  Check your own numbers: {comparison.relatedToolTitle} &rarr;
                </Link>
              )}
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-2">Who should choose this category</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {comparison.whoShouldChooseCategory}
                </p>
              </div>
              <div className="glass-card p-6 rounded-2xl bg-[#22D3EE]/5 border border-[#22D3EE]/20">
                <h3 className="text-lg font-bold text-white mb-2">Who should choose RidgeHQ</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {comparison.whoShouldChooseRidgeHq}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        headline="See the difference on your own numbers"
        description="Book a demo and we'll walk through your real booking volume, gateway costs, and current tools — not a hypothetical."
      />
    </div>
  );
}
