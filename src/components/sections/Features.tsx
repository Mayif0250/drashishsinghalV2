"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

export default function Services() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const services = [
    { title: "Robotic Knee Replacement", desc: "State-of-the-art knee replacement using the best robotic technology. Delivering personalized treatment plans that minimize recovery time.", points: ["Total Knee Replacement", "Partial Knee Replacement", "Revision Knee Replacement"] },
    { title: "Robotic Hip Replacement", desc: "Hip surgery performed using cutting-edge robotic technology. This innovative method enhances surgical accuracy and promotes quicker healing.", points: ["Total Hip Replacement", "Partial Hip Replacement", "Revision Hip Replacement"] },
    { title: "Knee Pain Treatment", desc: "Comprehensive knee pain treatment helping patients get back on their feet and back to their active lives without unnecessary delays.", points: ["Knee Arthritis", "Cartilage & Meniscal Tears", "ACL Injuries", "Patellar Dislocations"] },
    { title: "Foot & Ankle Treatment", desc: "From non-operative care for minor conditions to the latest surgical procedures for more complex disorders and traumatic injuries.", points: ["Sports Injuries", "Flat Feet & Plantar Fasciitis", "Foot & Ankle Fractures", "Achilles Tendon"] },
    { title: "PRP Tendinitis Therapy", desc: "PRP injections are highly effective at accelerating the healing of various forms of tendinitis and common sports injuries.", points: ["Achilles Tendinitis", "Patellar Tendinitis", "Rotator Cuff Injuries", "Tennis/Golfer's Elbow"] },
    { title: "Upper Extremity Care", desc: "Expert treatment for complex hand, wrist, elbow, and shoulder conditions to restore full upper body mobility.", points: ["Rotator Cuff Tears", "Shoulder Dislocations", "Arthritis of the Hand", "Tendon Ruptures"] },
    { title: "Arthroscopic Surgery", desc: "Minimally invasive keyhole procedures for precise diagnosis and rapid treatment of joint injuries with faster recovery.", points: ["Meniscus Repair", "ACL Reconstruction", "Hip Impingement", "Wrist Injuries"] },
    { title: "Advanced Spine Therapy", desc: "Exploring nonsurgical treatments first, followed by state-of-the-art minimally invasive spinal surgery techniques if needed.", points: ["Physical Therapy", "Spinal Injections", "PRP Therapy", "Spinal Reconstruction"] },
  ];

  return (
    <section id="services" className="bg-cream-canvas py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-0">

        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2
            style={{ fontFamily: "var(--font-exposure30), 'Playfair Display', serif", fontWeight: 400, letterSpacing: "-0.01px", lineHeight: 1.1 }}
            className="text-[clamp(32px,5vw,56px)] text-midnight-charcoal max-w-xl"
          >
            Advanced Orthopedic Treatments
          </h2>
          <p style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif", fontSize: "14px", lineHeight: 1.5 }} className="text-stone-accent max-w-sm md:text-right">
            World-class robotic technology and minimally invasive techniques — personalized for you.
          </p>
        </div>

        {/* Accordion */}
        <div className="border-t border-ash-mist">
          {services.map((srv, idx) => {
            const isOpen = activeIdx === idx;
            return (
              <div key={idx} className="border-b border-ash-mist">
                <button
                  onClick={() => setActiveIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between py-6 text-left group focus:outline-none"
                >
                  <span
                    style={{ fontFamily: "var(--font-exposure30), 'Playfair Display', serif", fontWeight: 400, letterSpacing: "-0.01px", lineHeight: 1.2 }}
                    className={`text-[clamp(18px,2.5vw,28px)] transition-colors ${isOpen ? "text-midnight-charcoal" : "text-midnight-charcoal group-hover:text-sunset-orange"}`}
                  >
                    {srv.title}
                  </span>
                  <span className={`transition-colors flex-shrink-0 ml-6 ${isOpen ? "text-sunset-orange" : "text-stone-accent group-hover:text-sunset-orange"}`}>
                    {isOpen ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        <p style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif", fontSize: "14px", lineHeight: 1.5 }} className="text-stone-accent">
                          {srv.desc}
                        </p>
                        <div className="flex flex-col gap-3">
                          {srv.points.map((pt, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <span className="w-1 h-1 bg-sunset-orange flex-shrink-0" />
                              <span style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif", fontSize: "13px" }} className="text-midnight-charcoal">{pt}</span>
                            </div>
                          ))}
                          <Link href="#booking" className="btn-parloa-primary mt-4 self-start text-[13px] px-5 py-3">
                            Book Consultation
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
