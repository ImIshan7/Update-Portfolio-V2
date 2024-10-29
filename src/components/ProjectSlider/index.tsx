import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { projects } from './data';
import { ProjectContent } from './ProjectContent';
import { Controls } from './Controls';

export const ProjectSlider = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.slide-content', {
                opacity: 0,
                x: -100,
                duration: 1,
                ease: 'power3.out'
            });
        }, sliderRef);

        return () => ctx.revert();
    }, [currentIndex]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 7000);

        return () => clearInterval(intervalId);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const current = projects[currentIndex];

    return (
        <div id="projects" ref={sliderRef} className="relative min-h-screen bg-black overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-70" />
            </div>

            <div className="absolute top-2 xs:top-4 sm:top-8 left-1/2 transform -translate-x-1/2 z-10">
                <h1 className="text-lg xs:text-xl sm:text-2xl md:text-4xl font-bold text-white font-['Oswald']">MY PROJECTS</h1>
            </div>

            <ProjectContent {...current} />

            <Controls
                currentIndex={currentIndex}
                totalProjects={projects.length}
                onPrev={prevSlide}
                onNext={nextSlide}
            />
        </div>
    );
};
