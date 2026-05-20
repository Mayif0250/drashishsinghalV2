"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

export default function Services() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const services = [
    {
      title: "Knee replacement with worlds best robotic technology",
      desc: "State-of-the-art knee replacement procedures using the best robotic technology available. Delivering personalized treatment plans that not only minimize recovery time but also enhance overall outcomes, allowing you to reclaim an active lifestyle swiftly. Procedures performed at our Centre:",
      points: [
        "Total Knee replacement",
        "Partial Knee replacement",
        "Revision Knee replacement"
      ],
      actions: [
        { label: "Learn More", href: "#booking", primary: false },
        { label: "Book Now", href: "#booking", primary: true }
      ]
    },
    {
      title: "Hip replacement with worlds best robotic technology",
      desc: "Hip surgery performed using cutting-edge robotic technology renowned worldwide. This innovative method not only enhances surgical accuracy but also promotes quicker healing, allowing you to regain your mobility and comfort sooner. Procedures performed at our center:",
      points: [
        "Total hip replacement",
        "Partial hip replacement",
        "Revision hip replacement"
      ],
      actions: [
        { label: "Learn More", href: "#booking", primary: false },
        { label: "Book Now", href: "#booking", primary: true }
      ]
    },
    {
      title: "Knee Pain Treatment",
      desc: "Our knee pain treatment goal is to help patients get back on their feet and back to their active lives. Knee conditions we treat:",
      points: [
        "Knee arthritis",
        "Cartilage injuries",
        "Meniscal tears",
        "ACL injuries",
        "Patellar dislocations and disorders",
        "Fractures around the knee",
        "Quadriceps tendon autografts",
        "Patellar dislocation & disorder"
      ],
      actions: [
        { label: "Book Now", href: "#booking", primary: true }
      ]
    },
    {
      title: "Foot & Ankle treatment",
      desc: "Non-operative care and daycare procedures for minor conditions to the latest surgical procedures for more complex disorders and injuries.",
      points: [
        "Sports injuries",
        "Flat feet",
        "Plantar fasciitis",
        "Foot neuromas",
        "Foot and ankle fractures",
        "Foot and ankle arthritis",
        "Hammertoes",
        "Achilles tendon injuries",
        "Pediatric deformities"
      ],
      actions: []
    },
    {
      title: "PRP Treatment for Tendinitis",
      desc: "While PRP injections are effective at accelerating the healing of form of tendinitis, there are several common sports injuries where they can be most effective:",
      points: [
        "Achilles Tendinitis",
        "Patellar Tendinitis",
        "Rotator Cuff Injuries",
        "Tennis Elbow",
        "Golfer’s Elbow",
        "Jumper’s Knee"
      ],
      actions: [
        { label: "Learn More", href: "#booking", primary: false }
      ]
    },
    {
      title: "Hand, Wrist, Elbow & Shoulder Treatment",
      desc: "Hand, Wrist, Elbow and Shoulder Conditions we treat Include:",
      points: [
        "Rotator cuff tear",
        "Labral tears",
        "Shoulder dislocations and shoulder instability",
        "Lateral epicondylitis (tennis elbow)",
        "Medial epicondylitis (golfer’s elbow)",
        "Arthritis of the hand and upper extremities",
        "Tendon ruptures"
      ],
      actions: []
    },
    {
      title: "Arthroscopic Surgery",
      desc: "Below are some common conditions and procedures where arthroscopy may be needed:",
      points: [
        "Torn Meniscus Knee Injury",
        "ACL Injury",
        "Elbow Osteoarthritis",
        "Femoroacetabular (Hip) Impingement",
        "Torn Rotator Cuff",
        "Common Wrist Injuries"
      ],
      actions: [
        { label: "Learn More", href: "#booking", primary: false },
        { label: "Book Now", href: "#booking", primary: true }
      ]
    },
    {
      title: "Latest spine therapy",
      desc: "We explore nonsurgical orthopedic treatment options such as physical therapy, spinal injections, platelet-rich plasma (PRP) therapy, and complex spinal reconstruction whenever possible. In those cases where back or spine surgery is necessary, we offer the latest, state-of-the-art procedures, including minimally invasive spinal surgery techniques, allowing us to provide better outcomes and, in some cases, faster recovery times for our patients.",
      points: [],
      actions: [
        { label: "Book Now", href: "#booking", primary: true }
      ]
    }
  ];

  return (
    <section id="services" className="bg-cream-canvas py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-0">

        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif" }} className="text-[10px] text-stone-accent tracking-[0.08em] uppercase mb-4">
              02 — Areas of Practice
            </p>
            <h2
              style={{ fontFamily: "var(--font-exposure30), 'Playfair Display', serif", fontWeight: 400, letterSpacing: "-0.01px", lineHeight: 1.1 }}
              className="text-[clamp(32px,5vw,56px)] text-midnight-charcoal max-w-xl"
            >
              Services & Treatments
            </h2>
          </div>
          <p style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif", fontSize: "14px", lineHeight: 1.5 }} className="text-stone-accent max-w-sm md:text-right">
            World-class robotic technology and advanced orthopedic solutions tailored to your recovery.
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
                        <div className="flex flex-col gap-5">
                          {srv.points && srv.points.length > 0 && (
                            <div className="flex flex-col gap-2.5">
                              {srv.points.map((pt, i) => (
                                <div key={i} className="flex items-center gap-3">
                                  <span className="w-1.5 h-1.5 bg-sunset-orange flex-shrink-0" />
                                  <span style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif", fontSize: "13.5px" }} className="text-midnight-charcoal">{pt}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {srv.actions && srv.actions.length > 0 && (
                            <div className="flex items-center gap-3 mt-2">
                              {srv.actions.map((act, i) => (
                                <Link
                                  key={i}
                                  href={act.href}
                                  className={act.primary ? "btn-parloa-primary text-[13px] px-5 py-3" : "btn-parloa-light border border-ash-mist text-[13px] px-5 py-3"}
                                >
                                  {act.label}
                                </Link>
                              ))}
                            </div>
                          )}
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
