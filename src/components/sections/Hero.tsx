"use client";

import { motion } from "framer-motion";
import { Star, Play, Award, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-midnight-charcoal overflow-hidden flex flex-col">

      {/* Prismatic veil background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none z-0"
        style={{
          background: "linear-gradient(30deg, rgb(153,38,38), rgb(153,170,38), rgb(0,0,0), rgb(34,153,74), rgb(38,26,153), rgb(0,0,0), rgb(34,153,153))",
        }}
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-0 flex-grow flex flex-col min-h-screen pt-[10vh]">

        {/* TOP */}
        <div className="flex justify-between items-start pt-4">

          {/* Left stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 mt-4 md:mt-8"
            style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif" }}
          >
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-midnight-charcoal bg-stone-accent overflow-hidden relative">
                    <Image src="/robotic_joint_surgery.png" alt="Patient" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[18px] font-medium text-canvas-white leading-none">5000+</p>
                <p className="text-[12px] text-stone-accent mt-1">Patients Treated</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Star size={14} className="text-sunset-orange fill-sunset-orange" />
              <span className="text-[13px] text-stone-accent"><span className="text-canvas-white">98%</span> Satisfaction</span>
            </div>
          </motion.div>

          {/* Right headline word */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block pr-4"
          >
            <h1
              style={{ fontFamily: "var(--font-exposure30), 'Playfair Display', serif", fontWeight: 400, letterSpacing: "-0.01px", lineHeight: 1 }}
              className="text-canvas-white text-[80px] lg:text-[120px] xl:text-[140px]"
            >
              BECAUSE
            </h1>
          </motion.div>
        </div>

        {/* MIDDLE — crossing words */}
        <div className="relative flex-grow flex items-center justify-center my-12 pointer-events-none">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute left-0 top-[10%] z-20"
          >
            <h1
              style={{ fontFamily: "var(--font-exposure30), 'Playfair Display', serif", fontWeight: 400, letterSpacing: "-0.01px", lineHeight: 1 }}
              className="text-canvas-white text-[50px] md:text-[90px] lg:text-[120px] xl:text-[140px]"
            >
              EVERY LIFE
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute right-0 top-[30%] w-[260px] z-40 hidden md:flex gap-3 pointer-events-auto"
            style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif" }}
          >
            <div className="w-0.5 bg-sunset-orange flex-shrink-0 self-stretch" />
            <p className="text-[13px] text-stone-accent leading-relaxed">
              Expert doctors and state-of-the-art facilities ensure you and your loved ones receive the best orthopedic treatment, every time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute right-0 bottom-[15%] z-20"
          >
            <h1
              style={{ fontFamily: "var(--font-exposure30), 'Playfair Display', serif", fontWeight: 400, letterSpacing: "-0.01px", lineHeight: 1 }}
              className="text-canvas-white text-[50px] md:text-[90px] lg:text-[120px] xl:text-[140px]"
            >
              MATTERS
            </h1>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <div className="relative z-40 flex justify-between items-end pb-10 mt-auto pointer-events-none">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col gap-10 pointer-events-auto"
          >
            {/* Video thumbnail */}
            <div className="relative w-48 h-32 lg:w-56 lg:h-36 overflow-hidden group cursor-pointer hidden md:block border border-stone-accent/40">
              <Image src="/robotic_joint_surgery.png" alt="Video" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-midnight-charcoal/40 flex items-center justify-end pr-6">
                <div className="w-10 h-10 border border-canvas-white flex items-center justify-center">
                  <Play size={14} className="ml-0.5 text-canvas-white fill-canvas-white" />
                </div>
              </div>
            </div>

            {/* Years */}
            <div className="flex items-center gap-4 pb-4" style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif" }}>
              <div className="w-9 h-9 border border-stone-accent/40 flex items-center justify-center">
                <Award size={16} className="text-stone-accent" />
              </div>
              <div>
                <p className="text-[22px] font-medium text-canvas-white leading-none">20+</p>
                <p className="text-[11px] text-stone-accent uppercase tracking-wider mt-1">Years of Medical Excellence</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="hidden md:block w-[240px] h-[150px] lg:w-[300px] lg:h-[170px] overflow-hidden relative pointer-events-auto border border-stone-accent/30 mb-4"
          >
            <Image src="/robotic_joint_surgery.png" alt="Patient Care" fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
        </div>

      </div>

      {/* Doctor image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[95%] md:w-[600px] lg:w-[700px] h-[85vh] z-30 pointer-events-none"
      >
        <Image src="/dr_singhal_original.png" alt="Dr. Ashish Singhal" fill className="object-contain object-bottom" priority />
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-8 md:bottom-12 z-50 pointer-events-auto"
      >
        <Link href="#booking" className="btn-parloa-light flex items-center gap-2.5">
          Book An Appointment <ArrowRight size={15} />
        </Link>
      </motion.div>

    </section>
  );
}
