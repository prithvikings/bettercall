"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

// Original Superfone FAQs
const faqsLeft = [
  {
    question: "What exactly is Superfone?",
    answer:
      "Superfone is a unified communication platform that replaces personal numbers and scattered tools. It brings your business calls, WhatsApp, CRM, and AI agents into a single, organized workspace.",
  },
  {
    question: "How do the AI agents work?",
    answer:
      "Our AI agents act as your 24/7 front line. They can answer common customer queries, book appointments, route calls, and even reply to Google reviews automatically without manual intervention.",
  },
  {
    question: "Is my customer data secure?",
    answer:
      "Absolutely. We employ enterprise-grade encryption, secure access controls, and are fully compliant with global data protection standards like GDPR and CCPA to protect your financial and customer data.",
  },
];

const faqsRight = [
  {
    question: "Do I need new hardware or phones?",
    answer:
      "Not at all. Superfone operates entirely in the cloud. You and your team can use your existing mobile devices or desktop computers via our web and mobile applications.",
  },
  {
    question: "Can I port my existing business number?",
    answer:
      "Yes. We support seamless number porting for both regular phone lines and WhatsApp Business numbers, ensuring you don't lose your established brand identity or existing customer connections.",
  },
  {
    question: "What tools does Superfone integrate with?",
    answer:
      "Superfone natively integrates with popular CRMs (like HubSpot and Salesforce), calendar tools, and marketing platforms to ensure your data flows seamlessly across your entire tech stack.",
  },
];

// Reusable FAQ Item Component
const FaqItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-zinc-200">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 px-4 md:px-6 text-left transition-colors hover:bg-zinc-50 group"
      >
        <span className="font-inter font-medium text-zinc-900 text-sm md:text-base pr-8">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="text-zinc-400 group-hover:text-blue-600 flex-shrink-0"
        >
          <Plus className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 px-4 md:px-6 text-sm text-zinc-500 font-poppins leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

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
