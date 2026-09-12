import { CalculatorPageShell } from "@/components/marketing/tools/CalculatorPageShell";
import { CacLtvCalculator } from "@/components/marketing/tools/CacLtvCalculator";
import { pageSeo } from "@/lib/config/seo";

export const metadata = {
  ...pageSeo("/tools/cac-ltv-calculator"),
  title: "CAC:LTV Calculator",
  description:
    "Estimate customer lifetime value and the LTV-to-acquisition-cost ratio for your activity business, from your own order value, repeat rate, and margin.",
};

export default function CacLtvCalculatorPage() {
  return (
    <CalculatorPageShell
      slug="cac-ltv-calculator"
      title="CAC:LTV Calculator"
      intro="A standard subscription/repeat-business formula: how much is a customer worth over their lifetime, compared to what it costs to acquire them?"
      calculator={<CacLtvCalculator />}
      whyBody={
        <>
          <p>
            For repeat-visit activity businesses (recurring lessons, memberships, seasonal rentals),
            acquisition cost matters less in isolation than it does relative to how much a customer is
            worth over multiple visits. A 3:1 LTV:CAC ratio or better is a commonly cited healthy
            benchmark across subscription-style businesses generally — not a RidgeHQ-specific target.
          </p>
          <p>
            If most of your customers only ever book once, lifetime value and acquisition cost converge
            to roughly the same thing per booking — this calculator is most useful for operations with
            real repeat visitation.
          </p>
        </>
      }
      ctaHeadline="See how RidgeHQ supports repeat business"
      ctaDescription="Customer and participant profiles carry booking history across visits, making repeat bookings and targeted offers straightforward."
      ctaSecondaryText="Explore Customer Profiles"
      ctaSecondaryHref="/platform/customers-participants"
    />
  );
}
