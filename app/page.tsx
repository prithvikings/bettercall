import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoGrid from "./components/LogoGrid";
import Problem from "./components/Problem";
import CorePlatform from "./components/CorePlatform";
import Industries from "./components/Industries";
import ArtificialSection from "./components/ArtificialSection";
import UseCase from "./components/UseCase";
import Benifits from "./components/Benifits";

const page = () => {
  return (
    // Added 'relative' and 'overflow-hidden' to keep the blur contained within the page bounds
    <div className="relative bg-gradient-to-b from-zinc-50 to-[#faf9f5] min-h-screen overflow-hidden pb-1">
      <Navbar />
      <Hero />
      <LogoGrid />
      <Problem />
      <CorePlatform />
      <ArtificialSection />
      <UseCase />
      <Industries />
      <Benifits />
      {/* --- Bottom Faded Blur Effects --- */}

      {/* 1. Ambient Glowing Blur (Increased size, blur radius, and opacity)
      <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[100%] max-w-5xl h-[500px] bg-purple-400/40 blur-[180px] rounded-full pointer-events-none z-0"></div> */}

      {/* 2. Gradient Fade Overlay (Increased height to blend the larger glow) */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#faf9f5] to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default page;
