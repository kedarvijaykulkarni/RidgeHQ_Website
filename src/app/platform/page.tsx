import { Container, Section } from "@/components/ui/Layout";
import { FeatureCard } from "@/components/marketing/FeatureCard";
import { platformCapabilities } from "@/lib/config/platform";
import { ScreenshotFrame } from "@/components/marketing/ScreenshotFrame";
import { CTASection } from "@/components/marketing/CTASection";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { pageSeo } from "@/lib/config/seo";
import { PageFaq } from "@/components/marketing/PageFaq";

export const metadata = {
  ...pageSeo("/platform"),
  title: "Platform Capabilities",
  description: "How the RidgeHQ software app connects bookings, sessions, staff, resources, payments, changes, and reporting into one live operational system for activity businesses.",
};

export default function PlatformPage() {
  return (
    <div className="flex flex-col w-full">
      <Section className="pb-12 pt-24">
        <Container>
          <PageBreadcrumbs className="mb-8 justify-center" trail={[{ label: "Platform", href: "/platform" }]} />
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">One system for the entire operational day.</h1>
            <p className="text-xl text-ink-secondary">
              The booking is the starting point. RidgeHQ connects it to sessions, participants, staff, resources, payments, changes, and reporting.
            </p>
          </div>
        </Container>
      </Section>
      
      <Section className="pt-0">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {platformCapabilities.map(cap => (
              <FeatureCard
                key={cap.id}
                title={cap.title}
                description={cap.description}
                href={cap.href}
              />
            ))}
          </div>

          <div className="space-y-24">
            {/* Detailed section 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Activity-aware resource coordination</h2>
                <p className="text-lg text-ink-secondary">
                  The operational day combines time, capacity, staff, locations, equipment, fleet, accommodation, and changing conditions. RidgeHQ checks the things that most often go wrong: an instructor assigned to two overlapping sessions is refused, a pilot can&rsquo;t be put on two overlapping trips, gear availability is matched by unit and size, and equipment out for service drops out of availability the moment it&rsquo;s logged.
                </p>
              </div>
              <ScreenshotFrame src="/images/product/gear.webp" alt="Gear and fleet view showing each unit's bookings so nothing is double-committed" />
            </div>

            {/* Detailed section 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <ScreenshotFrame src="/images/product/staff.webp" alt="Staff list showing each instructor's role, planner visibility, and upcoming sessions" />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-3xl font-bold">Move when the day changes</h2>
                <p className="text-lg text-ink-secondary">
                  Reschedule a session and its participants and instructors move with it; cancel one and the people booked on it are notified. Weather and tide for the session&rsquo;s spot sit beside the plan, against thresholds you set per activity, so the decision to move a group is made with the conditions in view rather than rebuilt from scratch.
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold text-center">How the pieces connect</h2>
              <p className="text-lg text-ink-secondary">
                Most activity businesses run on a booking widget, a spreadsheet, a whiteboard, a payment
                terminal, and a group chat &mdash; and the owner becomes the integration layer between them.
                In RidgeHQ a booking is one record that every other part of the day reads from:
              </p>
              <ul className="space-y-3 text-ink-secondary list-disc pl-6">
                <li>It lands on the session it was made for, so the planner shows real occupancy and the roster shows who is coming, with their level.</li>
                <li>Its participants carry their waiver requirements, sizes, and gear needs from their customer profile.</li>
                <li>Its payment, deposit, and any later credit note sit on the same order, feeding the daily close and revenue-by-origin reports.</li>
                <li>Instructors assigned to its session have their hours and fees calculated from that assignment.</li>
                <li>The AI Copilot and any connected AI assistant read the same records, inside the same permissions.</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
      
      <PageFaq faqs={platformFaqs} className="bg-bg-elevated/50 border-t border-border" />

      <CTASection />
    </div>
  );
}

const platformFaqs = [
  {
    question: "Is RidgeHQ one product or several?",
    answer:
      "One connected platform. Bookings, scheduling, staff, gear and fleet, customer profiles, and payments share the same records, so each capability page describes a part of the same system rather than a separate app to integrate.",
  },
  {
    question: "Does RidgeHQ stop double-booking?",
    answer:
      "It refuses an instructor assignment that overlaps that person's other sessions and a pilot assignment that overlaps another trip, checks gear availability by unit and size, and removes gear that is out for service from availability. Online and front-desk sales draw from the same session capacity.",
  },
  {
    question: "Can we move a whole group when the weather turns?",
    answer:
      "Yes. Reschedule the session and its participants and instructors move with it; cancel it and the people booked are notified. You can also email everyone on a session or trip from the planner.",
  },
  {
    question: "What does RidgeHQ not do yet?",
    answer:
      "Some honest gaps: there's no staff availability or time-off calendar, instructor-to-participant ratios aren't calculated or enforced automatically, and a direct export to accounting software is planned rather than built.",
  },
  {
    question: "How do we bring our existing data across?",
    answer:
      "Customers can be imported from a CSV file. Design partners get founder-led onboarding and help with migration.",
  },
];
