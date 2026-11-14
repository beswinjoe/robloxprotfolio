"use client";

import React, { useState } from "react";
import Image from "next/image";
import { QARecord } from "@/types/portfolio";
import {
  Star,
  Bell,
  ThumbsUp,
  ThumbsDown,
  Play,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  FileCode,
  ExternalLink,
} from "lucide-react";

interface RobloxGameCardProps {
  record: QARecord;
  onInspectReport?: (gameName: string) => void;
}

export const RobloxGameCard: React.FC<RobloxGameCardProps> = ({
  record,
  onInspectReport,
}) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [likesCount, setLikesCount] = useState(record.likes ?? 12);
  const [hasLiked, setHasLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);

  const handlePlayClick = () => {
    setIsPlayingPreview(true);
    setTimeout(() => setIsPlayingPreview(false), 1500);
  };

  const handleLike = () => {
    if (hasLiked) {
      setLikesCount((prev) => prev - 1);
      setHasLiked(false);
    } else {
      setLikesCount((prev) => prev + 1);
      setHasLiked(true);
    }
  };

  const isPaid = record.category === "Paid Testing";
  const isCentral = record.category === "QA Central Voluntary";

  return (
    <div className="group rounded-2xl border border-[#232328] bg-[#141418] p-5 lg:p-6 transition-all duration-300 hover:border-[#3b3b44] hover:shadow-xl hover:shadow-black/50">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Real Game Screenshot Frame (Like user's reference) */}
        <div className="lg:col-span-7 relative aspect-video w-full overflow-hidden rounded-xl bg-[#0d0e12] border border-[#222227]">
          <Image
            src={record.image}
            alt={record.gameName}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            unoptimized
          />

          {/* Badge over thumbnail */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span
              className={`rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-wide shadow-md backdrop-blur-md ${
                isPaid
                  ? "bg-emerald-500/90 text-black"
                  : isCentral
                  ? "bg-blue-500/90 text-white"
                  : "bg-amber-500/90 text-black"
              }`}
            >
              {record.category}
            </span>
          </div>

          {/* Quick visits / bugs pill */}
          <div className="absolute bottom-3 left-3 rounded-lg bg-black/80 px-2.5 py-1 text-[11px] font-mono text-[#d4d4d8] backdrop-blur-sm border border-white/10 flex items-center gap-2">
            <span className="flex items-center gap-1 text-emerald-400 font-semibold">
              <ShieldCheck className="h-3.5 w-3.5" />
              {record.bugsDiscoveredCount} Bugs Fixed
            </span>
            <span className="text-[#52525b]">|</span>
            <span className="text-[#9ca3af]">{record.genre}</span>
          </div>
        </div>

        {/* Right: Exact Roblox Game Header layout (From reference image 1) */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
          <div>
            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans">
              {record.gameName}
            </h3>

            {/* Creator line with verified tick */}
            <div className="mt-1 flex items-center gap-1.5 text-xs text-[#a1a1aa] font-medium">
              <span>By {record.developer || "@IndependentStudio"}</span>
              {record.verifiedDeveloper && (
                <span
                  className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#00a2ff] text-[9px] font-bold text-white"
                  title="Verified Creator"
                >
                  ✓
                </span>
              )}
            </div>

            {/* Maturity Rating */}
            <p className="mt-0.5 text-xs text-[#71717a]">
              {record.maturity || "Maturity: Minimal • Ages 16+"}
            </p>
          </div>

          {/* Roblox Blue Play Button */}
          <button
            onClick={handlePlayClick}
            className={`w-full flex items-center justify-center gap-2 rounded-xl py-3 text-base font-bold text-white transition-all shadow-lg ${
              isPlayingPreview
                ? "bg-emerald-600 scale-[0.98]"
                : "bg-[#0055ff] hover:bg-[#1a66ff] active:scale-[0.99] shadow-blue-900/30"
            }`}
          >
            <Play className="h-5 w-5 fill-current" />
            <span>{isPlayingPreview ? "Testing Record Active" : "Play Experience"}</span>
          </button>

          {/* Roblox Game Interaction Bar (Favorite, Notify, Likes/Dislikes) */}
          <div className="flex items-center justify-between border-t border-b border-[#232328] py-2 text-xs text-[#9ca3af]">
            {/* Favorite */}
            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className={`flex flex-col items-center gap-0.5 px-2 transition-colors ${
                isFavorited ? "text-amber-400 font-bold" : "hover:text-white"
              }`}
            >
              <Star
                className={`h-4 w-4 ${
                  isFavorited ? "fill-amber-400 text-amber-400" : ""
                }`}
              />
              <span className="text-[10px]">Favorite</span>
            </button>

            {/* Notify */}
            <div className="flex flex-col items-center gap-0.5 px-2 hover:text-white cursor-pointer">
              <Bell className="h-4 w-4" />
              <span className="text-[10px]">Notify</span>
            </div>

            {/* Like / Dislike Ratio */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={handleLike}
                className={`flex items-center gap-1 transition-colors ${
                  hasLiked ? "text-blue-400 font-bold" : "hover:text-white"
                }`}
                title="Helpful testing"
              >
                <ThumbsUp
                  className={`h-4 w-4 ${
                    hasLiked ? "fill-blue-400 text-blue-400" : ""
                  }`}
                />
                <span className="text-[11px] font-mono">{likesCount}</span>
              </button>

              <div className="h-3 w-px bg-[#33333b]" />

              <div className="flex items-center gap-1 text-[#71717a]">
                <ThumbsDown className="h-4 w-4" />
                <span className="text-[11px] font-mono">
                  {record.dislikes ?? 1}
                </span>
              </div>
            </div>
          </div>

          {/* QA Testing Summary Snippet */}
          <p className="text-xs text-[#b4b4bc] leading-relaxed line-clamp-2">
            {record.testingSummary}
          </p>

          {/* Toggle QA Report Button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center justify-between w-full rounded-lg bg-[#191920] px-3.5 py-2 text-xs font-mono text-[#d4d4d8] hover:bg-[#22222b] transition-colors border border-[#272730]"
          >
            <span>{expanded ? "Hide QA Case Study" : "View Tested Defects & Feedback"}</span>
            {expanded ? (
              <ChevronUp className="h-4 w-4 text-[#71717a]" />
            ) : (
              <ChevronDown className="h-4 w-4 text-[#71717a]" />
            )}
          </button>
        </div>
      </div>

      {/* Expandable QA Case Study Notes */}
      {expanded && (
        <div className="mt-5 pt-5 border-t border-[#232328] space-y-4 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Key Defects Fixed */}
            <div className="rounded-xl border border-red-500/20 bg-red-500/[0.04] p-4 text-xs">
              <div className="font-mono text-red-400 font-bold text-[11px] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <AlertTriangle className="h-4 w-4" />
                <span>Documented Bugs & Regressions Fixed</span>
              </div>
              <ul className="space-y-1.5 text-[#cbd5e1]">
                {record.keyBugsHighlight.map((bug, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="text-red-400 font-mono mt-0.5">•</span>
                    <span className="leading-snug">{bug}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gameplay & Design Feedback */}
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.04] p-4 text-xs flex flex-col justify-between">
              <div>
                <div className="font-mono text-[#e2b053] font-bold text-[11px] uppercase tracking-wider mb-2">
                  Gameplay & Polish Recommendations
                </div>
                <p className="text-[#cbd5e1] leading-relaxed">
                  {record.gameplayFeedback}
                </p>
              </div>

              {/* Focus tags */}
              <div className="mt-3 pt-3 border-t border-[#2a2a32] flex flex-wrap gap-1.5">
                {record.focusAreas.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-[#1a1a22] px-2 py-0.5 text-[10px] font-mono text-[#a1a1aa] border border-[#282832]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
