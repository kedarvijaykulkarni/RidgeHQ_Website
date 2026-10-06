import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { pageSeo } from "@/lib/config/seo";

export const metadata = {
  ...pageSeo("/security"),
  title: "Security",
  description: "How RidgeHQ protects operational data: encryption in transit and at rest, role-based access control, and an AI Copilot that shares staff permission boundaries and confirms high-risk actions before executing them.",
};

export default function SecurityPage() {
  return (
    <Section className="min-h-[70vh]">
      <Container>
        <div className="max-w-3xl mx-auto space-y-8">
          <PageBreadcrumbs trail={[{ label: "Security", href: "/security" }]} />
          <h1 className="text-4xl font-bold text-ink">Security</h1>
          <div className="prose max-w-none prose-headings:text-[var(--ink)] prose-a:text-[var(--accent)] prose-a:hover:text-[var(--accent-2)] prose-p:text-[var(--ink-secondary)]">
            <p>At RidgeHQ, the security of your operational data is our top priority. We employ industry-standard practices to protect your information.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Infrastructure Security</h2>
            <p>Our platform is hosted on secure, compliant infrastructure. We use role-based access control (RBAC) across all systems.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Data Protection</h2>
            <p>All data is encrypted in transit and at rest using modern cryptographic standards.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">AI Copilot Safety</h2>
            <p>Our AI Copilot operates within a strict permission boundary. It uses the exact same access constraints as your human team members, and high-risk actions require explicit operator confirmation before execution.</p>
            <p>
              The same boundary applies when you connect an outside AI assistant to your account over
              MCP &mdash; see{" "}
              <Link href="/docs" className="link-inline">
                Connect an AI assistant
              </Link>{" "}
              for how that access is scoped, confirmed, and logged.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
