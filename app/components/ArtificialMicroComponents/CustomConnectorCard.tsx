"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

export const CustomConnectorCard = ({ variants }: { variants: Variants }) => {
  return (
    <motion.div
      variants={variants}
      className="p-10 bg-white/40 group hover:bg-zinc-50 transition-colors"
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
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        Custom Connector SDK
      </div>
      <p className="text-[13px] text-zinc-500 leading-relaxed pr-4">
        Run agent workflows in a sandbox to preview behavior, debug logic, and
        test interactions
      </p>
    </motion.div>
  );
};
