"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-abyss pt-24 pb-16">
      {/* Background Image Layer with Dark Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/oasis_landscape.png"
          alt="Midnight Desert Oasis"
          fill
          priority
          className="object-cover object-center opacity-40 desaturate-[40%] brightness-[70%]"
        />
        {/* Amber Glow overlay with design token gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,11,0,0.4)_0%,rgba(11,6,0,0.95)_80%)]" />
        
        {/* Soft decorative light highlights */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-glow/5 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 grid-bg-oasis opacity-30 z-1 pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center text-center">
        {/* Upper Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-deep-onyx/80 border border-fossil-grey backdrop-blur-sm mb-8"
        >
          <Sparkles size={12} className="text-amber-glow" />
          <span className="text-caption uppercase font-medium tracking-wider text-dawn-linen">
            Cellular Longevity & Vitality Oasis
          </span>
        </motion.div>

        {/* Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-display tracking-[-0.014em] text-dawn-linen max-w-4xl"
        >
          A REVOLUTION IN <br />
          <span className="text-amber-glow font-medium">BIOLOGICAL AGE</span>
        </motion.h1>

        {/* Explanatory Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mt-8 text-body text-pale-ash max-w-xl leading-relaxed"
        >
          A Better Lou establishes an authoritative biological wellness architecture. Utilizing deep-cell data and circadian science to halt—and reverse—your physiological clock.
        </motion.p>

        {/* Action Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-3"
        >
          <div className="flex items-center gap-2 bg-deep-onyx/40 p-1.5 rounded-full border border-dark-charcoal backdrop-blur-sm">
            <a href="#calculator" className="btn-primary flex items-center gap-2">
              <span>Begin Audit</span>
            </a>
            <a href="#features" className="btn-icon">
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </div>
          <a href="#metrics" className="btn-secondary">
            Explore Science
          </a>
        </motion.div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-8 border-t border-dark-charcoal w-full max-w-4xl text-left"
        >
          <div>
            <div className="text-caption uppercase tracking-wider text-pale-ash mb-1">
              clinical trials
            </div>
            <div className="text-subheading font-medium text-dawn-linen">
              100% Retrospective
            </div>
          </div>
          <div>
            <div className="text-caption uppercase tracking-wider text-pale-ash mb-1">
              average age reversal
            </div>
            <div className="text-subheading font-medium text-amber-glow">
              -4.8 Years
            </div>
          </div>
          <div>
            <div className="text-caption uppercase tracking-wider text-pale-ash mb-1">
              patient compliance
            </div>
            <div className="text-subheading font-medium text-dawn-linen">
              98.2% Seamless
            </div>
          </div>
          <div>
            <div className="text-caption uppercase tracking-wider text-pale-ash mb-1">
              medical oversight
            </div>
            <div className="text-subheading font-medium text-dawn-linen">
              Elite MD Audited
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
