"use client";
import React from "react";
import { motion } from "framer-motion";

import { SharedNumberCard } from "./CoreMicroComponents/SharedNumberCard";
import { AIReceptionistCard } from "./CoreMicroComponents/AIReceptionistCard";
import { TeamCollaborationCard } from "./CoreMicroComponents/TeamCollaborationCard";
import { AutomationsCard } from "./CoreMicroComponents/AutomationsCard";
import { WhatsAppCRMCard } from "./CoreMicroComponents/WhatsAppCRMCard";

const CorePlatform = () => {
  return (
    <div className="relative z-20 w-full border-b border-blue-200 font-poppins bg-white">
      <div className="relative max-w-6xl mx-auto px-6 py-24 border-x border-blue-200 min-h-[50vh] flex flex-col">
        {/* --- Corner Accents for Main Container --- */}
        <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-[3px] border-l-[3px] border-blue-500 z-10"></div>
        <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-[3px] border-r-[3px] border-blue-500 z-10"></div>
        <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-[3px] border-l-[3px] border-blue-500 z-10"></div>
        <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-[3px] border-r-[3px] border-blue-500 z-10"></div>

        {/* --- Section Header (Split Layout) --- */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8 mb-16 md:mb-24">
          {/* Left Column: Badge and Headline */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 mb-6 text-xs font-medium border border-blue-200 bg-blue-50 text-blue-700 shadow-sm">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 bg-blue-600"></span>
              </div>
              <span className="font-poppins uppercase tracking-wider">
                Core Platform
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-normal tracking-tight font-poppins text-zinc-900">
              Why can’t I just use <br className="hidden md:block" /> WhatsApp +
              calls?
            </h2>
          </div>

          {/* Right Column: Description and Button */}
          <div className="flex flex-col items-start text-left max-w-md md:mt-12">
            <p className="text-sm text-zinc-500 font-poppins mb-6 tracking-wide leading-relaxed">
              As you grow, structure matters. Personal devices cause missed
              leads, scattered chats, and no visibility. Here’s how we turn the
              mess into a reliable system.
            </p>

            {/* --- Cyber-Brutalist CTA Button --- */}
            <motion.div
              initial="rest"
              whileHover="hover"
              className="relative p-[3px] group cursor-pointer"
            >
              <motion.div
                variants={{ rest: { x: 0, y: 0 }, hover: { x: 2, y: 2 } }}
                className="absolute top-0 left-0 size-2.5 border-t-[2px] border-l-[2px] border-zinc-300 group-hover:border-blue-300 transition-colors pointer-events-none"
              ></motion.div>
              <motion.div
                variants={{ rest: { x: 0, y: 0 }, hover: { x: -2, y: 2 } }}
                className="absolute top-0 right-0 size-2.5 border-t-[2px] border-r-[2px] border-zinc-300 group-hover:border-blue-300 transition-colors pointer-events-none"
              ></motion.div>
              <motion.div
                variants={{ rest: { x: 0, y: 0 }, hover: { x: 2, y: -2 } }}
                className="absolute bottom-0 left-0 size-2.5 border-b-[2px] border-l-[2px] border-zinc-300 group-hover:border-blue-300 transition-colors pointer-events-none"
              ></motion.div>
              <motion.div
                variants={{ rest: { x: 0, y: 0 }, hover: { x: -2, y: -2 } }}
                className="absolute bottom-0 right-0 size-2.5 border-b-[2px] border-r-[2px] border-zinc-300 group-hover:border-blue-300 transition-colors pointer-events-none"
              ></motion.div>

              <button className="py-2.5 px-6 rounded-none text-sm font-mono tracking-tight transition-colors flex items-center justify-center gap-2 overflow-hidden bg-blue-600 hover:bg-blue-700 text-white shadow-sm w-full sm:w-auto">
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
                    Explore features
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
                    Explore features
                  </motion.span>
                  <span className="invisible whitespace-nowrap">
                    Explore features
                  </span>
                </div>

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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </motion.div>
          </div>
        </div>

        {/* --- Asymmetrical Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          {/* TOP ROW */}
          <SharedNumberCard />
          <AIReceptionistCard />
          <TeamCollaborationCard />

          {/* BOTTOM ROW */}
          <AutomationsCard />
          <WhatsAppCRMCard />
        </div>
      </div>
    </div>
  );
};

export default CorePlatform;
