"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Play, Code2, Sparkles } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#hero" },
    { name: "Games Tested", href: "#qa-testing" },
    { name: "Scripting", href: "#development" },
    { name: "Bug Tickets", href: "#bug-reports" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#222228] bg-[#0e0e11]/95 backdrop-blur-md py-3 shadow-lg shadow-black/40"
          : "border-b border-transparent bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Name */}
        <Link
          href="#hero"
          className="group flex items-center gap-3 text-left transition-opacity hover:opacity-90"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0055ff] font-sans text-sm font-black text-white shadow-md shadow-blue-900/40">
            BJ
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tight text-white font-sans text-base">
                Beswin Joe
              </span>
              <span className="rounded-full bg-[#1e1e26] px-2 py-0.5 font-mono text-[10px] text-[#00a2ff] border border-[#2e2e3c]">
                @beswinjee
              </span>
            </div>
            <p className="text-[11px] text-[#71717a] font-medium">
              Roblox Developer & QA Tester
            </p>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-lg px-3.5 py-1.5 text-xs font-mono font-medium text-[#a1a1aa] transition-colors hover:bg-[#1a1a22] hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Status Badge & CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs text-emerald-400 font-mono">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-bold">10K+ R$ Earned • Available</span>
          </div>

          <Link
            href="#contact"
            className="rounded-xl bg-[#0055ff] hover:bg-[#1a66ff] px-4 py-1.5 text-xs font-bold text-white transition-all shadow-md shadow-blue-900/30"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-xl border border-[#2a2a32] bg-[#16161c] p-2 text-[#a1a1aa] hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-b border-[#222228] bg-[#121217] px-4 pt-3 pb-6 md:hidden">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#d4d4d8] hover:bg-[#1c1c24] hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-[#222228] flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span>Available for Hire</span>
            </div>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-[#0055ff] px-4 py-1.5 text-xs font-bold text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
