"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

export const LLMModelSelectorCard = ({ variants }: { variants: Variants }) => {
  return (
    <motion.div
      variants={variants}
      className="border-r border-blue-200 flex flex-col relative overflow-hidden group"
    >
      <div className="p-10 pb-0 z-10">
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
            <path d="M12 2v20"></path>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
          LLM Model Selector
        </div>
        <p className="text-[13px] text-zinc-500 leading-relaxed pr-8">
          Track real-time activity of agents with detailed records of triggers,
          tools used, outcomes, and timestamps.
        </p>
      </div>

      <div className="relative w-full h-[280px] mt-8 flex justify-center">
        <div className="absolute top-10 w-[85%] bg-white rounded-t-xl shadow-[0_0_40px_rgba(0,0,0,0.05)] border border-zinc-200/80 p-5 z-0">
          <div className="flex items-center gap-1.5 mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
              <div className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                </svg>
                All Models
                <span className="bg-zinc-100 text-zinc-500 px-1.5 py-0.5 rounded text-[10px]">
                  69,420
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-zinc-600">
                <span className="text-rose-500">✺</span> Claude 4 Opus
              </div>
              <span className="text-[10px] text-rose-500 border border-rose-200 px-2 py-0.5 rounded">
                Unavailable
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-zinc-600">
                <span className="text-emerald-500">✇</span> ChatGPT
              </div>
              <span className="text-[10px] text-emerald-600 border border-emerald-200 px-2 py-0.5 rounded">
                Connected
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-zinc-600">
                <span className="text-blue-500">∞</span> Llama 3.2
              </div>
              <span className="text-[10px] text-amber-600 border border-amber-200 px-2 py-0.5 rounded">
                Waiting
              </span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute right-6 top-0 bg-white rounded-lg shadow-xl border border-zinc-200 p-3 w-48 z-20"
        >
          <div className="flex items-center justify-between mb-3 text-xs font-medium text-zinc-800">
            <div className="flex items-center gap-2">
              <span className="text-zinc-900">✇</span> Open AI
            </div>
            <span className="text-zinc-400 text-[10px]">GPT 5</span>
          </div>
          <div className="text-[10px] text-blue-600 border border-blue-200 bg-blue-50 px-2 py-1 rounded text-center w-full">
            Connected
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
