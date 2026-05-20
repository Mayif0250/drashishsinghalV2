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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-caption font-bold uppercase tracking-wider text-recovery-teal">
            Technology & Clinics
          </span>
          <h2 className="text-section font-bold tracking-tight text-trust-navy mt-3">
            World-Class Robotic Joint Technology & Clinic Locations
          </h2>
          <p className="text-body mt-4 leading-relaxed">
            Consult directly at Mahe Clinic or access advanced, robotic-assisted surgical theaters at Paras Hospital. We bring precision joint replacements to Udaipur.
          </p>
        </div>

        {/* Pricing/Clinic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {centers.map((cnt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`rounded-[6px] p-8 flex flex-col justify-between relative shadow-sm transition-all duration-300 ${
                cnt.isAccent
                  ? "bg-[#ffb442] text-[#140b00] shadow-xl scale-[1.03] border-t-4 border-[#fff1e0]"
                  : "bg-[#0b0600] text-[#fff1e0] border border-border-grey hover:border-recovery-teal hover:shadow-md"
              }`}
            >
              {/* Recommended Technology Badge */}
              {cnt.isAccent && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#fff1e0] text-[#140b00] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-border-grey flex items-center gap-1.5 shadow-md">
                  <Cpu size={12} className="text-[#ffb442] animate-pulse" /> Advanced Innovation
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-6">
                  <span className={`text-caption uppercase tracking-wider font-bold block ${cnt.isAccent ? "text-[#140b00]/80" : "text-recovery-teal"}`}>
                    {cnt.type}
                  </span>
                  <h3 className="text-subheading font-bold mt-2 font-display">
                    {cnt.name}
                  </h3>
                </div>

                {/* Location Timings Block */}
                <div className="space-y-2.5 mb-6 pb-6 border-b border-border-grey/30">
                  <div className="flex items-start gap-2.5 text-xs">
                    <MapPin size={14} className={cnt.isAccent ? "text-[#140b00] mt-0.5" : "text-[#ffb442] mt-0.5"} />
                    <span className="font-medium">{cnt.location}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs">
                    <Clock size={14} className={cnt.isAccent ? "text-[#140b00] mt-0.5" : "text-[#ffb442] mt-0.5"} />
                    <span className="font-medium">{cnt.timings}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs">
                    <Phone size={14} className={cnt.isAccent ? "text-[#140b00] mt-0.5" : "text-[#ffb442] mt-0.5"} />
                    <span className="font-medium">{cnt.contact}</span>
                  </div>
                </div>

                {/* Features Checklist */}
                <ul className="space-y-4 mb-8">
                  {cnt.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <div className={`mt-0.5 rounded-full p-0.5 flex items-center justify-center ${
                        cnt.isAccent ? "bg-[#140b00] text-[#ffb442]" : "bg-[#140b00] text-[#ffb442] border border-border-grey"
                      }`}>
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span className="text-sm font-semibold leading-snug">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a
                href="#booking"
                className={`w-full py-3 text-center text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full flex items-center justify-center gap-2 ${
                  cnt.isAccent
                    ? "bg-[#140b00] text-[#ffb442] hover:bg-[#0b0600]"
                    : "bg-[#ffb442] text-[#140b00] hover:bg-[#fff1e0]"
                }`}
              >
                {cnt.isAccent ? (
                  <>
                    <Cpu size={14} />
                    <span>Explore Robotics</span>
                  </>
                ) : (
                  <>
                    <Hospital size={14} />
                    <span>Select Location</span>
                  </>
                )}
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
