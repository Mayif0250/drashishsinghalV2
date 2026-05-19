"use client";

import { motion } from "framer-motion";
import { Dna, Moon, Eye, SunDim } from "lucide-react";

export default function Features() {
  const pillars = [
    {
      title: "Biological Audits",
      desc: "Comprehensive epigenetic diagnostics monitoring 820+ cellular and blood metrics to isolate precise bio-targets.",
      icon: Dna,
      badge: "Diagnostics",
    },
    {
      title: "Circadian Syncing",
      desc: "Aligning deep endocrine and cortisol systems with local sun trajectories to restore core cellular rest cycles.",
      icon: Moon,
      badge: "Circadian",
    },
    {
      title: "Cellular Reconstitution",
      desc: "Elite metabolic and mitochondrial stimulation programs designed to boost ATP synthesis and lower inflammatory CRP.",
      icon: Eye,
      badge: "Mitochondrial",
    },
    {
      title: "Desert Thermal Therapy",
      desc: "Integrating infrared thermal fluctuations and mineral bath protocols to trigger robust shock protein responses.",
      icon: SunDim,
      badge: "Physical",
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-abyss border-t border-dark-charcoal overflow-hidden">
      {/* Accent soft backdrop light */}
      <div className="absolute left-10 bottom-10 w-[300px] h-[300px] bg-amber-glow/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <span className="text-caption uppercase tracking-wider text-amber-glow font-medium">
            System Abstractions
          </span>
          <h2 className="text-heading-lg text-dawn-linen mt-4 tracking-[-0.008em]">
            THE FOUR PILLARS OF LONGEVITY PROTOCOLS
          </h2>
          <p className="text-body text-pale-ash mt-4 leading-relaxed">
            Our wellness oasis does not rely on trends. We implement hard epigenetic science, clinical observation, and biological optimization in a controlled, premium environment.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-deep-onyx border border-fossil-grey p-[12px] rounded-md flex flex-col justify-between min-h-[220px] group hover:border-pale-ash transition-all"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-dark-charcoal border border-fossil-grey flex items-center justify-center text-dawn-linen group-hover:text-amber-glow transition-colors">
                    <pillar.icon size={20} strokeWidth={2} />
                  </div>
                  <span className="text-caption font-mono uppercase tracking-wider text-pale-ash px-2 py-0.5 rounded border border-dark-charcoal">
                    {pillar.badge}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-subheading text-dawn-linen font-medium mt-[12px]">
                  {pillar.title}
                </h3>
                <p className="text-body text-pale-ash mt-2 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              {/* Decorative detail */}
              <div className="mt-4 pt-4 border-t border-dark-charcoal flex justify-between items-center">
                <span className="text-caption text-pale-ash font-mono uppercase tracking-widest">
                  AB-SYS 00{idx + 1}
                </span>
                <span className="text-caption text-amber-glow font-medium">
                  Protocol Active
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
