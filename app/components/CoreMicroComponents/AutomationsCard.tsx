"use client";
import React from "react";
import { motion } from "framer-motion";

export const AutomationsCard = () => {
  return (
    <div className="group relative bg-[#faf9f5] border border-zinc-200 px-4 py-4 pb-5 flex flex-col h-[400px] transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50 overflow-hidden md:col-span-2">
      <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

      <div className="flex-1 w-full bg-white border border-zinc-200 mb-5 flex items-center justify-center relative z-10 overflow-hidden shadow-inner rounded-sm">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-60"></div>

        <div className="relative w-[320px] h-[160px] scale-90 sm:scale-100 flex-shrink-0">
          <svg
            width="320"
            height="160"
            className="absolute inset-0 z-10 pointer-events-none"
          >
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
            <span className="text-[9px] font-semibold text-zinc-700">Wait</span>
          </motion.div>

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
          Missed calls instantly trigger recovery workflows, ensuring no lead
          slips through the cracks.
        </p>
      </div>
    </div>
  );
};
