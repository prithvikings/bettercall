"use client";
import React from "react";
import { Shield, Lock, BadgeCheck } from "lucide-react";

const Security = () => {
  return (
    <section className="w-full font-inter overflow-hidden bg-white">
      {/* Top Full-Width Divider */}

      {/* Subheader Row */}
      <div className="max-w-6xl mx-auto border-x border-zinc-200 bg-white">
        <h2 className="pt-10 pb-5 text-center font-mono text-sm tracking-tight text-zinc-500 uppercase md:pt-20 md:pb-10">
          For Security First Teams
        </h2>
      </div>

      {/* Middle Full-Width Divider */}
      <div className="h-[1px] w-full bg-zinc-200"></div>

      {/* Main Content Grid */}
      <div className="relative max-w-6xl mx-auto border-x border-zinc-200 grid grid-cols-1 bg-zinc-50/50 px-8 py-12 md:grid-cols-2 lg:px-16 lg:py-20">
        {/* --- Sharp Blue Corner Accents (Design System) --- */}
        <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-[3px] border-l-[3px] border-blue-500 z-20"></div>
        <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-[3px] border-r-[3px] border-blue-500 z-20"></div>
        <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-[3px] border-l-[3px] border-blue-500 z-20"></div>
        <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-[3px] border-r-[3px] border-blue-500 z-20"></div>

        {/* Left Column: Text & CTA */}
        <div className="flex flex-col justify-center">
          <h2 className="text-zinc-900 text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl text-left">
            Scale securely with confidence
          </h2>
          <p className="text-sm font-medium tracking-tight text-zinc-600 md:text-sm lg:text-base mt-4 text-left max-w-md">
            Our AI assistant is designed with enterprise-grade security
            practices and compliant with global data protection standards.
          </p>
          <button className="rounded-xl px-6 py-2.5 text-center text-sm font-medium transition duration-150 active:scale-[0.98] sm:text-base bg-zinc-900 text-white hover:bg-zinc-800 mt-6 mb-8 inline-block w-full md:w-fit shadow-sm">
            Start for free
          </button>
        </div>

        {/* Right Column: Badges (Matches inspected code spacing) */}
        <div className="flex items-center justify-center gap-8 md:gap-10">
          {/* Badge 1: CCPA */}
          <div className="flex flex-col items-center gap-3 group w-14">
            <div className="relative w-12 h-12 flex items-center justify-center text-zinc-400 group-hover:text-zinc-600 transition-colors">
              <Shield className="w-10 h-10 stroke-[1.5]" />
              <div className="absolute -right-2 -top-1 bg-zinc-50 p-1">
                <Lock className="w-4 h-4 stroke-[2.5] text-zinc-500" />
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
              <div className="w-1 h-1 rounded-full bg-zinc-400"></div> CCPA
            </div>
          </div>

          {/* Badge 2: GDPR */}
          <div className="flex flex-col items-center gap-3 group w-14">
            <div className="w-12 h-12 flex items-center justify-center text-zinc-400 group-hover:text-zinc-600 transition-colors">
              <BadgeCheck className="w-11 h-11 stroke-[1.5]" />
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
              <div className="w-1 h-1 rounded-full bg-zinc-400"></div> GDPR
            </div>
          </div>

          {/* Badge 3: ISO 27001 */}
          <div className="flex flex-col items-center gap-3 group w-14">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border-[1.5px] border-zinc-400 group-hover:border-zinc-600 transition-colors">
              <div className="text-[9px] font-bold leading-tight text-center text-zinc-400 group-hover:text-zinc-600">
                ISO
                <br />
                27001
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
              <div className="w-1 h-1 rounded-full bg-zinc-400"></div> ISO
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Full-Width Divider */}
      <div className="h-[1px] w-full bg-zinc-200"></div>
    </section>
  );
};

export default Security;
