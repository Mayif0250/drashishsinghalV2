"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, User, Cpu, PhoneCall } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-canvas-warmth pt-28 pb-4 overflow-hidden">
      {/* Background Image with Dr. Singhal's Actual Photo in Crisp Natural Colors */}
      <div className="absolute inset-0 z-0 bg-canvas-warmth">
        <Image
          src="/dr_singhal_original.png"
          alt="Dr. Ashish Singhal - Advanced Orthopedics"
          fill
          priority
          className="object-cover object-right opacity-100"
        />
        {/* Reduced-opacity overlays — lets background image show clearly */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fcf9f7]/90 via-[#fcf9f7]/60 md:via-[#fcf9f7]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fcf9f7]/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fcf9f7]/15 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="max-w-[94%] mx-auto px-4 md:px-8 w-full relative z-10 flex-grow flex items-center pt-8">
        <div className="max-w-3xl text-left">
          {/* Main Title structured on exactly 2 lines for wide screens */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-[62px] font-display font-medium text-headline-dark tracking-tight leading-[1.08] lg:max-w-4xl"
          >
            Joint wear is inevitable, <br className="hidden md:inline" />
            feeling young is optional
          </motion.h1>

          {/* Subtitle matching Alveos body style */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-sm md:text-base text-body-gray max-w-xl leading-relaxed font-sans font-normal"
          >
            Physician-led robotic joint replacements and advanced orthopedic care for Udaipur patients, focused on active recovery, strength, and pain-free mobility.
          </motion.p>

          {/* Action Button Group matching Alveos rounded corners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex items-center gap-3"
          >
            <a
              href="#booking"
              className="px-6 py-3.5 bg-deep-graphite hover:bg-headline-dark text-canvas-warmth rounded-[12px] text-xs font-semibold uppercase tracking-[0.444em] transition-all shadow-sm flex items-center justify-center"
            >
              Get Started
            </a>
            <a
              href="#booking"
              className="w-11 h-11 bg-deep-graphite hover:bg-headline-dark text-canvas-warmth rounded-[12px] flex items-center justify-center transition-all shadow-sm"
            >
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar Info Grid - Restyled to Alveos Light */}
      <div className="w-full relative z-10 mt-6 border-t border-line-gray">
        <div className="max-w-[94%] mx-auto px-4 md:px-8 pt-6 pb-2">

          {/* Divider Label Header */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-semibold text-headline-dark/95 tracking-wide font-sans">
              Built on science. Focused on recovery.
            </span>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-deep-graphite/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-deep-graphite" />
            </div>
          </div>

          {/* Three-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Col 1 */}
            <div className="flex flex-col items-start text-left md:pr-8">
              <div className="w-8 h-8 rounded-[12px] border border-line-gray bg-surface-white flex items-center justify-center text-deep-graphite mb-4 shadow-sm">
                <User size={14} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-headline-dark">
                Personalized care
              </h3>
              <p className="text-xs text-body-gray mt-2 leading-relaxed font-sans font-normal">
                A recovery program built entirely around your biology and functional joint goals.
              </p>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col items-start text-left md:px-8 md:border-x border-line-gray">
              <div className="w-8 h-8 rounded-[12px] border border-line-gray bg-surface-white flex items-center justify-center text-deep-graphite mb-4 shadow-sm">
                <Cpu size={14} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-headline-dark">
                Science-driven results
              </h3>
              <p className="text-xs text-body-gray mt-2 leading-relaxed font-sans font-normal">
                Proven robotic-assisted methods to restore native joint mechanics, longevity, and active mobility.
              </p>
            </div>

            {/* Col 3 */}
            <div className="flex flex-col items-start text-left md:pl-8">
              <div className="w-8 h-8 rounded-[12px] border border-line-gray bg-surface-white flex items-center justify-center text-deep-graphite mb-4 shadow-sm">
                <PhoneCall size={14} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-headline-dark">
                Confidential support
              </h3>
              <p className="text-xs text-body-gray mt-2 leading-relaxed font-sans font-normal">
                A dedicated surgical and rehabilitation team that's always within clear coordinate reach.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
