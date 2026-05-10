import React from "react";
import Image from "next/image";

const LogoGrid = () => {
  const logos = [
    { id: 1, name: "Boat", src: "/logos/Boat.png", scale: "scale-80" },
    { id: 2, name: "Flipkart", src: "/logos/flipkart.png" },
    { id: 3, name: "Groww", src: "/logos/Groww.png" },
    { id: 4, name: "Lenskart", src: "/logos/Lenskart.png", scale: "scale-200" },
    { id: 5, name: "Meesho", src: "/logos/meesho.webp", scale: "scale-250" },
    { id: 6, name: "Paytm", src: "/logos/Paytm.png" },
    { id: 7, name: "PhonePe", src: "/logos/phonepe.png", scale: "scale-250" },
    { id: 8, name: "Swiggy", src: "/logos/Swiggy.webp" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-blue-200">
        {logos.map((logo) => (
          <div
            key={logo.id}
            // Added 'group' and 'relative' to control the hover corners inside this specific cell
            className="group relative flex items-center justify-center py-10 px-6 border-b border-r border-blue-200 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300 cursor-pointer"
          >
            {/* --- Hover Corners --- */}
            {/* Bottom Left Corner (Fades in on hover) */}
            <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-[3px] border-l-[3px] border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

            {/* Bottom Right Corner (Fades in on hover) */}
            <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-[3px] border-r-[3px] border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

            <Image
              src={logo.src}
              alt={`Logo of ${logo.name}`}
              width={140}
              height={50}
              className={`w-auto h-8 md:h-10 object-contain max-w-[120px] transition-transform duration-300 ${logo.scale || ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;
