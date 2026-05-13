"use client";
import React from "react";
import { motion } from "framer-motion";

// --- Framer Motion Variants ---
const containerVariants = {
  idle: {},
  hover: {},
};

const leadCardVariants = {
  idle: {
    y: 0,
    rotateZ: 0,
    opacity: 1,
    borderColor: "#e4e4e7", // zinc-200
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
  },
  hover: {
    y: [0, 0, 80, 120], // The "fall"
    rotateZ: [0, 0, 5, 8], // The "slip"
    opacity: [1, 1, 0.8, 0], // Fades out as it drops
    borderColor: ["#e4e4e7", "#e4e4e7", "#fca5a5", "#ef4444"], // Warning to Critical Red
    boxShadow: [
      "0 1px 2px rgba(0,0,0,0.05)",
      "0 1px 2px rgba(0,0,0,0.05)",
      "0 10px 15px -3px rgba(239,68,68,0.1)",
      "none",
    ],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      times: [0, 0.4, 0.8, 1], // Stays safe for 40% of the time, then drops
      ease: "anticipate",
    },
  },
};

const timerVariants = {
  idle: { width: "15%", backgroundColor: "#10b981" }, // Safe Green
  hover: {
    width: ["15%", "100%", "100%", "100%"], // Timer fills up rapidly
    backgroundColor: ["#10b981", "#f59e0b", "#ef4444", "#ef4444"], // Green -> Amber -> Red
    transition: {
      duration: 3.5,
      repeat: Infinity,
      times: [0, 0.3, 0.5, 1],
      ease: "linear",
    },
  },
};

const questionMarkVariants = {
  idle: { scale: 1, color: "#a1a1aa", backgroundColor: "#fafafa" },
  hover: {
    scale: [1, 1.1, 1.1, 1.1],
    color: ["#a1a1aa", "#ef4444", "#ef4444", "#ef4444"],
    backgroundColor: ["#fafafa", "#fef2f2", "#fef2f2", "#fef2f2"],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      times: [0, 0.4, 0.8, 1],
    },
  },
};

export const BrokenFollowupsCard = () => {
  return (
    <motion.div
      initial="idle"
      whileHover="hover"
      variants={containerVariants}
      className="group relative bg-[#faf9f5] border border-zinc-200 px-3.5 py-3 pb-4 flex flex-col h-[350px] transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50 overflow-hidden cursor-crosshair"
    >
      {/* --- Cyber-Brutalist Corner Accents --- */}
      <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

      {/* --- Canvas 3: The "Slipping Through the Cracks" Node --- */}
      <div className="flex-1 w-full bg-zinc-50 border border-zinc-200 mb-4 flex items-center justify-center relative z-10 overflow-hidden shadow-inner group-hover:shadow-md transition-shadow duration-500">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40"></div>

        {/* Kanban Column */}
        <div className="w-[60%] h-[80%] border border-dashed border-zinc-300 bg-zinc-100/50 p-2 flex flex-col z-20 relative transition-colors duration-500 group-hover:bg-zinc-100/80">
          <div className="h-2 w-12 bg-zinc-300 mb-3 rounded-sm"></div>

          {/* Falling Lead Card */}
          <motion.div
            variants={leadCardVariants}
            className="bg-white p-2.5 border shadow-sm relative z-30 flex flex-col gap-3"
          >
            <div className="flex justify-between items-start">
              <div className="h-2.5 w-16 bg-zinc-800 rounded-sm"></div>
              {/* Unassigned Warning Indicator */}
              <motion.div
                variants={questionMarkVariants}
                className="w-4 h-4 border border-dashed border-zinc-300 flex items-center justify-center text-[8px] font-bold rounded-sm"
              >
                ?
              </motion.div>
            </div>
            <div className="h-1.5 w-10 bg-zinc-200 rounded-sm"></div>

            {/* Critical Timer Bar */}
            <div className="w-full h-1.5 bg-zinc-100 overflow-hidden relative rounded-full">
              <motion.div
                variants={timerVariants}
                className="absolute top-0 left-0 h-full rounded-full"
              ></motion.div>
            </div>
          </motion.div>

          {/* Empty slot placeholder left behind */}
          <div className="absolute top-[28px] left-2 right-2 h-[72px] border border-dashed border-zinc-300 bg-transparent z-10 group-hover:bg-red-50/30 transition-colors duration-700 delay-300"></div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#faf9f5] to-transparent z-10 pointer-events-none transition-colors duration-300 group-hover:from-zinc-50"></div>

      <h3 className="font-geist-sans font-medium text-zinc-900 text-lg relative z-20">
        Broken Follow-ups
      </h3>
      <p className="font-poppins text-xs text-zinc-500 mt-1 tracking-wide relative z-20">
        Leads drop because no one knows who is supposed to reply.
      </p>
    </motion.div>
  );
};
