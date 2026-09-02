import { Container, Section } from "@/components/ui/Layout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata = {
  title: "Security",
  description: "Security at RidgeHQ.",
};

export default function SecurityPage() {
  return (
    <Section className="min-h-[70vh]">
      <Container>
        <div className="max-w-3xl mx-auto space-y-8">
          <Breadcrumbs items={[{ label: "Security" }]} />
          <h1 className="text-4xl font-bold">Security</h1>
          <div className="prose prose-invert max-w-none text-slate-400">
            <p>At RidgeHQ, the security of your operational data is our top priority. We employ industry-standard practices to protect your information.</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Infrastructure Security</h2>
            <p>Our platform is hosted on secure, compliant infrastructure. We use role-based access control (RBAC) across all systems.</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Data Protection</h2>
            <p>All data is encrypted in transit and at rest using modern cryptographic standards.</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">AI Copilot Safety</h2>
            <p>Our AI Copilot operates within a strict permission boundary. It uses the exact same access constraints as your human team members, and high-risk actions require explicit operator confirmation before execution.</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
