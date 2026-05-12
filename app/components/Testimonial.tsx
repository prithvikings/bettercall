"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// --- LOGOS DATA ---
const initialLogos = [
  { id: 1, name: "Boat", src: "/logos/Boat.png", scale: "scale-80" },
  { id: 2, name: "Flipkart", src: "/logos/flipkart.png" },
  { id: 3, name: "Groww", src: "/logos/Groww.png" },
  { id: 4, name: "Lenskart", src: "/logos/Lenskart.png", scale: "scale-200" },
  { id: 5, name: "Meesho", src: "/logos/meesho.webp", scale: "scale-250" },
  { id: 6, name: "Paytm", src: "/logos/Paytm.png" },
  { id: 7, name: "PhonePe", src: "/logos/phonepe.png", scale: "scale-250" },
  { id: 8, name: "Swiggy", src: "/logos/Swiggy.webp" },
];

const TestimonialSection = () => {
  const [logos, setLogos] = useState(initialLogos);

  // Logo shuffle animation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setLogos((prevLogos) => {
        const newLogos = [...prevLogos];
        const idx1 = Math.floor(Math.random() * newLogos.length);
        let idx2 = Math.floor(Math.random() * newLogos.length);
        while (idx1 === idx2) {
          idx2 = Math.floor(Math.random() * newLogos.length);
        }
        [newLogos[idx1], newLogos[idx2]] = [newLogos[idx2], newLogos[idx1]];
        return newLogos;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full border-y border-t-0 border-zinc-200 bg-white overflow-hidden">
      {/* Main Container */}
      <div className="relative max-w-6xl mx-auto border-x border-zinc-200 flex flex-col bg-white">
        {/* --- Sharp Blue Corner Accents --- */}
        <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-[3px] border-l-[3px] border-blue-500 z-20"></div>
        <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-[3px] border-r-[3px] border-blue-500 z-20"></div>
        <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-[3px] border-l-[3px] border-blue-500 z-20"></div>
        <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-[3px] border-r-[3px] border-blue-500 z-20"></div>

        {/* =========================================
            TOP SECTION: Testimonial Details
        ========================================= */}
        <div className="grid grid-cols-1 items-stretch divide-y md:divide-y-0 md:divide-x divide-zinc-200 border-b border-zinc-200 bg-zinc-50 md:h-[28rem] md:grid-cols-4">
          {/* Left Side: Image & Quote (Takes 3 columns on large screens) */}
          <div className="col-span-1 flex flex-col gap-10 px-4 py-10 md:flex-row md:py-0 lg:col-span-3">
            {/* Image (Has strict margins to create that inner spacing) */}
            <div className="relative m-4 hidden shrink-0 aspect-square rounded-xl overflow-hidden md:block">
              <Image
                src="/portrait.webp" // Make sure to add your image here
                alt="Lisa Thompson"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Quote Container (Spreads content using justify-between) */}
            <div className="flex flex-col items-start justify-between gap-4 py-4 pr-8 md:my-4 flex-1">
              <div>
                {/* Company Logo / Text */}
                <div className="flex items-center gap-2 text-2xl font-bold tracking-tight text-zinc-800 mb-6 font-serif lowercase">
                  granola
                </div>

                {/* Quote */}
                <blockquote className="text-zinc-900 mt-6 text-xl md:text-[16px] font-poppins leading-relaxed tracking-tight">
                  "The ROI was immediate. We reduced our operational overhead
                  significantly while improving quality. It's rare to find a
                  solution that delivers on both fronts."
                </blockquote>
              </div>

              {/* Author Details (Pinned to bottom via justify-between) */}
              <div className="flex items-end justify-between gap-4 w-full mt-8 md:mt-0">
                <div>
                  <p className="text-zinc-900 font-inter text-lg">
                    Lisa Thompson
                  </p>
                  <p className="text-sm font-medium font-poppins text-zinc-500">
                    VP Engineering, InnovateLabs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Statistic (Takes 1 column) */}
          <div className="hidden flex-col justify-end px-6 pb-8 lg:col-span-1 lg:flex bg-zinc-50/30">
            <div className="flex flex-col gap-1">
              <p className="text-zinc-900 text-6xl md:text-6xl font-inter tracking-tighter leading-none mb-2">
                50%
              </p>
              <p className="text-sm font-medium font-poppins text-zinc-600 tracking-wide">
                Cost Savings
              </p>
            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM SECTION: Animated Logo Grid
        ========================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 bg-white">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center h-[120px] px-6 border-b border-r border-zinc-200 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300 cursor-pointer overflow-hidden"
            >
              {/* Dynamic Expanding Hover Corners (Blue) */}
              <div className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-[2px] border-l-[2px] border-blue-500 z-30 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:opacity-100"></div>
              <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-[2px] border-r-[2px] border-blue-500 z-30 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:opacity-100"></div>

              {/* Animation Wrapper */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 flex items-center justify-center">
                <AnimatePresence>
                  <motion.div
                    key={logo.id}
                    initial={{ opacity: 0, filter: "blur(8px)", scale: 0.9 }}
                    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    exit={{ opacity: 0, filter: "blur(8px)", scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Image
                      src={logo.src}
                      alt={`Logo of ${logo.name}`}
                      width={140}
                      height={50}
                      className={`w-auto h-8 md:h-10 object-contain max-w-[120px] transition-transform duration-300 ${logo.scale || ""}`}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
