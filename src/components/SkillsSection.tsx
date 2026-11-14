import React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import {
  Gamepad2,
  ShieldCheck,
  Code2,
  Check,
  Layers,
  Sparkles,
} from "lucide-react";

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Gamepad2 className="h-5 w-5 text-[#38bdf8]" />;
      case 1:
        return <ShieldCheck className="h-5 w-5 text-emerald-400" />;
      case 2:
        return <Code2 className="h-5 w-5 text-[#e2b053]" />;
      default:
        return <Layers className="h-5 w-5 text-white" />;
    }
  };

  const getLevelBadge = (level: "Core" | "Advanced" | "Proficient") => {
    switch (level) {
      case "Core":
        return "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
      case "Advanced":
        return "bg-amber-500/10 text-amber-400 border border-amber-500/20";
      case "Proficient":
        return "bg-blue-500/10 text-blue-400 border border-blue-500/20";
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
          <Sparkles className="h-4 w-4" />
          <span>VERIFIED TECHNICAL CAPABILITIES</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Technical Skills & QA Competencies
        </h2>
        <p className="mt-2 max-w-3xl text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
          Realistic proficiencies rooted in direct hands-on testing, defect diagnostics,
          and production Roblox Studio scripting. No inflated claims or unverified tools.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((category, idx) => (
          <div
            key={category.title}
            className="rounded-xl border border-[#222226] bg-[#141417] p-6 lg:p-7 transition-all hover:border-[#353540] flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#26262e] bg-[#18181f]">
                  {getCategoryIcon(idx)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <span className="font-mono text-[10px] text-[#71717a] uppercase">
                    Competency Domain 0{idx + 1}
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#8e8e93] leading-relaxed mb-6 font-sans">
                {category.description}
              </p>

              {/* Skills List */}
              <div className="space-y-3.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-lg border border-[#202026] bg-[#18181d] p-3.5 transition-colors hover:border-[#2e2e38]"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-[#f4f4f5]">
                        {skill.name}
                      </span>
                      <span
                        className={`rounded px-1.5 py-0.2 text-[9px] font-mono font-medium ${getLevelBadge(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#9ca3af] leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom tag note */}
            <div className="mt-6 pt-4 border-t border-[#1f1f24] flex items-center justify-between text-[10px] font-mono text-[#52525b]">
              <span>VERIFIED IN STUDIO</span>
              <span>100% REPRODUCIBLE</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
