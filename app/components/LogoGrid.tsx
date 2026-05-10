"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

const LogoGrid = () => {
  const [logos, setLogos] = useState(initialLogos);

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
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 border-l border-blue-200">
        {logos.map((logo, index) => (
          <div
            key={index}
            // FIX: Restored 'border-b' to all items. The second row now has its blue-200 bottom border again.
            className="group relative flex items-center justify-center h-[120px] px-6 border-b border-r border-blue-200 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300 cursor-pointer"
          >
            {/* --- Dynamic Expanding Hover Corners --- */}
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
  );
};

export default LogoGrid;
