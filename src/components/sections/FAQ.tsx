"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [mounted, setMounted] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id="faq" className="relative py-24 bg-[#0b0600] border-t border-border-grey overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-caption text-body animate-pulse">Loading FAQ System...</span>
        </div>
      </section>
    );
  }

  const faqs = [
    {
      q: "What is robotic-assisted knee replacement, and what are its advantages?",
      a: "Robotic-assisted knee replacement is a highly advanced surgical technique where Dr. Ashish Singhal uses precise computerized mapping tools to create a custom 3D model of your joint. During surgery, the robotic arm provides real-time guidance to spare healthy bone, fit implants with sub-millimeter precision, lower post-operative pain, and accelerate your overall walking rehabilitation.",
    },
    {
      q: "How long does it take to recover and walk after robotic knee surgery?",
      a: "Thanks to modern muscle-sparing techniques and robotic accuracy, most patients can begin standing and taking supported steps under guidance within 24 hours of their replacement. Standard household mobility and routine daily activities are frequently achieved within 2 to 4 weeks of the procedure.",
    },
    {
      q: "What are the primary advantages of minimally invasive Arthroscopic (Keyhole) surgery?",
      a: "Arthroscopy is a keyhole surgical technique where a small, high-definition camera is inserted into the joint through tiny incisions. It eliminates the need for large muscle-cutting exposures, meaning minimal post-surgical scarring, significantly reduced risk of infection, lower pain levels, and extremely fast tissue healing for ligament and muscle injuries.",
    },
    {
      q: "When should I consult an orthopedic specialist for joint pain?",
      a: "You should seek an orthopedic audit if you experience joint pain or swelling that persists for more than 2-3 weeks, joint stiffness that interferes with normal household mobility, pain that wakes you up at night, or if you sustain a sports injury with swelling and inability to support weight.",
    },
    {
      q: "Where is Dr. Ashish Singhal available for consultations in Udaipur?",
      a: "Dr. Ashish Singhal conducts outpatient diagnostic checkups at Mahe Clinic on Bedla Road in the evenings (05:00 PM - 08:00 PM, Mon - Sat). Inpatient surgical cases and robotic operations are coordinated at Paras Hospital NH-8 in the mornings (09:00 AM - 04:00 PM, Mon - Sat).",
    },
  ];

  return (
    <section id="faq" className="relative py-24 bg-[#0b0600] border-t border-border-grey overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Header (Left Column) */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <span className="text-caption font-bold uppercase tracking-wider text-recovery-teal flex items-center gap-1.5">
              <HelpCircle size={14} /> Reassuring Guidance
            </span>
            <h2 className="text-section font-bold text-trust-navy mt-4 tracking-tight leading-tight">
              Frequently Asked Orthopedic Questions
            </h2>
            <p className="text-body mt-4 leading-relaxed">
              Find answers to advanced robotic joint replacements, recovery periods, keyhole access benefits, and scheduling.
            </p>
          </div>

          {/* Interactive Accordion List (Right Column) */}
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#140b00] border border-border-grey rounded-[6px] overflow-hidden transition-all hover:border-recovery-teal hover:shadow-sm"
                >
                  {/* Accordion Trigger */}
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-sm font-bold text-trust-navy pr-6">
                      {faq.q}
                    </span>
                    <div className={`p-1.5 rounded-lg border text-trust-navy transition-all duration-300 ${
                      isOpen
                        ? "bg-medical-blue/10 border-medical-blue/30 text-medical-blue rotate-180"
                        : "bg-soft-grey border-border-grey"
                    }`}>
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm text-body leading-relaxed border-t border-border-grey/30">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
