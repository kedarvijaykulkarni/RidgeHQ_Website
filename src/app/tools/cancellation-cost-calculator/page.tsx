import { CalculatorPageShell } from "@/components/marketing/tools/CalculatorPageShell";
import { CancellationCostCalculator } from "@/components/marketing/tools/CancellationCostCalculator";
import { pageSeo } from "@/lib/config/seo";

export const metadata = {
  ...pageSeo("/tools/cancellation-cost-calculator"),
  title: "Cancellation Cost Calculator",
  description:
    "Estimate what late cancellations cost your activity business per year, from your own booking volume, cancellation rate, and how often you manage to rebook the slot.",
};

export default function CancellationCostCalculatorPage() {
  return (
    <CalculatorPageShell
      slug="cancellation-cost-calculator"
      title="Cancellation Cost Calculator"
      intro="A cancelled booking isn't automatically a lost one — if you can rebook the slot, the revenue comes back. Enter your own numbers to see what's actually left on the table after backfilling."
      calculator={<CancellationCostCalculator />}
      whyBody={
        <>
          <p>
            Cancellations happen for reasons no-shows don&rsquo;t — a genuine schedule conflict, weather,
            illness. The revenue impact depends less on the cancellation itself and more on how much
            lead time you get and how easily you can offer that slot to someone else.
          </p>
          <p>
            RidgeHQ doesn&rsquo;t claim a specific cancellation or backfill rate for your business — the
            calculator above only estimates the cost of the pattern as it stands today.
          </p>
        </>
      }
      ctaHeadline="See how RidgeHQ handles rebooking and waitlists"
      ctaDescription="A cancelled slot on RidgeHQ is immediately visible as available inventory across your booking channels — not a manual re-listing step."
      ctaSecondaryText="Explore Bookings & POS"
      ctaSecondaryHref="/platform/bookings-pos"
    />
  );
}
