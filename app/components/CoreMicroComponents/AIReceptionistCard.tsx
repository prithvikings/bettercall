"use client";
import React from "react";
import { motion } from "framer-motion";

export const AIReceptionistCard = () => {
  return (
    <div className="group relative bg-[#faf9f5] border border-zinc-200 px-4 py-4 pb-5 flex flex-col h-[400px] transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50 overflow-hidden md:col-span-1">
      <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

      <div className="flex-1 w-full bg-white border border-zinc-200 mb-5 flex items-center justify-center relative z-10 overflow-hidden shadow-inner rounded-sm">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-60"></div>

        <div className="relative w-[240px] h-[160px] flex items-center justify-center">
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
              <span className="text-[8px] font-medium">Tomorrow, 2:00 PM</span>
            </div>
          </motion.div>
        </div>
      </div>

      <h3 className="font-inter font-medium text-zinc-900 text-[17px] leading-snug relative z-20">
        Never miss a customer call again.
      </h3>
      <p className="font-poppins text-xs text-zinc-500 mt-1.5 tracking-wide relative z-20">
        Manages customer communication and appointment bookings automatically.
      </p>
    </div>
  );
};
