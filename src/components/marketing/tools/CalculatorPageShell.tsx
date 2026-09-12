import Link from "next/link";
import { ReactNode } from "react";
import { Container, Section } from "@/components/ui/Layout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/marketing/CTASection";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";

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
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Tools", path: "/tools" },
          { name: title, path: `/tools/${slug}` },
        ])}
      />
      <Section className="pb-8 pt-24">
        <Container>
          <Breadcrumbs className="mb-8" items={[{ label: "Tools", href: "/tools" }, { label: title }]} />
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">{title}</h1>
            <p className="text-lg text-slate-400 leading-relaxed">{intro}</p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>{calculator}</Container>
      </Section>

      <Section className="border-t border-white/5">
        <Container>
          <div className="max-w-3xl space-y-4 text-slate-400 text-sm leading-relaxed">
            <h2 className="text-xl font-bold text-white">{whyHeading}</h2>
            {whyBody}
          </div>
        </Container>
      </Section>

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
          <p className="text-center text-sm text-slate-500">
            <Link href="/tools" className="text-[#22D3EE] hover:underline">
              See all calculators &rarr;
            </Link>
          </p>
        </Container>
      </Section>
    </div>
  );
}
