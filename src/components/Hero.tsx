"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, Code2, ShieldAlert, Sparkles, Terminal } from "lucide-react";
import { PORTFOLIO_HERO } from "@/data/portfolioData";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[88vh] items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle fine grid pattern background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Availability / Position Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#27272a] bg-[#151518] px-3.5 py-1 text-xs text-[#a1a1aa] mb-8">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#d4d4d8]">
            Beswin Joe • @beswinjee
          </span>
          <span className="text-[#52525b]">•</span>
          <span className="text-[11px] text-[#9ca3af]">Roblox Studio QA & Systems</span>
        </div>

        {/* Name & Title */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-sans">
            BESWIN JOE
          </h1>
          <p className="text-lg sm:text-xl font-medium tracking-wide text-[#a1a1aa] uppercase font-mono">
            Roblox Developer & QA Tester
          </p>
        </div>

        {/* Core Statement */}
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-[#d1d5db] leading-relaxed font-sans font-normal">
          &ldquo;{PORTFOLIO_HERO.tagline}&rdquo;
        </p>

        {/* Key Pillars */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono text-[#a1a1aa]">
          <span className="rounded border border-[#26262b] bg-[#141417] px-3 py-1.5 flex items-center gap-1.5">
            <Code2 className="h-3.5 w-3.5 text-[#e2b053]" />
            Luau Scripting
          </span>
          <span className="rounded border border-[#26262b] bg-[#141417] px-3 py-1.5 flex items-center gap-1.5">
            <Terminal className="h-3.5 w-3.5 text-[#38bdf8]" />
            Gameplay Systems
          </span>
          <span className="rounded border border-[#26262b] bg-[#141417] px-3 py-1.5 flex items-center gap-1.5">
            <ShieldAlert className="h-3.5 w-3.5 text-amber-500" />
            Game QA Testing
          </span>
          <span className="rounded border border-[#26262b] bg-[#141417] px-3 py-1.5 flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            Bug Diagnostics
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="#development"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md border border-[#e2b053] bg-[#e2b053] px-6 py-2.5 text-sm font-semibold text-black transition-all hover:bg-[#d69f3d]"
          >
            <span>View My Work</span>
            <ArrowDown className="h-4 w-4" />
          </Link>

          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md border border-[#2e2e33] bg-[#18181c] px-6 py-2.5 text-sm font-medium text-white transition-all hover:border-[#4d4d55] hover:bg-[#222227]"
          >
            <span>Contact Me</span>
          </Link>
        </div>

        {/* Micro-statement on authenticity */}
        <p className="mt-8 text-[11px] font-mono text-[#71717a]">
          Verified testing records • Authentic bug reports • Production-focused Luau architecture
        </p>
      </div>
    </section>
  );
};
