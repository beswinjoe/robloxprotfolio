"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Code2, ShieldAlert, Sparkles, Terminal, Play, Users, Trophy } from "lucide-react";
import { PORTFOLIO_HERO } from "@/data/portfolioData";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="text-center max-w-4xl mx-auto space-y-6">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#27272a] bg-[#141418] px-4 py-1.5 text-xs text-[#a1a1aa] shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[11px] font-bold text-white tracking-wide">
            BESWIN JOE • @beswinjee
          </span>
          <span className="text-[#52525b]">|</span>
          <span className="text-[11px] text-emerald-400 font-medium">Available for Hire</span>
        </div>

        {/* Main Name & Title */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white font-sans uppercase">
            BESWIN JOE
          </h1>
          <p className="text-lg sm:text-2xl font-bold tracking-wide text-[#00a2ff] font-sans">
            Roblox Luau Scripter & Game QA Tester
          </p>
        </div>

        {/* Tagline */}
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-[#d1d5db] leading-relaxed font-normal">
          &ldquo;{PORTFOLIO_HERO.tagline}&rdquo;
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
          <Link
            href="#qa-testing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#0055ff] hover:bg-[#1a66ff] px-7 py-3 text-sm font-bold text-white transition-all shadow-lg shadow-blue-900/30 active:scale-95"
          >
            <Play className="h-4 w-4 fill-current" />
            <span>View Games Tested</span>
          </Link>

          <Link
            href="#development"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-[#2c2c34] bg-[#16161b] hover:bg-[#202028] px-7 py-3 text-sm font-bold text-white transition-all hover:border-[#444452] active:scale-95"
          >
            <Code2 className="h-4 w-4 text-[#e2b053]" />
            <span>Scripting Systems</span>
          </Link>

          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-[#2c2c34] bg-[#121215] hover:bg-[#1b1b20] px-6 py-3 text-sm font-medium text-[#d4d4d8] transition-all"
          >
            <span>Contact Me</span>
          </Link>
        </div>
      </div>

      {/* Featured Showcase Banner (from Image 11: Do Not Stop, Clean all the...) */}
      <div className="mt-14 rounded-2xl border border-[#27272e] bg-[#141418] p-4 sm:p-6 overflow-hidden shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
              <Trophy className="h-4 w-4" />
              <span>TESTED & ASSISTED ROBLOX EXPERIENCES</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
              High-Traffic Studios & Community Highlights
            </h3>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="rounded-lg bg-[#1c1c24] px-3 py-1.5 text-white border border-[#2d2d38] font-bold">
              👥 30K+ Concurrent Peak
            </span>
            <span className="rounded-lg bg-emerald-500/10 text-emerald-400 px-3 py-1.5 border border-emerald-500/20 font-bold">
              ▶ 250M+ Total Plays
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden rounded-xl border border-[#222228]">
          <Image
            src="/games/featured-showcase.jpg"
            alt="Roblox Games Showcase"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};
