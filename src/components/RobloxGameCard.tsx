"use client";

import React from "react";
import Image from "next/image";
import { QARecord } from "@/types/portfolio";

interface RobloxGameCardProps {
  record: QARecord;
}

export const RobloxGameCard: React.FC<RobloxGameCardProps> = ({ record }) => {
  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-3 sm:p-4 shadow-xs hover:shadow-lg hover:border-gray-200 transition-all duration-300">
      {/* Game Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-50 border border-gray-100">
        <Image
          src={record.image}
          alt={record.gameName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-left transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
      </div>

      {/* Game Name Only */}
      <div className="mt-3 px-1 pb-1">
        <h3 className="text-base sm:text-lg font-bold text-slate-950 tracking-tight group-hover:text-rose-600 transition-colors line-clamp-1 font-sans">
          {record.gameName}
        </h3>
        {record.developer && (
          <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
            {record.developer}
          </p>
        )}
      </div>
    </div>
  );
};
