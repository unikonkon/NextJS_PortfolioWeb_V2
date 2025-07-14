"use client";

import Image from "next/image";
import { TextAnimate } from "@/components/magicui/text-animate";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import { Particles } from "@/components/magicui/particles";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { useRef } from "react";
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
