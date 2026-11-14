import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { GameGalleryCarousel } from "@/components/GameGalleryCarousel";
import { Stats } from "@/components/Stats";
import { QATestingSection } from "@/components/QATestingSection";
import { BugReportSystem } from "@/components/BugReportSystem";
import { DevelopmentSection } from "@/components/DevelopmentSection";
import { SkillsSection } from "@/components/SkillsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 antialiased selection:bg-rose-500 selection:text-white">
      {/* 1. Slim White Sticky Navigation */}
      <Navbar />

      <main className="relative">
        {/* 2. Two-Column Editorial Hero Section */}
        <Hero />

        {/* 3. Horizontal Continuous Animated Game Gallery Carousel */}
        <GameGalleryCarousel />

        {/* 4. Minimal Statistics Section with Verified Disclosures */}
        <Stats />

        {/* 5. QA Testing Portfolio (Paid Studio QA, QA Central Archive, Additional Records) */}
        <QATestingSection />

        {/* 6. Documented Bug Reports & Reproducible Case Studies */}
        <BugReportSystem />

        {/* 7. Luau Gameplay Scripting & Systems Development */}
        <DevelopmentSection />

        {/* 8. Technical Skills Matrix */}
        <SkillsSection />

        {/* 9. Background & Methodology */}
        <AboutSection />

        {/* 10. Contact & Engagement Inquiry */}
        <ContactSection />
      </main>

      {/* 11. Minimal Footer */}
      <Footer />
    </div>
  );
}
