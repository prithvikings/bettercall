"use client";
import React from "react";
import { motion } from "framer-motion";

export const SharedNumberCard = () => {
  return (
    <div className="group relative bg-[#faf9f5] border border-zinc-200 px-4 py-4 pb-5 flex flex-col h-[400px] transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50 overflow-hidden md:col-span-1">
      {/* Corner Accents */}
      <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

      <div className="flex-1 w-full bg-white border border-zinc-200 mb-5 flex items-center justify-center relative z-10 overflow-hidden shadow-inner rounded-sm">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-60"></div>

        <div className="relative w-[260px] h-[130px] mt-2">
          {/* Main Line Node */}
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

          {/* Routing Lines */}
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

          {/* Avatars */}
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
            SR
          </motion.div>
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
            MK
          </motion.div>
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
            AL
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
    </div>
  );
};
