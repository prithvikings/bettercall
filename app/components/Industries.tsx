"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { industriesData } from "./Data/industriesData";
import { IndustrySidebarItem } from "./IndustryMicroComponents/IndustrySidebarItem";
import { IndustryVisualDisplay } from "./IndustryMicroComponents/IndustryVisualDisplay";

const Industries = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const DURATION = 6000;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) =>
        prev === industriesData.length - 1 ? 0 : prev + 1,
      );
    }, DURATION);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <div className="relative z-20 w-full border-b border-blue-200 font-poppins bg-linear-to-b from-zinc-50 to-[#faf9f5]">
      <div className="relative max-w-6xl mx-auto pt-20 border-x border-blue-200 min-h-[50vh] flex flex-col items-center justify-center text-center">
        {/* Corner Accents */}
        <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-[3px] border-l-[3px] border-blue-500 z-10"></div>
        <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-[3px] border-r-[3px] border-blue-500 z-10"></div>
        <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-[3px] border-l-[3px] border-blue-500 z-10"></div>
        <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-[3px] border-r-[3px] border-blue-500 z-10"></div>

        {/* Header Section */}
        <div className="flex items-center justify-center flex-col gap-4 px-6">
          <motion.span
            className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#2563EB,45%,#93C5FD,55%,#2563EB)] text-xs font-semibold font-poppins uppercase tracking-wider"
            style={{ backgroundSize: "200% 100%" }}
            animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
            transition={{
              repeat: Infinity,
              repeatDelay: 4,
              duration: 2.5,
              ease: "linear",
            }}
          >
            How it Works
          </motion.span>

          <h2 className="text-3xl md:text-4xl font-normal tracking-tight font-poppins text-zinc-900">
            Integrates easily
          </h2>
          <p className="text-sm font-poppins text-zinc-500 tracking-tight max-w-lg leading-relaxed mt-2">
            We empower developers and technical teams to create, simulate, and
            manage AI-driven workflows visually
          </p>
        </div>

        {/* Layout Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full mt-16 border-t border-blue-200 text-left bg-white/50">
          {/* Left Column: Interactive Steps */}
          <div className="flex flex-col border-r border-blue-200">
            {industriesData.map((item, index) => (
              <IndustrySidebarItem
                key={item.id}
                item={item}
                isActive={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                duration={DURATION}
                activeIndex={activeIndex}
              />
            ))}
          </div>

          {/* Right Column: Visual Diagram Area */}
          <IndustryVisualDisplay activeData={industriesData[activeIndex]} />
        </div>
      </div>
    </div>
  );
};

export default Industries;
