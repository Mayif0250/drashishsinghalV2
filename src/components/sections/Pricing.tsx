"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

export default function Pricing() {
  const tiers = [
    {
      name: "Oasis Basic",
      price: "$1,800",
      period: "Quarterly Audit",
      desc: "Essential metabolic and circadian audits for professionals looking to baseline their vital longevity markers.",
      features: [
        "1x Epigenetic Salivary Assay",
        "Circadian Phase Optimization Audit",
        "Standard Cellular Energy Plan",
        "Digital Dashboard Compliance Access",
      ],
      isAccent: false,
    },
    {
      name: "Cellular Elite",
      price: "$3,600",
      period: "Quarterly Audit",
      desc: "Our gold-standard continuous clinical program featuring custom hormone optimization and infrared desert thermal access.",
      features: [
        "2x Epigenetic Salivary Assays",
        "Continuous HRV & Biomining Audits",
        "Direct MD Longevity Consultation",
        "All-access Thermal Oasis Therapy",
        "Anti-inflammatory Meal Formulation",
      ],
      isAccent: true,
    },
    {
      name: "Longevity Full Audit",
      price: "$6,500",
      period: "Annual Full Spectrum",
      desc: "Complete cellular, organ, and blood genome sequencing with full-scale physical reconstitution in our private sanctuary.",
      features: [
        "4x Epigenetic Salivary Assays",
        "Full Genome Sequencing (Next-Gen)",
        "24/7 Concierge Clinical Guidance",
        "Private Oasis Bungalow Reserve",
        "Advanced Peptide Cellular Therapy",
      ],
      isAccent: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 bg-abyss border-t border-dark-charcoal overflow-hidden">
      {/* Soft background ambient light */}
      <div className="absolute right-10 bottom-10 w-[450px] h-[450px] bg-amber-glow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-xl mb-16 text-center mx-auto">
          <span className="text-caption uppercase tracking-wider text-amber-glow font-medium">
            Epigenetic Memberships
          </span>
          <h2 className="text-heading-lg text-dawn-linen mt-4 tracking-[-0.008em]">
            MEMBERSHIP TIERS BUILT FOR METABOLIC LEGACY
          </h2>
          <p className="text-body text-pale-ash mt-4 leading-relaxed">
            Invest in clinical cellular protection. Select a membership program tailored to your long-term longevity metrics.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`rounded-md p-8 flex flex-col justify-between relative ${
                tier.isAccent
                  ? "bg-amber-glow text-deep-onyx shadow-[0_0_40px_rgba(255,180,66,0.15)] border-t-4 border-dawn-linen"
                  : "bg-deep-onyx text-dawn-linen border border-dark-charcoal hover:border-fossil-grey transition-all"
              }`}
              style={{ borderRadius: "6px" }}
            >
              {/* Highlight badge for Accent Tier */}
              {tier.isAccent && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-deep-onyx text-amber-glow text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-fossil-grey flex items-center gap-1.5 shadow-md">
                  <Star size={10} fill="#ffb442" stroke="none" /> Recommended Program
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-6">
                  <span className={`text-caption uppercase tracking-wider ${tier.isAccent ? "text-deep-onyx/70" : "text-pale-ash"}`}>
                    {tier.period}
                  </span>
                  <h3
                    className={`font-medium tracking-[-0.003em] mt-2 ${
                      tier.isAccent ? "text-[29px] text-deep-onyx" : "text-heading"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mt-4">
                    <span className="text-heading-lg font-bold font-mono tracking-tight">
                      {tier.price}
                    </span>
                    <span className={`text-caption uppercase font-medium ${tier.isAccent ? "text-deep-onyx/70" : "text-pale-ash"}`}>
                      / Cycle
                    </span>
                  </div>
                </div>

                <p className={`text-body leading-relaxed mb-8 ${tier.isAccent ? "text-deep-onyx/95" : "text-pale-ash"}`}>
                  {tier.desc}
                </p>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className={`mt-0.5 rounded-full p-0.5 flex items-center justify-center ${
                        tier.isAccent ? "bg-deep-onyx text-amber-glow" : "bg-dark-charcoal text-dawn-linen border border-fossil-grey/40"
                      }`}>
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span className="text-body font-medium leading-none">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                className={`w-full py-3.5 text-xs font-bold uppercase tracking-wider transition-all hover:scale-[1.02] ${
                  tier.isAccent
                    ? "bg-deep-onyx text-amber-glow hover:bg-black"
                    : "bg-amber-glow text-deep-onyx hover:bg-dawn-linen"
                }`}
                style={{ borderRadius: "1296px" }}
              >
                Secure Membership
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
