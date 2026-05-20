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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-parchment-gray border-b border-ash-mist py-4"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-0 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" style={{ fontFamily: "var(--font-exposure30), 'Playfair Display', serif", fontWeight: 400, letterSpacing: "-0.01px" }} className="text-[18px] text-midnight-charcoal leading-none">
          Dr. Ashish Singhal
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "About", href: "#about" },
            { label: "Treatments", href: "#services" },
            { label: "Clinics", href: "#robotic" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif", fontSize: "14px", lineHeight: "1.33" }}
              className="text-stone-accent hover:text-midnight-charcoal transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+919414393320"
            style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif", fontSize: "13px" }}
            className="hidden sm:block text-stone-accent hover:text-midnight-charcoal transition-colors"
          >
            +91 94143 93320
          </a>
          <Link href="#booking" className="btn-parloa-primary text-[13px] px-5 py-3">
            Consultation
          </Link>
        </div>

      </div>
    </motion.header>
  );
}
