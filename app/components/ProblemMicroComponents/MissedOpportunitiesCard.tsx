"use client";
import React from "react";
import { motion } from "framer-motion";

// --- Framer Motion Variants ---
// These define the structural states of our animations
const cardVariants = {
  idle: {},
  hover: {},
};

const notificationVariants = {
  idle: {
    y: 0,
    opacity: 1,
    borderColor: "#e4e4e7",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
  },
  hover: {
    y: [-20, 0, 0, 0, -20],
    opacity: [0, 1, 1, 1, 0],
    borderColor: ["#e4e4e7", "#e4e4e7", "#fca5a5", "#fca5a5", "#e4e4e7"],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      times: [0, 0.15, 0.5, 0.85, 1],
      ease: "easeInOut",
    },
  },
};

const iconVariants = {
  idle: { backgroundColor: "#22c55e", scale: 1 },
  hover: {
    backgroundColor: ["#22c55e", "#22c55e", "#ef4444", "#ef4444", "#22c55e"],
    scale: [1, 1.1, 1, 1, 1],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      times: [0, 0.15, 0.5, 0.85, 1],
    },
  },
};

const pillVariants = {
  idle: { y: 10, opacity: 0, scale: 0.9 },
  hover: {
    y: [10, 10, 45, 60],
    opacity: [0, 0, 1, 0],
    scale: [0.9, 0.9, 1, 0.9],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      times: [0, 0.5, 0.65, 0.9],
      ease: "backOut",
    },
  },
};

export const MissedOpportunitiesCard = () => {
  return (
    <motion.div
      initial="idle"
      whileHover="hover"
      variants={cardVariants}
      className="group relative bg-[#faf9f5] border border-zinc-200 px-3.5 py-3 pb-4 flex flex-col h-[350px] transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50 overflow-hidden cursor-crosshair"
    >
      {/* --- Cyber-Brutalist Corner Accents --- */}
      <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

      {/* --- Canvas 1: The "Lost Value" Node --- */}
      <div className="flex-1 w-full bg-white border border-zinc-200 mb-4 flex items-center justify-center relative z-10 overflow-hidden shadow-inner group-hover:shadow-md transition-shadow duration-500">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-50 mask-image-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="relative w-full flex flex-col items-center">
          {/* Incoming Notification */}
          <motion.div
            variants={notificationVariants}
            className="w-3/4 bg-white border shadow-sm p-3 flex flex-col gap-2 relative z-20"
          >
            <div className="flex items-center gap-3">
              <motion.div
                variants={iconVariants}
                className="w-6 h-6 rounded-full flex items-center justify-center text-white shadow-sm"
              >
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
              </motion.div>
              <div className="flex-1">
                <div className="h-2 w-16 bg-zinc-200 mb-1 rounded-sm"></div>
                <div className="h-1.5 w-10 bg-zinc-100 rounded-sm"></div>
              </div>
            </div>
          </motion.div>

          {/* Dropping Value Pill */}
          <motion.div
            variants={pillVariants}
            className="absolute top-8 bg-red-50 text-red-600 text-[10px] font-semibold px-2.5 py-1 border border-red-200 shadow-sm z-10"
          >
            - ₹1.2L Lost
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#faf9f5] to-transparent z-10 pointer-events-none transition-colors duration-300 group-hover:from-zinc-50"></div>

      <h3 className="font-inter font-medium text-zinc-900 text-lg relative z-20">
        Missed Opportunities
      </h3>
      <p className="font-poppins text-xs text-zinc-500 mt-1 relative tracking-wide z-20 max-w-[250px]">
        Customers call once. If you miss it, they call your competitor.
      </p>
    </motion.div>
  );
};
