"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

export const PricingCard = ({ tier, isAnnual, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col p-8 md:p-10 ${
        tier.badge ? "bg-zinc-50/50 relative" : "bg-white"
      }`}
    >
      {/* Optional Badge */}
      {tier.badge && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-[11px] uppercase tracking-wider px-3 py-1 rounded-none shadow-sm z-10">
          {tier.badge}
        </div>
      )}

      {/* Tier Header */}
      <div className="mb-6">
        <h3 className="text-xl text-zinc-900 tracking-tight flex items-center gap-2">
          {tier.name}
          {tier.name === "AI Workforce" && (
            <Sparkles className="w-4 h-4 text-blue-500" />
          )}
        </h3>
        <p className="text-sm text-zinc-500 mt-2 min-h-[40px]">
          {tier.description}
        </p>
      </div>

      {/* 3D Drum Roll Price Animation */}
      <div className="mb-6 border-b border-zinc-100 pb-6">
        <div className="flex items-end gap-1.5 h-[40px]">
          <span className="text-4xl font-semibold text-zinc-900 tracking-tighter leading-none pb-0.5">
            $
          </span>

          <div
            className="relative flex items-end overflow-hidden h-[40px]"
            style={{ perspective: "1000px" }}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={isAnnual ? "yearly" : "monthly"}
                initial={{
                  y: isAnnual ? -40 : 40,
                  rotateX: isAnnual ? -90 : 90,
                  opacity: 0,
                }}
                animate={{ y: 0, rotateX: 0, opacity: 1 }}
                exit={{
                  y: isAnnual ? 40 : -40,
                  rotateX: isAnnual ? 90 : -90,
                  opacity: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
                className="text-4xl font-semibold text-zinc-900 tracking-tighter leading-none pb-0.5"
              >
                {isAnnual ? tier.yearlyPrice : tier.monthlyPrice}
              </motion.div>
            </AnimatePresence>
          </div>

          <span className="text-sm font-medium text-zinc-500 mb-1 whitespace-nowrap">
            / month
          </span>
        </div>
      </div>

      <p className="text-sm text-zinc-700 leading-relaxed mb-4 min-h-[60px]">
        {tier.positioning}
      </p>

      {/* Interactive CTA Button */}
      <motion.div
        initial="rest"
        whileHover="hover"
        className="relative w-full mb-10 p-[3px] cursor-pointer group"
      >
        <motion.div
          variants={{ rest: { x: 0, y: 0 }, hover: { x: 2, y: 2 } }}
          className="absolute top-0 left-0 size-2.5 border-t-[2px] border-l-[2px] border-zinc-400 group-hover:border-zinc-700 transition-colors pointer-events-none"
        ></motion.div>
        <motion.div
          variants={{ rest: { x: 0, y: 0 }, hover: { x: -2, y: 2 } }}
          className="absolute top-0 right-0 size-2.5 border-t-[2px] border-r-[2px] border-zinc-400 group-hover:border-zinc-700 transition-colors pointer-events-none"
        ></motion.div>
        <motion.div
          variants={{ rest: { x: 0, y: 0 }, hover: { x: 2, y: -2 } }}
          className="absolute bottom-0 left-0 size-2.5 border-b-[2px] border-l-[2px] border-zinc-400 group-hover:border-zinc-700 transition-colors pointer-events-none"
        ></motion.div>
        <motion.div
          variants={{ rest: { x: 0, y: 0 }, hover: { x: -2, y: -2 } }}
          className="absolute bottom-0 right-0 size-2.5 border-b-[2px] border-r-[2px] border-zinc-400 group-hover:border-zinc-700 transition-colors pointer-events-none"
        ></motion.div>

        <button
          className={`w-full py-3 px-4 rounded-none text-sm font-mono tracking-tight transition-colors flex items-center justify-center overflow-hidden ${
            tier.buttonVariant === "primary"
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
          }`}
        >
          <div
            className="relative w-full h-5 flex items-center justify-center"
            style={{ perspective: "1000px" }}
          >
            <motion.span
              variants={{
                rest: { y: 0, rotateX: 0, opacity: 1 },
                hover: { y: -20, rotateX: 90, opacity: 0 },
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {tier.buttonText}
            </motion.span>
            <motion.span
              variants={{
                rest: { y: 20, rotateX: -90, opacity: 0 },
                hover: { y: 0, rotateX: 0, opacity: 1 },
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden="true"
            >
              {tier.buttonText}
            </motion.span>
          </div>
        </button>
      </motion.div>

      {/* Features List */}
      <div className="flex-1">
        <p className="text-xs font-medium text-zinc-900 uppercase tracking-wider mb-4">
          Key Capabilities
        </p>
        <ul className="flex flex-col gap-3">
          {tier.features.map((feature: string, i: number) => (
            <li
              key={i}
              className="flex items-start gap-3 text-xs text-zinc-600"
            >
              <Check
                className={`w-4 h-4 mt-0.5 shrink-0 ${
                  i === 0 && tier.name !== "Starter"
                    ? "text-blue-500"
                    : "text-zinc-400"
                }`}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
