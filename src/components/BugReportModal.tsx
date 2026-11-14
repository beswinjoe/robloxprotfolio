"use client";

import React from "react";
import Image from "next/image";
import { BugReport } from "@/types/portfolio";
import {
  X,
  AlertOctagon,
  AlertTriangle,
  Info,
  CheckCircle2,
  Copy,
  Check,
  Cpu,
  Monitor,
  Share2,
} from "lucide-react";

interface BugReportModalProps {
  report: BugReport | null;
  onClose: () => void;
}

export const BugReportModal: React.FC<BugReportModalProps> = ({
  report,
  onClose,
}) => {
  const [copied, setCopied] = React.useState(false);

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
        return "bg-red-500/10 text-red-400 border-red-500/30";
      case "High":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";
      case "Medium":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-blue-500/10 text-blue-400 border-blue-500/30";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl border border-[#2a2a32] bg-[#141418] text-[#ededed] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Topbar */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#24242c] bg-[#17171d] px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#e2b053]">
              {report.id}
            </span>
            <span className="text-[#52525b]">•</span>
            <span
              className={`rounded border px-2 py-0.5 text-xs font-mono font-medium ${severityBadge(
                report.severity
              )}`}
            >
              {report.severity} Severity
            </span>
            <span className="hidden sm:inline-flex rounded border border-[#272730] bg-[#1a1a22] px-2 py-0.5 text-[11px] font-mono text-[#a1a1aa]">
              {report.resolutionStatus}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyTicket}
              className="inline-flex items-center gap-1.5 rounded border border-[#2d2d38] bg-[#1f1f28] px-2.5 py-1 text-xs font-mono text-[#d4d4d8] hover:bg-[#282834] transition-colors"
              title="Copy formatted bug ticket"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-[#9ca3af]" />
                  <span>Copy Ticket</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="rounded-md p-1.5 text-[#71717a] hover:bg-[#202028] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Title & Game */}
          <div>
            <div className="text-xs font-mono text-[#8e8e93] uppercase tracking-wider mb-1">
              Target Experience:{" "}
              <strong className="text-white">{report.game}</strong> • Category:{" "}
              {report.category}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
              {report.bugTitle}
            </h3>
          </div>

          {/* Visual Evidence / Telemetry Frame */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-[#71717a] mb-2">
              <span className="uppercase tracking-wider">
                Defect Evidence & Screen Capture
              </span>
              <span>Type: {report.evidenceType.toUpperCase()}</span>
            </div>
            {report.image ? (
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[#272730] bg-[#0c0c10]">
                <Image
                  src={report.image}
                  alt={report.bugTitle}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute top-3 left-3 rounded-md bg-black/80 px-2.5 py-1 text-[11px] font-mono text-red-400 border border-red-500/30 backdrop-blur-md">
                  {report.id} // EVIDENCE FRAME
                </div>
              </div>
            ) : null}
            <p className="mt-2 text-xs font-mono text-[#8e8e93] bg-[#18181f] p-2.5 rounded border border-[#24242c]">
              🔍 <strong className="text-[#d4d4d8]">Recorded Evidence:</strong>{" "}
              {report.evidenceDescription}
            </p>
          </div>

          {/* Steps to Reproduce */}
          <div className="rounded-lg border border-[#24242c] bg-[#16161b] p-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#e2b053] flex items-center gap-1.5">
              <span>Deterministic Steps to Reproduce</span>
            </h4>
            <ol className="space-y-2 text-xs text-[#d1d5db]">
              {report.stepsToReproduce.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#202028] font-mono text-[10px] font-semibold text-[#a1a1aa]">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Side by side: Expected vs Actual */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Expected */}
            <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.04] p-4 text-xs space-y-2">
              <div className="flex items-center gap-1.5 font-mono text-emerald-400 font-semibold text-[11px] uppercase tracking-wider">
                <CheckCircle2 className="h-4 w-4" />
                Expected Behavior
              </div>
              <p className="text-[#cbd5e1] leading-relaxed">
                {report.expectedBehaviour}
              </p>
            </div>

            {/* Actual */}
            <div className="rounded-lg border border-red-500/20 bg-red-500/[0.04] p-4 text-xs space-y-2">
              <div className="flex items-center gap-1.5 font-mono text-red-400 font-semibold text-[11px] uppercase tracking-wider">
                <AlertOctagon className="h-4 w-4" />
                Actual Behavior
              </div>
              <p className="text-[#cbd5e1] leading-relaxed">
                {report.actualBehaviour}
              </p>
            </div>
          </div>

          {/* Suggested Fix */}
          <div className="rounded-lg border border-[#2b2b36] bg-[#191921] p-4 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#38bdf8]">
              <Cpu className="h-4 w-4" />
              <span>Recommended Engineering Fix & Optimization</span>
            </div>
            <p className="text-xs text-[#d4d4d8] leading-relaxed">
              {report.suggestedImprovement}
            </p>
          </div>

          {/* Metadata Footer */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#222228] text-[11px] font-mono text-[#71717a]">
            <div>
              Platforms Affected:{" "}
              {report.affectedPlatform?.join(", ") || "PC / Mobile"}
            </div>
            <div>Ref: {report.dateReported || "Documented Ticket"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
