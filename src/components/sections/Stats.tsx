"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const metrics = [
    { value: "20+", label: "Years Experience", desc: "Delivering world-class joint care" },
    { value: "1,600+", label: "Robotic Surgeries", desc: "Precision alignment & optimal outcomes" },
    { value: "99%", label: "Success Rate", desc: "Proven clinical mobility restoration" },
    { value: "Top 1%", label: "Surgical Innovation", desc: "Advanced state-of-the-art precision systems" },
  ];

  return (
    <section className="py-24 bg-[#0A1A3A] relative overflow-hidden">
       {/* Background decorative elements */}
       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0A5BA6]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2B8DF8]/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
       
       <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:gap-y-12 lg:divide-x divide-white/10 border-y border-white/10">
           {metrics.map((metric, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: idx * 0.1 }}
               className="py-12 lg:py-16 px-4 md:px-10 flex flex-col items-center lg:items-start text-center lg:text-left group"
             >
                <h3 className="text-6xl md:text-7xl font-bold text-white mb-3 tracking-tighter group-hover:scale-105 transition-transform duration-500 origin-left">
                  {metric.value}
                </h3>
                <p className="text-[#2B8DF8] font-bold text-sm uppercase tracking-widest mb-4">
                  {metric.label}
                </p>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {metric.desc}
                </p>
             </motion.div>
           ))}
         </div>
       </div>
    </section>
  );
}
