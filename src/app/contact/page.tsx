import { Container, Section } from "@/components/ui/Layout";
import { ZohoLeadForm } from "@/components/forms/ZohoLeadForm";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with the RidgeHQ team.",
};

export default function ContactPage() {
  return (
    <Section className="min-h-[80vh] flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Contact Us</h1>
          <p className="text-lg text-slate-400">
            Have a question about RidgeHQ, our pilot program, or a potential partnership? Reach out below.
          </p>
        </div>
        
        <ZohoLeadForm 
          intent="contact" 
          sourcePage="/contact"
        />
      </Container>
    </Section>
  );
}
