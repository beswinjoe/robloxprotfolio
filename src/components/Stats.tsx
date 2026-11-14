import React from "react";
import { PORTFOLIO_STATS } from "@/data/portfolioData";
import { ShieldCheck, Info } from "lucide-react";

export const Stats: React.FC = () => {
  return (
    <section className="border-y border-[#202023] bg-[#121215] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#a1a1aa] mb-1">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>TRANSPARENT EXPERIENCE METRICS</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Audited Experience & Testing Records
            </h2>
          </div>
          <p className="max-w-md text-xs text-[#71717a] font-mono leading-relaxed">
            All counts are deduplicated from documented QA logs and direct
            development assignments. No speculative projections or inflated metrics.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PORTFOLIO_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="relative rounded-lg border border-[#242429] bg-[#16161a] p-5 transition-all hover:border-[#383842]"
            >
              <div className="flex items-center justify-between text-xs text-[#71717a] mb-2 font-mono">
                <span className="uppercase tracking-wider text-[11px] text-[#a1a1aa]">
                  {stat.label}
                </span>
                <span
                  className={`rounded px-1.5 py-0.5 text-[9px] uppercase font-semibold ${
                    stat.verifiedStatus === "Verified"
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : stat.verifiedStatus === "Audited"
                      ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      : "bg-zinc-800 text-zinc-300 border border-zinc-700"
                  }`}
                >
                  {stat.verifiedStatus}
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-white">
                {stat.value}
              </div>

              <p className="mt-2 text-xs text-[#8e8e93] leading-normal font-sans">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Data Provenance Notice */}
        <div className="mt-6 flex items-start gap-2.5 rounded border border-[#222227] bg-[#141417] p-3 text-xs text-[#71717a]">
          <Info className="h-4 w-4 shrink-0 text-[#9ca3af] mt-0.5" />
          <p className="leading-relaxed">
            <span className="font-semibold text-[#d4d4d8]">Record Provenance:</span> Includes 9 confirmed paid QA test cycles, 4 documented voluntary tests via QA Central résumé history, 2 community entries pending formal verification receipt, and 2–3 active Roblox Luau gameplay systems projects.
          </p>
        </div>
      </div>
    </section>
  );
};
