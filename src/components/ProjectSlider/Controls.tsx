import React from 'react';

interface ControlsProps {
    currentIndex: number;
    totalProjects: number;
    onPrev: () => void;
    onNext: () => void;
}

export const Controls = ({ currentIndex, totalProjects, onPrev, onNext }: ControlsProps) => (
    <div className="absolute bottom-8 md:bottom-16 right-4 md:right-16 flex items-center gap-2 md:gap-4">
        <button
            onClick={onPrev}
            className="w-10 h-10 md:w-12 md:h-12 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:bg-white/10 transition-colors"
        >
            ←
        </button>
        <button
            onClick={onNext}
            className="w-10 h-10 md:w-12 md:h-12 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:bg-white/10 transition-colors"
        >
            →
        </button>
        <div className="w-[200px] md:w-[500px] h-2 md:h-12 flex items-center">
            <div className="w-full h-0.5 bg-white/20">
                <div
                    className="h-full bg-yellow-500 transition-all duration-500"
                    style={{ width: `${((currentIndex + 1) / totalProjects) * 100}%` }}
                />
            </div>
        </div>
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white text-xl md:text-2xl font-bold">
            {currentIndex + 1}
        </div>
    </div>
);
