"use client";
import React from "react";
import { motion } from "framer-motion";

export const TeamCollaborationCard = () => {
  return (
    <div className="group relative bg-[#faf9f5] border border-zinc-200 px-4 py-4 pb-5 flex flex-col h-[400px] transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50 overflow-hidden md:col-span-1">
      <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

      <div className="flex-1 w-full bg-white border border-zinc-200 mb-5 flex items-center justify-center relative z-10 overflow-hidden shadow-inner rounded-sm">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-60"></div>

        <div className="relative w-[220px] h-[160px] flex items-center justify-center">
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
            <div className="p-2.5 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50 rounded-t-md">
              <div className="flex flex-col gap-1.5">
                <div className="w-16 h-1.5 bg-zinc-800 rounded-full"></div>
                <div className="w-24 h-1 bg-zinc-300 rounded-full"></div>
              </div>
              <div className="relative w-5 h-5">
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

            <div className="p-3 flex flex-col gap-2">
              <div className="w-full h-1.5 bg-zinc-100 rounded-full"></div>
              <div className="w-4/5 h-1.5 bg-zinc-100 rounded-full"></div>
            </div>

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
                <span className="text-[6px] font-bold text-green-700">SR</span>
              </motion.div>
            </motion.div>
          </motion.div>

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
        Assign owners, leave internal notes, and see exactly who handled the
        last conversation.
      </p>
    </div>
  );
};
