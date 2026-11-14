"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero", active: true },
    { name: "QA Testing", href: "#qa-testing" },
    { name: "Bug Reports", href: "#bug-reports" },
    { name: "Games", href: "#gallery" },
    { name: "About", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-100 bg-white/90 backdrop-blur-md py-3.5 shadow-xs"
          : "border-b border-transparent bg-white/80 backdrop-blur-xs py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo: Beswin Joe . */}
        <Link
          href="#hero"
          className="group flex items-center text-left transition-opacity hover:opacity-90"
        >
          <span className="text-xl font-bold tracking-tight text-slate-900 font-sans">
            Beswin Joe<span className="text-rose-500 font-black">.</span>
          </span>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative py-1 transition-colors hover:text-slate-950 group"
            >
              <span>{link.name}</span>
              {link.active ? (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-slate-900" />
              ) : (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-transparent group-hover:bg-slate-300 transition-colors" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right CTA Button: Contact ↗ */}
        <div className="hidden md:flex items-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-950 px-5 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-slate-800 active:scale-95 shadow-sm shadow-slate-950/10"
          >
            <span>Contact</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-white" />
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-b border-gray-100 bg-white px-4 pt-3 pb-6 md:hidden shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-1.5 rounded-full bg-slate-950 py-3 text-sm font-semibold text-white shadow-sm"
            >
              <span>Contact</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
