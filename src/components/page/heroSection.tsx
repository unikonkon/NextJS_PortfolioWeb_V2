import { Particles } from '@/components/magicui/particles'
import { TextAnimate } from '@/components/magicui/text-animate'
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card'
import { Terminal, TypingAnimation, AnimatedSpan } from '@/components/magicui/terminal'
import { ShinyButton } from '@/components/magicui/shiny-button'

const HeroSection = () => {
    return (
        <div className="flex h-full relative overflow-hidden">

            <Particles
                quantity={100}
                staticity={50}
                ease={50}
                size={0.4}
                color="#f3f3f3"
                className="absolute inset-0"
            />

            {/* Left Section - Text Animation */}
            <div className="flex-1 flex items-center justify-center sm:p-8 px-4 relative z-10">
                <div className="max-w-2xl space-y-6">
                    <TextAnimate
                        className="text-4xl font-bold text-white"
                        animation="slideUp"
                        by="word"
                        delay={0.5}
                    >
                        Hi, I am
                    </TextAnimate>

                    <TextAnimate
                        className="text-6xl font-bold text-blue-400"
                        animation="slideUp"
                        by="word"
                        delay={1}
                    >
                        Suthep Jantawee
                    </TextAnimate>

                    <TextAnimate
                        className="text-3xl font-semibold text-green-400"
                        animation="slideUp"
                        by="word"
                        delay={1.5}
                    >
                        Full Stack Developer
                    </TextAnimate>

                    <TextAnimate
                        className="text-lg text-gray-300 leading-relaxed"
                        animation="slideUp"
                        by="word"
                        delay={2}
                    >
                        I&apos;m looking for a similar role as a Front-End Developer, Back-End Developer, or Full Stack Developer.
                    </TextAnimate>

                    <TextAnimate
                        className="text-base text-gray-400 leading-relaxed"
                        animation="slideUp"
                        by="word"
                        delay={2}
                    >
                        I have 3+ years of experience in web development. I am passionate about building intuitive interfaces, exploring modern frameworks, and leveraging AI tools to enhance developer workflows.
                    </TextAnimate>

                    <div className="flex md:hidden my-4 w-full justify-start gap-4">
                        <ShinyButton>
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                GitHub
                            </span>
                        </ShinyButton>

                        <ShinyButton>
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Resume
                            </span>
                        </ShinyButton>

                        <ShinyButton>
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
                    <ShinyButton>
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            GitHub
                        </span>
                    </ShinyButton>

                    <ShinyButton>
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            Resume
                        </span>
                    </ShinyButton>

                    <ShinyButton>
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