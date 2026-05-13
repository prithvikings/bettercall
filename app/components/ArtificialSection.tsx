"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

import { LLMModelSelectorCard } from "./ArtificialMicroComponents/LLMModelSelectorCard";
import { TextToWorkflowCard } from "./ArtificialMicroComponents/TextToWorkflowCard";
import { NativeToolsIntegrationCard } from "./ArtificialMicroComponents/NativeToolsIntegrationCard";
import { OneClickAuthCard } from "./ArtificialMicroComponents/OneClickAuthCard";
import { RealtimeSyncCard } from "./ArtificialMicroComponents/RealtimeSyncCard";
import { CustomConnectorCard } from "./ArtificialMicroComponents/CustomConnectorCard";

const ArtificialSection = () => {
  // Stagger animation variants for the Bento boxes
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="relative z-20 w-full border-b border-blue-200 font-poppins bg-linear-to-b from-zinc-50 to-[#faf9f5]">
      <div className="relative max-w-6xl mx-auto pt-24 border-x border-blue-200 flex flex-col items-center justify-center text-center">
        {/* Corner Accents */}
        <div className="absolute top-[-2px] left-[-2px] w-4 h-4 border-t-[3px] border-l-[3px] border-blue-500 z-10"></div>
        <div className="absolute top-[-2px] right-[-2px] w-4 h-4 border-t-[3px] border-r-[3px] border-blue-500 z-10"></div>
        <div className="absolute bottom-[-2px] left-[-2px] w-4 h-4 border-b-[3px] border-l-[3px] border-blue-500 z-10"></div>
        <div className="absolute bottom-[-2px] right-[-2px] w-4 h-4 border-b-[3px] border-r-[3px] border-blue-500 z-10"></div>

        {/* Header Section */}
        <div className="flex items-center justify-center flex-col gap-4 px-6 z-10">
          <span className="text-blue-500 text-xs font-medium font-poppins uppercase tracking-wider">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight font-poppins text-zinc-900">
            Built for Agentic Intelligence
          </h2>
          <p className="text-sm font-poppins text-zinc-500 tracking-tight max-w-lg leading-relaxed mt-2">
            Build, test and deploy AI agents with a powerful visual interface
            designed for technical teams
          </p>
        </div>

        {/* --- Bento Grid Structure --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full mt-20 border-t border-blue-200 flex flex-col bg-white/40 text-left"
        >
          {/* ROW 1: 50/50 Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-blue-200">
            <LLMModelSelectorCard variants={itemVariants} />
            <TextToWorkflowCard variants={itemVariants} />
          </div>

          {/* ROW 2: 100% Width (Node Graph) */}
          <NativeToolsIntegrationCard variants={itemVariants} />

          {/* ROW 3: Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            <OneClickAuthCard variants={itemVariants} />
            <RealtimeSyncCard variants={itemVariants} />
            <CustomConnectorCard variants={itemVariants} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArtificialSection;
