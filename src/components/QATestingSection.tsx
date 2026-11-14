"use client";

import React, { useState, useMemo } from "react";
import { QA_RECORDS } from "@/data/portfolioData";
import { QARecord, TestingCategory } from "@/types/portfolio";
import { RobloxGameFrame } from "@/components/illustrations/RobloxGameFrame";
import {
  ShieldAlert,
  Search,
  Filter,
  CheckCircle,
  AlertTriangle,
  FileText,
  ChevronDown,
  ChevronUp,
  Tag,
  Eye,
} from "lucide-react";

export const QATestingSection: React.FC<{
  onSelectEvidence?: (record: QARecord) => void;
}> = ({ onSelectEvidence }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedRecordId, setExpandedRecordId] = useState<string | null>(
    "qa-paid-01"
  );

  const categories = [
    { label: "All Records", value: "All", count: QA_RECORDS.length },
    {
      label: "Paid QA",
      value: "Paid Testing",
      count: QA_RECORDS.filter((r) => r.category === "Paid Testing").length,
    },
    {
      label: "QA Central",
      value: "QA Central Voluntary",
      count: QA_RECORDS.filter((r) => r.category === "QA Central Voluntary")
        .length,
    },
    {
      label: "Pending Verification",
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
        rec.focusAreas.some((f) =>
          f.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedRecordId(expandedRecordId === id ? null : id);
  };

  return (
    <section id="qa-testing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
          <ShieldAlert className="h-4 w-4" />
          <span>ROBLOX QUALITY ASSURANCE & DEFECT ANALYSIS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          QA Testing Portfolio
        </h2>
        <p className="mt-2 max-w-3xl text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
          Systematic game testing across 15 documented titles. Strict deduplication preserves
          the integrity of 9 confirmed paid contracts, 4 QA Central voluntary tests, and 2 unverified records.
        </p>

        {/* Filter Controls & Search */}
        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-lg border border-[#232328] bg-[#141418]">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                  selectedCategory === cat.value
                    ? "bg-[#25252c] text-white shadow-sm border border-[#373740]"
                    : "text-[#8e8e93] hover:text-[#d4d4d8] hover:bg-[#1a1a20]"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                    selectedCategory === cat.value
                      ? "bg-[#33333d] text-white"
                      : "bg-[#1c1c22] text-[#71717a]"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative min-w-[240px]">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#71717a]" />
            <input
              type="text"
              placeholder="Filter game, genre, or area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border border-[#27272e] bg-[#141418] pl-9 pr-3 py-1.5 text-xs text-white placeholder-[#71717a] focus:border-[#4d4d5a] focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Grid of QA Records */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecords.map((record) => {
          const isExpanded = expandedRecordId === record.id;
          const isPaid = record.category === "Paid Testing";
          const isCentral = record.category === "QA Central Voluntary";

          return (
            <div
              key={record.id}
              className={`rounded-xl border transition-all flex flex-col justify-between ${
                isPaid
                  ? "border-[#27272d] bg-[#141418] hover:border-[#383842]"
                  : isCentral
                  ? "border-[#22252c] bg-[#131419] hover:border-[#313745]"
                  : "border-[#2c2622] bg-[#161413] hover:border-[#423932]"
              }`}
            >
              {/* Card Header & Frame */}
              <div>
                <div className="p-4 pb-2">
                  <RobloxGameFrame
                    gameName={record.gameName}
                    gameId={record.id}
                    category={record.genre}
                    aspectRatio="video"
                  />
                </div>

                <div className="p-5 pt-3 space-y-4">
                  {/* Category & Status */}
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span
                      className={`inline-flex items-center gap-1 rounded px-2 py-0.5 font-medium ${
                        isPaid
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : isCentral
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      }`}
                    >
                      {isPaid && <CheckCircle className="h-3 w-3" />}
                      {isCentral && <FileText className="h-3 w-3" />}
                      {!isPaid && !isCentral && <AlertTriangle className="h-3 w-3" />}
                      {record.category}
                    </span>

                    <span className="text-[#71717a]">
                      {record.bugsDiscoveredCount} Bugs Logged
                    </span>
                  </div>

                  {/* Title & Developer */}
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {record.gameName}
                    </h3>
                    <p className="text-xs text-[#8e8e93] font-mono mt-0.5">
                      {record.developer || "Undisclosed Client"} • {record.testingDate || "Documented"}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-[#c4c4cb] leading-relaxed line-clamp-3">
                    {record.testingSummary}
                  </p>

                  {/* Focus Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {record.focusAreas.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-[#222227] bg-[#19191e] px-2 py-0.5 text-[10px] font-mono text-[#a1a1aa]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Detail View */}
                  {isExpanded && (
                    <div className="pt-4 mt-4 border-t border-[#232328] space-y-3.5 text-xs animate-in fade-in duration-200">
                      {/* Key Bugs Highlight */}
                      <div>
                        <div className="font-mono text-[11px] uppercase tracking-wider text-red-400 mb-1.5 flex items-center gap-1">
                          <AlertTriangle className="h-3.5 w-3.5" />
                          Key Defects Documented
                        </div>
                        <ul className="space-y-1 text-[#d1d5db]">
                          {record.keyBugsHighlight.map((bug, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-1.5 text-[11px]">
                              <span className="text-red-400 font-mono mt-0.5">•</span>
                              <span className="leading-snug">{bug}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Gameplay Feedback */}
                      <div className="rounded border border-[#242429] bg-[#18181d] p-3 text-[11px]">
                        <div className="font-mono text-[#e2b053] uppercase text-[10px] mb-1">
                          Gameplay & Design Feedback
                        </div>
                        <p className="text-[#a1a1aa] leading-relaxed">
                          {record.gameplayFeedback}
                        </p>
                      </div>

                      {/* Evidence status */}
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#71717a] pt-1">
                        <span>Evidence: Video & Screenshot Log</span>
                        <span className="text-emerald-400">Available on Request</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Expander Toggle */}
              <div className="p-4 pt-0">
                <button
                  onClick={() => toggleExpand(record.id)}
                  className="w-full flex items-center justify-center gap-1 rounded border border-[#26262c] bg-[#17171c] py-2 text-xs font-mono text-[#d4d4d8] hover:bg-[#202026] hover:text-white transition-colors"
                >
                  <span>{isExpanded ? "Collapse Case Details" : "Inspect QA Details"}</span>
                  {isExpanded ? (
                    <ChevronUp className="h-3.5 w-3.5 text-[#71717a]" />
                  ) : (
                    <ChevronDown className="h-3.5 w-3.5 text-[#71717a]" />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredRecords.length === 0 && (
        <div className="text-center py-12 rounded-xl border border-[#232328] bg-[#141418] text-sm text-[#71717a]">
          No testing records match the current filter &ldquo;{searchQuery}&rdquo;.
        </div>
      )}
    </section>
  );
};
