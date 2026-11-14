import React from "react";
import { PORTFOLIO_STATS } from "@/data/portfolioData";
import { ShieldCheck, Coins, Gamepad2, Users, Code2 } from "lucide-react";

export const Stats: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Coins className="h-5 w-5 text-amber-400" />;
      case 1:
        return <Gamepad2 className="h-5 w-5 text-[#00a2ff]" />;
      case 2:
        return <Users className="h-5 w-5 text-emerald-400" />;
      case 3:
        return <Code2 className="h-5 w-5 text-[#e2b053]" />;
    }
  };

  return (
    <section className="border-y border-[#202025] bg-[#121215] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PORTFOLIO_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-[#242429] bg-[#16161b] p-6 transition-all duration-300 hover:border-[#383844] hover:bg-[#1a1a20]"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-[#1f1f28] border border-[#2a2a35]">
                  {getIcon(idx)}
                </span>
                <span className="rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-mono font-bold">
                  {stat.verifiedStatus}
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                {stat.value}
              </div>

              <div className="mt-1 text-xs font-bold font-mono uppercase text-[#a1a1aa] tracking-wider">
                {stat.label}
              </div>

              <p className="mt-2 text-xs text-[#71717a] leading-normal font-sans">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
