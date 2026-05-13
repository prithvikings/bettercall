"use client";
import React from "react";
// Import the complete set of micro-components
import { MissedOpportunitiesCard } from "./ProblemMicroComponents/MissedOpportunitiesCard";
import { WhatsAppBlackholeCard } from "./ProblemMicroComponents/WhatsAppBlackholeCard";
import { BrokenFollowupsCard } from "./ProblemMicroComponents/BrokenFollowupsCard";

const Problem = () => {
  return (
    <div className="relative z-20 w-full border-b border-blue-200 font-poppins bg-white">
      <div className="relative max-w-6xl mx-auto px-4 py-24 border-x border-blue-200 min-h-[50vh] flex flex-col items-center justify-center text-center">
        {/* --- Cyber-Brutalist Corner Accents for Main Container --- */}
        <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-[3px] border-l-[3px] border-blue-500 z-10"></div>
        <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-[3px] border-r-[3px] border-blue-500 z-10"></div>
        <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-[3px] border-l-[3px] border-blue-500 z-10"></div>
        <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-[3px] border-r-[3px] border-blue-500 z-10"></div>

        {/* --- Problem Section Header --- */}
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 mb-6 text-sm font-medium border border-blue-200 bg-blue-50 text-blue-700 shadow-sm">
          {/* Subtle Warning Indicator */}
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 bg-blue-600"></span>
          </div>
          <span className="font-poppins uppercase tracking-wider text-xs font-bold">
            The Communication Gap
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-normal tracking-tight font-poppins text-zinc-900">
          Too many chats. <br /> Too many missed leads.
        </h2>

        <p className="text-sm text-zinc-600 max-w-sm font-poppins mt-4 mb-16 tracking-wide">
          Your team shouldn’t lose customers because conversations are spread
          everywhere.
        </p>

        {/* --- Bento Grid Assembly --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl text-left">
          <MissedOpportunitiesCard />
          <WhatsAppBlackholeCard />
          <BrokenFollowupsCard />
        </div>
      </div>
    </div>
  );
};

export default Problem;
