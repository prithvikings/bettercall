import React from "react";

const Hero = () => {
  return (
    <div className="w-full border-y border-blue-200">
      {/* Main Container */}
      <div className="relative max-w-6xl mx-auto px-4 py-24 pt-36 border-x border-blue-200 min-h-[70vh] flex flex-col items-center justify-center gap-4 text-center">
        {/* --- Corner Accents for Main Container --- */}
        <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-[3px] border-l-[3px] border-blue-500"></div>
        <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-[3px] border-r-[3px] border-blue-500"></div>
        <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-[3px] border-l-[3px] border-blue-500"></div>
        <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-[3px] border-r-[3px] border-blue-500"></div>

        {/* --- Modernized Top Badge --- */}
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 mb-2 text-sm font-medium border border-blue-200 bg-blue-50 text-blue-700 shadow-sm">
          {/* Glowing Blue Indicator Dot */}
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 bg-blue-600"></span>
          </div>
          <span className="font-poppins">Unified Communication Platform</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-5xl font-inter tracking-tight font-semibold text-zinc-800">
            Calls. Chats. CRM. AI.
          </h1>

          {/* Added 'relative' to this span so the new corners stick to its edges */}
          <span className="relative text-5xl font-inter tracking-tight font-semibold py-1 px-4 bg-blue-100 text-blue-500 shadow-inner">
            {/* --- Corner Accents for "One Place." Highlight --- */}
            <div className="absolute -top-[2px] -left-[2px] w-3 h-3 border-t-[3px] border-l-[3px] border-blue-500"></div>
            <div className="absolute -top-[2px] -right-[2px] w-3 h-3 border-t-[3px] border-r-[3px] border-blue-500"></div>
            <div className="absolute -bottom-[2px] -left-[2px] w-3 h-3 border-b-[3px] border-l-[3px] border-blue-500"></div>
            <div className="absolute -bottom-[2px] -right-[2px] w-3 h-3 border-b-[3px] border-r-[3px] border-blue-500"></div>
            One Place.
          </span>
        </div>

        <p className="text-sm text-zinc-600 max-w-sm font-poppins mt-2">
          Run customer conversations, follow-ups, and AI agents from one
          platform.
        </p>

        {/* --- Modernized Buttons --- */}
        <div className="mt-2 flex items-center justify-center gap-4">
          {/* Primary Button */}
          <button className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 font-inter text-sm font-medium text-white bg-blue-600 shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]">
            Start for free
            {/* Animated Arrow Icon */}
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              ></path>
            </svg>
          </button>

          {/* Secondary Button */}
          <button className="inline-flex items-center justify-center px-6 py-2.5 font-inter text-sm font-medium text-zinc-700 bg-transparent border border-zinc-300 transition-all duration-200 hover:bg-zinc-100 hover:border-zinc-400 hover:text-zinc-900 active:scale-[0.98]">
            Talk to sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
