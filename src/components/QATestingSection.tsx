"use client";

import React, { useState, useMemo } from "react";
import { QA_RECORDS } from "@/data/portfolioData";
import { RobloxGameCard } from "@/components/RobloxGameCard";
import { Search, Gamepad2 } from "lucide-react";

export const QATestingSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecords = useMemo(() => {
    return QA_RECORDS.filter((rec) =>
      rec.gameName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <section id="qa-testing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 mb-2">
            <Gamepad2 className="h-4 w-4" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-sans">
            Games Tested
          </h2>
          <p className="mt-2 text-base text-slate-600 leading-relaxed font-normal max-w-xl">
            Roblox games tested, audited, and polished before and after release.
          </p>
        </div>

        {/* Search */}
        <div className="relative min-w-[240px]">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search game name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-gray-200 bg-white pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none transition-colors shadow-2xs"
          />
        </div>
      </div>

      {/* Clean Grid: Thumbnail & Name Only */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {filteredRecords.map((record) => (
          <RobloxGameCard key={record.id} record={record} />
        ))}
      </div>

      {filteredRecords.length === 0 && (
        <div className="text-center py-16 rounded-3xl border border-gray-200 bg-gray-50/50 text-sm text-slate-500">
          No games match &ldquo;{searchQuery}&rdquo;.
        </div>
      )}
    </section>
  );
};
