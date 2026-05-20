"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Activity, Bone, Footprints, Syringe, Hand, Eye, Microchip, ActivitySquare, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);

  const services = [
    {
      title: "Robotic Knee Replacement",
      short: "Knee Replacement",
      desc: "State-of-the-art knee replacement procedures using the best robotic technology available. Delivering personalized treatment plans that minimize recovery time.",
      points: ["Total Knee Replacement", "Partial Knee Replacement", "Revision Knee Replacement"],
      icon: Microchip,
      image: "/robotic_joint_surgery.png"
    },
    {
      title: "Robotic Hip Replacement",
      short: "Hip Replacement",
      desc: "Hip surgery performed using cutting-edge robotic technology. This innovative method enhances surgical accuracy and promotes quicker healing.",
      points: ["Total Hip Replacement", "Partial Hip Replacement", "Revision Hip Replacement"],
      icon: Bone,
      image: "/robotic_joint_surgery.png"
    },
    {
      title: "Knee Pain Treatment",
      short: "Knee Pain",
      desc: "Comprehensive knee pain treatment helping patients get back on their feet and back to their active lives without unnecessary delays.",
      points: ["Knee Arthritis", "Cartilage & Meniscal Tears", "ACL Injuries", "Patellar Dislocations"],
      icon: Activity,
      image: "/robotic_joint_surgery.png"
    },
    {
      title: "Foot & Ankle Treatment",
      short: "Foot & Ankle",
      desc: "From non-operative care for minor conditions to the latest surgical procedures for more complex disorders and traumatic injuries.",
      points: ["Sports Injuries", "Flat Feet & Plantar Fasciitis", "Foot & Ankle Fractures", "Achilles Tendon"],
      icon: Footprints,
      image: "/robotic_joint_surgery.png"
    },
    {
      title: "PRP Tendinitis Therapy",
      short: "PRP Treatment",
      desc: "PRP injections are highly effective at accelerating the healing of various forms of tendinitis and common sports injuries.",
      points: ["Achilles Tendinitis", "Patellar Tendinitis", "Rotator Cuff Injuries", "Tennis/Golfer’s Elbow"],
      icon: Syringe,
      image: "/robotic_joint_surgery.png"
    },
    {
      title: "Upper Extremity Care",
      short: "Hand & Shoulder",
      desc: "Expert treatment for complex hand, wrist, elbow, and shoulder conditions to restore full upper body mobility.",
      points: ["Rotator Cuff Tears", "Shoulder Dislocations", "Arthritis of the Hand", "Tendon Ruptures"],
      icon: Hand,
      image: "/robotic_joint_surgery.png"
    },
    {
      title: "Arthroscopic Surgery",
      short: "Arthroscopy",
      desc: "Minimally invasive keyhole procedures for precise diagnosis and rapid treatment of joint injuries with faster recovery.",
      points: ["Meniscus Repair", "ACL Reconstruction", "Hip Impingement", "Wrist Injuries"],
      icon: Eye,
      image: "/robotic_joint_surgery.png"
    },
    {
      title: "Advanced Spine Therapy",
      short: "Spine Therapy",
      desc: "Exploring nonsurgical orthopedic treatments first, followed by state-of-the-art minimally invasive spinal surgery techniques if needed.",
      points: ["Physical Therapy", "Spinal Injections", "PRP Therapy", "Spinal Reconstruction"],
      icon: ActivitySquare,
      image: "/robotic_joint_surgery.png"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <h2 className="text-[40px] md:text-[60px] font-bold text-[#0A1A3A] leading-tight tracking-tight mb-6">
            Advanced Orthopedic <br/><span className="text-[#0A5BA6]">Treatments</span>
          </h2>
          <p className="text-lg text-gray-500">
            Delivering personalized treatment plans, world-class robotic technology, and minimally invasive techniques to help you regain your mobility.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Left Side: List of Services */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {services.map((srv, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`text-left px-4 py-4 md:px-6 md:py-5 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                    isActive ? "bg-[#0A5BA6] shadow-xl shadow-[#0A5BA6]/20" : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
                      isActive ? "bg-white/20 text-white" : "bg-gray-100 text-[#0A1A3A] group-hover:bg-gray-200"
                    }`}>
                      <srv.icon size={18} />
                    </div>
                    <span className={`font-bold text-sm md:text-base lg:text-lg transition-colors ${
                      isActive ? "text-white" : "text-[#0A1A3A]"
                    }`}>
                      {srv.short}
                    </span>
                  </div>
                  {isActive && <ArrowRight className="text-white hidden sm:block" size={20} />}
                </button>
              )
            })}
          </div>

          {/* Right Side: Active Service Display */}
          <div className="lg:w-2/3">
             <div className="lg:sticky top-24 rounded-[30px] md:rounded-[40px] bg-[#F4F9FF] p-6 md:p-12 border border-blue-100 overflow-hidden relative min-h-[500px] md:min-h-[600px] flex flex-col justify-between shadow-2xl shadow-blue-900/5">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIdx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 flex flex-col h-full"
                  >
                    <div>
                      <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#0A5BA6] mb-8">
                        {(() => { const Icon = services[activeIdx].icon; return <Icon size={32} />; })()}
                      </div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1A3A] mb-6 leading-tight max-w-[90%]">
                        {services[activeIdx].title}
                      </h3>
                      <p className="text-base md:text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
                        {services[activeIdx].desc}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-12 max-w-2xl">
                        {services[activeIdx].points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-3">
                            <CheckCircle className="text-[#2B8DF8] flex-shrink-0 mt-0.5" size={20} />
                            <span className="font-semibold text-[#0A1A3A] text-sm md:text-base leading-snug">{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto pt-8">
                       <Link href="#booking" className="inline-flex bg-[#0A1A3A] hover:bg-[#0A5BA6] text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg">
                         Consult Dr. Singhal
                       </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Background Image Abstract */}
                <div className="absolute right-0 bottom-0 w-[60%] md:w-[50%] h-[80%] md:h-[90%] opacity-[0.15] pointer-events-none mix-blend-multiply transition-all duration-700">
                   <Image 
                     src={services[activeIdx].image} 
                     alt="Service Background" 
                     fill 
                     className="object-cover object-left-top rounded-tl-[100px]" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-r from-[#F4F9FF] to-transparent" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#F4F9FF] to-transparent" />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
