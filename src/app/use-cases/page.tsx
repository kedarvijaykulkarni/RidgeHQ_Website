import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";
import { pageSeo } from "@/lib/config/seo";
import { useCases } from "@/lib/config/use-cases";
import { ArrowRight } from "lucide-react";

export const metadata = {
  ...pageSeo("/use-cases"),
  title: "Operational Problems RidgeHQ Solves",
  description:
    "Problem-first guides to specific operational headaches — instructor scheduling, gear coordination — and how RidgeHQ addresses each one, with an honest note on when it may not fit.",
};

export default function UseCasesIndexPage() {
  return (
    <div className="flex flex-col w-full">
      <StructuredData
        data={breadcrumbJsonLd([{ name: "Use Cases", path: "/use-cases" }])}
      />
      <Section className="pt-24 pb-16">
        <Container>
          <Breadcrumbs className="mb-8" items={[{ label: "Use Cases" }]} />
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink">
              Solve the specific problem, not just the industry
            </h1>
            <p className="text-xl text-ink-secondary">
              These pages start from an operational headache — not a business type — and walk
              through why it happens, what it costs to leave unmanaged, and how RidgeHQ addresses
              it (including when it may not be the right fit).
            </p>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <Link
                key={useCase.slug}
                href={`/use-cases/${useCase.slug}`}
                className="glass-card glass-card-hover group rounded-2xl border border-[var(--border)] p-8"
              >
                <h2 className="text-2xl font-bold text-ink mb-3 transition-colors group-hover:text-accent">{useCase.title}</h2>
                <p className="text-ink-secondary leading-relaxed mb-4">{useCase.heroTagline}</p>
                <span className="inline-flex items-center gap-1 text-accent text-sm font-medium">
                  Read more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
