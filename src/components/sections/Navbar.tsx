"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Stethoscope } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0600]/90 backdrop-blur-md border-b border-[#43392d]/40 py-3 shadow-md"
          : "bg-transparent border-none py-5"
      }`}
    >
      <div className="max-w-[94%] mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-[6px] bg-[#ffb442] flex items-center justify-center text-[#140b00] shadow-md">
            <Stethoscope size={20} strokeWidth={2.5} />
          </div>
          <div>
            <span className="font-display font-bold text-lg tracking-tight text-white block leading-none">
              Dr. Ashish Singhal
            </span>
            <span className="text-[11px] font-medium tracking-wide text-recovery-teal block mt-1 uppercase">
              Orthopedic & Robotic Joint Specialist
            </span>
          </div>
        </Link>

        {/* Navigation links */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="#about" className="text-sm font-semibold text-white/95 hover:text-[#ffb442] transition-colors">
            About Dr. Singhal
          </Link>
          <Link href="#services" className="text-sm font-semibold text-white/95 hover:text-[#ffb442] transition-colors">
            Treatments
          </Link>
          <Link href="#robotic" className="text-sm font-semibold text-white/95 hover:text-[#ffb442] transition-colors">
            Robotic Surgery
          </Link>
          <Link href="#clinics" className="text-sm font-semibold text-white/95 hover:text-[#ffb442] transition-colors">
            Clinic Locations
          </Link>
          <Link href="#faq" className="text-sm font-semibold text-white/95 hover:text-[#ffb442] transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Direct Booking Elements matching ABL screenshot */}
        <div className="flex items-center gap-2">
          <a
            href="tel:+919414393320"
            className="hidden sm:flex items-center justify-center border border-[#43392d] px-4 py-2 rounded-full text-xs font-semibold text-white hover:border-[#ffb442] hover:text-[#ffb442] transition-all"
          >
            <span>+91 94143 93320</span>
          </a>
          <div className="flex items-center gap-1.5">
            <Link href="#booking" className="btn-primary py-2 px-4 text-xs rounded-full">
              Book Appointment
            </Link>
            <Link
              href="#booking"
              className="w-8 h-8 rounded-full bg-[#ffb442] text-[#140b00] flex items-center justify-center hover:bg-[#fff1e0] transition-colors"
            >
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
