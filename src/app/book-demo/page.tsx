import { Container, Section } from "@/components/ui/Layout";
import { ZohoLeadForm } from "@/components/forms/ZohoLeadForm";

export const metadata = {
  title: "Book a Demo",
  description: "See how RidgeHQ can connect your operational day.",
};

export default function BookDemoPage() {
  return (
    <Section className="min-h-[80vh] flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Book a Demo</h1>
          <p className="text-lg text-slate-400">
            See how RidgeHQ can connect your bookings, schedule, gear, and team. Let us know a bit about your operation so we can tailor the conversation.
          </p>
        </div>
        
        <ZohoLeadForm 
          intent="book_demo" 
          sourcePage="/book-demo"
        />
      </Container>
    </Section>
  );
}
