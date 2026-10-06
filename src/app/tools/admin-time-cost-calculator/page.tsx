import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { CTASection } from "@/components/marketing/CTASection";
import { pageSeo } from "@/lib/config/seo";
import { AdminTimeCostCalculator } from "@/components/marketing/tools/AdminTimeCostCalculator";
import { ToolRelatedSolutions } from "@/components/marketing/tools/ToolRelatedSolutions";

export const metadata = {
  ...pageSeo("/tools/admin-time-cost-calculator"),
  title: "Admin Time Cost Calculator for Activity Businesses",
  description:
    "Free admin time cost calculator: estimate the annual cost of manually re-keying bookings, waivers, and schedules across separate tools.",
};

export default function AdminTimeCostCalculatorPage() {
  return (
    <div className="flex flex-col w-full">
      <Section className="pb-8 pt-24">
        <Container>
          <PageBreadcrumbs className="mb-8" trail={[{ label: "Tools", href: "/tools" }, { label: "Admin Time Cost Calculator", href: "/tools/admin-time-cost-calculator" }]} />
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-ink">
              Admin Time Cost Calculator
            </h1>
            <p className="text-lg text-ink-secondary leading-relaxed">
              When a booking widget, a spreadsheet, and a schedule don&rsquo;t talk to each other,
              someone becomes the API between them — retyping the same booking two or three times.
              Estimate what that time is actually worth.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <AdminTimeCostCalculator />
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <div className="max-w-3xl space-y-4 text-ink-secondary text-sm leading-relaxed">
            <h2 className="text-xl font-bold text-ink">What counts as this time</h2>
            <p>
              Typical examples: copying an online booking onto a whiteboard or manifest, checking gear
              sizing from a separate spreadsheet, chasing a waiver by email, or reconciling the day&rsquo;s
              takings across a booking widget and a card reader that don&rsquo;t share a ledger.
            </p>
            <p>
              This estimate is only as accurate as the hours and hourly cost you enter — it isn&rsquo;t a
              measured result, and it isn&rsquo;t a claim about how much time RidgeHQ specifically will
              save your operation.
            </p>
          </div>
        </Container>
      </Section>

      <ToolRelatedSolutions slug="admin-time-cost-calculator" />

      <CTASection
        headline="See how RidgeHQ connects the operation"
        description="A booking on RidgeHQ updates the schedule, staff, gear, and reporting from the same record — nothing to re-key."
        primaryCtaText="Book a Demo"
        primaryCtaHref="/book-demo"
        secondaryCtaText="Explore the Platform"
        secondaryCtaHref="/platform"
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
