"use client";

import Image from "next/image";
import { Award, BadgeCheck, CheckCircle2, GraduationCap, Star } from "lucide-react";

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
    "Advanced Training in Joint Replacement Procedures",
    "Fellowship in Spine Surgery from a Recognized Institution",
  ];

  const awards = [
    "Excellence in Orthopedic Surgery Award",
    "Outstanding Contributions to Spine Surgery",
    "Honored for Patient-Centric & Compassionate Care",
  ];

  return (
    <section id="about" className="relative py-24 bg-surface-white border-y border-line-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Portrait Column */}
          <div className="lg:col-span-5 relative w-full aspect-[4/5] rounded-[20px] overflow-hidden bg-canvas-warmth border border-line-gray shadow-md max-w-sm mx-auto group">
            <Image
              src="/dr_singhal_about.png"
              alt="Dr. Ashish Singhal — Orthopedic Consultant, Paras Health Udaipur"
              fill
              className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canvas-warmth/40 via-transparent to-transparent pointer-events-none" />

            {/* Award badge overlay */}
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-surface-white/95 border border-line-gray backdrop-blur-sm rounded-[12px] shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-[12px] bg-deep-graphite/5 flex items-center justify-center text-deep-graphite flex-shrink-0">
                <Award size={18} />
              </div>
              <div>
                <span className="text-[10px] font-bold text-muted-text uppercase tracking-widest block">
                  Awards & Recognition
                </span>
                <span className="text-xs font-bold text-headline-dark block mt-0.5">
                  Excellence in Orthopedic Surgery
                </span>
              </div>
            </div>
          </div>

          {/* Credentials Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">

            {/* Header */}
            <div>
              <span className="text-[10px] font-bold text-muted-text uppercase tracking-widest flex items-center gap-1.5 mb-3">
                <BadgeCheck size={13} className="text-deep-graphite" />
                Orthopedic Consultant · Paras Health, Udaipur
              </span>
              <h2 className="text-section font-bold text-headline-dark tracking-tight">
                Dr. Ashish Singhal
              </h2>
              <p className="text-sm text-body-gray mt-4 leading-relaxed max-w-lg">
                A distinguished Orthopedic Consultant at Paras Health, Udaipur, Dr. Singhal embodies excellence in orthopedic care — particularly in spine surgery. With a career spanning over a decade, he has been a pioneer in advancing orthopedic treatments, specializing in robotic surgery and joint replacements for the knee, shoulder, and back.
              </p>
            </div>

            {/* 2×2 Credential Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">

              {/* Qualifications */}
              <div>
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-line-gray">
                  <GraduationCap size={13} className="text-deep-graphite" />
                  <span className="text-[10px] font-bold text-headline-dark uppercase tracking-widest">
                    Qualifications
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {qualifications.map((q, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-deep-graphite flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-body-gray leading-snug">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specializations */}
              <div>
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-line-gray">
                  <BadgeCheck size={13} className="text-deep-graphite" />
                  <span className="text-[10px] font-bold text-headline-dark uppercase tracking-widest">
                    Specializations
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {specializations.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-deep-graphite flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-body-gray leading-snug">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-line-gray">
                  <Award size={13} className="text-deep-graphite" />
                  <span className="text-[10px] font-bold text-headline-dark uppercase tracking-widest">
                    Certifications
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {certifications.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-deep-graphite flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-body-gray leading-snug">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Awards */}
              <div>
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-line-gray">
                  <Star size={13} className="text-deep-graphite" />
                  <span className="text-[10px] font-bold text-headline-dark uppercase tracking-widest">
                    Awards & Honours
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {awards.map((a, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-deep-graphite flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-body-gray leading-snug">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
