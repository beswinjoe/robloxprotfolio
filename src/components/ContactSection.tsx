"use client";

import React, { useState } from "react";
import { CONTACT_INFO, PORTFOLIO_HERO } from "@/data/portfolioData";
import {
  Mail,
  MessageSquare,
  Copy,
  Check,
  Send,
  ExternalLink,
  ShieldCheck,
  ArrowUpRight,
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
    setSubmitted(true);
  };

  const handleMailtoDirect = () => {
    const subject = encodeURIComponent(
      `[Roblox Inquiry - ${formData.serviceType}] From ${formData.name || "Developer"}`
    );
    const body = encodeURIComponent(
      `Hi Beswin,\n\nI saw your Roblox Developer & QA Tester portfolio.\n\nProject Scope:\n${formData.projectDetails}\n\nContact Handle: ${formData.contact}\n`
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 mb-2">
          <ShieldCheck className="h-4 w-4" />
          <span>CONTACT & HIRE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-sans">
          Get in Touch
        </h2>
        <p className="mt-2 max-w-2xl text-base text-slate-600 leading-relaxed font-normal">
          Available for Roblox game quality assurance cycles, regression testing, and Luau gameplay scripting engagements.
        </p>

        {/* Status Pill */}
        <div className="mt-4 inline-flex items-center gap-2.5 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs text-emerald-800 font-medium shadow-2xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span>{PORTFOLIO_HERO.availability}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Contact Cards */}
        <div className="lg:col-span-5 space-y-3.5">
          {/* Discord Card */}
          <div className="rounded-2xl border border-gray-200/90 bg-white p-4 sm:p-5 flex items-center justify-between shadow-2xs hover:shadow-md transition-all">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#5865F2]/10 text-[#5865F2]">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400">Discord</div>
                <div className="text-sm font-bold font-mono text-slate-950">
                  {CONTACT_INFO.discord}
                </div>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(CONTACT_INFO.discord, "discord")}
              className="rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-gray-100 transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              {copiedField === "discord" ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-slate-400" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Email Card */}
          <div className="rounded-2xl border border-gray-200/90 bg-white p-4 sm:p-5 flex items-center justify-between shadow-2xs hover:shadow-md transition-all">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400">Email</div>
                <div className="text-sm font-semibold text-slate-950">
                  {CONTACT_INFO.email}
                </div>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(CONTACT_INFO.email, "email")}
              className="rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-gray-100 transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              {copiedField === "email" ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-slate-400" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Roblox Profile */}
          <div className="rounded-2xl border border-gray-200/90 bg-white p-4 sm:p-5 flex items-center justify-between shadow-2xs hover:shadow-md transition-all">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white font-bold text-xs">
                R
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400">Roblox Profile</div>
                <div className="text-sm font-semibold text-slate-950">
                  @{PORTFOLIO_HERO.username}
                </div>
              </div>
            </div>
            <a
              href={CONTACT_INFO.robloxProfile}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-gray-100 transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <span>Profile</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
            </a>
          </div>

          {/* QA Central Archive */}
          <div className="rounded-2xl border border-gray-200/90 bg-white p-4 sm:p-5 flex items-center justify-between shadow-2xs hover:shadow-md transition-all">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 font-bold text-xs">
                QA
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400">QA Central Record</div>
                <div className="text-sm font-semibold text-slate-950">
                  Tester Résumé Archive
                </div>
              </div>
            </div>
            <a
              href={CONTACT_INFO.qaCentralProfile}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-gray-100 transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <span>View</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
            </a>
          </div>

          {/* GitHub */}
          <div className="rounded-2xl border border-gray-200/90 bg-white p-4 sm:p-5 flex items-center justify-between shadow-2xs hover:shadow-md transition-all">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400">GitHub</div>
                <div className="text-sm font-semibold text-slate-950">
                  github.com/{PORTFOLIO_HERO.username}
                </div>
              </div>
            </div>
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-gray-100 transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <span>GitHub</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Right: Proposal Form */}
        <div className="lg:col-span-7 rounded-3xl border border-gray-200/90 bg-white p-7 sm:p-9 shadow-xs">
          <h3 className="text-xl font-bold text-slate-950 tracking-tight mb-1">
            Send an Engagement Inquiry
          </h3>
          <p className="text-sm text-slate-500 mb-6 font-normal">
            Direct dispatch for game QA audits, regression testing, or Luau scripting contracts.
          </p>

          {submitted ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 text-center space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Check className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Inquiry Draft Prepared
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. Your details for {formData.serviceType} have been recorded. You can also send this inquiry directly via your default email client.
              </p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleMailtoDirect}
                  className="rounded-full bg-slate-950 px-5 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-xs"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Open in Mail Client</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-gray-50 transition-colors"
                >
                  Edit Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Name / Studio *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex or Studio Hex"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Contact Handle (Discord / Email) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="username#0000 or email@domain.com"
                    value={formData.contact}
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Service Category
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) =>
                    setFormData({ ...formData, serviceType: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
                >
                  <option value="QA Testing">Game QA Testing & Defect Audit</option>
                  <option value="Luau Scripting">Roblox Luau Gameplay Scripting</option>
                  <option value="Regression & Live-Ops">Regression & Live-Ops Testing</option>
                  <option value="Systems Consultation">Gameplay Systems Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Project Scope & Details *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your Roblox game, platform targets (PC/Mobile), timeline, and required testing scope..."
                  value={formData.projectDetails}
                  onChange={(e) =>
                    setFormData({ ...formData, projectDetails: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors leading-relaxed"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Direct response typically within 24 hours.
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors shadow-sm active:scale-95"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Send Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
