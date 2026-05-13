"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { CodeFolderIcon } from "@hugeicons/core-free-icons";

export const CustomConnectorCard = ({ variants }: { variants: Variants }) => {
  return (
    <motion.div
      variants={variants}
      className="p-10 bg-white/40 group hover:bg-zinc-50 transition-colors"
    >
      <div className="flex items-center gap-2 text-zinc-800 font-medium mb-3">
        <HugeiconsIcon
          icon={CodeFolderIcon}
          size={20}
          className="text-zinc-500 group-hover:text-zinc-900 transition-colors duration-200 ease-in-out"
        />
        Custom Connector SDK
      </div>
      <p className="text-[13px] text-zinc-500 leading-relaxed pr-4">
        Run agent workflows in a sandbox to preview behavior, debug logic, and
        test interactions
      </p>
    </motion.div>
  );
};
