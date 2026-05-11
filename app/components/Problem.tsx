"use client";
import React from "react";
import { motion } from "framer-motion";

const Problem = () => {
  return (
    <div className="relative z-20 w-full border-b border-blue-200 font-poppins bg-white">
      <div className="relative max-w-6xl mx-auto px-4 py-24 border-x border-blue-200 min-h-[50vh] flex flex-col items-center justify-center text-center">
        {/* --- Corner Accents for Main Container --- */}
        <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-[3px] border-l-[3px] border-blue-500 z-10"></div>
        <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-[3px] border-r-[3px] border-blue-500 z-10"></div>
        <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-[3px] border-l-[3px] border-blue-500 z-10"></div>
        <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-[3px] border-r-[3px] border-blue-500 z-10"></div>

        {/* --- Problem Section Header --- */}
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 mb-6 text-sm font-medium border border-blue-200 bg-blue-50 text-blue-700 shadow-sm">
          {/* Subtle Warning Indicator */}
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 bg-blue-600"></span>
          </div>
          <span className="font-poppins">The Communication Gap</span>
        </div>

        <h2 className="text-5xl font-inter tracking-tighter font-semibold text-zinc-800">
          Too many chats. <br /> Too many missed leads.
        </h2>

        <p className="text-sm text-zinc-600 max-w-sm font-poppins mt-4 mb-16 tracking-wide">
          Your team shouldn’t lose customers because conversations are spread
          everywhere.
        </p>

        {/* --- Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl text-left">
          {/* Bento Box 1: Missed Calls */}
          <div className="group relative bg-[#faf9f5] border border-zinc-200 px-3.5 py-3 pb-4 flex flex-col h-[350px] transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50 overflow-hidden">
            <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

            {/* Canvas 1: The "Lost Value" Animation */}
            <div className="flex-1 w-full bg-white border border-zinc-200 mb-4 flex items-center justify-center relative z-10 overflow-hidden shadow-inner">
              {/* Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-50 mask-image-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

              <div className="relative w-full flex flex-col items-center">
                {/* Incoming Notification */}
                <motion.div
                  animate={{
                    y: [-40, 0, 0, 0, -40],
                    opacity: [0, 1, 1, 1, 0],
                    borderColor: [
                      "#e4e4e7",
                      "#e4e4e7",
                      "#fca5a5",
                      "#fca5a5",
                      "#e4e4e7",
                    ],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    times: [0, 0.15, 0.5, 0.85, 1],
                    ease: "easeInOut",
                  }}
                  className="w-3/4 bg-white border shadow-md p-3 flex flex-col gap-2 relative z-20"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{
                        backgroundColor: [
                          "#22c55e",
                          "#22c55e",
                          "#ef4444",
                          "#ef4444",
                          "#22c55e",
                        ],
                      }}
                      transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        times: [0, 0.15, 0.5, 0.85, 1],
                      }}
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white"
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
                      <div className="h-2 w-16 bg-zinc-200 mb-1"></div>
                      <div className="h-1.5 w-10 bg-zinc-100"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Dropping Value Pill */}
                <motion.div
                  animate={{
                    y: [0, 0, 40, 60],
                    opacity: [0, 0, 1, 0],
                    scale: [0.8, 0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    times: [0, 0.5, 0.65, 0.9],
                    ease: "easeInOut",
                  }}
                  className="absolute top-8 bg-red-50 text-red-600 text-[10px] font-semibold px-2.5 py-1 border border-red-100 shadow-sm z-10"
                >
                  - ₹1.2L Lost
                </motion.div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#faf9f5] to-transparent z-10 pointer-events-none"></div>
            <h3 className="font-inter font-medium text-zinc-900 text-lg relative z-20">
              Missed Opportunities
            </h3>
            <p className="font-poppins text-xs text-zinc-500 mt-1 relative tracking-wide z-20 max-w-[250px]">
              Customers call once. If you miss it, they call your competitor.
            </p>
          </div>

          {/* Bento Box 2: WhatsApp Chaos */}
          <div className="group relative bg-[#faf9f5] border border-zinc-200 px-3.5 py-3 pb-4 flex flex-col h-[350px] transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50 overflow-hidden">
            <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

            {/* Canvas 2: The "Device Trap" Animation */}
            <div className="flex-1 w-full bg-white border border-zinc-200 mb-4 flex items-center justify-between relative z-10 overflow-hidden shadow-inner px-4">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-50"></div>

              {/* Personal Phone Mockup */}
              <div className="w-[35%] h-[70%] border-2 border-zinc-200 bg-zinc-50/50 rounded-xl flex flex-col justify-end p-2 gap-2 relative z-20">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-zinc-200 rounded-full"></div>
                {[0, 1.5, 3].map((delay, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      x: [0, 0, 70, 70, 70],
                      y: [0, 0, 0, 20, 40],
                      opacity: [0, 1, 1, 0.5, 0],
                      scale: [0.8, 1, 1, 0.9, 0.8],
                      backgroundColor: [
                        "#dcfce7",
                        "#dcfce7",
                        "#f4f4f5",
                        "#f4f4f5",
                        "#f4f4f5",
                      ],
                      color: [
                        "#166534",
                        "#166534",
                        "#71717a",
                        "#71717a",
                        "#71717a",
                      ],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      delay: delay,
                      times: [0, 0.1, 0.4, 0.6, 0.8],
                      ease: "easeInOut",
                    }}
                    className="self-end px-2 py-1.5 text-[8px] font-medium rounded-t-lg rounded-bl-lg border border-zinc-200 w-fit max-w-full shadow-sm whitespace-nowrap overflow-hidden"
                  >
                    Quote?
                  </motion.div>
                ))}
              </div>

              {/* Invisible Barrier */}
              <div className="absolute left-[55%] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-red-400 to-transparent z-10"></div>

              {/* Team Dashboard Mockup */}
              <div className="w-[35%] h-[70%] border-2 border-dashed border-zinc-200 bg-white flex flex-col p-2 gap-2 relative z-20">
                <div className="h-1.5 w-8 bg-zinc-200 mb-2"></div>
                <div className="h-4 w-full bg-zinc-50 border border-zinc-100 flex items-center justify-center">
                  <span className="text-[7px] text-zinc-400">Empty</span>
                </div>
                <div className="h-4 w-full bg-zinc-50 border border-zinc-100 flex items-center justify-center">
                  <span className="text-[7px] text-zinc-400">Empty</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#faf9f5] to-transparent z-10 pointer-events-none"></div>
            <h3 className="font-inter font-medium text-zinc-900 text-lg relative z-20">
              The WhatsApp Blackhole
            </h3>
            <p className="font-poppins text-xs text-zinc-500 mt-1 tracking-wide relative z-20 max-w-[280px]">
              Conversations stuck on personal devices with zero team visibility.
            </p>
          </div>

          {/* Bento Box 3: Broken Follow-ups */}
          <div className="group relative bg-[#faf9f5] border border-zinc-200 px-3.5 py-3 pb-4 flex flex-col h-[350px] transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50 overflow-hidden">
            <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

            {/* Canvas 3: The "Slipping Through the Cracks" Animation */}
            <div className="flex-1 w-full bg-zinc-50 border border-zinc-200 mb-4 flex items-center justify-center relative z-10 overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40"></div>

              {/* Kanban Column */}
              <div className="w-[60%] h-[80%] border border-dashed border-zinc-300 bg-zinc-100/50 p-2 flex flex-col z-20 relative">
                <div className="h-2 w-12 bg-zinc-300 mb-3"></div>

                {/* Falling Lead Card */}
                <motion.div
                  animate={{
                    y: [0, 0, 0, 100],
                    rotateZ: [0, 0, 0, 8],
                    opacity: [0, 1, 1, 0],
                    borderColor: ["#e4e4e7", "#e4e4e7", "#ef4444", "#ef4444"],
                    boxShadow: [
                      "0 1px 2px rgba(0,0,0,0.05)",
                      "0 1px 2px rgba(0,0,0,0.05)",
                      "0 0 0 1px #fee2e2",
                      "none",
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    times: [0, 0.1, 0.7, 1],
                    ease: "easeInOut",
                  }}
                  className="bg-white p-2.5 border border-zinc-200 shadow-sm relative z-30"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="h-2.5 w-16 bg-zinc-800"></div>
                    <div className="w-4 h-4 border border-dashed border-zinc-300 bg-zinc-50 text-zinc-400 flex items-center justify-center text-[8px] font-bold">
                      ?
                    </div>
                  </div>
                  <div className="h-1.5 w-10 bg-zinc-200 mb-3"></div>

                  {/* Critical Timer Bar */}
                  <div className="w-full h-1 bg-zinc-100 overflow-hidden relative">
                    <motion.div
                      animate={{
                        width: ["0%", "100%", "100%", "100%"],
                        backgroundColor: [
                          "#10b981",
                          "#f59e0b",
                          "#ef4444",
                          "#ef4444",
                        ],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        times: [0, 0.3, 0.6, 1],
                        ease: "linear",
                      }}
                      className="absolute top-0 left-0 h-full"
                    ></motion.div>
                  </div>
                </motion.div>

                {/* Empty slot placeholder left behind */}
                <div className="absolute top-[28px] left-2 right-2 h-[72px] border border-dashed border-zinc-300 bg-transparent z-10"></div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#faf9f5] to-transparent z-10 pointer-events-none"></div>
            <h3 className="font-geist-sans font-medium text-zinc-900 text-lg relative z-20">
              Broken Follow-ups
            </h3>
            <p className="font-poppins text-xs text-zinc-500 mt-1 tracking-wide relative z-20">
              Leads drop because no one knows who is supposed to reply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
