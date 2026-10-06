import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { pageSeo } from "@/lib/config/seo";
import { comparisons } from "@/lib/config/comparisons";
import { ArrowRight } from "lucide-react";
import { PageFaq } from "@/components/marketing/PageFaq";

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

      <Section className="border-t border-border">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-ink">How to use these comparisons</h2>
            <p className="text-lg text-ink-secondary leading-relaxed">
              Most activity businesses are choosing between three ways of working: a booking platform
              that takes a commission on each sale, a set of general tools held together by spreadsheets
              and chat, or one operational system. Each has real strengths. These pages compare by
              category rather than by naming vendors, and they list where the alternative is genuinely
              the better choice.
            </p>
            <h3 className="text-2xl font-bold text-ink">Questions worth answering before you switch</h3>
            <ul className="space-y-3 text-ink-secondary list-disc pl-6">
              <li>What share of your revenue goes to booking commission today, and on which bookings?</li>
              <li>How many times is a single booking re-typed &mdash; into the schedule, the rota, the gear list, the till?</li>
              <li>Where do you find out about a double-booked instructor or missing gear: at booking time, or at check-in?</li>
              <li>Can your current setup tell you, without an export, what you earned yesterday and from which channel?</li>
              <li>If you rely on a marketplace for discovery, would you lose bookings by moving direct sales elsewhere?</li>
            </ul>
          </div>
        </Container>
      </Section>

      <PageFaq faqs={compareFaqs} className="bg-bg-elevated/50 border-t border-border" />
    </div>
  );
}

const compareFaqs = [
  {
    question: "Why don't you name specific competitors?",
    answer:
      "Because the useful decision is usually between ways of working — commission-based booking, spreadsheets and chat, or one operational system — rather than between brands, and category comparisons stay accurate as individual products change.",
  },
  {
    question: "Is RidgeHQ always the better choice?",
    answer:
      "No. If most of your bookings come from a marketplace's own audience, or your operation is small enough that a shared calendar works, the alternative may suit you better. Each comparison says so.",
  },
  {
    question: "How does RidgeHQ charge, compared with commission-based platforms?",
    answer:
      "RidgeHQ takes 0% commission on direct bookings through your own website; you pay the payment provider's normal processing fee and a subscription. Current terms are on the pricing page.",
  },
];
