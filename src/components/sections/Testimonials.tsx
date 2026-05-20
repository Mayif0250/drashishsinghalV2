"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, ShieldAlert, BadgeCheck, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const specializations = [
    "Robotic Knee Replacement Specialists",
    "Robotic Hip Replacement Alignments",
    "Minimally Invasive Arthroscopic Surgery",
    "Sports Ligament & ACL Reconstruction",
    "Complex Trauma & Primary Revision Surgery",
    "Arthritis Pain Management Programs",
  ];

  return (
    <section id="about" className="relative py-24 bg-surface-white border-y border-line-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Image & Trust Seals Column (5 cols) */}
          <div className="lg:col-span-5 relative w-full aspect-[4/5] rounded-[20px] overflow-hidden bg-canvas-warmth border border-line-gray shadow-md max-w-sm mx-auto group">
            <Image
              src="/dr_singhal_portrait.png"
              alt="Dr. Ashish Singhal - Orthopedic Surgeon Udaipur"
              fill
              className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
            />
            {/* Soft clinical bottom overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-canvas-warmth/40 via-transparent to-transparent pointer-events-none" />
            
            {/* Accreditation Seal */}
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-surface-white/95 border border-line-gray backdrop-blur-sm rounded-[12px] shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-[12px] bg-deep-graphite/5 flex items-center justify-center text-deep-graphite flex-shrink-0">
                <Award size={18} />
              </div>
              <div>
                <span className="text-[10px] font-bold text-muted-text uppercase tracking-widest block font-sans">
                  Certified Award
                </span>
                <span className="text-xs font-bold text-headline-dark block mt-0.5">
                  Best Orthopedic Surgeon in Udaipur
                </span>
              </div>
            </div>
          </div>

          {/* Credentials Content Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div>
              <span className="text-caption block text-headline-dark/70 font-semibold mb-2">
                <BadgeCheck size={14} className="inline mr-1" /> Medical Director Profile
              </span>
              <h2 className="text-section font-bold text-headline-dark mt-3 tracking-tight">
                Meet Dr. Ashish Singhal, MS (Ortho)
              </h2>
              <span className="text-sm font-semibold text-deep-graphite mt-2 block uppercase tracking-wider">
                20+ Years of Trusted Orthopedic & Robotic Innovation
              </span>
            </div>

            <div className="space-y-6">
              <p className="text-body leading-relaxed text-body-gray">
                Dr. Ashish Singhal is recognized as a pioneering orthopedic force in Udaipur and Rajasthan, offering advanced, technology-driven joint replacements and sports medicine. With a professional career spanning over two decades, he integrates clinical orthopedic expertise with advanced surgical robotic technologies to deliver precise anatomical alignments, significantly reduced post-operative pain, and rapid patient recovery.
              </p>
              
              <p className="text-body leading-relaxed text-body-gray">
                He is highly dedicated to a patient-centric treatment approach. By accurately identifying root causes of mobility issues—including arthritis, chronic knee friction, sports trauma, and ligament strains—he structures personalized surgical or non-surgical treatments that restore native joint mechanics and long-term health.
              </p>

              {/* Specialization List */}
              <div className="pt-6 border-t border-line-gray">
                <span className="text-xs font-bold text-headline-dark uppercase tracking-wider block mb-4">
                  Surgical & Clinical Focus Areas
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {specializations.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-deep-graphite flex-shrink-0" />
                      <span className="text-xs font-bold text-body-gray uppercase tracking-wider">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
