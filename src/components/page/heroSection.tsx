import { Particles } from '@/components/magicui/particles'
import { TextAnimate } from '@/components/magicui/text-animate'
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card'
import { Terminal, TypingAnimation, AnimatedSpan } from '@/components/magicui/terminal'

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
                        delay={2.5}
                    >
                        I have 3+ years of experience in web development. I am passionate about building intuitive interfaces, exploring modern frameworks, and leveraging AI tools to enhance developer workflows.
                    </TextAnimate>
                </div>
            </div>

            {/* Right Section - Terminal */}
            <div className="flex-1 flex items-center justify-center p-8 relative z-10">
                <NeonGradientCard
                    className=" "
                    borderSize={0.5}
                    borderRadius={12}
                    neonColors={{
                        firstColor: "#00FFF1",
                        secondColor: "#f0aaaa"
                    }}
                >
                    <Terminal className="w-[450px] h-[450px] bg-black/90">
                        <TypingAnimation className="text-white">&gt; pnpm dlx shadcn@latest init</TypingAnimation>

                        <AnimatedSpan delay={1500} className="text-green-500">
                            <span>✔ Preflight checks.</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={2000} className="text-green-500">
                            <span>✔ Verifying framework. Found Next.js.</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={2500} className="text-green-500">
                            <span>✔ Validating Tailwind CSS.</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={3000} className="text-green-500">
                            <span>✔ Validating import alias.</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={3500} className="text-green-500">
                            <span>✔ Writing components.json.</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={4000} className="text-green-500">
                            <span>✔ Checking registry.</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={4500} className="text-green-500">
                            <span>✔ Updating tailwind.config.ts</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={5000} className="text-green-500">
                            <span>✔ Updating app/globals.css</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={5500} className="text-green-500">
                            <span>✔ Installing dependencies.</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={6000} className="text-blue-500">
                            <span>ℹ Updated 1 file:</span>
                            <span className="pl-2">- lib/utils.ts</span>
                        </AnimatedSpan>

                        <TypingAnimation delay={6500} className="text-muted-foreground">
                            Success! Project initialization completed.
                        </TypingAnimation>

                        <TypingAnimation delay={7000} className="text-muted-foreground">
                            You may now add components.
                        </TypingAnimation>
                    </Terminal>
                </NeonGradientCard>
            </div>
        </div>
    )
}

export default HeroSection