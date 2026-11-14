"use client";

import React, { useState } from "react";
import { CONTACT_INFO, PORTFOLIO_HERO } from "@/data/portfolioData";
import {
  Mail,
  MessageSquare,
  Globe,
  FileText,
  Copy,
  Check,
  Send,
  ExternalLink,
  ShieldCheck,
  FolderGit2,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    serviceType: "QA Testing",
    projectDetails: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.projectDetails) return;

    // Simulate clean submission and prepare direct mailto option
    setSubmitted(true);
  };

  const handleMailtoDirect = () => {
    const subject = encodeURIComponent(
      `[Portfolio Inquiry - ${formData.serviceType}] From ${formData.name || "Developer"}`
    );
    const body = encodeURIComponent(
      `Hi Beswin,\n\nI saw your Roblox Developer & QA Tester portfolio.\n\nProject Details:\n${formData.projectDetails}\n\nContact Back: ${formData.contact}\n`
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1e1e23]">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
          <ShieldCheck className="h-4 w-4" />
          <span>DIRECT CHANNELS & ENGAGEMENT</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Contact & Collaboration
        </h2>
        <p className="mt-2 max-w-3xl text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
          Open to quality assurance testing cycles, mechanical defect audits, and core Luau gameplay scripting engagements.
        </p>

        {/* Availability Banner */}
        <div className="mt-4 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-xs text-emerald-300">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
          </span>
          <span className="font-medium">{PORTFOLIO_HERO.availability}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Profile & Network Cards */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-wider text-[#71717a]">
            Direct Verification Channels
          </h3>

          {/* Discord Card */}
          <div className="rounded-xl border border-[#242429] bg-[#141418] p-4 flex items-center justify-between hover:border-[#383842] transition-colors">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5865F2]/10 text-[#5865F2]">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-[#71717a] font-mono">Discord Username</div>
                <div className="text-sm font-bold font-mono text-white">
                  {CONTACT_INFO.discord}
                </div>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(CONTACT_INFO.discord, "discord")}
              className="rounded-md border border-[#2c2c36] bg-[#1b1b22] px-3 py-1.5 text-xs font-mono text-[#d4d4d8] hover:bg-[#252530] transition-colors flex items-center gap-1.5"
            >
              {copiedField === "discord" ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-[#9ca3af]" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Email Card */}
          <div className="rounded-xl border border-[#242429] bg-[#141418] p-4 flex items-center justify-between hover:border-[#383842] transition-colors">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-[#71717a] font-mono">Email Address</div>
                <div className="text-sm font-mono text-white">
                  {CONTACT_INFO.email}
                </div>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(CONTACT_INFO.email, "email")}
              className="rounded-md border border-[#2c2c36] bg-[#1b1b22] px-3 py-1.5 text-xs font-mono text-[#d4d4d8] hover:bg-[#252530] transition-colors flex items-center gap-1.5"
            >
              {copiedField === "email" ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-[#9ca3af]" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Roblox Profile Placeholder */}
          <div className="rounded-xl border border-[#242429] bg-[#141418] p-4 flex items-center justify-between hover:border-[#383842] transition-colors">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-white font-mono font-bold text-xs">
                RBX
              </div>
              <div>
                <div className="text-xs text-[#71717a] font-mono">Roblox Profile</div>
                <div className="text-sm font-mono text-white">
                  @{PORTFOLIO_HERO.username}
                </div>
              </div>
            </div>
            <a
              href={CONTACT_INFO.robloxProfile}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-[#2c2c36] bg-[#1b1b22] px-3 py-1.5 text-xs font-mono text-[#d4d4d8] hover:bg-[#252530] transition-colors flex items-center gap-1.5"
            >
              <span>Profile</span>
              <ExternalLink className="h-3.5 w-3.5 text-[#9ca3af]" />
            </a>
          </div>

          {/* QA Central Record Placeholder */}
          <div className="rounded-xl border border-[#242429] bg-[#141418] p-4 flex items-center justify-between hover:border-[#383842] transition-colors">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 font-mono font-bold text-xs">
                QAC
              </div>
              <div>
                <div className="text-xs text-[#71717a] font-mono">QA Central Profile</div>
                <div className="text-sm font-mono text-white">
                  Tester Résumé Archive
                </div>
              </div>
            </div>
            <a
              href={CONTACT_INFO.qaCentralProfile}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-[#2c2c36] bg-[#1b1b22] px-3 py-1.5 text-xs font-mono text-[#d4d4d8] hover:bg-[#252530] transition-colors flex items-center gap-1.5"
            >
              <span>View</span>
              <ExternalLink className="h-3.5 w-3.5 text-[#9ca3af]" />
            </a>
          </div>

          {/* GitHub Placeholder */}
          <div className="rounded-xl border border-[#242429] bg-[#141418] p-4 flex items-center justify-between hover:border-[#383842] transition-colors">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-white">
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs text-[#71717a] font-mono">GitHub Repositories</div>
                <div className="text-sm font-mono text-white">
                  github.com/{PORTFOLIO_HERO.username}
                </div>
              </div>
            </div>
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-[#2c2c36] bg-[#1b1b22] px-3 py-1.5 text-xs font-mono text-[#d4d4d8] hover:bg-[#252530] transition-colors flex items-center gap-1.5"
            >
              <span>GitHub</span>
              <ExternalLink className="h-3.5 w-3.5 text-[#9ca3af]" />
            </a>
          </div>
        </div>

        {/* Right Column: Project Inquiry Form */}
        <div className="lg:col-span-7 rounded-xl border border-[#242429] bg-[#141418] p-6 lg:p-8">
          <h3 className="text-base font-bold text-white tracking-tight mb-1">
            Send a Project Proposal
          </h3>
          <p className="text-xs text-[#8e8e93] mb-6 font-mono">
            Direct dispatch for game QA audits, patch verification, or Luau systems contracts.
          </p>

          {submitted ? (
            <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.05] p-6 text-center space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <Check className="h-6 w-6" />
              </div>
              <h4 className="text-base font-bold text-white">
                Inquiry Draft Prepared
              </h4>
              <p className="text-xs text-[#cbd5e1] max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. Your details for {formData.serviceType} have been recorded. You can also send this inquiry directly via your default email client.
              </p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleMailtoDirect}
                  className="rounded-md border border-[#e2b053] bg-[#e2b053] px-4 py-2 text-xs font-bold text-black hover:bg-[#d49f3e] transition-colors flex items-center gap-1.5"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Open in Mail Client</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="rounded-md border border-[#2e2e36] bg-[#1c1c22] px-4 py-2 text-xs font-medium text-[#d4d4d8] hover:bg-[#25252e] transition-colors"
                >
                  Edit Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#a1a1aa] mb-1.5">
                    Your Name / Studio Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex or Studio Hex"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-md border border-[#2a2a32] bg-[#19191e] px-3 py-2 text-xs text-white placeholder-[#52525b] focus:border-[#e2b053] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#a1a1aa] mb-1.5">
                    Contact Handle (Discord or Email) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. username#0000 or email@domain.com"
                    value={formData.contact}
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                    className="w-full rounded-md border border-[#2a2a32] bg-[#19191e] px-3 py-2 text-xs text-white placeholder-[#52525b] focus:border-[#e2b053] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#a1a1aa] mb-1.5">
                  Engagement Type
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) =>
                    setFormData({ ...formData, serviceType: e.target.value })
                  }
                  className="w-full rounded-md border border-[#2a2a32] bg-[#19191e] px-3 py-2 text-xs text-white focus:border-[#e2b053] focus:outline-none font-mono"
                >
                  <option value="QA Testing">Game QA Testing & Bug Audit</option>
                  <option value="Luau Scripting">Roblox Luau Gameplay Scripting</option>
                  <option value="Regression & Live-Ops QA">Regression & Live-Ops Testing</option>
                  <option value="Systems Consultation">Gameplay Systems Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#a1a1aa] mb-1.5">
                  Project Scope & Details *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your Roblox game, platform targets (PC/Mobile), timeline, and what areas require testing or scripting..."
                  value={formData.projectDetails}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      projectDetails: e.target.value,
                    })
                  }
                  className="w-full rounded-md border border-[#2a2a32] bg-[#19191e] px-3 py-2 text-xs text-white placeholder-[#52525b] focus:border-[#e2b053] focus:outline-none leading-relaxed"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#71717a]">
                  Direct response typically within 24–48 hours.
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md border border-[#e2b053] bg-[#e2b053] px-5 py-2 text-xs font-bold text-black hover:bg-[#d69f3d] transition-colors"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
