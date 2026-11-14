"use client";

import React, { useState, useMemo } from "react";
import { QA_RECORDS } from "@/data/portfolioData";
import { RobloxGameCard } from "@/components/RobloxGameCard";
import {
  ShieldAlert,
  Search,
  Sparkles,
  Layers,
  Gamepad2,
} from "lucide-react";

export const QATestingSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { label: "All Tested Games", value: "All", count: QA_RECORDS.length },
    {
      label: "Paid Studio QA",
      value: "Paid Testing",
      count: QA_RECORDS.filter((r) => r.category === "Paid Testing").length,
    },
    {
      label: "QA Central Archive",
      value: "QA Central Voluntary",
      count: QA_RECORDS.filter((r) => r.category === "QA Central Voluntary")
        .length,
    },
    {
      label: "Additional Records",
      value: "Unverified / Pending Audit",
      count: QA_RECORDS.filter(
        (r) => r.category === "Unverified / Pending Audit"
      ).length,
    },
  ];

  const filteredRecords = useMemo(() => {
    return QA_RECORDS.filter((rec) => {
      const matchesCategory =
        selectedCategory === "All" || rec.category === selectedCategory;
      const matchesSearch =
        rec.gameName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rec.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (rec.developer &&
          rec.developer.toLowerCase().includes(searchQuery.toLowerCase())) ||
        rec.focusAreas.some((f) =>
          f.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="qa-testing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-[#00a2ff] mb-2 font-bold uppercase tracking-wider">
          <Gamepad2 className="h-4 w-4" />
          <span>ROBLOX QUALITY ASSURANCE RECORD</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white font-sans">
          Tested Game Experiences
        </h2>
        <p className="mt-2 max-w-2xl text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
          Real game testing records across 15+ Roblox titles. Click play to interact, view documented defects, and explore gameplay polish recommendations.
        </p>

        {/* Category Filter Pills & Search */}
        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl border border-[#232328] bg-[#141418]">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono font-bold transition-all duration-200 ${
                  selectedCategory === cat.value
                    ? "bg-[#0055ff] text-white shadow-lg shadow-blue-900/40"
                    : "text-[#8e8e93] hover:text-white hover:bg-[#1f1f26]"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] ${
                    selectedCategory === cat.value
                      ? "bg-white/20 text-white"
                      : "bg-[#1c1c22] text-[#71717a]"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative min-w-[260px]">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-[#71717a]" />
            <input
              type="text"
              placeholder="Search by game title, studio or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-[#27272e] bg-[#141418] pl-10 pr-4 py-2.5 text-xs text-white placeholder-[#71717a] focus:border-[#0055ff] focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Grid of Roblox Game Cards */}
      <div className="space-y-6">
        {filteredRecords.map((record) => (
          <RobloxGameCard key={record.id} record={record} />
        ))}
      </div>

      {filteredRecords.length === 0 && (
        <div className="text-center py-16 rounded-2xl border border-[#232328] bg-[#141418] text-sm text-[#71717a]">
          No games match the current query &ldquo;{searchQuery}&rdquo;.
        </div>
      )}
    </section>
  );
};
