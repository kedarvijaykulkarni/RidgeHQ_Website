import Link from "next/link";
import { ReactNode } from "react";
import { Container, Section } from "@/components/ui/Layout";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { CTASection } from "@/components/marketing/CTASection";
import { ToolRelatedSolutions } from "@/components/marketing/tools/ToolRelatedSolutions";

interface CalculatorPageShellProps {
  slug: string;
  title: string;
  intro: string;
  calculator: ReactNode;
  whyHeading?: string;
  whyBody: ReactNode;
  ctaHeadline: string;
  ctaDescription: string;
  ctaPrimaryText?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
}

/**
 * Shared layout for /tools/[slug] calculator pages — hero, the calculator
 * itself, a "why this happens" explainer, a stage-appropriate CTA, and a
 * link back to the calculator index. Extracted after the first two
 * calculators (No-Show Cost, Admin Time Cost) so each new one doesn't
 * repeat ~90 lines of identical structure.
 */
export function CalculatorPageShell({
  slug,
  title,
  intro,
  calculator,
  whyHeading = "Why this happens",
  whyBody,
  ctaHeadline,
  ctaDescription,
  ctaPrimaryText = "Book a Demo",
  ctaPrimaryHref = "/book-demo",
  ctaSecondaryText,
  ctaSecondaryHref,
}: CalculatorPageShellProps) {
  return (
    <div className="flex flex-col w-full">
      <Section className="pb-8 pt-24">
        <Container>
          <PageBreadcrumbs className="mb-8" trail={[{ label: "Tools", href: "/tools" }, { label: title, href: `/tools/${slug}` }]} />
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-ink">{title}</h1>
            <p className="text-lg text-ink-secondary leading-relaxed">{intro}</p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>{calculator}</Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <div className="max-w-3xl space-y-4 text-ink-secondary text-sm leading-relaxed">
            <h2 className="text-xl font-bold text-ink">{whyHeading}</h2>
            {whyBody}
          </div>
        </Container>
      </Section>

      <ToolRelatedSolutions slug={slug} />

      <CTASection
        headline={ctaHeadline}
        description={ctaDescription}
        primaryCtaText={ctaPrimaryText}
        primaryCtaHref={ctaPrimaryHref}
        secondaryCtaText={ctaSecondaryText}
        secondaryCtaHref={ctaSecondaryHref}
      />

      <Section className="pt-0 pb-16">
        <Container>
          <p className="text-center text-sm text-ink-tertiary">
            <Link href="/tools" className="link-inline">
              See all calculators &rarr;
            </Link>
          </p>
        </Container>
      </Section>
    </div>
  );
}
