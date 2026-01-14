import React from "react";
import { skills } from '../data/skills';
import * as Icons from 'lucide-react'
import FadeIn from "../components/animations/FadeIn";

const Skills = () => {

    const skillCategories = {
        'Frontend Devlopment': [
            skills.find(s => s.name === 'React.js'),
            skills.find(s => s.name === 'Javascript'),
            skills.find(s => s.name === 'TypeScript'),
            skills.find(s => s.name === 'Next.js'),
            skills.find(s => s.name === 'Tailwind CSS'),
            skills.find(s => s.name === 'Redux'),
        ].filter(Boolean),
        'Backend & APIs': [
            skills.find(s => s.name === 'Node.js'),
            skills.find(s => s.name === 'REST APIs'),
            skills.find(s => s.name === 'Express.js'),
        ].filter(Boolean),
        'Cloud': [
            skills.find(s => s.name === 'Docker'),
            skills.find(s => s.name === 'CI/CD'),
            skills.find(s => s.name === 'Kubernates')
        ].filter(Boolean),
    };

    // Get proficiency percentage
    const getProficiencyLevel = (level) => {
        const levels = {
            'Beginer': 50,
            'Advanced': 90,
            'Intermediate': 70,
        }
        return levels[level] || 50;
    };

    //Get level color
    const getLevelColor = (level) => {
        const colors = {
            'Beginer': 'text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30',
            'Advanced': 'text-cyan-400 bg-cyan-500/20 border-cyan-500/30',
            'Intermediate': 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30'
        };
        return colors[level] || 'text-gray-400 bg-gray-500/20 border-gray-500/30'
    }


    return <section id="skills" className="relative py-20 bg-black overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={100}>
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full mb-3">
                        <Icons.Sparkles className="w-4 h-4 text-[#22C55E]" />
                        <span className="text-sm text-[#22C55E] font-medium">My Expertise</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
                        Skills & Technologies
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        A comprehensive overview of my technical skills and proficiency levels.
                    </p>
                </div>
            </FadeIn>

            {/* Skills Categories */}
            <div className="grid grid-cols-l lg:grid-cols-3 gap-8">
                {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => (
                    <FadeIn key={category} delay={categoryIndex * 100}>
                        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#22C55E]/30 transition-all duration-300 group">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                                <div className="w-1 h-8 bg-linear-to-b from-[#22C55E]/30 to-[#22C55E]/10 rounded-full"></div>
                                <h3 className="text-xl font-medium text-white">{category}</h3>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-5">
                                {categorySkills.map((skill) => {
                                    const IconComponent = Icons[skill.icon] || Icons.Code2;
                                    const proficiency = getProficiencyLevel(skill.level);

                                    return (
                                        <div key={skill.id} className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-white/5 rounded-lg">
                                                        <IconComponent className="w-4 h-4 text-[#22C55E]" />
                                                    </div>
                                                    <div className="text-sm font-medium text-white">
                                                        {skill.name}
                                                    </div>
                                                </div>
                                                <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(skill.level)}`}>
                                                {skill.level}
                                            </span>
                                            </div>
                                            <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                <div className="absolute top-0 left-0 h-full bg-linear-to-r from-[#22C55E]/10 to-[#22C55E]/80 rounded-full transition-all duration-100 ease-out" style={{width: `${proficiency}%`}}></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-linear-to-br from-[#22C55E]/0 to-[#22C55E]/5 group-hover:from-[#22C55E]/5 group-hover:to-[#22C55E]/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>

    </section>
}

export default Skills