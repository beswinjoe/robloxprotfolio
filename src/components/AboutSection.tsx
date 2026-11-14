import React from "react";
import { Shield, Target, Terminal, CheckCircle2, Cpu } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1e1e23]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading & Identity */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#e2b053]">
            <Terminal className="h-4 w-4" />
            <span>BACKGROUND & METHODOLOGY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Engineering Rigor Meets Player-Centric QA
          </h2>
          <p className="text-sm text-[#a1a1aa] leading-relaxed">
            I work at the intersection of gameplay scripting and quality assurance, helping independent creators and Roblox development teams identify critical edge-cases before games go live.
          </p>

          {/* Quick Pillars */}
          <div className="pt-4 space-y-3">
            <div className="flex items-start gap-3 rounded-lg border border-[#222227] bg-[#141418] p-3.5">
              <Shield className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase font-mono">
                  Defect Isolation
                </h4>
                <p className="text-xs text-[#9ca3af] mt-0.5 leading-snug">
                  Transforming ambiguous player bug reports into clean, 100% reproducible developer tickets with exact coordinates and sub-steps.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-[#222227] bg-[#141418] p-3.5">
              <Cpu className="h-5 w-5 text-[#38bdf8] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase font-mono">
                  Luau Architecture Awareness
                </h4>
                <p className="text-xs text-[#9ca3af] mt-0.5 leading-snug">
                  Because I write Luau gameplay systems myself, my QA reports provide root cause hypotheses and actionable architectural fixes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-[#222227] bg-[#141418] p-3.5">
              <Target className="h-5 w-5 text-[#e2b053] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase font-mono">
                  Player Retention Focus
                </h4>
                <p className="text-xs text-[#9ca3af] mt-0.5 leading-snug">
                  Beyond functional bugs, I evaluate friction points, input latency, camera behavior, and mobile UX accessibility.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Narrative & Testing Philosophy */}
        <div className="lg:col-span-7 rounded-xl border border-[#222227] bg-[#141418] p-6 lg:p-8 space-y-6">
          <div className="space-y-4 text-sm text-[#cbd5e1] leading-relaxed">
            <h3 className="text-lg font-bold text-white tracking-tight">
              About Beswin Joe (@beswinjee)
            </h3>
            <p>
              As a Roblox scripter and QA tester, my focus is on delivering game experiences that are technically resilient and mechanically polished. Many game launches suffer not because the core concept was flawed, but because subtle network desynchronization, physics seam clipping, or race conditions alienated players during their first ten minutes.
            </p>
            <p>
              Over my testing record—spanning 9 confirmed paid contracts, 4 QA Central voluntary tests, and ongoing development collaborations—I have refined a structured methodology for auditing games across PC, mobile touchscreens, and varying network latency environments.
            </p>
          </div>

          {/* Workflow Steps */}
          <div className="pt-4 border-t border-[#202026]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#71717a] mb-3">
              Standard Testing Workflow
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="rounded border border-[#1f1f25] bg-[#17171d] p-3">
                <div className="font-mono text-[#e2b053] text-[11px] font-semibold mb-1">
                  01. Exploratory Audit
                </div>
                <p className="text-[#9ca3af] leading-snug">
                  Broad mechanical sweep identifying UI layout scaling bugs, audio trigger flooding, and input buffering edge-cases.
                </p>
              </div>

              <div className="rounded border border-[#1f1f25] bg-[#17171d] p-3">
                <div className="font-mono text-[#38bdf8] text-[11px] font-semibold mb-1">
                  02. Stress & Exploitation
                </div>
                <p className="text-[#9ca3af] leading-snug">
                  Simulating packet drops, high ping, boundary collision offsets, and rapid concurrent inventory/economy actions.
                </p>
              </div>

              <div className="rounded border border-[#1f1f25] bg-[#17171d] p-3">
                <div className="font-mono text-emerald-400 text-[11px] font-semibold mb-1">
                  03. Reproducible Ticketing
                </div>
                <p className="text-[#9ca3af] leading-snug">
                  Drafting structured tickets with step-by-step repros, expected vs. actual behavior, and telemetry screenshots.
                </p>
              </div>

              <div className="rounded border border-[#1f1f25] bg-[#17171d] p-3">
                <div className="font-mono text-[#a855f7] text-[11px] font-semibold mb-1">
                  04. Regression Verification
                </div>
                <p className="text-[#9ca3af] leading-snug">
                  Retesting resolved issues in staging branches to guarantee fixes did not introduce unexpected side-effects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
