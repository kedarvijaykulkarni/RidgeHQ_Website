import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/marketing/CTASection";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";
import { pageSeo } from "@/lib/config/seo";
import { NoShowCostCalculator } from "@/components/marketing/tools/NoShowCostCalculator";

export const metadata = {
  ...pageSeo("/tools/no-show-cost-calculator"),
  title: "No-Show Cost Calculator",
  description:
    "Estimate what no-shows cost your activity business per year, from your own booking volume, average booking value, and no-show rate.",
};

export default function NoShowCostCalculatorPage() {
  return (
    <div className="flex flex-col w-full">
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Tools", path: "/tools" },
          { name: "No-Show Cost Calculator", path: "/tools/no-show-cost-calculator" },
        ])}
      />
      <Section className="pb-8 pt-24">
        <Container>
          <Breadcrumbs
            className="mb-8"
            items={[{ label: "Tools", href: "/tools" }, { label: "No-Show Cost Calculator" }]}
          />
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              No-Show Cost Calculator
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              A booking that no-shows still held a seat, a slot, an instructor, or a boat spot that
              someone else could have taken. Enter your own numbers below to see what that adds up to
              over a year.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <NoShowCostCalculator />
        </Container>
      </Section>

      <Section className="border-t border-white/5">
        <Container>
          <div className="max-w-3xl space-y-4 text-slate-400 text-sm leading-relaxed">
            <h2 className="text-xl font-bold text-white">Why this happens</h2>
            <p>
              No-shows are more common when there is friction between booking and arrival — no deposit,
              no reminder, or a booking that lives in a system your team never actually looks at day to
              day. Reducing the rate usually comes from tightening whichever of those is weakest for
              your operation, not from a single fix.
            </p>
            <p>
              RidgeHQ doesn&rsquo;t claim a specific reduction in no-shows for your business — the
              calculator above only estimates the cost of the problem as it stands today.
            </p>
          </div>
        </Container>
      </Section>

      <CTASection
        headline="See how RidgeHQ handles bookings and reminders"
        description="Confirmations, pre-arrival reminders, and deposits are part of every booking on RidgeHQ, not a separate step."
        primaryCtaText="Book a Demo"
        primaryCtaHref="/book-demo"
        secondaryCtaText="Explore Bookings & POS"
        secondaryCtaHref="/platform/bookings-pos"
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
