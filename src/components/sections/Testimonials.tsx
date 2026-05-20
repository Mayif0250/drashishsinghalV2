"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Testimonials() {
  const credentials = [
    { category: "Qualifications", items: ["MBBS — Bachelor of Medicine & Surgery", "MS Ortho — Master of Surgery in Orthopedics", "Fellowship in Spine Surgery"] },
    { category: "Specializations", items: ["Orthopedic Spine Surgery", "Robotic-Assisted Surgery", "Joint Replacement — Knee, Shoulder & Hip"] },
    { category: "Certifications", items: ["Certified Robotic Surgery Techniques", "Advanced Training in Joint Replacement", "Recognized Fellowship — Spine Surgery"] },
    { category: "Awards", items: ["Excellence in Orthopedic Surgery Award", "Outstanding Contributions to Spine Surgery", "Patient-Centric Compassionate Care Award"] },
  ];

  return (
    <section id="about" className="bg-cream-canvas py-20 md:py-28 border-t border-ash-mist">
      <div className="max-w-[1200px] mx-auto px-0">

        <div className="mb-16">
          <h2
            style={{ fontFamily: "var(--font-exposure30), 'Playfair Display', serif", fontWeight: 400, letterSpacing: "-0.01px", lineHeight: 1.1 }}
            className="text-[clamp(32px,5vw,56px)] text-midnight-charcoal mb-4"
          >
            About the Surgeon
          </h2>
          <p style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif", fontSize: "14px", lineHeight: 1.5 }} className="text-stone-accent max-w-md">
            Distinguished consultant at Paras Health, Udaipur, pioneering advanced robotic joint replacements and complex spine surgeries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-parchment-gray">
              <Image src="/dr_singhal_about.png" alt="Dr. Ashish Singhal" fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-charcoal/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6" style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif" }}>
                <span className="inline-block text-[10px] text-canvas-white bg-sunset-orange px-3 py-1 uppercase tracking-wider mb-3">
                  MS Ortho · Robotic Surgery
                </span>
                <p style={{ fontFamily: "var(--font-exposure30), 'Playfair Display', serif", fontWeight: 400, letterSpacing: "-0.01px" }} className="text-[22px] text-canvas-white leading-tight">
                  Dr. Ashish Singhal
                </p>
              </div>
            </div>
          </motion.div>

          {/* Credentials grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-ash-mist"
          >
            {credentials.map((block, i) => (
              <div key={i} className="bg-canvas-white p-8 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="w-4 h-0.5 bg-sunset-orange flex-shrink-0" />
                  <p style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif" }} className="text-[10px] text-stone-accent tracking-[0.07em] uppercase">
                    {block.category}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  {block.items.map((item, j) => (
                    <p key={j} style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif", fontSize: "14px", lineHeight: 1.5 }} className="text-midnight-charcoal">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
