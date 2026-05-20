"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, CheckSquare, ShieldCheck, MapPin, Calendar, Clock } from "lucide-react";

export default function InteractiveCalculator() {
  const [mounted, setMounted] = useState(false);
  const [symptom, setSymptom] = useState("knee_pain"); // knee_pain, hip_stiffness, sports_injury, ligament_tear
  const [duration, setDuration] = useState(2); // 1 = < 1 month, 2 = 1-6 months, 3 = > 6 months
  const [severity, setSeverity] = useState(5); // 1 to 10
  const [selectedClinic, setSelectedClinic] = useState("mahe"); // mahe or paras

  useEffect(() => {
    setMounted(true);
  }, []);

  // Clinical mock advice logic based on standard patient intake guidelines
  const getRecommendation = () => {
    if (symptom === "sports_injury" || symptom === "ligament_tear") {
      return {
        title: "Arthroscopy & Sports Medicine Suitability Audit",
        urgency: "High Clinical Priority",
        protocol: "Minimally invasive keyhole diagnosis (Arthroscopy) to inspect ligament fiber tear integrity and schedule muscle balance rehabilitation.",
        timeframe: "Within 3-5 days",
      };
    }
    
    if (symptom === "knee_pain" || symptom === "hip_stiffness") {
      if (severity >= 7 || duration === 3) {
        return {
          title: "Robotic-Assisted Joint Replacement Assessment",
          urgency: "Immediate Action Required",
          protocol: "Dr. Ashish Singhal's custom 3D robotic-assisted pre-op mapping, sparing up to 40% more healthy bone/ligament tissue and verifying optimal implant alignment.",
          timeframe: "Within 24-48 hours",
        };
      }
      return {
        title: "Biological Joint Preservation Audit",
        urgency: "Moderate Priority",
        protocol: "Non-surgical high-viscosity joint lubrication, custom bio-mechanical physical therapy, and targeted anti-inflammatory assessments to halt further wear.",
        timeframe: "Within 5-7 days",
      };
    }

    return {
      title: "Comprehensive Joint Consultation Program",
      urgency: "Standard Priority",
      protocol: "Physical diagnostic analysis, posture evaluation, and digital joint alignment check under MS (Ortho) specialist guidance.",
      timeframe: "Within 7 days",
    };
  };

  const advice = getRecommendation();

  if (!mounted) {
    return (
      <section id="calculator" className="relative py-24 bg-soft-grey border-y border-border-grey overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center py-12">
          <div className="animate-pulse flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-medical-blue/10 flex items-center justify-center text-medical-blue">
              <Stethoscope size={24} />
            </div>
            <span className="text-sm font-bold text-trust-navy uppercase tracking-wider">
              Loading Intake System...
            </span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="calculator" className="relative py-24 bg-soft-grey border-y border-border-grey overflow-hidden">
      {/* Soft circular background visuals */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-medical-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-caption font-bold uppercase tracking-wider text-recovery-teal flex items-center gap-1.5 justify-center">
            <Stethoscope size={14} /> Interactive Diagnostic Intake
          </span>
          <h2 className="text-section font-bold tracking-tight text-trust-navy mt-3">
            Joint Mobility & Surgical Suitability Assessment
          </h2>
          <p className="text-body mt-4 leading-relaxed">
            Select your main orthopedic joint indicators below to calculate your suitability score and receive an expert-recommended clinical action plan in 60 seconds.
          </p>
        </div>

        {/* Diagnostic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Intake Controls (Left Column) */}
          <div className="lg:col-span-7 bg-surface-white border border-line-gray p-8 rounded-[25px] flex flex-col justify-between shadow-sm">
            <div className="space-y-8">
              
              {/* Parameter 1: Symptom Selector */}
              <div>
                <span className="text-xs font-bold text-headline-dark uppercase tracking-wider block mb-3">
                  1. Select Primary Orthopedic Joint Indicator
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "knee_pain", label: "Chronic Knee Pain (Arthritis)" },
                    { id: "hip_stiffness", label: "Hip Joint Stiffness & Pain" },
                    { id: "sports_injury", label: "Knee / Shoulder Sports Injury" },
                    { id: "ligament_tear", label: "Suspected Ligament / ACL Tear" },
                  ].map((sym) => (
                    <button
                      key={sym.id}
                      onClick={() => setSymptom(sym.id)}
                      className={`px-4 py-3 rounded-[12px] border text-xs font-bold transition-all uppercase tracking-wide ${
                        symptom === sym.id
                          ? "bg-deep-graphite border-deep-graphite text-canvas-warmth shadow-sm"
                          : "bg-transparent border-line-gray text-headline-dark hover:border-deep-graphite"
                      }`}
                    >
                      {sym.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 2: Duration Selector */}
              <div>
                <span className="text-xs font-bold text-headline-dark uppercase tracking-wider block mb-3">
                  2. Duration of Indicators
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { val: 1, label: "< 1 Month" },
                    { val: 2, label: "1 to 6 Months" },
                    { val: 3, label: "> 6 Months" },
                  ].map((dur) => (
                    <button
                      key={dur.val}
                      onClick={() => setDuration(dur.val)}
                      className={`py-2.5 text-xs font-bold uppercase tracking-wider border rounded-[12px] transition-all ${
                        duration === dur.val
                          ? "bg-deep-graphite border-deep-graphite text-canvas-warmth shadow-sm"
                          : "bg-transparent border-line-gray text-headline-dark hover:border-deep-graphite"
                      }`}
                    >
                      {dur.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 3: Pain Severity Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-headline-dark uppercase tracking-wider">
                    3. Estimated Pain & Mobility Interference
                  </span>
                  <span className="text-xs font-bold text-deep-graphite">
                    Severity: {severity} / 10
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={severity}
                  onChange={(e) => setSeverity(parseInt(e.target.value))}
                  className="w-full accent-deep-graphite bg-canvas-warmth h-1.5 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between mt-1 text-[10px] text-muted-text font-semibold uppercase tracking-wider">
                  <span>Mild / Intermittent</span>
                  <span>Severe / Constant</span>
                </div>
              </div>

              {/* Parameter 4: Clinic Selector */}
              <div>
                <span className="text-xs font-bold text-headline-dark uppercase tracking-wider block mb-3">
                  4. Preferred Udaipur Clinic Location
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedClinic("mahe")}
                    className={`px-4 py-3 border rounded-[12px] flex items-center justify-center gap-2 text-sm font-semibold transition-all ${
                      selectedClinic === "mahe"
                        ? "border-deep-graphite bg-canvas-warmth text-headline-dark font-bold"
                        : "border-line-gray text-headline-dark"
                    }`}
                  >
                    <MapPin size={14} className="text-deep-graphite" />
                    <div>
                      <span className="block text-[9px] text-left leading-none uppercase font-bold text-muted-text tracking-wider">Udaipur</span>
                      <span className="block mt-1 text-xs">Mahe Clinic</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setSelectedClinic("paras")}
                    className={`px-4 py-3 border rounded-[12px] flex items-center justify-center gap-2 text-sm font-semibold transition-all ${
                      selectedClinic === "paras"
                        ? "border-deep-graphite bg-canvas-warmth text-headline-dark font-bold"
                        : "border-line-gray text-headline-dark"
                    }`}
                  >
                    <MapPin size={14} className="text-deep-graphite" />
                    <div>
                      <span className="block text-[9px] text-left leading-none uppercase font-bold text-muted-text tracking-wider">Udaipur</span>
                      <span className="block mt-1 text-xs">Paras Hospital</span>
                    </div>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Diagnostic Results (Right Column) */}
          <div className="lg:col-span-5 bg-surface-white border border-line-gray p-8 rounded-[25px] flex flex-col justify-between shadow-sm relative overflow-hidden">
            {/* Top clinical seal */}
            <div className="pb-6 border-b border-line-gray flex items-center gap-3">
              <div className="w-10 h-10 rounded-[12px] bg-deep-graphite/5 flex items-center justify-center text-deep-graphite">
                <ShieldCheck size={20} />
              </div>
              <div>
                <span className="text-[10px] font-bold text-muted-text uppercase tracking-widest block">
                  Suitability Report
                </span>
                <span className="text-sm font-bold text-headline-dark block">
                  Joint Diagnostics Audit Route
                </span>
              </div>
            </div>

            {/* Dynamic Recommendation Panel */}
            <div className="py-6 flex-grow flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-text block">
                Intake Assessment
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={symptom + duration + severity}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2"
                >
                  <h3 className="text-subheading font-bold text-deep-graphite leading-tight">
                    {advice.title}
                  </h3>
                  <div className="mt-4 p-4 bg-canvas-warmth border border-line-gray rounded-[12px]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-headline-dark/70 block">
                      Recommended Protocol
                    </span>
                    <p className="text-xs text-body-gray mt-1.5 leading-relaxed font-sans font-medium">
                      {advice.protocol}
                    </p>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-text block">
                        Clinic Target
                      </span>
                      <span className="text-xs font-bold text-headline-dark flex items-center gap-1 mt-1">
                        <MapPin size={12} className="text-deep-graphite" />
                        {selectedClinic === "mahe" ? "Mahe Clinic" : "Paras Hospital"}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-text block">
                        Booking Urgency
                      </span>
                      <span className="text-xs font-bold text-deep-graphite flex items-center gap-1 mt-1">
                        <Clock size={12} />
                        {advice.timeframe}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Direct Booking CTA */}
            <a
              href="#booking"
              className="btn-primary w-full text-center py-3.5 font-bold uppercase tracking-wider text-xs shadow-md mt-6 rounded-[12px] flex items-center justify-center gap-2"
            >
              <Calendar size={14} />
              <span>Claim Free Joint Audit & Book Priority Slot</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
