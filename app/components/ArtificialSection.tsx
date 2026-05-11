"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

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
            {/* Box 1: LLM Model Selector */}
            <motion.div
              variants={itemVariants}
              className="border-r border-blue-200 flex flex-col relative overflow-hidden group"
            >
              <div className="p-10 pb-0 z-10">
                <div className="flex items-center gap-2 text-zinc-800 font-medium mb-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                  LLM Model Selector
                </div>
                <p className="text-[13px] text-zinc-500 leading-relaxed pr-8">
                  Track real-time activity of agents with detailed records of
                  triggers, tools used, outcomes, and timestamps.
                </p>
              </div>

              {/* Box 1 Mockup */}
              <div className="relative w-full h-[280px] mt-8 flex justify-center">
                <div className="absolute top-10 w-[85%] bg-white rounded-t-xl shadow-[0_0_40px_rgba(0,0,0,0.05)] border border-zinc-200/80 p-5 z-0">
                  {/* MacOS Dots */}
                  <div className="flex items-center gap-1.5 mb-6">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                  </div>
                  {/* List Items */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                      <div className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          ></rect>
                        </svg>
                        All Models
                        <span className="bg-zinc-100 text-zinc-500 px-1.5 py-0.5 rounded text-[10px]">
                          69,420
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-zinc-600">
                        <span className="text-rose-500">✺</span> Claude 4 Opus
                      </div>
                      <span className="text-[10px] text-rose-500 border border-rose-200 px-2 py-0.5 rounded">
                        Unavailable
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-zinc-600">
                        <span className="text-emerald-500">✇</span> ChatGPT
                      </div>
                      <span className="text-[10px] text-emerald-600 border border-emerald-200 px-2 py-0.5 rounded">
                        Connected
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-zinc-600">
                        <span className="text-blue-500">∞</span> Llama 3.2
                      </div>
                      <span className="text-[10px] text-amber-600 border border-amber-200 px-2 py-0.5 rounded">
                        Waiting
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Floating Selector (Overlaps UI) */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute right-6 top-0 bg-white rounded-lg shadow-xl border border-zinc-200 p-3 w-48 z-20"
                >
                  <div className="flex items-center justify-between mb-3 text-xs font-medium text-zinc-800">
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-900">✇</span> Open AI
                    </div>
                    <span className="text-zinc-400 text-[10px]">GPT 5</span>
                  </div>
                  <div className="text-[10px] text-blue-600 border border-blue-200 bg-blue-50 px-2 py-1 rounded text-center w-full">
                    Connected
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Box 2: Text to workflow builder */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col relative overflow-hidden bg-white/20"
            >
              <div className="p-10 pb-0 z-10">
                <div className="flex items-center gap-2 text-zinc-800 font-medium mb-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                  </svg>
                  Text to workflow builder
                </div>
                <p className="text-[13px] text-zinc-500 leading-relaxed pr-8">
                  Preview and debug workflow logic in a safe sandbox before
                  deploying, helping you iterate with confidence.
                </p>
              </div>

              {/* Box 2 Chat Mockup */}
              <div className="relative w-full h-[280px] mt-8 flex flex-col justify-end px-10 pb-6">
                {/* Bot Message Fade */}
                <div className="flex items-start gap-3 mb-4 opacity-30">
                  <div className="w-6 h-6 rounded border border-zinc-200 flex items-center justify-center bg-white shrink-0">
                    <div className="w-3 h-3 rounded-sm bg-zinc-300"></div>
                  </div>
                  <div className="bg-zinc-50 border border-zinc-100 rounded-2xl rounded-tl-sm p-3 px-4 text-xs text-zinc-400 max-w-[80%]">
                    I'm good, thank you! How can I help you today?
                  </div>
                </div>

                {/* User Message */}
                <div className="flex items-end justify-end gap-3 mb-4">
                  <div className="bg-blue-500 rounded-2xl rounded-tr-sm p-3 px-4 text-xs text-white max-w-[80%] shadow-sm">
                    I want to create a workflow that will send an email to all
                    my clients
                  </div>
                  <div className="w-6 h-6 rounded-full bg-indigo-100 border border-indigo-200 shrink-0 overflow-hidden">
                    {/* Placeholder Avatar */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-full h-full text-indigo-400"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="8" r="4"></circle>
                      <path d="M20 21a8 8 0 0 0-16 0"></path>
                    </svg>
                  </div>
                </div>

                {/* Bot Message */}
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-6 h-6 rounded border border-zinc-200 flex items-center justify-center bg-white shadow-sm shrink-0">
                    <div className="w-3 h-3 rounded-sm bg-zinc-800"></div>
                  </div>
                  <div className="bg-white border border-zinc-200 rounded-2xl rounded-tl-sm p-3 px-4 text-xs text-zinc-600 max-w-[80%] shadow-sm">
                    Nah, do it yourself.
                  </div>
                </div>

                {/* Input Bar */}
                <div className="w-full bg-white border border-zinc-200 rounded-full p-2 px-4 flex items-center justify-between shadow-sm">
                  <span className="text-[11px] text-zinc-400">
                    Ask Notus AI
                  </span>
                  <div className="flex items-center gap-3 text-zinc-400">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                    </svg>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ROW 2: 100% Width (Node Graph) */}
          <motion.div
            variants={itemVariants}
            className="border-b border-blue-200 flex flex-col relative overflow-hidden bg-white/10 min-h-[450px]"
          >
            {/* Dotted Background Pattern */}
            <div
              className="absolute inset-0 z-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            ></div>

            <div className="p-10 z-10 relative">
              <div className="flex items-center gap-2 text-zinc-800 font-medium mb-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
                Native Tools Integration
              </div>
              <p className="text-[13px] text-zinc-500 leading-relaxed max-w-2xl">
                Track real-time activity of agents with detailed records of
                triggers, tools used, outcomes, and timestamps.
              </p>
            </div>

            {/* Node Mockup Area */}
            <div className="relative w-full h-[300px] mt-4 flex items-center justify-center z-10">
              {/* Horizontal Connecting Lines (Background) */}
              <div className="absolute top-1/2 left-[20%] right-[30%] h-px border-t border-dashed border-zinc-300 z-0"></div>

              {/* Left Side Triggers */}
              <div className="absolute left-[10%] flex flex-col gap-6 z-10">
                <div className="flex items-center gap-3 text-[11px] text-zinc-600 bg-white/80 py-1 px-3 rounded shadow-sm border border-zinc-100">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  Meeting Summarizer
                </div>
                <div className="flex items-center gap-3 text-[11px] text-zinc-600 bg-white/80 py-1 px-3 rounded shadow-sm border border-zinc-100 relative">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  Code Reviewer
                  {/* Line connecting to center */}
                  <div className="absolute top-1/2 left-full w-[150px] h-px bg-zinc-200 z-[-1]"></div>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-zinc-600 bg-white/80 py-1 px-3 rounded shadow-sm border border-zinc-100">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Customer Support
                </div>
              </div>

              {/* Center Main Node */}
              <div className="absolute left-[45%] bg-white w-14 h-14 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-zinc-200 flex items-center justify-center z-20">
                <div className="w-6 h-6 rounded-sm bg-zinc-900 flex items-center justify-center">
                  {/* Abstract Logo */}
                  <div className="w-2 h-2 rounded-full bg-white absolute top-4 left-4"></div>
                  <div className="w-2 h-2 rounded-full bg-white absolute bottom-4 right-4"></div>
                </div>
                {/* Subtle red glow border pseudo-element on bottom right as seen in image */}
                <div className="absolute -inset-px bg-linear-to-br from-transparent to-rose-200 rounded-xl z-[-1]"></div>
              </div>

              {/* Connected Badge */}
              <div className="absolute left-[58%] text-[9px] text-blue-500 border border-blue-200 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wide z-20">
                Connected
              </div>

              {/* Right Side Integrations (Nodes) */}
              <div className="absolute right-[25%] flex items-center gap-10 z-10">
                <div className="relative">
                  {/* Top Node */}
                  <div className="absolute -top-16 left-0 bg-white w-10 h-10 rounded-lg shadow-sm border border-zinc-200 flex items-center justify-center">
                    <span className="font-bold text-zinc-800 text-sm">N</span>
                  </div>
                  {/* Vertical line top */}
                  <div className="absolute -top-6 left-5 w-px h-6 bg-zinc-200"></div>

                  {/* Middle Node */}
                  <div className="bg-white w-10 h-10 rounded-lg shadow-sm border border-zinc-200 flex items-center justify-center z-10 relative">
                    {/* Slack-ish Hash */}
                    <span className="font-bold text-rose-500 text-lg">#</span>
                  </div>

                  {/* Vertical line bottom */}
                  <div className="absolute top-10 left-5 w-px h-10 bg-zinc-200"></div>
                  {/* Bottom Node */}
                  <div className="absolute top-20 left-0 bg-white w-10 h-10 rounded-lg shadow-sm border border-zinc-200 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#18181b_2px,#18181b_4px)]"></div>
                  </div>
                </div>

                {/* Far Right Node */}
                <div className="bg-white w-10 h-10 rounded-lg shadow-sm border border-zinc-200 flex items-center justify-center relative">
                  <div className="absolute top-1/2 -left-10 w-10 h-px bg-zinc-200 z-[-1]"></div>
                  <span className="text-zinc-600 text-sm">✇</span>
                </div>

                {/* Top Far Right Floating Node */}
                <div className="absolute -top-20 right-4 bg-white w-10 h-10 rounded-lg shadow-sm border border-zinc-200 flex items-center justify-center">
                  <div className="absolute top-10 left-1/2 w-px h-20 bg-zinc-200 z-[-1]"></div>
                  <span className="text-emerald-500 text-xl font-bold">⚡</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ROW 3: Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Feat 1 */}
            <motion.div
              variants={itemVariants}
              className="p-10 border-r border-blue-200 bg-white/40 group hover:bg-zinc-50 transition-colors"
            >
              <div className="flex items-center gap-2 text-zinc-800 font-medium mb-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-zinc-500"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                One Click Auth
              </div>
              <p className="text-[13px] text-zinc-500 leading-relaxed pr-4">
                A drag-and-drop interface to create, connect, and configure
                agents into logical workflows
              </p>
            </motion.div>

            {/* Feat 2 */}
            <motion.div
              variants={itemVariants}
              className="p-10 border-r border-blue-200 bg-white/40 group hover:bg-zinc-50 transition-colors"
            >
              <div className="flex items-center gap-2 text-zinc-800 font-medium mb-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-zinc-500"
                >
                  <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3"></path>
                </svg>
                Realtime Sync
              </div>
              <p className="text-[13px] text-zinc-500 leading-relaxed pr-4">
                Agents operate independently and coordinate tasks to complete
                complex all goals
              </p>
            </motion.div>

            {/* Feat 3 */}
            <motion.div
              variants={itemVariants}
              className="p-10 bg-white/40 group hover:bg-zinc-50 transition-colors"
            >
              <div className="flex items-center gap-2 text-zinc-800 font-medium mb-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-zinc-500"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                Custom Connector SDK
              </div>
              <p className="text-[13px] text-zinc-500 leading-relaxed pr-4">
                Run agent workflows in a sandbox to preview behavior, debug
                logic, and test interactions
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArtificialSection;
