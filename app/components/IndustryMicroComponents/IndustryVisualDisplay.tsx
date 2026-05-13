"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const IndustryVisualDisplay = ({ activeData }: any) => {
  return (
    <div className="relative flex items-center justify-center p-12 bg-[#faf9f5] overflow-hidden min-h-[450px]">
      <div
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      ></div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeData.id}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative z-10 flex items-center gap-12 w-full max-w-lg justify-center"
        >
          {/* Connector Line */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-[2px] bg-blue-500 z-0 flex items-center justify-between">
            <div className="w-2.5 h-2.5 rounded-full border-[2px] border-blue-500 bg-white -ml-1"></div>
            <div className="w-2.5 h-2.5 rounded-full border-[2px] border-blue-500 bg-white -mr-1"></div>
          </div>

          {/* Left Card: Dynamic Tasks */}
          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-200/60 p-5 w-[240px] z-10 relative">
            <div className="absolute -top-5 -right-5 bg-white p-2 rounded-xl shadow-sm border border-zinc-100">
              <div className="w-8 h-8 rounded-lg bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#f4f4f5_2px,#f4f4f5_4px)] flex items-center justify-center text-zinc-600">
                {activeData.icon}
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4 text-[11px] text-zinc-400 font-medium uppercase tracking-wider">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
              </svg>
              {activeData.visuals.taskTitle}
            </div>
            <p className="text-[12px] text-zinc-500 mb-6 leading-relaxed font-poppins">
              {activeData.visuals.taskDesc}
            </p>
            <div className="space-y-2">
              <div className="h-2 bg-zinc-100 rounded-full w-full"></div>
              <div className="h-2 bg-zinc-100 rounded-full w-2/3"></div>
            </div>
          </div>

          {/* Right Card: Dynamic Integrations */}
          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-200/60 p-5 w-[240px] z-10 relative">
            <div className="absolute -top-5 -left-5 bg-white p-2 rounded-xl shadow-sm border border-zinc-100">
              <div className="w-8 h-8 rounded-lg bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#f4f4f5_2px,#f4f4f5_4px)] flex items-center justify-center text-zinc-600">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
              </div>
            </div>

            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2 text-[11px] text-zinc-400 font-medium uppercase tracking-wider">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                Connections
              </div>
              <span className="bg-zinc-100 text-zinc-500 px-2 py-0.5 rounded text-[10px] font-medium">
                Active
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[12px] text-zinc-700 font-medium font-poppins">
                  <div className="w-4 h-4 rounded-full border border-zinc-300 flex items-center justify-center">
                    <span className="text-[7px]">
                      {activeData.visuals.int1.substring(0, 3).toUpperCase()}
                    </span>
                  </div>
                  {activeData.visuals.int1}
                </div>
                <span className="text-[9px] text-emerald-600 border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 rounded uppercase tracking-wide">
                  Syncing
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[12px] text-zinc-700 font-medium font-poppins">
                  <div className="w-4 h-4 rounded-full border border-zinc-300 flex items-center justify-center">
                    <span className="text-[7px]">
                      {activeData.visuals.int2.substring(0, 3).toUpperCase()}
                    </span>
                  </div>
                  {activeData.visuals.int2}
                </div>
                <span className="text-[9px] text-emerald-600 border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 rounded uppercase tracking-wide">
                  Syncing
                </span>
              </div>
            </div>

            <div className="space-y-2 mt-5 pt-5 border-t border-zinc-100">
              <div className="h-2 bg-zinc-100 rounded-full w-full"></div>
              <div className="h-2 bg-zinc-100 rounded-full w-4/5"></div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
