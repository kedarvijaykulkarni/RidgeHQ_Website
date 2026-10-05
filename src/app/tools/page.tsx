import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";
import { pageSeo } from "@/lib/config/seo";
import { tools } from "@/lib/config/tools";
import { ArrowRight } from "lucide-react";

export const metadata = {
  ...pageSeo("/tools"),
  title: "Free Calculators for Activity Businesses",
  description:
    "Free, editable calculators for activity-business operators — estimate what no-shows and manual admin actually cost your operation, with the formulas shown.",
};

export default function ToolsPage() {
  return (
    <div className="flex flex-col w-full">
      <StructuredData data={breadcrumbJsonLd([{ name: "Tools", path: "/tools" }])} />
      <Section className="pb-12 pt-24">
        <Container>
          <Breadcrumbs className="mb-8" items={[{ label: "Tools" }]} />
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-ink">
              Free calculators for activity businesses.
            </h1>
            <p className="text-xl text-ink-secondary">
              Educational tools with the formulas exposed and every input editable — these estimate the
              cost of a problem, they don&rsquo;t claim a guaranteed RidgeHQ saving.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0 border-t border-[var(--border)]">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="glass-card group rounded-2xl border border-[var(--border)] p-8 transition-colors hover:border-accent/40"
              >
                <h2 className="text-xl font-bold text-ink mb-2">{tool.title}</h2>
                <p className="text-ink-secondary text-sm leading-relaxed mb-4">{tool.description}</p>
                <span className="inline-flex items-center gap-1 text-sm text-accent">
                  Open calculator <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
