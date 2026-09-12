import { CalculatorPageShell } from "@/components/marketing/tools/CalculatorPageShell";
import { BreakEvenCalculator } from "@/components/marketing/tools/BreakEvenCalculator";
import { pageSeo } from "@/lib/config/seo";

export const metadata = {
  ...pageSeo("/tools/break-even-calculator"),
  title: "Break-Even Calculator",
  description:
    "Estimate how many bookings per month your activity business needs to cover its fixed costs, using your own fixed costs, price, and variable cost per booking.",
};

export default function BreakEvenCalculatorPage() {
  return (
    <CalculatorPageShell
      slug="break-even-calculator"
      title="Break-Even Calculator"
      intro="Standard contribution-margin break-even math: how many bookings a month does it take to cover your fixed costs, given your price and the variable cost of delivering each one?"
      calculator={<BreakEvenCalculator />}
      whyBody={
        <>
          <p>
            Break-even volume moves with two things: your fixed costs (rent, salaries, software,
            insurance) and your contribution margin (price minus the variable cost per booking — gateway
            fees, consumables, per-booking staff time). Either lever changes the number.
          </p>
          <p>
            This is a general break-even formula, not specific to any software vendor. It&rsquo;s useful
            as a baseline before evaluating whether a change to your pricing or your cost structure
            (including switching operational tools) moves the number in your favor.
          </p>
        </>
      }
      ctaHeadline="See how RidgeHQ affects your cost structure"
      ctaDescription="Removing manual admin and reducing no-shows changes your variable cost per booking and your effective capacity — talk it through with your own numbers."
      ctaSecondaryText="Explore the Platform"
      ctaSecondaryHref="/platform"
    />
  );
}
