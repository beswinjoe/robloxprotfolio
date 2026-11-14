"use client";

import React from "react";
import Image from "next/image";
import { SCRIPTING_PROJECTS } from "@/data/portfolioData";
import { Sparkles, CheckCircle2 } from "lucide-react";

export const DevelopmentSection: React.FC = () => {
  return (
    <section
      id="development"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100"
    >
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 mb-2">
          <Sparkles className="h-4 w-4" />
          <span>ROBLOX GAMEPLAY SCRIPTING</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-sans">
          Development & Systems
        </h2>
        <p className="mt-2 max-w-2xl text-base text-slate-600 leading-relaxed font-normal">
          Gameplay scripting contributions across 2–3 Roblox titles, focusing on
          authoritative combat mechanics, responsive locomotion physics, and
          session data reliability.
        </p>
      </div>

      {/* Projects Grid / Stack */}
      <div className="space-y-8">
        {SCRIPTING_PROJECTS.map((project, index) => (
          <article
            key={project.id}
            className="rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs hover:shadow-lg hover:border-gray-300 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Game Artwork Thumbnail */}
              {project.image && (
                <div className="lg:col-span-5 w-full">
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 shadow-xs">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center transition-transform duration-500 hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-slate-900/80 backdrop-blur-xs px-3 py-1 text-[11px] font-semibold text-white">
                        {`0${index + 1} // Contribution`}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Project Details */}
              <div
                className={`${
                  project.image ? "lg:col-span-7" : "lg:col-span-12"
                } space-y-4`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-rose-600 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                  <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-slate-700">
                    {project.projectStatus}
                  </span>
                </div>

                {/* Contribution Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.contribution}
                </p>

                {/* Systems Scripted */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                    Systems Scripted
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.systemsScripted.map((sys, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-start gap-2 rounded-xl bg-gray-50 p-2.5 border border-gray-100/80"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                        <span className="text-xs text-slate-700 leading-snug">
                          {sys}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  <span className="text-xs font-semibold text-slate-400 mr-1">
                    Tools:
                  </span>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
