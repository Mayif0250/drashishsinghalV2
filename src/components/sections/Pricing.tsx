"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Cpu, Check, Hospital } from "lucide-react";

export default function Pricing() {
  const centers = [
    {
      name: "Mahe Clinic",
      type: "Primary Outpatient Clinic",
      location: "Bedla Road, Udaipur, Rajasthan",
      contact: "+91 94143 93320",
      timings: "05:00 PM - 08:00 PM (Mon - Sat)",
      features: [
        "In-person clinical diagnostic checkups",
        "Sports injury recovery checkups",
        "Arthroscopic diagnosis scheduling",
        "Joint pain non-surgical therapy",
      ],
      isAccent: false,
    },
    {
      name: "Robotic Joint Surgery Suite",
      type: "Advanced Clinical Technology",
      location: "State-of-the-Art Robotic Surgical Arms",
      contact: "Precise anatomical alignment",
      timings: "Minimally invasive knee & hip replacements",
      features: [
        "Robotic-assisted precision alignment",
        "Maximum healthy bone & ligament preservation",
        "Drastically reduced post-operative pain",
        "Faster rehabilitation & immediate gait restoration",
      ],
      isAccent: true,
    },
    {
      name: "Paras Hospital",
      type: "Multi-Specialty Corporate Care",
      location: "NH-8, Udaipur, Rajasthan",
      contact: "+91 94143 93320",
      timings: "09:00 AM - 04:00 PM (Mon - Sat)",
      features: [
        "Advanced modular operation theatres",
        "Modern robotic replacement equipment",
        "Inpatient registration & nursing care",
        "Comprehensive trauma & emergency orthopedics",
      ],
      isAccent: false,
    },
  ];

  return (
    <section id="robotic" className="relative py-24 bg-canvas-warmth overflow-hidden">
      {/* Subtle circular background lighting */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] rounded-full bg-deep-graphite/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-caption block text-headline-dark/70 font-semibold mb-2">
            Udaipur Clinic Audits
          </span>
          <h2 className="text-section font-bold tracking-tight text-headline-dark mt-3">
            Select Your Joint Assessment Pathway
          </h2>
          <p className="text-body mt-4 leading-relaxed text-body-gray">
            Every audit includes a comprehensive physical evaluation, range-of-motion diagnostics, and a personalized joint recovery plan. Schedule directly at Mahe Clinic or access advanced robotic surgery at Paras Hospital.
          </p>
        </div>

        {/* Pricing/Clinic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Primary Outpatient Consultation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[25px] p-8 flex flex-col justify-between relative shadow-sm transition-all duration-300 bg-surface-white text-headline-dark border border-line-gray hover:border-deep-graphite hover:shadow-md"
          >
            <div>
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider font-bold block text-deep-graphite/70">
                  Level 1 Diagnostics
                </span>
                <h3 className="text-subheading font-bold mt-2 font-display text-headline-dark">
                  Primary Clinical Assessment
                </h3>
                <span className="text-xs text-body-gray block mt-1">Available at Mahe Clinic (Bedla Road)</span>
              </div>

              {/* Location & Timings Block */}
              <div className="space-y-2.5 mb-6 pb-6 border-b border-line-gray">
                <div className="flex items-start gap-2.5 text-xs text-body-gray">
                  <MapPin size={14} className="text-deep-graphite mt-0.5" />
                  <span className="font-semibold text-headline-dark">Bedla Road, Udaipur, Rajasthan</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-body-gray">
                  <Clock size={14} className="text-deep-graphite mt-0.5" />
                  <span className="font-semibold text-headline-dark">05:00 PM - 08:00 PM (Mon - Sat)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-body-gray">
                  <Phone size={14} className="text-deep-graphite mt-0.5" />
                  <span className="font-semibold text-headline-dark">+91 94143 93320</span>
                </div>
              </div>

              {/* Features Checklist */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-[6px] p-0.5 flex items-center justify-center bg-deep-graphite/5 text-deep-graphite border border-line-gray">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold text-body-gray leading-snug">
                    Complete physical & muscle balance exam
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-[6px] p-0.5 flex items-center justify-center bg-deep-graphite/5 text-deep-graphite border border-line-gray">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold text-body-gray leading-snug">
                    Joint friction & ligament stability scan
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-[6px] p-0.5 flex items-center justify-center bg-deep-graphite/5 text-deep-graphite border border-line-gray">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold text-body-gray leading-snug">
                    Arthroscopy keyhole surgical eligibility check
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-[6px] p-0.5 flex items-center justify-center bg-deep-graphite/5 text-deep-graphite border border-line-gray">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold text-body-gray leading-snug">
                    Includes custom non-surgical arthritis blueprint
                  </span>
                </li>
              </ul>
            </div>

            <a
              href="#booking"
              className="w-full py-3.5 text-center text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-[12px] flex items-center justify-center gap-2 bg-deep-graphite text-canvas-warmth hover:bg-headline-dark shadow-sm"
            >
              <Hospital size={14} />
              <span>Book Physical Consult</span>
            </a>
          </motion.div>

          {/* Card 2: The Precision Joint Freedom Audit (ACCENT CARD) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[25px] p-8 pt-12 flex flex-col justify-between relative shadow-xl scale-[1.03] bg-deep-graphite text-canvas-warmth border border-deep-graphite"
          >
            {/* Recommended Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-surface-white text-deep-graphite text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-[12px] border border-line-gray flex items-center gap-1.5 shadow-md">
              <Cpu size={12} className="text-deep-graphite animate-pulse" /> Advanced Precision
            </div>

            <div>
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider font-bold block text-canvas-warmth/70">
                  Most Popular Outcome Package
                </span>
                <h3 className="text-subheading font-bold mt-2 font-display text-canvas-warmth">
                  The Precision Joint Freedom Audit
                </h3>
                <span className="text-xs text-canvas-warmth/60 block mt-1">Direct MRI Review & 3D Robotic Suitability</span>
              </div>

              {/* Location & Timings Block */}
              <div className="space-y-2.5 mb-6 pb-6 border-b border-canvas-warmth/20">
                <div className="flex items-start gap-2.5 text-xs text-canvas-warmth/80">
                  <MapPin size={14} className="text-canvas-warmth mt-0.5" />
                  <span className="font-semibold">Direct Diagnostic Consultation suite</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-canvas-warmth/80">
                  <Clock size={14} className="text-canvas-warmth mt-0.5" />
                  <span className="font-semibold">Personalized 1-on-1 specialist session</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-canvas-warmth/80">
                  <Phone size={14} className="text-canvas-warmth mt-0.5" />
                  <span className="font-semibold">Priority clinic intake review</span>
                </div>
              </div>

              {/* Features Checklist */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-[6px] p-0.5 flex items-center justify-center bg-canvas-warmth text-deep-graphite">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold leading-snug">
                    Advanced 3D pre-operative robotic alignment plan
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-[6px] p-0.5 flex items-center justify-center bg-canvas-warmth text-deep-graphite">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold leading-snug">
                    Detailed X-Ray & MRI bone integrity analysis
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-[6px] p-0.5 flex items-center justify-center bg-canvas-warmth text-deep-graphite">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold leading-snug">
                    Custom muscle preservation physical therapy roadmap
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-[6px] p-0.5 flex items-center justify-center bg-canvas-warmth text-deep-graphite">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold leading-snug">
                    *Bonus*: Allocation of dedicated post-op support manager
                  </span>
                </li>
              </ul>
            </div>

            <a
              href="#booking"
              className="w-full py-3.5 text-center text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-[12px] flex items-center justify-center gap-2 bg-canvas-warmth text-deep-graphite hover:bg-surface-white hover:text-headline-dark shadow-sm"
            >
              <Cpu size={14} />
              <span>Claim Priority Joint Audit</span>
            </a>
          </motion.div>

          {/* Card 3: Advanced Hospital Surgical Program */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[25px] p-8 flex flex-col justify-between relative shadow-sm transition-all duration-300 bg-surface-white text-headline-dark border border-line-gray hover:border-deep-graphite hover:shadow-md"
          >
            <div>
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider font-bold block text-deep-graphite/70">
                  State-of-the-Art Hospital Care
                </span>
                <h3 className="text-subheading font-bold mt-2 font-display text-headline-dark">
                  Surgical & Inpatient Program
                </h3>
                <span className="text-xs text-body-gray block mt-1">Available at Paras Hospital (NH-8)</span>
              </div>

              {/* Location & Timings Block */}
              <div className="space-y-2.5 mb-6 pb-6 border-b border-line-gray">
                <div className="flex items-start gap-2.5 text-xs text-body-gray">
                  <MapPin size={14} className="text-deep-graphite mt-0.5" />
                  <span className="font-semibold text-headline-dark">NH-8, Udaipur, Rajasthan</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-body-gray">
                  <Clock size={14} className="text-deep-graphite mt-0.5" />
                  <span className="font-semibold text-headline-dark">09:00 AM - 04:00 PM (Mon - Sat)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-body-gray">
                  <Phone size={14} className="text-deep-graphite mt-0.5" />
                  <span className="font-semibold text-headline-dark">+91 94143 93320</span>
                </div>
              </div>

              {/* Features Checklist */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-[6px] p-0.5 flex items-center justify-center bg-deep-graphite/5 text-deep-graphite border border-line-gray">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold text-body-gray leading-snug">
                    Sub-millimeter operatory suite robotic implants
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-[6px] p-0.5 flex items-center justify-center bg-deep-graphite/5 text-deep-graphite border border-line-gray">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold text-body-gray leading-snug">
                    Zero-infection modular operating theatres
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-[6px] p-0.5 flex items-center justify-center bg-deep-graphite/5 text-deep-graphite border border-line-gray">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold text-body-gray leading-snug">
                    Comprehensive trauma and primary revision care
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-[6px] p-0.5 flex items-center justify-center bg-deep-graphite/5 text-deep-graphite border border-line-gray">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold text-body-gray leading-snug">
                    Corporate insurance inpatient registration desk
                  </span>
                </li>
              </ul>
            </div>

            <a
              href="#booking"
              className="w-full py-3.5 text-center text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-[12px] flex items-center justify-center gap-2 bg-deep-graphite text-canvas-warmth hover:bg-headline-dark shadow-sm"
            >
              <Hospital size={14} />
              <span>Select Hospital Care</span>
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
