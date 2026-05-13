"use client";
import React from "react";
import { motion } from "framer-motion";

// --- Hover Variants ---
const cardVariants = {
  idle: {},
  hover: {},
};

// 1. The Main Vertical Stem
// Starts at 0%, finishes at 10%
const beamStem = {
  idle: { top: 0, opacity: 0 },
  hover: {
    top: ["0px", "15px", "15px", "15px"],
    opacity: [0, 1, 0, 0],
    transition: {
      duration: 4, // Slower, 4-second loop
      repeat: Infinity,
      times: [0, 0.09, 0.1, 1],
      ease: "linear",
    },
  },
};

// 2. The Horizontal Splitters (Left and Right)
// Waits till 10%, travels slowly until 30%
const beamLeft = {
  idle: { right: 0, opacity: 0 },
  hover: {
    right: ["0px", "0px", "75px", "75px", "75px"],
    opacity: [0, 0, 1, 0, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      times: [0, 0.09, 0.3, 0.31, 1],
      ease: "linear",
    },
  },
};

const beamRight = {
  idle: { left: 0, opacity: 0 },
  hover: {
    left: ["0px", "0px", "75px", "75px", "75px"],
    opacity: [0, 0, 1, 0, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      times: [0, 0.09, 0.3, 0.31, 1],
      ease: "linear",
    },
  },
};

// 3. The Vertical Drops to the Agents
// Waits till 30%, drops until 40%
const beamDrop = {
  idle: { top: 0, opacity: 0 },
  hover: {
    top: ["0px", "0px", "15px", "15px", "15px"],
    opacity: [0, 0, 1, 0, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      times: [0, 0.29, 0.4, 0.41, 1],
      ease: "linear",
    },
  },
};

// 4. The Agent Receivers (Ringing)
// Ignites at 40%, fades out by 60%. Sleeps until 100%.
const receiverPulse = {
  idle: {
    borderColor: "#e4e4e7",
    boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
  },
  hover: {
    borderColor: ["#e4e4e7", "#e4e4e7", "#3b82f6", "#e4e4e7", "#e4e4e7"],
    boxShadow: [
      "0 1px 2px 0 rgba(0,0,0,0.05)",
      "0 1px 2px 0 rgba(0,0,0,0.05)",
      "0 0 12px 2px rgba(59,130,246,0.3)",
      "0 1px 2px 0 rgba(0,0,0,0.05)",
      "0 1px 2px 0 rgba(0,0,0,0.05)",
    ],
    transition: {
      duration: 4,
      repeat: Infinity,
      times: [0, 0.39, 0.45, 0.6, 1],
    },
  },
};

// Agent 2 (The one who actually answers the call)
// Ignites at 40%, turns green at 55%, holds until 85%. Sleeps until 100%.
const receiverAnswer = {
  idle: {
    borderColor: "#e4e4e7",
    boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
  },
  hover: {
    borderColor: [
      "#e4e4e7",
      "#e4e4e7",
      "#3b82f6",
      "#22c55e",
      "#22c55e",
      "#e4e4e7",
    ],
    boxShadow: [
      "0 1px 2px 0 rgba(0,0,0,0.05)",
      "0 1px 2px 0 rgba(0,0,0,0.05)",
      "0 0 12px 2px rgba(59,130,246,0.3)",
      "0 0 12px 2px rgba(34,197,94,0.3)",
      "0 0 12px 2px rgba(34,197,94,0.3)",
      "0 1px 2px 0 rgba(0,0,0,0.05)",
    ],
    transition: {
      duration: 4,
      repeat: Infinity,
      times: [0, 0.39, 0.45, 0.55, 0.85, 1],
    },
  },
};

