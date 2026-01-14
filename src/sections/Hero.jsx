import React from "react";
import { ChevronDown, Star } from "lucide-react";
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb } from "react-icons/si";
import { PERSONAL_INFO } from "../utils/constants";
import { scrollToSection } from "../hooks/useScrollSpy";
import FadeIn from "../components/animations/FadeIn";
import RadialGradienBackground from '../components/backgrounds/RadialGradientBackground'

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
            <RadialGradienBackground variant="hero" />

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <div className="text-left">
                        <FadeIn delay={0}>
                            <div className="inline-flex items-center gap-2.5 px-[18px] py-[11px] mb-8 bg-gradient-to-r from-green-200 via-green-100 to-green-100 text-black rounded-full shadow-lg">
                                <Star className="w-4 h-4 text-white fill-white" />
                                <span className="">
                                    {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                                </span>
                            </div>
                        </FadeIn>

                        <FadeIn delay={100}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
                                FullStack Web Devloper Protfolio
                            </h1>
                        </FadeIn>

                        <FadeIn delay={200}>
                            <p className="text-lg text-white/70 max-w-[550px] mb-8">
                                Building Modern, scalable web applications with React, JavaScript and cutting-edge technologies. Transforming ideas into exceptional dgitial exprties.
                            </p>
                        </FadeIn>

                        <FadeIn delay={300}>
                            <button onClick={() => scrollToSection("contact")} className="inline-flex items-center gap-0 mb-12 group">

                                <div className="relative z-10 bg-white text-[#212121] rounded-[17px] px-[26px] py-[13px] text-based font-medium border border-white">
                                    Get in Touch
                                </div>
                            </button>
                        </FadeIn>

                        <FadeIn delay={400}>
                            <div className="">
                                { }
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column - Devloper Image */}
                    <FadeIn delay={200}>
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-2xl aspect-4/5 max-w-[500px] ml-auto group">
                                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                    <div className="absolute inset-[-6px]
  bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500
  animate-spin-slow blur-xl opacity-70 rounded-2xl">

                                    </div>
                                </div>

                                {/* Image Container */}
                                <div className="relative rounded-2xl overflow-hidden m-[1px] h-[calc(100%-2px)]">
                                    <img src="/devloper-portrait.png" alt="Devloper at work"
                                    className="w-full h-full object-cover" 
                                    />
                                </div>

                                {/* Technology Logos */}
                                <div className="absolute bottom-6 left-6 z-20">
                                    <FadeIn delay={500}>
                                        <div className="flex items-center gap-6 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-6 py-4">
                                            <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                                <SiReact className="w-full h-full text-[#22C55E]" />
                                            </div>

                                            <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                                <SiNextdotjs className="w-full h-full text-[#22C55E]" />
                                            </div>

                                            <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                                <SiNodedotjs className="w-full h-full text-[#22C55E]" />
                                            </div>

                                            <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                                <SiTailwindcss className="w-full h-full text-[#22C55E]" />
                                            </div>

                                            <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                                <SiMongodb className="w-full h-full text-[#22C55E]" />
                                            </div>
                                        </div>
                                    </FadeIn>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Scroll Indicater */}
            <button
            onClick={() => scrollToSection('about')}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <ChevronDown className="w-8 h-8 text-[#22C55E]"/>
            </button>
        </section>
    )
}

export default Hero