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
      <section id="booking" className="relative py-24 bg-[#0b0600] border-t border-border-grey overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-caption text-body animate-pulse">Loading Scheduling Intake...</span>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="relative py-24 bg-[#0b0600] border-t border-border-grey overflow-hidden">
      {/* Background visuals */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0600] via-[#140b00] to-[#0b0600]" />
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-recovery-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-[#140b00] border border-border-grey p-8 md:p-12 rounded-[6px] max-w-4xl mx-auto flex flex-col md:flex-row items-stretch justify-between gap-12 shadow-md">
          
          {/* Text Content Column */}
          <div className="max-w-md flex flex-col justify-between">
            <div>
              <span className="text-caption font-bold uppercase tracking-wider text-recovery-teal">
                Consultation Request
              </span>
              <h2 className="text-section font-bold text-trust-navy mt-4 tracking-tight">
                Schedule Your Orthopedic Consultation
              </h2>
              <p className="text-body mt-4 leading-relaxed">
                Fill out the clinic scheduling intake. Our executive clinic coordinators will review your joint indicators and verify an appointment slot with Dr. Ashish Singhal.
              </p>

              {/* Hormozi Style High-Converting Value Stack Checklist */}
              <div className="mt-6 space-y-3 bg-[#0b0600]/40 p-4 border border-border-grey rounded-lg">
                <span className="text-[10px] font-bold text-[#ffb442] uppercase tracking-wider block">
                  Included in Your Diagnostic Session:
                </span>
                <ul className="space-y-2.5 text-xs font-semibold text-trust-navy/90">
                  <li className="flex items-center gap-2 text-white/90">
                    <span className="text-[#ffb442] font-bold">✓</span> Complete Biomechanical Joint Diagnostic Audit
                  </li>
                  <li className="flex items-center gap-2 text-white/90">
                    <span className="text-[#ffb442] font-bold">✓</span> Digital Pre-Op Suitability Check (Robotic Alignment)
                  </li>
                  <li className="flex items-center gap-2 text-white/90">
                    <span className="text-[#ffb442] font-bold">✓</span> Range-of-Motion Analysis & Custom Recovery Blueprint
                  </li>
                  <li className="flex items-center gap-2 text-white/90">
                    <span className="text-[#ffb442] font-bold">✓</span> Priority Allocation of Dedicated Post-Op Care Coordinator
                  </li>
                </ul>
              </div>
            </div>

            {/* Direct Helpline numbers block */}
            <div className="mt-8 pt-8 border-t border-border-grey space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-medical-blue/10 flex items-center justify-center text-medical-blue">
                  <PhoneCall size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-recovery-teal uppercase tracking-widest block">
                    Direct Call Booking
                  </span>
                  <a href="tel:+919414393320" className="text-sm font-bold text-trust-navy hover:text-medical-blue transition-colors">
                    +91 94143 93320
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-recovery-teal/10 flex items-center justify-center text-recovery-teal">
                  <Clock size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-recovery-teal uppercase tracking-widest block">
                    Support Hours
                  </span>
                  <span className="text-xs font-semibold text-trust-navy">
                    09:00 AM - 08:00 PM (Monday - Saturday)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Action Column */}
          <div className="w-full max-w-sm bg-[#0b0600]/40 p-6 md:p-8 rounded-[6px] border border-border-grey">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-trust-navy">
                    Patient Full Name
                  </label>
                  <div className="relative flex items-center">
                    <User size={16} className="absolute left-4 text-caption" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-transparent border border-border-grey rounded-full text-sm text-trust-navy outline-none focus:border-medical-blue transition-colors"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-trust-navy">
                    Contact Phone Number
                  </label>
                  <div className="relative flex items-center">
                    <Phone size={16} className="absolute left-4 text-caption" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-transparent border border-border-grey rounded-full text-sm text-trust-navy outline-none focus:border-medical-blue transition-colors"
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-trust-navy">
                    Preferred Date
                  </label>
                  <div className="relative flex items-center">
                    <Calendar size={16} className="absolute left-4 text-caption" />
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-transparent border border-border-grey rounded-full text-sm text-trust-navy outline-none focus:border-medical-blue transition-colors"
                    />
                  </div>
                </div>

                {/* Location Selection */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-trust-navy">
                    Select Udaipur Center
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0b0600] border border-border-grey rounded-full text-sm text-trust-navy outline-none focus:border-medical-blue transition-colors"
                  >
                    <option value="mahe">Mahe Clinic (Bedla Road)</option>
                    <option value="paras">Paras Hospital (NH-8)</option>
                  </select>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 mt-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Calendar size={14} />
                  <span>Request Booking Appointment</span>
                </button>

              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-[#0b0600] border border-border-grey rounded-[6px] text-center shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-success-green/10 border border-success-green flex items-center justify-center text-success-green mx-auto mb-4">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-subheading font-bold text-trust-navy">
                  Booking Requested
                </h3>
                <p className="text-caption text-body mt-3 leading-relaxed">
                  Thank you, <span className="text-trust-navy font-bold">{name}</span>. Your orthopedic consultation request at <span className="text-trust-navy font-bold">{location === "mahe" ? "Mahe Clinic" : "Paras Hospital"}</span> is noted. A scheduling representative will call you on <span className="text-trust-navy font-bold">{phone}</span> shortly to lock in your exact timing.
                </p>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
