"use client";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, ChatSparkIcon } from "@hugeicons/core-free-icons";
import React from "react";

export const AIReceptionistCard = () => {
  return (
    // FIXED: Removed 'overflow-hidden' to ensure corners are fully visible
    <div className="group relative bg-[#faf9f5] border border-zinc-200 px-4 py-4 pb-5 flex flex-col h-[400px] transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50 md:col-span-1 cursor-default">
      {/* Corner Accents */}
      <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

      {/* --- Canvas: The Autonomous Interceptor --- */}
      {/* Inner canvas keeps overflow-hidden to constrain the background grid */}
      <div className="flex-1 w-full bg-white border border-zinc-200 mb-5 flex flex-col items-center justify-start relative z-10 overflow-hidden shadow-inner pt-5 pb-2">
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:1rem_1rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] opacity-80"></div>

        {/* --- Stage 1: The Missed Call --- */}
        <div className="bg-white border border-zinc-200 px-3 py-1.5 shadow-sm flex items-center gap-2 z-20 relative rounded-full">
          <div className="border border-zinc-200 text-red-600 bg-red-100 p-0.5 rounded-2xl">
            <HugeiconsIcon
              icon={Cancel01Icon}
              size={12}
              color="currentColor"
              strokeWidth={1}
            />
          </div>
          <span className="text-[10px] font-mono font-medium text-zinc-700 tracking-tight">
            +91 8709345654
          </span>
          <span className="text-[8px] bg-red-50 text-red-600 border border-red-100 px-1.5 py-[1px] rounded-sm tracking-wider ml-1">
            MISSED
          </span>
        </div>

        {/* Vertical Pipeline connecting 1 to 2 */}
        <div className="w-px h-4 border-l-2 border-dashed border-zinc-200 z-10 my-1"></div>

        {/* --- Stage 2: The AI Engine (Transcript) --- */}
        <div className="bg-white border border-blue-200 shadow-sm rounded-md w-[85%] relative z-20 overflow-hidden flex flex-col">
          {/* AI Header */}
          <div className="bg-blue-50/80 border-b border-blue-100 px-2 py-1.5 flex items-center gap-1.5">
            <HugeiconsIcon
              icon={ChatSparkIcon}
              size={16}
              color="blue"
              strokeWidth={1}
            />

            <span className="text-[9px] font-medium text-blue-800 tracking-tight">
              AI Intercept Active
            </span>
          </div>

          {/* Tiny Chat Interface */}
          <div className="p-2 pb-8 flex flex-col gap-2 bg-white">
            {/* User Message */}
            <div className="flex justify-start">
              <div className="bg-zinc-100 text-zinc-600 text-[9px] px-2 py-1.5 rounded-r-md rounded-bl-md max-w-[85%] leading-tight">
                I couldn't reach anyone. Can I book a demo?
              </div>
            </div>
            {/* AI Message */}
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white text-[9px] px-2 py-1.5 rounded-l-md rounded-br-md max-w-[85%] leading-tight shadow-sm">
                Absolutely! I've scheduled that for tomorrow at 2 PM.
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Pipeline connecting 2 to 3 */}
        <div className="w-px h-4 border-l-2 border-dashed border-zinc-200 z-10 my-1"></div>

        {/* --- Stage 3: The Action (Calendar Event) --- */}
        <div className="bg-white border border-emerald-200 shadow-sm rounded-md p-2 flex flex-col gap-1 w-[70%] z-20 relative">
          <div className="flex items-center gap-1.5 border-b border-emerald-50 pb-1.5">
            <div className="w-3.5 h-3.5 bg-emerald-100 text-emerald-600  rounded-full flex items-center justify-center">
              <svg
                className="w-2.5 h-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <span className="text-[9px] font-semibold text-zinc-800">
              Demo Booked
            </span>
          </div>
          <div className="flex items-center gap-1 text-zinc-500 pt-0.5">
            <svg
              className="w-3 h-3 text-emerald-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <span className="text-[8px] font-medium">Tomorrow, 2:00 PM</span>
          </div>
        </div>
      </div>

      <h3 className="font-inter font-medium text-zinc-900 text-[17px] leading-snug relative z-20">
        Never miss a customer call again.
      </h3>
      <p className="font-poppins text-xs text-zinc-500 mt-1.5 tracking-wide relative z-20">
        Manages customer communication and appointment bookings automatically.
      </p>
    </div>
  );
};
