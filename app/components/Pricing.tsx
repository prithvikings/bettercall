"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

// --- Icons (Assuming you are using lucide-react, standard with shadcn) ---
// If you don't have it, run: npm install lucide-react
import { Check, ArrowRight, Sparkles, Plus } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter",
    description: "Shared business communication for growing teams.",
    price: "$19", // Placeholder, adjust as needed
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
    price: "$49",
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
    price: "$99",
    positioning: "Your AI team replies to customers around the clock.",
    buttonText: "Deploy AI Employees",
    buttonVariant: "dark",
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
  "WhatsApp API",
  "Custom automations",
  "AI voice agents",
  "CRM integrations",
  "Additional team members",
];

const roiMetrics = [
  "Faster lead response",
  "Fewer missed calls",
  "Better team visibility",
  "Automated follow-ups",
  "Higher customer response rates",
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
          {/* Simple Billing Toggle */}
          <div className="mt-10 flex items-center bg-zinc-50 border border-zinc-200 rounded-full p-1 shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm transition-all ${
                !isAnnual
                  ? "bg-white text-zinc-900 shadow-sm border border-zinc-200/50"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                isAnnual
                  ? "bg-white text-zinc-900 shadow-sm border border-zinc-200/50"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              Yearly{" "}
              <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                Save 20%
              </span>
            </button>
          </div>
        </div>
        {/* --- Main Pricing Container (Design System Aligned) --- */}
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
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
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

                {/* Price */}
                <div className="mb-6 border-b border-zinc-100 pb-6">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-semibold text-zinc-900 tracking-tighter">
                      {tier.price}
                    </span>
                  </div>
                </div>

                {/* Positioning Line */}
                <p className="text-sm text-zinc-700 leading-relaxed mb-4 min-h-[60px]">
                  {tier.positioning}
                </p>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-4 rounded-lg text-sm transition-all flex items-center justify-center gap-2 group mb-10 ${
                    tier.buttonVariant === "primary"
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                      : tier.buttonVariant === "dark"
                        ? "bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm"
                        : "bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50"
                  }`}
                >
                  {tier.buttonText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Features List */}
                <div className="mt-auto">
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
                          className={`w-4 h-4 mt-0.5 shrink-0 ${i === 0 && tier.name !== "Starter" ? "text-blue-500" : "text-zinc-400"}`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- Expandable Add-ons (Integrated cleanly at the bottom of the grid) --- */}
          <div className="border-t border-zinc-200 bg-zinc-50/50 p-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-zinc-800 flex items-center gap-2">
              <Plus className="w-4 h-4 text-zinc-500" />
              Expand your workflow when needed.
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 md:gap-4">
              {addOns.map((addon, i) => (
                <span
                  key={i}
                  className="text-xs font-medium text-zinc-500 bg-white border border-zinc-200 px-3 py-1 rounded-full shadow-sm"
                >
                  {addon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
