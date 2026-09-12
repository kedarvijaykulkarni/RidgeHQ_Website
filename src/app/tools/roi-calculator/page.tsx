import { CalculatorPageShell } from "@/components/marketing/tools/CalculatorPageShell";
import { RoiCalculator } from "@/components/marketing/tools/RoiCalculator";
import { pageSeo } from "@/lib/config/seo";

export const metadata = {
  ...pageSeo("/tools/roi-calculator"),
  title: "ROI Calculator",
  description:
    "Estimate the return on investment of a new operational system, from your own monthly cost and your own estimate of monthly savings or gains.",
};

export default function RoiCalculatorPage() {
  return (
    <CalculatorPageShell
      slug="roi-calculator"
      title="ROI Calculator"
      intro="A generic ROI formula for evaluating any recurring cost against the value it produces — plug in a monthly cost and your own estimate of what it saves or gains, from this tool's other calculators or your own numbers."
      calculator={<RoiCalculator />}
      whyBody={
        <>
          <p>
            ROI is only as good as the estimate you feed it. Rather than take a vendor&apos;s word for
            monthly savings, run the numbers yourself with the No-Show, Admin Time, Cancellation, or
            Revenue Leakage calculators above, and use that figure here.
          </p>
          <p>
            This calculator doesn&rsquo;t assume RidgeHQ&apos;s cost or savings for your business — both
            numbers are yours to enter.
          </p>
        </>
      }
      ctaHeadline="Get real numbers for your own operation"
      ctaDescription="Book a demo and we'll walk through what a connected system would actually change for your booking volume, team size, and current tool stack."
      ctaSecondaryText="See Pricing"
      ctaSecondaryHref="/pricing"
    />
  );
}
