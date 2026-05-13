"use client";
import React from "react";
import { motion } from "framer-motion";

interface BillingToggleProps {
  isAnnual: boolean;
  setIsAnnual: (val: boolean) => void;
}

export const BillingToggle = ({
  isAnnual,
  setIsAnnual,
}: BillingToggleProps) => {
  return (
    <div className="relative p-[3px] mt-10 group">
      {/* Corner Bracket Accents */}
      <div className="absolute top-0 left-0 size-2 border-t-[2px] border-l-[2px] border-zinc-400 transition-colors pointer-events-none"></div>
      <div className="absolute top-0 right-0 size-2 border-t-[2px] border-r-[2px] border-zinc-400 transition-colors pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 size-2 border-b-[2px] border-l-[2px] border-zinc-400 transition-colors pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 size-2 border-b-[2px] border-r-[2px] border-zinc-400 transition-colors pointer-events-none"></div>

      <div className="flex items-center bg-zinc-50 border border-zinc-200 p-1">
        {/* Monthly Button */}
        <button
          onClick={() => setIsAnnual(false)}
          className={`relative px-6 py-2 rounded-none text-sm transition-colors z-10 ${
            !isAnnual ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900"
          }`}
        >
          {!isAnnual && (
            <motion.div
              layoutId="billing-bg"
              className="absolute inset-0 bg-white border border-zinc-200/50 shadow-sm -z-10"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          Monthly
        </button>

        {/* Yearly Button */}
        <button
          onClick={() => setIsAnnual(true)}
          className={`relative px-6 py-2 rounded-none text-sm font-medium transition-colors flex items-center gap-2 z-10 ${
            isAnnual ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900"
          }`}
        >
          {isAnnual && (
            <motion.div
              layoutId="billing-bg"
              className="absolute inset-0 bg-white border border-zinc-200/50 shadow-sm -z-10"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          Yearly{" "}
          <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-none uppercase tracking-wider font-semibold">
            Save 20%
          </span>
        </button>
      </div>
    </div>
  );
};
