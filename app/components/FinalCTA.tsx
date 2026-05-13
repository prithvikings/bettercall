"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundVisuals } from "./CTAMicroComponents/BackgroundVisuals";
import { CyberButton } from "./CTAMicroComponents/CyberButton";
import { TrustIndicators } from "./CTAMicroComponents/TrustIndicators";
import { ctaContent, trustItems } from "./Data/ctaData";

const FinalCTA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full bg-white overflow-hidden font-inter border-b border-blue-200">
      <BackgroundVisuals />

      <div className="relative max-w-6xl mx-auto px-6 py-24 border-x border-blue-200 z-10 flex flex-col items-center text-center">
        {/* Standard Design System Corner Accents */}
        <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-[3px] border-l-[3px] border-blue-500 z-20"></div>
        <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-[3px] border-r-[3px] border-blue-500 z-20"></div>
        <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-[3px] border-l-[3px] border-blue-500 z-20"></div>
        <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-[3px] border-r-[3px] border-blue-500 z-20"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center w-full max-w-4xl"
        >
          {/* Label */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center gap-2 px-3 py-1.5 mb-8 text-xs font-medium border border-blue-200 bg-blue-50 text-blue-700 shadow-sm"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 bg-blue-600"></span>
            </div>
            <span className="font-poppins uppercase tracking-wider">
              {ctaContent.label}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-normal tracking-tight mb-4 font-poppins text-zinc-900 max-w-xl"
          >
            {ctaContent.headline}
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-center font-poppins mb-6 text-zinc-500 tracking-tight max-w-lg leading-relaxed mt-1"
          >
            {ctaContent.description}
          </motion.p>

          {/* Cyber-Brutalist CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto mb-14"
          >
            <CyberButton
              text={ctaContent.primaryButton}
              variant="primary"
              hasIcon={true}
            />
            <CyberButton
              text={ctaContent.secondaryButton}
              variant="secondary"
            />
          </motion.div>

          {/* Trust / Reassurance Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-8 border-t border-zinc-200/60 w-full"
          >
            <TrustIndicators items={trustItems} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
