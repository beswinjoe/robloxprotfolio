"use client";

import React, { useState, useMemo } from "react";
import { BUG_REPORTS } from "@/data/portfolioData";
import { BugReport, Severity } from "@/types/portfolio";
import { BugReportModal } from "@/components/BugReportModal";
import {
  FileCode2,
  ChevronRight,
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
        return "bg-rose-50 text-rose-700 border-rose-200";
      case "High":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "Medium":
        return "bg-blue-50 text-blue-700 border-blue-200";
      default:
        return "bg-gray-100 text-slate-700 border-gray-200";
    }
  };

  return (
    <section id="bug-reports" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 mb-2">
          <FileCode2 className="h-4 w-4" />
          <span>DOCUMENTED DEFECT REPORTS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-sans">
          Bug Reports & Case Studies
        </h2>
        <p className="mt-2 max-w-2xl text-base text-slate-600 leading-relaxed font-normal">
          Structured diagnostic reports with deterministic reproduction steps, root cause analysis, and developer remediation recommendations.
        </p>

        {/* Severity Tabs & Filter */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl border border-gray-200/80 bg-gray-50/80">
            {severities.map((sev) => {
              const count =
                sev === "All"
                  ? BUG_REPORTS.length
                  : BUG_REPORTS.filter((r) => r.severity === sev).length;
              return (
                <button
                  key={sev}
                  onClick={() => setSelectedSeverity(sev)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedSeverity === sev
                      ? "bg-slate-950 text-white shadow-2xs"
                      : "text-slate-600 hover:text-slate-950 hover:bg-white"
                  }`}
                >
                  <span>{sev}</span>
                  <span className="ml-1 text-[11px] opacity-70">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[240px]">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search ticket ID or game..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-white pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none transition-colors shadow-2xs"
            />
          </div>
        </div>
      </div>

      {/* Ticket List View */}
      <div className="space-y-4">
        {filteredReports.map((report) => (
          <div
            key={report.id}
            onClick={() => setSelectedReport(report)}
            className="group cursor-pointer rounded-2xl border border-gray-200/90 bg-white p-5 sm:p-6 transition-all duration-200 hover:border-gray-300 hover:shadow-md"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-mono font-bold text-slate-950">
                    {report.id}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${getSeverityStyle(
                      report.severity
                    )}`}
                  >
                    {report.severity}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="font-semibold text-slate-800">
                    {report.game}
                  </span>
                  <span className="hidden sm:inline text-gray-300">•</span>
                  <span className="hidden sm:inline text-slate-500">
                    Category: {report.category}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-rose-600 transition-colors leading-snug">
                  {report.bugTitle}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
                  <span className="font-semibold text-slate-700">Repro: </span>
                  {report.stepsToReproduce[0]}
                </p>
              </div>

              <div className="flex items-center justify-between lg:justify-end gap-3 shrink-0 pt-2 lg:pt-0 border-t border-gray-100 lg:border-t-0">
                <div className="text-left lg:text-right">
                  <div className="text-[10px] font-semibold uppercase text-slate-400">
                    Status
                  </div>
                  <div className="text-xs font-semibold text-emerald-600">
                    {report.resolutionStatus}
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedReport(report);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2 text-xs font-semibold text-slate-800 group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all shadow-2xs"
                >
                  <span>Inspect Ticket</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredReports.length === 0 && (
        <div className="text-center py-12 rounded-2xl border border-gray-200 bg-gray-50/50 text-sm text-slate-500">
          No bug tickets match &ldquo;{searchFilter}&rdquo;.
        </div>
      )}

      {/* Modal */}
      <BugReportModal
        report={selectedReport}
        onClose={() => setSelectedReport(null)}
      />
    </section>
  );
};
