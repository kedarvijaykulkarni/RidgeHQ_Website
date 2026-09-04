import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";
import { faqPageJsonLd } from "@/lib/faqPageJsonLd";
import { pageSeo } from "@/lib/config/seo";
import { productKnowledge } from "@/lib/config/product-knowledge";

export const metadata = {
  ...pageSeo("/ai"),
  title: "RidgeHQ for AI Assistants & Researchers",
  description:
    "A concise, factual summary of what RidgeHQ is, who it's for, and what it does today — for AI assistants, researchers, and anyone verifying a claim about the product.",
};

export default function AIInfoPage() {
  const k = productKnowledge;

  return (
    <div className="flex flex-col w-full">
      <StructuredData data={breadcrumbJsonLd([{ name: "AI Overview", path: "/ai" }])} />
      <StructuredData data={faqPageJsonLd(k.faqs)} />

      <Section className="pb-8 pt-24">
        <Container>
          <Breadcrumbs className="mb-8" items={[{ label: "AI Overview" }]} />
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              RidgeHQ, for AI assistants and researchers
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">{k.product.description}</p>
            <p className="text-sm text-slate-500">
              Last verified {k.lastUpdated}. This page summarizes facts published elsewhere on{" "}
              {k.product.url.replace(/^https?:\/\//, "")} — treat the linked pages as the canonical,
              current source if anything here appears out of date.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/5">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">What RidgeHQ is</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                <strong className="text-white">Category:</strong> {k.product.category}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                <strong className="text-white">Positioning:</strong> {k.product.positioning}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                <strong className="text-white">Good fit:</strong> {k.idealCustomerProfile}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                <strong className="text-white">Poor fit:</strong> {k.poorFitCustomerProfile}
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">Pricing</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{k.pricing.note}</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                <strong className="text-white">Commission on direct bookings:</strong>{" "}
                {k.pricing.commissionOnDirectBookings}
              </p>
              <Link href="/pricing" className="text-[#22D3EE] hover:underline text-sm inline-block">
                Current pricing terms &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/5">
        <Container>
          <h2 className="text-xl font-bold text-white mb-6">Industries served</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {k.industries.map((v) => (
              <li key={v.slug}>
                <Link href={`/solutions/${v.slug}`} className="text-slate-300 hover:text-[#22D3EE] text-sm">
                  {v.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="border-t border-white/5">
        <Container>
          <h2 className="text-xl font-bold text-white mb-6">Platform capabilities</h2>
          <dl className="space-y-4">
            {k.platformCapabilities.map((c) => (
              <div key={c.slug}>
                <dt className="text-white font-semibold text-sm">
                  <Link href={`/platform/${c.slug}`} className="hover:text-[#22D3EE]">
                    {c.title}
                  </Link>
                </dt>
                <dd className="text-slate-400 text-sm">{c.description}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section className="border-t border-white/5">
        <Container>
          <h2 className="text-xl font-bold text-white mb-6">Products</h2>
          <dl className="space-y-4">
            {k.products.map((p) => (
              <div key={p.slug}>
                <dt className="text-white font-semibold text-sm">
                  <Link href={`/products/${p.slug}`} className="hover:text-[#22D3EE]">
                    {p.title}
                  </Link>{" "}
                  {p.status === "early-access" && (
                    <span className="text-xs text-amber-400 font-normal">(early access)</span>
                  )}
                </dt>
                <dd className="text-slate-400 text-sm">{p.description}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section className="border-t border-white/5">
        <Container>
          <h2 className="text-xl font-bold text-white mb-6">Integrations</h2>
          <ul className="space-y-2">
            {k.integrations.map((i) => (
              <li key={i.name} className="text-sm text-slate-400">
                <span className="text-white font-medium">{i.name}</span> ({i.category}) —{" "}
                {i.state === "implemented" ? "available today" : i.state === "partial" ? "partially available" : "planned"}
              </li>
            ))}
          </ul>
          <Link href="/integrations" className="text-[#22D3EE] hover:underline text-sm inline-block mt-4">
            Full integrations page &rarr;
          </Link>
        </Container>
      </Section>

      <Section className="border-t border-white/5">
        <Container>
          <h2 className="text-xl font-bold text-white mb-3">Security</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">{k.security.summary}</p>
          <Link href="/security" className="text-[#22D3EE] hover:underline text-sm inline-block mt-4">
            Full security page &rarr;
          </Link>
        </Container>
      </Section>

      <Section className="border-t border-white/5">
        <Container>
          <h2 className="text-xl font-bold text-white mb-6">Frequently asked</h2>
          <dl className="space-y-6 max-w-3xl">
            {k.faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-white font-semibold text-sm">{faq.question}</dt>
                <dd className="text-slate-400 text-sm mt-1">{faq.answer}</dd>
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
              <Link href="/book-demo" className="text-[#22D3EE] hover:underline">Book a demo</Link>
            </li>
            <li>
              <Link href="/design-partners" className="text-[#22D3EE] hover:underline">Join the Design Partner program</Link>
            </li>
            <li>
              <Link href="/contact" className="text-[#22D3EE] hover:underline">Contact RidgeHQ</Link>
            </li>
          </ul>
        </Container>
      </Section>
    </div>
  );
}
