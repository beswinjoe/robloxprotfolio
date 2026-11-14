"use client";

import React, { useState, useMemo } from "react";
import { BUG_REPORTS } from "@/data/portfolioData";
import { BugReport, Severity } from "@/types/portfolio";
import { BugReportModal } from "@/components/BugReportModal";
import {
  AlertTriangle,
  AlertOctagon,
  CheckCircle2,
  Filter,
  FileCode2,
  ExternalLink,
  ChevronRight,
  Shield,
  Search,
} from "lucide-react";

export const BugReportSystem: React.FC = () => {
  const [selectedSeverity, setSelectedSeverity] = useState<string>("All");
  const [selectedReport, setSelectedReport] = useState<BugReport | null>(null);
  const [searchFilter, setSearchFilter] = useState("");

  const severities = ["All", "Critical", "High", "Medium"];

  const filteredReports = useMemo(() => {
    return BUG_REPORTS.filter((rep) => {
      const matchesSev =
        selectedSeverity === "All" || rep.severity === selectedSeverity;
      const matchesSearch =
        rep.bugTitle.toLowerCase().includes(searchFilter.toLowerCase()) ||
        rep.game.toLowerCase().includes(searchFilter.toLowerCase()) ||
        rep.id.toLowerCase().includes(searchFilter.toLowerCase()) ||
        rep.category.toLowerCase().includes(searchFilter.toLowerCase());
      return matchesSev && matchesSearch;
    });
  }, [selectedSeverity, searchFilter]);

  const getSeverityStyle = (sev: Severity) => {
    switch (sev) {
      case "Critical":
        return {
          pill: "bg-red-500/10 text-red-400 border-red-500/25",
          dot: "bg-red-400",
        };
      case "High":
        return {
          pill: "bg-amber-500/10 text-amber-400 border-amber-500/25",
          dot: "bg-amber-400",
        };
      case "Medium":
        return {
          pill: "bg-yellow-500/10 text-yellow-400 border-yellow-500/25",
          dot: "bg-yellow-400",
        };
      default:
        return {
          pill: "bg-blue-500/10 text-blue-400 border-blue-500/25",
          dot: "bg-blue-400",
        };
    }
  };

  return (
    <section id="bug-reports" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
          <FileCode2 className="h-4 w-4" />
          <span>PRODUCTION-GRADE DEFECT TICKETING SYSTEM</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Bug Reports & QA Case Studies
        </h2>
        <p className="mt-2 max-w-3xl text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
          Structured diagnostic reports with deterministic reproduction steps, root cause analysis,
          and developer-ready remediation recommendations.
        </p>

        {/* Severity Tabs & Filter */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 p-1 rounded-lg border border-[#232328] bg-[#141418]">
            {severities.map((sev) => {
              const count =
                sev === "All"
                  ? BUG_REPORTS.length
                  : BUG_REPORTS.filter((r) => r.severity === sev).length;
              return (
                <button
                  key={sev}
                  onClick={() => setSelectedSeverity(sev)}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors flex items-center gap-1.5 ${
                    selectedSeverity === sev
                      ? "bg-[#25252c] text-white border border-[#373740]"
                      : "text-[#8e8e93] hover:text-[#d4d4d8] hover:bg-[#1a1a20]"
                  }`}
                >
                  <span>{sev}</span>
                  <span className="text-[10px] text-[#71717a]">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[240px]">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#71717a]" />
            <input
              type="text"
              placeholder="Search ticket ID, title, or category..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full rounded-md border border-[#27272e] bg-[#141418] pl-9 pr-3 py-1.5 text-xs text-white placeholder-[#71717a] focus:border-[#4d4d5a] focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Ticket List View */}
      <div className="space-y-4">
        {filteredReports.map((report) => {
          const style = getSeverityStyle(report.severity);
          return (
            <div
              key={report.id}
              onClick={() => setSelectedReport(report)}
              className="group cursor-pointer rounded-xl border border-[#222226] bg-[#141417] p-5 transition-all hover:border-[#383842] hover:bg-[#17171c]"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                {/* Left side info */}
                <div className="space-y-2 max-w-3xl">
                  {/* Meta tag line */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="font-bold text-[#e2b053]">{report.id}</span>
                    <span className="text-[#52525b]">•</span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded border px-2 py-0.5 text-[10px] font-medium ${style.pill}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                      {report.severity}
                    </span>
                    <span className="text-[#52525b]">•</span>
                    <span className="text-[#a1a1aa] font-semibold">
                      {report.game}
                    </span>
                    <span className="hidden sm:inline text-[#52525b]">•</span>
                    <span className="hidden sm:inline rounded bg-[#1c1c22] px-2 py-0.5 text-[10px] text-[#9ca3af]">
                      Category: {report.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#f4f4f5] transition-colors leading-snug">
                    {report.bugTitle}
                  </h3>

                  {/* Reproduction Teaser */}
                  <p className="text-xs text-[#9ca3af] line-clamp-2 leading-relaxed">
                    <span className="font-mono text-[#d4d4d8] font-medium">
                      Repro:{" "}
                    </span>
                    {report.stepsToReproduce[0]}
                  </p>
                </div>

                {/* Right side status & action */}
                <div className="flex items-center justify-between lg:justify-end gap-3 shrink-0 pt-2 lg:pt-0 border-t border-[#222228] lg:border-t-0">
                  <div className="text-left lg:text-right">
                    <div className="text-[10px] font-mono text-[#71717a] uppercase">
                      Status
                    </div>
                    <div className="text-xs font-mono font-medium text-emerald-400">
                      {report.resolutionStatus}
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedReport(report);
                    }}
                    className="inline-flex items-center gap-1.5 rounded border border-[#2b2b34] bg-[#1a1a20] px-3 py-1.5 text-xs font-mono text-[#d4d4d8] group-hover:border-[#444452] group-hover:bg-[#22222a] group-hover:text-white transition-all"
                  >
                    <span>Inspect Ticket</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredReports.length === 0 && (
        <div className="text-center py-12 rounded-xl border border-[#232328] bg-[#141418] text-sm text-[#71717a]">
          No bug tickets match the filter &ldquo;{searchFilter}&rdquo;.
        </div>
      )}

      {/* Detail Modal */}
      <BugReportModal
        report={selectedReport}
        onClose={() => setSelectedReport(null)}
      />
    </section>
  );
};
