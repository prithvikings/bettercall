"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Custom Typewriter Component ---
const TypewriterText = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  const characters = Array.from(text);

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.02, // Speed of typing
            delayChildren: delay,
          },
        },
      }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, display: "none" },
            visible: { opacity: 1, display: "inline" },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

// --- Reusable Chat Bubble Components ---
// Client is now on the LEFT (Zinc/Gray)
const ClientMessage = ({
  text,
  animated = false,
}: {
  text: string;
  animated?: boolean;
}) => (
  <motion.div
    initial={animated ? { opacity: 0, y: 15, scale: 0.95 } : false}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="flex items-end justify-start gap-2 w-full shrink-0"
  >
    <div className="w-6 h-6 rounded-full bg-zinc-100 shrink-0 flex items-center justify-center border border-zinc-200 shadow-sm overflow-hidden z-10">
      <img
        src="/logos/flpi.png"
        alt="Client"
        className="w-full h-full object-contain"
      />
    </div>
    <div className="bg-zinc-50 border border-zinc-200 text-zinc-700 px-3 py-2.5 rounded-2xl rounded-bl-sm text-[11px] shadow-sm max-w-[85%] font-poppins leading-relaxed tracking-wide min-h-[36px]">
      {animated ? <TypewriterText text={text} delay={0.1} /> : text}
    </div>
  </motion.div>
);

// Salesman is now on the RIGHT (Blue)
const SalesMessage = ({
  text,
  animated = false,
}: {
  text: string;
  animated?: boolean;
}) => (
  <motion.div
    initial={animated ? { opacity: 0, y: 15, scale: 0.95 } : false}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="flex items-end justify-end gap-2 w-full shrink-0"
  >
    <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-3 py-2.5 rounded-2xl rounded-br-sm text-[11px] shadow-sm max-w-[85%] font-poppins leading-relaxed tracking-wide min-h-[36px]">
      {animated ? <TypewriterText text={text} delay={0.1} /> : text}
    </div>
    <div className="w-6 h-6 rounded-full bg-blue-100 shrink-0 flex items-center justify-center border border-blue-200 shadow-sm overflow-hidden z-10">
      <img
        src="/logos/superfone.png"
        alt="Salesman"
        className="w-full h-full object-contain p-0.5"
      />
    </div>
  </motion.div>
);

// --- Expanded Chat Data ---
const conversationFlow = [
  { id: 1, type: "client", text: "Did you get the signed contract I sent?" },
  {
    id: 2,
    type: "sales",
    text: "Rahul left. I have zero access to those chats.",
  },
  { id: 3, type: "client", text: "But I agreed to a 15% discount with him!" },
  {
    id: 4,
    type: "sales",
    text: "I don't have that on record. We have to start over.",
  },
  {
    id: 5,
    type: "client",
    text: "Start over? We spent 3 weeks negotiating that.",
  },
  {
    id: 6,
    type: "sales",
    text: "I apologize, but without the chat history, my hands are tied.",
  },
];

// --- The Unified Chat Container ---
const Conversation = ({
  isAnimated,
  onComplete,
}: {
  isAnimated: boolean;
  onComplete?: () => void;
}) => {
  const [visibleCount, setVisibleCount] = useState(
    isAnimated ? 0 : conversationFlow.length,
  );

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 1. The Timeline Engine
  useEffect(() => {
    if (!isAnimated) {
      setVisibleCount(conversationFlow.length);
      return;
    }

    setVisibleCount(0);
    const timers = [
      setTimeout(() => setVisibleCount(1), 100),
      setTimeout(() => setVisibleCount(2), 2000),
      setTimeout(() => setVisibleCount(3), 4000),
      setTimeout(() => setVisibleCount(4), 6000),
      setTimeout(() => setVisibleCount(5), 8000),
      setTimeout(() => setVisibleCount(6), 10000),
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 12000), // Lock the state permanently
    ];
    return () => timers.forEach(clearTimeout);
  }, [isAnimated, onComplete]);

  // 2. The Isolated Auto-Scroll Engine
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      setTimeout(() => {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: isAnimated ? "smooth" : "auto",
        });
      }, 50);
    }
  }, [visibleCount, isAnimated]);

  return (
    <div
      ref={scrollContainerRef}
      className="w-full max-w-[95%] h-full flex flex-col relative z-10 py-6 overflow-y-auto
                 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      <div className="mt-auto flex flex-col gap-4">
        {conversationFlow
          .slice(0, visibleCount)
          .map((msg) =>
            msg.type === "client" ? (
              <ClientMessage
                key={msg.id}
                text={msg.text}
                animated={isAnimated}
              />
            ) : (
              <SalesMessage
                key={msg.id}
                text={msg.text}
                animated={isAnimated}
              />
            ),
          )}
      </div>
    </div>
  );
};

export const WhatsAppBlackholeCard = () => {
  // State Machine: "idle" -> "playing" -> "finished"
  const [playState, setPlayState] = useState<"idle" | "playing" | "finished">(
    "idle",
  );

  const handleMouseEnter = () => {
    if (playState === "idle") {
      setPlayState("playing");
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      className="group relative bg-[#faf9f5] border border-zinc-200 px-3.5 py-3 pb-4 flex flex-col h-[350px] transition-colors duration-300 hover:border-zinc-300 cursor-default"
    >
      {/* --- Cyber-Brutalist Corner Accents --- */}
      <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-[2px] border-l-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
      <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-[2px] border-r-[2px] border-blue-500 z-20 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

      {/* --- Canvas 2: The "Device Trap" Node --- */}
      <div className="flex-1 w-full bg-white border border-zinc-200 mb-4 flex flex-col items-center justify-center relative z-10 overflow-hidden shadow-inner px-2">
        {/* --- White Vignette / Blur Overlay --- */}
        <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_40px_20px_#ffffff]"></div>
        <div className="absolute top-0 left-0 w-full h-8 z-20 pointer-events-none bg-gradient-to-b from-white to-transparent opacity-100"></div>
        <div className="absolute bottom-0 left-0 w-full h-8 z-20 pointer-events-none bg-gradient-to-t from-white to-transparent opacity-100"></div>

        {/* The 'key' prop perfectly resets the component state when switching to playing */}
        <Conversation
          key={playState}
          isAnimated={playState === "playing"}
          onComplete={() => setPlayState("finished")}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#faf9f5] to-transparent z-10 pointer-events-none transition-colors duration-300 group-hover:from-zinc-50"></div>

      <h3 className="font-inter font-medium text-zinc-900 text-lg relative z-20">
        The WhatsApp Blackhole
      </h3>
      <p className="font-poppins text-xs text-zinc-500 mt-1 tracking-wide relative z-20 max-w-[280px]">
        Conversations stuck on personal devices with zero team visibility.
      </p>
    </div>
  );
};
