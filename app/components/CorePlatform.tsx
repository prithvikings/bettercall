"use client";
import React from "react";
import { motion } from "framer-motion";

const CorePlatform = () => {
  return (
    <div className="relative z-20 w-full border-b border-blue-200 font-poppins bg-white">
      <div className="relative max-w-6xl mx-auto px-6 py-24 border-x border-blue-200 min-h-[50vh] flex flex-col">
        {/* --- Corner Accents for Main Container --- */}
        <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-[3px] border-l-[3px] border-blue-500 z-10"></div>
        <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-[3px] border-r-[3px] border-blue-500 z-10"></div>
        <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-[3px] border-l-[3px] border-blue-500 z-10"></div>
        <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-[3px] border-r-[3px] border-blue-500 z-10"></div>

        {/* --- Section Header (Finanta Split Layout) --- */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8 mb-16 md:mb-24">
          {/* Left Column: Badge and Headline */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 mb-6 text-xs font-medium border border-blue-200 bg-blue-50 text-blue-700 shadow-sm">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 bg-blue-600"></span>
              </div>
              <span className="font-poppins uppercase tracking-wider">
                Core Platform
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-normal tracking-tight font-poppins text-zinc-900">
              Why can’t I just use <br className="hidden md:block" /> WhatsApp +
              calls?
            </h2>
          </div>

          {/* Right Column: Description and Button */}
          {/* Right Column: Description and Button */}
          <div className="flex flex-col items-start text-left max-w-md md:mt-12">
            <p className="text-sm text-zinc-500 font-poppins mb-6 tracking-wide leading-relaxed">
              As you grow, structure matters. Personal devices cause missed
              leads, scattered chats, and no visibility. Here’s how we turn the
              mess into a reliable system.
            </p>

            {/* --- Cyber-Brutalist CTA Button (Fixed Hover Glitch) --- */}
            <motion.div
              initial="rest"
              whileHover="hover"
              className="relative p-[3px] group cursor-pointer"
            >
              {/* Clamping Brackets (Changed to border-blue-300 on hover to prevent the "cutout" visual glitch) */}
              <motion.div
                variants={{ rest: { x: 0, y: 0 }, hover: { x: 2, y: 2 } }}
                className="absolute top-0 left-0 size-2.5 border-t-[2px] border-l-[2px] border-zinc-300 group-hover:border-blue-300 transition-colors pointer-events-none"
              ></motion.div>
              <motion.div
                variants={{ rest: { x: 0, y: 0 }, hover: { x: -2, y: 2 } }}
                className="absolute top-0 right-0 size-2.5 border-t-[2px] border-r-[2px] border-zinc-300 group-hover:border-blue-300 transition-colors pointer-events-none"
              ></motion.div>
              <motion.div
                variants={{ rest: { x: 0, y: 0 }, hover: { x: 2, y: -2 } }}
                className="absolute bottom-0 left-0 size-2.5 border-b-[2px] border-l-[2px] border-zinc-300 group-hover:border-blue-300 transition-colors pointer-events-none"
              ></motion.div>
              <motion.div
                variants={{ rest: { x: 0, y: 0 }, hover: { x: -2, y: -2 } }}
                className="absolute bottom-0 right-0 size-2.5 border-b-[2px] border-r-[2px] border-zinc-300 group-hover:border-blue-300 transition-colors pointer-events-none"
              ></motion.div>

              <button className="py-2.5 px-6 rounded-none text-sm font-mono tracking-tight transition-colors flex items-center justify-center gap-2 overflow-hidden bg-blue-600 hover:bg-blue-700 text-white shadow-sm w-full sm:w-auto">
                {/* 3D Text Flip Container */}
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
                    Explore features
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
                    Explore features
                  </motion.span>
                  <span className="invisible whitespace-nowrap">
                    Explore features
                  </span>
                </div>

                {/* Animated Arrow Icon */}
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </motion.div>
          </div>
        </div>

        {/* --- Finanta-Style Asymmetrical Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          {/* --- TOP ROW (3 Equal Cards) --- */}
          {/* Card 1: Shared Business Number */}
          <div className="group relative bg-[#faf9f5] border border-zinc-200 px-4 py-4 pb-5 flex flex-col h-[400px] transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50 overflow-hidden md:col-span-1">
            {/* Corner Accents */}
            <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

            {/* Canvas 1: Shared Number Routing Animation */}
            <div className="flex-1 w-full bg-white border border-zinc-200 mb-5 flex items-center justify-center relative z-10 overflow-hidden shadow-inner rounded-sm">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-60"></div>

              {/* Animation Container (Fixed bounds for perfect line routing) */}
              <div className="relative w-[260px] h-[130px] mt-2">
                {/* 1. Main Line Node (Top) */}
                <motion.div
                  animate={{
                    borderColor: [
                      "#e4e4e7",
                      "#3b82f6",
                      "#3b82f6",
                      "#3b82f6",
                      "#22c55e",
                      "#22c55e",
                      "#e4e4e7",
                      "#e4e4e7",
                    ],
                    boxShadow: [
                      "0 0 0 0 rgba(59,130,246,0)",
                      "0 0 0 4px rgba(59,130,246,0.15)",
                      "0 0 0 4px rgba(59,130,246,0.15)",
                      "0 0 0 4px rgba(59,130,246,0.15)",
                      "0 0 0 4px rgba(34,197,94,0.15)",
                      "0 0 0 0 rgba(34,197,94,0)",
                      "0 0 0 0 rgba(59,130,246,0)",
                      "0 0 0 0 rgba(59,130,246,0)",
                    ],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    times: [0, 0.15, 0.25, 0.35, 0.45, 0.8, 0.9, 1],
                  }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white border rounded-full flex items-center gap-2 z-20 shadow-sm"
                >
                  <motion.div
                    animate={{
                      color: [
                        "#a1a1aa",
                        "#3b82f6",
                        "#3b82f6",
                        "#3b82f6",
                        "#22c55e",
                        "#22c55e",
                        "#a1a1aa",
                        "#a1a1aa",
                      ],
                    }}
                    transition={{
                      duration: 5.5,
                      repeat: Infinity,
                      times: [0, 0.15, 0.25, 0.35, 0.45, 0.8, 0.9, 1],
                    }}
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </motion.div>
                  <span className="text-[10px] font-semibold text-zinc-700">
                    Main Line
                  </span>

                  {/* Status Indicator text that swaps out */}
                  <div className="absolute -right-[60px] top-1/2 -translate-y-1/2 w-[50px]">
                    <motion.span
                      animate={{ opacity: [1, 0, 0, 0, 0, 0, 1, 1] }}
                      transition={{
                        duration: 5.5,
                        repeat: Infinity,
                        times: [0, 0.15, 0.25, 0.35, 0.45, 0.8, 0.9, 1],
                      }}
                      className="absolute inset-0 flex items-center text-[9px] font-medium text-zinc-400"
                    >
                      Idle
                    </motion.span>
                    <motion.span
                      animate={{ opacity: [0, 1, 1, 1, 0, 0, 0, 0] }}
                      transition={{
                        duration: 5.5,
                        repeat: Infinity,
                        times: [0, 0.15, 0.25, 0.35, 0.45, 0.8, 0.9, 1],
                      }}
                      className="absolute inset-0 flex items-center text-[9px] font-medium text-blue-500"
                    >
                      Ringing
                    </motion.span>
                    <motion.span
                      animate={{ opacity: [0, 0, 0, 0, 1, 1, 0, 0] }}
                      transition={{
                        duration: 5.5,
                        repeat: Infinity,
                        times: [0, 0.15, 0.25, 0.35, 0.45, 0.8, 0.9, 1],
                      }}
                      className="absolute inset-0 flex items-center text-[9px] font-medium text-green-500"
                    >
                      Connected
                    </motion.span>
                  </div>
                </motion.div>

                {/* 2. Routing Lines (Z-10) */}
                {/* Main Trunk */}
                <motion.div
                  animate={{
                    backgroundColor: [
                      "#e4e4e7",
                      "#e4e4e7",
                      "#3b82f6",
                      "#3b82f6",
                      "#22c55e",
                      "#22c55e",
                      "#e4e4e7",
                      "#e4e4e7",
                    ],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    times: [0, 0.15, 0.25, 0.35, 0.45, 0.8, 0.9, 1],
                  }}
                  className="absolute top-[28px] left-1/2 w-px h-[24px] -translate-x-1/2 z-10"
                />
                {/* Horizontal Bridge Left */}
                <motion.div
                  animate={{
                    backgroundColor: [
                      "#e4e4e7",
                      "#e4e4e7",
                      "#3b82f6",
                      "#3b82f6",
                      "#e4e4e7",
                      "#e4e4e7",
                      "#e4e4e7",
                      "#e4e4e7",
                    ],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    times: [0, 0.15, 0.25, 0.35, 0.45, 0.8, 0.9, 1],
                  }}
                  className="absolute top-[52px] right-1/2 w-[90px] h-px z-10"
                />
                {/* Horizontal Bridge Right */}
                <motion.div
                  animate={{
                    backgroundColor: [
                      "#e4e4e7",
                      "#e4e4e7",
                      "#3b82f6",
                      "#3b82f6",
                      "#e4e4e7",
                      "#e4e4e7",
                      "#e4e4e7",
                      "#e4e4e7",
                    ],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    times: [0, 0.15, 0.25, 0.35, 0.45, 0.8, 0.9, 1],
                  }}
                  className="absolute top-[52px] left-1/2 w-[90px] h-px z-10"
                />
                {/* Drop Left */}
                <motion.div
                  animate={{
                    backgroundColor: [
                      "#e4e4e7",
                      "#e4e4e7",
                      "#3b82f6",
                      "#3b82f6",
                      "#e4e4e7",
                      "#e4e4e7",
                      "#e4e4e7",
                      "#e4e4e7",
                    ],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    times: [0, 0.15, 0.25, 0.35, 0.45, 0.8, 0.9, 1],
                  }}
                  className="absolute top-[52px] left-[40px] w-px h-[24px] z-10"
                />
                {/* Drop Center */}
                <motion.div
                  animate={{
                    backgroundColor: [
                      "#e4e4e7",
                      "#e4e4e7",
                      "#3b82f6",
                      "#3b82f6",
                      "#22c55e",
                      "#22c55e",
                      "#e4e4e7",
                      "#e4e4e7",
                    ],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    times: [0, 0.15, 0.25, 0.35, 0.45, 0.8, 0.9, 1],
                  }}
                  className="absolute top-[52px] left-1/2 w-px h-[24px] -translate-x-1/2 z-10"
                />
                {/* Drop Right */}
                <motion.div
                  animate={{
                    backgroundColor: [
                      "#e4e4e7",
                      "#e4e4e7",
                      "#3b82f6",
                      "#3b82f6",
                      "#e4e4e7",
                      "#e4e4e7",
                      "#e4e4e7",
                      "#e4e4e7",
                    ],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    times: [0, 0.15, 0.25, 0.35, 0.45, 0.8, 0.9, 1],
                  }}
                  className="absolute top-[52px] right-[40px] w-px h-[24px] z-10"
                />

                {/* 3. Teammate Avatars (Z-20) */}
                {/* Left Avatar (Fades out) */}
                <motion.div
                  animate={{
                    y: [0, 0, 0, -4, 0, 0, 0, 0],
                    borderColor: [
                      "#e4e4e7",
                      "#e4e4e7",
                      "#e4e4e7",
                      "#3b82f6",
                      "#e4e4e7",
                      "#e4e4e7",
                      "#e4e4e7",
                      "#e4e4e7",
                    ],
                    backgroundColor: [
                      "#ffffff",
                      "#ffffff",
                      "#ffffff",
                      "#eff6ff",
                      "#ffffff",
                      "#ffffff",
                      "#ffffff",
                      "#ffffff",
                    ],
                    color: [
                      "#71717a",
                      "#71717a",
                      "#71717a",
                      "#2563eb",
                      "#a1a1aa",
                      "#a1a1aa",
                      "#71717a",
                      "#71717a",
                    ],
                    opacity: [1, 1, 1, 1, 0.4, 0.4, 1, 1],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    times: [0, 0.15, 0.25, 0.35, 0.45, 0.8, 0.9, 1],
                  }}
                  className="absolute top-[76px] left-[24px] w-[32px] h-[32px] rounded-full border bg-white flex items-center justify-center text-[10px] font-bold z-20 shadow-sm"
                >
                  {" "}
                  SR{" "}
                </motion.div>

                {/* Center Avatar (Answers Call) */}
                <motion.div
                  animate={{
                    y: [0, 0, 0, -4, 0, 0, 0, 0],
                    borderColor: [
                      "#e4e4e7",
                      "#e4e4e7",
                      "#e4e4e7",
                      "#3b82f6",
                      "#22c55e",
                      "#22c55e",
                      "#e4e4e7",
                      "#e4e4e7",
                    ],
                    backgroundColor: [
                      "#ffffff",
                      "#ffffff",
                      "#ffffff",
                      "#eff6ff",
                      "#f0fdf4",
                      "#f0fdf4",
                      "#ffffff",
                      "#ffffff",
                    ],
                    color: [
                      "#71717a",
                      "#71717a",
                      "#71717a",
                      "#2563eb",
                      "#16a34a",
                      "#16a34a",
                      "#71717a",
                      "#71717a",
                    ],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    times: [0, 0.15, 0.25, 0.35, 0.45, 0.8, 0.9, 1],
                  }}
                  className="absolute top-[76px] left-1/2 -translate-x-1/2 w-[32px] h-[32px] rounded-full border bg-white flex items-center justify-center text-[10px] font-bold z-20 shadow-sm"
                >
                  {" "}
                  MK{" "}
                </motion.div>

                {/* Right Avatar (Fades out) */}
                <motion.div
                  animate={{
                    y: [0, 0, 0, -4, 0, 0, 0, 0],
                    borderColor: [
                      "#e4e4e7",
                      "#e4e4e7",
                      "#e4e4e7",
                      "#3b82f6",
                      "#e4e4e7",
                      "#e4e4e7",
                      "#e4e4e7",
                      "#e4e4e7",
                    ],
                    backgroundColor: [
                      "#ffffff",
                      "#ffffff",
                      "#ffffff",
                      "#eff6ff",
                      "#ffffff",
                      "#ffffff",
                      "#ffffff",
                      "#ffffff",
                    ],
                    color: [
                      "#71717a",
                      "#71717a",
                      "#71717a",
                      "#2563eb",
                      "#a1a1aa",
                      "#a1a1aa",
                      "#71717a",
                      "#71717a",
                    ],
                    opacity: [1, 1, 1, 1, 0.4, 0.4, 1, 1],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    times: [0, 0.15, 0.25, 0.35, 0.45, 0.8, 0.9, 1],
                  }}
                  className="absolute top-[76px] right-[24px] w-[32px] h-[32px] rounded-full border bg-white flex items-center justify-center text-[10px] font-bold z-20 shadow-sm"
                >
                  {" "}
                  AL{" "}
                </motion.div>
              </div>
            </div>

            <h3 className="font-inter font-medium text-zinc-900 text-[17px] leading-snug relative z-20">
              One number for your team
            </h3>
            <p className="font-poppins text-xs text-zinc-500 mt-1.5 tracking-wide relative z-20">
              Stop sharing personal numbers. Ring multiple devices at once and
              track every call.
            </p>
          </div>

          {/* Card 2: AI Receptionist */}
          <div className="group relative bg-[#faf9f5] border border-zinc-200 px-4 py-4 pb-5 flex flex-col h-[400px] transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50 overflow-hidden md:col-span-1">
            {/* Corner Accents */}
            <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

            {/* Canvas 2: AI Agent Story */}
            <div className="flex-1 w-full bg-white border border-zinc-200 mb-5 flex items-center justify-center relative z-10 overflow-hidden shadow-inner rounded-sm">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-60"></div>

              {/* Animation Container */}
              <div className="relative w-[240px] h-[160px] flex items-center justify-center">
                {/* 1. Main Action Pill (Call -> AI State) */}
                <motion.div
                  animate={{
                    y: [-10, 0, 0, -20, -20, -25, -25, -10],
                    scale: [0.9, 1, 1, 1.05, 1.05, 0.95, 0.95, 0.9],
                    borderColor: [
                      "#e4e4e7",
                      "#e4e4e7",
                      "#e4e4e7",
                      "#d8b4fe",
                      "#d8b4fe",
                      "#d8b4fe",
                      "#e4e4e7",
                      "#e4e4e7",
                    ],
                    backgroundColor: [
                      "#ffffff",
                      "#ffffff",
                      "#ffffff",
                      "#faf5ff",
                      "#faf5ff",
                      "#faf5ff",
                      "#ffffff",
                      "#ffffff",
                    ],
                    boxShadow: [
                      "0 1px 2px rgba(0,0,0,0.05)",
                      "0 4px 12px rgba(0,0,0,0.05)",
                      "0 4px 12px rgba(0,0,0,0.05)",
                      "0 0 0 4px rgba(168,85,247,0.15)",
                      "0 0 0 4px rgba(168,85,247,0.15)",
                      "0 1px 2px rgba(0,0,0,0.05)",
                      "0 1px 2px rgba(0,0,0,0.05)",
                      "0 1px 2px rgba(0,0,0,0.05)",
                    ],
                    opacity: [0, 1, 1, 1, 1, 1, 0, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    times: [0, 0.1, 0.25, 0.35, 0.6, 0.7, 0.9, 1],
                    ease: "easeInOut",
                  }}
                  className="absolute z-30 w-[140px] h-[36px] border rounded-full flex overflow-hidden"
                >
                  {/* State A: Ringing Call */}
                  <motion.div
                    animate={{ opacity: [0, 1, 1, 0, 0, 0, 0, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      times: [0, 0.1, 0.25, 0.35, 0.6, 0.7, 0.9, 1],
                    }}
                    className="absolute inset-0 flex items-center justify-center gap-2 px-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center animate-pulse">
                      <svg
                        className="w-2.5 h-2.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                      </svg>
                    </div>
                    <span className="text-[10px] font-medium text-zinc-700">
                      Incoming...
                    </span>
                  </motion.div>

                  {/* State B: AI Handled */}
                  <motion.div
                    animate={{ opacity: [0, 0, 0, 1, 1, 1, 0, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      times: [0, 0.1, 0.25, 0.35, 0.6, 0.7, 0.9, 1],
                    }}
                    className="absolute inset-0 flex items-center justify-center gap-2 px-3"
                  >
                    <div className="text-purple-600">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-[10px] font-semibold text-purple-700">
                      AI Active
                    </span>
                  </motion.div>
                </motion.div>

                {/* 2. AI Voice Waveform (Appears below pill during processing) */}
                <motion.div
                  animate={{
                    y: [0, 0, 0, 15, 15, 5, 5, 0],
                    opacity: [0, 0, 0, 1, 1, 0, 0, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    times: [0, 0.1, 0.25, 0.35, 0.6, 0.7, 0.9, 1],
                    ease: "easeInOut",
                  }}
                  className="absolute z-20 flex items-center gap-1"
                >
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ height: ["4px", "16px", "4px"] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut",
                      }}
                      className="w-1 bg-purple-300 rounded-full"
                    />
                  ))}
                </motion.div>

                {/* 3. Successful Booking Card (Slides up at the end) */}
                <motion.div
                  animate={{
                    y: [30, 30, 30, 30, 30, 15, 15, 30],
                    opacity: [0, 0, 0, 0, 0, 1, 1, 0],
                    scale: [0.9, 0.9, 0.9, 0.9, 0.9, 1, 1, 0.9],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    times: [0, 0.1, 0.25, 0.35, 0.6, 0.7, 0.9, 1],
                    ease: "backOut",
                  }}
                  className="absolute z-10 w-[150px] bg-white border border-zinc-200 shadow-lg rounded-md p-2.5 flex flex-col gap-1.5"
                >
                  <div className="flex items-center gap-1.5 border-b border-zinc-100 pb-1.5">
                    <div className="w-3.5 h-3.5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-2.5 h-2.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-[9px] font-bold text-zinc-800">
                      Demo Booked
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-500">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span className="text-[8px] font-medium">
                      Tomorrow, 2:00 PM
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            <h3 className="font-inter font-medium text-zinc-900 text-[17px] leading-snug relative z-20">
              Never miss a customer call again.
            </h3>
            <p className="font-poppins text-xs text-zinc-500 mt-1.5 tracking-wide relative z-20">
              Manages customer communication and appointment bookings
              automatically.
            </p>
          </div>

          {/* Card 3: Team Collaboration */}
          <div className="group relative bg-[#faf9f5] border border-zinc-200 px-4 py-4 pb-5 flex flex-col h-[400px] transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50 overflow-hidden md:col-span-1">
            {/* Corner Accents */}
            <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

            {/* Canvas 3: Collaboration Story */}
            <div className="flex-1 w-full bg-white border border-zinc-200 mb-5 flex items-center justify-center relative z-10 overflow-hidden shadow-inner rounded-sm">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-60"></div>

              {/* Animation Container */}
              <div className="relative w-[220px] h-[160px] flex items-center justify-center">
                {/* 1. Main Ticket */}
                <motion.div
                  animate={{
                    y: [15, 0, 0, 0, 0, 0, -15, -15],
                    opacity: [0, 1, 1, 1, 1, 1, 0, 0],
                    scale: [0.95, 1, 1, 1, 1, 1, 0.95, 0.95],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    times: [0, 0.1, 0.25, 0.4, 0.6, 0.8, 0.9, 1],
                    ease: "easeInOut",
                  }}
                  className="w-full bg-white border border-zinc-200 shadow-sm rounded-md flex flex-col relative z-20"
                >
                  {/* Header */}
                  <div className="p-2.5 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50 rounded-t-md">
                    <div className="flex flex-col gap-1.5">
                      <div className="w-16 h-1.5 bg-zinc-800 rounded-full"></div>
                      <div className="w-24 h-1 bg-zinc-300 rounded-full"></div>
                    </div>
                    {/* Assignee Badge Area */}
                    <div className="relative w-5 h-5">
                      {/* Empty State (Dashed) */}
                      <div className="absolute inset-0 rounded-full border border-dashed border-zinc-300 bg-zinc-50 flex items-center justify-center">
                        <svg
                          className="w-2.5 h-2.5 text-zinc-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4v16m8-8H4"
                          ></path>
                        </svg>
                      </div>
                      {/* Filled State (Pops in at 0.25) */}
                      <motion.div
                        animate={{
                          scale: [0, 0, 1, 1, 1, 1, 1, 0],
                          opacity: [0, 0, 1, 1, 1, 1, 1, 0],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          times: [0, 0.1, 0.25, 0.4, 0.6, 0.8, 0.9, 1],
                          ease: "backOut",
                        }}
                        className="absolute inset-0 rounded-full bg-blue-100 border border-blue-200 text-blue-700 flex items-center justify-center text-[8px] font-bold z-10"
                      >
                        AK
                      </motion.div>
                    </div>
                  </div>

                  {/* Body Text Placeholders */}
                  <div className="p-3 flex flex-col gap-2">
                    <div className="w-full h-1.5 bg-zinc-100 rounded-full"></div>
                    <div className="w-4/5 h-1.5 bg-zinc-100 rounded-full"></div>
                  </div>

                  {/* Internal Note (Expands at 0.4) */}
                  <motion.div
                    animate={{
                      height: [0, 0, 0, 52, 52, 52, 52, 0],
                      opacity: [0, 0, 0, 1, 1, 1, 1, 0],
                      marginTop: [0, 0, 0, 4, 4, 4, 4, 0],
                      paddingTop: [0, 0, 0, 8, 8, 8, 8, 0],
                      paddingBottom: [0, 0, 0, 8, 8, 8, 8, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      times: [0, 0.1, 0.25, 0.4, 0.6, 0.8, 0.9, 1],
                      ease: "easeInOut",
                    }}
                    className="mx-2 mb-2 bg-yellow-50 border border-yellow-200 rounded-sm overflow-hidden flex flex-col px-2.5 relative"
                  >
                    <span className="text-[8px] font-semibold text-yellow-800 mb-1.5">
                      Internal Note
                    </span>
                    <div className="w-full h-1 bg-yellow-200 rounded-full mb-1"></div>
                    <div className="w-2/3 h-1 bg-yellow-200 rounded-full"></div>

                    {/* Second Teammate "Read" Avatar (Pops in at 0.6) */}
                    <motion.div
                      animate={{
                        scale: [0, 0, 0, 0, 1, 1, 1, 0],
                        opacity: [0, 0, 0, 0, 1, 1, 1, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        times: [0, 0.1, 0.25, 0.4, 0.6, 0.8, 0.9, 1],
                        ease: "backOut",
                      }}
                      className="absolute right-2 bottom-2 w-4 h-4 rounded-full bg-green-100 border border-green-200 flex items-center justify-center z-10 shadow-sm"
                    >
                      <span className="text-[6px] font-bold text-green-700">
                        SR
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* 2. Floating "Multiplayer" Cursor */}
                <motion.div
                  animate={{
                    x: [60, 60, 65, 0, 0, 0, 60, 60],
                    y: [40, 40, -10, 20, 20, 20, 40, 40],
                    opacity: [0, 0, 1, 1, 0, 0, 0, 0],
                    scale: [1, 1, 0.9, 1, 0.9, 1, 1, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    times: [0, 0.1, 0.25, 0.4, 0.5, 0.6, 0.8, 1],
                    ease: "easeInOut",
                  }}
                  className="absolute z-30 pointer-events-none drop-shadow-md origin-top-left"
                >
                  <svg
                    className="w-4 h-4 text-zinc-800"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2.9-3.2-7.4-4.4 4.5z"></path>
                  </svg>
                  <div className="bg-zinc-800 text-white text-[7px] font-medium px-1.5 py-0.5 rounded-sm absolute top-4 left-3 whitespace-nowrap shadow-sm">
                    Alex is assigning...
                  </div>
                </motion.div>
              </div>
            </div>

            <h3 className="font-inter font-medium text-zinc-900 text-[17px] leading-snug relative z-20">
              Keep your entire team aligned.
            </h3>
            <p className="font-poppins text-xs text-zinc-500 mt-1.5 tracking-wide relative z-20">
              Assign owners, leave internal notes, and see exactly who handled
              the last conversation.
            </p>
          </div>

          {/* --- BOTTOM ROW (2/3 Split) --- */}

          {/* Card 4: Automations & Follow-ups (Wide Card) */}
          <div className="group relative bg-[#faf9f5] border border-zinc-200 px-4 py-4 pb-5 flex flex-col h-[400px] transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50 overflow-hidden md:col-span-2">
            {/* Corner Accents */}
            <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

            {/* Canvas 4: Workflow/Nodes Story */}
            <div className="flex-1 w-full bg-white border border-zinc-200 mb-5 flex items-center justify-center relative z-10 overflow-hidden shadow-inner rounded-sm">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-60"></div>

              {/* Animation Container - Scaled slightly for perfect responsive fit */}
              <div className="relative w-[320px] h-[160px] scale-90 sm:scale-100 flex-shrink-0">
                {/* SVG Connecting Lines (Base & Animated) */}
                <svg
                  width="320"
                  height="160"
                  className="absolute inset-0 z-10 pointer-events-none"
                >
                  {/* Static Base Paths */}
                  <path
                    d="M 100 80 L 120 80"
                    stroke="#e4e4e7"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M 190 80 C 205 80, 205 40, 220 40"
                    stroke="#e4e4e7"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M 190 80 C 205 80, 205 120, 220 120"
                    stroke="#e4e4e7"
                    strokeWidth="2"
                    fill="none"
                  />

                  {/* Animated Flow Paths */}
                  <motion.path
                    d="M 100 80 L 120 80"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    animate={{
                      pathLength: [0, 0, 1, 1, 1, 1, 1, 0],
                      opacity: [0, 0, 1, 1, 1, 1, 0, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      times: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.9, 1],
                      ease: "easeInOut",
                    }}
                  />
                  <motion.path
                    d="M 190 80 C 205 80, 205 40, 220 40"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    animate={{
                      pathLength: [0, 0, 0, 0, 1, 1, 1, 0],
                      opacity: [0, 0, 0, 0, 1, 1, 0, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      times: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.9, 1],
                      ease: "easeInOut",
                    }}
                  />
                  <motion.path
                    d="M 190 80 C 205 80, 205 120, 220 120"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    animate={{
                      pathLength: [0, 0, 0, 0, 1, 1, 1, 0],
                      opacity: [0, 0, 0, 0, 1, 1, 0, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      times: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.9, 1],
                      ease: "easeInOut",
                    }}
                  />
                </svg>

                {/* --- Workflow Nodes --- */}

                {/* Node A: Trigger (Missed Call) */}
                <motion.div
                  animate={{
                    borderColor: [
                      "#e4e4e7",
                      "#ef4444",
                      "#ef4444",
                      "#ef4444",
                      "#ef4444",
                      "#ef4444",
                      "#e4e4e7",
                      "#e4e4e7",
                    ],
                    boxShadow: [
                      "0 1px 2px rgba(0,0,0,0.05)",
                      "0 0 0 4px rgba(239,68,68,0.15)",
                      "0 0 0 4px rgba(239,68,68,0.15)",
                      "0 0 0 4px rgba(239,68,68,0.15)",
                      "0 0 0 4px rgba(239,68,68,0.15)",
                      "0 0 0 4px rgba(239,68,68,0.15)",
                      "0 1px 2px rgba(0,0,0,0.05)",
                      "0 1px 2px rgba(0,0,0,0.05)",
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    times: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.9, 1],
                  }}
                  className="absolute left-0 top-[64px] w-[100px] h-[32px] bg-white border rounded-md flex items-center gap-1.5 px-2 z-20"
                >
                  <motion.div
                    animate={{
                      color: [
                        "#a1a1aa",
                        "#ef4444",
                        "#ef4444",
                        "#ef4444",
                        "#ef4444",
                        "#ef4444",
                        "#a1a1aa",
                        "#a1a1aa",
                      ],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      times: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.9, 1],
                    }}
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </motion.div>
                  <span className="text-[9px] font-semibold text-zinc-700">
                    Missed Call
                  </span>
                </motion.div>

                {/* Node B: Condition (Delay) */}
                <motion.div
                  animate={{
                    borderColor: [
                      "#e4e4e7",
                      "#e4e4e7",
                      "#e4e4e7",
                      "#f59e0b",
                      "#f59e0b",
                      "#f59e0b",
                      "#e4e4e7",
                      "#e4e4e7",
                    ],
                    boxShadow: [
                      "0 1px 2px rgba(0,0,0,0.05)",
                      "0 1px 2px rgba(0,0,0,0.05)",
                      "0 1px 2px rgba(0,0,0,0.05)",
                      "0 0 0 4px rgba(245,158,11,0.15)",
                      "0 0 0 4px rgba(245,158,11,0.15)",
                      "0 0 0 4px rgba(245,158,11,0.15)",
                      "0 1px 2px rgba(0,0,0,0.05)",
                      "0 1px 2px rgba(0,0,0,0.05)",
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    times: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.9, 1],
                  }}
                  className="absolute left-[120px] top-[64px] w-[70px] h-[32px] bg-white border rounded-md flex items-center justify-center gap-1.5 px-2 z-20"
                >
                  <motion.div
                    animate={{
                      rotateZ: [0, 0, 0, 180, 180, 180, 0, 0],
                      color: [
                        "#a1a1aa",
                        "#a1a1aa",
                        "#a1a1aa",
                        "#d97706",
                        "#d97706",
                        "#d97706",
                        "#a1a1aa",
                        "#a1a1aa",
                      ],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      times: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.9, 1],
                      ease: "backOut",
                    }}
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </motion.div>
                  <span className="text-[9px] font-semibold text-zinc-700">
                    Wait
                  </span>
                </motion.div>

                {/* Node C: Action 1 (WhatsApp Auto-reply) */}
                <motion.div
                  animate={{
                    borderColor: [
                      "#e4e4e7",
                      "#e4e4e7",
                      "#e4e4e7",
                      "#e4e4e7",
                      "#e4e4e7",
                      "#22c55e",
                      "#e4e4e7",
                      "#e4e4e7",
                    ],
                    boxShadow: [
                      "0 1px 2px rgba(0,0,0,0.05)",
                      "0 1px 2px rgba(0,0,0,0.05)",
                      "0 1px 2px rgba(0,0,0,0.05)",
                      "0 1px 2px rgba(0,0,0,0.05)",
                      "0 1px 2px rgba(0,0,0,0.05)",
                      "0 0 0 4px rgba(34,197,94,0.15)",
                      "0 1px 2px rgba(0,0,0,0.05)",
                      "0 1px 2px rgba(0,0,0,0.05)",
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    times: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.9, 1],
                  }}
                  className="absolute left-[220px] top-[24px] w-[100px] h-[32px] bg-white border rounded-md flex items-center gap-1.5 px-2 z-20"
                >
                  <motion.div
                    animate={{
                      color: [
                        "#a1a1aa",
                        "#a1a1aa",
                        "#a1a1aa",
                        "#a1a1aa",
                        "#a1a1aa",
                        "#16a34a",
                        "#a1a1aa",
                        "#a1a1aa",
                      ],
                      scale: [1, 1, 1, 1, 1, 1.2, 1, 1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      times: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.9, 1],
                    }}
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      ></path>
                    </svg>
                  </motion.div>
                  <span className="text-[9px] font-semibold text-zinc-700">
                    Auto-reply WA
                  </span>
                </motion.div>

                {/* Node D: Action 2 (Create Task) */}
                <motion.div
                  animate={{
                    borderColor: [
                      "#e4e4e7",
                      "#e4e4e7",
                      "#e4e4e7",
                      "#e4e4e7",
                      "#e4e4e7",
                      "#3b82f6",
                      "#e4e4e7",
                      "#e4e4e7",
                    ],
                    boxShadow: [
                      "0 1px 2px rgba(0,0,0,0.05)",
                      "0 1px 2px rgba(0,0,0,0.05)",
                      "0 1px 2px rgba(0,0,0,0.05)",
                      "0 1px 2px rgba(0,0,0,0.05)",
                      "0 1px 2px rgba(0,0,0,0.05)",
                      "0 0 0 4px rgba(59,130,246,0.15)",
                      "0 1px 2px rgba(0,0,0,0.05)",
                      "0 1px 2px rgba(0,0,0,0.05)",
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    times: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.9, 1],
                  }}
                  className="absolute left-[220px] top-[104px] w-[100px] h-[32px] bg-white border rounded-md flex items-center gap-1.5 px-2 z-20"
                >
                  <motion.div
                    animate={{
                      color: [
                        "#a1a1aa",
                        "#a1a1aa",
                        "#a1a1aa",
                        "#a1a1aa",
                        "#a1a1aa",
                        "#2563eb",
                        "#a1a1aa",
                        "#a1a1aa",
                      ],
                      scale: [1, 1, 1, 1, 1, 1.2, 1, 1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      times: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.9, 1],
                    }}
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      ></path>
                    </svg>
                  </motion.div>
                  <span className="text-[9px] font-semibold text-zinc-700">
                    Create Task
                  </span>
                </motion.div>
              </div>
            </div>

            <div className="max-w-md">
              <h3 className="font-inter font-medium text-zinc-900 text-[17px] leading-snug relative z-20">
                Follow-ups happen automatically.
              </h3>
              <p className="font-poppins text-xs max-w-[90%] text-zinc-500 mt-1.5 tracking-wide relative z-20">
                Missed calls instantly trigger recovery workflows, ensuring no
                lead slips through the cracks.
              </p>
            </div>
          </div>

          {/* Card 5: WhatsApp CRM (Narrow Card) */}
          <div className="group relative bg-[#faf9f5] border border-zinc-200 px-4 py-4 pb-5 flex flex-col h-[400px] transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50 overflow-hidden md:col-span-1">
            {/* Corner Accents */}
            <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

            {/* Canvas 5: Shared Inbox Story */}
            <div className="flex-1 w-full bg-white border border-zinc-200 mb-5 flex items-center justify-center relative z-10 overflow-hidden shadow-inner rounded-sm">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-60"></div>

              {/* Animation Container */}
              <div className="relative w-[200px] h-[180px] flex items-center justify-center pt-4">
                {/* Mini CRM Window Mockup */}
                <div className="w-full h-[150px] bg-white border border-zinc-200 shadow-sm rounded-md flex flex-col overflow-hidden relative z-20">
                  {/* CRM Header */}
                  <div className="h-7 bg-zinc-50 border-b border-zinc-100 flex items-center justify-between px-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                        <svg
                          className="w-2 h-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                        </svg>
                      </div>
                      <div className="h-1.5 w-16 bg-zinc-200 rounded-full"></div>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
                    </div>
                  </div>

                  {/* Chat Area */}
                  <div className="flex-1 p-2 flex flex-col justify-end gap-2.5 pb-3">
                    {/* 1. Customer Incoming Message */}
                    <motion.div
                      animate={{
                        y: [15, 0, 0, 0, -10, -10],
                        opacity: [0, 1, 1, 1, 0, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        times: [0, 0.1, 0.7, 0.85, 0.95, 1],
                        ease: "easeOut",
                      }}
                      className="self-start flex flex-col gap-1.5 max-w-[85%]"
                    >
                      <div className="bg-[#dcfce7] border border-[#bbf7d0] text-[#166534] px-2 py-1.5 rounded-md rounded-tl-none text-[8px] font-medium shadow-sm">
                        Hi, I need a quote for 10 users.
                      </div>

                      {/* Automated CRM Label */}
                      <motion.div
                        animate={{
                          scale: [0, 0, 1, 1, 1, 1],
                          opacity: [0, 0, 1, 1, 0, 0],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          times: [0, 0.15, 0.25, 0.85, 0.95, 1],
                          ease: "backOut",
                        }}
                        className="flex gap-1 origin-top-left"
                      >
                        <span className="bg-orange-50 text-orange-600 border border-orange-200 text-[6px] px-1.5 py-0.5 rounded-[3px] font-bold uppercase tracking-wider flex items-center gap-0.5">
                          <svg
                            className="w-1.5 h-1.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-1.245-1.14-1.85-.16-.605-.12-1.218.06-1.85.18-.632.483-1.282.88-1.921a1 1 0 00-.355-1.121v.001zM7 11a5 5 0 1110 0c0 1.25-.452 2.39-1.201 3.264a2.5 2.5 0 01-3.666-.098A4.953 4.953 0 0110 12.5a4.953 4.953 0 01-1.633 1.666 2.5 2.5 0 01-3.666.098A4.985 4.985 0 017 11z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          High Intent
                        </span>
                      </motion.div>
                    </motion.div>

                    {/* 2. Typing Indicator (Micro-interaction) */}
                    <motion.div
                      animate={{ opacity: [0, 0, 0, 1, 0, 0, 0] }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        times: [0, 0.1, 0.35, 0.4, 0.5, 0.6, 1],
                      }}
                      className="self-end flex items-center gap-0.5 bg-zinc-100 border border-zinc-200 px-1.5 py-1 rounded-md rounded-tr-none mr-4"
                    >
                      <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: 0,
                        }}
                        className="w-1 h-1 bg-zinc-400 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: 0.1,
                        }}
                        className="w-1 h-1 bg-zinc-400 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: 0.2,
                        }}
                        className="w-1 h-1 bg-zinc-400 rounded-full"
                      />
                    </motion.div>

                    {/* 3. Team Reply (CRM Side) */}
                    <motion.div
                      animate={{
                        y: [10, 10, 10, 10, 0, 0, -10],
                        opacity: [0, 0, 0, 0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        times: [0, 0.1, 0.4, 0.5, 0.55, 0.85, 0.95],
                      }}
                      className="self-end flex items-end gap-1.5 max-w-[85%]"
                    >
                      <div className="bg-blue-50 border border-blue-200 text-blue-800 px-2 py-1.5 rounded-md rounded-tr-none text-[8px] font-medium shadow-sm">
                        Absolutely. Here is the pricing deck!
                      </div>
                      {/* Teammate Avatar attached to outgoing message */}
                      <div className="w-4 h-4 rounded-full bg-zinc-800 text-white flex items-center justify-center text-[6px] font-bold shadow-sm flex-shrink-0">
                        SR
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="font-inter font-medium text-zinc-900 text-[17px] leading-snug relative z-20">
              WhatsApp chats made manageable
            </h3>
            <p className="font-poppins text-xs max-w-[80%] text-zinc-500 mt-1.5 tracking-wide relative z-20">
              Chat with customers on WhatsApp without switching devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorePlatform;
