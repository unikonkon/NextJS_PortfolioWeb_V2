"use client";

import HeroSection from "@/components/page/heroSection";
import SkillsSection from "@/components/page/skillsSection";
import ProjectSection from "@/components/page/projectSection";
import ExperienceSection from "@/components/page/experienceSection";
import CustomBorderBackground from "@/components/ui/custom";

export default function Home() {


  return (
    <div className="w-full h-screen">

      <div className="bg-black">
        {/* section 1 */}
        <HeroSection />
        </div>
        <CustomBorderBackground />

        {/* section skills */}
        <SkillsSection />
        
        <CustomBorderBackground />

        {/* section experience */}
        <ExperienceSection />

        <CustomBorderBackground />

        {/* section project */}
        <ProjectSection />
     
    </div>

  );
}
