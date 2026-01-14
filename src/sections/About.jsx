import React from "react";
// import { useState } from "react";
import { Download, Code2, Sparkles } from "lucide-react";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si'
import { PERSONAL_INFO } from '../utils/constants';
import FadeIn from '../components/animations/FadeIn'
import RadialGradientBackground from "../components/backgrounds/RadialGradientBackground";

const About = () => {

    // Skills
    const skills = [
        { name: 'React.js', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4'},
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933'},
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248'},
    ];


    return (
       <section id="about" className="relative py-20 bg-black overflow-hidden">
        <RadialGradientBackground variant="about" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                {/* left Column - Content */}
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-8">
                        <FadeIn delay={60}>
                            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-[#22C55E]/30 bg-[#22C55E]/10 rounded-full w-fit">
                                <Code2 className="w-4 h-4 text-[#22C55E]" />
                                <span className="text-sm text-[#22C55E] font-medium">
                                    Full-Stack Devloper
                                </span>
                                <Sparkles className="w-4 h-4 text-[#22C55E]" />
                            </div>
                        </FadeIn>
                        
                        <FadeIn delay={100}>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Crafting Digital Experiences That Matter
                            </h2>
                        </FadeIn>

                        <FadeIn delay={200}>
                            <div className="">
                                {PERSONAL_INFO.bio.map((paragraph, index) => (
                                    <p key={index} className="text-base text-white/70 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </FadeIn>

                        {/* <FadeIn delay={300}>
                            <div className="">
                                {ABOUT_STATS.map((stat, index) => (
                                    <div key={index} className="">
                                        <div className=""></div>
                                        <div className="">
                                            {stat.value}
                                        </div>
                                        <p className="">
                                            {stat.label}
                                        </p>
                                    </div>
                                    
                                ))}
                            </div>
                        </FadeIn> */}

                        <FadeIn delay={400}>
                            <button onClick={() => window.open(PERSONAL_INFO.resume, '_blank')} className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-white/90 text-black rounded-full text-base font-medium transition-all duration-300 w-fit group">
                                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                                Download Resume
                            </button>
                        </FadeIn>
                    </div>
                </div>

                {/* Right Column - Content */}
                <FadeIn delay={200}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2 relative group">
                            <div className="absolute inset-0 bg-linear-to-br from-[#22C55E]/10 to-[#22C55E]/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#22C55E]/30 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[#22C55E]/10 rounded-xl">
                                        <Code2 className="w-6 h-6 text-[#22C55E]" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-white mb-2">Expertise</h3>
                                        <p className="text-sm text-white/70 leading-relaxed">
                                            Specialzed in building Scalable web applications with modern technologies and best practices.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-linear-to-br from-[#22C55E]/10 to-[#22C55E]/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#22C55E]/30 transition-all duration-300 h-full">
                                <div className="p-3 bg-[#22C55E]/10 rounded-xl w-fit mb-4">
                                    <Sparkles className="w-5 h-5 text-[#22C55E]" />
                                </div>
                                <h3 className="text-base font-semibold text-white mb-2">Clen Code</h3>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    Writing maintainable, well-documented code that scaled.
                                </p>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-linear-to-br from-[#22C55E]/10 to-[#22C55E]/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#22C55E]/30 transition-all duration-300 h-full">
                                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                                    <Download className="w-5 h-5 text-[#22C55E]" />
                                </div>
                                <h3 className="text-base font-semibold text-white mb-2">Performance</h3>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    Optimizing for speed and efficiency in every project.
                                </p>
                            </div>
                        </div>

                        <div className="col-span-2 relative group">
                            <div className="absolute inset-0 bg-linear-to-br from-[#22C55E]/10 to-[#22C55E]/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#22C55E]/30 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[#22C55E]/10 rounded-xl">
                                        <Code2 className="w-6 h-6 text-[#22C55E]" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-white mb-2">Expertise</h3>
                                        <p className="text-sm text-white/70 leading-relaxed">
                                            Specialzed in building Scalable web applications with modern technologies and best practices.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/* Skills Grid Section */}
            <FadeIn delay={500}>
                <div className="flex flex-col items-center gap-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-normal text-white mb-2">
                            Tech Stack & Expertise
                        </h3>
                        <p className="text-sm text-white/60">
                            Technologies I work with build amazing products
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl">
                        {skills.map((skills, index) => (
                            <div 
                                key={index}
                                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#22C55E]/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
                            >
                                <skills.icon className="text-3x text-[#22C55E]" />
                                <div className="text-sm text/white/80 font-medium text-center">
                                    {skills.name}
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absoluate inset-0 bg-linear-to-br from-[#22C55E]/0 to-[#22C55E]/0 group-hover:from-[#22C55E]/10 group-hover:to-[#22C55E]/10 rounded-2xl transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </div>
       </section>
    )
}

export default About