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
    <div className="slide-content absolute left-16 top-1/4 text-white max-w-xl">
        <div className="w-8 h-1 bg-white rounded-full mb-4" />
        <div className="text-lg font-medium mb-2">{place}</div>
        <h1 className="text-7xl font-bold mb-2 font-['Oswald']">{title}</h1>
        <h2 className="text-7xl font-bold mb-6 font-['Oswald']">{title2}</h2>
        <p className="text-lg mb-8 text-gray-100">{description}</p>

        <div className="technologies mt-4 mb-6">
            <ul className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, index) => (
                    <li
                        key={index}
                        className="flex items-center justify-center px-4 py-2 border border-white rounded-full text-xs uppercase text-gray-100 bg-gray-800 transition-colors hover:bg-yellow-500 hover:text-white cursor-pointer"
                    >
                        {tech}
                    </li>
                ))}
            </ul>
        </div>

        <div className="flex items-center gap-6">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors"
            >
                <Github className="w-5 h-5 text-white" />
            </a>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 border border-white rounded-full text-sm uppercase text-white hover:bg-white/10 transition-colors"
            >
                View Project
            </a>
        </div>

    </div>
);
