"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

interface BenefitCardProps {
  item: {
    id: string;
    title: string;
    desc: string;
    icon: React.ReactNode;
  };
  variants: Variants;
}

export const BenefitCard = ({ item, variants }: BenefitCardProps) => {
  return (
    <motion.div
      variants={variants}
      className="group flex flex-col text-left p-7 rounded-2xl bg-gradient-to-b from-white/80 to-white/40 border border-zinc-100/80 backdrop-blur-sm hover:from-white hover:to-blue-50/50 hover:border-blue-200/60 transition-all duration-500 cursor-default"
    >
      <div className="text-blue-500 mb-4 transform origin-left transition-transform duration-500 group-hover:scale-110">
        {item.icon}
      </div>
      <h3 className="text-[15px] text-zinc-900 mb-2 font-poppins transition-colors duration-300">
        {item.title}
      </h3>
      <p className="text-[13px] text-zinc-500 leading-relaxed font-poppins">
        {item.desc}
      </p>
    </motion.div>
  );
};
