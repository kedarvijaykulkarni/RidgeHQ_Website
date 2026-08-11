import { Container, Section } from "@/components/ui/Layout";
import { DesignPartnerForm } from "@/components/forms/DesignPartnerForm";

export const metadata = {
  title: "Design Partner Program",
  description: "Help shape the operational workflows that matter most.",
};

export default function DesignPartnersPage() {
  return (
    <Section className="min-h-[80vh]">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-12 space-y-4">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-[#8B5CF6] font-medium mb-4">
            Early Access Validation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Design Partner Program</h1>
          <p className="text-lg text-slate-400">
            Help shape the operational workflows that matter most. We are validating fit and packaging with real operators before broad self-service launch.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">What to expect</h3>
            <ul className="space-y-3 text-slate-400">
              <li>• Direct access to the founding team</li>
              <li>• Hands-on setup and data migration help</li>
              <li>• Priority feature requests for your workflows</li>
              <li>• Long-term pricing benefits for early adopters</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Who we're looking for</h3>
            <ul className="space-y-3 text-slate-400">
              <li>• Operators with complex scheduling/resource needs</li>
              <li>• Willing to provide structured, honest feedback</li>
              <li>• Ready to test new AI Copilot workflows safely</li>
            </ul>
          </div>
        </div>
        
        <DesignPartnerForm />
      </Container>
    </Section>
  );
}
