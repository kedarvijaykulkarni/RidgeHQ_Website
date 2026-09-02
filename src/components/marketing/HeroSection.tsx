"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Layout";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)] pt-24 pb-32">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/kailash-night.webp')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[var(--bg)]/80 to-[var(--bg)] pointer-events-none" />
      
      {/* Starfield + ambient dual-tone glow */}
      <div className="starfield absolute inset-0 z-0 pointer-events-none opacity-50" />
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full blur-[100px] pointer-events-none bg-[var(--glow)] z-0" />
      <div className="absolute top-1/3 -left-40 w-[420px] h-[420px] rounded-full blur-[110px] pointer-events-none bg-[var(--accent-2)] opacity-[0.06] z-0" />

      <Container className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 font-mono text-[11.5px] font-semibold tracking-wide text-[var(--accent)] bg-[var(--accent-soft)] border border-[var(--accent-border)] rounded-full pl-2.5 pr-3.5 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            THE ACTIVITY BUSINESS OS
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-[var(--ink)]">
            Run your entire activity business from <span className="text-gradient-accent">one HQ</span>.
          </h1>
          
          <p className="text-xl text-[var(--ink-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed">
            RidgeHQ connects bookings, schedules, staff, customers, gear, rentals, trips, payments and daily operations in one live system &mdash; with an AI copilot built around the work.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-[var(--cta)] hover:bg-[var(--cta-hover)] text-[var(--cta-text)] font-bold border-none" asChild>
              <Link href="/book-demo">Book a Demo <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="group text-[var(--ink)] bg-[var(--bg-elevated)] border-[var(--border)] hover:border-[var(--accent)]" asChild>
              <Link href="/design-partners">Join the Design Partner Program <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 text-[var(--ink-tertiary)] group-hover:text-[var(--accent)]" /></Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
