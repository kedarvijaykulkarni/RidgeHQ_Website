import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { pageSeo } from "@/lib/config/seo";
import { comparisons } from "@/lib/config/comparisons";
import { ArrowRight } from "lucide-react";

export const metadata = {
  ...pageSeo("/compare"),
  title: "Compare RidgeHQ",
  description:
    "Honest comparisons between RidgeHQ and how activity businesses run today — by category, not by naming specific competitors, with strengths and limitations stated on both sides.",
};

export default function ComparePage() {
  return (
    <div className="flex flex-col w-full">
      <Section className="pb-12 pt-24">
        <Container>
          <PageBreadcrumbs className="mb-8" trail={[{ label: "Compare", href: "/compare" }]} />
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-ink">
              How RidgeHQ compares
            </h1>
            <p className="text-xl text-ink-secondary">
              Comparisons by category — how a typical commission-based booking platform or a
              spreadsheet-and-chat setup works, versus RidgeHQ — with honest strengths and limitations
              on both sides, not a one-sided pitch.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0 border-t border-border">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {comparisons.map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="glass-card glass-card-hover group rounded-2xl border border-[var(--border)] p-8"
              >
                <h2 className="text-xl font-bold text-ink mb-2 transition-colors group-hover:text-accent">{c.title}</h2>
                <p className="text-ink-secondary text-sm leading-relaxed mb-4">{c.heroTagline}</p>
                <span className="inline-flex items-center gap-1 text-sm text-accent">
                  Read comparison <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
