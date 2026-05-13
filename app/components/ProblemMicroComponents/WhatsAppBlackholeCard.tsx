"use client";
import React from "react";
import { motion } from "framer-motion";

// --- Framer Motion Variants ---
const cardVariants = {
  idle: {},
  hover: {},
};

// We use a custom variant function to stagger the messages based on index (i)
const messageVariants = {
  idle: (i: number) => ({
    x: 0,
    y: 0,
    // Only show the first message statically in the phone when idle
    opacity: i === 0 ? 1 : 0,
    scale: 0.9,
    backgroundColor: "#dcfce7", // Emerald-50
    color: "#166534", // Emerald-800
    borderColor: "#bbf7d0", // Emerald-200
  }),
  hover: (i: number) => ({
    x: [0, 0, 85, 85], // Shoot out of the phone
    y: [0, 0, 0, 25], // Drop down after hitting the barrier
    opacity: [0, 1, 1, 0],
    scale: [0.8, 1, 1, 0.8],
    // State shift: Turns from "Success" (Green) to "Blocked/Error" (Zinc/Red)
    backgroundColor: ["#dcfce7", "#dcfce7", "#f4f4f5", "#f4f4f5"],
    color: ["#166534", "#166534", "#71717a", "#71717a"],
    borderColor: ["#bbf7d0", "#bbf7d0", "#e4e4e7", "#e4e4e7"],
    transition: {
      duration: 3,
      repeat: Infinity,
      delay: i * 1.2,
      times: [0, 0.15, 0.5, 0.8],
      ease: "easeInOut",
    },
  }),
};

const barrierVariants = {
  idle: {
    opacity: 0.4,
    scaleY: 0.9,
    boxShadow: "0 0 0px rgba(248, 113, 113, 0)",
  },
  hover: {
    opacity: 1,
    scaleY: 1,
    boxShadow: "0 0 12px rgba(248, 113, 113, 0.4)", // Red glow on active block
    transition: {
      duration: 0.5,
    },
  },
};

export const WhatsAppBlackholeCard = () => {
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

      {/* --- Canvas 2: The "Device Trap" Node --- */}
      <div className="flex-1 w-full bg-white border border-zinc-200 mb-4 flex items-center justify-between relative z-10 overflow-hidden shadow-inner group-hover:shadow-md transition-shadow duration-500 px-4">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-50"></div>

        {/* Personal Phone Mockup */}
        <div className="w-[35%] h-[70%] border-2 border-zinc-200 bg-zinc-50/80 rounded-xl flex flex-col justify-end p-2 gap-2 relative z-20 shadow-sm">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-zinc-300 rounded-full"></div>

          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              custom={i}
              variants={messageVariants}
              className="self-end px-2 py-1.5 text-[8px] font-medium rounded-t-lg rounded-bl-lg border w-fit max-w-full shadow-sm whitespace-nowrap overflow-hidden z-30"
            >
              Quote sent.
            </motion.div>
          ))}
        </div>

        {/* The Invisible Barrier */}
        <motion.div
          variants={barrierVariants}
          className="absolute left-[55%] top-6 bottom-6 w-[2px] bg-gradient-to-b from-transparent via-red-500 to-transparent z-10"
        ></motion.div>

        {/* Team Dashboard Mockup */}
        <div className="w-[35%] h-[70%] border-2 border-dashed border-zinc-200 bg-white flex flex-col p-2 gap-2 relative z-20 group-hover:border-red-200 transition-colors duration-500">
          <div className="h-1.5 w-8 bg-zinc-200 mb-2"></div>
          <div className="h-4 w-full bg-zinc-50 border border-zinc-100 flex items-center justify-center transition-colors duration-500 group-hover:bg-red-50 group-hover:border-red-100">
            <span className="text-[7px] text-zinc-400 group-hover:text-red-400 transition-colors duration-500">
              No Data
            </span>
          </div>
          <div className="h-4 w-full bg-zinc-50 border border-zinc-100 flex items-center justify-center transition-colors duration-500 group-hover:bg-red-50 group-hover:border-red-100">
            <span className="text-[7px] text-zinc-400 group-hover:text-red-400 transition-colors duration-500">
              No Data
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#faf9f5] to-transparent z-10 pointer-events-none transition-colors duration-300 group-hover:from-zinc-50"></div>

      <h3 className="font-inter font-medium text-zinc-900 text-lg relative z-20">
        The WhatsApp Blackhole
      </h3>
      <p className="font-poppins text-xs text-zinc-500 mt-1 tracking-wide relative z-20 max-w-[280px]">
        Conversations stuck on personal devices with zero team visibility.
      </p>
    </motion.div>
  );
};
