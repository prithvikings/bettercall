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
        {/* Main Central Dashed Track */}
        <div className="absolute top-1/2 left-[15%] right-[25%] h-px border-t border-dashed border-zinc-300 z-0"></div>

        {/* Left Side: Tool Labels & Merging Lines */}
        <div className="absolute left-[8%] flex flex-col gap-8 z-10">
          <div className="flex items-center gap-3 text-[11px] text-zinc-600 relative w-[150px]">
            <div className="w-5 h-5 rounded border border-zinc-200 flex items-center justify-center bg-white shadow-xs z-10">
              <svg
                width="10"
                height="10"
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
            </div>
            <span className="relative z-10 bg-[#faf9f5] pr-1">
              Meeting Summarizer
            </span>
            {/* Outgoing horizontal line */}
            <div className="absolute left-full top-1/2 w-[30px] h-px bg-zinc-200 z-0"></div>
            {/* Vertical drop line (Exactly covers gap to the center row) */}
            <div className="absolute left-[calc(100%+30px)] top-1/2 w-px h-[52px] bg-zinc-200 z-0"></div>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-zinc-600 relative w-[150px]">
            <div className="w-5 h-5 rounded border border-zinc-200 flex items-center justify-center bg-white shadow-xs z-10">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <span className="relative z-10 bg-[#faf9f5] pr-1">
              Code Reviewer
            </span>
            {/* Long horizontal line merging into central track */}
            <div className="absolute left-full top-1/2 w-[80px] h-px bg-zinc-200 z-0"></div>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-zinc-600 relative w-[150px]">
            <div className="w-5 h-5 rounded border border-zinc-200 flex items-center justify-center bg-white shadow-xs z-10">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <span className="relative z-10 bg-[#faf9f5] pr-1">
              Customer Support
            </span>
            {/* Outgoing horizontal line */}
            <div className="absolute left-full top-1/2 w-[30px] h-px bg-zinc-200 z-0"></div>
            {/* Vertical rise line (Exactly covers gap to the center row) */}
            <div className="absolute left-[calc(100%+30px)] bottom-1/2 w-px h-[52px] bg-zinc-200 z-0"></div>
          </div>
        </div>

        {/* Center: Superfone Logo */}
        <div className="absolute left-[45%] bg-white w-14 h-14 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-zinc-200 flex items-center justify-center z-20">
          <img
            src="/logos/superfone.png"
            alt="Superfone"
            className="w-8 h-8 object-contain"
          />
          <div className="absolute -inset-px bg-linear-to-br from-transparent to-blue-100 rounded-xl z-[-1]"></div>
        </div>

        {/* Connected Tag inline with dashed track */}
        <div className="absolute left-[58%] top-1/2 -translate-y-1/2 text-[9px] font-medium text-blue-500 border border-blue-200 bg-blue-50 px-2 py-1 rounded uppercase tracking-wide z-20 shadow-sm">
          Connected
        </div>

        {/* Right Side: Integration Web anchored around Slack */}
        <div className="absolute right-[22%] flex items-center z-10">
          <div className="relative flex items-center justify-center w-10 h-10">
            {/* Connector Lines mapped mathematically from Slack center */}
            {/* Slack to Notion */}
            <div className="absolute bottom-full left-1/2 w-px h-[32px] bg-zinc-200 z-0 -translate-x-1/2"></div>
            {/* Slack to Linear */}
            <div className="absolute top-full left-1/2 w-px h-[32px] bg-zinc-200 z-0 -translate-x-1/2"></div>
            {/* Slack to ChatGPT */}
            <div className="absolute left-full top-1/2 w-[60px] h-px bg-zinc-200 z-0 -translate-y-1/2"></div>
            {/* Supabase drop down to horizontal line */}
            <div className="absolute bottom-1/2 left-[70px] w-px h-[52px] bg-zinc-200 z-0 -translate-x-1/2"></div>

            {/* Nodes */}
            <div className="absolute -top-[72px] bg-white w-10 h-10 rounded-lg shadow-sm border border-zinc-200 flex items-center justify-center p-2 transition-transform hover:scale-110 z-10">
              <img
                src="/logos/notion.webp"
                alt="Notion"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Hub: Slack */}
            <div className="bg-white w-10 h-10 rounded-lg shadow-sm border border-zinc-200 flex items-center justify-center p-2 z-10 relative transition-transform hover:scale-110">
              <img
                src="/logos/slack.png"
                alt="Slack"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute top-[72px] bg-white w-10 h-10 rounded-lg shadow-sm border border-zinc-200 flex items-center justify-center p-2 transition-transform hover:scale-110 z-10">
              <img
                src="/logos/linear.ico"
                alt="Linear"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute left-[100px] bg-white w-10 h-10 rounded-lg shadow-sm border border-zinc-200 flex items-center justify-center p-2 transition-transform hover:scale-110 z-10">
              <img
                src="/logos/chatgpt.png"
                alt="ChatGPT"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute -top-[72px] left-[50px] bg-white w-10 h-10 rounded-lg shadow-sm border border-zinc-200 flex items-center justify-center p-2 transition-transform hover:scale-110 z-10">
              <img
                src="/logos/supabase.webp"
                alt="Supabase"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
