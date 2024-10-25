import React, { useEffect, useRef } from 'react';
import { GraduationCap, School } from 'lucide-react';

interface TimelineItemProps {
    id: number;
    title: string;
    institution: string;
    period: string;
    description: string;
    level: string;
    isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
                                                       id,
                                                       institution,
                                                       period,
                                                       description,
                                                       level,
                                                       isLeft
                                                   }) => {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: '0px'
            }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
            if (itemRef.current) {
                observer.unobserve(itemRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={itemRef}
            className={`flex ${isLeft ? 'flex-row-reverse' : ''} items-center justify-center mb-16 group timeline-item-hidden`}
        >
            <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                <div className={`transform transition-all duration-500 group-hover:scale-105 ${isLeft ? 'slide-left' : 'slide-right'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                            {id <= 2 ? (
                                <School className="w-6 h-6 text-indigo-600 mr-2" />
                            ) : (
                                <GraduationCap className="w-6 h-6 text-indigo-600 mr-2" />
                            )}
                            <span className="text-sm font-semibold text-indigo-600">{period}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{institution}</h3>
                        <p className="text-gray-600 mb-4">{description}</p>
                        <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
              {level}
            </span>
                    </div>
                </div>
            </div>

            <div className="relative flex items-center justify-center w-12">
                <div className="w-8 h-8 bg-indigo-600 rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300"></div>
            </div>

            <div className="w-5/12"></div>
        </div>
    );
};

export default TimelineItem;