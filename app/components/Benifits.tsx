"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { leftCards, rightCards } from "./Data/benefitsData";
import { BenefitCard } from "./BenefitsMicroComponents/BenefitCard";
import { CenterVisualMockup } from "./BenefitsMicroComponents/CenterVisualMockup";

const Benefits = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <div className="relative z-20 w-full border-b border-blue-200 font-poppins bg-gradient-to-b from-[#faf9f5] to-zinc-50">
      <div className="relative max-w-6xl mx-auto py-24 border-x border-blue-200 flex flex-col items-center justify-center text-center px-6">
        {/* Corner Accents */}
        <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-[3px] border-l-[3px] border-blue-500 z-10"></div>
        <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-[3px] border-r-[3px] border-blue-500 z-10"></div>
        <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-[3px] border-l-[3px] border-blue-500 z-10"></div>
        <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-[3px] border-r-[3px] border-blue-500 z-10"></div>

        {/* Header Section */}
        <div className="flex items-center justify-center flex-col gap-4 z-10 mb-16">
          <span className="text-blue-500 text-xs font-medium font-poppins uppercase tracking-wider">
            Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight font-poppins text-zinc-900">
            Making Engineers 10x faster
          </h2>
          <p className="text-sm font-poppins text-zinc-500 tracking-tight max-w-lg leading-relaxed mt-1">
            We empower developers and technical teams to create, simulate, and
            manage AI-driven workflows visually
          </p>
        </div>

        {/* 3-Column Layout Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-5xl z-10"
        >
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {leftCards.map((item) => (
              <BenefitCard key={item.id} item={item} variants={itemVariants} />
            ))}
          </div>

          {/* Center Column: Visual Mockup */}
          <CenterVisualMockup variants={itemVariants} />

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {rightCards.map((item) => (
              <BenefitCard key={item.id} item={item} variants={itemVariants} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;
