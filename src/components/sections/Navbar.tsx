"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Activity } from "lucide-react";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl px-6 py-3 flex items-center justify-between bg-deep-onyx/75 border border-dark-charcoal backdrop-blur-md"
      style={{ borderRadius: "1162.8px" }}
    >
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 rounded-full bg-amber-glow flex items-center justify-center text-deep-onyx shadow-[0_0_15px_rgba(255,180,66,0.3)] transition-transform group-hover:scale-105">
          <Activity size={16} strokeWidth={2.5} />
        </div>
        <span className="font-medium tracking-tight text-dawn-linen text-body group-hover:text-amber-glow transition-colors">
          abetterlou
        </span>
      </Link>

      {/* Main Links */}
      <nav className="hidden md:flex items-center gap-8">
        <Link href="#metrics" className="text-caption uppercase font-medium tracking-wider text-pale-ash hover:text-dawn-linen transition-colors">
          Metrics
        </Link>
        <Link href="#features" className="text-caption uppercase font-medium tracking-wider text-pale-ash hover:text-dawn-linen transition-colors">
          Pillars
        </Link>
        <Link href="#calculator" className="text-caption uppercase font-medium tracking-wider text-pale-ash hover:text-dawn-linen transition-colors">
          Biological Audit
        </Link>
        <Link href="#pricing" className="text-caption uppercase font-medium tracking-wider text-pale-ash hover:text-dawn-linen transition-colors">
          Memberships
        </Link>
        <Link href="#faq" className="text-caption uppercase font-medium tracking-wider text-pale-ash hover:text-dawn-linen transition-colors">
          Insights
        </Link>
      </nav>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <Link href="#pricing" className="btn-secondary hidden sm:inline-flex text-xs font-medium px-4 py-2 border-fossil-grey text-dawn-linen">
          Patient Portal
        </Link>
        <Link href="#cta" className="btn-primary text-xs font-medium px-4 py-2 text-deep-onyx">
          Join the list
        </Link>
      </div>
    </motion.header>
  );
}
