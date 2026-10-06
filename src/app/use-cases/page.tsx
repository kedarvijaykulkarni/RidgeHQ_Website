import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { pageSeo } from "@/lib/config/seo";
import { useCases } from "@/lib/config/use-cases";
import { ArrowRight } from "lucide-react";
import { PageFaq } from "@/components/marketing/PageFaq";

export const metadata = {
  ...pageSeo("/use-cases"),
  title: "Operational Problems RidgeHQ Solves",
  description:
    "Problem-first guides to specific operational headaches — instructor scheduling, gear coordination — and how RidgeHQ addresses each one, with an honest note on when it may not fit.",
};

export default function UseCasesIndexPage() {
  return (
    <div className="flex flex-col w-full">
      <Section className="pt-24 pb-16">
        <Container>
          <PageBreadcrumbs className="mb-8" trail={[{ label: "Use Cases", href: "/use-cases" }]} />
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

      <Section className="border-t border-border">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-ink">How these guides are written</h2>
            <p className="text-lg text-ink-secondary leading-relaxed">
              Each guide follows the same structure, so you can judge quickly whether the problem is
              yours: what goes wrong, why it keeps happening when bookings and operations live in
              separate tools, what it costs to leave it alone, how RidgeHQ addresses it, and &mdash; just
              as important &mdash; when it probably isn&rsquo;t worth solving for a business your size.
            </p>
            <p className="text-lg text-ink-secondary leading-relaxed">
              The common root cause is the same in almost every case: the booking is recorded in one
              place, and the schedule, the staff rota, the gear list, and the payment record are rebuilt
              from it by hand somewhere else. Every re-keying step is a chance for a double-booked
              instructor, a missing wetsuit size, or a payment that never matches its booking.
            </p>
          </div>
        </Container>
      </Section>

      <PageFaq faqs={useCaseIndexFaqs} className="bg-bg-elevated/50 border-t border-border" />
    </div>
  );
}

const useCaseIndexFaqs = [
  {
    question: "What's the difference between a use case and an industry page?",
    answer:
      "Industry pages start from a business type, such as dive centers or surf schools. Use cases start from a specific operational problem that cuts across business types, such as scheduling instructors or keeping gear from being committed twice.",
  },
  {
    question: "Do these guides say when RidgeHQ isn't a fit?",
    answer:
      "Yes. Every guide has a section on when the problem may not be costing you much — for example, a one- or two-instructor operation often doesn't need more than a shared calendar.",
  },
  {
    question: "Can I suggest a problem you haven't covered?",
    answer:
      "Yes. Get in touch through the contact page; recurring operator problems become new guides and, often, new product work.",
  },
];
