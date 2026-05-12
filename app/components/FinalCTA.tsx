"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const trustItems = [
    "No hardware required",
    "Setup in minutes",
    "Trusted by modern businesses",
    "Works with your existing number",
  ];

  // Animation variants for staggered, smooth entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full border-t border-zinc-200 bg-white overflow-hidden py-24 md:py-32 font-inter">
      {/* --- Subtle Background Operational Visuals --- */}
      {/* Soft radial glow to center attention */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none"></div>

      {/* Abstract Communication Nodes (Low Opacity) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none flex justify-center items-center opacity-[0.03] text-blue-900">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="network"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="1.5" fill="currentColor" />
              <path
                d="M 50 50 L 150 150 M 50 50 L -50 -50 M 50 50 L 150 -50"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#network)" />
        </svg>
      </div>

      {/* --- Main Content Container --- */}
      <div className="relative max-w-4xl mx-auto px-6 z-10 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center w-full"
        >
          {/* Label */}
          <motion.span
            variants={itemVariants}
            className="text-[11px] font-bold tracking-[0.2em] text-blue-600 uppercase mb-6"
          >
            Ready to Scale
          </motion.span>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 tracking-tight leading-[1.1] mb-6 max-w-3xl"
          >
            Build a business that never misses a customer.
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-zinc-500 font-medium leading-relaxed mb-10 max-w-2xl"
          >
            From shared business numbers to AI-powered workflows, Superfone
            helps modern teams communicate, collaborate, and grow from one
            platform.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14"
          >
            {/* Primary CTA */}
            <button className="w-full sm:w-auto group relative flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md active:scale-[0.98]">
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary CTA */}
            <button className="w-full sm:w-auto px-8 py-3.5 bg-white border border-zinc-200 text-zinc-900 rounded-lg text-sm font-bold shadow-sm transition-all duration-200 hover:bg-zinc-50 active:scale-[0.98]">
              Book a Demo
            </button>
          </motion.div>

          {/* Trust / Reassurance Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-8 border-t border-zinc-100/50 w-full"
          >
            {trustItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm font-medium text-zinc-500"
              >
                <div className="flex items-center justify-center w-4 h-4 rounded-full bg-zinc-100 text-zinc-400">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
