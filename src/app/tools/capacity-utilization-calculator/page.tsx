import { CalculatorPageShell } from "@/components/marketing/tools/CalculatorPageShell";
import { CapacityUtilizationCalculator } from "@/components/marketing/tools/CapacityUtilizationCalculator";
import { pageSeo } from "@/lib/config/seo";

export const metadata = {
  ...pageSeo("/tools/capacity-utilization-calculator"),
  title: "Capacity Utilization Calculator",
  description:
    "Estimate what percentage of your boats, bikes, rooms, or gear inventory's available time is actually booked, from your own unit count and hours.",
};

export default function CapacityUtilizationCalculatorPage() {
  return (
    <CalculatorPageShell
      slug="capacity-utilization-calculator"
      title="Capacity Utilization Calculator"
      intro="The same ratio applied to physical inventory instead of staff: booked hours divided by available hours, across your boats, bikes, rooms, or gear sets."
      calculator={<CapacityUtilizationCalculator />}
      whyBody={
        <>
          <p>
            Capacity utilization is easiest to get wrong when gear or units are tracked in more than one
            place — a rental fleet booked through one tool and a walk-in hire desk tracking availability
            separately, for example, makes &ldquo;available hours&rdquo; a guess rather than a real number.
          </p>
          <p>
            <strong className="text-slate-300">This is a standalone educational calculator.</strong>{" "}
            Check the current platform and product pages for what RidgeHQ tracks and reports today,
            rather than assuming this figure represents a built-in RidgeHQ report.
          </p>
        </>
      }
      ctaHeadline="Talk through your gear and fleet tracking"
      ctaDescription="If double-booked or hard-to-find gear is the real problem, RidgeHQ's Gear & Fleet Management capability draws lessons, tours, and walk-in hire from one shared inventory."
      ctaSecondaryText="Explore Gear & Fleet Management"
      ctaSecondaryHref="/platform/gear-rentals"
    />
  );
}
