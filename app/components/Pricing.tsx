"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Sparkles,
  Plus,
  UsersIcon,
  LayoutDashboard,
  SettingsIcon,
  MessageCircleMore,
} from "lucide-react";

// Updated data structure to include monthly vs yearly pricing
const pricingTiers = [
  {
    name: "Starter",
    description: "Shared business communication for growing teams.",
    monthlyPrice: "24",
    yearlyPrice: "19",
    positioning: "Replace personal numbers with business communication.",
    buttonText: "Start Free Trial",
    buttonVariant: "secondary",
    features: [
      "Shared business number",
      "Team call handling",
      "WhatsApp inbox",
      "Notes & reminders",
      "Call routing",
      "Basic follow-ups",
    ],
  },
  {
    name: "Growth",
    badge: "Most Popular",
    description: "Organize customer communication across your entire team.",
    monthlyPrice: "59",
    yearlyPrice: "49",
    positioning: "Keep every customer conversation organized and actionable.",
    buttonText: "Scale Your Team",
    buttonVariant: "primary",
    features: [
      "Everything in Starter",
      "Lead management",
      "Shared CRM",
      "Team collaboration",
      "Workflow automations",
      "Role permissions",
      "Customer tracking",
    ],
  },
  {
    name: "AI Workforce",
    description:
      "AI employees that answer, qualify, follow up, and operate 24/7.",
    monthlyPrice: "119",
    yearlyPrice: "99",
    positioning: "Your AI team replies to customers around the clock.",
    buttonText: "Deploy AI Employees",
    buttonVariant: "secondary",
    features: [
      "Everything in Growth",
      "AI Receptionist",
      "AI Sales Agent",
      "AI Follow-ups",
      "AI Review Assistant",
      "AI Workflow Automation",
      "Smart lead qualification",
    ],
  },
];

