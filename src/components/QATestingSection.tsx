"use client";

import React, { useState, useMemo } from "react";
import { QA_RECORDS } from "@/data/portfolioData";
import { RobloxGameCard } from "@/components/RobloxGameCard";
import { Search, Gamepad2, ShieldCheck } from "lucide-react";

export const QATestingSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { label: "All Games", value: "All", count: QA_RECORDS.length },
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
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 mb-2">
          <Gamepad2 className="h-4 w-4" />
          <span>ROBLOX QA EXPERIENCE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-sans">
          Tested Game Experiences
        </h2>
        <p className="mt-2 max-w-2xl text-base text-slate-600 leading-relaxed font-normal">
          Verified quality assurance testing across 15 Roblox experiences. Click to inspect bugs discovered, reproduction steps, and gameplay feedback.
        </p>

        {/* Filter Tabs & Search */}
        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl border border-gray-200/80 bg-gray-50/80">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat.value
                    ? "bg-slate-950 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-950 hover:bg-white"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] ${
                    selectedCategory === cat.value
                      ? "bg-white/20 text-white"
                      : "bg-gray-200/70 text-slate-600"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative min-w-[260px]">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search game, studio, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-white pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none transition-colors shadow-2xs"
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
        <div className="text-center py-16 rounded-3xl border border-gray-200 bg-gray-50/50 text-sm text-slate-500">
          No games match the query &ldquo;{searchQuery}&rdquo;.
        </div>
      )}
    </section>
  );
};
