"use client";

import React, { useState } from "react";
import { SCRIPTING_PROJECTS } from "@/data/portfolioData";
import {
  Code2,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Terminal,
  Copy,
  Check,
} from "lucide-react";

export const DevelopmentSection: React.FC = () => {
  const [expandedCodeId, setExpandedCodeId] = useState<string | null>(
    "proj-01-core-combat"
  );
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleCode = (id: string) => {
    setExpandedCodeId(expandedCodeId === id ? null : id);
  };

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="development" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 mb-2">
          <Terminal className="h-4 w-4" />
          <span>ROBLOX LUAU DEVELOPMENT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-sans">
          Gameplay Scripting & Systems
        </h2>
        <p className="mt-2 max-w-2xl text-base text-slate-600 leading-relaxed font-normal">
          Contributions to 2–3 Roblox games focusing on server-authoritative combat logic, physics-driven character controllers, and match state management.
        </p>
      </div>

      {/* Projects Stack */}
      <div className="space-y-8">
        {SCRIPTING_PROJECTS.map((project, index) => (
          <article
            key={project.id}
            className="rounded-3xl border border-gray-200/90 bg-white p-7 sm:p-8 shadow-xs hover:shadow-lg hover:border-gray-300 transition-all duration-300"
          >
            <div className="space-y-6">
              {/* Top Bar: Title & Status */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-5">
                <div>
                  <div className="text-xs font-bold font-mono text-rose-600 uppercase mb-1">
                    0{index + 1} // SCRIPTING CONTRIBUTION
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <div>
                  <span className="rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
                    {project.projectStatus}
                  </span>
                </div>
              </div>

              {/* Contribution Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {project.contribution}
              </p>

              {/* Systems Scripted Grid */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Systems Scripted
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.systemsScripted.map((sys, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-start gap-2.5 rounded-2xl bg-gray-50/80 p-3.5 border border-gray-100"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                      <span className="text-xs sm:text-sm leading-snug text-slate-700">
                        {sys}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs font-semibold text-slate-400 mr-1">Stack:</span>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 font-mono text-xs text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Code Snippet Box */}
              {project.codeSnippetPreview && (
                <div className="rounded-2xl border border-gray-200 bg-slate-950 text-slate-100 overflow-hidden shadow-sm">
                  <div className="flex items-center justify-between px-5 py-3 bg-slate-900 border-b border-slate-800">
                    <button
                      onClick={() => toggleCode(project.id)}
                      className="flex items-center gap-2 text-xs font-mono font-bold text-slate-200 hover:text-white transition-colors"
                    >
                      <Code2 className="h-4 w-4 text-rose-400" />
                      <span>{project.codeSnippetPreview.filename}</span>
                      {expandedCodeId === project.id ? (
                        <ChevronUp className="h-3.5 w-3.5 text-slate-400" />
                      ) : (
                        <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
                      )}
                    </button>

                    <button
                      onClick={() =>
                        handleCopyCode(
                          project.id,
                          project.codeSnippetPreview!.code
                        )
                      }
                      className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-[11px] font-mono text-slate-200 hover:bg-slate-700 transition-colors"
                    >
                      {copiedId === project.id ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3 text-slate-400" />
                          <span>Copy Luau</span>
                        </>
                      )}
                    </button>
                  </div>

                  {expandedCodeId === project.id && (
                    <div className="p-5 space-y-3">
                      <pre className="overflow-x-auto text-[11px] font-mono text-slate-300 leading-relaxed bg-black/60 p-4 rounded-xl border border-slate-800/80">
                        <code>{project.codeSnippetPreview.code}</code>
                      </pre>
                      <p className="text-xs text-slate-400 font-mono">
                        💡 {project.codeSnippetPreview.explanation}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
