"use client";
import React from "react";
import { motion } from "framer-motion";

interface CyberButtonProps {
  text: string;
  variant: "primary" | "secondary";
  hasIcon?: boolean;
}

export const CyberButton = ({
  text,
  variant,
  hasIcon = false,
}: CyberButtonProps) => {
  const isPrimary = variant === "primary";
  const hoverAccentColor = isPrimary
    ? "group-hover:border-blue-400"
    : "group-hover:border-zinc-700";
  const buttonStyles = isPrimary
    ? "bg-blue-600 text-white hover:bg-blue-700 border-none"
    : "border border-zinc-300 bg-transparent text-zinc-800 hover:bg-zinc-50 hover:border-zinc-400";

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className="relative p-[3px] group cursor-pointer w-full sm:w-auto"
    >
      {/* Clamping Brackets */}
      <motion.div
        variants={{ rest: { x: 0, y: 0 }, hover: { x: 2, y: 2 } }}
        className={`absolute top-0 left-0 size-2.5 border-t-[2px] border-l-[2px] border-zinc-400 transition-colors pointer-events-none ${hoverAccentColor}`}
      ></motion.div>
      <motion.div
        variants={{ rest: { x: 0, y: 0 }, hover: { x: -2, y: 2 } }}
        className={`absolute top-0 right-0 size-2.5 border-t-[2px] border-r-[2px] border-zinc-400 transition-colors pointer-events-none ${hoverAccentColor}`}
      ></motion.div>
      <motion.div
        variants={{ rest: { x: 0, y: 0 }, hover: { x: 2, y: -2 } }}
        className={`absolute bottom-0 left-0 size-2.5 border-b-[2px] border-l-[2px] border-zinc-400 transition-colors pointer-events-none ${hoverAccentColor}`}
      ></motion.div>
      <motion.div
        variants={{ rest: { x: 0, y: 0 }, hover: { x: -2, y: -2 } }}
        className={`absolute bottom-0 right-0 size-2.5 border-b-[2px] border-r-[2px] border-zinc-400 transition-colors pointer-events-none ${hoverAccentColor}`}
      ></motion.div>

      <button
        className={`w-full py-2 px-4 rounded-none text-sm font-mono tracking-tight transition-colors flex items-center justify-center gap-2 overflow-hidden sm:w-auto ${buttonStyles}`}
      >
        <div
          className="relative h-5 flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          <motion.span
            variants={{
              rest: { y: 0, rotateX: 0, opacity: 1 },
              hover: { y: -20, rotateX: 90, opacity: 0 },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
          >
            {text}
          </motion.span>
          <motion.span
            variants={{
              rest: { y: 20, rotateX: -90, opacity: 0 },
              hover: { y: 0, rotateX: 0, opacity: 1 },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
            aria-hidden="true"
          >
            {text}
          </motion.span>
          <span className="invisible whitespace-nowrap">{text}</span>
        </div>

        {hasIcon && (
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M12 5l7 7-7 7"
            ></path>
          </svg>
        )}
      </button>
    </motion.div>
  );
};
