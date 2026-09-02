import { Container, Section } from "@/components/ui/Layout";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Thank You",
  description: "We've received your inquiry.",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <Section className="min-h-[70vh] flex items-center">
      <Container>
        <div className="max-w-xl mx-auto text-center space-y-6 glass-card p-12">
          <div className="w-16 h-16 bg-[#22D3EE]/20 rounded-full mx-auto flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8 text-[#22D3EE]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Request Received</h1>
          <p className="text-lg text-slate-400">
            Thank you for reaching out to RidgeHQ. A member of our founding team will review your details and get back to you shortly.
          </p>
          <div className="pt-6">
            <Button variant="outline" asChild>
              <Link href="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
