"use client";

import Image from "next/image";
import { Award, BadgeCheck, CheckCircle2, GraduationCap, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const qualifications = [
    "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
    "Master of Surgery — Orthopedics (MS Ortho)",
    "Fellowship in Spine Surgery",
  ];

  const specializations = [
    "Orthopedic Spine Surgery",
    "Robotic Surgery",
    "Joint Replacement — Knee, Shoulder & Back",
  ];

  const certifications = [
    "Certified in Robotic Surgery Techniques",
    "Advanced Training in Joint Replacement",
    "Recognized Fellowship in Spine Surgery",
  ];

  const awards = [
    "Excellence in Orthopedic Surgery Award",
    "Outstanding Contributions to Spine Surgery",
    "Patient-Centric Compassionate Care Award",
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#F4F9FF] overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Portrait Column - Left aligned, floating */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-[#0A5BA6]/20 border-8 border-white z-10">
              <Image
                src="/dr_singhal_about.png"
                alt="Dr. Ashish Singhal"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3A]/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Dr. Ashish Singhal</h2>
                <p className="text-[#2B8DF8] font-semibold text-sm uppercase tracking-widest flex items-center gap-2">
                  <BadgeCheck size={16} />
                  Orthopedic Consultant
                </p>
              </div>
            </div>

            {/* Floating Element Behind */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#0A5BA6] rounded-2xl -z-10 opacity-10 rotate-12" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#2B8DF8] rounded-full -z-10 opacity-10" />
          </motion.div>

          {/* Credentials Column - Overlapping glass panel */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12 lg:-ml-12 z-20"
          >
            <div className="bg-white/90 backdrop-blur-xl p-8 md:p-12 rounded-[32px] shadow-2xl shadow-gray-200/50 border border-white">
              
              {/* Header */}
              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0A1A3A] mb-4">
                  A Decade of Excellence in Orthopedics & Robotic Surgery
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  As a distinguished consultant at Paras Health, Udaipur, Dr. Singhal embodies excellence in orthopedic care. He pioneers advanced treatments, specializing in high-precision robotic joint replacements and complex spine surgeries to ensure optimal mobility restoration.
                </p>
              </div>

              {/* Grid of Credentials */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                
                {/* Section 1 */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0A5BA6] flex items-center justify-center">
                      <GraduationCap size={20} />
                    </div>
                    <span className="font-bold text-[#0A1A3A] text-lg">Qualifications</span>
                  </div>
                  <ul className="space-y-3">
                    {qualifications.map((q, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-[#2B8DF8] mt-1 flex-shrink-0" />
                        <span className="text-gray-600 font-medium">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 2 */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0A5BA6] flex items-center justify-center">
                      <Award size={20} />
                    </div>
                    <span className="font-bold text-[#0A1A3A] text-lg">Specializations</span>
                  </div>
                  <ul className="space-y-3">
                    {specializations.map((s, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-[#2B8DF8] mt-1 flex-shrink-0" />
                        <span className="text-gray-600 font-medium">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 3 */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0A5BA6] flex items-center justify-center">
                      <BadgeCheck size={20} />
                    </div>
                    <span className="font-bold text-[#0A1A3A] text-lg">Certifications</span>
                  </div>
                  <ul className="space-y-3">
                    {certifications.map((c, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-[#2B8DF8] mt-1 flex-shrink-0" />
                        <span className="text-gray-600 font-medium">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 4 */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0A5BA6] flex items-center justify-center">
                      <Star size={20} />
                    </div>
                    <span className="font-bold text-[#0A1A3A] text-lg">Awards & Honours</span>
                  </div>
                  <ul className="space-y-3">
                    {awards.map((a, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-[#2B8DF8] mt-1 flex-shrink-0" />
                        <span className="text-gray-600 font-medium">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
