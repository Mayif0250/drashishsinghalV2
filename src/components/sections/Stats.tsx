"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, HeartPulse, Activity } from "lucide-react";

export default function Stats() {
  const metrics = [
    {
      title: "Clinical Experience",
      value: "20+ Years",
      desc: "Delivering world-class joint care and orthopedic surgeries in Udaipur",
      icon: Award,
    },
    {
      title: "Robotic Knee Surgeries",
      value: "1,600+",
      desc: "Precision robotic alignment with highly optimal patient implant outcomes",
      icon: HeartPulse,
    },
    {
      title: "Treatment Success Rate",
      value: "99%+",
      desc: "Proven clinical success tracking for mobility restoration and pain relief",
      icon: ShieldCheck,
    },
    {
      title: "Surgical Innovations",
      value: "Robotic",
      desc: "Utilizing advanced state-of-the-art precision robotic-assisted systems",
      icon: Activity,
    },
  ];

  return (
    <section className="relative py-20 bg-soft-grey border-y border-border-grey overflow-hidden">
      <div className="max-w-[94%] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-caption font-bold uppercase tracking-wider text-recovery-teal">
            Trust & Medical Excellence
          </span>
          <h2 className="text-section font-bold tracking-tight text-trust-navy mt-3">
            Why Patients Choose Dr. Ashish Singhal
          </h2>
          <p className="text-body mt-4 leading-relaxed">
            Every clinical procedure is anchored in patient safety, absolute structural precision, and advanced orthopedic technology to support faster post-op recovery.
          </p>
        </div>

        {/* Clinical Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((met, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-clinical flex flex-col justify-between min-h-[220px]"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-medical-blue/10 flex items-center justify-center text-medical-blue">
                  <met.icon size={20} strokeWidth={2.5} />
                </div>
                <span className="text-caption font-mono uppercase text-recovery-teal">
                  Metric 0{idx + 1}
                </span>
              </div>

              <div className="mt-6">
                <span className="text-caption uppercase tracking-wider text-trust-navy block">
                  {met.title}
                </span>
                <span className="text-display text-medical-blue block font-bold mt-1 font-display tracking-tight leading-none">
                  {met.value}
                </span>
                <p className="text-caption text-body block mt-3">
                  {met.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
