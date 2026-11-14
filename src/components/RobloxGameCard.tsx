"use client";

import React, { useState } from "react";
import Image from "next/image";
import { QARecord } from "@/types/portfolio";
import {
  Star,
  ThumbsUp,
  ThumbsDown,
  Play,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  ExternalLink,
  Sparkles,
} from "lucide-react";

interface RobloxGameCardProps {
  record: QARecord;
}

export const RobloxGameCard: React.FC<RobloxGameCardProps> = ({ record }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [likesCount, setLikesCount] = useState(record.likes ?? 14);
  const [hasLiked, setHasLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [playedNotice, setPlayedNotice] = useState(false);

  const handlePlayClick = () => {
    setPlayedNotice(true);
    setTimeout(() => setPlayedNotice(false), 2000);
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
    <div className="group rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-gray-300 transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
        {/* Left: Genuine Game Screenshot Frame */}
        <div className="lg:col-span-7 relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-100 border border-gray-100 shadow-2xs">
          <Image
            src={record.image}
            alt={record.gameName}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-left transition-transform duration-500 group-hover:scale-[1.02]"
            unoptimized
          />

          {/* Category Badge */}
          <div className="absolute top-3.5 left-3.5">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold shadow-sm backdrop-blur-md ${
                isPaid
                  ? "bg-slate-900 text-white"
                  : isCentral
                  ? "bg-blue-600 text-white"
                  : "bg-rose-500 text-white"
              }`}
            >
              {record.category}
            </span>
          </div>

          {/* Quick Bugs Fixed Tag */}
          <div className="absolute bottom-3.5 left-3.5 rounded-lg bg-white/95 px-3 py-1 text-xs font-medium text-slate-800 shadow-sm border border-gray-200/60 backdrop-blur-sm flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span className="font-semibold text-slate-900">
              {record.bugsDiscoveredCount} Defects Audited
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-slate-500">{record.genre}</span>
          </div>
        </div>

        {/* Right: Game Header & QA Details */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
          <div>
            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight font-sans">
              {record.gameName}
            </h3>

            {/* Creator with verified tick */}
            <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <span>By {record.developer || "@IndependentStudio"}</span>
              {record.verifiedDeveloper && (
                <span
                  className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#00a2ff] text-[9px] font-bold text-white"
                  title="Verified Studio"
                >
                  ✓
                </span>
              )}
              <span className="text-gray-300">•</span>
              <span>{record.maturity || "Minimal • Ages 16+"}</span>
            </div>
          </div>

          {/* Play & Favorite Bar */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePlayClick}
              className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white transition-all shadow-sm ${
                playedNotice
                  ? "bg-emerald-600"
                  : "bg-slate-950 hover:bg-slate-800 active:scale-98"
              }`}
            >
              <Play className="h-4 w-4 fill-current" />
              <span>{playedNotice ? "Test Logged" : "Test Record"}</span>
            </button>

            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className={`p-3 rounded-xl border border-gray-200 transition-colors ${
                isFavorited
                  ? "bg-amber-50 text-amber-500 border-amber-300"
                  : "bg-white text-slate-400 hover:text-slate-900 hover:bg-gray-50"
              }`}
              title="Favorite Game"
            >
              <Star
                className={`h-4 w-4 ${isFavorited ? "fill-amber-400" : ""}`}
              />
            </button>

            <button
              onClick={handleLike}
              className={`flex items-center gap-1.5 px-3 py-3 rounded-xl border border-gray-200 text-xs font-semibold transition-colors ${
                hasLiked
                  ? "bg-blue-50 text-blue-600 border-blue-200"
                  : "bg-white text-slate-600 hover:bg-gray-50"
              }`}
            >
              <ThumbsUp
                className={`h-4 w-4 ${hasLiked ? "fill-blue-500" : ""}`}
              />
              <span>{likesCount}</span>
            </button>
          </div>

          {/* Summary snippet */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
            {record.testingSummary}
          </p>

          {/* Expand Button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center justify-between w-full rounded-xl bg-gray-50 hover:bg-gray-100/80 px-4 py-2.5 text-xs font-semibold text-slate-700 transition-colors border border-gray-200/80"
          >
            <span>
              {expanded ? "Hide Audit Details" : "View Bugs & Feedback"}
            </span>
            {expanded ? (
              <ChevronUp className="h-4 w-4 text-slate-500" />
            ) : (
              <ChevronDown className="h-4 w-4 text-slate-500" />
            )}
          </button>
        </div>
      </div>

      {/* Expandable Case Study Area */}
      {expanded && (
        <div className="mt-6 pt-6 border-t border-gray-100 space-y-4 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Documented Defects */}
            <div className="rounded-2xl border border-rose-100 bg-rose-50/50 p-4 sm:p-5 text-xs">
              <div className="font-semibold text-rose-700 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <AlertTriangle className="h-4 w-4 text-rose-500" />
                <span>Documented Bugs & Regressions</span>
              </div>
              <ul className="space-y-1.5 text-slate-700">
                {record.keyBugsHighlight.map((bug, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold mt-0.5">•</span>
                    <span className="leading-snug">{bug}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gameplay Feedback */}
            <div className="rounded-2xl border border-gray-200/80 bg-gray-50/70 p-4 sm:p-5 text-xs flex flex-col justify-between">
              <div>
                <div className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-2">
                  Gameplay & Polish Feedback
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {record.gameplayFeedback}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-4 pt-3 border-t border-gray-200/60 flex flex-wrap gap-1.5">
                {record.focusAreas.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-white px-2 py-0.5 text-[10px] font-medium text-slate-600 border border-gray-200"
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
