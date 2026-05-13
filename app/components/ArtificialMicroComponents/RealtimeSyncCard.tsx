"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

export const RealtimeSyncCard = ({ variants }: { variants: Variants }) => {
  return (
    <motion.div
      variants={variants}
      className="p-10 border-r border-blue-200 bg-white/40 group hover:bg-zinc-50 transition-colors"
    >
      <div className="flex items-center gap-2 text-zinc-800 font-medium mb-3">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-zinc-500"
        >
          <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3"></path>
        </svg>
        Realtime Sync
      </div>
      <p className="text-[13px] text-zinc-500 leading-relaxed pr-4">
        Agents operate independently and coordinate tasks to complete complex
        all goals
      </p>
    </motion.div>
  );
};
