"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { verticals } from "@/lib/config/verticals";
import { VerticalCard } from "@/components/marketing/VerticalCard";
import { Container } from "@/components/ui/Layout";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const TABS = ["Water Sports", "Snow & Mountains", "Rentals & Tours"] as const;
type Tab = typeof TABS[number];

export function VerticalsExplorer() {
  const [activeTab, setActiveTab] = useState<Tab>("Water Sports");

  const filteredVerticals = verticals.filter((v) => {
    if (activeTab === "Water Sports") return ["dive-centers", "surf-schools", "kitesurf-schools", "sailing-schools", "windsurf-schools", "dive-resorts", "surf-camps"].includes(v.id);
    if (activeTab === "Snow & Mountains") return ["ski-schools", "outdoor-whitewater"].includes(v.id);
    if (activeTab === "Rentals & Tours") return ["kayak-rental-tours", "bike-rental-tours", "boat-rental-courses"].includes(v.id);
    return true;
  });

  return (
    <div className="py-24 sm:py-32 bg-[var(--bg)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="font-mono text-xs font-semibold tracking-widest text-[var(--accent)] mb-3">
            01 &mdash; BUILT FOR YOUR INDUSTRY
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--ink)]">
            One operational model. Different ways to run the day.
          </h2>
          <p className="mt-4 text-lg text-[var(--ink-secondary)]">
            Whether you schedule instructors, boats, boards, bikes, rooms or guided trips, the core challenge is similar: coordinate people, capacity, resources, time and payment without losing the operational picture.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="glass-panel inline-flex items-center rounded-full p-1 bg-[var(--bg-elevated)]/50">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[var(--accent)] text-[var(--bg)] shadow-md"
                    : "text-[var(--ink-tertiary)] hover:text-[var(--ink)] hover:bg-[var(--border)]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filteredVerticals.map((v, i) => (
                <motion.div
                  key={v.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className="h-full"
                >
                  <VerticalCard vertical={v} className="h-full" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <Button variant="link" className="text-[var(--accent)] hover:text-[var(--accent-2)]" asChild>
            <Link href="/solutions">View all supported industries &rarr;</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
