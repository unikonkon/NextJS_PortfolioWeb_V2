import React, { useRef } from 'react'
import Image from "next/image";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { Particles } from '@/components/magicui/particles'
import { BlurFade } from "@/components/magicui/blur-fade";

const slugs = [
    "typescript", "javascript", "dart", "java", "react", "flutter", "android", "html5", "css3",
    "nodedotjs", "express", "nextdotjs", "prisma", "amazonaws", "postgresql", "firebase", "nginx",
    "vercel", "testinglibrary", "jest", "cypress", "docker", "git", "jira", "github", "gitlab",
    "visualstudiocode", "androidstudio", "sonarqube", "figma",
];

// Map slugs to image URLs (e.g., from simple-icons CDN)
const iconUrls = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
);

const SkillsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const personRef = useRef<HTMLDivElement>(null);
    const languagesRef = useRef<HTMLDivElement>(null);
    const devopsRef = useRef<HTMLDivElement>(null);
    const frameworksRef = useRef<HTMLDivElement>(null);
    const databasesRef = useRef<HTMLDivElement>(null);
    const testingRef = useRef<HTMLDivElement>(null);
    const designRef = useRef<HTMLDivElement>(null);
    const aiToolsRef = useRef<HTMLDivElement>(null);
    const softSkillsRef = useRef<HTMLDivElement>(null);
    return (
        <BlurFade delay={0.1}>
            <div ref={containerRef} className="relative min-h-screen p-8">
                <Particles
                    quantity={60}
                    staticity={50}
                    ease={50}
                    size={0.4}
                    color="#f3f3f3"
                    className="absolute inset-0"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
                    {/* Left column */}
                    <div className="flex flex-col gap-8">
                        <BlurFade delay={0.1}>
                            <div ref={languagesRef} className="text-center p-6 bg-gray-900/90 rounded-lg border border-gray-700 z-20">
                                <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 glow-text mb-2">Languages</p>
                                <p className="text-sm md:text-md lg:text-lg text-gray-300">HTML, CSS, JavaScript, TypeScript, Dart, SQL(Database)</p>
                            </div>
                        </BlurFade>
                        <BlurFade delay={0.2}>
                            <div ref={frameworksRef} className="text-center p-6 bg-gray-900/90 rounded-lg border border-gray-700 z-20">
                                <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 glow-text mb-2">Frameworks & Libraries</p>
                                <p className="text-sm md:text-md lg:text-lg text-gray-300">ReactJS, NextJS, NextUI, Flutter, Express.js, Electron, Tailwindcss, Ant Design, DaisyUI</p>
                            </div>
                        </BlurFade>
                        <BlurFade delay={0.3}>
                            <div ref={testingRef} className="text-center p-6 bg-gray-900/90 rounded-lg border border-gray-700 z-20">
                                <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 glow-text mb-2">Testing & API Tools</p>
                                <p className="text-sm md:text-md lg:text-lg text-gray-300">Postman, Jest, SonarQube</p>
                            </div>
                        </BlurFade>
                        <BlurFade delay={0.4}>
                            <div ref={aiToolsRef} className="text-center p-6 bg-gray-900/90 rounded-lg border border-gray-700 z-20">
                                <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 glow-text mb-2">AI Tools</p>
                                <p className="text-sm md:text-md lg:text-lg text-gray-300">Cursor, Blackbox.AI, Gemini, Google Gemini API, Chat GPT</p>
                            </div>
                        </BlurFade>
                    </div>
                    {/* Center column: Person image */}
                    <div className="flex flex-col items-center justify-center">
                        <BlurFade delay={0}>
                            <div className="text-2xl md:text-4xl lg:text-6xl text-gray-200 glow-text mb-2">
                                Skills
                            </div>
                        </BlurFade>
                        {/* IconCloud as background */}
                        <div className="flex flex-col items-center justify-center pointer-events-none z-0 w-[200px] h-[300px]">
                            <IconCloud images={iconUrls} />
                        </div>
                        {/* Person image in foreground */}
                        <div ref={personRef} className="flex justify-center items-center relative ">
                            <Image src="/person.png" alt="Person" width={170} height={170} className="z-20" />
                        </div>
                    </div>
                    {/* Right column */}
                    <div className="flex flex-col gap-8">
                        <BlurFade delay={0.5}>
                            <div ref={devopsRef} className="text-center p-6 bg-gray-900/90 rounded-lg border border-gray-700 z-20">
                                <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 glow-text mb-2">DevOps & CI/CD Tools</p>
                                <p className="text-sm md:text-md lg:text-lg text-gray-300">Git Version Control, Jenkins, Vercel, Docker</p>
                            </div>
                        </BlurFade>
                        <BlurFade delay={0.6}>
                            <div ref={databasesRef} className="text-center p-6 bg-gray-900/90 rounded-lg border border-gray-700 z-20">
                                <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 glow-text mb-2">Databases & Data Tools</p>
                                <p className="text-sm md:text-md lg:text-lg text-gray-300">PostgreSQL, Kibana, Firebase, Prisma, Supabase</p>
                            </div>
                        </BlurFade>
                        <BlurFade delay={0.7}>
                            <div ref={designRef} className="text-center p-6 bg-gray-900/90 rounded-lg border border-gray-700 z-20">
                                <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 glow-text mb-2">Design & Tools</p>
                                <p className="text-sm md:text-md lg:text-lg text-gray-300">Figma, Draw.io (Diagrams.net), Slack, Lark, Monday, Discord</p>
                            </div>
                        </BlurFade>
                        <BlurFade delay={0.8}>
                            <div ref={softSkillsRef} className="text-center p-6 bg-gray-900/90 rounded-lg border border-gray-700 z-20">
                                <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 glow-text mb-2">Soft Skills</p>
                                <p className="text-sm md:text-md lg:text-lg text-gray-300">Creativity, Critical thinking, Responsibility, Problem solving, Communication, Teamwork</p>
                            </div>
                        </BlurFade>
                    </div>
                </div>

                {/* Animated Beams: All from personRef to each skill card */}
                <AnimatedBeam className="z-10" containerRef={containerRef} fromRef={personRef} toRef={languagesRef} curvature={60} pathColor="#00FFF1" gradientStartColor="#00FFF1" gradientStopColor="#f0aaaa" delay={0} />
                <AnimatedBeam className="z-10" containerRef={containerRef} fromRef={personRef} toRef={frameworksRef} curvature={60} pathColor="#f0aaaa" gradientStartColor="#f0aaaa" gradientStopColor="#00FFF1" delay={0.3} />
                <AnimatedBeam className="z-10" containerRef={containerRef} fromRef={personRef} toRef={testingRef} curvature={60} pathColor="#00FFF1" gradientStartColor="#00FFF1" gradientStopColor="#f0aaaa" delay={0.6} />
                <AnimatedBeam className="z-10" containerRef={containerRef} fromRef={personRef} toRef={aiToolsRef} curvature={60} pathColor="#f0aaaa" gradientStartColor="#f0aaaa" gradientStopColor="#00FFF1" delay={0.9} />
                <AnimatedBeam className="z-10" containerRef={containerRef} fromRef={personRef} toRef={devopsRef} curvature={60} pathColor="#00FFF1" gradientStartColor="#00FFF1" gradientStopColor="#f0aaaa" delay={1.2} />
                <AnimatedBeam className="z-10" containerRef={containerRef} fromRef={personRef} toRef={databasesRef} curvature={60} pathColor="#f0aaaa" gradientStartColor="#f0aaaa" gradientStopColor="#00FFF1" delay={1.5} />
                <AnimatedBeam className="z-10" containerRef={containerRef} fromRef={personRef} toRef={designRef} curvature={60} pathColor="#00FFF1" gradientStartColor="#00FFF1" gradientStopColor="#f0aaaa" delay={1.8} />
                <AnimatedBeam className="z-10" containerRef={containerRef} fromRef={personRef} toRef={softSkillsRef} curvature={60} pathColor="#f0aaaa" gradientStartColor="#f0aaaa" gradientStopColor="#00FFF1" delay={2.1} />
            </div>
        </BlurFade>
    )
}

export default SkillsSection