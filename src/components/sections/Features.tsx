"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowUpRight, ChevronRight, Activity, Bone, ActivitySquare, Footprints, Syringe, Hand, Eye, Microchip } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Knee replacement with world's best robotic technology",
      desc: "State-of-the-art knee replacement procedures using the best robotic technology available. Delivering personalized treatment plans that not only minimize recovery time but also enhance overall outcomes, allowing you to reclaim an active lifestyle swiftly.",
      points: [
        "Total Knee replacement",
        "Partial Knee replacement",
        "Revision Knee replacement"
      ],
      icon: Microchip,
      actions: ["Learn More", "Book Now"]
    },
    {
      title: "Hip replacement with world's best robotic technology",
      desc: "Hip surgery performed using cutting-edge robotic technology renowned worldwide. This innovative method not only enhances surgical accuracy but also promotes quicker healing, allowing you to regain your mobility and comfort sooner.",
      points: [
        "Total hip replacement",
        "Partial hip replacement",
        "Revision hip replacement"
      ],
      icon: Bone,
      actions: ["Learn More", "Book Now"]
    },
    {
      title: "Knee Pain Treatment",
      desc: "Our knee pain treatment goal is to help patients get back on their feet and back to their active lives.",
      points: [
        "Knee arthritis",
        "Cartilage injuries & Meniscal tears",
        "ACL injuries",
        "Patellar dislocations and disorders",
        "Fractures around the knee",
        "Quadriceps tendon autografts"
      ],
      icon: Activity,
      actions: ["Learn More", "Book Now"]
    },
    {
      title: "Foot & Ankle treatment",
      desc: "Non-operative care and daycare procedures for minor conditions to the latest surgical procedures for more complex disorders and injuries.",
      points: [
        "Sports injuries",
        "Flat feet & Plantar fasciitis",
        "Foot neuromas",
        "Foot and ankle fractures & arthritis",
        "Hammertoes",
        "Achilles tendon injuries",
        "Pediatric deformities"
      ],
      icon: Footprints,
      actions: ["Learn More", "Book Now"]
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
      icon: Syringe,
      actions: ["Learn More", "Book Now"]
    },
    {
      title: "Hand, Wrist, Elbow & Shoulder Treatment",
      desc: "Hand, Wrist, Elbow and Shoulder Conditions we treat Include:",
      points: [
        "Rotator cuff & Labral tears",
        "Shoulder dislocations and shoulder instability",
        "Lateral epicondylitis (tennis elbow)",
        "Medial epicondylitis (golfer’s elbow)",
        "Arthritis of the hand and upper extremities",
        "Tendon ruptures"
      ],
      icon: Hand,
      actions: ["Learn More", "Book Now"]
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
      icon: Eye,
      actions: ["Learn More", "Book Now"]
    },
    {
      title: "Latest spine therapy",
      desc: "We explore nonsurgical orthopedic treatment options such as physical therapy, spinal injections, platelet-rich plasma (PRP) therapy, and complex spinal reconstruction whenever possible.\n\nIn those cases where back or spine surgery is necessary, we offer the latest, state-of-the-art procedures, including minimally invasive spinal surgery techniques, allowing us to provide better outcomes and, in some cases, faster recovery times for our patients.",
      points: [],
      icon: ActivitySquare,
      actions: ["Learn More", "Book Now"]
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-canvas-warmth border-b border-line-gray overflow-hidden">
      <div className="max-w-[94%] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-caption block text-headline-dark/70 font-semibold mb-2">
            Comprehensive Orthopedic Care
          </span>
          <h2 className="text-section font-bold tracking-tight text-headline-dark mt-3">
            Our Orthopedic Services & Treatments
          </h2>
          <p className="text-body mt-4 leading-relaxed text-body-gray">
            Delivering personalized treatment plans, world-class robotic technology, and minimally invasive techniques to help you regain your mobility and comfort sooner.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx % 2) * 0.1 }}
              className="card-clinical flex flex-col justify-between h-full"
            >
              <div>
                {/* Image Box Placeholder */}
                <div className="relative w-full h-48 rounded-[16px] overflow-hidden mb-6 bg-line-gray/10 border border-line-gray/30 group-hover:border-deep-graphite/20 transition-colors">
                  <Image
                    src="/robotic_joint_surgery.png" 
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-[12px] bg-deep-graphite/5 flex items-center justify-center text-deep-graphite shadow-sm mb-6">
                  <service.icon size={22} strokeWidth={2.5} />
                </div>

                {/* Heading */}
                <h3 className="text-subheading font-bold text-headline-dark mt-2">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-body text-sm mt-3 leading-relaxed text-body-gray whitespace-pre-line">
                  {service.desc}
                </p>

                {/* Point Items */}
                {service.points.length > 0 && (
                  <ul className="mt-6 space-y-3">
                    {service.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle size={14} className="text-deep-graphite mt-1 flex-shrink-0" />
                        <span className="text-sm font-medium text-body-gray">{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Action trigger */}
              {service.actions.length > 0 && (
                <div className="mt-8 pt-6 border-t border-line-gray flex items-center gap-4">
                  {service.actions.map((action, aIdx) => (
                    <Link
                      key={aIdx}
                      href={action === "Book Now" ? "#booking" : "#contact"}
                      className={`text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1 ${
                        action === "Book Now"
                          ? "text-deep-graphite hover:text-headline-dark"
                          : "text-muted-text hover:text-deep-graphite"
                      }`}
                    >
                      {action}
                      {action === "Book Now" ? <ArrowUpRight size={14} /> : <ChevronRight size={14} />}
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
