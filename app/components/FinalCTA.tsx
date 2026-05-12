"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

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
    <section className="relative w-full bg-white overflow-hidden font-inter border-b border-blue-200">
      {/* --- Subtle Background Operational Visuals --- */}
      {/* Soft radial glow to center attention */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none z-0"></div>

      {/* Abstract Communication Nodes (Low Opacity) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none flex justify-center items-center opacity-[0.03] text-blue-900 z-0">
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

      {/* --- Main Content Container (Aligned with Design System Grid) --- */}
      <div className="relative max-w-6xl mx-auto px-6 py-24 border-x border-blue-200 z-10 flex flex-col items-center text-center">
        {/* Standard Design System Corner Accents */}
        <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-[3px] border-l-[3px] border-blue-500 z-20"></div>
        <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-[3px] border-r-[3px] border-blue-500 z-20"></div>
        <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-[3px] border-l-[3px] border-blue-500 z-20"></div>
        <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-[3px] border-r-[3px] border-blue-500 z-20"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center w-full max-w-4xl"
        >
          {/* Label */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center gap-2 px-3 py-1.5 mb-8 text-xs font-medium border border-blue-200 bg-blue-50 text-blue-700 shadow-sm"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 bg-blue-600"></span>
            </div>
            <span className="font-poppins uppercase tracking-wider">
              Ready to Scale
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-normal tracking-tight mb-4 font-poppins text-zinc-900 max-w-xl"
          >
            Build a business that never misses a customer.
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-center font-poppins mb-6 text-zinc-500 tracking-tight max-w-lg leading-relaxed mt-1"
          >
            Superfone helps modern teams communicate, collaborate, and grow with
            shared business numbers and AI-powered workflows.
          </motion.p>

          {/* Cyber-Brutalist CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto mb-14"
          >
            {/* Primary CTA */}
            <motion.div
              initial="rest"
              whileHover="hover"
              className="relative p-[3px] group cursor-pointer w-full sm:w-auto"
            >
              {/* Clamping Brackets */}
              <motion.div
                variants={{ rest: { x: 0, y: 0 }, hover: { x: 2, y: 2 } }}
                className="absolute top-0 left-0 size-2.5 border-t-[2px] border-l-[2px] border-zinc-400 group-hover:border-blue-400 transition-colors pointer-events-none"
              ></motion.div>
              <motion.div
                variants={{ rest: { x: 0, y: 0 }, hover: { x: -2, y: 2 } }}
                className="absolute top-0 right-0 size-2.5 border-t-[2px] border-r-[2px] border-zinc-400 group-hover:border-blue-400 transition-colors pointer-events-none"
              ></motion.div>
              <motion.div
                variants={{ rest: { x: 0, y: 0 }, hover: { x: 2, y: -2 } }}
                className="absolute bottom-0 left-0 size-2.5 border-b-[2px] border-l-[2px] border-zinc-400 group-hover:border-blue-400 transition-colors pointer-events-none"
              ></motion.div>
              <motion.div
                variants={{ rest: { x: 0, y: 0 }, hover: { x: -2, y: -2 } }}
                className="absolute bottom-0 right-0 size-2.5 border-b-[2px] border-r-[2px] border-zinc-400 group-hover:border-blue-400 transition-colors pointer-events-none"
              ></motion.div>

              <button className="py-2 px-4 rounded-none text-sm font-mono tracking-tight transition-colors flex items-center justify-center gap-2 overflow-hidden bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto">
                <div
                  className="relative h-5 flex items-center justify-center"
                  style={{ perspective: "1000px" }}
                >
                  <motion.span
                    variants={{
                      rest: { y: 0, rotateX: 0, opacity: 1 },
                      hover: { y: -20, rotateX: 90, opacity: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
                  >
                    Start Free Trial
                  </motion.span>
                  <motion.span
                    variants={{
                      rest: { y: 20, rotateX: -90, opacity: 0 },
                      hover: { y: 0, rotateX: 0, opacity: 1 },
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
                    aria-hidden="true"
                  >
                    Start Free Trial
                  </motion.span>
                  <span className="invisible whitespace-nowrap">
                    Start Free Trial
                  </span>
                </div>

                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M12 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              initial="rest"
              whileHover="hover"
              className="relative p-[3px] group cursor-pointer w-full sm:w-auto"
            >
              {/* Clamping Brackets */}
              <motion.div
                variants={{ rest: { x: 0, y: 0 }, hover: { x: 2, y: 2 } }}
                className="absolute top-0 left-0 size-2.5 border-t-[2px] border-l-[2px] border-zinc-300 group-hover:border-zinc-700 transition-colors pointer-events-none"
              ></motion.div>
              <motion.div
                variants={{ rest: { x: 0, y: 0 }, hover: { x: -2, y: 2 } }}
                className="absolute top-0 right-0 size-2.5 border-t-[2px] border-r-[2px] border-zinc-300 group-hover:border-zinc-700 transition-colors pointer-events-none"
              ></motion.div>
              <motion.div
                variants={{ rest: { x: 0, y: 0 }, hover: { x: 2, y: -2 } }}
                className="absolute bottom-0 left-0 size-2.5 border-b-[2px] border-l-[2px] border-zinc-300 group-hover:border-zinc-700 transition-colors pointer-events-none"
              ></motion.div>
              <motion.div
                variants={{ rest: { x: 0, y: 0 }, hover: { x: -2, y: -2 } }}
                className="absolute bottom-0 right-0 size-2.5 border-b-[2px] border-r-[2px] border-zinc-300 group-hover:border-zinc-700 transition-colors pointer-events-none"
              ></motion.div>

              <button className="py-2 px-4 rounded-none text-sm font-mono tracking-tight transition-colors flex items-center justify-center overflow-hidden border border-zinc-300 bg-transparent text-zinc-800 hover:bg-zinc-50 hover:border-zinc-400 w-full sm:w-auto">
                <div
                  className="relative h-5 flex items-center justify-center"
                  style={{ perspective: "1000px" }}
                >
                  <motion.span
                    variants={{
                      rest: { y: 0, rotateX: 0, opacity: 1 },
                      hover: { y: -20, rotateX: 90, opacity: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
                  >
                    Book a Demo
                  </motion.span>
                  <motion.span
                    variants={{
                      rest: { y: 20, rotateX: -90, opacity: 0 },
                      hover: { y: 0, rotateX: 0, opacity: 1 },
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
                    aria-hidden="true"
                  >
                    Book a Demo
                  </motion.span>
                  <span className="invisible whitespace-nowrap">
                    Book a Demo
                  </span>
                </div>
              </button>
            </motion.div>
          </motion.div>

          {/* Trust / Reassurance Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-8 border-t border-zinc-200/60 w-full"
          >
            {trustItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wide"
              >
                <Check className="w-3.5 h-3.5 text-blue-500" />
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
