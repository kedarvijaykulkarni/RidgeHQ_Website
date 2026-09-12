import { CalculatorPageShell } from "@/components/marketing/tools/CalculatorPageShell";
import { InstructorUtilizationCalculator } from "@/components/marketing/tools/InstructorUtilizationCalculator";
import { pageSeo } from "@/lib/config/seo";

export const metadata = {
  ...pageSeo("/tools/instructor-utilization-calculator"),
  title: "Instructor Utilization Calculator",
  description:
    "Estimate what percentage of your instructors' or guides' available time is actually booked, from your own staff count and hours.",
};

export default function InstructorUtilizationCalculatorPage() {
  return (
    <CalculatorPageShell
      slug="instructor-utilization-calculator"
      title="Instructor Utilization Calculator"
      intro="A simple ratio: booked hours divided by available hours, across your instructor or guide team. Use it as a standalone educational estimate — see the note below on how this relates to RidgeHQ."
      calculator={<InstructorUtilizationCalculator />}
      whyBody={
        <>
          <p>
            Utilization is a useful diagnostic, but it&apos;s easy to compute wrong if bookings and staff
            availability live in separate places — the &ldquo;available hours&rdquo; side especially tends to be a
            rough guess rather than an actual number, since nothing forces it to be tracked precisely.
          </p>
          <p>
            <strong className="text-slate-300">This is a standalone educational calculator.</strong>{" "}
            RidgeHQ does not currently publish an automated instructor-utilization report as a product
            feature — this tool estimates the ratio from numbers you supply, it isn&rsquo;t pulling from
            or representing a RidgeHQ dashboard.
          </p>
        </>
      }
      ctaHeadline="Talk through your staffing and scheduling"
      ctaDescription="If tracking who's actually booked versus available is the real problem, RidgeHQ's Staff Coordination capability ties bookings and staff qualifications together directly."
      ctaSecondaryText="Explore Staff Coordination"
      ctaSecondaryHref="/platform/staff"
    />
  );
}
