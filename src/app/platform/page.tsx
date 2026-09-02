import { Container, Section } from "@/components/ui/Layout";
import { FeatureCard } from "@/components/marketing/FeatureCard";
import { platformCapabilities } from "@/lib/config/platform";
import { ScreenshotFrame } from "@/components/marketing/ScreenshotFrame";
import { CTASection } from "@/components/marketing/CTASection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";
import { pageSeo } from "@/lib/config/seo";

export const metadata = {
  ...pageSeo("/platform"),
  title: "Platform",
  description: "One system for the entire operational day.",
};

export default function PlatformPage() {
  return (
    <div className="flex flex-col w-full">
      <StructuredData data={breadcrumbJsonLd([{ name: "Platform", path: "/platform" }])} />
      <Section className="pb-12 pt-24">
        <Container>
          <Breadcrumbs className="mb-8" items={[{ label: "Platform" }]} />
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">One system for the entire operational day.</h1>
            <p className="text-xl text-slate-400">
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
                <p className="text-lg text-slate-400">
                  The operational day combines time, capacity, staff capability, locations, equipment, fleet, accommodation, and changing conditions. RidgeHQ ensures you never double-book a resource or assign an unqualified instructor.
                </p>
              </div>
              <ScreenshotFrame src="/images/product/gear.png" alt="Gear and resource management" />
            </div>

            {/* Detailed section 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <ScreenshotFrame src="/images/product/staff.png" alt="Staff scheduling" />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-3xl font-bold">Move when the day changes</h2>
                <p className="text-lg text-slate-400">
                  Coordinate rescheduling and its operational impact instead of rebuilding the plan manually. When weather shifts or customers cancel, the schedule, resources, and staff assignments update across the entire business.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
      <CTASection />
    </div>
  );
}
