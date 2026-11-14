"use client";

import React, { useState } from "react";
import { SCRIPTING_PROJECTS } from "@/data/portfolioData";
import { RobloxGameFrame } from "@/components/illustrations/RobloxGameFrame";
import {
  Code2,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Lock,
  Layers,
  Terminal,
} from "lucide-react";

export const DevelopmentSection: React.FC = () => {
  const [expandedCodeId, setExpandedCodeId] = useState<string | null>(
    "proj-01-core-combat"
  );

  const toggleCode = (id: string) => {
    setExpandedCodeId(expandedCodeId === id ? null : id);
  };

  return (
    <section id="development" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#e2b053] mb-2">
          <Terminal className="h-4 w-4" />
          <span>ROBLOX LUAU SCRIPTING & ARCHITECTURE</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Development Portfolio
        </h2>
        <p className="mt-2 max-w-3xl text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
          Focusing on server-authoritative multiplayer logic, physics-driven character controllers,
          and robust lifecycle architectures. Engineered approximately 2–3 Roblox game systems.
        </p>

        {/* Placeholder Integrity Notice */}
        <div className="mt-4 inline-flex items-center gap-2 rounded border border-[#2a2a30] bg-[#16161a] px-3 py-1.5 text-xs text-[#a1a1aa]">
          <Lock className="h-3.5 w-3.5 text-[#e2b053]" />
          <span>
            <strong className="text-[#d4d4d8]">Client Confidentiality Notice:</strong> Titles and studio designations below are structured technical placeholders pending public studio launches.
          </span>
        </div>
      </div>

      {/* Projects Stack */}
      <div className="space-y-12">
        {SCRIPTING_PROJECTS.map((project, index) => (
          <article
            key={project.id}
            className="rounded-xl border border-[#222226] bg-[#141417] p-6 lg:p-8 transition-all hover:border-[#33333b]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Visual Gameplay & Architecture Mockup */}
              <div className="lg:col-span-5 space-y-4">
                <RobloxGameFrame
                  gameName={project.title}
                  gameId={project.id}
                  category="Luau Systems View"
                  aspectRatio="wide"
                />

                {/* Quick Architecture Metrics */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {project.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="rounded border border-[#232328] bg-[#18181d] p-2"
                      >
                        <div className="text-[10px] font-mono text-[#71717a] uppercase">
                          {m.label}
                        </div>
                        <div className="mt-0.5 text-xs font-semibold font-mono text-[#d4d4d8] truncate">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Systems & Engineering Details */}
              <div className="lg:col-span-7 space-y-5">
                {/* Header info */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="font-mono text-xs text-[#e2b053]">
                      0{index + 1} // SCRIPTING CONTRIBUTION
                    </span>
                    <span className="rounded border border-[#2e2e36] bg-[#1c1c22] px-2 py-0.5 font-mono text-[11px] text-[#9ca3af]">
                      {project.projectStatus}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-[#a1a1aa] mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                {/* My Contribution */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#71717a] mb-1.5">
                    My Contribution
                  </h4>
                  <p className="text-sm text-[#d4d4d8] leading-relaxed">
                    {project.contribution}
                  </p>
                </div>

                {/* Systems Scripted */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#71717a] mb-2">
                    Systems Scripted
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#a1a1aa]">
                    {project.systemsScripted.map((sys, sIdx) => (
                      <li
                        key={sIdx}
                        className="flex items-start gap-2 rounded bg-[#18181c] p-2.5 border border-[#232328]"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#e2b053] mt-0.5" />
                        <span className="leading-snug text-[#d1d5db]">{sys}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#71717a] mb-2">
                    Technologies & Services Used
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-[#2b2b33] bg-[#19191e] px-2.5 py-1 font-mono text-xs text-[#d4d4d8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Development Details */}
                <div className="rounded-lg border border-[#222227] bg-[#18181d] p-4 text-xs text-[#9ca3af] leading-relaxed">
                  <div className="flex items-center gap-1.5 font-mono text-[#d4d4d8] text-[11px] mb-1">
                    <Cpu className="h-3.5 w-3.5 text-[#38bdf8]" />
                    <span>ENGINEERING IMPLEMENTATION & OPTIMIZATION</span>
                  </div>
                  {project.developmentDetails}
                </div>

                {/* Code Snippet Toggle */}
                {project.codeSnippetPreview && (
                  <div className="border border-[#26262d] rounded-lg overflow-hidden bg-[#0f0f12]">
                    <button
                      onClick={() => toggleCode(project.id)}
                      className="w-full flex items-center justify-between px-4 py-2.5 bg-[#17171c] text-xs font-mono text-[#d4d4d8] hover:bg-[#1e1e24] transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Code2 className="h-4 w-4 text-[#e2b053]" />
                        <span>Source Architecture: {project.codeSnippetPreview.filename}</span>
                      </span>
                      {expandedCodeId === project.id ? (
                        <ChevronUp className="h-4 w-4 text-[#71717a]" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-[#71717a]" />
                      )}
                    </button>

                    {expandedCodeId === project.id && (
                      <div className="p-4 space-y-3">
                        <pre className="overflow-x-auto text-[11px] font-mono text-[#a1a1aa] leading-relaxed bg-[#0b0b0e] p-3.5 rounded border border-[#1f1f26]">
                          <code>{project.codeSnippetPreview.code}</code>
                        </pre>
                        <p className="text-[11px] text-[#71717a] font-mono italic">
                          ℹ️ {project.codeSnippetPreview.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
