import { Container, Section } from "@/components/ui/Layout";
import { CTASection } from "@/components/marketing/CTASection";
import { CustomLeadForm } from "@/components/forms/CustomLeadForm";
import { verticals } from "@/lib/config/verticals";
import Link from "next/link";
import { CheckCircle2, Navigation, Target } from "lucide-react";

export const metadata = {
  title: "About RidgeHQ | The Activity Business OS",
  description: "Learn why RidgeHQ is building one operating system for activity businesses — connecting bookings, schedules, people, resources, payments and daily operations.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Section 1 — About Hero */}
      <Section className="relative overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-[var(--accent-soft)] pointer-events-none"></div>
        <Container className="relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-[#8B5CF6] font-medium mb-8">
            About RidgeHQ
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            We're building the operating system behind activity businesses.
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Running an activity business involves complex operations connecting bookings, sessions, customers, staff, guides, equipment, rentals, locations, trips, accommodation, payments, and changing conditions. 
            <br/><br/>
            These workflows are deeply connected, but often fragmented across different software and manual systems. RidgeHQ exists to connect that operational day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/platform">Explore the Platform</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Talk to Us</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Section 2 — Why RidgeHQ Exists */}
      <Section className="bg-slate-900/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">The activity is the visible part. Operations make it possible.</h2>
            <div className="text-lg text-slate-400 leading-relaxed text-left space-y-4">
              <p>Customers see the lesson, the dive, the surf session, the guided trip, the rental, or the camp. But behind every successful activity is a complex operational system:</p>
              
              <div className="bg-slate-950 p-6 rounded-xl border border-white/5 text-sm font-mono text-[#22D3EE] flex flex-wrap gap-2 items-center justify-center my-8">
                <span>Booking</span> <span className="text-slate-600">→</span>
                <span>Participant</span> <span className="text-slate-600">→</span>
                <span>Session</span> <span className="text-slate-600">→</span>
                <span>Staff</span> <span className="text-slate-600">→</span>
                <span>Skills</span> <span className="text-slate-600">→</span>
                <span>Equipment</span> <span className="text-slate-600">→</span>
                <span>Location</span> <span className="text-slate-600">→</span>
                <span>Conditions</span> <span className="text-slate-600">→</span>
                <span>Payment</span> <span className="text-slate-600">→</span>
                <span>Reporting</span>
              </div>
              
              <p>When those elements live in different systems, the operator becomes the integration layer. You spend your day bridging the gaps manually instead of running the business.</p>
              <p className="text-white font-medium text-xl mt-8 text-center">
                A booking should start an operational workflow, not another round of manual coordination.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 3 — Vision + Mission */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
            {/* Visual connector line (hidden on mobile) */}
            <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/50 to-transparent -z-10"></div>
            
            <div className="glass-card p-10 border-t-4 border-t-[#8B5CF6] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Navigation className="w-24 h-24 text-[#8B5CF6]" />
              </div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-[#8B5CF6] mb-4">Our Vision</h3>
              <p className="text-2xl font-bold text-white mb-6 leading-tight">
                To become the operating system behind the world's activity businesses — helping operators run with greater clarity, control and confidence, wherever their business takes place.
              </p>
              <p className="text-slate-400">
                We envision a future where running a dive center, surf school, ski school, activity camp, resort or rental operation does not require a maze of disconnected calendars, spreadsheets, booking tools and message threads. Every operator should have access to the operational capability of a much larger organization without needing a large administrative team.
              </p>
            </div>

            <div className="glass-card p-10 border-t-4 border-t-[#22D3EE] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target className="w-24 h-24 text-[#22D3EE]" />
              </div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-[#22D3EE] mb-4">Our Mission</h3>
              <p className="text-2xl font-bold text-white mb-6 leading-tight">
                To give activity businesses one intelligent, trusted system for running the day — connecting bookings, schedules, people, resources, payments and operational decisions so operators can protect their time, adapt faster and grow sustainably.
              </p>
              <p className="text-slate-400">
                We build RidgeHQ around practical operator value: less coordination overhead, clearer operational decisions, predictable economics and software that earns its place in the business every month.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 4 — How we think about building RidgeHQ */}
      <Section className="bg-slate-900/30">
        <Container>
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How we think about building RidgeHQ</h2>
            <p className="text-lg text-slate-400">
              Building sustainable software is not only about adding features. It means understanding what creates real value for the businesses using it and making deliberate decisions about where complexity belongs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4">Operator value first.</h3>
              <p className="text-slate-400">
                Every capability should solve an operational problem worth more than the cost and complexity it introduces. We would rather solve an important operational problem deeply than add another feature simply to make a longer checklist.
              </p>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4">Time is a real cost.</h3>
              <p className="text-slate-400">
                Operators often become the human bridge between booking systems, calendars, spreadsheets, messages, staff, equipment, and payments. RidgeHQ should reduce unnecessary coordination and allow people to spend more time on customers, teams and the actual activity.
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4">Earn retention. Don't engineer lock-in.</h3>
              <p className="text-slate-400">
                We want businesses to keep RidgeHQ because it continues earning its place in the operation — not because leaving has been made intentionally difficult. We focus on usefulness, reliability, data clarity, and constant improvement over time.
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4">Economics should work for both sides.</h3>
              <p className="text-slate-400">
                RidgeHQ should operate on a commercial model where the operator can clearly understand what the platform costs and what value it provides. We favor predictable subscription economics and currently charge 0% platform commission on direct bookings.
              </p>
            </div>

            <div className="glass-card p-8 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold mb-4">Trust before automation.</h3>
              <p className="text-slate-400">
                We believe AI belongs inside operational workflows only where context is understood, permissions apply, risky actions require confirmation, and actions are accountable. We don't claim full autonomy or zero-error decisions.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 5 — Built for the Activity Economy */}
      <Section>
        <Container>
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Different activities. The same operational challenge.</h2>
            <p className="text-lg text-slate-400">
              Designed for the operational constraints of the activity economy.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {verticals.map((v) => (
              <div key={v.id} className="p-4 border border-white/5 rounded-xl bg-slate-950/50 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--accent)]/50"></div>
                <span className="font-medium text-slate-300 text-sm">{v.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 6 — Early-Stage Honesty */}
      <Section className="bg-slate-900/50">
        <Container>
          <div className="max-w-4xl mx-auto glass-card p-10 md:p-16 border-t-4 border-t-[var(--accent)]">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-6">Built closely with operators.</h2>
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                RidgeHQ is being developed around real operational workflows rather than a generic booking-software template. Early operators help us understand where the daily friction really lives — and which problems are worth solving first.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-6 text-center">Join the Design Partner Program</h3>
            <CustomLeadForm 
              title="Work with us"
              description="Interested in shaping the future of activity operations? Drop us a line."
              buttonText="Apply to Partner Program"
            />
          </div>
        </Container>
      </Section>

      {/* Section 7 — Conversion */}
      <CTASection 
        headline="Build a better operational day with us." 
        description="Whether you run lessons, trips, rentals, camps or an activity center, show us how your current operation works."
        primaryCtaText="Join the Design Partner Program"
        primaryCtaHref="/design-partners"
        secondaryCtaText="Explore the Platform"
        secondaryCtaHref="/platform"
      />
    </div>
  );
}
