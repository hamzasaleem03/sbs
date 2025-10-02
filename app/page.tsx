"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section"; // Changed from StorySection and GoalSection
import { ServicesSection } from "@/components/services-section";
import { WorksSection } from "@/components/works-section";
import { Footer } from "@/components/footer";
import { Logos } from "@/components/logos";
import { GoalSection } from "@/components/goal-section";
import { useState } from "react";
import SharePopup from "@/components/SharePopup";
import FlipCard from "@/components/FlipCard";
export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main className="block w-full h-auto min-h-[600px] bg-dark-1">
      <Navbar />
      <HeroSection onOpenPopup={() => setShowPopup(true)} />
      <SharePopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
      <AboutSection /> {/* Replaced StorySection and GoalSection */}
      <GoalSection />
      <Logos />
      <ServicesSection onOpenPopup={() => setShowPopup(true)} />
      <FlipCard />
      <WorksSection onOpenPopup={() => setShowPopup(true)} />
      {/* Blog section removed as per instructions */}
      <Footer />
    </main>
  );
}
