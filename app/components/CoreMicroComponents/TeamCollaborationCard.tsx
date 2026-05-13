"use client";
import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserMultipleIcon, Edit01Icon } from "@hugeicons/core-free-icons";

export const TeamCollaborationCard = () => {
  return (
    <div className="group relative bg-[#faf9f5] border border-zinc-200 px-4 py-4 pb-5 flex flex-col h-[400px] transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-50 md:col-span-1 cursor-default">
      {/* Corner Accents */}
      <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

      {/* --- Canvas: The Shared CRM Ticket --- */}
      <div className="flex-1 w-full bg-white border border-zinc-200 mb-5 flex flex-col items-center justify-center relative z-10 overflow-hidden shadow-inner pt-2">
        <div className="p-1 mt-2 px-1.5 text-[8.5px] font-medium bg-blue-100 text-blue-500 border border-blue-500 shadow-md">
          5 New Tickets
        </div>
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:1rem_1rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] opacity-80 z-0"></div>

        {/* --- Ambient Blur Behind the Dashboard --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-zinc-400/20 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

        {/* --- The Hatched Border Wrapper --- */}
        <div className="w-[90%] pt-[6px] px-[6px] bg-[repeating-linear-gradient(-45deg,#f4f4f5_0px,#f4f4f5_2px,transparent_2px,transparent_8px)] rounded-t-xl shadow-xl relative z-10 transition-colors duration-500 group-hover:bg-[repeating-linear-gradient(-45deg,#e4e4e7_0px,#e4e4e7_2px,transparent_2px,transparent_8px)] origin-bottom mt-auto">
          {/* --- CRM Ticket UI (Inner Window) --- */}
          <div className="w-full bg-white border-t border-x border-zinc-200 rounded-t-lg flex flex-col relative overflow-hidden">
            {/* Ticket Header (With frosted glass effect) */}
            <div className="bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200 px-3 py-2 flex items-center justify-between z-20 relative">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-[8px]">
                  SJ
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold text-zinc-900 leading-none">
                    Sarah Jenkins
                  </span>
                  <span className="text-[8px] text-zinc-500">via WhatsApp</span>
                </div>
              </div>

              {/* Live Viewers Indicator */}
              <div className="flex items-center gap-1 bg-white border border-zinc-200 px-1.5 py-0.5 rounded-full shadow-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
                <span className="text-[8px] font-medium text-zinc-600">
                  2 viewing
                </span>
              </div>
            </div>

            {/* Ticket Body / Chat */}
            <div className="p-3 flex flex-col gap-3 bg-white">
              {/* Customer Message */}
              <div className="flex justify-start">
                <div className="bg-zinc-100 text-zinc-700 text-[9px] px-2.5 py-2 rounded-r-md rounded-bl-md max-w-[90%] leading-relaxed border border-zinc-200/50">
                  Hi, we are a team of 15 looking to switch our phone system.
                  Can we get a custom quote?
                </div>
              </div>

              {/* Collaboration Action: Assignment */}
              <div className="flex items-center gap-2 mt-1">
                <div className="w-4 h-4 rounded bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 shrink-0">
                  <HugeiconsIcon
                    icon={UserMultipleIcon}
                    size={10}
                    color="currentColor"
                  />
                </div>
                <span className="text-[8px] text-zinc-500 font-medium">
                  <strong className="text-zinc-700">Mike K.</strong> assigned
                  this to{" "}
                  <strong className="text-blue-600 bg-blue-50 px-1 py-0.5 rounded border border-blue-100">
                    Alex L.
                  </strong>
                </span>
              </div>

              {/* Collaboration Action: Internal Note */}
              <div className="bg-amber-50 border border-amber-200 rounded-md p-2 flex flex-col gap-1.5 relative mt-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-amber-700">
                    <HugeiconsIcon
                      icon={Edit01Icon}
                      size={10}
                      color="currentColor"
                    />
                    <span className="text-[8px] font-bold uppercase tracking-wider">
                      Internal Note
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center text-[6px] font-bold">
                      MK
                    </div>
                  </div>
                </div>
                <p className="text-[9px] text-amber-900 leading-tight">
                  <span className="font-semibold text-blue-600 bg-blue-100/50 px-0.5 rounded">
                    @Alex L.
                  </span>{" "}
                  They fit our enterprise tier. I've linked their previous CRM
                  record.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="font-inter font-medium text-zinc-900 text-[17px] leading-snug relative z-20">
        Keep your entire team aligned.
      </h3>
      <p className="font-poppins text-xs text-zinc-500 mt-1.5 tracking-wide relative z-20">
        Assign owners, leave internal notes, and see exactly who handled the
        last conversation.
      </p>
    </div>
  );
};
