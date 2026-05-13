"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CallMissed04Icon,
  NotificationOff02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

// --- Framer Motion Variants ---
const cardVariants = {
  idle: {},
  hover: {},
};

const carddata = [
  {
    companyName: "State Bank of India",
    callType: "Missed Call • 5 May, 07:30",
    value: "$5,000",
    logo: "/logos/SBI.webp",
  },
  {
    companyName: "Meta Platforms",
    callType: "Missed Call • 3 May, 10:20",
    value: "$2,000",
    logo: "/logos/meta.png",
  },
  {
    companyName: "Apollo Tyres",
    callType: "Missed Call • 1 May, 04:10",
    value: "$15,000",
    logo: "/logos/appollo.png",
  },
  {
    companyName: "Shramik Card",
    callType: "Missed Call • 2 May, 12:30",
    value: "$11,000",
    logo: "/logos/shram.png",
  },
];

export const MissedOpportunitiesCard = () => {
  const CARD_OFFSET = 12;
  const SCALE_FACTOR = 0.06;
  const [cards, setCards] = useState(carddata);
  const [isHovering, setIsHovering] = useState(false);

  // --- Advanced Timing Logic ---
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    const shiftCards = () => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        // Move the last element to the front
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    };

    if (isHovering) {
      // 1. Wait exactly 1 second for the very first snappy reaction
      timeout = setTimeout(() => {
        shiftCards();
        // 2. Then transition into the relaxed 2-second continuous loop
        interval = setInterval(shiftCards, 2000);
      }, 1000);
    }

    // Cleanup both timers when mouse leaves or component unmounts
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [isHovering]);

  return (
    <motion.div
      initial="idle"
      whileHover="hover"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      variants={cardVariants}
      // REMOVED 'overflow-hidden' from this container so the corners don't clip!
      className="group relative bg-[#faf9f5] border border-zinc-200 px-3.5 py-3 pb-4 flex flex-col h-[350px] transition-colors duration-300 hover:border-zinc-300 cursor-default"
    >
      {/* --- Cyber-Brutalist Corner Accents --- */}
      <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

      {/* --- Canvas 1: The "Lost Value" Node --- */}
      <div className="flex-1 w-full bg-white border border-zinc-200 mb-4 flex items-center justify-center relative z-10 overflow-hidden shadow-inner transition-shadow duration-500">
        {/* --- Ambient Canvas Blur Effect --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-red-500/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

        <div className="relative w-full flex flex-col items-center mt-6 z-10">
          {/* --- The Animated Stack Wrapper --- */}
          <div className="relative w-64 h-[68px]">
            {cards.map((card, index) => {
              return (
                <motion.div
                  key={card.companyName}
                  className="absolute left-0 w-full h-full bg-white rounded-xl flex items-center px-3 border border-zinc-200 shadow-sm"
                  style={{
                    transformOrigin: "top center",
                  }}
                  animate={{
                    top: index * -CARD_OFFSET,
                    scale: 1 - index * SCALE_FACTOR,
                    zIndex: cards.length - index,
                    opacity: index < 3 ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  {/* --- Inner Content Wrapper --- */}
                  <motion.div
                    className="w-full flex items-center justify-between gap-2"
                    animate={{
                      opacity: index === 0 ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex gap-3 items-center">
                      <div className="bg-zinc-100 rounded-full w-9 h-9 shrink-0 flex items-center justify-center border border-zinc-200 overflow-hidden shadow-xs">
                        <img
                          src={card.logo}
                          alt={card.companyName}
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                      <div className="flex flex-col items-start">
                        <p className="text-sm font-medium font-poppins text-zinc-800 leading-tight">
                          {card.companyName}
                        </p>
                        <p className="text-[10px] font-poppins font-inter text-red-500 mt-0.5">
                          {card.callType}
                        </p>
                      </div>
                    </div>
                    <HugeiconsIcon
                      className="text-red-500 shrink-0"
                      icon={CallMissed04Icon}
                      size={24}
                      strokeWidth={1.5}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* --- Dynamic & Animated "Lost Value" Notification Pop --- */}
          <div className="h-[36px] mt-6 flex items-center justify-center relative z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={cards[0].companyName} // Triggers pop animation when the top card changes
                initial={{ opacity: 0, scale: 0.6, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 25,
                  mass: 1,
                }}
                className="flex items-center gap-2 text-xs font-medium text-red-600 bg-white/90 backdrop-blur-md border border-red-200 px-3 py-1.5 rounded-full shadow-md"
              >
                <HugeiconsIcon
                  icon={NotificationOff02Icon}
                  size={16}
                  strokeWidth={2}
                  className="text-red-500"
                />
                Lost {cards[0].value}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#faf9f5] to-transparent z-10 pointer-events-none transition-colors duration-300 group-hover:from-zinc-50"></div>

      <h3 className="font-inter font-medium text-zinc-900 text-lg relative z-20">
        Missed Opportunities
      </h3>
      <p className="font-poppins text-xs text-zinc-500 mt-1 relative tracking-wide z-20 max-w-[250px]">
        Customers call once. If you miss it, they call your competitor.
      </p>
    </motion.div>
  );
};
