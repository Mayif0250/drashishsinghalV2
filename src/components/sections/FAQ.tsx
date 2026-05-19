"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is an Epigenetic Salivary Assay, and how is it used?",
      a: "An epigenetic salivary assay measures changes in DNA methylation patterns—chemical tags that direct how cells read genetic instructions. Unlike genome sequencing, which remains static, your epigenome is dynamic. By mapping these patterns, we measure your true physiological biological age and trace biological adjustments in response to our sleep, heat, and nutrition protocols.",
    },
    {
      q: "How does Circadian Phase Alignment differ from standard sleep advice?",
      a: "Standard advice focuses on sleep duration alone. Circadian Phase Alignment maps your individual genetic chronotype against local solar positions. We design exact timing profiles for light exposure, thermal cycling, and peptide administration. This optimizes melatonin synthesis and aligns core metabolic pathways with your biological clock, lowering biological inflammation.",
    },
    {
      q: "Can thermal desert therapy really trigger longevity markers?",
      a: "Yes. Clinical studies confirm that structured, controlled infrared thermal fluctuations induce the production of Heat Shock Proteins (HSPs) like HSP70. These proteins act as cellular chaperones, repairing damaged cells, promoting correct cellular autophagy, and boosting systemic microcirculation to clear age-related cellular debris.",
    },
    {
      q: "Are the longevity audits supervised by medical doctors?",
      a: "Absolutely. Every biological audit at Abetterlou is reviewed and certified by senior MD clinicians specializing in metabolic oncology, cardiovascular medicine, and epigenetic wellness. Memberships include comprehensive diagnostic writeups and direct consultations to ensure safety and clinical precision.",
    },
    {
      q: "How long does it take to see a shift in biological age markers?",
      a: "Most patients who adhere strictly to our circadian, mitochondrial, and metabolic nutrition protocols show measurable reductions in biological age index (ranging from 1.5 to 3 years) inside their secondary 90-day epigenetic assay cycle.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 bg-abyss border-t border-dark-charcoal overflow-hidden">
      {/* Decorative subtle backdrop light */}
      <div className="absolute left-1/4 top-1/3 w-[350px] h-[350px] bg-amber-glow/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Header Area (Left 4 columns) */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <span className="text-caption uppercase tracking-wider text-amber-glow font-medium flex items-center gap-1.5">
              <HelpCircle size={12} /> Clinical Clarity
            </span>
            <h2 className="text-heading text-dawn-linen mt-4 tracking-[-0.006em] leading-tight">
              FREQUENTLY ENCOUNTERED LONGEVITY INQUIRIES
            </h2>
            <p className="text-body text-pale-ash mt-4 leading-relaxed">
              Have deeper scientific questions? Explore our biological insights or get in touch with our private diagnostics team.
            </p>
          </div>

          {/* Interactive Accordion List (Right 8 columns) */}
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-deep-onyx border border-dark-charcoal rounded-md overflow-hidden transition-colors hover:border-fossil-grey"
                  style={{ borderRadius: "6px" }}
                >
                  {/* Collapsible trigger */}
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-body font-medium text-dawn-linen pr-6">
                      {faq.q}
                    </span>
                    <div className={`p-1.5 rounded-full bg-dark-charcoal border border-fossil-grey/60 text-dawn-linen transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-amber-glow/10 border-amber-glow/30 text-amber-glow" : ""
                    }`}>
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>

                  {/* Animated Content Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 pb-6 pt-1 text-body text-pale-ash leading-relaxed border-t border-dark-charcoal/40">
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
