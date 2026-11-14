"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BugReport } from "@/types/portfolio";
import {
  X,
  AlertOctagon,
  AlertTriangle,
  CheckCircle2,
  Copy,
  Check,
  Cpu,
  Monitor,
} from "lucide-react";

interface BugReportModalProps {
  report: BugReport | null;
  onClose: () => void;
}

export const BugReportModal: React.FC<BugReportModalProps> = ({
  report,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!report) return null;

  const copyTicket = () => {
    const text = `[BUG REPORT] ${report.id}: ${report.bugTitle}
Game: ${report.game}
Severity: ${report.severity}
Status: ${report.resolutionStatus}

Steps to Reproduce:
${report.stepsToReproduce.map((s, i) => `${i + 1}. ${s}`).join("\n")}

Expected: ${report.expectedBehaviour}
Actual: ${report.actualBehaviour}

Suggested Improvement: ${report.suggestedImprovement}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const severityBadge = (sev: string) => {
    switch (sev) {
      case "Critical":
        return "bg-rose-50 text-rose-700 border-rose-200";
      case "High":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "Medium":
        return "bg-yellow-50 text-yellow-800 border-yellow-200";
      default:
        return "bg-blue-50 text-blue-700 border-blue-200";
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/40 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-gray-200 bg-white text-slate-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Topbar */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-gray-100 bg-white/95 px-6 py-4 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-slate-900">
              {report.id}
            </span>
            <span className="text-gray-300">•</span>
            <span
              className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${severityBadge(
                report.severity
              )}`}
            >
              {report.severity} Severity
            </span>
            <span className="hidden sm:inline-flex rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
              {report.resolutionStatus}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyTicket}
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-gray-100 transition-colors shadow-2xs"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-slate-500" />
                  <span>Copy Ticket</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="rounded-full p-1.5 text-slate-400 hover:bg-gray-100 hover:text-slate-800 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="text-xs font-semibold text-rose-600 uppercase tracking-wider mb-1">
              Experience: {report.game} • Category: {report.category}
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-snug">
              {report.bugTitle}
            </h3>
          </div>

          {/* Screenshot / Evidence Frame */}
          {report.image && (
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-2xs">
              <Image
                src={report.image}
                alt={report.bugTitle}
                fill
                className="object-cover object-left"
                unoptimized
              />
              <div className="absolute top-3 left-3 rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-mono font-bold text-rose-600 border border-gray-200 shadow-xs">
                {report.id} // VERIFIED EVIDENCE
              </div>
            </div>
          )}

          {/* Reproduction Steps */}
          <div className="rounded-2xl border border-gray-200/90 bg-gray-50/70 p-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Steps to Reproduce
            </h4>
            <ol className="space-y-2 text-xs sm:text-sm text-slate-700">
              {report.stepsToReproduce.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white font-mono text-[11px] font-bold text-slate-900 border border-gray-200 shadow-2xs">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Side by side: Expected vs Actual */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 text-xs sm:text-sm space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-emerald-800 text-xs uppercase tracking-wider">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Expected Behavior
              </div>
              <p className="text-slate-700 leading-relaxed">
                {report.expectedBehaviour}
              </p>
            </div>

            <div className="rounded-2xl border border-rose-200 bg-rose-50/50 p-5 text-xs sm:text-sm space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-rose-800 text-xs uppercase tracking-wider">
                <AlertOctagon className="h-4 w-4 text-rose-600" />
                Actual Behavior
              </div>
              <p className="text-slate-700 leading-relaxed">
                {report.actualBehaviour}
              </p>
            </div>
          </div>

          {/* Suggested Fix */}
          <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-5 space-y-2 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 font-bold text-blue-900 text-xs uppercase tracking-wider">
              <Cpu className="h-4 w-4 text-blue-600" />
              <span>Recommended Technical Fix</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              {report.suggestedImprovement}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
