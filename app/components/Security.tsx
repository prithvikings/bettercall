"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, BadgeCheck } from "lucide-react";

const Security = () => {
  return (
    <section className="w-full font-inter overflow-hidden bg-white">
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
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-zinc-900 text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl text-left">
            Scale securely with confidence
          </h2>
          <p className="text-sm font-medium tracking-tight text-zinc-600 md:text-sm lg:text-base mt-4 text-left max-w-md">
            Our AI assistant is designed with enterprise-grade security
            practices and compliant with global data protection standards.
          </p>

          {/* --- UPDATED CTA Button with Bracket Accents --- */}
          <motion.div
            initial="rest"
            whileHover="hover"
            className="relative mt-8 mb-4 p-[3px] cursor-pointer group inline-block w-full sm:w-auto"
          >
            {/* Clamping Brackets */}
            <motion.div
              variants={{ rest: { x: 0, y: 0 }, hover: { x: 2, y: 2 } }}
              className="absolute top-0 left-0 size-2.5 border-t-[2px] border-l-[2px] border-zinc-400 group-hover:border-blue-500 transition-colors pointer-events-none"
            ></motion.div>
            <motion.div
              variants={{ rest: { x: 0, y: 0 }, hover: { x: -2, y: 2 } }}
              className="absolute top-0 right-0 size-2.5 border-t-[2px] border-r-[2px] border-zinc-400 group-hover:border-blue-500 transition-colors pointer-events-none"
            ></motion.div>
            <motion.div
              variants={{ rest: { x: 0, y: 0 }, hover: { x: 2, y: -2 } }}
              className="absolute bottom-0 left-0 size-2.5 border-b-[2px] border-l-[2px] border-zinc-400 group-hover:border-blue-500 transition-colors pointer-events-none"
            ></motion.div>
            <motion.div
              variants={{ rest: { x: 0, y: 0 }, hover: { x: -2, y: -2 } }}
              className="absolute bottom-0 right-0 size-2.5 border-b-[2px] border-r-[2px] border-zinc-400 group-hover:border-blue-500 transition-colors pointer-events-none"
            ></motion.div>

            <button className="w-full sm:w-fit py-3 px-8 rounded-none text-sm font-mono tracking-tight transition-colors flex items-center justify-center overflow-hidden bg-blue-600 text-white hover:bg-blue-700">
              {/* 3D Text Flip Container */}
              <div
                className="relative h-5 flex items-center justify-center"
                style={{ perspective: "1000px" }}
              >
                <motion.span
                  variants={{
                    rest: { y: 0, rotateX: 0, opacity: 1 },
                    hover: { y: -20, rotateX: 90, opacity: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
                >
                  Start for free
                </motion.span>

                <motion.span
                  variants={{
                    rest: { y: 20, rotateX: -90, opacity: 0 },
                    hover: { y: 0, rotateX: 0, opacity: 1 },
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
                  aria-hidden="true"
                >
                  Start for free
                </motion.span>

                {/* Invisible text to maintain button width */}
                <span className="invisible whitespace-nowrap">
                  Start for free
                </span>
              </div>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Badges */}
        <div className="flex items-center justify-center gap-8 md:gap-10 mt-10 md:mt-0">
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
