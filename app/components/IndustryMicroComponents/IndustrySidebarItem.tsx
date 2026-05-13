"use client";
import React from "react";
import { motion } from "framer-motion";

export const IndustrySidebarItem = ({
  item,
  isActive,
  onClick,
  duration,
  activeIndex,
}: any) => {
  return (
    <div
      onClick={onClick}
      className={`relative p-8 py-5 border-b border-blue-200/60 cursor-pointer transition-colors overflow-hidden ${
        isActive
          ? "bg-gradient-to-r from-blue-50/50 to-transparent"
          : "hover:bg-zinc-50"
      }`}
    >
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #93C5FD 1.5px, transparent 1.5px)",
            backgroundSize: "10px 10px",
            backgroundPosition: "top right",
            WebkitMaskImage:
              "radial-gradient(120% 120% at top right, black 0%, transparent 60%)",
            maskImage:
              "radial-gradient(120% 120% at top right, black 0%, transparent 60%)",
          }}
        />
      )}

      <div className="relative z-10">
        <div
          className={`flex items-center gap-3 mb-1 transition-colors duration-300 ${isActive ? "text-blue-600" : "text-zinc-700"}`}
        >
          <div className={`${isActive ? "text-blue-500" : "text-zinc-400"}`}>
            {item.icon}
          </div>
          <h3
            className={`text-[15px] font-poppins font-medium ${isActive ? "text-zinc-900" : "text-zinc-800"}`}
          >
            {item.title}
          </h3>
        </div>

        <div className="relative pl-7">
          <motion.div
            initial={false}
            animate={{ height: isActive ? "auto" : "24px" }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="relative overflow-hidden w-full"
          >
            <motion.p
              initial={false}
              animate={{
                opacity: isActive ? 0 : 1,
                filter: isActive ? "blur(4px)" : "blur(0px)",
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 text-[13px] text-zinc-400 leading-relaxed font-poppins truncate pointer-events-none"
            >
              {item.shortDesc}
            </motion.p>

            <motion.p
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                filter: isActive ? "blur(0px)" : "blur(4px)",
              }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-[13px] text-zinc-600 leading-relaxed font-poppins pointer-events-none"
            >
              {item.longDesc}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {isActive && (
        <motion.div
          key={`progress-${activeIndex}`}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: duration / 1000, ease: "linear" }}
          className="absolute bottom-0 left-0 h-[2px] bg-blue-500 z-10"
        />
      )}
    </div>
  );
};
