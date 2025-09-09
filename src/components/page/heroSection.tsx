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
        <div className="flex h-full relative overflow-hidden pb-[100px] pt-28">

            <Particles
                quantity={100}
                staticity={50}
                ease={50}
                size={0.4}
                color="#f3f3f3"
                className="absolute inset-0"
            />

            {/* Three.js Space Model Background */}
            <SpaceModel className="absolute inset-0 w-full h-full opacity-30 z-0" />

            <Globe className="mt-[330px]" />

            {/* Left Section - Text Animation */}
            <div className="flex-1 flex items-center justify-center sm:p-8 px-4 ml-3 sm:ml-6 relative z-10">
                <div className="max-w-4xl space-y-6">
                    <div className="flex justify-start">
                        <TextAnimate
                            className="lg:text-4xl text-xl font-bold text-white mr-4"
                            animation="slideUp"
                            by="word"
                            delay={0.3}
                        >
                            Hi, I am
                        </TextAnimate>

                        <Highlighter action="underline" color="#60a5fa" strokeWidth={3} isView>
                            <TextAnimate
                                className="lg:text-5xl text-2xl font-bold text-blue-400"
                                animation="slideUp"
                                by="word"
                                delay={0.5}
                            >
                                Suthep Jantawee
                            </TextAnimate>
                        </Highlighter>
                    </div>


                    <Highlighter action="box" color="#34d399" strokeWidth={2} padding={4} isView={false}>
                        <TextAnimate
                            className="lg:text-3xl text-xl font-semibold text-green-400"
                            animation="slideUp"
                            by="word"
                            delay={0.8}
                        >
                            Full Stack Developer
                        </TextAnimate>
                    </Highlighter>

                    <TextAnimate
                        className="text-lg text-gray-300 leading-relaxed"
                        animation="slideUp"
                        by="word"
                        delay={1}
                    >
                        I&apos;m looking for a similar role as a Front-End Developer, Back-End Developer, or Full Stack Developer.
                    </TextAnimate>

                    <TextAnimate
                        className="text-base text-gray-400 leading-relaxed"
                        animation="slideUp"
                        by="word"
                        delay={1.2}
                    >
                        I have 3+ years of experience in web development. I am passionate about building intuitive interfaces, exploring modern frameworks, and leveraging AI tools to enhance developer workflows.
                    </TextAnimate>

                    <div className="flex md:hidden my-4 w-full justify-start gap-4">
                        <ShinyButton onClick={() => window.open('https://github.com/unikonkon', '_blank')}>
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                GitHub
                            </span>
                        </ShinyButton>

                        <ShinyButton onClick={downloadResume}>
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Resume
                            </span>
                        </ShinyButton>

                        <ShinyButton onClick={() => scrollToSection('projects')}>
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Projects
                            </span>
                        </ShinyButton>
                    </div>

                </div>


            </div>

            {/* Right Section - Terminal */}
            <div className="flex flex-col items-start justify-center p-8 relative z-10">
                <NeonGradientCard
                    className=" "
                    borderSize={0.5}
                    borderRadius={12}
                    neonColors={{
                        firstColor: "#00FFF1",
                        secondColor: "#f0aaaa"
                    }}
                >
                    <Terminal className="w-[450px] h-[280px] bg-black/90">
                        <TypingAnimation className="text-white">
                            &gt; npx create-next-app@latest
                        </TypingAnimation>

                        <AnimatedSpan delay={1500} className="text-green-500">
                            ✔ Successfully initialized project
                        </AnimatedSpan>

                        <AnimatedSpan delay={1800} className="text-green-500">
                            ✔ Installed: shadcn/ui
                        </AnimatedSpan>

                        <AnimatedSpan delay={2100} className="text-green-500">
                            ✔ Added magicui components
                        </AnimatedSpan>

                        <AnimatedSpan delay={2500} className="text-green-500">
                            ✔ git push origin main
                        </AnimatedSpan>

                        <AnimatedSpan delay={2800} className="text-blue-400">
                            ℹ Modified files:
                            <div className="pl-4">• lib/utils.ts</div>
                        </AnimatedSpan>

                        <TypingAnimation delay={3200} className="text-gray-400">
                            ✔ Project setup complete.
                        </TypingAnimation>

                        <TypingAnimation delay={3500} className="text-gray-400">
                            ➤ You can now start building with components.
                        </TypingAnimation>
                    </Terminal>

                </NeonGradientCard>
                <div className="hidden md:flex mt-4 w-full justify-start gap-4">
                    <ShinyButton onClick={() => window.open('https://github.com/unikonkon', '_blank')}>
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            GitHub
                        </span>
                    </ShinyButton>

                    <ShinyButton onClick={downloadResume}>
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            Resume
                        </span>
                    </ShinyButton>

                    <ShinyButton onClick={() => scrollToSection('projects')}>
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            Projects
                        </span>
                    </ShinyButton>
                </div>
            </div>


        </div>
    )
}

export default HeroSection
