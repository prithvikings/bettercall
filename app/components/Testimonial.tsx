"use client";
import React from "react";
import { TestimonialDetails } from "./TestimonialMicroComponents/TestimonialDetails";
import { AnimatedLogoGrid } from "./TestimonialMicroComponents/AnimatedLogoGrid";
import { testimonialContent, initialLogos } from "./Data/testimonialData";

const TestimonialSection = () => {
  return (
    <section className="w-full border-y border-t-0 border-zinc-200 bg-white overflow-hidden">
      {/* Main Container */}
      <div className="relative max-w-6xl mx-auto border-x border-zinc-200 flex flex-col bg-white">
        {/* --- Sharp Blue Corner Accents --- */}
        <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-[3px] border-l-[3px] border-blue-500 z-20"></div>
        <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-[3px] border-r-[3px] border-blue-500 z-20"></div>
        <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-[3px] border-l-[3px] border-blue-500 z-20"></div>
        <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-[3px] border-r-[3px] border-blue-500 z-20"></div>

        {/* TOP SECTION: Testimonial Details */}
        <TestimonialDetails content={testimonialContent} />

        {/* BOTTOM SECTION: Isolated Animated Logo Grid */}
        <AnimatedLogoGrid defaultLogos={initialLogos} />
      </div>
    </section>
  );
};

export default TestimonialSection;
