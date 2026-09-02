import { Container, Section } from "@/components/ui/Layout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CustomLeadForm } from "@/components/forms/CustomLeadForm";
import { marketingConfig } from "@/lib/config/marketing";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Pricing",
  description: "Transparent subscription. Zero direct booking fees.",
};

export default function PricingPage() {
  const isPilot = marketingConfig.pricingMode === 'pilot';

  return (
    <Section className="min-h-[80vh]">
      <Container>
        <Breadcrumbs className="mb-8" items={[{ label: "Pricing" }]} />
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <Badge variant="secondary">Predictable Pricing</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Transparent subscription. Zero direct booking fees.
          </h1>
          <p className="text-lg text-slate-400">
            We charge {marketingConfig.commissionRateDirectBookings} platform commission on your direct website bookings. You only pay your standard payment gateway fees (like Stripe) and our predictable monthly subscription.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="glass-card p-8 md:p-12 order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">
              {isPilot ? "Founding Operator Pilot" : "Standard Plan"}
            </h3>
            <div className="space-y-4 mb-8 text-slate-300">
              <p>
                {isPilot 
                  ? "We are currently accepting a limited number of operators into our private paid pilot program."
                  : "Everything you need to run your daily operations from one connected platform."
                }
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#22D3EE] shrink-0" /> Full access to the Activity Business OS</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#22D3EE] shrink-0" /> {marketingConfig.commissionRateDirectBookings} platform commission on direct bookings</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#22D3EE] shrink-0" /> Integrated AI Copilot</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#22D3EE] shrink-0" /> Direct founder onboarding and support</li>
              </ul>
            </div>
            {isPilot ? (
              <Button size="lg" className="w-full" asChild>
                <Link href="/book-demo">Request Pilot Pricing</Link>
              </Button>
            ) : (
              <Button size="lg" className="w-full" asChild>
                <Link href="/book-demo">Get Started</Link>
              </Button>
            )}
          </div>
          
          <div className="order-1 md:order-2 space-y-6 px-4">
            <h2 className="text-2xl font-bold">Why we do this</h2>
            <p className="text-slate-400 leading-relaxed">
              Many platforms promise low monthly fees but take 1.5% to 3% of your gross revenue for every online booking. When your business scales, your software cost skyrockets. 
            </p>
            <p className="text-slate-400 leading-relaxed">
              We believe you shouldn&rsquo;t be penalized for your own marketing success. RidgeHQ connects your operations with a predictable SaaS subscription, leaving your revenue margins intact.
            </p>
          </div>
        </div>

        <div className="mt-24 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Pricing Enquiry</h2>
          <CustomLeadForm 
            title="Pricing Enquiry"
            description="Get a tailored quote based on your operational volume."
            buttonText="Request Pricing"
          />
        </div>
      </Container>
    </Section>
  );
}
