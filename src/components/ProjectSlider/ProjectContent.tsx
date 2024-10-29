import React from 'react';
import { Github } from 'lucide-react';

interface ProjectContentProps {
    place: string;
    title: string;
    title2: string;
    description: string;
    technologies: string[];
    link: string;
}

export const ProjectContent = ({ place, title, title2, description, technologies, link }: ProjectContentProps) => (
    <div className="slide-content absolute left-2 xs:left-4 sm:left-8 lg:left-16 top-1/4 text-white max-w-full lg:max-w-xl p-2 xs:p-4 md:p-6 lg:p-0">
        <div className="w-4 h-1 bg-white rounded-full mb-1 xs:w-6 xs:mb-2 sm:w-8 sm:mb-4" />
        <div className="text-xs xs:text-sm sm:text-base font-medium mb-1 xs:mb-2">{place}</div>
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold mb-1 xs:mb-2 font-['Oswald']">{title}</h1>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold mb-2 xs:mb-4 font-['Oswald']">{title2}</h2>
        <p className="text-xs xs:text-sm sm:text-base lg:text-lg mb-4 xs:mb-6 text-gray-100">{description}</p>

        <div className="technologies mt-3 xs:mt-4 mb-4 xs:mb-6">
            <ul className="flex flex-wrap gap-1 xs:gap-2 mb-2 xs:mb-4">
                {technologies.map((tech, index) => (
                    <li
                        key={index}
                        className="flex items-center justify-center px-2 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 border border-white rounded-full text-[8px] xs:text-[10px] sm:text-xs uppercase text-gray-100 bg-gray-800 transition-colors hover:bg-yellow-500 hover:text-white cursor-pointer"
                    >
                        {tech}
                    </li>
                ))}
            </ul>
        </div>

        <div className="flex flex-col xs:flex-row items-center gap-2 xs:gap-4 sm:gap-6">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 xs:p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors"
            >
                <Github className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white" />
            </a>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 xs:px-4 xs:py-1.5 sm:px-6 sm:py-2.5 border border-white rounded-full text-[10px] xs:text-xs sm:text-sm uppercase text-white hover:bg-white/10 transition-colors"
            >
                View Project
            </a>
        </div>
    </div>
);
