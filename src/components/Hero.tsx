"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Pill & Headline */}
        <div className="lg:col-span-7 space-y-5">
          {/* Tag / Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-gray-50/70 px-3.5 py-1 text-xs font-medium text-slate-700 shadow-2xs">
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-xs bg-slate-900 text-[9px] font-bold text-white">
              R
            </span>
            <span>Roblox Developer & QA Tester</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 font-sans leading-[1.08]">
            I build and test <br />
            <span className="text-rose-500">Roblox games.</span>
          </h1>
        </div>

        {/* Right Column: Narrative & Action Buttons */}
        <div className="lg:col-span-5 space-y-6 lg:pl-4">
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Scripting gameplay systems, testing game experiences, finding issues
            and helping developers deliver better Roblox games.
          </p>

          {/* Buttons: View My Work ↗ & Hire Me */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="#qa-testing"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-all active:scale-95 group"
            >
              <span>View My Work</span>
              <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-2xs hover:bg-gray-50 hover:border-gray-400 transition-all active:scale-95"
            >
              <span>Hire Me</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
