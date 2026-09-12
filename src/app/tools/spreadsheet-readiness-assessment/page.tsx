import { CalculatorPageShell } from "@/components/marketing/tools/CalculatorPageShell";
import { ReadinessAssessment } from "@/components/marketing/tools/ReadinessAssessment";
import { pageSeo } from "@/lib/config/seo";

export const metadata = {
  ...pageSeo("/tools/spreadsheet-readiness-assessment"),
  title: "Spreadsheet-to-Operations-System Readiness Assessment",
  description:
    "A short, scored quiz on how much manual reconciliation your booking, staff, and gear tools actually require today — and whether a connected system is worth investigating.",
};

export default function ReadinessAssessmentPage() {
  return (
    <CalculatorPageShell
      slug="spreadsheet-readiness-assessment"
      title="Spreadsheet-to-Operations-System Readiness Assessment"
      intro="Five questions about how your bookings, staff schedule, and gear tracking actually work today. Answer honestly — there&apos;s no wrong answer, only a more or less connected setup."
      calculator={<ReadinessAssessment />}
      whyHeading="How to read your result"
      whyBody={
        <p>
          This is a rough diagnostic, not a formal audit. A low score means your current tools are
          mostly keeping up with each other; a high score means there&apos;s real manual reconciliation
          happening between separate systems — worth quantifying with the cost calculators on this page
          before deciding whether switching tools is worth it.
        </p>
      }
      ctaHeadline="Talk through what a connected system would change"
      ctaDescription="Whatever your result, a demo is the fastest way to see whether RidgeHQ actually fits how your operation runs today."
      ctaSecondaryText="Explore the Platform"
      ctaSecondaryHref="/platform"
    />
  );
}
