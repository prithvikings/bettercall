"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

export const TextToWorkflowCard = ({ variants }: { variants: Variants }) => {
  return (
    <motion.div
      variants={variants}
      className="flex flex-col relative overflow-hidden bg-white/20"
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
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
          </svg>
          Text to workflow builder
        </div>
        <p className="text-[13px] text-zinc-500 leading-relaxed pr-8">
          Preview and debug workflow logic in a safe sandbox before deploying,
          helping you iterate with confidence.
        </p>
      </div>

      <div className="relative w-full h-[280px] mt-8 flex flex-col justify-end px-10 pb-6">
        {/* Bot Message Fade */}
        <div className="flex items-start gap-3 mb-4 opacity-30">
          <div className="w-6 h-6 rounded border border-zinc-200 flex items-center justify-center bg-white shrink-0">
            <div className="w-3 h-3 rounded-sm bg-zinc-300"></div>
          </div>
          <div className="bg-zinc-50 border border-zinc-100 rounded-2xl rounded-tl-sm p-3 px-4 text-xs text-zinc-400 max-w-[80%]">
            I'm good, thank you! How can I help you today?
          </div>
        </div>

        {/* User Message */}
        <div className="flex items-end justify-end gap-3 mb-4">
          <div className="bg-blue-500 rounded-2xl rounded-tr-sm p-3 px-4 text-xs text-white max-w-[80%] shadow-sm">
            I want to create a workflow that will send an email to all my
            clients
          </div>
          <div className="w-6 h-6 rounded-full bg-indigo-100 border border-indigo-200 shrink-0 overflow-hidden">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-full h-full text-indigo-400"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="8" r="4"></circle>
              <path d="M20 21a8 8 0 0 0-16 0"></path>
            </svg>
          </div>
        </div>

        {/* Bot Message */}
        <div className="flex items-start gap-3 mb-6">
          <div className="w-6 h-6 rounded border border-zinc-200 flex items-center justify-center bg-white shadow-sm shrink-0">
            <div className="w-3 h-3 rounded-sm bg-zinc-800"></div>
          </div>
          <div className="bg-white border border-zinc-200 rounded-2xl rounded-tl-sm p-3 px-4 text-xs text-zinc-600 max-w-[80%] shadow-sm">
            Nah, do it yourself.
          </div>
        </div>

        {/* Input Bar */}
        <div className="w-full bg-white border border-zinc-200 rounded-full p-2 px-4 flex items-center justify-between shadow-sm">
          <span className="text-[11px] text-zinc-400">Ask Notus AI</span>
          <div className="flex items-center gap-3 text-zinc-400">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
