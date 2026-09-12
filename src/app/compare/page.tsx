import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";
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
      <StructuredData data={breadcrumbJsonLd([{ name: "Compare", path: "/compare" }])} />
      <Section className="pb-12 pt-24">
        <Container>
          <Breadcrumbs className="mb-8" items={[{ label: "Compare" }]} />
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              How RidgeHQ compares
            </h1>
            <p className="text-xl text-slate-400">
              Comparisons by category — how a typical commission-based booking platform or a
              spreadsheet-and-chat setup works, versus RidgeHQ — with honest strengths and limitations
              on both sides, not a one-sided pitch.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0 border-t border-white/5">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {comparisons.map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="glass-card group rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-[#22D3EE]/40"
              >
                <h2 className="text-xl font-bold text-white mb-2">{c.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{c.heroTagline}</p>
                <span className="inline-flex items-center gap-1 text-sm text-[#22D3EE]">
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
