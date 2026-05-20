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
    <section id="robotic" className="relative py-24 bg-soft-grey overflow-hidden">
      {/* Subtle circular background lighting */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] rounded-full bg-medical-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-caption font-bold uppercase tracking-wider text-recovery-teal">
            Udaipur Clinic Audits
          </span>
          <h2 className="text-section font-bold tracking-tight text-trust-navy mt-3">
            Select Your Joint Assessment Pathway
          </h2>
          <p className="text-body mt-4 leading-relaxed">
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
            className="rounded-[6px] p-8 flex flex-col justify-between relative shadow-sm transition-all duration-300 bg-[#0b0600] text-[#fff1e0] border border-border-grey hover:border-recovery-teal hover:shadow-md"
          >
            <div>
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider font-bold block text-[#ffb442]">
                  Level 1 Diagnostics
                </span>
                <h3 className="text-subheading font-bold mt-2 font-display">
                  Primary Clinical Assessment
                </h3>
                <span className="text-xs text-white/50 block mt-1">Available at Mahe Clinic (Bedla Road)</span>
              </div>

              {/* Location & Timings Block */}
              <div className="space-y-2.5 mb-6 pb-6 border-b border-border-grey/30">
                <div className="flex items-start gap-2.5 text-xs text-white/70">
                  <MapPin size={14} className="text-[#ffb442] mt-0.5" />
                  <span className="font-medium">Bedla Road, Udaipur, Rajasthan</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-white/70">
                  <Clock size={14} className="text-[#ffb442] mt-0.5" />
                  <span className="font-medium">05:00 PM - 08:00 PM (Mon - Sat)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-white/70">
                  <Phone size={14} className="text-[#ffb442] mt-0.5" />
                  <span className="font-medium">+91 94143 93320</span>
                </div>
              </div>

              {/* Features Checklist */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-full p-0.5 flex items-center justify-center bg-[#140b00] text-[#ffb442] border border-border-grey">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold leading-snug">
                    Complete physical & muscle balance exam
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-full p-0.5 flex items-center justify-center bg-[#140b00] text-[#ffb442] border border-border-grey">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold leading-snug">
                    Joint friction & ligament stability scan
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-full p-0.5 flex items-center justify-center bg-[#140b00] text-[#ffb442] border border-border-grey">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold leading-snug">
                    Arthroscopy keyhole surgical eligibility check
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-full p-0.5 flex items-center justify-center bg-[#140b00] text-[#ffb442] border border-border-grey">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold leading-snug">
                    Includes custom non-surgical arthritis blueprint
                  </span>
                </li>
              </ul>
            </div>

            <a
              href="#booking"
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full flex items-center justify-center gap-2 bg-[#ffb442] text-[#140b00] hover:bg-[#fff1e0]"
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
            className="rounded-[6px] p-8 pt-10 flex flex-col justify-between relative shadow-xl scale-[1.03] bg-[#ffb442] text-[#140b00] border-t-4 border-[#fff1e0]"
          >
            {/* Recommended Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#fff1e0] text-[#140b00] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-border-grey flex items-center gap-1.5 shadow-md">
              <Cpu size={12} className="text-[#ffb442] animate-pulse" /> Advanced Precision
            </div>

            <div>
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider font-bold block text-neutral-900/80">
                  Most Popular Outcome Package
                </span>
                <h3 className="text-subheading font-bold mt-2 font-display">
                  The Precision Joint Freedom Audit
                </h3>
                <span className="text-xs text-[#140b00]/60 block mt-1">Direct MRI Review & 3D Robotic Suitability</span>
              </div>

              {/* Location & Timings Block */}
              <div className="space-y-2.5 mb-6 pb-6 border-b border-[#140b00]/20">
                <div className="flex items-start gap-2.5 text-xs text-[#140b00]">
                  <MapPin size={14} className="text-[#140b00] mt-0.5" />
                  <span className="font-medium">Direct Diagnostic Consultation suite</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#140b00]">
                  <Clock size={14} className="text-[#140b00] mt-0.5" />
                  <span className="font-medium">Personalized 1-on-1 specialist session</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#140b00]">
                  <Phone size={14} className="text-[#140b00] mt-0.5" />
                  <span className="font-medium">Priority clinic intake review</span>
                </div>
              </div>

              {/* Features Checklist */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-full p-0.5 flex items-center justify-center bg-[#140b00] text-[#ffb442]">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold leading-snug">
                    Advanced 3D pre-operative robotic alignment plan
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-full p-0.5 flex items-center justify-center bg-[#140b00] text-[#ffb442]">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold leading-snug">
                    Detailed X-Ray & MRI bone integrity analysis
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-full p-0.5 flex items-center justify-center bg-[#140b00] text-[#ffb442]">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold leading-snug">
                    Custom muscle preservation physical therapy roadmap
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-full p-0.5 flex items-center justify-center bg-[#140b00] text-[#ffb442]">
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
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full flex items-center justify-center gap-2 bg-[#140b00] text-[#ffb442] hover:bg-[#0b0600]"
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
            className="rounded-[6px] p-8 flex flex-col justify-between relative shadow-sm transition-all duration-300 bg-[#0b0600] text-[#fff1e0] border border-border-grey hover:border-recovery-teal hover:shadow-md"
          >
            <div>
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider font-bold block text-[#ffb442]">
                  State-of-the-Art Hospital Care
                </span>
                <h3 className="text-subheading font-bold mt-2 font-display">
                  Surgical & Inpatient Program
                </h3>
                <span className="text-xs text-white/50 block mt-1">Available at Paras Hospital (NH-8)</span>
              </div>

              {/* Location & Timings Block */}
              <div className="space-y-2.5 mb-6 pb-6 border-b border-border-grey/30">
                <div className="flex items-start gap-2.5 text-xs text-white/70">
                  <MapPin size={14} className="text-[#ffb442] mt-0.5" />
                  <span className="font-medium">NH-8, Udaipur, Rajasthan</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-white/70">
                  <Clock size={14} className="text-[#ffb442] mt-0.5" />
                  <span className="font-medium">09:00 AM - 04:00 PM (Mon - Sat)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-white/70">
                  <Phone size={14} className="text-[#ffb442] mt-0.5" />
                  <span className="font-medium">+91 94143 93320</span>
                </div>
              </div>

              {/* Features Checklist */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-full p-0.5 flex items-center justify-center bg-[#140b00] text-[#ffb442] border border-border-grey">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold leading-snug">
                    Sub-millimeter operatory suite robotic implants
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-full p-0.5 flex items-center justify-center bg-[#140b00] text-[#ffb442] border border-border-grey">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold leading-snug">
                    Zero-infection modular operating theatres
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-full p-0.5 flex items-center justify-center bg-[#140b00] text-[#ffb442] border border-border-grey">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold leading-snug">
                    Comprehensive trauma and primary revision care
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-full p-0.5 flex items-center justify-center bg-[#140b00] text-[#ffb442] border border-border-grey">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold leading-snug">
                    Corporate insurance inpatient registration desk
                  </span>
                </li>
              </ul>
            </div>

            <a
              href="#booking"
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full flex items-center justify-center gap-2 bg-[#ffb442] text-[#140b00] hover:bg-[#fff1e0]"
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