export const SharedNumberCard = () => {
  return (
    <motion.div
      initial="idle"
      whileHover="hover"
      variants={cardVariants}
      className="group relative bg-[#faf9f5] border border-zinc-200 px-4 py-4 pb-5 flex flex-col h-[400px] transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50 md:col-span-1 cursor-default"
    >
      {/* Corner Accents */}
      <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

      {/* --- Canvas: The Routing Circuit --- */}
      <div className="flex-1 w-full bg-white border border-zinc-200 mb-5 flex flex-col items-center justify-start relative z-10 overflow-hidden shadow-inner pt-6">
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:1rem_1rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] opacity-80"></div>

        {/* 1. Incoming Caller Node (Top) */}
        <div className="bg-white border border-zinc-200 px-3 py-1.5 shadow-sm flex items-center gap-2 z-20 relative rounded-full">
          <div className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
          <span className="text-[10px] font-mono font-medium text-zinc-700 tracking-tight">
            +91 7672812803
          </span>
        </div>

        {/* 2. Cyber-Brutalist Routing Lines & Smooth Light Beams */}
        <div className="relative w-full h-[60px] flex justify-center z-10">
          {/* Main vertical stem */}
          <div className="absolute top-0 w-px h-[30px] bg-zinc-200">
            <motion.div
              variants={beamStem}
              className="absolute left-1/2 -translate-x-1/2 w-[2px] h-[15px] bg-blue-500 shadow-[0_0_8px_1px_#3b82f6] rounded-full z-20"
            />
          </div>

          {/* Horizontal splitter (Left Side) */}
          <div className="absolute top-[30px] right-1/2 w-[90px] h-px bg-zinc-200">
            <motion.div
              variants={beamLeft}
              className="absolute top-1/2 -translate-y-1/2 h-[2px] w-[15px] bg-blue-500 shadow-[0_0_8px_1px_#3b82f6] rounded-full z-20"
            />
          </div>

          {/* Horizontal splitter (Right Side) */}
          <div className="absolute top-[30px] left-1/2 w-[90px] h-px bg-zinc-200">
            <motion.div
              variants={beamRight}
              className="absolute top-1/2 -translate-y-1/2 h-[2px] w-[15px] bg-blue-500 shadow-[0_0_8px_1px_#3b82f6] rounded-full z-20"
            />
          </div>

          {/* Three vertical drops */}
          {/* Left Drop */}
          <div className="absolute top-[30px] left-[calc(50%-90px)] w-px h-[30px] bg-zinc-200">
            <motion.div
              variants={beamDrop}
              className="absolute left-1/2 -translate-x-1/2 w-[2px] h-[15px] bg-blue-500 shadow-[0_0_8px_1px_#3b82f6] rounded-full z-20"
            />
          </div>
          {/* Center Drop */}
          <div className="absolute top-[30px] left-1/2 w-px h-[30px] bg-zinc-200">
            <motion.div
              variants={beamDrop}
              className="absolute left-1/2 -translate-x-1/2 w-[2px] h-[15px] bg-blue-500 shadow-[0_0_8px_1px_#3b82f6] rounded-full z-20"
            />
          </div>
          {/* Right Drop */}
          <div className="absolute top-[30px] right-[calc(50%-90px)] w-px h-[30px] bg-zinc-200">
            <motion.div
              variants={beamDrop}
              className="absolute left-1/2 -translate-x-1/2 w-[2px] h-[15px] bg-blue-500 shadow-[0_0_8px_1px_#3b82f6] rounded-full z-20"
            />
          </div>
        </div>

        {/* 3. Team Member Receivers (Bottom) */}
        <div className="flex items-center justify-center gap-4 z-20 w-full px-4">
          {/* Agent 1 (Mobile) */}
          <motion.div
            variants={receiverPulse}
            className="bg-white border p-2 flex flex-col items-center gap-1.5 w-[70px]"
          >
            <div className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center text-[10px] font-bold text-zinc-600 border border-zinc-200">
              SR
            </div>
            <span className="text-[9px] font-medium text-zinc-500">Mobile</span>
          </motion.div>

          {/* Agent 2 (Web App - Answers!) */}
          <motion.div
            variants={receiverAnswer}
            className="bg-white border p-2 flex flex-col items-center gap-1.5 w-[70px] relative"
          >
            <div className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center text-[10px] font-bold text-zinc-600 border border-zinc-200">
              MK
            </div>
            <span className="text-[9px] font-medium text-zinc-500">
              Web App
            </span>
          </motion.div>

          {/* Agent 3 (Desktop) */}
          <motion.div
            variants={receiverPulse}
            className="bg-white border p-2 flex flex-col items-center gap-1.5 w-[70px]"
          >
            <div className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center text-[10px] font-bold text-zinc-600 border border-zinc-200">
              AL
            </div>
            <span className="text-[9px] font-medium text-zinc-500">
              Desktop
            </span>
          </motion.div>
        </div>
      </div>

      <h3 className="font-inter font-medium text-zinc-900 text-[17px] leading-snug relative z-20">
        One number for your team
      </h3>
      <p className="font-poppins text-xs text-zinc-500 mt-1.5 tracking-wide relative z-20">
        Stop sharing personal numbers. Ring multiple devices at once and track
        every call.
      </p>
    </motion.div>
  );
};
