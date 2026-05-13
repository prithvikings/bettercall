"use client";
import React, { useState } from "react";
import { pricingTiers, addOns } from "./Data/pricingData";
import { BillingToggle } from "./PricingMicroComponents/BillingToggle";
import { PricingCard } from "./PricingMicroComponents/PricingCard";
import { AddOnsBar } from "./PricingMicroComponents/AddOnsBar";

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

        {/* --- Billing Toggle --- */}
        <div className="flex items-center justify-center border-x border-blue-200 pb-10">
          <BillingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
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
              <PricingCard
                key={tier.name}
                tier={tier}
                isAnnual={isAnnual}
                index={index}
              />
            ))}
          </div>

          {/* Expandable Add-ons */}
          <AddOnsBar addOns={addOns} />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
