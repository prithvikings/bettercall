"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

export const OneClickAuthCard = ({ variants }: { variants: Variants }) => {
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
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
        One Click Auth
      </div>
      <p className="text-[13px] text-zinc-500 leading-relaxed pr-4">
        A drag-and-drop interface to create, connect, and configure agents into
        logical workflows
      </p>
    </motion.div>
  );
};
