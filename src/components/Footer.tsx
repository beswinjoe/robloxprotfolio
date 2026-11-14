import React from "react";
import Link from "next/link";
import { ArrowUp, Terminal, Shield } from "lucide-react";
import { PORTFOLIO_HERO } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#1f1f24] bg-[#0c0c0e] py-12 px-4 sm:px-6 lg:px-8 text-xs text-[#71717a]">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand statement */}
        <div className="space-y-1.5 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-mono font-bold text-white tracking-tight">
              BESWIN JOE
            </span>
            <span className="text-[#3f3f46]">•</span>
            <span className="font-mono text-[#a1a1aa]">@{PORTFOLIO_HERO.username}</span>
          </div>
          <p className="text-[11px] text-[#8e8e93] max-w-sm">
            Roblox Developer & QA Tester. Building server-authoritative gameplay systems
            and executing rigorous quality assurance audits.
          </p>
        </div>

        {/* Quick navigation */}
        <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-[11px]">
          <Link href="#hero" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#development" className="hover:text-white transition-colors">
            Development
          </Link>
          <Link href="#qa-testing" className="hover:text-white transition-colors">
            QA Testing
          </Link>
          <Link href="#bug-reports" className="hover:text-white transition-colors">
            Bug Reports
          </Link>
          <Link href="#skills" className="hover:text-white transition-colors">
            Skills
          </Link>
          <Link href="#about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        {/* Back to top button */}
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono text-[#52525b]">
            DEDUPLICATED & VERIFIED
          </span>
          <Link
            href="#hero"
            className="flex h-8 w-8 items-center justify-center rounded border border-[#26262c] bg-[#141418] text-[#a1a1aa] hover:border-[#3a3a44] hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-8 pt-6 border-t border-[#17171c] text-center md:flex md:items-center md:justify-between text-[11px] font-mono text-[#52525b]">
        <p>© {new Date().getFullYear()} Beswin Joe. All rights reserved.</p>
        <p className="mt-2 md:mt-0">
          Roblox is a registered trademark of Roblox Corporation. This portfolio is an independent creator portfolio.
        </p>
      </div>
    </footer>
  );
};
