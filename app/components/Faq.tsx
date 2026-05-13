"use client";
import React, { useState } from "react";
import { faqsLeft, faqsRight } from "./Data/faqData";
import { FaqItem } from "./FaqMicroComponents/FaqItem";

const Faq = () => {
  // Track which FAQ is open. Using string ID allows only one to be open at a time (accordion style).
  // Set to null to allow all to be closed.
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (question: string) => {
    setOpenFaq(openFaq === question ? null : question);
  };

  return (
    <section className="relative w-full bg-white font-inter border-b border-blue-200">
      {/* Main Container - Aligned with the Design System Grid */}
      <div className="relative max-w-6xl mx-auto border-x border-blue-200 flex flex-col">
        {/* --- Frame Accents --- */}
        <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-[3px] border-l-[3px] border-blue-500 z-20"></div>
        <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-[3px] border-r-[3px] border-blue-500 z-20"></div>

        {/* --- Header Section --- */}
        <div className="flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 mb-6 text-xs font-medium border border-blue-200 bg-blue-50 text-blue-700 shadow-sm">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 bg-blue-600"></span>
            </div>
            <span className="font-poppins uppercase tracking-wider">
              Common Questions
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-normal tracking-tight font-poppins text-zinc-900 mb-6">
            Answers Before <br className="hidden sm:block" /> You Get Started
          </h2>

          <p className="text-sm md:text-base text-zinc-500 font-poppins max-w-xl leading-relaxed">
            Clear answers to common questions about setup, security,
            integrations, and how Superfone fits into your communication stack.
          </p>
        </div>

        {/* --- FAQ Grid Section --- */}
        <div className="w-full border-t border-zinc-200 flex flex-col md:flex-row relative">
          {/* Decorative center intersection brackets (visible on md+) */}
          <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border-t-[2px] border-zinc-300 z-10"></div>
          <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 border-b-[2px] border-zinc-300 z-10"></div>

          {/* Left Column */}
          <div className="w-full md:w-1/2 md:border-r border-zinc-200 flex flex-col">
            {faqsLeft.map((faq, index) => (
              <FaqItem
                key={`left-${index}`}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === faq.question}
                onClick={() => toggleFaq(faq.question)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 flex flex-col">
            {faqsRight.map((faq, index) => (
              <FaqItem
                key={`right-${index}`}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === faq.question}
                onClick={() => toggleFaq(faq.question)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
