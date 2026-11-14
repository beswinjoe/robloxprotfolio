import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { DevelopmentSection } from "@/components/DevelopmentSection";
import { QATestingSection } from "@/components/QATestingSection";
import { BugReportSystem } from "@/components/BugReportSystem";
import { SkillsSection } from "@/components/SkillsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#101010] text-[#ededed] antialiased">
      {/* Top sticky navigation */}
      <Navbar />

      {/* Main page content sections */}
      <main className="relative">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Audited Statistics */}
        <Stats />

        {/* 3. Development Portfolio (Scripting contributions) */}
        <DevelopmentSection />

        {/* 4. QA Testing Portfolio (Filterable records: Paid, QA Central, Pending Verification) */}
        <QATestingSection />

        {/* 5. Bug Reports & QA Case Studies System */}
        <BugReportSystem />

        {/* 6. QA & Development Skills Matrices */}
        <SkillsSection />

        {/* 7. Methodology & About */}
        <AboutSection />

        {/* 8. Contact & Collaboration */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
