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
import TestimonialSection from "./components/Testimonial";
import Pricing from "./components/Pricing";
import Security from "./components/Security";
import Faq from "./components/Faq";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

const page = () => {
  return (
    <>
      <div className="relative bg-gradient-to-b from-zinc-50 to-[#faf9f5] min-h-screen overflow-hidden">
        <Navbar />
        <Hero />
        <LogoGrid />
        <Problem />
        <CorePlatform />
        <ArtificialSection />
        <UseCase />
        <Industries />
        <Benifits />
        <TestimonialSection />
        <Pricing />
        <Security />
        <FinalCTA />

        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#faf9f5] to-transparent pointer-events-none z-10"></div>
      </div>

      <Faq />
      <Footer />
    </>
  );
};

export default page;
