import React from "react";
import * as Icons from "lucide-react";

const ProjectCard = ({project}) => {
    const { title, description, image, technology, demoUrl, githubUrl } = project;

    // Select available icons (some packages export slightly different names)
    const GithubIcon = Icons.Github || Icons.GitHub || Icons.GithubIcon || null;
    const TrendingUpIcon = Icons.TrendingUp || null;


    return (
        <div className="group relative bg-white/5 border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
            <img 
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            /> 

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transpernt opacity-20 group-hover:opacity-40 transition-opacity duration-300" />

            <div className="absolute bottom-4 right-4 flex items-center gap-3">
                {demoUrl && (
                    <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-[#22C55E]/30 hover:border-[#22C55E]/50 transition-all duration-300 hover:scale-110"
                        title="View Demo"
                    >
                        <Icons.ExternalLink className="w-4 h-4 text-white"/>
                    </a>
                )}
                {githubUrl && GithubIcon && (
                    <a 
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-[#22C55E]/30 hover:border-[#22C55E]/50 transition-all duration-300 hover:scale-110"
                        title="View Code"
                    >
                        <GithubIcon className="w-4 h-4 text-white"/>
                    </a>
                )}
            </div>

            <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-medium text-white bg-black/40 backdrop-blur-sm border border-white/20 rounded-full">
                    {project.category}
                </span>
            </div>

            <div className="p-6 space-y-4">
                <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#A8FF8D] transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
                        {description}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2 ">
                    {technology.map((tech, index) => (
                        <span
                            key={index} 
                            className="px-3 py-1 text-xs font-medium text-[#22C55E] bg-[#22C55E]/10 border border-primary/20 rounded-lg hover:bg-[#22C55E]/20 transition-colors duration-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                {/* {project.metrics && (
                    <div className="">
                        {TrendingUpIcon && <TrendingUpIcon className="" />}
                        <p className="">{project.metrics}</p>
                    </div>
                )} */}

            </div>
        </div>

    )
}

export default ProjectCard