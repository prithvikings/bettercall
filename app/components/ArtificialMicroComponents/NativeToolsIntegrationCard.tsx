"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

export const NativeToolsIntegrationCard = ({
  variants,
}: {
  variants: Variants;
}) => {
  return (
    <motion.div
      variants={variants}
      className="border-b border-blue-200 flex flex-col relative overflow-hidden bg-white/10 min-h-[450px]"
    >
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      ></div>

      <div className="p-10 z-10 relative">
        <div className="flex items-center gap-2 text-zinc-800 font-medium mb-3">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
          </svg>
          Native Tools Integration
        </div>
        <p className="text-[13px] text-zinc-500 leading-relaxed max-w-2xl">
          Track real-time activity of agents with detailed records of triggers,
          tools used, outcomes, and timestamps.
        </p>
      </div>

      <div className="relative w-full h-[300px] mt-4 flex items-center justify-center z-10">
        <div className="absolute top-1/2 left-[20%] right-[30%] h-px border-t border-dashed border-zinc-300 z-0"></div>

        <div className="absolute left-[10%] flex flex-col gap-6 z-10">
          <div className="flex items-center gap-3 text-[11px] text-zinc-600 bg-white/80 py-1 px-3 rounded shadow-sm border border-zinc-100">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            Meeting Summarizer
          </div>
          <div className="flex items-center gap-3 text-[11px] text-zinc-600 bg-white/80 py-1 px-3 rounded shadow-sm border border-zinc-100 relative">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            Code Reviewer
            <div className="absolute top-1/2 left-full w-[150px] h-px bg-zinc-200 z-[-1]"></div>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-zinc-600 bg-white/80 py-1 px-3 rounded shadow-sm border border-zinc-100">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Customer Support
          </div>
        </div>

        <div className="absolute left-[45%] bg-white w-14 h-14 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-zinc-200 flex items-center justify-center z-20">
          <div className="w-6 h-6 rounded-sm bg-zinc-900 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white absolute top-4 left-4"></div>
            <div className="w-2 h-2 rounded-full bg-white absolute bottom-4 right-4"></div>
          </div>
          <div className="absolute -inset-px bg-linear-to-br from-transparent to-rose-200 rounded-xl z-[-1]"></div>
        </div>

        <div className="absolute left-[58%] text-[9px] text-blue-500 border border-blue-200 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wide z-20">
          Connected
        </div>

        <div className="absolute right-[25%] flex items-center gap-10 z-10">
          <div className="relative">
            <div className="absolute -top-16 left-0 bg-white w-10 h-10 rounded-lg shadow-sm border border-zinc-200 flex items-center justify-center">
              <span className="font-bold text-zinc-800 text-sm">N</span>
            </div>
            <div className="absolute -top-6 left-5 w-px h-6 bg-zinc-200"></div>
            <div className="bg-white w-10 h-10 rounded-lg shadow-sm border border-zinc-200 flex items-center justify-center z-10 relative">
              <span className="font-bold text-rose-500 text-lg">#</span>
            </div>
            <div className="absolute top-10 left-5 w-px h-10 bg-zinc-200"></div>
            <div className="absolute top-20 left-0 bg-white w-10 h-10 rounded-lg shadow-sm border border-zinc-200 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#18181b_2px,#18181b_4px)]"></div>
            </div>
          </div>
          <div className="bg-white w-10 h-10 rounded-lg shadow-sm border border-zinc-200 flex items-center justify-center relative">
            <div className="absolute top-1/2 -left-10 w-10 h-px bg-zinc-200 z-[-1]"></div>
            <span className="text-zinc-600 text-sm">✇</span>
          </div>
          <div className="absolute -top-20 right-4 bg-white w-10 h-10 rounded-lg shadow-sm border border-zinc-200 flex items-center justify-center">
            <div className="absolute top-10 left-1/2 w-px h-20 bg-zinc-200 z-[-1]"></div>
            <span className="text-emerald-500 text-xl font-bold">⚡</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
