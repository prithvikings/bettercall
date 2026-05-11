"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const industriesData = [
  {
    id: "real-estate",
    title: "Real Estate",
    shortDesc:
      "Convert property inquiries into booked site visits automatically.",
    longDesc:
      "Capture leads from calls, ads, and WhatsApp. Instantly assign brokers, automate follow-ups, and keep every conversation organized.",
    icon: (
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
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
  },
  {
    id: "clinics",
    title: "Clinics",
    shortDesc: "Never miss a patient inquiry or appointment again.",
    longDesc:
      "Handle appointment calls, reminders, follow-ups, and patient communication from one shared business system.",
    icon: (
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
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
  },
  {
    id: "education",
    title: "Education",
    shortDesc: "Turn student inquiries into admissions faster.",
    longDesc:
      "Track counseling calls, automate follow-ups, and help admission teams respond before leads go cold.",
    icon: (
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
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    ),
  },
  {
    id: "d2c",
    title: "D2C & Ecommerce",
    shortDesc: "Manage customer conversations without losing sales.",
    longDesc:
      "Centralize WhatsApp chats, support calls, order inquiries, and follow-ups across your entire team.",
    icon: (
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
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
    ),
  },
  {
    id: "agencies",
    title: "Agencies",
    shortDesc: "Keep every client conversation organized across your team.",
    longDesc:
      "Track calls, assign leads, manage follow-ups, and maintain visibility across all client interactions.",
    icon: (
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
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    id: "retail",
    title: "Retail",
    shortDesc: "Handle customer calls and store inquiries at scale.",
    longDesc:
      "Route calls to the right staff, respond faster on WhatsApp, and keep customer interactions centralized.",
    icon: (
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
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <path d="M9 22V12h6v10"></path>
      </svg>
    ),
  },
];

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
    <div className="relative z-20 w-full border-b border-blue-200 font-poppins bg-linear-gradient-to-b from-zinc-50 to-[#faf9f5]">
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
            {industriesData.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative p-8 py-5 border-b border-blue-200/60 cursor-pointer transition-colors overflow-hidden ${
                    isActive
                      ? "bg-gradient-to-r from-blue-50/50 to-transparent"
                      : "hover:bg-zinc-50"
                  }`}
                >
                  {/* --- Dense Radial Dots Overlay --- */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 pointer-events-none z-0"
                      style={{
                        // Increased dot density by shrinking backgroundSize from 16px to 10px
                        backgroundImage:
                          "radial-gradient(circle, #93C5FD 1.5px, transparent 1.5px)",
                        backgroundSize: "10px 10px",
                        backgroundPosition: "top right",
                        WebkitMaskImage:
                          "radial-gradient(120% 120% at top right, black 0%, transparent 60%)",
                        maskImage:
                          "radial-gradient(120% 120% at top right, black 0%, transparent 60%)",
                      }}
                    />
                  )}

                  {/* Wrapper to keep text above the background dots */}
                  <div className="relative z-10">
                    {/* Step Header */}
                    <div
                      className={`flex items-center gap-3 mb-1 transition-colors duration-300 ${
                        isActive ? "text-blue-600" : "text-zinc-700"
                      }`}
                    >
                      <div
                        className={`${
                          isActive ? "text-blue-500" : "text-zinc-400"
                        }`}
                      >
                        {item.icon}
                      </div>
                      <h3
                        className={`text-[15px] font-poppins font-medium ${
                          isActive ? "text-zinc-900" : "text-zinc-800"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* Expandable Content Area (Pure CSS/Framer Dissolve Trick) */}
                    <div className="relative pl-7">
                      <motion.div
                        initial={false}
                        animate={{ height: isActive ? "auto" : "24px" }}
                        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                        className="relative overflow-hidden w-full"
                      >
                        {/* Short Description (Fades OUT when active) */}
                        <motion.p
                          initial={false}
                          animate={{
                            opacity: isActive ? 0 : 1,
                            filter: isActive ? "blur(4px)" : "blur(0px)",
                          }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 text-[13px] text-zinc-400 leading-relaxed font-poppins truncate pointer-events-none"
                        >
                          {item.shortDesc}
                        </motion.p>

                        {/* Long Description (Fades IN when active) */}
                        <motion.p
                          initial={false}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            filter: isActive ? "blur(0px)" : "blur(4px)",
                          }}
                          transition={{ duration: 0.4, delay: 0.05 }}
                          className="text-[13px] text-zinc-600 leading-relaxed font-poppins pointer-events-none"
                        >
                          {item.longDesc}
                        </motion.p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Duration Progress Bar */}
                  {isActive && (
                    <motion.div
                      key={`progress-${activeIndex}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: DURATION / 1000, ease: "linear" }}
                      className="absolute bottom-0 left-0 h-[2px] bg-blue-500 z-10"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Diagram Area */}
          <div className="relative flex items-center justify-center p-12 bg-[#faf9f5] overflow-hidden min-h-[450px]">
            {/* Dotted Background Pattern */}
            <div
              className="absolute inset-0 z-0 opacity-50"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            ></div>

            {/* UI Mockups Container */}
            <div className="relative z-10 flex items-center gap-12 w-full max-w-lg justify-center">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-[2px] bg-blue-500 z-0 flex items-center justify-between">
                <div className="w-2.5 h-2.5 rounded-full border-[2px] border-blue-500 bg-white -ml-1"></div>
                <div className="w-2.5 h-2.5 rounded-full border-[2px] border-blue-500 bg-white -mr-1"></div>
              </div>

              {/* Left Card: Tasks */}
              <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-200/60 p-5 w-[240px] z-10 relative">
                <div className="absolute -top-5 -right-5 bg-white p-2 rounded-xl shadow-sm border border-zinc-100">
                  <div className="w-8 h-8 rounded-lg bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#f4f4f5_2px,#f4f4f5_4px)] flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#52525b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4 text-[11px] text-zinc-400 font-medium uppercase tracking-wider">
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
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                  </svg>
                  Tasks
                </div>
                <p className="text-[12px] text-zinc-500 mb-6 leading-relaxed font-poppins">
                  Write the first and second rule of it using Claude and
                  ChatGPT.
                </p>
                <div className="space-y-2">
                  <div className="h-2 bg-zinc-100 rounded-full w-full"></div>
                  <div className="h-2 bg-zinc-100 rounded-full w-2/3"></div>
                </div>
              </div>

              {/* Right Card: Integrations */}
              <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-200/60 p-5 w-[240px] z-10 relative">
                <div className="absolute -top-5 -left-5 bg-white p-2 rounded-xl shadow-sm border border-zinc-100">
                  <div className="w-8 h-8 rounded-lg bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#f4f4f5_2px,#f4f4f5_4px)] flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#52525b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    </svg>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2 text-[11px] text-zinc-400 font-medium uppercase tracking-wider">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect
                        x="2"
                        y="7"
                        width="20"
                        height="14"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    Integrations
                  </div>
                  <span className="bg-zinc-100 text-zinc-500 px-2 py-0.5 rounded text-[10px] font-medium">
                    200
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[12px] text-zinc-700 font-medium font-poppins">
                      <div className="w-4 h-4 rounded-full border border-zinc-300 flex items-center justify-center">
                        <span className="text-[8px]">GPT</span>
                      </div>
                      ChatGPT
                    </div>
                    <span className="text-[9px] text-blue-600 border border-blue-200 bg-blue-50 px-1.5 py-0.5 rounded uppercase tracking-wide">
                      Connected
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[12px] text-zinc-700 font-medium font-poppins">
                      <div className="w-4 h-4 rounded-full border border-zinc-300 flex items-center justify-center">
                        <span className="text-[8px]">CLA</span>
                      </div>
                      Claude 4 Opus
                    </div>
                    <span className="text-[9px] text-blue-600 border border-blue-200 bg-blue-50 px-1.5 py-0.5 rounded uppercase tracking-wide">
                      Connected
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mt-5 pt-5 border-t border-zinc-100">
                  <div className="h-2 bg-zinc-100 rounded-full w-full"></div>
                  <div className="h-2 bg-zinc-100 rounded-full w-4/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
