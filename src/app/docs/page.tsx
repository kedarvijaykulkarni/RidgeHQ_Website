import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";
import { faqPageJsonLd } from "@/lib/faqPageJsonLd";
import { pageSeo } from "@/lib/config/seo";
import { CheckCircle2, XCircle } from "lucide-react";

export const metadata = {
  ...pageSeo("/docs"),
  title: "Connect Your AI Assistant (MCP)",
  description:
    "Connect Claude, ChatGPT, or Claude Code to your RidgeHQ account over MCP. Requires a RidgeHQ account on the Grow or Scale plan. OAuth and personal access token setup, what the assistant can and can't do, and how changes are logged.",
};

const canDo = [
  "Today's morning brief: alerts, trips today, unsigned waivers, gear and weather problems",
  "Bookings, customers, and availability (sessions, gear, rooms)",
  "Spots and conditions, waiver templates and compliance",
  "Partners, commissions, staff, and the audit log",
  "Check a participant in; show or hide a session on your booking page",
  "Create a trip, link or unlink a session to it, suggest a weather reschedule",
  "Assign, unassign, or move a participant between sessions (asks you to confirm first)",
  "Create or reschedule a session, move a rental or accommodation block, block gear for maintenance, cancel a trip (asks you to confirm first)",
];

const cannotDo = [
  "Create or cancel a booking",
  "Take a payment or issue a refund",
  "Change settings, staff, partners, or waiver templates",
  "Delete records",
  "See another business's data — every request is locked to your own account",
];

const faqs = [
  {
    question: "Do I need a RidgeHQ account to use this?",
    answer:
      "Yes. This is not a public or no-account service. You need a RidgeHQ account on the Grow or Scale plan — Starter plans don't include the AI assistant features. Ask us if you'd like to change your plan.",
  },
  {
    question: "Which AI assistants can I connect?",
    answer:
      "Claude (web or desktop) and ChatGPT, using a custom connector over OAuth. Claude Code and other CLI or script-based MCP clients connect with a personal access token.",
  },
  {
    question: "Can the assistant book, cancel, or refund anything?",
    answer:
      "No. It never creates or cancels a booking, takes a payment, or issues a refund, and it can't change settings, staff, or waiver templates. Those stay in the normal RidgeHQ screens.",
  },
  {
    question: "What happens before a scheduling change actually runs?",
    answer:
      "For anything beyond a low-risk action, the assistant tells you exactly what it's about to do and waits for you to confirm. Nothing changes until you say yes, and the result is recorded in your audit log with an undo option where one applies.",
  },
  {
    question: "How do I revoke access?",
    answer:
      "For a personal access token: Settings, Access tokens, Revoke — it stops working on its next request. For a connected assistant: disconnect it in Claude or ChatGPT, or deactivate the staff account that approved it.",
  },
  {
    question: "Is my data isolated from other RidgeHQ accounts?",
    answer:
      "Yes. Every request is scoped to your own tenant and enforced at the database level, and it only sees what your staff role allows. The assistant never has more access than the person or token behind it.",
  },
];

