import { Container, Section } from "@/components/ui/Layout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";
import { pageSeo } from "@/lib/config/seo";
import { caseStudies } from "@/lib/config/case-studies";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata = {
  ...pageSeo("/case-studies"),
  title: "Case Studies",
  description:
    "Real results from RidgeHQ design partners — published as they happen, never fabricated. Currently onboarding our first Founding Operator Pilot partners.",
  robots: { index: false, follow: true },
};

export default function CaseStudiesIndexPage() {
  return (
    <div className="flex flex-col w-full">
      <StructuredData data={breadcrumbJsonLd([{ name: "Case Studies", path: "/case-studies" }])} />
      <Section className="pb-12 pt-24">
        <Container>
          <Breadcrumbs className="mb-8" items={[{ label: "Case Studies" }]} />
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Case Studies</h1>
            <p className="text-xl text-slate-400">
              Real operational results from RidgeHQ design partners — published only once they exist,
              with the partner&rsquo;s consent, never hypothetical.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          {caseStudies.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center glass-card p-12 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-white">In progress</h3>
              <p className="text-slate-400">
                We&rsquo;re currently onboarding our Founding Operator Pilot partners. Real case studies
                will be published here as design partners have results worth sharing — we don&rsquo;t
                publish placeholder or illustrative stories in their place.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudies.map((cs) => (
                <div key={cs.slug} className="glass-card rounded-2xl border border-white/10 bg-white/5 p-8">
                  <h2 className="text-xl font-bold text-white mb-2">{cs.businessType}</h2>
                  <p className="text-slate-400 text-sm leading-relaxed">{cs.problem}</p>
                </div>
              ))}
            </div>
          )}
        </Container>
      </Section>

      <CTASection
        headline="Become a design partner"
        description="Help shape RidgeHQ's roadmap and be one of the first real results published here."
        primaryCtaText="Join the Design Partner Program"
        primaryCtaHref="/design-partners"
      />
    </div>
  );
}
