import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";
import { pageSeo } from "@/lib/config/seo";
import { ArrowRight } from "lucide-react";

export const metadata = {
  ...pageSeo("/tools"),
  title: "Free Calculators for Activity Businesses",
  description:
    "Free, editable calculators for activity-business operators — estimate what no-shows and manual admin actually cost your operation, with the formulas shown.",
};

const tools = [
  {
    title: "No-Show Cost Calculator",
    slug: "no-show-cost-calculator",
    description: "Estimate the annual revenue lost to no-shows, from your own booking volume and no-show rate.",
  },
  {
    title: "Admin Time Cost Calculator",
    slug: "admin-time-cost-calculator",
    description: "Estimate the annual cost of manually re-keying bookings, waivers, and schedules across separate tools.",
  },
  {
    title: "Cancellation Cost Calculator",
    slug: "cancellation-cost-calculator",
    description: "Estimate what late cancellations cost per year, after accounting for how often you rebook the slot.",
  },
  {
    title: "Revenue Leakage Calculator",
    slug: "revenue-leakage-calculator",
    description: "Estimate what missed charges, unbilled add-ons, and pricing errors cost your operation per year.",
  },
  {
    title: "Break-Even Calculator",
    slug: "break-even-calculator",
    description: "Estimate how many bookings per month you need to cover your fixed costs.",
  },
  {
    title: "ROI Calculator",
    slug: "roi-calculator",
    description: "Estimate the return on investment of a new operational system, from your own cost and savings estimate.",
  },
  {
    title: "CAC:LTV Calculator",
    slug: "cac-ltv-calculator",
    description: "Estimate customer lifetime value and the LTV-to-acquisition-cost ratio for your operation.",
  },
  {
    title: "Instructor Utilization Calculator",
    slug: "instructor-utilization-calculator",
    description: "Estimate what percentage of your instructors' or guides' available time is actually booked.",
  },
  {
    title: "Capacity Utilization Calculator",
    slug: "capacity-utilization-calculator",
    description: "Estimate what percentage of your boats, bikes, rooms, or gear inventory is actually booked.",
  },
  {
    title: "Spreadsheet Readiness Assessment",
    slug: "spreadsheet-readiness-assessment",
    description: "A short, scored quiz on how much manual reconciliation your current tools actually require.",
  },
];

export default function ToolsPage() {
  return (
    <div className="flex flex-col w-full">
      <StructuredData data={breadcrumbJsonLd([{ name: "Tools", path: "/tools" }])} />
      <Section className="pb-12 pt-24">
        <Container>
          <Breadcrumbs className="mb-8" items={[{ label: "Tools" }]} />
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Free calculators for activity businesses.
            </h1>
            <p className="text-xl text-slate-400">
              Educational tools with the formulas exposed and every input editable — these estimate the
              cost of a problem, they don&rsquo;t claim a guaranteed RidgeHQ saving.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0 border-t border-white/5">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="glass-card group rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-[#22D3EE]/40"
              >
                <h2 className="text-xl font-bold text-white mb-2">{tool.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{tool.description}</p>
                <span className="inline-flex items-center gap-1 text-sm text-[#22D3EE]">
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
