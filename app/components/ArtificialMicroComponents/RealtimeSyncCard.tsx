"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Refresh04Icon } from "@hugeicons/core-free-icons";

export const RealtimeSyncCard = ({ variants }: { variants: Variants }) => {
  return (
    <motion.div
      variants={variants}
      className="p-10 border-r border-blue-200 bg-white/40 group hover:bg-zinc-50 transition-colors"
    >
      <div className="flex items-center gap-2 text-zinc-800 font-medium mb-3">
        <HugeiconsIcon
          icon={Refresh04Icon}
          size={20}
          className="text-zinc-500 group-hover:text-zinc-900 transition-colors duration-200 ease-in-out"
        />
        Realtime Sync
      </div>
      <p className="text-[13px] text-zinc-500 leading-relaxed pr-4">
        Agents operate independently and coordinate tasks to complete complex
        all goals
      </p>
    </motion.div>
  );
};
