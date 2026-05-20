"use client";

import { motion } from "framer-motion";
import { Dumbbell, ShieldAlert, Cpu, CheckCircle } from "lucide-react";

export default function Features() {
  const treatments = [
    {
      title: "Sports Injury Treatment",
      desc: "Comprehensive performance-focused sports recovery programs catering to athletes of all disciplines.",
      points: [
        "Ligament & ACL repairs",
        "Arthroscopic knee & shoulder repair",
        "Sports physical rehabilitation",
        "Musculoskeletal mobility restoration",
      ],
      icon: Dumbbell,
      badge: "Athletic Mobility",
    },
    {
      title: "Arthroscopic Orthopedics",
      desc: "Advanced minimally invasive joint diagnostics and repairs ensuring patient comfort and lower post-op healing times.",
      points: [
        "Minimally invasive keyhole access",
        "Precision cartilage repairs",
        "High-definition digital diagnosis",
        "Customized fast healing plans",
      ],
      icon: ShieldAlert,
      badge: "Keyhole Precision",
    },
    {
      title: "Robotic Knee & Hip Replacement",
      desc: "State-of-the-art robotic-assisted joint alignment technology integrated directly into surgical orthopedic workflows.",
      points: [
        "Robotic alignment precision",
        "Sparing healthy bone & ligaments",
        "Reduced post-surgical pain levels",
        "Highly durable, long-lasting implants",
      ],
      icon: Cpu,
      badge: "Robotic Innovation",
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-[#0b0600] overflow-hidden">
      <div className="max-w-[94%] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-caption font-bold uppercase tracking-wider text-recovery-teal">
            Core Specializations
          </span>
          <h2 className="text-section font-bold tracking-tight text-trust-navy mt-3">
            Advanced Orthopedic Treatments & Surgical Precision
          </h2>
          <p className="text-body mt-4 leading-relaxed">
            Dr. Ashish Singhal offers comprehensive clinical diagnostic pathways and advanced, technology-driven treatments to resolve chronic joint pain and restore native functional mobility.
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((treat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="card-clinical flex flex-col justify-between min-h-[480px]"
            >
              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-medical-blue/10 flex items-center justify-center text-medical-blue">
                    <treat.icon size={22} strokeWidth={2.5} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-recovery-teal bg-soft-grey px-3 py-1 rounded-full">
                    {treat.badge}
                  </span>
                </div>

                {/* Heading */}
                <h3 className="text-subheading font-bold text-trust-navy mt-4">
                  {treat.title}
                </h3>
                
                {/* Description */}
                <p className="text-body text-sm mt-3 leading-relaxed">
                  {treat.desc}
                </p>

                {/* Point Items */}
                <ul className="mt-6 space-y-3">
                  {treat.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <CheckCircle size={14} className="text-success-green mt-1 flex-shrink-0" />
                      <span className="text-sm font-medium text-trust-navy">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action trigger */}
              <div className="mt-8 pt-6 border-t border-border-grey flex items-center justify-between">
                <span className="text-caption font-mono uppercase tracking-widest">
                  Specialty 0{idx + 1}
                </span>
                <a href="#booking" className="text-xs font-bold text-medical-blue hover:text-trust-navy transition-colors uppercase tracking-wider">
                  Book Clinic Audit
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
