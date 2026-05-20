"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Check } from "lucide-react";

export default function Pricing() {
  const centers = [
    {
      badge: "Outpatient Clinic",
      name: "Mahe Clinic",
      location: "Bedla Road, Udaipur, Rajasthan",
      phone: "+91 94143 93320",
      timings: "05:00 PM – 08:00 PM · Mon–Sat",
      features: ["Clinical diagnostic checkups", "Sports injury recovery", "Arthroscopic diagnosis scheduling", "Non-surgical joint therapy"],
      dark: false,
    },
    {
      badge: "Advanced Technology",
      name: "Robotic Surgery Suite",
      location: "State-of-the-Art Robotic Arms",
      phone: "Precise anatomical alignment",
      timings: "Minimally invasive replacements",
      features: ["Robotic-assisted precision alignment", "Maximum bone & ligament preservation", "Reduced post-operative pain", "Faster rehabilitation & gait restoration"],
      dark: true,
    },
    {
      badge: "Multi-Specialty Hospital",
      name: "Paras Hospital",
      location: "NH-8, Udaipur, Rajasthan",
      phone: "+91 94143 93320",
      timings: "09:00 AM – 04:00 PM · Mon–Sat",
      features: ["Advanced modular operation theatres", "Modern robotic replacement equipment", "Inpatient registration & nursing care", "Trauma & emergency orthopedics"],
      dark: false,
    },
  ];

  return (
    <section id="robotic" className="bg-parchment-gray py-20 md:py-28 border-t border-ash-mist">
      <div className="max-w-[1200px] mx-auto px-0">

        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2
            style={{ fontFamily: "var(--font-exposure30), 'Playfair Display', serif", fontWeight: 400, letterSpacing: "-0.01px", lineHeight: 1.1 }}
            className="text-[clamp(32px,5vw,56px)] text-midnight-charcoal max-w-xl"
          >
            Clinic Locations
          </h2>
          <p style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif", fontSize: "14px", lineHeight: 1.5 }} className="text-stone-accent max-w-xs md:text-right">
            Every audit includes a comprehensive evaluation and personalized recovery plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ash-mist">
          {centers.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 flex flex-col gap-7 ${c.dark ? "bg-midnight-charcoal" : "bg-canvas-white"}`}
              style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif" }}
            >
              {/* Badge */}
              <span className={`inline-block text-[10px] uppercase tracking-wider px-3 py-1 self-start ${c.dark ? "bg-deep-plum text-stone-accent" : "border border-ash-mist text-stone-accent"}`}>
                {c.badge}
              </span>

              {/* Name */}
              <h3
                style={{ fontFamily: "var(--font-exposure30), 'Playfair Display', serif", fontWeight: 400, letterSpacing: "-0.01px", lineHeight: 1.1 }}
                className={`text-[26px] ${c.dark ? "text-canvas-white" : "text-midnight-charcoal"}`}
              >
                {c.name}
              </h3>

              {/* Info */}
              <div className={`flex flex-col gap-2.5 border-t border-b py-5 ${c.dark ? "border-deep-plum" : "border-faded-stone"}`}>
                <div className="flex items-start gap-2.5">
                  <MapPin size={13} className={`mt-0.5 flex-shrink-0 ${c.dark ? "text-sunset-orange" : "text-stone-accent"}`} />
                  <span className={`text-[13px] ${c.dark ? "text-stone-accent" : "text-midnight-charcoal"}`}>{c.location}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock size={13} className={`mt-0.5 flex-shrink-0 ${c.dark ? "text-sunset-orange" : "text-stone-accent"}`} />
                  <span className={`text-[13px] ${c.dark ? "text-stone-accent" : "text-midnight-charcoal"}`}>{c.timings}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone size={13} className={`mt-0.5 flex-shrink-0 ${c.dark ? "text-sunset-orange" : "text-stone-accent"}`} />
                  <span className={`text-[13px] ${c.dark ? "text-stone-accent" : "text-midnight-charcoal"}`}>{c.phone}</span>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-3 flex-grow">
                {c.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={13} className={`mt-0.5 flex-shrink-0 ${c.dark ? "text-sunset-orange" : "text-sunset-orange"}`} />
                    <span className={`text-[13px] leading-snug ${c.dark ? "text-stone-accent" : "text-midnight-charcoal"}`}>{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a href="#booking" className={c.dark ? "btn-parloa-light w-full text-center" : "btn-parloa-primary w-full text-center"}>
                {c.dark ? "Claim Priority Audit" : "Book Consultation"}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
