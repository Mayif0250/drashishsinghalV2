"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Calendar, CheckCircle2, User, PhoneCall, Clock } from "lucide-react";

export default function CTA() {
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("mahe");
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      setSubmitted(true);
    }
  };

  if (!mounted) {
    return (
      <section id="booking" className="relative py-24 bg-canvas-warmth border-t border-line-gray overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-text animate-pulse">Loading Scheduling Intake...</span>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="relative py-24 bg-canvas-warmth border-t border-line-gray overflow-hidden">
      {/* Background visuals */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-deep-graphite/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-surface-white border border-line-gray p-8 md:p-12 rounded-[25px] max-w-4xl mx-auto flex flex-col md:flex-row items-stretch justify-between gap-12 shadow-sm">
          
          {/* Text Content Column */}
          <div className="max-w-md flex flex-col justify-between">
            <div>
              <span className="text-caption block text-headline-dark/70 font-semibold mb-2">
                Consultation Request
              </span>
              <h2 className="text-section font-bold text-headline-dark mt-4 tracking-tight">
                Schedule Your Orthopedic Consultation
              </h2>
              <p className="text-body mt-4 leading-relaxed text-body-gray">
                Fill out the clinic scheduling intake. Our executive clinic coordinators will review your joint indicators and verify an appointment slot with Dr. Ashish Singhal.
              </p>

              {/* Hormozi Style High-Converting Value Stack Checklist */}
              <div className="mt-6 space-y-3 bg-canvas-warmth p-5 border border-line-gray rounded-[12px]">
                <span className="text-[10px] font-bold text-headline-dark uppercase tracking-wider block">
                  Included in Your Diagnostic Session:
                </span>
                <ul className="space-y-2.5 text-xs font-semibold text-body-gray">
                  <li className="flex items-center gap-2 text-headline-dark/90">
                    <span className="text-deep-graphite font-bold">✓</span> Complete Biomechanical Joint Diagnostic Audit
                  </li>
                  <li className="flex items-center gap-2 text-headline-dark/90">
                    <span className="text-deep-graphite font-bold">✓</span> Digital Pre-Op Suitability Check (Robotic Alignment)
                  </li>
                  <li className="flex items-center gap-2 text-headline-dark/90">
                    <span className="text-deep-graphite font-bold">✓</span> Range-of-Motion Analysis & Custom Recovery Blueprint
                  </li>
                  <li className="flex items-center gap-2 text-headline-dark/90">
                    <span className="text-deep-graphite font-bold">✓</span> Priority Allocation of Dedicated Post-Op Care Coordinator
                  </li>
                </ul>
              </div>
            </div>

            {/* Direct Helpline numbers block */}
            <div className="mt-8 pt-8 border-t border-line-gray space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[12px] bg-deep-graphite/5 flex items-center justify-center text-deep-graphite shadow-sm">
                  <PhoneCall size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-muted-text uppercase tracking-widest block">
                    Direct Call Booking
                  </span>
                  <a href="tel:+919414393320" className="text-sm font-bold text-headline-dark hover:text-deep-graphite transition-colors">
                    +91 94143 93320
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[12px] bg-deep-graphite/5 flex items-center justify-center text-deep-graphite shadow-sm">
                  <Clock size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-muted-text uppercase tracking-widest block">
                    Support Hours
                  </span>
                  <span className="text-xs font-semibold text-headline-dark">
                    09:00 AM - 08:00 PM (Monday - Saturday)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Action Column */}
          <div className="w-full max-w-sm bg-canvas-warmth/40 p-6 md:p-8 rounded-[16px] border border-line-gray">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-headline-dark">
                    Patient Full Name
                  </label>
                  <div className="relative flex items-center">
                    <User size={16} className="absolute left-4 text-deep-graphite" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-surface-white border border-line-gray rounded-[12px] text-sm text-headline-dark outline-none focus:border-deep-graphite transition-colors shadow-sm"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-headline-dark">
                    Contact Phone Number
                  </label>
                  <div className="relative flex items-center">
                    <Phone size={16} className="absolute left-4 text-deep-graphite" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-surface-white border border-line-gray rounded-[12px] text-sm text-headline-dark outline-none focus:border-deep-graphite transition-colors shadow-sm"
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-headline-dark">
                    Preferred Date
                  </label>
                  <div className="relative flex items-center">
                    <Calendar size={16} className="absolute left-4 text-deep-graphite" />
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-surface-white border border-line-gray rounded-[12px] text-sm text-headline-dark outline-none focus:border-deep-graphite transition-colors shadow-sm"
                    />
                  </div>
                </div>

                {/* Location Selection */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-headline-dark">
                    Select Udaipur Center
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 bg-surface-white border border-line-gray rounded-[12px] text-sm text-headline-dark outline-none focus:border-deep-graphite transition-colors shadow-sm"
                  >
                    <option value="mahe">Mahe Clinic (Bedla Road)</option>
                    <option value="paras">Paras Hospital (NH-8)</option>
                  </select>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 mt-2 rounded-[12px] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
                >
                  <Calendar size={14} />
                  <span>Request Booking Appointment</span>
                </button>

              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-surface-white border border-line-gray rounded-[16px] text-center shadow-sm"
              >
                <div className="w-12 h-12 rounded-[12px] bg-deep-graphite/5 border border-deep-graphite flex items-center justify-center text-deep-graphite mx-auto mb-4">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-subheading font-bold text-headline-dark">
                  Booking Requested
                </h3>
                <p className="text-xs text-body-gray mt-3 leading-relaxed">
                  Thank you, <span className="text-headline-dark font-bold">{name}</span>. Your orthopedic consultation request at <span className="text-headline-dark font-bold">{location === "mahe" ? "Mahe Clinic" : "Paras Hospital"}</span> is noted. A scheduling representative will call you on <span className="text-headline-dark font-bold">{phone}</span> shortly to lock in your exact timing.
                </p>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
