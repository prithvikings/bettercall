"use client";
import React from "react";
import { motion } from "framer-motion";

const Problem = () => {
  return (
    <div className="relative z-20 w-full border-b border-blue-200 font-poppins">
      <div className="relative max-w-6xl mx-auto px-4 py-24 border-x border-blue-200 min-h-[50vh] flex flex-col items-center justify-center text-center">
        {/* --- Corner Accents for Main Container --- */}
        <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-[3px] border-l-[3px] border-blue-500 z-10"></div>
        <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-[3px] border-r-[3px] border-blue-500 z-10"></div>
        <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-[3px] border-l-[3px] border-blue-500 z-10"></div>
        <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-[3px] border-r-[3px] border-blue-500 z-10"></div>

        {/* --- Problem Section Header --- */}
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 mb-6 text-sm font-medium border border-orange-200 bg-orange-50 text-orange-700 shadow-sm">
          {/* Subtle Warning Indicator */}
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 bg-orange-600"></span>
          </div>
          <span className="font-poppins">The Communication Gap</span>
        </div>

        <h2 className="text-5xl font-inter tracking-tight font-semibold text-zinc-800">
          Too many chats. <br /> Too many missed leads.
        </h2>

        <p className="text-sm text-zinc-600 max-w-sm font-poppins mt-4 mb-16">
          Your team shouldn’t lose customers because conversations are spread
          everywhere.
        </p>

        {/* --- Bento Grid (The Chaos Visualization) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl text-left">
          {/* Bento Box 1: Missed Calls */}
          {/* FIX: Explicitly removed 'overflow-hidden' from the end of this class string */}
          <div className="group relative bg-[#faf9f5] border border-zinc-200 p-6 flex flex-col h-[320px] transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50">
            {/* --- Orange Card Corners (Expands slightly on hover) --- */}
            <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-orange-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-orange-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-orange-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-orange-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

            <h3 className="font-inter font-semibold text-zinc-900 text-lg">
              Missed Opportunities
            </h3>
            <p className="font-poppins text-sm text-zinc-500 mt-1">
              Customers call once. If you miss it, they call your competitor.
            </p>

            <div className="mt-8 flex flex-col gap-3 relative z-10 pointer-events-none">
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white border border-red-100 shadow-sm p-3 flex items-center gap-3"
              >
                <div className="bg-red-50 p-2 text-red-600 border border-red-100">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3l18 18m-2.5-4.5v4.5h-4.5M16 9l-4 4-4-4"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-800">
                    Missed Call: +91 98765 XXXXX
                  </p>
                  <p className="text-[10px] text-zinc-500 mt-0.5">
                    2 minutes ago • Value: ~₹1.2L
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-white border border-zinc-200 shadow-sm p-3 flex items-center gap-3 opacity-60"
              >
                <div className="bg-zinc-100 p-2 text-zinc-500 border border-zinc-200">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-800">
                    Missed Call: +91 91234 XXXXX
                  </p>
                  <p className="text-[10px] text-zinc-500 mt-0.5">
                    45 minutes ago
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#faf9f5] to-transparent z-10 pointer-events-none"></div>
          </div>

          {/* Bento Box 2: WhatsApp Chaos */}
          <div className="group relative bg-[#faf9f5] border border-zinc-200 p-6 flex flex-col h-[320px] transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50">
            {/* --- Orange Card Corners --- */}
            <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-orange-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-orange-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-orange-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-orange-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

            <h3 className="font-inter font-semibold text-zinc-900 text-lg">
              The WhatsApp Blackhole
            </h3>
            <p className="font-poppins text-sm text-zinc-500 mt-1">
              Conversations stuck on personal devices with zero team visibility.
            </p>

            <div className="mt-8 flex flex-col gap-3 relative z-10 w-full pointer-events-none">
              <motion.div
                initial={{ x: -15, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="self-start max-w-[85%] bg-white border border-zinc-200 shadow-sm p-3"
              >
                <p className="text-xs text-zinc-800 font-medium">
                  Hello? I asked for a quote yesterday.
                </p>
                <p className="text-[9px] text-zinc-400 mt-1.5">
                  Yesterday, 10:42 AM
                </p>
              </motion.div>

              <motion.div
                initial={{ x: 15, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="self-end max-w-[85%] bg-zinc-100 border border-zinc-200 shadow-sm p-3"
              >
                <p className="text-xs text-zinc-700">
                  Sorry, Ramesh is on leave today. Let me check with him.
                </p>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.8 }}
                className="mx-auto mt-2 bg-red-50 text-red-600 border border-red-100 px-3 py-1.5 text-[10px] font-semibold flex items-center gap-1.5 shadow-sm"
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  ></path>
                </svg>
                Customer unresponsive
              </motion.div>
            </div>
          </div>

          {/* Bento Box 3: Broken Follow-ups & CRM */}
          <div className="group relative bg-[#faf9f5] border border-zinc-200 p-6 flex flex-col h-[320px] transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50">
            {/* --- Orange Card Corners --- */}
            <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-orange-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-orange-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-orange-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-orange-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

            <h3 className="font-inter font-semibold text-zinc-900 text-lg">
              Broken Follow-ups
            </h3>
            <p className="font-poppins text-sm text-zinc-500 mt-1">
              Leads drop because no one knows who is supposed to reply.
            </p>

            <div className="mt-8 relative z-10 w-full pointer-events-none">
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-white border border-zinc-200 shadow-sm flex flex-col"
              >
                <div className="p-3 border-b border-zinc-100 flex justify-between items-center bg-zinc-50">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-orange-100 flex items-center justify-center text-orange-600 text-xs font-bold border border-orange-200">
                      AC
                    </div>
                    <p className="text-xs font-semibold text-zinc-800">
                      Acme Corp Inquiry
                    </p>
                  </div>
                  <span className="bg-zinc-200 text-zinc-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider">
                    Unassigned
                  </span>
                </div>

                <div className="p-4 flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-zinc-500 font-medium">
                      Last Contact
                    </p>
                    <p className="text-xs text-red-600 font-semibold">
                      6 days ago
                    </p>
                  </div>

                  <div className="w-full h-1.5 bg-zinc-100 overflow-hidden">
                    <div className="w-1/4 h-full bg-red-500"></div>
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    <svg
                      className="w-3.5 h-3.5 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <p className="text-[10px] text-zinc-500 font-medium">
                      Follow-up critically overdue
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
