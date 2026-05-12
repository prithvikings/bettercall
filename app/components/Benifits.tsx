"use client";
import React from "react";
import { motion } from "framer-motion";

const leftCards = [
  {
    id: "launch-faster",
    title: "Launch Faster",
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
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
      </svg>
    ),
  },
  {
    id: "iterate-rapidly",
    title: "Iterate Rapidly",
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
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
        <path d="M3 3v5h5"></path>
      </svg>
    ),
  },
  {
    id: "scale-smarter",
    title: "Scale Smarter",
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
        <rect x="18" y="3" width="4" height="18"></rect>
        <rect x="10" y="8" width="4" height="13"></rect>
        <rect x="2" y="13" width="4" height="8"></rect>
      </svg>
    ),
  },
];

const rightCards = [
  {
    id: "reuse-intelligence",
    title: "Reuse Intelligence",
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
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
  },
  {
    id: "prevent-breakdowns",
    title: "Prevent Breakdowns",
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
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    ),
  },
  {
    id: "automate-more",
    title: "Automate More",
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
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
];

const Benefits = () => {
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
          {/* Left Column: 3 Cards */}
          <div className="flex flex-col gap-6">
            {leftCards.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                // Updated Card Classes Here
                className="group flex flex-col text-left p-7 rounded-2xl bg-gradient-to-b from-white/80 to-white/40 border border-zinc-100/80 backdrop-blur-sm hover:from-white hover:to-blue-50/50 hover:border-blue-200/60 transition-all duration-500 cursor-default"
              >
                {/* Micro-interaction on the icon wrapper */}
                <div className="text-blue-500 mb-4 transform origin-left transition-transform duration-500 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-[15px] font-medium text-zinc-900 mb-2 font-poppins transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed font-poppins">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center Column: Visual Mockup */}
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col items-center bg-white/40 border border-zinc-100/80 rounded-2xl overflow-hidden min-h-[500px] lg:min-h-full"
          >
            {/* Dotted Background Pattern */}
            <div
              className="absolute inset-0 z-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
                backgroundSize: "14px 14px",
              }}
            ></div>

            {/* Top Area: Node Graph */}
            <div className="relative w-full h-[240px] flex items-center justify-center z-10 mt-6">
              {/* Connecting Background Line */}
              <div className="absolute top-1/2 left-[15%] right-[15%] h-[1px] bg-zinc-200 z-0"></div>

              {/* Node 1: GPT */}
              <div className="absolute left-[15%] -translate-x-1/2 bg-white w-10 h-10 rounded-xl shadow-sm border border-zinc-200 flex items-center justify-center z-10">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-zinc-700"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
              </div>

              {/* Node 2: Center Main */}
              <div className="absolute left-1/2 -translate-x-1/2 bg-white w-14 h-14 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-zinc-200 flex items-center justify-center z-20">
                <div className="w-6 h-6 rounded-md bg-zinc-900 flex items-center justify-center relative">
                  <div className="w-2 h-2 rounded-full bg-white absolute top-0 left-0 -ml-1 -mt-1"></div>
                  <div className="w-2 h-2 rounded-full bg-white absolute bottom-0 right-0 -mr-1 -mb-1"></div>
                </div>
                {/* Red/Blue subtle glow under the center box */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-100 to-rose-100 rounded-2xl z-[-1]"></div>

                {/* Connected Badge directly under center node */}
                <div className="absolute -bottom-8 whitespace-nowrap text-[9px] text-blue-500 border border-blue-200 bg-blue-50 px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                  Connected
                </div>
              </div>

              {/* Node 3: Slack */}
              <div className="absolute right-[15%] translate-x-1/2 bg-white w-10 h-10 rounded-xl shadow-sm border border-zinc-200 flex items-center justify-center z-10">
                <span className="text-blue-500 font-bold text-lg">#</span>
              </div>
            </div>

            {/* Bottom Area: Dashboard Mockup */}
            <div className="relative mt-auto w-[85%] bg-white rounded-t-2xl border border-zinc-200 shadow-xl p-5 pt-6 z-20">
              {/* Floating Notification Toast */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 right-4 bg-white border border-zinc-200 shadow-sm rounded-full px-3 py-1.5 flex items-center gap-2"
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-zinc-400"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                <span className="text-[9px] font-medium text-zinc-500">
                  You talking to me
                </span>
              </motion.div>

              {/* MacOS Window Dots */}
              <div className="flex gap-1.5 mb-5">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              </div>

              <h4 className="font-semibold text-xs mb-4 text-zinc-900">
                Dashboard
              </h4>

              {/* Progress Bars */}
              <div className="space-y-4">
                <div>
                  <div className="text-[9px] font-medium text-zinc-400 mb-1.5 tracking-wide">
                    API Calls
                  </div>
                  <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-zinc-300 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="text-[9px] font-medium text-zinc-400 mb-1.5 tracking-wide">
                    Success Rate
                  </div>
                  <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                    <div className="w-[92%] h-full bg-zinc-300 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="text-[9px] font-medium text-zinc-400 mb-1.5 tracking-wide">
                    Workflows
                  </div>
                  <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                    <div className="w-[45%] h-full bg-zinc-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3 Cards */}
          <div className="flex flex-col gap-6">
            {rightCards.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                // Updated Card Classes Here
                className="group flex flex-col text-left p-7 rounded-2xl bg-gradient-to-b from-white/80 to-white/40 border border-zinc-100/80 backdrop-blur-sm hover:from-white hover:to-blue-50/50 hover:border-blue-200/60 transition-all duration-500 cursor-default"
              >
                {/* Micro-interaction on the icon wrapper */}
                <div className="text-blue-500 mb-4 transform origin-left transition-transform duration-500 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-[15px] font-medium text-zinc-900 mb-2 font-poppins transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed font-poppins">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;
