"use client";
import React from "react";
// motion imported but unused for now
import { motion } from "framer-motion";

export const WhatsAppCRMCard = () => {
  return (
    <div className="group relative bg-[#faf9f5] border border-zinc-200 px-4 py-4 pb-5 flex flex-col h-[400px] transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50 overflow-hidden md:col-span-1">
      {/* Cyber-Brutalist Corner Accents */}
      <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

      {/* Animation Canvas */}
      <div className="flex-1 w-full bg-white border border-zinc-200 mb-5 flex items-center justify-center relative z-10 overflow-hidden shadow-sm rounded-sm">
        {/* Subtle technical grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:1.25rem_1.25rem] opacity-60"></div>

        <div className="relative w-[300px] h-[190px] flex items-center justify-center z-20">
          {/* Main Dashboard Container */}
          <div className="w-[280px] h-[160px] bg-white border border-zinc-200 shadow-sm rounded-md flex overflow-hidden relative">
            {/* Left Sidebar (Inbox list) */}
            <div className="w-[85px] bg-zinc-50 border-r border-zinc-200 flex flex-col pt-1.5">
              {/* Inactive Row 1 */}
              <div className="flex items-center gap-1.5 px-2 py-1.5 opacity-60">
                <div className="w-5 h-5 rounded-full bg-zinc-200 flex items-center justify-center text-[7px] font-bold text-zinc-500 flex-shrink-0">
                  JD
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[8px] font-semibold text-zinc-700 truncate">
                    John Doe
                  </span>
                  <span className="text-[7px] text-zinc-400 truncate">
                    Thanks for the...
                  </span>
                </div>
              </div>

              {/* Active Highlighted Row */}
              <div className="flex items-center gap-1.5 px-2 py-1.5 bg-blue-50/60 border-l-[2px] border-blue-500 shadow-sm relative z-10">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[7px] font-bold text-blue-600 flex-shrink-0">
                  SS
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[8px] font-semibold text-zinc-900 truncate">
                    Sarah Smith
                  </span>
                  <span className="text-[7px] text-blue-600/80 font-medium truncate">
                    Pricing deck?
                  </span>
                </div>
              </div>

              {/* Inactive Row 2 */}
              <div className="flex items-center gap-1.5 px-2 py-1.5 opacity-60">
                <div className="w-5 h-5 rounded-full bg-zinc-200 flex items-center justify-center text-[7px] font-bold text-zinc-500 flex-shrink-0">
                  AK
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[8px] font-semibold text-zinc-700 truncate">
                    Ali Khan
                  </span>
                  <span className="text-[7px] text-zinc-400 truncate">
                    Yes, tomorrow works.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Main Panel (Chat Context) */}
            <div className="flex-1 flex flex-col bg-white overflow-hidden">
              {/* Header */}
              <div className="h-9 border-b border-zinc-100 flex items-center justify-between px-3 bg-zinc-50/80">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[8px] font-bold text-blue-600 shadow-sm">
                    SS
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-zinc-800 leading-tight">
                      Sarah Smith
                    </span>
                    <span className="text-[7px] text-zinc-400 font-medium">
                      Acme Corp
                    </span>
                  </div>
                </div>
                {/* WhatsApp Brand Indicator */}
                <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center shadow-sm">
                  <svg
                    className="w-2.5 h-2.5 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                  </svg>
                </div>
              </div>

              {/* Chat Body */}
              <div className="flex-1 p-3 flex flex-col gap-2.5 justify-end pb-3">
                {/* Incoming Message Block */}
                <div className="self-start max-w-[85%] bg-zinc-100 border border-zinc-200 text-zinc-700 px-2.5 py-1.5 rounded-md rounded-tl-none shadow-sm text-[8px] leading-snug font-medium">
                  Hi, I need a quote for 10 users. Can you send the pricing
                  deck?
                </div>

                {/* Outgoing Message Blocks (Primary Blue) */}
                <div className="self-end max-w-[85%] bg-blue-500 text-white px-2.5 py-1.5 shadow-sm rounded-md rounded-tr-none text-[8px] leading-snug font-medium">
                  Absolutely, Sarah! Here is our standard pricing deck attached.
                  Let me know if you want to hop on a quick call.
                </div>
              </div>
            </div>
          </div>

          {/* Floating Accountability/AI Tag */}
          <div className="absolute -top-3 -right-1 bg-white border border-zinc-200 shadow-sm px-2.5 py-1.5 rounded-md flex items-center gap-1.5 z-30">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[9px] font-bold text-zinc-700 uppercase tracking-wider">
              Lead Captured
            </span>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="mt-auto">
        <h3 className="font-inter font-medium text-zinc-900 text-[17px] leading-snug relative z-20">
          WhatsApp chats made manageable
        </h3>
        <p className="font-poppins text-xs max-w-[80%] text-zinc-500 mt-1.5 tracking-wide relative z-20">
          Chat with customers on WhatsApp without switching devices.
        </p>
      </div>
    </div>
  );
};
