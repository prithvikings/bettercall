import React from "react";
import { Check } from "lucide-react";

export const TrustIndicators = ({ items }: { items: string[] }) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wide"
        >
          <Check className="w-3.5 h-3.5 text-blue-500" />
          {item}
        </div>
      ))}
    </>
  );
};
