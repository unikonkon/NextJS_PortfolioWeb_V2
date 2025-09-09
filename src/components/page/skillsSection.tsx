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
            <div ref={containerRef} className="relative min-h-screen p-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

                {/* Galaxy Background with Stars */}
                {/* Deep Space Background Layers */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Primary space background */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'radial-gradient(ellipse at top, #0b0f2a 0%, #000000 50%, #0d1b2a 100%)'
                        }}
                    ></div>
                    {/* Secondary nebula layer */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'radial-gradient(circle at 20% 30%, rgba(162, 89, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0, 207, 255, 0.08) 0%, transparent 50%)'
                        }}
                    ></div>
                </div>

                <Particles
                    quantity={100}
                    staticity={50}
                    ease={50}
                    size={0.8}
                    color="#8b5cf6"
                    className="absolute inset-0"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center relative z-10 mb-20 mt-10">
                    <div className="mb-[10px] mt-[20px] w-full flex justify-center items-center md:hidden text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                        Skills
                    </div>
                    {/* Left column */}
                    <div className="flex flex-col gap-8">
                        <BlurFade delay={0.1}>
                            <div
                                ref={languagesRef}
                                className="group relative text-center p-8 rounded-2xl 
                                         bg-gradient-to-br from-purple-900/50 via-slate-800/40 to-blue-900/30 
                                         backdrop-blur-lg border border-purple-500/20 
                                         shadow-2xl shadow-purple-500/10
                                         hover:shadow-purple-500/30 hover:shadow-2xl
                                         hover:border-purple-400/40 hover:bg-gradient-to-br hover:from-purple-800/40 hover:via-slate-700/50 hover:to-blue-800/40
                                         transition-all duration-500 ease-out
                                         hover:scale-105 hover:-translate-y-2
                                         before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-purple-600/10 before:to-blue-600/10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
                            >
                                <div className="relative z-10">
                                    <p className="text-xl md:text-2xl lg:text-3xl text-purple-200 font-bold mb-3 group-hover:text-purple-100 transition-colors duration-300">
                                        Languages
                                    </p>
                                    <p className="text-sm md:text-md lg:text-lg text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                                        HTML, CSS, JavaScript, TypeScript, Dart, SQL(Database)
                                    </p>
                                </div>
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.2}>
                            <div
                                ref={frameworksRef}
                                className="group relative text-center p-8 rounded-2xl 
                                         bg-gradient-to-br from-blue-900/40 via-slate-800/40 to-purple-900/30 
                                         backdrop-blur-lg border border-blue-500/20 
                                         shadow-2xl shadow-blue-500/10
                                         hover:shadow-blue-500/30 hover:shadow-2xl
                                         hover:border-blue-400/40 hover:bg-gradient-to-br hover:from-blue-800/40 hover:via-slate-700/50 hover:to-purple-800/40
                                         transition-all duration-500 ease-out
                                         hover:scale-105 hover:-translate-y-2
                                         before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-blue-600/10 before:to-purple-600/10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
                            >
                                <div className="relative z-10">
                                    <p className="text-xl md:text-2xl lg:text-3xl text-blue-200 font-bold mb-3 group-hover:text-blue-100 transition-colors duration-300">
                                        Frameworks & Libraries
                                    </p>
                                    <p className="text-sm md:text-md lg:text-lg text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                                        ReactJS, NextJS, Express.js, NestJS, Flutter, Electron, Tailwindcss, Ant Design, DaisyUI, Magicui, HeroUI, Three.js
                                    </p>
                                </div>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.3}>
                            <div
                                ref={testingRef}
                                className="group relative text-center p-8 rounded-2xl 
                                         bg-gradient-to-br from-indigo-900/30 via-slate-800/40 to-purple-900/30 
                                         backdrop-blur-lg border border-indigo-500/20 
                                         shadow-2xl shadow-indigo-500/10
                                         hover:shadow-indigo-500/30 hover:shadow-2xl
                                         hover:border-indigo-400/40 hover:bg-gradient-to-br hover:from-indigo-800/40 hover:via-slate-700/50 hover:to-purple-800/40
                                         transition-all duration-500 ease-out
                                         hover:scale-105 hover:-translate-y-2
                                         before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-indigo-600/10 before:to-purple-600/10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
                            >
                                <div className="relative z-10">
                                    <p className="text-xl md:text-2xl lg:text-3xl text-indigo-200 font-bold mb-3 group-hover:text-indigo-100 transition-colors duration-300">
                                        Testing & API Tools
                                    </p>
                                    <p className="text-sm md:text-md lg:text-lg text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                                        Postman, Jest, SonarQube
                                    </p>
                                </div>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.4}>
                            <div
                                ref={aiToolsRef}
                                className="group relative text-center p-8 rounded-2xl 
                                         bg-gradient-to-br from-violet-900/10 via-slate-800/40 to-blue-900/30 
                                         backdrop-blur-lg border border-violet-500/20 
                                         shadow-2xl shadow-violet-500/10
                                         hover:shadow-violet-500/30 hover:shadow-2xl
                                         hover:border-violet-400/40 hover:bg-gradient-to-br hover:from-violet-800/40 hover:via-slate-700/50 hover:to-blue-800/40
                                         transition-all duration-500 ease-out
                                         hover:scale-105 hover:-translate-y-2
                                         before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-violet-600/10 before:to-blue-600/10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
                            >
                                <div className="relative z-10">
                                    <p className="text-xl md:text-2xl lg:text-3xl text-violet-200 font-bold mb-3 group-hover:text-violet-100 transition-colors duration-300">
                                        AI Tools
                                    </p>
                                    <p className="text-sm md:text-md lg:text-lg text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                                        Cursor, Claude Code, Blackbox.AI, Gemini, Google Gemini API, Chat GPT, v0.dev, lovable.dev
                                    </p>
                                </div>
                            </div>
                        </BlurFade>
                    </div>

                    {/* Center column: Person image */}
                    <div className="flex flex-col items-center justify-center">
                        <BlurFade delay={0}>
                            <div className="mb-[150px] hidden md:flex text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                                Skills
                            </div>
                        </BlurFade>
                        {/* IconCloud as background */}
                        <div ref={personRef} className="flex flex-col items-center justify-center pointer-events-none z-0 ">
                            <IconCloud images={iconUrls} />
                        </div>

                        {/* Person image in foreground */}
                        {/* <div className="flex justify-center items-center relative">
                            <Image src="/person.png" alt="Person" width={170} height={170} className="z-20 drop-shadow-2xl" />
                        </div> */}

                    </div>

                    {/* Right column */}
                    <div className="flex flex-col gap-8">
                        <BlurFade delay={0.5}>
                            <div
                                ref={devopsRef}
                                className="group relative text-center p-8 rounded-2xl 
                                         bg-gradient-to-br from-cyan-900/30 via-slate-800/40 to-purple-900/30 
                                         backdrop-blur-lg border border-cyan-500/20 
                                         shadow-2xl shadow-cyan-500/10
                                         hover:shadow-cyan-500/30 hover:shadow-2xl
                                         hover:border-cyan-400/40 hover:bg-gradient-to-br hover:from-cyan-800/40 hover:via-slate-700/50 hover:to-purple-800/40
                                         transition-all duration-500 ease-out
                                         hover:scale-105 hover:-translate-y-2
                                         before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-cyan-600/10 before:to-purple-600/10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
                            >
                                <div className="relative z-10">
                                    <p className="text-xl md:text-2xl lg:text-3xl text-cyan-200 font-bold mb-3 group-hover:text-cyan-100 transition-colors duration-300">
                                        DevOps & CI/CD Tools
                                    </p>
                                    <p className="text-sm md:text-md lg:text-lg text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                                        Git Version Control, Jenkins, Vercel, Docker
                                    </p>
                                </div>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.6}>
                            <div
                                ref={databasesRef}
                                className="group relative text-center p-8 rounded-2xl 
                                         bg-gradient-to-br from-emerald-900/30 via-slate-800/40 to-blue-900/30 
                                         backdrop-blur-lg border border-emerald-500/20 
                                         shadow-2xl shadow-emerald-500/10
                                         hover:shadow-emerald-500/30 hover:shadow-2xl
                                         hover:border-emerald-400/40 hover:bg-gradient-to-br hover:from-emerald-800/40 hover:via-slate-700/50 hover:to-blue-800/40
                                         transition-all duration-500 ease-out
                                         hover:scale-105 hover:-translate-y-2
                                         before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-emerald-600/10 before:to-blue-600/10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
                            >
                                <div className="relative z-10">
                                    <p className="text-xl md:text-2xl lg:text-3xl text-emerald-200 font-bold mb-3 group-hover:text-emerald-100 transition-colors duration-300">
                                        Databases & Data Tools
                                    </p>
                                    <p className="text-sm md:text-md lg:text-lg text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                                        PostgreSQL, Kibana, Firebase, Prisma, Supabase
                                    </p>
                                </div>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.7}>
                            <div
                                ref={designRef}
                                className="group relative text-center p-8 rounded-2xl 
                                         bg-gradient-to-br from-rose-900/30 via-slate-800/40 to-purple-900/30 
                                         backdrop-blur-lg border border-rose-500/20 
                                         shadow-2xl shadow-rose-500/10
                                         hover:shadow-rose-500/30 hover:shadow-2xl
                                         hover:border-rose-400/40 hover:bg-gradient-to-br hover:from-rose-800/40 hover:via-slate-700/50 hover:to-purple-800/40
                                         transition-all duration-500 ease-out
                                         hover:scale-105 hover:-translate-y-2
                                         before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-rose-600/10 before:to-purple-600/10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
                            >
                                <div className="relative z-10">
                                    <p className="text-xl md:text-2xl lg:text-3xl text-rose-200 font-bold mb-3 group-hover:text-rose-100 transition-colors duration-300">
                                        Design & Tools
                                    </p>
                                    <p className="text-sm md:text-md lg:text-lg text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                                        Figma, Draw.io (Diagrams.net), Slack, Lark, Monday, Discord
                                    </p>
                                </div>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.8}>
                            <div
                                ref={softSkillsRef}
                                className="group relative text-center p-8 rounded-2xl 
                                         bg-gradient-to-br from-amber-900/30 via-slate-800/40 to-purple-900/30 
                                         backdrop-blur-lg border border-amber-500/20 
                                         shadow-2xl shadow-amber-500/10
                                         hover:shadow-amber-500/30 hover:shadow-2xl
                                         hover:border-amber-400/40 hover:bg-gradient-to-br hover:from-amber-800/40 hover:via-slate-700/50 hover:to-purple-800/40
                                         transition-all duration-500 ease-out
                                         hover:scale-105 hover:-translate-y-2
                                         before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-amber-600/10 before:to-purple-600/10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
                            >
                                <div className="relative z-10">
                                    <p className="text-xl md:text-2xl lg:text-3xl text-amber-200 font-bold mb-3 group-hover:text-amber-100 transition-colors duration-300">
                                        Soft Skills
                                    </p>
                                    <p className="text-sm md:text-md lg:text-lg text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                                        Creativity, Critical thinking, Responsibility, Problem solving, Communication, Teamwork
                                    </p>
                                </div>
                            </div>
                        </BlurFade>
                    </div>
                </div>

                {/* Animated Beams: All from personRef to each skill card */}
                <AnimatedBeam reverse={false} className="z-10 hidden md:block" containerRef={containerRef} fromRef={personRef} toRef={languagesRef} curvature={60} pathColor="#8b5cf6" gradientStartColor="#8b5cf6" gradientStopColor="#3b82f6" delay={0} />
                <AnimatedBeam reverse={false} className="z-10 hidden md:block" containerRef={containerRef} fromRef={personRef} toRef={frameworksRef} curvature={60} pathColor="#3b82f6" gradientStartColor="#3b82f6" gradientStopColor="#8b5cf6" delay={0.3} />
                <AnimatedBeam reverse={false} className="z-10 hidden md:block" containerRef={containerRef} fromRef={personRef} toRef={testingRef} curvature={60} pathColor="#6366f1" gradientStartColor="#6366f1" gradientStopColor="#8b5cf6" delay={0.6} />
                <AnimatedBeam reverse={false} className="z-10 hidden md:block" containerRef={containerRef} fromRef={personRef} toRef={aiToolsRef} curvature={60} pathColor="#8b5cf6" gradientStartColor="#8b5cf6" gradientStopColor="#3b82f6" delay={0.9} />
                <AnimatedBeam reverse={true} className="z-10 hidden md:block" containerRef={containerRef} fromRef={personRef} toRef={devopsRef} curvature={60} pathColor="#06b6d4" gradientStartColor="#06b6d4" gradientStopColor="#8b5cf6" delay={1.2} />
                <AnimatedBeam reverse={true} className="z-10 hidden md:block" containerRef={containerRef} fromRef={personRef} toRef={databasesRef} curvature={60} pathColor="#10b981" gradientStartColor="#10b981" gradientStopColor="#3b82f6" delay={1.5} />
                <AnimatedBeam reverse={true} className="z-10 hidden md:block" containerRef={containerRef} fromRef={personRef} toRef={designRef} curvature={60} pathColor="#f43f5e" gradientStartColor="#f43f5e" gradientStopColor="#8b5cf6" delay={1.8} />
                <AnimatedBeam reverse={true} className="z-10 hidden md:block" containerRef={containerRef} fromRef={personRef} toRef={softSkillsRef} curvature={60} pathColor="#f59e0b" gradientStartColor="#f59e0b" gradientStopColor="#8b5cf6" delay={2.1} />
            </div>
        </BlurFade>
    )
}

export default SkillsSection