export default function DocsPage() {
  return (
    <div className="flex flex-col w-full">
      <StructuredData data={breadcrumbJsonLd([{ name: "Docs", path: "/docs" }])} />
      <StructuredData data={faqPageJsonLd(faqs)} />

      <Section className="pb-8 pt-24">
        <Container>
          <Breadcrumbs className="mb-8" items={[{ label: "Docs" }]} />
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-accent-2 font-medium">
              Model Context Protocol (MCP)
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Connect your AI assistant to RidgeHQ
            </h1>
            <p className="text-lg text-ink-secondary leading-relaxed">
              Connect an AI assistant you already use &mdash; Claude, ChatGPT, or Claude Code &mdash;
              to your RidgeHQ account and operate day-to-day scheduling from the assistant. Ask it
              things like &ldquo;What&rsquo;s on today&rsquo;s morning brief?&rdquo; or &ldquo;Who&rsquo;s on Saturday&rsquo;s
              boat?&rdquo; and it answers from your live data. For everyday changes, such as moving a
              session, it asks you to confirm before it does anything.
            </p>
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200">
              Requires a RidgeHQ account on the <strong>Grow or Scale</strong> plan. This is not a
              public or no-account service &mdash; Starter plans don&rsquo;t include the AI assistant
              features.
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/5">
        <Container>
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-bold text-white">How to connect</h2>
            <p className="text-ink-secondary leading-relaxed">
              An Owner or Manager sets this up in RidgeHQ under <strong className="text-white">Settings,
              Access tokens, Connect an AI assistant</strong>. That page shows your server address
              (the MCP URL) with a copy button and the exact steps for your assistant.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-3 text-white">Claude or ChatGPT (recommended)</h3>
              <p className="text-ink-secondary mb-4 text-sm leading-relaxed">
                No token to handle. Add a custom connector with the server address shown on the
                Connect page, then sign in with your own RidgeHQ staff account.
              </p>
              <ol className="space-y-2 text-sm text-ink-secondary list-decimal list-inside">
                <li>In your assistant, add a custom connector / custom MCP server.</li>
                <li>Enter the server address from Settings, Access tokens.</li>
                <li>Choose Connect, then sign in to RidgeHQ with your staff account.</li>
                <li>
                  On the consent screen, check the application name and the redirect address, then
                  press Allow.
                </li>
              </ol>
              <p className="mt-4 text-xs text-ink-tertiary">
                The assistant gets exactly your permissions &mdash; a platform administrator account
                can&rsquo;t be used, because it belongs to no single business.
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-3 text-white">Claude Code &amp; CLI clients</h3>
              <p className="text-ink-secondary mb-4 text-sm leading-relaxed">
                Create a personal access token (PAT) in Settings, Access tokens. Name it for the
                person and tool, and choose the lowest role that does the job.
              </p>
              <ol className="space-y-2 text-sm text-ink-secondary list-decimal list-inside">
                <li>Settings, Access tokens, Create token.</li>
                <li>Name it (for example, &ldquo;Sam, Claude Code&rdquo;) and pick a role.</li>
                <li>Copy the token &mdash; it&rsquo;s shown once and can&rsquo;t be shown again.</li>
                <li>Add it to your client with an Authorization header, for example a one-line <code>claude mcp add</code> command for Claude Code.</li>
              </ol>
              <p className="mt-4 text-xs text-ink-tertiary">
                Treat a token like a password: it is never put in chats, tickets, or shared
                documents. One token per person or tool makes it easy to revoke just one later.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/5">
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">What it can and can&rsquo;t do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-lg font-bold mb-4 text-white">It can</h3>
              <ul className="space-y-3">
                {canDo.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ink-secondary">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-ink-tertiary">
                Reads never change anything. Low-risk actions run straight away and are logged;
                everyday scheduling changes ask you to confirm first, every time.
              </p>
            </div>
            <div className="glass-card p-8">
              <h3 className="text-lg font-bold mb-4 text-white">It will never</h3>
              <ul className="space-y-3">
                {cannotDo.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ink-secondary">
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-ink-tertiary">
                These stay in the normal RidgeHQ screens, by design, whatever role or token is used.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/5">
        <Container>
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-bold text-white">Security &amp; privacy</h2>
            <ul className="space-y-3 text-sm text-ink-secondary">
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                <span>
                  Every request is scoped to one tenant; isolation is enforced at the database
                  level on dedicated least-privilege roles, not just in application code.
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                <span>
                  Sign-in uses OAuth 2.1 with PKCE and a consent screen that always shows the exact
                  redirect address, or a personal access token stored as a hash, never in plain
                  text, and shown to you only once.
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                <span>
                  Every change made through an assistant is recorded in your audit log with the
                  assistant as the origin, and most changes can be undone from there.
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                <span>
                  You can revoke a token or disconnect a connector at any time; access stops on the
                  very next request.
                </span>
              </li>
            </ul>
            <p className="text-sm text-ink-tertiary">
              Tool results pass through the assistant you chose, under that provider&rsquo;s terms &mdash;
              only send what you&rsquo;re comfortable sharing with them. See the full{" "}
              <Link href="/security" className="text-accent hover:underline">
                security page
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-accent hover:underline">
                privacy policy
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/5">
        <Container>
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-bold text-white">Listings &amp; directories</h2>
            <p className="text-ink-secondary text-sm leading-relaxed">
              {/* TODO(#166): once the MCP Registry and third-party directory listings
                  (Glama, PulseMCP, MCP Market, mcp.so, Claude/ChatGPT connector
                  directories) are live, link them here. Do not add placeholder or
                  fabricated links before a listing actually exists. */}
              RidgeHQ&rsquo;s MCP server is being submitted to the official MCP Registry and to AI
              assistant connector directories. Links will appear here once those listings are live.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/5">
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">Frequently asked</h2>
          <dl className="space-y-6 max-w-3xl">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-white font-semibold text-sm">{faq.question}</dt>
                <dd className="text-ink-secondary text-sm mt-1">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section className="border-t border-white/5">
        <Container>
          <h2 className="text-xl font-bold text-white mb-3">Next steps</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/ai-copilot" className="text-accent hover:underline">
                See the AI Copilot inside RidgeHQ
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-accent hover:underline">
                Check current plans and pricing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-accent hover:underline">
                Contact RidgeHQ
              </Link>
            </li>
          </ul>
        </Container>
      </Section>
    </div>
  );
}
