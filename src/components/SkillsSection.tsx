import React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { Gamepad2, Code2, Sparkles, CheckCircle2 } from "lucide-react";

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 mb-2">
          <Sparkles className="h-4 w-4" />
          <span>PROVEN SKILLS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-sans">
          Technical Skills & QA Competencies
        </h2>
        <p className="mt-2 max-w-2xl text-base text-slate-600 leading-relaxed font-normal">
          Direct proficiencies developed across hands-on Roblox Studio scripting and game QA testing cycles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((category, idx) => (
          <div
            key={category.title}
            className="rounded-3xl border border-gray-200/90 bg-white p-7 sm:p-8 shadow-xs hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 border border-gray-100 text-slate-900 shadow-2xs">
                {idx === 0 ? (
                  <Code2 className="h-6 w-6 text-rose-600" />
                ) : (
                  <Gamepad2 className="h-6 w-6 text-slate-900" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-950 tracking-tight">
                  {category.title}
                </h3>
                <span className="text-xs font-semibold text-slate-400">
                  Domain 0{idx + 1}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              {category.description}
            </p>

            <div className="space-y-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="rounded-2xl border border-gray-100 bg-gray-50/70 p-4 transition-colors hover:bg-gray-100/60"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      {skill.name}
                    </span>
                    <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-slate-600 border border-gray-200/70 shadow-2xs">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 pl-6 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
