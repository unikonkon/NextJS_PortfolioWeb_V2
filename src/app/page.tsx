"use client";

import HeroSection from "@/components/page/heroSection";
import SkillsSection from "@/components/page/skillsSection";
import ProjectSection from "@/components/page/projectSection";
import ExperienceSection from "@/components/page/experienceSection";
import CustomBorderBackground from "@/components/ui/custom";
import ContactSection from "@/components/page/contactSection";
import Navbar from "@/components/page/navbar";

export default function Home() {
  return (
    <div className="w-full h-screen">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[200px]">
        <Navbar />
      </div>

      <div className="bg-black">
        {/* section 1 - Hero */}
        <section id="hero">
          <HeroSection />
        </section>
      </div>
      <CustomBorderBackground />

      {/* section skills */}
      <section id="skills">
        <SkillsSection />
      </section>

      <CustomBorderBackground />

      {/* section experience */}
      <section id="experience">
        <ExperienceSection />
      </section>

      <CustomBorderBackground />

      {/* section project */}
      <section id="projects">
        <ProjectSection />
      </section>

      <CustomBorderBackground />

      {/* section contact */}
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
