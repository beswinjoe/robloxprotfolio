"use client";

import React, { useState } from "react";
import { SCRIPTING_PROJECTS } from "@/data/portfolioData";
import {
  Code2,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Terminal,
  Copy,
  Check,
  Shield,
  Layers,
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
    <section id="development" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1e1e23]">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#e2b053] font-bold uppercase tracking-wider mb-2">
          <Terminal className="h-4 w-4" />
          <span>ROBLOX LUAU GAMEPLAY SCRIPTER</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white font-sans">
          Gameplay Systems & Development
        </h2>
        <p className="mt-2 max-w-2xl text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
          I design and script core Roblox mechanics: server-authoritative combat, custom locomotion physics, and atomic data persistence.
        </p>
      </div>

      {/* Projects Stack */}
      <div className="space-y-8">
        {SCRIPTING_PROJECTS.map((project, index) => (
          <article
            key={project.id}
            className="rounded-2xl border border-[#232328] bg-[#141418] p-6 lg:p-8 transition-all hover:border-[#383844]"
          >
            <div className="space-y-6">
              {/* Top Bar: Title & Status */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#222228] pb-4">
                <div>
                  <div className="font-mono text-xs text-[#e2b053] font-bold mb-1">
                    0{index + 1} // LUAU ARCHITECTURE
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-[#a1a1aa] mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded-lg border border-[#2e2e38] bg-[#1c1c24] px-3 py-1 font-mono text-xs text-white font-semibold">
                    {project.projectStatus}
                  </span>
                </div>
              </div>

              {/* Contribution Description */}
              <p className="text-sm text-[#cbd5e1] leading-relaxed">
                {project.contribution}
              </p>

              {/* Systems Scripted Grid */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#71717a] font-bold mb-3">
                  Key Systems Engineered
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.systemsScripted.map((sys, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-start gap-2.5 rounded-xl bg-[#181820] p-3 border border-[#24242d]"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#e2b053] mt-0.5" />
                      <span className="text-xs leading-snug text-[#d1d5db]">
                        {sys}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs font-mono text-[#71717a] mr-1">Stack:</span>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-[#2b2b36] bg-[#18181f] px-2.5 py-1 font-mono text-xs text-[#d4d4d8]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Code Snippet Box */}
              {project.codeSnippetPreview && (
                <div className="rounded-xl border border-[#262630] bg-[#0c0c10] overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#17171e] border-b border-[#23232c]">
                    <button
                      onClick={() => toggleCode(project.id)}
                      className="flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-[#e2b053] transition-colors"
                    >
                      <Code2 className="h-4 w-4 text-[#e2b053]" />
                      <span>{project.codeSnippetPreview.filename}</span>
                      {expandedCodeId === project.id ? (
                        <ChevronUp className="h-3.5 w-3.5 text-[#71717a]" />
                      ) : (
                        <ChevronDown className="h-3.5 w-3.5 text-[#71717a]" />
                      )}
                    </button>

                    <button
                      onClick={() =>
                        handleCopyCode(
                          project.id,
                          project.codeSnippetPreview!.code
                        )
                      }
                      className="flex items-center gap-1.5 rounded-md border border-[#2c2c38] bg-[#1d1d26] px-2.5 py-1 text-[11px] font-mono text-[#d4d4d8] hover:bg-[#282834] transition-colors"
                    >
                      {copiedId === project.id ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3 text-[#9ca3af]" />
                          <span>Copy Luau</span>
                        </>
                      )}
                    </button>
                  </div>

                  {expandedCodeId === project.id && (
                    <div className="p-4 space-y-3">
                      <pre className="overflow-x-auto text-[11px] font-mono text-[#a1a1aa] leading-relaxed bg-[#08080a] p-4 rounded-lg border border-[#1b1b22]">
                        <code>{project.codeSnippetPreview.code}</code>
                      </pre>
                      <p className="text-xs text-[#8e8e93] font-mono">
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
