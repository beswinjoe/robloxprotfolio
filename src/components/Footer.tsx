import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { PORTFOLIO_HERO } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-100 bg-white py-12 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="relative h-6 w-6 shrink-0">
              <Image
                src="/logo.png"
                alt="Beswin Joe Logo"
                fill
                sizes="24px"
                className="object-contain"
                unoptimized
              />
            </div>
            <span className="text-base font-bold text-slate-950 font-sans">
              Beswin Joe<span className="text-rose-500 font-black">.</span>
            </span>
            <span className="text-gray-300">•</span>
            <span className="font-mono text-slate-500">@{PORTFOLIO_HERO.username}</span>
          </div>
          <p className="text-xs text-slate-500 max-w-sm">
            Roblox Developer & QA Tester. Building solid gameplay systems and executing thorough QA audits.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-600">
          <Link href="#hero" className="hover:text-slate-950 transition-colors">
            Home
          </Link>
          <Link href="#qa-testing" className="hover:text-slate-950 transition-colors">
            QA Testing
          </Link>
          <Link href="#bug-reports" className="hover:text-slate-950 transition-colors">
            Bug Reports
          </Link>
          <Link href="#gallery" className="hover:text-slate-950 transition-colors">
            Games
          </Link>
          <Link href="#about" className="hover:text-slate-950 transition-colors">
            About
          </Link>
          <Link href="#contact" className="hover:text-slate-950 transition-colors">
            Contact
          </Link>
        </div>

        {/* Back to top */}
        <div className="flex items-center gap-3">
          <Link
            href="#hero"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-slate-600 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-colors shadow-2xs"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
        <p>© {new Date().getFullYear()} Beswin Joe. All rights reserved.</p>
        <p>
          Roblox is a registered trademark of Roblox Corporation. This is an independent creator portfolio.
        </p>
      </div>
    </footer>
  );
};
