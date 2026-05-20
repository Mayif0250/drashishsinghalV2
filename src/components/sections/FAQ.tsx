"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    { q: "What is robotic-assisted knee replacement, and what are its advantages?", a: "Robotic-assisted knee replacement is a highly advanced surgical technique where Dr. Singhal uses precise computerized mapping tools to create a custom 3D model of your joint. During surgery, the robotic arm provides real-time guidance to spare healthy bone, fit implants with sub-millimeter precision, lower post-operative pain, and accelerate your overall walking rehabilitation." },
    { q: "How long does it take to recover and walk after robotic knee surgery?", a: "Thanks to modern muscle-sparing techniques and robotic accuracy, most patients can begin standing and taking supported steps within 24 hours of their replacement. Standard household mobility and routine daily activities are frequently achieved within 2 to 4 weeks." },
    { q: "What are the primary advantages of minimally invasive Arthroscopic surgery?", a: "Arthroscopy is a keyhole surgical technique where a small, high-definition camera is inserted into the joint through tiny incisions. It eliminates the need for large muscle-cutting exposures, meaning minimal scarring, reduced infection risk, lower pain levels, and extremely fast tissue healing." },
    { q: "When should I consult an orthopedic specialist for joint pain?", a: "You should seek an orthopedic audit if you experience joint pain or swelling that persists for more than 2–3 weeks, joint stiffness that interferes with normal mobility, pain that wakes you up at night, or if you sustain a sports injury with swelling and inability to support weight." },
    { q: "Where is Dr. Ashish Singhal available for consultations in Udaipur?", a: "Dr. Singhal conducts outpatient checkups at Mahe Clinic on Bedla Road in the evenings (05:00 PM – 08:00 PM, Mon–Sat). Inpatient surgical cases and robotic operations are coordinated at Paras Hospital NH-8 in the mornings (09:00 AM – 04:00 PM, Mon–Sat)." },
  ];

  return (
    <section id="faq" className="bg-cream-canvas py-20 md:py-28 border-t border-ash-mist">
      <div className="max-w-[1200px] mx-auto px-0">

        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2
            style={{ fontFamily: "var(--font-exposure30), 'Playfair Display', serif", fontWeight: 400, letterSpacing: "-0.01px", lineHeight: 1.1 }}
            className="text-[clamp(32px,5vw,56px)] text-midnight-charcoal max-w-xl"
          >
            Frequently Asked
          </h2>
          <p style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif", fontSize: "14px", lineHeight: 1.5 }} className="text-stone-accent max-w-xs md:text-right">
            Common questions about robotic replacements, recovery, and scheduling.
          </p>
        </div>

        <div className="border-t border-ash-mist" style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="border-b border-ash-mist">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-start justify-between gap-8 py-6 text-left group focus:outline-none"
                >
                  <span
                    style={{ fontFamily: "var(--font-exposure30), 'Playfair Display', serif", fontWeight: 400, letterSpacing: "-0.01px", lineHeight: 1.3 }}
                    className={`text-[clamp(16px,2vw,22px)] transition-colors ${isOpen ? "text-midnight-charcoal" : "text-midnight-charcoal group-hover:text-sunset-orange"}`}
                  >
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 mt-1 transition-colors ${isOpen ? "text-sunset-orange" : "text-stone-accent group-hover:text-sunset-orange"}`}>
                    {isOpen ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[14px] text-stone-accent leading-relaxed pb-7 max-w-3xl">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
