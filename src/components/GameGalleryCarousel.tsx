"use client";

import React from "react";
import Image from "next/image";
import { GALLERY_GAMES } from "@/data/portfolioData";

export const GameGalleryCarousel: React.FC = () => {
  // Duplicate for seamless infinite loop
  const displayGames = [...GALLERY_GAMES, ...GALLERY_GAMES];

  return (
    <section id="gallery" className="py-8 overflow-hidden select-none">
      {/* Curved / perspective marquee wrapper */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge blur gradient masks */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Continuous Animated Carousel */}
        <div className="animate-carousel py-4 flex items-center gap-5 sm:gap-6">
          {displayGames.map((game, idx) => {
            // Subtle slight alternate rotations for the organic editorial feel shown in reference
            const rotationClass =
              idx % 5 === 0
                ? "-rotate-2"
                : idx % 5 === 1
                ? "-rotate-1"
                : idx % 5 === 2
                ? "rotate-0"
                : idx % 5 === 3
                ? "rotate-1"
                : "rotate-2";

            const widthClass =
              idx % 3 === 0
                ? "w-[260px] sm:w-[320px] aspect-[4/3]"
                : idx % 3 === 1
                ? "w-[280px] sm:w-[350px] aspect-[16/10]"
                : "w-[250px] sm:w-[300px] aspect-[4/3]";

            return (
              <div
                key={`${game.title}-${idx}`}
                className={`relative shrink-0 overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 shadow-md shadow-gray-200/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-20 cursor-pointer ${rotationClass} ${widthClass}`}
              >
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  sizes="350px"
                  className="object-cover object-left"
                  unoptimized
                />

                {/* Subtle bottom gradient & info overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <div className="text-xs font-semibold text-rose-300 font-mono">
                    {game.category}
                  </div>
                  <div className="text-sm font-bold tracking-tight text-white leading-tight">
                    {game.title}
                  </div>
                  <div className="text-[11px] text-gray-300 mt-0.5">
                    {game.studio}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination dots below carousel matching reference */}
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="h-2 w-2 rounded-full bg-slate-800" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
      </div>
    </section>
  );
};
