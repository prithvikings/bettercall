"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

export const CenterVisualMockup = ({ variants }: { variants: Variants }) => {
  return (
    <motion.div
      variants={variants}
      className="relative flex flex-col items-center bg-white/40 border border-zinc-100/80 rounded-2xl overflow-hidden min-h-[500px] lg:min-h-full"
    >
      {/* Dotted Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      ></div>

      {/* Top Area: Node Graph */}
      <div className="relative w-full h-[240px] flex items-center justify-center z-10 mt-6">
        {/* Connecting Background Line */}
        <div className="absolute top-1/2 left-[15%] right-[15%] h-[1px] bg-zinc-200 z-0"></div>

        {/* Node 1: GPT */}
        <div className="absolute left-[15%] -translate-x-1/2 bg-white w-10 h-10 rounded-xl shadow-sm border border-zinc-200 flex items-center justify-center z-10">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-700"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          </svg>
        </div>

        {/* Node 2: Center Main */}
        <div className="absolute left-1/2 -translate-x-1/2 bg-white w-14 h-14 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-zinc-200 flex items-center justify-center z-20">
          <div className="w-6 h-6 rounded-md bg-zinc-900 flex items-center justify-center relative">
            <div className="w-2 h-2 rounded-full bg-white absolute top-0 left-0 -ml-1 -mt-1"></div>
            <div className="w-2 h-2 rounded-full bg-white absolute bottom-0 right-0 -mr-1 -mb-1"></div>
          </div>
          {/* Subtle glow under the center box */}
          <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-100 to-rose-100 rounded-2xl z-[-1]"></div>

          <div className="absolute -bottom-8 whitespace-nowrap text-[9px] text-blue-500 border border-blue-200 bg-blue-50 px-2.5 py-0.5 rounded-full uppercase tracking-wide">
            Connected
          </div>
        </div>

        {/* Node 3: Slack */}
        <div className="absolute right-[15%] translate-x-1/2 bg-white w-10 h-10 rounded-xl shadow-sm border border-zinc-200 flex items-center justify-center z-10">
          <span className="text-blue-500 font-bold text-lg">#</span>
        </div>
      </div>

      {/* Bottom Area: Dashboard Mockup */}
      <div className="relative mt-auto w-[85%] bg-white rounded-t-2xl border border-zinc-200 shadow-xl p-5 pt-6 z-20">
        {/* Floating Notification Toast */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -top-4 right-4 bg-white border border-zinc-200 shadow-sm rounded-full px-3 py-1.5 flex items-center gap-2"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-zinc-400"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <span className="text-[9px] font-medium text-zinc-500">
            You talking to me
          </span>
        </motion.div>

        {/* MacOS Window Dots */}
        <div className="flex gap-1.5 mb-5">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <div className="w-2 h-2 rounded-full bg-amber-400"></div>
          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
        </div>

        <h4 className="font-semibold text-xs mb-4 text-zinc-900">Dashboard</h4>

        {/* Progress Bars */}
        <div className="space-y-4">
          <div>
            <div className="text-[9px] font-medium text-zinc-400 mb-1.5 tracking-wide">
              API Calls
            </div>
            <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
              <div className="w-[85%] h-full bg-zinc-300 rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="text-[9px] font-medium text-zinc-400 mb-1.5 tracking-wide">
              Success Rate
            </div>
            <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
              <div className="w-[92%] h-full bg-zinc-300 rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="text-[9px] font-medium text-zinc-400 mb-1.5 tracking-wide">
              Workflows
            </div>
            <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
              <div className="w-[45%] h-full bg-zinc-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
