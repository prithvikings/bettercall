"use client";
import React from "react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { FlowConnectionIcon } from "@hugeicons/core-free-icons";
import { AnalyticsUpIcon } from "@hugeicons/core-free-icons";
import { Wallet01Icon } from "@hugeicons/core-free-icons";

const useCasesData = [
  {
    id: "devops",
    title: "DevOps",
    desc: "Visually orchestrate autonomous agents without writing boilerplate code",
    icon: (
      <HugeiconsIcon
        icon={FlowConnectionIcon}
        size={20}
        className="text-blue-500"
      />
    ),
  },
  {
    id: "salesops",
    title: "SalesOps",
    desc: "Visually orchestrate autonomous agents without writing boilerplate code",
    icon: (
      <HugeiconsIcon
        icon={AnalyticsUpIcon}
        size={20}
        className="text-blue-500"
      />
    ),
  },
  {
    id: "supply-chain",
    title: "Supply Chain",
    desc: "Visually orchestrate autonomous agents without writing boilerplate code",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    ),
  },
  {
    id: "customer-support",
    title: "Customer Support",
    desc: "Visually orchestrate autonomous agents without writing boilerplate code",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
  },
  {
    id: "dataops",
    title: "DataOps",
    desc: "Visually orchestrate autonomous agents without writing boilerplate code",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
  },
  {
    id: "finops",
    title: "FinOps",
    desc: "Visually orchestrate autonomous agents without writing boilerplate code",
    icon: (
      <HugeiconsIcon icon={Wallet01Icon} size={20} className="text-blue-500" />
    ),
  },
];

const UseCase = () => {
  // Stagger animation setup
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <div className="relative z-20 w-full border-b border-blue-200 font-poppins bg-gradient-to-b from-[#faf9f5] to-zinc-50">
      <div className="relative max-w-6xl mx-auto py-24 pb-32 border-x border-blue-200 flex flex-col items-center justify-center text-center px-6">
        {/* Corner Accents */}
        <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-[3px] border-l-[3px] border-blue-500 z-10"></div>
        <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-[3px] border-r-[3px] border-blue-500 z-10"></div>
        <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-[3px] border-l-[3px] border-blue-500 z-10"></div>
        <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-[3px] border-r-[3px] border-blue-500 z-10"></div>

        {/* Header Section */}
        <div className="flex items-center justify-center flex-col gap-4 z-10 mb-16">
          <span className="text-blue-500 text-xs font-medium font-poppins uppercase tracking-wider">
            Use Cases
          </span>
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight font-poppins text-zinc-900">
            Across various Industries
          </h2>
          <p className="text-sm font-poppins text-zinc-500 tracking-tight max-w-lg leading-relaxed mt-1">
            We empower developers and technical teams to create, simulate, and
            manage AI-driven workflows visually
          </p>
        </div>

        {/* Use Cases Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl z-10"
        >
          {useCasesData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="flex flex-col text-left p-8 rounded-2xl bg-white/60 border border-zinc-100/50 hover:bg-white hover:border-zinc-200/60 transition-all duration-300 cursor-default"
            >
              {/* Icon Container */}
              <div className="text-blue-500 mb-5">{item.icon}</div>

              {/* Text Content */}
              <h3 className="text-base font-medium text-zinc-900 mb-2 font-poppins">
                {item.title}
              </h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed font-poppins">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default UseCase;
