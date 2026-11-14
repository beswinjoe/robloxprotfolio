import React from "react";
import { Gamepad2, Layers, Code2, DollarSign } from "lucide-react";
import { PORTFOLIO_STATS } from "@/data/portfolioData";

export const Stats: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Gamepad2 className="h-6 w-6 text-slate-800" />;
      case 1:
        return <Layers className="h-6 w-6 text-slate-800" />;
      case 2:
        return <Code2 className="h-6 w-6 text-slate-800" />;
      case 3:
        return <DollarSign className="h-6 w-6 text-slate-800" />;
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-b border-gray-100 my-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        {PORTFOLIO_STATS.map((stat, idx) => (
          <div
            key={stat.label}
            className={`flex items-center gap-4 ${
              idx > 0 ? "pt-6 md:pt-0 md:pl-8" : ""
            }`}
          >
            {/* Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gray-50 border border-gray-100 text-slate-800 shadow-2xs">
              {getIcon(idx)}
            </div>

            {/* Numbers & Labels */}
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-sans tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-700 tracking-tight">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                {stat.subtext}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