const addOns = [
  { icon: MessageCircleMore, label: "WhatsApp API" },
  { icon: SettingsIcon, label: "Custom automations" },
  { icon: Sparkles, label: "AI voice agents" },
  { icon: LayoutDashboard, label: "CRM integrations" },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="w-full bg-white font-inter">
      <div className="max-w-6xl mx-auto">
        {/* --- Header Section --- */}
        <div className="flex items-center justify-center flex-col gap-4 z-10 py-24 border border-t-0 border-blue-200">
          <span className="text-blue-500 text-xs font-medium font-poppins uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight font-poppins text-zinc-900">
            Start simple. Add AI as you grow.
          </h2>
          <p className="text-sm text-center font-poppins text-zinc-500 tracking-tight max-w-lg leading-relaxed mt-1">
            From shared business communication to AI-powered customer operations
            Superfone grows with your business.
          </p>
        </div>

        <div className="flex items-center justify-center border-x border-blue-200 pb-10">
          {/* --- Squarish Billing Toggle with Corner Brackets --- */}
          <div className="relative p-[3px] mt-10 group">
            {/* Corner Bracket Accents */}
            <div className="absolute top-0 left-0 size-2 border-t-[2px] border-l-[2px] border-zinc-400 transition-colors pointer-events-none"></div>
            <div className="absolute top-0 right-0 size-2 border-t-[2px] border-r-[2px] border-zinc-400 transition-colors pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 size-2 border-b-[2px] border-l-[2px] border-zinc-400 transition-colors pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 size-2 border-b-[2px] border-r-[2px] border-zinc-400 transition-colors pointer-events-none"></div>

            <div className="flex items-center bg-zinc-50 border border-zinc-200 p-1">
              {/* Monthly Button */}
              <button
                onClick={() => setIsAnnual(false)}
                className={`relative px-6 py-2 rounded-none text-sm transition-colors z-10 ${
                  !isAnnual
                    ? "text-zinc-900"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {/* Sliding Background */}
                {!isAnnual && (
                  <motion.div
                    layoutId="billing-bg"
                    className="absolute inset-0 bg-white border border-zinc-200/50 shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                Monthly
              </button>

              {/* Yearly Button */}
              <button
                onClick={() => setIsAnnual(true)}
                className={`relative px-6 py-2 rounded-none text-sm font-medium transition-colors flex items-center gap-2 z-10 ${
                  isAnnual
                    ? "text-zinc-900"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {/* Sliding Background */}
                {isAnnual && (
                  <motion.div
                    layoutId="billing-bg"
                    className="absolute inset-0 bg-white border border-zinc-200/50 shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                Yearly{" "}
                <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-none uppercase tracking-wider font-semibold">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* --- Main Pricing Container --- */}
        <div className="relative border border-zinc-200 bg-white flex flex-col">
          {/* Sharp Blue Corner Accents */}
          <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-[3px] border-l-[3px] border-blue-500 z-20"></div>
          <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-[3px] border-r-[3px] border-blue-500 z-20"></div>
          <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-[3px] border-l-[3px] border-blue-500 z-20"></div>
          <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-[3px] border-r-[3px] border-blue-500 z-20"></div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col p-8 md:p-10 ${tier.badge ? "bg-zinc-50/50 relative" : "bg-white"}`}
              >
                {/* Optional Badge */}
                {tier.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-[11px] uppercase tracking-wider px-3 py-1 rounded-none shadow-sm z-10">
                    {tier.badge}
                  </div>
                )}

                {/* Tier Header */}
                <div className="mb-6">
                  <h3 className="text-xl text-zinc-900 tracking-tight flex items-center gap-2">
                    {tier.name}
                    {tier.name === "AI Workforce" && (
                      <Sparkles className="w-4 h-4 text-blue-500" />
                    )}
                  </h3>
                  <p className="text-sm text-zinc-500 mt-2 min-h-[40px]">
                    {tier.description}
                  </p>
                </div>

                {/* --- FIXED: 3D Drum Roll Price Animation Spacing --- */}
                <div className="mb-6 border-b border-zinc-100 pb-6">
                  <div className="flex items-end gap-1.5 h-[40px]">
                    <span className="text-4xl font-semibold text-zinc-900 tracking-tighter leading-none pb-0.5">
                      $
                    </span>

                    {/* Dynamic width container with popLayout */}
                    <div
                      className="relative flex items-end overflow-hidden h-[40px]"
                      style={{ perspective: "1000px" }}
                    >
                      <AnimatePresence mode="popLayout" initial={false}>
                        <motion.div
                          key={isAnnual ? "yearly" : "monthly"}
                          initial={{
                            y: isAnnual ? -40 : 40,
                            rotateX: isAnnual ? -90 : 90,
                            opacity: 0,
                          }}
                          animate={{ y: 0, rotateX: 0, opacity: 1 }}
                          exit={{
                            y: isAnnual ? 40 : -40,
                            rotateX: isAnnual ? 90 : -90,
                            opacity: 0,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25,
                          }}
                          // Removed absolute inset-0 to let popLayout handle the width naturally
                          className="text-4xl font-semibold text-zinc-900 tracking-tighter leading-none pb-0.5"
                        >
                          {isAnnual ? tier.yearlyPrice : tier.monthlyPrice}
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <span className="text-sm font-medium text-zinc-500 mb-1 whitespace-nowrap">
                      / month
                    </span>
                  </div>
                </div>

                {/* Positioning Line */}
                <p className="text-sm text-zinc-700 leading-relaxed mb-4 min-h-[60px]">
                  {tier.positioning}
                </p>

                {/* Interactive CTA Button */}
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  className="relative w-full mb-10 p-[3px] cursor-pointer group"
                >
                  {/* Clamping Brackets */}
                  <motion.div
                    variants={{ rest: { x: 0, y: 0 }, hover: { x: 2, y: 2 } }}
                    className="absolute top-0 left-0 size-2.5 border-t-[2px] border-l-[2px] border-zinc-400 group-hover:border-zinc-700 transition-colors pointer-events-none"
                  ></motion.div>
                  <motion.div
                    variants={{ rest: { x: 0, y: 0 }, hover: { x: -2, y: 2 } }}
                    className="absolute top-0 right-0 size-2.5 border-t-[2px] border-r-[2px] border-zinc-400 group-hover:border-zinc-700 transition-colors pointer-events-none"
                  ></motion.div>
                  <motion.div
                    variants={{ rest: { x: 0, y: 0 }, hover: { x: 2, y: -2 } }}
                    className="absolute bottom-0 left-0 size-2.5 border-b-[2px] border-l-[2px] border-zinc-400 group-hover:border-zinc-700 transition-colors pointer-events-none"
                  ></motion.div>
                  <motion.div
                    variants={{ rest: { x: 0, y: 0 }, hover: { x: -2, y: -2 } }}
                    className="absolute bottom-0 right-0 size-2.5 border-b-[2px] border-r-[2px] border-zinc-400 group-hover:border-zinc-700 transition-colors pointer-events-none"
                  ></motion.div>

                  <button
                    className={`w-full py-3 px-4 rounded-none text-sm font-mono tracking-tight transition-colors flex items-center justify-center overflow-hidden ${
                      tier.buttonVariant === "primary"
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
                    }`}
                  >
                    {/* 3D Text Flip Container */}
                    <div
                      className="relative w-full h-5 flex items-center justify-center"
                      style={{ perspective: "1000px" }}
                    >
                      <motion.span
                        variants={{
                          rest: { y: 0, rotateX: 0, opacity: 1 },
                          hover: { y: -20, rotateX: 90, opacity: 0 },
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        {tier.buttonText}
                      </motion.span>

                      <motion.span
                        variants={{
                          rest: { y: 20, rotateX: -90, opacity: 0 },
                          hover: { y: 0, rotateX: 0, opacity: 1 },
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                        className="absolute inset-0 flex items-center justify-center"
                        aria-hidden="true"
                      >
                        {tier.buttonText}
                      </motion.span>
                    </div>
                  </button>
                </motion.div>

                {/* Features List */}
                <div className="flex-1">
                  <p className="text-xs font-medium text-zinc-900 uppercase tracking-wider mb-4">
                    Key Capabilities
                  </p>
                  <ul className="flex flex-col gap-3">
                    {tier.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-xs text-zinc-600"
                      >
                        <Check
                          className={`w-4 h-4 mt-0.5 shrink-0 ${
                            i === 0 && tier.name !== "Starter"
                              ? "text-blue-500"
                              : "text-zinc-400"
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- Expandable Add-ons --- */}
          <div className="border-t border-zinc-200 bg-zinc-50/50 p-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-zinc-800 flex items-center gap-2">
              <Plus className="w-4 h-4 text-zinc-500" />
              Expand your workflow when needed.
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 md:gap-4">
              {addOns.map((addon, i) => {
                const Icon = addon.icon;
                return (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 text-xs font-medium text-zinc-600 bg-white border border-zinc-200 px-3 py-1 shadow-sm hover:border-zinc-300 transition-all cursor-default"
                  >
                    <Icon className="w-3.5 h-3.5 text-zinc-400" />
                    {addon.label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
