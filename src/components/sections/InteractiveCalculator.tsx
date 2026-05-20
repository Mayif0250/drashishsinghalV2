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
        title: "Arthroscopy & Sports Medicine Audit Recommended",
        urgency: "Moderate to High",
        protocol: "Minimally invasive keyhole diagnosis (Arthroscopy) to audit ligament fiber tear integrity and restore muscle mobility.",
        timeframe: "Within 5-7 days",
      };
    }
    
    if (symptom === "knee_pain" || symptom === "hip_stiffness") {
      if (severity >= 7 || duration === 3) {
        return {
          title: "Robotic-Assisted Joint Replacement Assessment",
          urgency: "High Clinical Vitals Audit",
          protocol: "Dr. Ashish Singhal's custom robotic-assisted mapping, sparing healthy bone tissue and evaluating implant placement metrics.",
          timeframe: "Within 2-3 days",
        };
      }
      return {
        title: "Conservative Orthopedic Joint Care Audit",
        urgency: "Low to Moderate",
        protocol: "Non-surgical joint lubrication, personalized active physical therapy, and targeted anti-inflammatory assessments.",
        timeframe: "Within 7-10 days",
      };
    }

    return {
      title: "Comprehensive Orthopedic Consultation",
      urgency: "Moderate",
      protocol: "Physical diagnostic analysis and digital joint mapping under MS (Ortho) specialist guidance.",
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
            Epigenetic Joint & Mobility Diagnostic Audit
          </h2>
          <p className="text-body mt-4 leading-relaxed">
            Select your main orthopedic indicators below to receive an outcome-focused treatment recommendation and route directly to Udaipur clinic schedules.
          </p>
        </div>

        {/* Diagnostic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Intake Controls (Left Column) */}
          <div className="lg:col-span-7 bg-[#140b00] border border-border-grey p-8 rounded-[6px] flex flex-col justify-between shadow-sm">
            <div className="space-y-8">
              
              {/* Parameter 1: Symptom Selector */}
              <div>
                <span className="text-caption font-bold text-trust-navy uppercase tracking-wider block mb-3">
                  1. Select Primary Orthopedic Joint Indicator
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "knee_pain", label: "Chronic Knee Pain" },
                    { id: "hip_stiffness", label: "Hip Joint Stiffness" },
                    { id: "sports_injury", label: "Sports Injury" },
                    { id: "ligament_tear", label: "Suspected Ligament Tear" },
                  ].map((sym) => (
                    <button
                      key={sym.id}
                      onClick={() => setSymptom(sym.id)}
                      className={`px-4 py-3 rounded-full border text-sm font-semibold transition-all ${
                        symptom === sym.id
                          ? "bg-medical-blue border-medical-blue text-white shadow-md shadow-medical-blue/20"
                          : "bg-transparent border-border-grey text-trust-navy hover:border-medical-blue"
                      }`}
                    >
                      {sym.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 2: Duration Selector */}
              <div>
                <span className="text-caption font-bold text-trust-navy uppercase tracking-wider block mb-3">
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
                      className={`py-2 text-xs font-bold uppercase tracking-wider border rounded-full transition-all ${
                        duration === dur.val
                          ? "bg-recovery-teal border-recovery-teal text-white shadow-md"
                          : "bg-transparent border-border-grey text-trust-navy hover:border-recovery-teal"
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
                  <span className="text-caption font-bold text-trust-navy uppercase tracking-wider">
                    3. Estimated Pain & Mobility Interference
                  </span>
                  <span className="text-caption font-bold text-medical-blue">
                    Severity: {severity} / 10
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={severity}
                  onChange={(e) => setSeverity(parseInt(e.target.value))}
                  className="w-full accent-medical-blue bg-soft-grey h-1.5 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between mt-1 text-[10px] text-caption font-mono uppercase">
                  <span>Mild / Intermittent</span>
                  <span>Severe / Constant</span>
                </div>
              </div>

              {/* Parameter 4: Clinic Selector */}
              <div>
                <span className="text-caption font-bold text-trust-navy uppercase tracking-wider block mb-3">
                  4. Preferred Udaipur Clinic Location
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedClinic("mahe")}
                    className={`px-4 py-3 border rounded-full flex items-center justify-center gap-2 text-sm font-semibold transition-all ${
                      selectedClinic === "mahe"
                        ? "border-recovery-teal bg-recovery-teal/5 text-trust-navy font-bold"
                        : "border-border-grey text-trust-navy"
                    }`}
                  >
                    <MapPin size={14} className="text-recovery-teal" />
                    <div>
                      <span className="block text-xs text-left leading-none uppercase font-bold text-caption">Udaipur</span>
                      <span className="block mt-0.5">Mahe Clinic</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setSelectedClinic("paras")}
                    className={`px-4 py-3 border rounded-full flex items-center justify-center gap-2 text-sm font-semibold transition-all ${
                      selectedClinic === "paras"
                        ? "border-medical-blue bg-medical-blue/5 text-trust-navy font-bold"
                        : "border-border-grey text-trust-navy"
                    }`}
                  >
                    <MapPin size={14} className="text-medical-blue" />
                    <div>
                      <span className="block text-xs text-left leading-none uppercase font-bold text-caption">Udaipur</span>
                      <span className="block mt-0.5">Paras Hospital</span>
                    </div>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Diagnostic Results (Right Column) */}
          <div className="lg:col-span-5 bg-[#140b00] border border-border-grey p-8 rounded-[6px] flex flex-col justify-between shadow-sm relative overflow-hidden">
            {/* Top clinical seal */}
            <div className="pb-6 border-b border-border-grey flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-medical-blue/10 flex items-center justify-center text-medical-blue">
                <ShieldCheck size={20} />
              </div>
              <div>
                <span className="text-[10px] font-bold text-recovery-teal uppercase tracking-widest block">
                  Intake Report
                </span>
                <span className="text-sm font-bold text-trust-navy block">
                  Dr. Singhal's Diagnostic Routing
                </span>
              </div>
            </div>

            {/* Dynamic Recommendation Panel */}
            <div className="py-6 flex-grow flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-trust-navy/60 block">
                Primary Assessment
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
                  <h3 className="text-subheading font-bold text-medical-blue leading-tight">
                    {advice.title}
                  </h3>
                  <div className="mt-4 p-4 bg-soft-grey border border-border-grey rounded-lg">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-recovery-teal block">
                      Recommended Protocol
                    </span>
                    <p className="text-body text-sm mt-1 leading-relaxed">
                      {advice.protocol}
                    </p>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-trust-navy/60 block">
                        Clinic Target
                      </span>
                      <span className="text-xs font-bold text-trust-navy flex items-center gap-1 mt-1">
                        <MapPin size={12} className="text-recovery-teal" />
                        {selectedClinic === "mahe" ? "Mahe Clinic" : "Paras Hospital"}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-trust-navy/60 block">
                        Booking Urgency
                      </span>
                      <span className="text-xs font-bold text-medical-blue flex items-center gap-1 mt-1">
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
              className="btn-primary w-full text-center py-3.5 font-bold uppercase tracking-wider text-xs shadow-md mt-6 rounded-lg flex items-center justify-center gap-2"
            >
              <Calendar size={14} />
              <span>Route & Book Appointment Slot</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
