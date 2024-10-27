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
    <div className="slide-content absolute left-4 sm:left-8 lg:left-16 top-1/4 text-white max-w-full lg:max-w-xl p-4 md:p-6 lg:p-0">
        <div className="w-6 h-1 bg-white rounded-full mb-2 sm:w-8 sm:mb-4" />
        <div className="text-sm sm:text-base font-medium mb-2">{place}</div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-1 sm:mb-2 font-['Oswald']">{title}</h1>
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 font-['Oswald']">{title2}</h2>
        <p className="text-sm sm:text-base lg:text-lg mb-6 lg:mb-8 text-gray-100">{description}</p>

        <div className="technologies mt-4 mb-6">
            <ul className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                {technologies.map((tech, index) => (
                    <li
                        key={index}
                        className="flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 border border-white rounded-full text-[10px] sm:text-xs uppercase text-gray-100 bg-gray-800 transition-colors hover:bg-yellow-500 hover:text-white cursor-pointer"
                    >
                        {tech}
                    </li>
                ))}
            </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors"
            >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </a>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 sm:px-6 sm:py-2.5 border border-white rounded-full text-xs sm:text-sm uppercase text-white hover:bg-white/10 transition-colors"
            >
                View Project
            </a>
        </div>
    </div>
);
