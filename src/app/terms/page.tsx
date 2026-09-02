import { Container, Section } from "@/components/ui/Layout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { pageSeo } from "@/lib/config/seo";

export const metadata = {
  ...pageSeo("/terms"),
  title: "Terms of Service — RidgeHQ",
  description: "The terms that govern use of the RidgeHQ website and live operations platform for dive centers and watersports schools.",
};

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "1. Acceptance of terms",
    body: [
      "By accessing or using the RidgeHQ website or platform (the \"Service\"), you agree to these Terms of Service (\"Terms\"). If you do not agree, do not use the Service.",
    ],
  },
  {
    heading: "2. Description of service",
    body: [
      "RidgeHQ provides a live operations platform for dive centers, watersports schools, and rental operators, including a live agenda and scheduling, staff management, participant records, gear and rental tracking, point-of-sale and payments, online booking, trip manifests, notifications, reporting, and audit history.",
    ],
  },
  {
    heading: "3. Design partner and early access phase",
    body: [
      "RidgeHQ is currently in a design partner and early access phase. Features, pricing, and availability may change as the product develops. Access granted during this phase does not guarantee continued access to, or the availability of, specific features at general availability.",
    ],
  },
  {
    heading: "4. Accounts",
    body: [
      "You must provide accurate information when registering for the Service, are responsible for safeguarding your account credentials, and must notify us promptly of any unauthorized use of your account.",
    ],
  },
  {
    heading: "5. Subscription plans and pricing",
    body: [
      "RidgeHQ offers three monthly subscription plans — Starter (€49/month), Grow (€89/month), and Scale (€149/month) — each with 0% commission on direct bookings made through the platform.",
      "Plans, features, and pricing may change with reasonable notice. Design partners may receive separate founder pricing or extended free access, as described on our Design Partners page.",
    ],
  },
  {
    heading: "6. Billing and payment",
    body: [
      "Subscriptions are billed monthly in advance. Fees are exclusive of applicable taxes unless stated otherwise. Failure to pay may result in suspension or termination of access to the Service.",
      "You may cancel your subscription at any time; cancellation takes effect at the end of the current billing period. We do not provide prorated refunds for partial months, except where required by law.",
    ],
  },
  {
    heading: "7. Your data and Operator responsibilities",
    body: [
      "As an Operator (a dive center, watersports school, or rental operator using the Service), you are responsible for the accuracy, legality, and appropriate handling of any data you enter about your staff and customers or participants, including certification, license, and payment-related information.",
      "You act as the data controller for that information, and RidgeHQ acts as a data processor, as described in our Privacy Policy and, where applicable, a separate data processing agreement.",
    ],
  },
  {
    heading: "8. Acceptable use",
    body: [
      "You agree not to: use the Service for unlawful purposes; attempt to gain unauthorized access to the Service or to other accounts; interfere with or disrupt the Service’s operation; misuse participant or customer data collected through the Service; or resell or white-label the Service without our prior written consent.",
    ],
  },
  {
    heading: "9. Intellectual property",
    body: [
      "RidgeHQ, our logos, product names, and platform design are the property of RidgeHQ. These Terms do not grant you any rights to our trademarks or branding beyond what is necessary to use the Service. You retain ownership of the data you or your organization enters into the platform.",
    ],
  },
  {
    heading: "10. Third-party services",
    body: [
      "The Service may integrate with third-party payment processors, email and SMS providers, and other tools. Your use of those integrations may also be subject to the relevant third party’s own terms.",
    ],
  },
  {
    heading: "11. Service availability",
    body: [
      "We aim to keep the Service available and reliable, but we do not guarantee uninterrupted or error-free operation, particularly during the design partner and early access phase. We may perform maintenance, and features may be added, changed, or removed at any time.",
    ],
  },
  {
    heading: "12. Termination",
    body: [
      "We may suspend or terminate your access to the Service for breach of these Terms, non-payment, or as reasonably needed to protect the Service or other users. You may stop using the Service and close your account at any time.",
    ],
  },
  {
    heading: "13. Disclaimer of warranties",
    body: [
      "The Service is provided \"as is\" and \"as available,\" without warranties of any kind, express or implied, to the maximum extent permitted by applicable law.",
    ],
  },
  {
    heading: "14. Limitation of liability",
    body: [
      "To the maximum extent permitted by law, RidgeHQ will not be liable for indirect, incidental, special, or consequential damages arising from your use of the Service. Our total liability for any claim relating to the Service will not exceed the amount you paid us in the twelve (12) months preceding the claim.",
    ],
  },
  {
    heading: "15. Indemnification",
    body: [
      "You agree to indemnify and hold RidgeHQ harmless from claims, damages, or expenses arising out of your misuse of the Service or violation of these Terms.",
    ],
  },
  {
    heading: "16. Governing law",
    body: [
      "These Terms are governed by the laws of Spain, without regard to conflict-of-law principles, except where a different governing law is required by the mandatory consumer protection or data protection laws applicable to you.",
    ],
  },
  {
    heading: "17. Changes to these terms",
    body: [
      "We may update these Terms from time to time. Continued use of the Service after changes take effect constitutes acceptance of the revised Terms.",
    ],
  },
  {
    heading: "18. Contact",
    body: [
      "Questions about these Terms can be sent to legal@ridgehq.com or through the contact page.",
    ],
  },
];

export default function TermsPage() {
  return (
    <Section className="min-h-[70vh]">
      <Container>
        <div className="max-w-3xl mx-auto space-y-8">
          <Breadcrumbs items={[{ label: "Terms of Service" }]} />
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="mt-2 text-sm text-slate-400">Last updated: July 2026</p>
          <p className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200">
            These terms are written to reflect RidgeHQ&apos;s actual subscription plans and business
            model during our design partner and early access phase. They should still be reviewed by
            qualified legal counsel before general availability.
          </p>
          
          <div className="mt-8 flex flex-col gap-8 text-slate-300">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-bold text-white mb-4">{section.heading}</h2>
                <div className="flex flex-col gap-4 text-slate-400">
                  {section.body.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
