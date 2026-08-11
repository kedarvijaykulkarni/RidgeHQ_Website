import { Container, Section } from "@/components/ui/Layout";

export const metadata = {
  title: "Privacy Policy — RidgeHQ",
  description: "How RidgeHQ collects, uses, and protects data for dive centers, watersports schools, and their customers.",
};

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "1. Overview",
    body: [
      "RidgeHQ (\"RidgeHQ\", \"we\", \"us\", \"our\") provides a live operations platform for dive centers, watersports schools, and rental operators, covering scheduling, staff management, participant records, gear tracking, point-of-sale, online booking, payments, trip manifests, notifications, and reporting.",
      "This Privacy Policy explains what data we collect, how we use it, and the choices available to you — both as a visitor to this website and as a business or end customer using the RidgeHQ platform.",
    ],
  },
  {
    heading: "2. Controller and processor roles",
    body: [
      "For website and prospect data (contact forms, demo requests, design partner applications), RidgeHQ is the data controller.",
      "For operational data entered into the platform by a dive center, watersports school, or rental operator (an \"Operator\") about its own staff and customers/participants, the Operator is the data controller and RidgeHQ acts as a data processor, handling that data only on the Operator’s instructions and under a data processing agreement. If you are a participant or customer of an Operator and want to exercise your data rights, please contact that Operator directly — we support them in responding to your request.",
    ],
  },
  {
    heading: "3. Information we collect",
    body: [
      "Information you provide to us: name, business name, email, website, country, business type, staff count, current tools, and message content submitted through our contact and design partner forms; account details if you register to use the platform.",
      "Information Operators enter into the platform: participant and customer records (name, contact details, date of birth, certification and license numbers, documents, booking and payment history, notes), staff records, gear and inventory records, and session or trip data.",
      "Payment information: processed through third-party payment processors (such as Stripe, PayPal, or Redsys); we do not store full card numbers on our own servers.",
      "Automatically collected information: standard log data (IP address, browser type, pages visited, referring page) and, where enabled, privacy-respecting analytics.",
      "Cookies: see the Cookies section below.",
    ],
  },
  {
    heading: "4. How we use information",
    body: [
      "To respond to inquiries and evaluate design partner applications.",
      "To provide, operate, secure, and improve the RidgeHQ platform.",
      "To process bookings, payments, notifications, and reports on behalf of Operators.",
      "To send service-related communications, such as confirmations, reminders, receipts, and security notices.",
      "To send marketing communications where permitted, with an easy way to opt out.",
      "To prevent fraud and comply with applicable legal obligations.",
    ],
  },
  {
    heading: "5. Legal basis for processing",
    body: [
      "Where the GDPR or UK GDPR applies, we rely on: performance of a contract (to provide services you or your Operator requested); legitimate interests (to secure, operate, and improve the platform, and for reasonable direct marketing); consent (for optional cookies or marketing where required); and legal obligation (for example, retaining invoicing records).",
    ],
  },
  {
    heading: "6. Sharing and sub-processors",
    body: [
      "We do not sell personal data. We share data, as needed, with: cloud hosting and infrastructure providers; payment processors that handle transactions on our behalf; email and SMS providers used to deliver booking confirmations, reminders, and notifications; analytics providers, in aggregated or pseudonymized form; and professional advisors or authorities where required by law.",
      "A current list of sub-processors is available on request via the contact details below.",
    ],
  },
  {
    heading: "7. International data transfers",
    body: [
      "Where personal data is transferred outside the country or region in which it was collected, including outside the EEA or UK, we use appropriate safeguards such as Standard Contractual Clauses and work with providers that offer equivalent data protection commitments.",
    ],
  },
  {
    heading: "8. Data retention",
    body: [
      "We retain website and prospect data for as long as needed to respond to your inquiry and for a reasonable period afterward for record-keeping.",
      "Operators control the retention of the operational data they enter into the platform, subject to their subscription terms and any legal retention requirements that apply to their business (for example, financial or safety records).",
    ],
  },
  {
    heading: "9. Security",
    body: [
      "We use reasonable technical and organizational measures — including encryption in transit and access controls that restrict staff access to what is needed — to protect personal data. No system is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "10. Your rights",
    body: [
      "Depending on your location, you may have the right to access, correct, or delete your personal data; object to or restrict certain processing; request data portability; withdraw consent; and lodge a complaint with your local data protection authority.",
      "If your data was entered into RidgeHQ by an Operator (for example, as a course or trip participant), please contact that Operator directly, as they control that data.",
    ],
  },
  {
    heading: "11. Cookies",
    body: [
      "This website uses essential cookies required for it to function, and may use analytics cookies to understand aggregate usage. You can control or disable cookies through your browser settings.",
    ],
  },
  {
    heading: "12. Children’s privacy",
    body: [
      "This website and the RidgeHQ platform are intended for business use by adults operating activity centers. We do not knowingly collect personal data directly from children. Where an Operator records details of a minor (for example, a participant on a diving or kitesurf course), that record is entered and controlled by the Operator, not collected directly from the child by RidgeHQ.",
    ],
  },
  {
    heading: "13. Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. Material changes will be reflected by an updated \"Last updated\" date on this page.",
    ],
  },
  {
    heading: "14. Contact us",
    body: [
      "Questions about this policy can be sent to privacy@ridgehq.com or through the contact page.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <Section className="min-h-[70vh]">
      <Container>
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-sm text-slate-400">Last updated: July 2026</p>
          <p className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200">
            This policy is written to reflect how RidgeHQ actually collects and uses data during our
            design partner and early access phase. It should still be reviewed by qualified legal counsel
            before general availability.
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
