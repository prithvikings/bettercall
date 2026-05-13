"use client";
import React from "react";
import Image from "next/image";

export const TestimonialDetails = ({ content }: { content: any }) => {
  return (
    <div className="grid grid-cols-1 items-stretch divide-y md:divide-y-0 md:divide-x divide-zinc-200 border-b border-zinc-200 bg-zinc-50 md:h-[28rem] md:grid-cols-4">
      {/* Left Side: Image & Quote */}
      <div className="col-span-1 flex flex-col gap-10 px-4 py-10 md:flex-row md:py-0 lg:col-span-3">
        {/* Image */}
        <div className="relative m-4 hidden shrink-0 aspect-square rounded-xl overflow-hidden md:block">
          <Image
            src={content.imageSrc}
            alt={content.author}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Quote Container */}
        <div className="flex flex-col items-start justify-between gap-4 py-4 pr-8 md:my-4 flex-1">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold tracking-tight text-zinc-800 mb-6 font-serif lowercase">
              {content.company}
            </div>
            <blockquote className="text-zinc-900 mt-6 text-xl md:text-[16px] font-poppins leading-relaxed tracking-tight">
              "{content.quote}"
            </blockquote>
          </div>

          <div className="flex items-end justify-between gap-4 w-full mt-8 md:mt-0">
            <div>
              <p className="text-zinc-900 font-inter text-lg">
                {content.author}
              </p>
              <p className="text-sm font-medium font-poppins text-zinc-500">
                {content.role}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Statistic */}
      <div className="hidden flex-col justify-end px-6 pb-8 lg:col-span-1 lg:flex bg-zinc-50/30">
        <div className="flex flex-col gap-1">
          <p className="text-zinc-900 text-6xl md:text-6xl font-inter tracking-tighter leading-none mb-2">
            {content.statValue}
          </p>
          <p className="text-sm font-medium font-poppins text-zinc-600 tracking-wide">
            {content.statLabel}
          </p>
        </div>
      </div>
    </div>
  );
};
