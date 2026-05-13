"use client";
import React from "react";
import { Plus } from "lucide-react";

export const AddOnsBar = ({ addOns }: { addOns: any[] }) => {
  return (
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
  );
};
