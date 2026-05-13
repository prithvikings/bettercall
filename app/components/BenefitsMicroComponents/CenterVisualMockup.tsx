"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

export const CenterVisualMockup = ({ variants }: { variants: Variants }) => {
  return (
    <motion.div
      variants={variants}
      className="relative flex flex-col items-center bg-[#faf9f5] border border-zinc-200/80 rounded-xl overflow-hidden min-h-[500px] lg:min-h-full"
    >
      {/* Dotted Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      ></div>

      {/* Top Area: Node Graph */}
      <div className="relative w-full h-[320px] flex items-center justify-center z-10 mt-2">
        {/* Connecting Lines */}
        {/* Horizontal Line connecting ChatGPT to Slack */}
        <div className="absolute top-[80px] left-[20%] right-[20%] h-px bg-zinc-200 z-0"></div>
        {/* Extended Vertical Line connecting Superfone to Connected Tag */}
        <div className="absolute top-[80px] left-1/2 w-px h-[100px] bg-zinc-200 z-0 -translate-x-1/2"></div>

        {/* Node 1: ChatGPT (Left) */}
        <div className="absolute left-[20%] top-[80px] -translate-x-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-xl shadow-sm border border-zinc-200 flex items-center justify-center z-10 transition-transform hover:scale-110">
          <img
            src="/logos/chatgpt.png"
            alt="ChatGPT"
            className="w-7 h-7 object-contain"
          />
        </div>

        {/* Node 2: Superfone Hub (Center) */}
        <div className="absolute left-1/2 top-[80px] -translate-x-1/2 -translate-y-1/2 bg-white w-16 h-16 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-zinc-200 flex items-center justify-center z-20">
          <img
            src="/logos/superfone.png"
            alt="Superfone"
            className="w-8 h-8 object-contain relative z-10"
          />
          {/* Subtle glow border effect */}
          <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-300 to-rose-300 rounded-2xl z-0 opacity-50"></div>
          <div className="absolute inset-0 bg-white rounded-2xl z-0"></div>
        </div>

        {/* Connected Tag (Pushed further down) */}
        <div className="absolute left-1/2 top-[180px] -translate-x-1/2 bg-blue-50 border border-blue-400/50 text-blue-500 font-medium text-[10px] px-2.5 py-0.5 rounded flex items-center justify-center z-20 shadow-sm">
          Connected
        </div>

        {/* Node 3: Slack (Right) */}
        <div className="absolute right-[20%] top-[80px] translate-x-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-xl shadow-sm border border-zinc-200 flex items-center justify-center z-10 transition-transform hover:scale-110">
          <img
            src="/logos/slack.png"
            alt="Slack"
            className="w-7 h-7 object-contain"
          />
        </div>
      </div>

      {/* Bottom Area: Dashboard Mockup (Right-Aligned) */}
      <div className="relative mt-auto w-[90%] self-end bg-white rounded-tl-2xl border border-zinc-200 border-r-0 border-b-0 shadow-[-8px_-8px_30px_rgb(0,0,0,0.04)] overflow-hidden z-20 h-[220px] flex flex-col">
        {/* Dashboard Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100 bg-white">
          {/* MacOS Window Dots */}
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
          </div>

          {/* Chat History Toast */}
          <div className="flex items-center gap-1.5 border border-zinc-200 rounded px-2.5 py-1 text-[10px] text-zinc-500 font-medium shadow-sm">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            Chat history saved
          </div>
        </div>

        {/* Dashboard Body */}
        <div className="flex flex-1 bg-white">
          {/* Subtle Grey Sidebar */}
          <div className="w-16 bg-zinc-50 border-r border-zinc-100 h-full"></div>

          {/* Main Content Area */}
          <div className="flex-1 p-5 pt-4">
            <h4 className="font-bold text-[13px] text-zinc-900 mb-5 tracking-tight">
              Dashboard
            </h4>

            {/* Progress Bars */}
            <div className="space-y-4">
              <div>
                <div className="text-[10px] font-medium text-zinc-400 mb-1.5 tracking-wide">
                  API Calls
                </div>
                <div className="w-[90%] h-1.5 bg-zinc-100 rounded-full overflow-hidden flex">
                  <div className="w-[85%] h-full bg-zinc-300 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="text-[10px] font-medium text-zinc-400 mb-1.5 tracking-wide">
                  Success Rate
                </div>
                <div className="w-[90%] h-1.5 bg-zinc-100 rounded-full overflow-hidden flex">
                  <div className="w-[92%] h-full bg-zinc-300 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="text-[10px] font-medium text-zinc-400 mb-1.5 tracking-wide">
                  Workflows
                </div>
                <div className="w-[90%] h-1.5 bg-zinc-100 rounded-full overflow-hidden flex">
                  <div className="w-[45%] h-full bg-zinc-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
