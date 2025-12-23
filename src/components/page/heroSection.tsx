import { Particles } from '@/components/magicui/particles'
import { TextAnimate } from '@/components/magicui/text-animate'
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card'
import { Terminal, TypingAnimation, AnimatedSpan } from '@/components/magicui/terminal'
import { ShinyButton } from '@/components/magicui/shiny-button'
import { Globe } from "@/components/magicui/globe";
import { SpaceModel } from "@/components/magicui/space-model";
import { Highlighter } from "@/components/magicui/highlighter";

const HeroSection = () => {

    // Smooth scroll function
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Download Resume function
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = '/Resume Sutep Jantawee.pdf';
        link.download = 'Resume_Sutep_Jantawee.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex h-full relative overflow-hidden pb-[120px] pt-32">

            <Particles
                quantity={60}
                staticity={80}
                ease={30}
                size={0.3}
                color="#a78bfa"
                className="absolute inset-0 opacity-60"
            />

            {/* Three.js Space Model Background */}
            <SpaceModel className="absolute inset-0 w-full h-full opacity-20 z-0" />

            <Globe className="mt-[330px] opacity-80" />

            {/* Left Section - Text Animation */}
            <div className="flex-1 flex items-center justify-center sm:p-10 px-6 ml-4 sm:ml-8 relative z-10">
                <div className="max-w-4xl space-y-8">
                    <div className="flex justify-start">
                        <TextAnimate
                            className="lg:text-4xl text-xl font-medium text-slate-200 mr-4"
                            animation="slideUp"
                            by="word"
                            delay={0.4}
                        >
                            Hi, I am
                        </TextAnimate>

                        <Highlighter action="underline" color="#a78bfa" strokeWidth={2} isView>
                            <TextAnimate
                                className="lg:text-5xl text-2xl font-semibold text-purple-300"
                                animation="slideUp"
                                by="word"
                                delay={0.6}
                            >
                                Suthep Jantawee
                            </TextAnimate>
                        </Highlighter>
                    </div>


                    <Highlighter action="box" color="#67e8f9" strokeWidth={1} padding={4} isView={false}>
                        <TextAnimate
                            className="lg:text-3xl text-xl font-medium text-cyan-300/90"
                            animation="slideUp"
                            by="word"
                            delay={0.9}
                        >
                            Full Stack Developer
                        </TextAnimate>
                    </Highlighter>

                    <TextAnimate
                        className="text-lg text-slate-300/90 leading-relaxed"
                        animation="slideUp"
                        by="word"
                        delay={1.1}
                    >
                        I&apos;m looking for a similar role as a Front-End Developer, Back-End Developer, or Full Stack Developer.
                    </TextAnimate>

                    <TextAnimate
                        className="text-base text-slate-400/80 leading-relaxed"
                        animation="slideUp"
                        by="word"
                        delay={1.3}
                    >
                        I have 3+ years of experience in web development. I am passionate about building intuitive interfaces, exploring modern frameworks, and leveraging AI tools to enhance developer workflows.
                    </TextAnimate>

                    <div className="flex md:hidden my-6 w-full justify-start gap-4">
                        <ShinyButton onClick={() => window.open('https://github.com/unikonkon', '_blank')}>
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-slate-100 lg:text-lg">
                                GitHub
                            </span>
                        </ShinyButton>

                        <ShinyButton onClick={downloadResume}>
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-slate-100 lg:text-lg">
                                Resume
                            </span>
                        </ShinyButton>

                        <ShinyButton onClick={() => scrollToSection('projects')}>
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-slate-100 lg:text-lg">
                                Projects
                            </span>
                        </ShinyButton>
                    </div>

                </div>


            </div>

            {/* Right Section - Terminal */}
            <div className="flex flex-col items-start justify-center p-10 relative z-10 pixel-stagger">
                <NeonGradientCard
                    className="pixel-glass"
                    borderSize={0.3}
                    borderRadius={16}
                    neonColors={{
                        firstColor: "#a78bfa",
                        secondColor: "#67e8f9"
                    }}
                >
                    <Terminal className="w-[450px] h-[280px] bg-[#0a0a18]/95">
                        <TypingAnimation className="text-slate-200">
                            &gt; npx create-next-app@latest
                        </TypingAnimation>

                        <AnimatedSpan delay={1800} className="text-emerald-400/90">
                            ✔ Successfully initialized project
                        </AnimatedSpan>

                        <AnimatedSpan delay={2200} className="text-emerald-400/90">
                            ✔ Installed: shadcn/ui
                        </AnimatedSpan>

                        <AnimatedSpan delay={2600} className="text-emerald-400/90">
                            ✔ Added magicui components
                        </AnimatedSpan>

                        <AnimatedSpan delay={3000} className="text-emerald-400/90">
                            ✔ git push origin main
                        </AnimatedSpan>

                        <AnimatedSpan delay={3400} className="text-cyan-400/80">
                            ℹ Modified files:
                            <div className="pl-4">• lib/utils.ts</div>
                        </AnimatedSpan>

                        <TypingAnimation delay={3800} className="text-slate-400">
                            ✔ Project setup complete.
                        </TypingAnimation>

                        <TypingAnimation delay={4200} className="text-slate-400">
                            ➤ You can now start building with components.
                        </TypingAnimation>
                    </Terminal>

                </NeonGradientCard>
                <div className="hidden md:flex mt-6 w-full justify-start gap-4">
                    <ShinyButton onClick={() => window.open('https://github.com/unikonkon', '_blank')}>
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-slate-100 lg:text-lg">
                            GitHub
                        </span>
                    </ShinyButton>

                    <ShinyButton onClick={downloadResume}>
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-slate-100 lg:text-lg">
                            Resume
                        </span>
                    </ShinyButton>

                    <ShinyButton onClick={() => scrollToSection('projects')}>
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-slate-100 lg:text-lg">
                            Projects
                        </span>
                    </ShinyButton>
                </div>
            </div>


        </div>
    )
}

export default HeroSection
