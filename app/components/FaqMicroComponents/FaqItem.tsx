"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export const FaqItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: FaqItemProps) => {
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
