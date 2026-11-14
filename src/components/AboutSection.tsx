import React from "react";
import { Shield, Target, Cpu } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: About Statement */}
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 mb-1">
            <Target className="h-4 w-4" />
            <span>BACKGROUND & METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-sans leading-tight">
            Bridging Luau Scripting & Professional QA
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            I work directly with independent Roblox creators and studios to ensure game experiences are mechanically solid, well-replicated, and bug-free before launch.
          </p>

          <div className="pt-2 space-y-3">
            <div className="flex items-start gap-3 rounded-2xl border border-gray-200/80 bg-gray-50/70 p-4">
              <Shield className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase">
                  Defect Isolation
                </h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  Delivering 100% reproducible step-by-step tickets with verified physics coordinates and telemetry captures.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-gray-200/80 bg-gray-50/70 p-4">
              <Cpu className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase">
                  Developer Mindset
                </h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  Because I script gameplay systems in Luau, my reports pinpoint exact root causes and actionable architectural fixes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Personal Narrative & Workflow */}
        <div className="lg:col-span-7 rounded-3xl border border-gray-200/90 bg-white p-7 sm:p-9 shadow-xs space-y-6">
          <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            <h3 className="text-xl font-bold text-slate-950 tracking-tight">
              About Beswin Joe (@beswinjee)
            </h3>
            <p>
              As a Roblox developer and QA tester, I focus on delivering game experiences that are technically resilient and polished. Games often fail to retain players not due to poor ideas, but because subtle network desynchronization, physics tunneling, or UI glitches break player immersion during the critical initial onboarding loop.
            </p>
            <p>
              Over 15 documented testing projects—including 9 confirmed paid testing cycles and QA Central résumé records—I have established a reliable testing pipeline verifying client prediction, debounce timers, server replication, and touchscreen accessibility across PC and mobile viewports.
            </p>
          </div>

          <div className="pt-5 border-t border-gray-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              4-Stage Testing Pipeline
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <div className="font-bold text-slate-900 mb-1">
                  01. Exploratory Audit
                </div>
                <p className="text-slate-500 leading-snug">
                  Mechanical sweep uncovering UI scaling errors, touch overlap, and audio flood hazards.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <div className="font-bold text-slate-900 mb-1">
                  02. Stress & Exploitation
                </div>
                <p className="text-slate-500 leading-snug">
                  Simulating packet drops, high ping, boundary clipping, and race condition duplicate claims.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <div className="font-bold text-slate-900 mb-1">
                  03. Reproducible Tickets
                </div>
                <p className="text-slate-500 leading-snug">
                  Drafting structured tickets with deterministic reproduction steps and telemetry screenshots.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <div className="font-bold text-slate-900 mb-1">
                  04. Regression Retesting
                </div>
                <p className="text-slate-500 leading-snug">
                  Re-verifying patched builds to confirm fixes did not introduce unexpected edge-cases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
