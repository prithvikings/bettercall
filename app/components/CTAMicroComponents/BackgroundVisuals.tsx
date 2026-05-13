import React from "react";

export const BackgroundVisuals = () => {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none z-0"></div>
      <div className="absolute inset-0 w-full h-full pointer-events-none flex justify-center items-center opacity-[0.03] text-blue-900 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="network"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="1.5" fill="currentColor" />
              <path
                d="M 50 50 L 150 150 M 50 50 L -50 -50 M 50 50 L 150 -50"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#network)" />
        </svg>
      </div>
    </>
  );
};
