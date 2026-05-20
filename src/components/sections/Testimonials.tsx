"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, GraduationCap, ShieldCheck, HeartPulse } from "lucide-react";

export default function Testimonials() {
  const categories = [
    {
      icon: <GraduationCap className="text-sunset-orange" size={20} strokeWidth={1.5} />,
      title: "Medical Qualifications",
      items: [
        "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
        "Master of Surgery (Orthopedics)",
        "Fellowship in Spine Surgery"
      ]
    },
    {
      icon: <ShieldCheck className="text-sunset-orange" size={20} strokeWidth={1.5} />,
      title: "Specialization and Expertise",
      items: [
        "Orthopedic Spine Surgery",
        "Robotic Surgery",
        "Joint Replacement (Knee, Shoulder, and Back)"
      ]
    },
    {
      icon: <HeartPulse className="text-sunset-orange" size={20} strokeWidth={1.5} />,
      title: "Certifications",
      items: [
        "Certified in Robotic Surgery Techniques",
        "Advanced Training in Joint Replacement Procedures",
        "Fellowship in Spine Surgery from a Recognized Institution"
      ]
    },
    {
      icon: <Award className="text-sunset-orange" size={20} strokeWidth={1.5} />,
      title: "Awards & Recognitions",
      items: [
        "Recipient of the Excellence in Orthopedic Surgery Award",
        "Recognized for Outstanding Contributions to Spine Surgery",
        "Honored for Patient-Centric Approach and Compassionate Care"
      ]
    }
  ];

  return (
    <section id="about" className="bg-cream-canvas py-24 md:py-32 border-t border-ash-mist">
      <div className="max-w-[1200px] mx-auto px-0">

        {/* Section Header */}
        <div className="mb-20">
          <p style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif" }} className="text-[10px] text-stone-accent tracking-[0.08em] uppercase mb-4">
            03 — Clinical Profile
          </p>
          <h2
            style={{ fontFamily: "var(--font-exposure30), 'Playfair Display', serif", fontWeight: 400, letterSpacing: "-0.01px", lineHeight: 1.05 }}
            className="text-[clamp(36px,5.5vw,64px)] text-midnight-charcoal"
          >
            About Dr. Ashish Singhal
          </h2>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left Column: Portrait */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] bg-parchment-gray overflow-hidden border border-ash-mist"
            >
              <Image
                src="/dr_singhal_about.png"
                alt="Dr. Ashish Singhal"
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>
          </div>

          {/* Right Column: Profile & Detailed Credentials Directory */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            
            {/* Bio description */}
            <div style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif" }} className="flex flex-col gap-6 text-[15px] text-stone-accent leading-relaxed">
              <p>
                Dr. Ashish Singhal, a distinguished Orthopedic Consultant at Paras Health, Udaipur, embodies excellence in orthopedic care, particularly in spine surgery. With a career spanning over a decade, Dr. Singhal has been a pioneer in advancing orthopedic treatments, specializing in robotic surgery and joint replacements for the knee, shoulder, and back. His expertise extends to intricate procedures, ensuring precision and optimal patient outcomes.
              </p>
            </div>

            {/* Directory Grid */}
            <div className="flex flex-col border-t border-ash-mist">
              {categories.map((cat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="grid grid-cols-1 md:grid-cols-12 py-8 border-b border-ash-mist gap-4 md:gap-8 items-start"
                >
                  <div className="md:col-span-4 flex items-center gap-3">
                    {cat.icon}
                    <h3
                      style={{ fontFamily: "var(--font-exposure30), 'Playfair Display', serif", fontWeight: 400 }}
                      className="text-[18px] text-midnight-charcoal leading-tight"
                    >
                      {cat.title}
                    </h3>
                  </div>
                  <div className="md:col-span-8 flex flex-col gap-2.5">
                    {cat.items.map((item, i) => (
                      <p
                        key={i}
                        style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif", fontSize: "13.5px", lineHeight: 1.5 }}
                        className="text-stone-accent flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 bg-sunset-orange flex-shrink-0 mt-2" />
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
