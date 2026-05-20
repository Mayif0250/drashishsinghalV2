"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const metrics = [
    { value: "20+", label: "Years of practice" },
    { value: "1,600+", label: "Robotic surgeries" },
    { value: "99%", label: "Success rate" },
    { value: "Top 1%", label: "Surgical innovation" },
  ];

  return (
    <section className="bg-parchment-gray border-b border-ash-mist">
      <div className="max-w-[1200px] mx-auto px-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-ash-mist">
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="py-14 px-8 flex flex-col gap-2"
            >
              <span
                style={{ fontFamily: "var(--font-exposure30), 'Playfair Display', serif", fontWeight: 400, letterSpacing: "-0.01px", lineHeight: 1.1 }}
                className="text-[clamp(32px,4vw,52px)] text-midnight-charcoal"
              >
                {m.value}
              </span>
              <span
                style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif", fontSize: "13px", lineHeight: 1.4 }}
                className="text-stone-accent"
              >
                {m.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
