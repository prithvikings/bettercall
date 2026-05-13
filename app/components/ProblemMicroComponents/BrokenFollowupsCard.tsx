"use client";
import React from "react";
import { motion } from "framer-motion";

// --- Framer Motion Variants ---
const containerVariants = {
  idle: {},
  hover: {},
};

// Controls the physical "press" effect of the dashboard on hover
const dashboardVariants = {
  idle: {
    y: 0,
    scale: 1,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
  },
  hover: {
    y: 4,
    scale: 0.98,
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
    transition: { type: "spring", stiffness: 400, damping: 25 },
  },
};

// Controls the staggered list animation when coming into view
const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Delay between each row appearing
      delayChildren: 0.2,
    },
  },
};

// Controls the individual blur & slide-up of each row
const rowVariants = {
  hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const BrokenFollowupsCard = () => {
  return (
    <motion.div
      initial="idle"
      whileHover="hover"
      variants={containerVariants}
      // REMOVED 'overflow-hidden' so the Cyber-Brutalist corners render perfectly
      className="group relative bg-[#faf9f5] border border-zinc-200 px-3.5 py-3 pb-4 flex flex-col h-[350px] transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50 cursor-default"
    >
      {/* --- Cyber-Brutalist Corner Accents --- */}
      <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

      {/* --- Canvas 3: The "Neglected Inbox" Node --- */}
      <div className="flex-1 w-full bg-[#faf9f5] mb-4 flex items-end justify-center relative z-10 overflow-hidden">
        {/* --- Ambient Blur Behind the Dashboard --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-zinc-400/20 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

        {/* --- The Dashboard & Hatched Wrapper --- */}
        <motion.div
          variants={dashboardVariants}
          className="w-[92%] h-[92%] pt-[6px] px-[6px] bg-[repeating-linear-gradient(-45deg,#f4f4f5_0px,#f4f4f5_2px,transparent_2px,transparent_8px)] rounded-t-2xl relative z-10 transition-colors duration-500 group-hover:bg-[repeating-linear-gradient(-45deg,#e4e4e7_0px,#e4e4e7_2px,transparent_2px,transparent_8px)] origin-bottom transform-gpu"
        >
          {/* --- The Inner Dashboard UI Window --- */}
          <div className="w-full h-full bg-white border-t border-x border-zinc-200 rounded-t-xl flex flex-col overflow-hidden relative">
            {/* Header (Frosted Glass Blur) */}
            <div className="bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200 px-3 py-2 flex items-center gap-2 relative z-20">
              <svg
                className="w-3.5 h-3.5 text-zinc-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
              <span className="text-xs font-semibold text-zinc-800 font-poppins">
                Recent Inbound
              </span>
            </div>

            {/* --- Animated Staggered List Container --- */}
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col px-3 pt-1"
            >
              {/* Row 1 */}
              <motion.div
                variants={rowVariants}
                className="w-full transform-gpu"
              >
                <div className="group/row flex items-center gap-2.5 p-2 -mx-2 rounded-lg hover:bg-zinc-100 transition-colors duration-200 cursor-pointer relative">
                  <div className="absolute bottom-0 left-2 right-2 h-[1px] bg-zinc-100 group-hover/row:bg-transparent transition-colors"></div>

                  <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 group-hover/row:scale-105 overflow-hidden border border-zinc-100">
                    <img
                      src="/logos/potpieai.jpg"
                      alt="Potpie AI"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col min-w-0 flex-1 gap-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-medium text-zinc-900 truncate group-hover/row:text-zinc-950 transition-colors">
                        Potpie AI
                      </span>
                      <span className="text-[8px] bg-red-50 text-red-600 border border-red-100 px-1.5 py-0.5 rounded-full tracking-wide">
                        OVERDUE
                      </span>
                    </div>
                    <span className="text-[9px] text-zinc-500 truncate w-full">
                      "We need a quote for 50 licenses..."
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Row 2*/}
              <motion.div
                variants={rowVariants}
                className="w-full transform-gpu"
              >
                <div className="group/row flex items-center gap-2.5 p-2 -mx-2 rounded-lg hover:bg-zinc-100 transition-colors duration-200 cursor-pointer relative">
                  <div className="absolute bottom-0 left-2 right-2 h-[1px] bg-zinc-100 group-hover/row:bg-transparent transition-colors"></div>

                  <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 group-hover/row:scale-105 overflow-hidden border border-zinc-100">
                    <img
                      src="/logos/blinkit.ico"
                      alt="Blinkit"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col min-w-0 flex-1 gap-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-medium text-zinc-900 truncate group-hover/row:text-zinc-950 transition-colors">
                        Blinkit
                      </span>
                      <span className="text-[8px] bg-orange-50 text-orange-600 border border-orange-100 px-1.5 py-0.5 rounded-full tracking-wide">
                        UNASSIGNED
                      </span>
                    </div>
                    <span className="text-[9px] text-zinc-500 truncate w-full">
                      "Can someone call me back ASAP?"
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Row 3 */}
              <motion.div
                variants={rowVariants}
                className="w-full transform-gpu"
              >
                <div className="group/row flex items-center gap-2.5 p-2 -mx-2 rounded-lg hover:bg-zinc-100 transition-colors duration-200 cursor-pointer relative opacity-70 hover:opacity-100">
                  <div className="absolute bottom-0 left-2 right-2 h-[1px] bg-zinc-100 group-hover/row:bg-transparent transition-colors"></div>

                  <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 group-hover/row:scale-105 overflow-hidden border border-zinc-100">
                    <img
                      src="/logos/zepto.ico"
                      alt="Zepto"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col min-w-0 flex-1 gap-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-medium text-zinc-900 truncate group-hover/row:text-zinc-950 transition-colors">
                        Zepto
                      </span>
                      <span className="text-[8px] bg-zinc-100 text-zinc-500 border border-zinc-200 px-1.5 py-0.5 rounded-full tracking-wide">
                        WAITING 2d
                      </span>
                    </div>
                    <span className="text-[9px] text-zinc-500 truncate w-full">
                      "Following up on my previous email..."
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Row 4 (Cut off at the bottom) */}
              <motion.div
                variants={rowVariants}
                className="w-full transform-gpu"
              >
                <div className="group/row flex items-center gap-2.5 p-2 -mx-2 rounded-lg hover:bg-zinc-100 transition-all duration-200 cursor-pointer opacity-40 hover:opacity-100">
                  <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 group-hover/row:scale-105 overflow-hidden border border-zinc-100">
                    <img
                      src="/logos/shram.png"
                      alt="Shram"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col min-w-0 flex-1 gap-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-medium text-zinc-900 truncate group-hover/row:text-zinc-950 transition-colors">
                        Shram
                      </span>
                      <span className="text-[8px] bg-red-50 text-red-600 border border-red-100 px-1.5 py-0.5 rounded-full tracking-wide">
                        DROPPED
                      </span>
                    </div>
                    <span className="text-[9px] text-zinc-500 truncate w-full">
                      "Since no one replied, we went with..."
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#faf9f5] to-transparent z-10 pointer-events-none transition-colors duration-300 group-hover:from-zinc-50"></div>

      {/* Added transform-gpu to lock the text in place and prevent sub-pixel shifting */}
      <h3 className="font-inter font-medium text-zinc-900 text-lg relative z-20 transform-gpu">
        Broken Follow-ups
      </h3>
      <p className="font-poppins text-xs text-zinc-500 mt-1 tracking-wide relative z-20 transform-gpu">
        Leads drop because no one knows who is supposed to reply.
      </p>
    </motion.div>
  );
};
