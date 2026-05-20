"use client";

import { motion } from "framer-motion";
import { Star, Play, Award, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col font-sans">
      {/* Top Blue Section */}
      <div className="absolute top-0 left-0 w-full h-[45%] md:h-[48%] bg-[#0A5BA6] z-0 overflow-hidden">
        {/* Subtle decorative wave */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,40 Q25,20 50,40 T100,40 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.2" />
            <path d="M0,60 Q25,40 50,60 T100,60 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.2" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 h-full flex-grow flex flex-col min-h-screen pt-[10vh]">
        
        {/* TOP LAYER (BLUE BG CONTENT) */}
        <div className="flex justify-between items-start pt-4">
          {/* Left Side Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 text-white mt-4 md:mt-8"
          >
            {/* Patients Treated */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-[#0A5BA6] bg-gray-200 overflow-hidden relative">
                   <Image src="/robotic_joint_surgery.png" alt="Patient" fill className="object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#0A5BA6] bg-gray-300 overflow-hidden relative">
                   <Image src="/robotic_joint_surgery.png" alt="Patient" fill className="object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#0A5BA6] bg-gray-400 overflow-hidden relative flex items-center justify-center">
                   <span className="text-[10px] font-bold text-[#0A5BA6]">+</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none">5000+</span>
                <span className="text-xs text-white/90 mt-1">Patients Treated</span>
              </div>
            </div>
            
            {/* Patient Satisfaction */}
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400 fill-yellow-400" size={18} />
              <p className="text-sm"><span className="font-bold text-lg">98%</span> Patient Satisfaction</p>
            </div>
          </motion.div>

          {/* BECAUSE Text */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block pr-4 lg:pr-8"
          >
            <h1 className="text-white text-[80px] lg:text-[140px] xl:text-[160px] font-bold leading-none tracking-tight">
              BECAUSE
            </h1>
          </motion.div>
        </div>

        {/* MIDDLE LAYER (CROSSING BLUE/WHITE) */}
        <div className="relative flex-grow flex items-center justify-center my-12 pointer-events-none">
          
          {/* EVERY LIFE Text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute left-0 top-[20%] md:top-[10%] z-20"
          >
            <h1 className="text-[#0A1A3A] text-[50px] md:text-[100px] lg:text-[130px] xl:text-[150px] font-bold leading-none tracking-tight">
              EVERY LIFE
            </h1>
          </motion.div>

          {/* Subtext Paragraph */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute right-0 top-[35%] md:top-[25%] w-[280px] lg:w-[320px] z-40 hidden md:flex gap-3 pointer-events-auto"
          >
             <div className="bg-[#0A5BA6] p-1.5 rounded-full h-fit flex-shrink-0 mt-1 shadow-sm">
               <Star className="text-white fill-white" size={12} />
             </div>
             <p className="text-sm lg:text-base text-gray-500 font-medium leading-relaxed">
               Our team of expert doctors and modern facilities ensure that you and your loved ones receive the best treatment, every time.
             </p>
          </motion.div>

          {/* MATTERS Text */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute right-0 bottom-[15%] md:bottom-[20%] z-20"
          >
            <h1 className="text-[#0A1A3A] text-[50px] md:text-[100px] lg:text-[130px] xl:text-[150px] font-bold leading-none tracking-tight">
              MATTERS
            </h1>
          </motion.div>
        </div>

        {/* BOTTOM LAYER (WHITE BG CONTENT) */}
        <div className="relative z-40 flex justify-between items-end pb-8 md:pb-12 pointer-events-none mt-auto">
          
          {/* Left Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col gap-12 lg:gap-16 pointer-events-auto"
          >
            {/* Video Thumbnail */}
            <div className="relative w-48 h-32 lg:w-56 lg:h-36 rounded-xl overflow-hidden shadow-xl group cursor-pointer hidden md:block border-4 border-white">
              <Image src="/robotic_joint_surgery.png" alt="Video" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#0A1A3A]/20 flex items-center justify-end pr-6 transition-colors group-hover:bg-[#0A1A3A]/10">
                <div className="w-12 h-12 rounded-full bg-[#0A1A3A] flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                  <Play size={20} className="ml-1 text-white fill-white" />
                </div>
              </div>
            </div>

            {/* 10+ Years */}
            <div className="flex flex-col gap-3 pb-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-[#2B8DF8] flex items-center justify-center text-white shadow-md">
                <Award size={22} />
              </div>
              <div className="flex flex-col">
                 <p className="font-bold text-[28px] lg:text-[32px] text-[#0A1A3A] leading-none mb-1">10+</p>
                 <p className="text-xs lg:text-sm text-gray-500 font-semibold uppercase tracking-wider">Years Of Medical<br/>Excellence</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="hidden md:block w-[240px] h-[150px] lg:w-[320px] lg:h-[180px] rounded-xl overflow-hidden shadow-2xl relative pointer-events-auto border-4 border-white mb-4"
          >
             <Image src="/robotic_joint_surgery.png" alt="Patient Care" fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>

        </div>

      </div>

      {/* DOCTOR IMAGE - Placed relative to the section to bottom-align perfectly */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[95%] md:w-[650px] lg:w-[750px] h-[85vh] z-30 pointer-events-none"
      >
        <Image 
          src="/dr_singhal_original.png" 
          alt="Dr. Ashish Singhal" 
          fill 
          className="object-contain object-bottom"
          priority
        />
      </motion.div>

      {/* Center Button - Elevated over the doctor if needed */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-8 md:bottom-12 z-50 pointer-events-auto"
      >
         <Link 
           href="#booking" 
           className="bg-[#2B8DF8] hover:bg-[#1E74D4] text-white px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-bold text-sm lg:text-base flex items-center gap-3 transition-all shadow-[0_8px_30px_rgb(43,141,248,0.3)] hover:shadow-[0_8px_30px_rgb(43,141,248,0.5)] hover:-translate-y-1"
         >
           Book An Appointment <ArrowRight size={20} />
         </Link>
      </motion.div>
    </section>
  );
}
