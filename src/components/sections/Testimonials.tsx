"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      quote: "The biological audit was a turning point. My resting sleep architecture had deteriorated, but through circadian phase alignment and targeted mitochondrial stimulation, I reversed my biological clock by 4.8 years within 6 months. I feel the mental clarity of my early thirties.",
      author: "Marcus Vance",
      role: "Venture Partner, Age 52",
      metric: "Bio-Age: -4.8 Years",
    },
    {
      quote: "Unlike wellness clinics that sell quick-fix vitamin drips, Abetterlou offers structural metabolic recalibration. My biological inflammation markers dropped from a moderate 2.1 to an optimal 0.4 mg/L. The desert thermals and audit protocols have given me a baseline of deep cellular vitality.",
      author: "Dr. Clara Sterling",
      role: "Immunologist, Age 46",
      metric: "hs-CRP: 0.4 mg/L",
    },
  ];

  return (
    <section className="relative py-24 bg-abyss border-t border-dark-charcoal overflow-hidden">
      {/* Dynamic ambient background glow */}
      <div className="absolute left-1/4 bottom-1/4 w-[400px] h-[400px] bg-amber-glow/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Portrait Image Card (Left 5 columns) */}
          <div className="lg:col-span-5 relative h-[450px] w-full rounded-md overflow-hidden bg-deep-onyx border border-fossil-grey group">
            <Image
              src="/longevity_portrait.png"
              alt="Longevity Patient Marcus Vance"
              fill
              className="object-cover object-center desaturate brightness-[85%] contrast-[110%] group-hover:scale-105 transition-transform duration-700"
            />
            {/* Design Token Amber Glow Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0600] via-[#0b0600]/40 to-transparent" />
            
            {/* Embedded telemetry watermark */}
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-deep-onyx/90 border border-dark-charcoal backdrop-blur-sm rounded-md">
              <span className="text-[10px] font-mono uppercase tracking-widest text-pale-ash block">
                Epigenetic Verification
              </span>
              <span className="text-subheading font-medium text-amber-glow block mt-1">
                Patient #0421-MV
              </span>
              <span className="text-caption text-dawn-linen block mt-0.5">
                Biological Delta: -4.8 Years Certified
              </span>
            </div>
          </div>

          {/* Testimonial Quotes Content (Right 7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-12">
            <div>
              <span className="text-caption uppercase tracking-wider text-amber-glow font-medium">
                epigenetic proof
              </span>
              <h2 className="text-heading-lg text-dawn-linen mt-4 tracking-[-0.008em]">
                REFLECTIONS FROM THE OASIS
              </h2>
            </div>

            <div className="space-y-8">
              {reviews.map((rev, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-deep-onyx border border-dark-charcoal p-6 rounded-md relative hover:border-fossil-grey transition-all"
                >
                  <Quote className="absolute top-6 right-6 text-pale-ash/20" size={32} />
                  
                  <p className="text-body text-dawn-linen leading-relaxed pr-8">
                    &ldquo;{rev.quote}&rdquo;
                  </p>

                  <div className="mt-6 pt-4 border-t border-dark-charcoal flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-body font-medium text-dawn-linen block">
                        {rev.author}
                      </span>
                      <span className="text-caption text-pale-ash block">
                        {rev.role}
                      </span>
                    </div>
                    <span className="text-caption text-amber-glow font-mono uppercase tracking-wider px-3 py-1 bg-dark-charcoal border border-fossil-grey rounded-full self-start">
                      {rev.metric}
                    </span>
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
