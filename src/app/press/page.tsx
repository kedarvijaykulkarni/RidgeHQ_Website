import Link from "next/link";
import Image from "next/image";
import { Container, Section } from "@/components/ui/Layout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { faqPageJsonLd } from "@/lib/faqPageJsonLd";
import { pageSeo } from "@/lib/config/seo";
import { siteUrl } from "@/lib/config/site";

export const metadata = {
  ...pageSeo("/press"),
  title: "Press Kit",
  description: "RidgeHQ press kit: company boilerplate, fact sheet, founder bio, brand assets, and media contact for journalists covering activity-business software.",
};

const pressFaqs = [
  {
    question: "What is RidgeHQ?",
    answer:
      "RidgeHQ is an activity business operating system that connects online bookings, scheduling, staff, gear and resource management, waivers, and payments into one live platform for dive centers, surf and ski schools, and similar activity operators.",
  },
  {
    question: "Who founded RidgeHQ?",
    answer:
      "RidgeHQ is built and run by Kedar Vijay Kulkarni, a solo founder and software engineer based in Thane, Mumbai, India, who builds and ships the product using AI coding assistants rather than a team.",
  },
  {
    question: "Where can I download the RidgeHQ logo?",
    answer:
      "Logo files (SVG and PNG, several sizes) are linked on this page under Brand Assets. For additional formats, screenshots, or an interview request, contact social@ridgehq.app.",
  },
  {
    question: "Is RidgeHQ publicly available yet?",
    answer:
      "RidgeHQ is currently in a private, paid Founding Operator Pilot phase. There is no public self-service signup or published price list yet — see /pricing for current terms.",
  },
];

export default function PressPage() {
  return (
    <div className="flex flex-col w-full">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "AboutPage",
              "@id": `${siteUrl}/press#aboutpage`,
              "url": `${siteUrl}/press`,
              "name": "RidgeHQ Press Kit",
              "about": { "@id": `${siteUrl}/#organization` },
            },
            faqPageJsonLd(pressFaqs),
          ],
        }}
      />

      <Section className="pt-24 pb-12">
        <Container className="max-w-3xl">
          <Breadcrumbs items={[{ label: "Press" }]} />
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-[#8B5CF6] font-medium mb-8 mt-6">
            Press Kit
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            RidgeHQ press &amp; media resources
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Boilerplate copy, a fact sheet, founder background, and brand assets for
            journalists and partners writing about RidgeHQ.
          </p>
        </Container>
      </Section>

      <Section className="bg-slate-900/30">
        <Container className="max-w-3xl space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Boilerplate</h2>
            <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Short</p>
            <p className="text-slate-400 leading-relaxed mb-6">
              RidgeHQ is an activity business operating system that connects bookings,
              scheduling, staff, resources, and payments into one live platform for dive
              centers, surf schools, ski schools, and other activity operators. It is built
              and run by a solo founder using AI-assisted development.
            </p>
            <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Long</p>
            <p className="text-slate-400 leading-relaxed">
              Activity businesses — dive centers, surf and ski schools, outdoor and rental
              operators — typically run on a patchwork of a booking widget, a spreadsheet,
              a messaging app, and a whiteboard. RidgeHQ replaces that patchwork with one
              connected system: a booking or cancellation updates scheduling, staff
              assignments, gear and resource availability, and payments automatically,
              instead of requiring the operator to manually keep every tool in sync.
              The platform includes built-in per-participant digital waivers, order
              immutability with credit-note-on-change for financial accuracy, role-based
              staff permissions, and an AI Copilot that is bounded by the same role
              permissions as staff and requires explicit confirmation before executing a
              medium- or high-risk action. RidgeHQ charges 0% commission on direct
              bookings and is currently in a private, paid Founding Operator Pilot phase
              ahead of general availability.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Fact sheet</h2>
            <dl className="divide-y divide-white/5 border-y border-white/5">
              {[
                ["Product", "RidgeHQ — Activity Business Operating System"],
                ["Founder", "Kedar Vijay Kulkarni"],
                ["Founder model", "Solo founder, built with AI coding assistants"],
                ["Headquarters", "Thane, Mumbai, India"],
                ["Website", "www.ridgehq.app"],
                ["Current phase", "Private, paid Founding Operator Pilot"],
                ["Commission on direct bookings", "0%"],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 py-4">
                  <dt className="text-sm font-medium text-slate-500 sm:w-56 shrink-0">{label}</dt>
                  <dd className="text-slate-300">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Founder</h2>
            <p className="text-slate-400 leading-relaxed">
              RidgeHQ is built and operated by{" "}
              <strong className="text-white">Kedar Vijay Kulkarni</strong>, a software
              engineer with 20+ years of experience based in Thane, Mumbai, India. Kedar
              builds and ships RidgeHQ as a solo founder, using AI coding assistants
              rather than a team, and works directly with early operators through the{" "}
              <Link href="/design-partners" className="text-[#22D3EE] hover:underline">
                Design Partner Program
              </Link>
              .
            </p>
            <p className="mt-4">
              <a
                href="https://www.linkedin.com/in/kedarvijaykulkarni/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#22D3EE] hover:underline"
              >
                Connect with Kedar on LinkedIn →
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Brand assets</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              The product name is written as one word, <strong className="text-white">RidgeHQ</strong>{" "}
              (capital R and H). Please don&apos;t alter the logo&apos;s colors or
              proportions.
            </p>
            <div className="flex flex-wrap items-center gap-6 bg-slate-950/50 border border-white/5 rounded-xl p-6">
              <Image
                src="/images/logo/ridgehq-logo-512x512.png"
                alt="RidgeHQ logo"
                width={96}
                height={96}
                className="rounded-lg"
              />
              <div className="flex flex-col gap-2 text-sm">
                <a href="/images/logo/RidgeHQ-logo-responsive.svg" download className="text-[#22D3EE] hover:underline">
                  Download logo (SVG)
                </a>
                <a href="/images/logo/ridgehq-logo-512x512.png" download className="text-[#22D3EE] hover:underline">
                  Download logo (PNG, 512×512)
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Media contact</h2>
            <p className="text-slate-400 leading-relaxed">
              For logos, screenshots, interviews, or product walkthroughs, email{" "}
              <a href="mailto:social@ridgehq.app" className="text-[#22D3EE] hover:underline">
                social@ridgehq.app
              </a>{" "}
              or reach out through the{" "}
              <Link href="/contact" className="text-[#22D3EE] hover:underline">
                contact page
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Frequently asked questions
          </h2>
          <FAQAccordion items={pressFaqs} />
        </Container>
      </Section>
    </div>
  );
}
