"use client";

import { motion } from "framer-motion";
import { Clock, Activity, Zap, ShieldAlert } from "lucide-react";

export default function Stats() {
  const telemetry = [
    {
      title: "Biological Age Index",
      metric: "Age Delta: -4.8y",
      sub: "Determined via clinical epigenetic audit",
      icon: Clock,
      value: 82,
      color: "text-amber-glow",
    },
    {
      title: "Autonomic Nervous Balance",
      metric: "HRV: +28ms",
      sub: "Circadian synchronization indicator",
      icon: Activity,
      value: 74,
      color: "text-dawn-linen",
    },
    {
      title: "Cellular Energy Synthesis",
      metric: "ATP Output: +15%",
      sub: "Mitochondrial respirative efficiency",
      icon: Zap,
      value: 91,
      color: "text-amber-glow",
    },
    {
      title: "Biological Inflammation Level",
      metric: "hs-CRP: 0.4 mg/L",
      sub: "Optimal systemic recovery state",
      icon: ShieldAlert,
      value: 94,
      color: "text-dawn-linen",
    },
  ];

  return (
    <section id="metrics" className="relative py-24 bg-abyss border-t border-dark-charcoal overflow-hidden">
      {/* Decorative Glow background */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-amber-glow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-caption uppercase tracking-wider text-amber-glow font-medium">
              Real-time biological telemetry
            </span>
            <h2 className="text-heading-lg text-dawn-linen mt-4 tracking-[-0.008em]">
              OUR SYSTEMIC AUDIT DEFIES THE CLOCK
            </h2>
          </div>
          <p className="text-body text-pale-ash max-w-sm leading-relaxed">
            By monitoring cellular markers, sleep architecture, and cortisol release, we map your trajectory and deliver interventions that shift your vital signs.
          </p>
        </div>

        {/* Visual Biological Clock & Telemetry Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Interactive Circle Clock (Left) */}
          <div className="lg:col-span-5 bg-deep-onyx border border-dark-charcoal rounded-md p-8 flex flex-col items-center justify-center relative min-h-[380px] group">
            <span className="text-caption uppercase tracking-widest text-pale-ash mb-4">
              Circadian Phase Alignment
            </span>
            
            {/* Visual Outlined Clock Graphic */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="absolute w-full h-full transform -rotate-90">
                {/* Outlined Circles */}
                <circle cx="96" cy="96" r="88" fill="none" stroke="#181109" strokeWidth="2" />
                <circle cx="96" cy="96" r="76" fill="none" stroke="#43392d" strokeWidth="1" strokeDasharray="4 6" />
                <circle cx="96" cy="96" r="64" fill="none" stroke="#4f4538" strokeWidth="1" />
                {/* Active Amber Glow Dial Progress */}
                <motion.circle
                  cx="96"
                  cy="96"
                  r="88"
                  fill="none"
                  stroke="#ffb442"
                  strokeWidth="2"
                  strokeDasharray="552"
                  initial={{ strokeDashoffset: 552 }}
                  whileInView={{ strokeDashoffset: 160 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </svg>
              {/* Central Core Display */}
              <div className="text-center z-10">
                <span className="text-caption text-pale-ash uppercase tracking-wider block">Bio Phase</span>
                <span className="text-heading text-amber-glow font-medium">94.8%</span>
                <span className="text-caption text-dawn-linen block font-mono mt-1">OPTIMIZED</span>
              </div>

              {/* Orbital Dot */}
              <motion.div
                className="absolute w-2.5 h-2.5 bg-amber-glow rounded-full shadow-[0_0_10px_#ffb442]"
                style={{ top: "8px", left: "96px", transformOrigin: "0px 88px" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="mt-8 text-center">
              <p className="text-body text-dawn-linen font-medium">Circadian Peak Sync Active</p>
              <p className="text-caption text-pale-ash mt-1">Melatonin suppression triggers in 4.2 hours</p>
            </div>
          </div>

          {/* Telemetry Cards Grid (Right) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {telemetry.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-deep-onyx border border-dark-charcoal rounded-md p-6 flex flex-col justify-between min-h-[180px] hover:border-fossil-grey transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-dark-charcoal rounded-md border border-fossil-grey/40">
                    <item.icon size={18} className="text-dawn-linen" />
                  </div>
                  <span className="text-caption font-mono uppercase text-pale-ash tracking-wider">
                    Audit {idx + 1}
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-caption text-pale-ash uppercase tracking-wider">{item.title}</h3>
                  <p className={`text-subheading font-medium mt-1 ${item.color}`}>
                    {item.metric}
                  </p>
                  <p className="text-caption text-pale-ash mt-1">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
