"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="cta" className="relative py-28 bg-abyss border-t border-dark-charcoal overflow-hidden">
      {/* Immersive background decoration */}
      <div className="absolute inset-0 grid-bg-oasis opacity-20 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-glow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="bg-deep-onyx border border-dark-charcoal p-12 rounded-md max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 hover:border-fossil-grey transition-all duration-300">
          
          {/* Text Content */}
          <div className="max-w-md">
            <span className="text-caption uppercase tracking-wider text-amber-glow font-medium">
              Secure biological legacy
            </span>
            <h2 className="text-heading-lg text-dawn-linen mt-4 tracking-[-0.008em]">
              JOIN THE PRIVATE REGISTRY
            </h2>
            <p className="text-body text-pale-ash mt-4 leading-relaxed">
              We release a highly restricted count of 50 new epigenetic client slots per quarter. Secure your position for our upcoming biological audit cycle.
            </p>
          </div>

          {/* Form Action Area */}
          <div className="w-full max-w-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-caption uppercase tracking-wider text-pale-ash ml-2">
                    Enter Email Address
                  </label>
                  <div className="relative flex items-center">
                    <Mail size={16} className="absolute left-4 text-pale-ash" />
                    <input
                      type="email"
                      required
                      placeholder="email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-ghost w-full pl-12 pr-6 py-3 font-medium bg-transparent text-dawn-linen border-dawn-linen/25 focus:border-amber-glow transition-all"
                      style={{ borderRadius: "1296px" }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-dark-charcoal/30 p-1.5 rounded-full border border-dark-charcoal">
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider py-3"
                  >
                    <span>Request Invitation</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-dark-charcoal/50 border border-fossil-grey rounded-md text-center"
              >
                <div className="w-12 h-12 rounded-full bg-amber-glow/10 border border-amber-glow flex items-center justify-center text-amber-glow mx-auto mb-4">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-subheading text-dawn-linen font-medium">
                  Invitation Requested
                </h3>
                <p className="text-caption text-pale-ash mt-2 leading-relaxed">
                  Your molecular baseline details are noted. An executive diagnostics advisor will reach out to <span className="text-dawn-linen font-medium">{email}</span> within 48 clinical hours.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
