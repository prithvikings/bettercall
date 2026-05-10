import React from "react";

const Problem = () => {
  return (
    <div className="w-full border-y border-blue-200">
      <div className="relative max-w-6xl mx-auto px-4 py-24 pt-0 border-x border-blue-200 min-h-[70vh] flex flex-col items-center justify-center gap-4 text-center">
        {/* --- Corner Accents for Main Container --- */}
        <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-[3px] border-l-[3px] border-blue-500"></div>
        <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-[3px] border-r-[3px] border-blue-500"></div>
        <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-[3px] border-l-[3px] border-blue-500"></div>
        <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-[3px] border-r-[3px] border-blue-500"></div>
      </div>
    </div>
  );
};

export default Problem;
