import React from 'react';
import { School, GraduationCap, Calendar } from 'lucide-react';

const timelineData = [
    {
        year: "2024-2025",
        title: "Institute of Software Engineering",
        description: "I do my graduation here after completing my graduate diploma in software engineering course",
        level: "Degree Level",
        icon: GraduationCap
    },
    {
        year: "2022-2024",
        title: "Institute of Software Engineering",
        description: "After completing my high school education, I pursued a graduate diploma in software engineering course at the Institute of Software Engineering.",
        level: "HND Level",
        icon: GraduationCap
    },
    {
        year: "2018-2020",
        title: "Dr.Richard Pathirana College",
        description: "I did my advanced level education well here.",
        level: "Advanced Level",
        icon: School
    },
    {
        year: "2007-2017",
        title: "Yatalamaththa Maha Vidyalaya",
        description: "I did my primary and secondary education well here.",
        level: "Ordinary Level",
        icon: School
    }
];

const Timeline = () => {
    return (
        <div className="min-h-screen py-16 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none"></div>

            <h2 className="text-5xl font-bold text-center text-white mb-20 animate-title relative">
                <span className="text-2xl md:text-4xl font-bold text-white font-['Oswald']"> Educational Journey </span>
            </h2>

            <div className="max-w-6xl mx-auto relative">
                {timelineData.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={index}
                            className="timeline-item mb-16 opacity-0"
                            style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
                        >
                            <div className="flex items-start gap-8">
                                <div className="timeline-marker">
                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gray-900 to-purple-900 shadow-lg shadow-purple-500/20 transform transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-purple-500/20">
                                        <Icon className="w-8 h-8 text-purple-200" />
                                    </div>
                                    <div className="timeline-line"></div>
                                </div>

                                <div className="timeline-content bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 w-full max-w-3xl transform transition-all duration-500 hover:translate-x-2 border border-purple-500/20 shadow-xl hover:shadow-purple-500/10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Calendar className="w-5 h-5 text-purple-300" />
                                        <span className="text-lg font-semibold text-purple-200">{item.year}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>

                                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-800 to-purple-900/50 rounded-full border border-purple-500/20">
                    <span className="text-sm font-semibold text-purple-200">
                      {item.level}
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Timeline;