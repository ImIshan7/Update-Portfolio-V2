import React from 'react';

interface ControlsProps {
    currentIndex: number;
    totalProjects: number;
    onPrev: () => void;
    onNext: () => void;
}

export const Controls = ({ currentIndex, totalProjects, onPrev, onNext }: ControlsProps) => (
    <div className="absolute bottom-6 xs:bottom-8 sm:bottom-16 right-2 xs:right-4 sm:right-8 md:right-16 flex items-center gap-1 xs:gap-2 md:gap-4">
        <button
            onClick={onPrev}
            className="w-8 h-8 xs:w-10 xs:h-10 md:w-12 md:h-12 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:bg-white/10 transition-colors"
        >
            ←
        </button>
        <button
            onClick={onNext}
            className="w-8 h-8 xs:w-10 xs:h-10 md:w-12 md:h-12 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:bg-white/10 transition-colors"
        >
            →
        </button>
        <div className="w-[100px] xs:w-[150px] sm:w-[200px] md:w-[500px] h-1 xs:h-2 md:h-3 flex items-center">
            <div className="w-full h-full bg-white/20">
                <div
                    className="h-full bg-yellow-500 transition-all duration-500"
                    style={{ width: `${((currentIndex + 1) / totalProjects) * 100}%` }}
                />
            </div>
        </div>
        <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white text-base xs:text-lg md:text-2xl font-bold">
            {currentIndex + 1}
        </div>
    </div>
);
