import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { PageFaq } from "@/components/marketing/PageFaq";
import { pageSeo } from "@/lib/config/seo";

// Every statement on this page is sourced from the Brain vault's
// development-reference (Modules/Staff, Logs, AI-Copilot, MCP-Server,
// Settings; Operations/Production-Deployment, Tenant-Onboarding) as of
// 2026-10-06. Don't add a claim here that those docs don't support.

export const metadata = {
  ...pageSeo("/security"),
  title: "Security",
  description:
    "How RidgeHQ protects an activity business's data: HTTPS everywhere, role-based permissions enforced on the server, a full audit log, role-controlled revenue visibility, and an AI Copilot that confirms before it acts.",
};

const sections = [
  {
    heading: "Permissions enforced by the server, not by hidden buttons",
    body: "Every staff member has a role — Owner, Manager, Head Instructor, Instructor, Assistant, Divemaster, or Pilot — and every action is checked against that role on the server. Hiding a button in the interface is never the only thing standing between a role and an action, so a staff member can't reach a function their role doesn't allow by guessing a link or calling the API directly.",
    points: [
      "Role checks on every request, using one ranking shared by the app, the AI Copilot, and outside AI assistants",
      "Only an Owner can grant or change the Owner role",
      "Settings, staff management, and access tokens are restricted to managers",
    ],
  },
  {
    heading: "Revenue visible only to the roles you choose",
    body: "Money is the most sensitive thing in most operations. A per-business setting decides which roles may see revenue, payments, and other money figures, and the same rule applies to reports, the dashboard, and anything the AI Copilot or a connected assistant is asked. Operational statistics — trips, participant numbers, utilisation — are kept separate and carry no money figures, so they can be shared with the whole team.",
    points: [
      "One revenue-visibility rule applied across every screen and AI answer",
      "Money-free operational statistics for team-wide sharing",
    ],
  },
  {
    heading: "A record of who changed what",
    body: "Changes made through RidgeHQ — by a person or by the AI Copilot — are written to an audit log that managers and instructors can review, filter, and open individually. When something on the schedule or a booking doesn't look right, you can see what changed and who changed it instead of asking around.",
    points: [
      "Audit entries for changes made by staff and by the AI Copilot",
      "Each AI action records which AI provider and model carried it out",
      "Read and unread state per user, with a notification badge for new entries",
    ],
  },
  {
    heading: "AI that stays inside the same boundaries as your team",
    body: "The AI Copilot works through the same functions as the rest of the app, with two separate gates on every action: the role of the person asking, and a risk level. Read-only questions run straight away; anything that changes data at medium or high risk shows you exactly what it will do and waits for your confirmation — an Owner is not exempt from confirming. Some scheduling actions can be undone within an hour. Bookings, cancellations, and refunds are high-risk actions that always require confirmation in the app and are never available to outside AI assistants at all.",
    points: [
      "Role check and risk confirmation are independent — both must pass",
      "Confirmation required for every medium- and high-risk action",
      "Undo window of one hour on reversible scheduling actions",
    ],
  },
  {
    heading: "Outside AI assistants on revocable tokens",
    body: "If you connect Claude, ChatGPT, or another assistant over MCP, it uses a personal access token you create in Settings. The token is shown once and stored only as a hash, carries a staff role no higher than Manager, can be limited further, and can be revoked at any time — its next request is refused. Requests are rate-limited, and the same confirmation step applies.",
    points: [
      "Tokens stored hashed; the full token is shown only when it's created",
      "Token roles capped at Manager — never Owner",
      "Revocation takes effect on the very next request",
    ],
  },
  {
    heading: "Encrypted connections and controlled embedding",
    body: "All traffic to RidgeHQ is served over HTTPS with TLS, with HTTP redirected to HTTPS and HSTS preload enabled. The admin app refuses to be framed by other sites, while your public booking widget can be embedded on your own website — and you can restrict that to an allow-list of your domains so it can't be framed elsewhere.",
    points: [
      "HTTPS on every page and API call, HSTS preload",
      "Admin pages can't be embedded in other sites",
      "Per-business allow-list of websites permitted to embed your booking widget",
    ],
  },
];

const faqs = [
  {
    question: "Can an instructor see our revenue?",
    answer:
      "Only if you allow it. A per-business setting decides which roles can see money figures, and that rule applies everywhere — reports, the dashboard, and AI Copilot answers alike.",
  },
  {
    question: "Can the AI Copilot make changes without asking?",
    answer:
      "It can answer read-only questions straight away. Any change rated medium or high risk shows you what it will do and waits for your confirmation, and it can only act within the role of the person using it. Bookings, cancellations, and refunds always need confirmation.",
  },
  {
    question: "What can an outside AI assistant do on our account?",
    answer:
      "Only what the access token's role allows, and never more than a Manager. Booking, cancellation, and refund actions are not available over MCP at all. You can revoke a token at any time from Settings.",
  },
  {
    question: "Can we see who changed a booking or a session?",
    answer:
      "Yes. Changes made by staff and by the AI Copilot are recorded in the audit log, which managers and instructors can filter and open entry by entry.",
  },
  {
    question: "Can we get our data out?",
    answer:
      "Yes. Customers, staff fee statements, and the gear maintenance register can be exported as CSV, and invoices can be printed as PDF.",
  },
  {
    question: "Do you hold SOC 2 or ISO 27001 certification?",
    answer:
      "No. RidgeHQ is an early-stage product and doesn't hold third-party security certifications today. This page describes the controls that are in place.",
  },
];

export default function SecurityPage() {
  return (
    <div className="flex flex-col w-full">
      <Section className="pt-24 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <PageBreadcrumbs trail={[{ label: "Security", href: "/security" }]} />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink">Security</h1>
            <p className="text-xl text-ink-secondary leading-relaxed">
              An activity business trusts its software with customer details, waivers, staff pay, and
              revenue. This page explains, in plain terms, how RidgeHQ controls who can see and change
              that data &mdash; and is honest about what isn&rsquo;t in place yet.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="max-w-3xl mx-auto space-y-14">
            {sections.map((s) => (
              <div key={s.heading} className="space-y-4">
                <h2 className="text-2xl font-bold text-ink">{s.heading}</h2>
                <p className="text-ink-secondary leading-relaxed">{s.body}</p>
                <ul className="list-disc pl-6 space-y-2 text-ink-secondary">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-ink">What isn&rsquo;t in place yet</h2>
              <p className="text-ink-secondary leading-relaxed">
                RidgeHQ is an early-stage product, and we would rather tell you what&rsquo;s missing than
                let you assume it. RidgeHQ doesn&rsquo;t hold third-party security certifications such as
                SOC 2 or ISO 27001. If your
                business needs a specific control before you can adopt a new system, ask us &mdash; we&rsquo;ll
                tell you plainly whether it exists.
              </p>
            </div>

            <p className="text-ink-secondary">
              For how outside AI assistants are scoped, confirmed, and logged, see{" "}
              <Link href="/docs" className="link-inline">
                Connect an AI assistant
              </Link>
              . For how we handle personal data, see the{" "}
              <Link href="/privacy" className="link-inline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      <PageFaq faqs={faqs} className="bg-bg-elevated/50 border-t border-border" />
    </div>
  );
}
