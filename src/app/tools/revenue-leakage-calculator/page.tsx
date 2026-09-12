import { CalculatorPageShell } from "@/components/marketing/tools/CalculatorPageShell";
import { RevenueLeakageCalculator } from "@/components/marketing/tools/RevenueLeakageCalculator";
import { pageSeo } from "@/lib/config/seo";

export const metadata = {
  ...pageSeo("/tools/revenue-leakage-calculator"),
  title: "Revenue Leakage Calculator",
  description:
    "Estimate what missed charges, unbilled add-ons, and manual pricing errors cost your activity business per year, from your own booking volume and an estimated leakage rate.",
};

export default function RevenueLeakageCalculatorPage() {
  return (
    <CalculatorPageShell
      slug="revenue-leakage-calculator"
      title="Revenue Leakage Calculator"
      intro="Revenue leakage isn't a single event — it's the sum of small gaps: an add-on that never made it onto the invoice, a manual price entered wrong, a deposit that was never converted to a full charge. Estimate your own rate below."
      calculator={<RevenueLeakageCalculator />}
      whyBody={
        <>
          <p>
            Leakage tends to concentrate wherever a charge depends on someone remembering to add it
            manually — gear add-ons, late fees, upgrades — rather than the booking system applying it
            automatically. The more manual steps between a booking and an invoice, the more places
            revenue can quietly disappear.
          </p>
          <p>
            The leakage rate above is your own estimate, not a measured RidgeHQ figure. If you don&rsquo;t
            know your rate, a rough audit of a month of invoices against what should have been charged
            is usually enough to estimate it.
          </p>
        </>
      }
      ctaHeadline="See how RidgeHQ prevents manual pricing gaps"
      ctaDescription="Add-ons, deposits, and final charges are calculated from the same booking record on RidgeHQ, not re-entered by hand at checkout."
      ctaSecondaryText="Explore Bookings & POS"
      ctaSecondaryHref="/platform/bookings-pos"
    />
  );
}
