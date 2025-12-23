import React, { useRef } from 'react'
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { Particles } from '@/components/magicui/particles'
import { BlurFade } from "@/components/magicui/blur-fade";

// To add a skill, add its slug (usually the lowercase name, e.g. "react", "typescript") to the array below.
// See https://simpleicons.org/ for available slugs.
const slugs: string[] = [
    "html5",
    "css3",
    "javascript",
    "typescript",
    "react",
    "nextdotjs",
    "flutter",
    "express",
    "electron",
    "tailwindcss",
    "antdesign",
    "daisyui",
    "jest",
    "postman",
    "sonarqube",
    "git",
    "docker",
    "vercel",
    "jenkins",
    "postgresql",
    "firebase",
    "prisma",
    "supabase",
    "kibana",
    "figma",
    "slack",
    "monday",
    "discord",
    "drawio",
    "lark",
    "threejs",
    "magicui",
    "heroui",
    "cursor",
    "claude",
    "blackboxai",
    "gemini",
    "googlegeminiapi",
    "chatgpt",
    "nestjs",
    // Add more slugs as needed
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
            <div ref={containerRef} className="relative min-h-screen p-10">

                {/* Deep Space Background */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Primary deep space */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(180deg, #050510 0%, #08081a 50%, #050510 100%)'
                        }}
                    ></div>
                    {/* Subtle nebula accent */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(103, 232, 249, 0.03) 0%, transparent 50%)'
                        }}
                    ></div>
                </div>

                <Particles
                    quantity={50}
                    staticity={90}
                    ease={25}
                    size={0.4}
                    color="#a78bfa"
                    className="absolute inset-0 opacity-50"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto items-center relative z-10 mb-24 mt-12">
                    <div className="mb-4 mt-6 w-full flex justify-center items-center md:hidden text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-purple-300/90 via-cyan-300/90 to-purple-300/90 bg-clip-text text-transparent font-medium">
                        Skills
                    </div>
                    {/* Left column */}
                    <div className="flex flex-col gap-16">
                        <BlurFade delay={0.1}>
                            <div
                                ref={languagesRef}
                                className="group relative text-center p-4 rounded-2xl
                                         bg-[#0a0a18]/60 backdrop-blur-xl
                                         border border-purple-500/8
                                         hover:border-purple-400/15
                                         transition-all duration-600 ease-out
                                         hover:-translate-y-1"
                            >
                                <div className="relative z-10">
                                    <p className="text-xl md:text-2xl lg:text-3xl text-purple-200/90 font-medium mb-4 group-hover:text-purple-100 transition-colors duration-500">
                                        Languages
                                    </p>
                                    <p className="text-sm md:text-md lg:text-lg text-slate-400 group-hover:text-slate-300 transition-colors duration-500">
                                        HTML, CSS, JavaScript, TypeScript, Dart, SQL(Database)
                                    </p>
                                </div>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.2}>
                            <div
                                ref={frameworksRef}
                                className="group relative text-center p-4 rounded-2xl
                                         bg-[#0a0a18]/60 backdrop-blur-xl
                                         border border-cyan-500/8
                                         hover:border-cyan-400/15
                                         transition-all duration-600 ease-out
                                         hover:-translate-y-1"
                            >
                                <div className="relative z-10">
                                    <p className="text-xl md:text-2xl lg:text-3xl text-cyan-200/90 font-medium mb-4 group-hover:text-cyan-100 transition-colors duration-500">
                                        Frameworks & Libraries
                                    </p>
                                    <p className="text-sm md:text-md lg:text-lg text-slate-400 group-hover:text-slate-300 transition-colors duration-500">
                                        ReactJS, NextJS, Express.js, NestJS, Flutter, Electron, Tailwindcss, Ant Design, DaisyUI, Magicui, HeroUI, Three.js
                                    </p>
                                </div>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.3}>
                            <div
                                ref={testingRef}
                                className="group relative text-center p-4 rounded-2xl
                                         bg-[#0a0a18]/60 backdrop-blur-xl
                                         border border-indigo-500/8
                                         hover:border-indigo-400/15
                                         transition-all duration-600 ease-out
                                         hover:-translate-y-1"
                            >
                                <div className="relative z-10">
                                    <p className="text-xl md:text-2xl lg:text-3xl text-indigo-200/90 font-medium mb-4 group-hover:text-indigo-100 transition-colors duration-500">
                                        Testing & API Tools
                                    </p>
                                    <p className="text-sm md:text-md lg:text-lg text-slate-400 group-hover:text-slate-300 transition-colors duration-500">
                                        Postman, Jest, SonarQube
                                    </p>
                                </div>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.4}>
                            <div
                                ref={aiToolsRef}
                                className="group relative text-center p-4 rounded-2xl
                                         bg-[#0a0a18]/60 backdrop-blur-xl
                                         border border-violet-500/8
                                         hover:border-violet-400/15
                                         transition-all duration-600 ease-out
                                         hover:-translate-y-1"
                            >
                                <div className="relative z-10">
                                    <p className="text-xl md:text-2xl lg:text-3xl text-violet-200/90 font-medium mb-4 group-hover:text-violet-100 transition-colors duration-500">
                                        AI Tools
                                    </p>
                                    <p className="text-sm md:text-md lg:text-lg text-slate-400 group-hover:text-slate-300 transition-colors duration-500">
                                        Cursor, Claude Code, Blackbox.AI, Gemini, Google Gemini API, Chat GPT, v0.dev, lovable.dev
                                    </p>
                                </div>
                            </div>
                        </BlurFade>
                    </div>

                    {/* Center column: Person image */}
                    <div className="flex flex-col items-center justify-center">
                        <BlurFade delay={0}>
                            <div className="mb-[150px] hidden md:flex text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-purple-300/90 via-cyan-300/90 to-purple-300/90 bg-clip-text text-transparent font-medium">
                                Skills
                            </div>
                        </BlurFade>
                        {/* IconCloud as background */}
                        <div ref={personRef} className="flex flex-col items-center justify-center pointer-events-none z-0 pixel-float parallax-slow opacity-80">
                            <IconCloud images={iconUrls} />
                        </div>

                    </div>

                    {/* Right column */}
                    <div className="flex flex-col gap-16">
                        <BlurFade delay={0.5}>
                            <div
                                ref={devopsRef}
                                className="group relative text-center p-4 rounded-2xl
                                         bg-[#0a0a18]/60 backdrop-blur-xl
                                         border border-cyan-500/8
                                         hover:border-cyan-400/15
                                         transition-all duration-600 ease-out
                                         hover:-translate-y-1"
                            >
                                <div className="relative z-10">
                                    <p className="text-xl md:text-2xl lg:text-3xl text-cyan-200/90 font-medium mb-4 group-hover:text-cyan-100 transition-colors duration-500">
                                        DevOps & CI/CD Tools
                                    </p>
                                    <p className="text-sm md:text-md lg:text-lg text-slate-400 group-hover:text-slate-300 transition-colors duration-500">
                                        Git Version Control, Jenkins, Vercel, Docker
                                    </p>
                                </div>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.6}>
                            <div
                                ref={databasesRef}
                                className="group relative text-center p-4 rounded-2xl
                                         bg-[#0a0a18]/60 backdrop-blur-xl
                                         border border-emerald-500/8
                                         hover:border-emerald-400/15
                                         transition-all duration-600 ease-out
                                         hover:-translate-y-1"
                            >
                                <div className="relative z-10">
                                    <p className="text-xl md:text-2xl lg:text-3xl text-emerald-200/90 font-medium mb-4 group-hover:text-emerald-100 transition-colors duration-500">
                                        Databases & Data Tools
                                    </p>
                                    <p className="text-sm md:text-md lg:text-lg text-slate-400 group-hover:text-slate-300 transition-colors duration-500">
                                        PostgreSQL, Kibana, Firebase, Prisma, Supabase
                                    </p>
                                </div>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.7}>
                            <div
                                ref={designRef}
                                className="group relative text-center p-4 rounded-2xl
                                         bg-[#0a0a18]/60 backdrop-blur-xl
                                         border border-rose-500/8
                                         hover:border-rose-400/15
                                         transition-all duration-600 ease-out
                                         hover:-translate-y-1"
                            >
                                <div className="relative z-10">
                                    <p className="text-xl md:text-2xl lg:text-3xl text-rose-200/90 font-medium mb-4 group-hover:text-rose-100 transition-colors duration-500">
                                        Design & Tools
                                    </p>
                                    <p className="text-sm md:text-md lg:text-lg text-slate-400 group-hover:text-slate-300 transition-colors duration-500">
                                        Figma, Draw.io (Diagrams.net), Slack, Lark, Monday, Discord
                                    </p>
                                </div>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.8}>
                            <div
                                ref={softSkillsRef}
                                className="group relative text-center p-4 rounded-2xl
                                         bg-[#0a0a18]/60 backdrop-blur-xl
                                         border border-amber-500/8
                                         hover:border-amber-400/15
                                         transition-all duration-600 ease-out
                                         hover:-translate-y-1"
                            >
                                <div className="relative z-10">
                                    <p className="text-xl md:text-2xl lg:text-3xl text-amber-200/90 font-medium mb-4 group-hover:text-amber-100 transition-colors duration-500">
                                        Soft Skills
                                    </p>
                                    <p className="text-sm md:text-md lg:text-lg text-slate-400 group-hover:text-slate-300 transition-colors duration-500">
                                        Creativity, Critical thinking, Responsibility, Problem solving, Communication, Teamwork
                                    </p>
                                </div>
                            </div>
                        </BlurFade>
                    </div>
                </div>

                {/* Animated Beams: Subtle connections */}
                <AnimatedBeam reverse={false} className="z-10 hidden md:block opacity-40" containerRef={containerRef} fromRef={personRef} toRef={languagesRef} curvature={50} pathColor="#a78bfa" gradientStartColor="#a78bfa" gradientStopColor="#67e8f9" delay={0} />
                <AnimatedBeam reverse={false} className="z-10 hidden md:block opacity-40" containerRef={containerRef} fromRef={personRef} toRef={frameworksRef} curvature={50} pathColor="#67e8f9" gradientStartColor="#67e8f9" gradientStopColor="#a78bfa" delay={0.4} />
                <AnimatedBeam reverse={false} className="z-10 hidden md:block opacity-40" containerRef={containerRef} fromRef={personRef} toRef={testingRef} curvature={50} pathColor="#818cf8" gradientStartColor="#818cf8" gradientStopColor="#a78bfa" delay={0.8} />
                <AnimatedBeam reverse={false} className="z-10 hidden md:block opacity-40" containerRef={containerRef} fromRef={personRef} toRef={aiToolsRef} curvature={50} pathColor="#a78bfa" gradientStartColor="#a78bfa" gradientStopColor="#67e8f9" delay={1.2} />
                <AnimatedBeam reverse={true} className="z-10 hidden md:block opacity-40" containerRef={containerRef} fromRef={personRef} toRef={devopsRef} curvature={50} pathColor="#67e8f9" gradientStartColor="#67e8f9" gradientStopColor="#a78bfa" delay={1.6} />
                <AnimatedBeam reverse={true} className="z-10 hidden md:block opacity-40" containerRef={containerRef} fromRef={personRef} toRef={databasesRef} curvature={50} pathColor="#34d399" gradientStartColor="#34d399" gradientStopColor="#67e8f9" delay={2.0} />
                <AnimatedBeam reverse={true} className="z-10 hidden md:block opacity-40" containerRef={containerRef} fromRef={personRef} toRef={designRef} curvature={50} pathColor="#fb7185" gradientStartColor="#fb7185" gradientStopColor="#a78bfa" delay={2.4} />
                <AnimatedBeam reverse={true} className="z-10 hidden md:block opacity-40" containerRef={containerRef} fromRef={personRef} toRef={softSkillsRef} curvature={50} pathColor="#fbbf24" gradientStartColor="#fbbf24" gradientStopColor="#a78bfa" delay={2.8} />
            </div>
        </BlurFade>
    )
}

export default SkillsSection