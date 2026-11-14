"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShieldCheck, Terminal, ExternalLink } from "lucide-react";

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
    { name: "Home", href: "#hero" },
    { name: "Development", href: "#development" },
    { name: "QA Testing", href: "#qa-testing" },
    { name: "Bug Reports", href: "#bug-reports" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "border-b border-[#222225] bg-[#101010]/90 backdrop-blur-md py-3"
          : "border-b border-transparent bg-[#101010]/40 py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Name */}
        <Link
          href="#hero"
          className="group flex items-center gap-3 text-left transition-opacity hover:opacity-90"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded border border-[#2e2e33] bg-[#17171a] font-mono text-xs font-bold text-white transition-colors group-hover:border-[#44444a]">
            BJ
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold tracking-tight text-white">
                Beswin Joe
              </span>
              <span className="rounded border border-[#2a2a30] bg-[#18181c] px-1.5 py-0.5 font-mono text-[10px] text-[#a1a1aa]">
                beswinjee
              </span>
            </div>
            <p className="text-[11px] text-[#71717a]">
              Roblox Developer & QA Tester
            </p>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-[#a1a1aa] transition-colors hover:bg-[#1a1a1d] hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Status Badge & Direct CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-[#27272a] bg-[#161619] px-3 py-1 text-xs text-[#a1a1aa]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-[11px] text-[#d4d4d8]">Available for QA / Dev</span>
          </div>

          <Link
            href="#contact"
            className="rounded-md border border-[#333338] bg-[#1c1c20] px-3.5 py-1.5 text-xs font-medium text-white transition-all hover:border-[#4d4d55] hover:bg-[#25252b]"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md border border-[#2a2a30] bg-[#17171a] p-2 text-[#a1a1aa] hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-b border-[#222225] bg-[#121214] px-4 pt-3 pb-6 md:hidden">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-[#d4d4d8] hover:bg-[#1c1c20] hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-[#222225] flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-[#a1a1aa]">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span>Available for projects</span>
            </div>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-md bg-[#25252b] px-3 py-1.5 text-xs font-medium text-white"
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
