"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-parchment-gray border-b border-ash-mist py-4"
          : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex items-center justify-between">

        {/* Brand */}
        <Link
          href="/"
          style={{ fontFamily: "var(--font-exposure30), 'Playfair Display', serif", fontWeight: 400, letterSpacing: "-0.01px" }}
          className={`text-[19px] leading-none transition-colors duration-300 ${scrolled ? "text-midnight-charcoal" : "text-canvas-white"
            }`}
        >
          Dr. Ashish Singhal
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: "About", href: "#about" },
            { label: "Treatments", href: "#services" },
            { label: "Clinics", href: "#robotic" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif", fontSize: "14px", lineHeight: "1.33" }}
              className={`transition-colors duration-300 ${scrolled
                  ? "text-stone-accent hover:text-midnight-charcoal"
                  : "text-stone-accent hover:text-canvas-white"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+919414393320"
            style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif", fontSize: "13.5px" }}
            className={`hidden sm:block transition-colors duration-300 ${scrolled
                ? "text-stone-accent hover:text-midnight-charcoal"
                : "text-stone-accent hover:text-canvas-white"
              }`}
          >
            +91 94143 93320
          </a>

          <Link
            href="#booking"
            className={`text-[13px] px-6 py-2.5 transition-all duration-300 border rounded-full hover:scale-[1.03] active:scale-[0.98] ${scrolled
                ? "bg-midnight-charcoal border-midnight-charcoal text-canvas-white hover:bg-sunset-orange hover:border-sunset-orange"
                : "bg-transparent border-canvas-white/80 text-canvas-white hover:bg-sunset-orange hover:border-sunset-orange hover:text-canvas-white"
              }`}
            style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif" }}
          >
            Consultation
          </Link>
        </div>

      </div>
    </motion.header>
  );
}
