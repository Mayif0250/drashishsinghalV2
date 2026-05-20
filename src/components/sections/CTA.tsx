"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function CTA() {
  const [mounted, setMounted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName.trim() && email.trim() && message.trim()) setSubmitted(true);
  };

  if (!mounted) return null;

  const labelCls = "text-[10px] text-stone-accent tracking-[0.07em] uppercase";

  return (
    <section id="booking" className="bg-midnight-charcoal py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-0">

        <div className="mb-16">
          <h2
            style={{ fontFamily: "var(--font-exposure30), 'Playfair Display', serif", fontWeight: 400, letterSpacing: "-0.01px", lineHeight: 1.1 }}
            className="text-[clamp(32px,5vw,56px)] text-canvas-white mb-4"
          >
            Book a Consultation
          </h2>
          <p style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif", fontSize: "14px", lineHeight: 1.5 }} className="text-stone-accent max-w-md">
            Our coordinators will review your indicators and confirm a slot with Dr. Ashish Singhal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Form */}
          <div style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif" }}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-3">
                    <label className={labelCls}>First Name *</label>
                    <input type="text" required placeholder="Ramesh" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input-parloa" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className={labelCls}>Last Name</label>
                    <input type="text" placeholder="Kumar" value={lastName} onChange={(e) => setLastName(e.target.value)} className="input-parloa" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label className={labelCls}>Email *</label>
                  <input type="email" required placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="input-parloa" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className={labelCls}>Phone</label>
                  <input type="tel" placeholder="+91 98765 43210" value={phone} onChange={(e) => setPhone(e.target.value)} className="input-parloa" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className={labelCls}>Message *</label>
                  <textarea required placeholder="Describe your symptoms or concern…" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="input-parloa resize-none" />
                </div>
                <button type="submit" className="btn-parloa-light self-start px-8">Send Request</button>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-6 py-8">
                <div className="w-10 h-10 border border-sunset-orange flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-sunset-orange" />
                </div>
                <h3 style={{ fontFamily: "var(--font-exposure30), 'Playfair Display', serif", fontWeight: 400 }} className="text-[32px] text-canvas-white leading-tight">
                  Booking Requested
                </h3>
                <p style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif", fontSize: "14px", lineHeight: 1.5 }} className="text-stone-accent max-w-sm">
                  Thank you, <span className="text-canvas-white">{firstName}</span>. Our team will be in touch at <span className="text-canvas-white">{email}</span>.
                </p>
              </motion.div>
            )}
          </div>

          {/* Map & Contact */}
          <div className="flex flex-col gap-8">
            <div className="flex-grow min-h-[280px] relative overflow-hidden" style={{ filter: "grayscale(100%) contrast(1.1) brightness(0.6)" }}>
              <iframe
                width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0}
                src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Paras%20Hospital%20%7C%20Best%20Hospital%20in%20Udaipur,%20Plot%20No%201,%20JK%20Lane,%20Shobhagpura,%20Udaipur,%20Rajasthan%20313001&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>

            <div className="border-t border-deep-plum pt-6 flex flex-col gap-5" style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif" }}>
              <p className="text-[13px] text-stone-accent leading-relaxed">
                Paras Hospital, Plot No 1, JK Lane, Shobhagpura, Udaipur, Rajasthan 313001
              </p>
              <div className="flex items-start gap-10">
                <div>
                  <p className="text-[10px] text-stone-accent tracking-[0.07em] uppercase mb-2">Phone</p>
                  <a href="tel:+919414393320" className="text-[13px] text-canvas-white hover:text-sunset-orange transition-colors">+91 94143 93320</a>
                </div>
                <div>
                  <p className="text-[10px] text-stone-accent tracking-[0.07em] uppercase mb-2">Hours</p>
                  <p className="text-[13px] text-canvas-white">Mon–Sat, 9 AM – 8 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
