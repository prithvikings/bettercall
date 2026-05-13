"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { FingerPrintScanIcon } from "@hugeicons/core-free-icons";

export const OneClickAuthCard = ({ variants }: { variants: Variants }) => {
  return (
    <motion.div
      variants={variants}
      className="p-10 border-r border-blue-200 bg-white/40 group hover:bg-zinc-50 transition-colors"
    >
      <div className="flex items-center gap-2 text-zinc-800 font-medium mb-3">
        <HugeiconsIcon
          icon={FingerPrintScanIcon}
          size={20}
          className="text-zinc-500 group-hover:text-zinc-900 transition-colors duration-200 ease-in-out"
        />
        One Click Auth
      </div>
      <p className="text-[13px] text-zinc-500 leading-relaxed pr-4">
        A drag-and-drop interface to create, connect, and configure agents into
        logical workflows
      </p>
    </motion.div>
  );
};
