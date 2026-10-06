import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { CustomLeadForm } from "@/components/forms/CustomLeadForm";
import { pageSeo } from "@/lib/config/seo";

export const metadata = {
  ...pageSeo("/contact"),
  title: "Contact Us",
  description: "Questions about RidgeHQ, the Founding Operator Pilot, security, or a partnership — reach the RidgeHQ team directly, or find the page that already answers it.",
};

const routes = [
  { title: "See it working", detail: "Want a walkthrough mapped to your operation?", href: "/book-demo", link: "Book a demo" },
  { title: "Join the pilot", detail: "Running an activity business and want to shape the product?", href: "/design-partners", link: "Apply as a design partner" },
  { title: "Check pricing", detail: "Current pilot terms and the 0% direct-booking commission model.", href: "/pricing", link: "View pricing" },
  { title: "Security questions", detail: "Permissions, audit log, AI safeguards, and what isn't in place yet.", href: "/security", link: "Read the security page" },
  { title: "Press and media", detail: "Boilerplate, fact sheet, founder bio, and brand assets.", href: "/press", link: "Open the press kit" },
  { title: "Connect an AI assistant", detail: "Using Claude, ChatGPT, or Claude Code with your RidgeHQ account.", href: "/docs", link: "Read the docs" },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <Section className="min-h-[80vh] flex items-center">
        <Container>
          <PageBreadcrumbs className="mb-8 justify-center" trail={[{ label: "Contact", href: "/contact" }]} />
          <div className="max-w-2xl mx-auto text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Contact Us</h1>
            <p className="text-lg text-ink-secondary">
              Have a question about RidgeHQ, our pilot program, or a potential partnership? Reach out below. RidgeHQ is founder-led, so your message reaches the person building the product.
            </p>
          </div>

          <CustomLeadForm
            title="Contact our team"
            description="Let us know how we can help and we'll get back to you shortly."
            buttonText="Send Message"
          />
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center">Looking for something specific?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {routes.map((r) => (
                <div key={r.href} className="glass-card glass-card-hover p-6 space-y-2">
                  <h3 className="text-lg font-bold">{r.title}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{r.detail}</p>
                  <Link href={r.href} className="link-inline text-sm font-medium inline-block">
                    {r.link} &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
