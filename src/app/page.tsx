"use client";

import HeroSection from "@/components/page/heroSection";
import SkillsSection from "@/components/page/skillsSection";
import ProjectSection from "@/components/page/projectSection";
import ExperienceSection from "@/components/page/experienceSection";

export default function Home() {


  return (
    <div className="w-full h-screen">

      <div className="bg-black">
        {/* section 1 */}
        <HeroSection />

        {/* section skills */}
        <SkillsSection />
      </div>

      {/* section experience */}
      <ExperienceSection />

      {/* section project */}
      <ProjectSection />


    </div>
  );
}
