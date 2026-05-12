"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full border-y border-blue-200">
      {/* Main Container */}
      <div className="relative max-w-6xl mx-auto px-4 py-24 pt-36 border-x border-blue-200 min-h-[70vh] flex flex-col items-center justify-center gap-4 text-center">
        {/* --- Corner Accents for Main Container --- */}
        <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-[3px] border-l-[3px] border-blue-500"></div>
        <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-[3px] border-r-[3px] border-blue-500"></div>
        <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-[3px] border-l-[3px] border-blue-500"></div>
        <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-[3px] border-r-[3px] border-blue-500"></div>

        {/* --- Modernized Top Badge --- */}
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 mb-2 text-sm font-medium border border-blue-200 bg-blue-50 text-blue-700 shadow-sm">
          {/* Glowing Blue Indicator Dot */}
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 bg-blue-600"></span>
          </div>
          <span className="font-poppins">Unified Communication Platform</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-5xl font-inter tracking-tight font-semibold text-zinc-800">
            Calls. Chats. CRM. AI.
          </h1>

          {/* Added 'relative' to this span so the new corners stick to its edges */}
          <span className="relative text-5xl font-inter tracking-tight font-semibold py-1 px-4 bg-blue-100 text-blue-500 shadow-inner">
            {/* --- Corner Accents for "One Place." Highlight --- */}
            <div className="absolute -top-[2px] -left-[2px] w-3 h-3 border-t-[3px] border-l-[3px] border-blue-500"></div>
            <div className="absolute -top-[2px] -right-[2px] w-3 h-3 border-t-[3px] border-r-[3px] border-blue-500"></div>
            <div className="absolute -bottom-[2px] -left-[2px] w-3 h-3 border-b-[3px] border-l-[3px] border-blue-500"></div>
            <div className="absolute -bottom-[2px] -right-[2px] w-3 h-3 border-b-[3px] border-r-[3px] border-blue-500"></div>
            One Place.
          </span>
        </div>

        <p className="text-sm text-zinc-600 max-w-sm font-poppins mt-2">
          Run customer conversations, follow-ups, and AI agents from one
          platform.
        </p>

        {/* --- Cyber-Brutalist Buttons --- */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Button */}
          <motion.div
            initial="rest"
            whileHover="hover"
            className="relative p-[3px] group cursor-pointer"
          >
            {/* Clamping Brackets (Blue transition for primary) */}
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
                  Start for free
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
                  Start for free
                </motion.span>
                <span className="invisible whitespace-nowrap">
                  Start for free
                </span>
              </div>

              {/* Animated Arrow Icon */}
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 shrink-0"
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

          {/* Secondary Button */}
          <motion.div
            initial="rest"
            whileHover="hover"
            className="relative p-[3px] group cursor-pointer"
          >
            {/* Clamping Brackets (Lighter for secondary) */}
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

            <button className="py-2 px-4 rounded-none text-sm font-mono tracking-tight transition-colors flex items-center justify-center overflow-hidden border border-zinc-300 bg-transparent text-zinc-700 hover:bg-zinc-50 hover:border-zinc-400 hover:text-zinc-900 w-full sm:w-auto">
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
                  Talk to sales
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
                  Talk to sales
                </motion.span>
                <span className="invisible whitespace-nowrap">
                  Talk to sales
                </span>
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
