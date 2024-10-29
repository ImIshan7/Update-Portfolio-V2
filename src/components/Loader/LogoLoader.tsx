import React from 'react';
import { Zap, Circle } from 'lucide-react';

const LogoLoader: React.FC = () => {
    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_center,_#222_0%,_#000_100%)] flex items-center justify-center p-4">
            {/* Main container with glass effect */}
            <div className="relative p-8 sm:p-12 md:p-16 lg:p-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                {/* Animated rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border-2 border-white/20 animate-[spin_3s_linear_infinite]" />
                    <div className="absolute w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full border-2 border-white/30 animate-[spin_2s_linear_infinite_reverse]" />
                    <div className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full border-2 border-white/40 animate-[spin_4s_linear_infinite]" />
                </div>

                {/* Center logo container */}
                <div className="relative flex items-center justify-center gap-2">
                    {/* Main logo */}
                    <Zap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white animate-pulse" strokeWidth={1.5} />
                    <Circle
                        className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white/20 animate-ping-slow"
                        strokeWidth={1}
                    />
                </div>
            </div>

            {/* Loading text */}
            <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-1/2 -translate-x-1/2">
                <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                    <div className="text-white/90 font-light tracking-[0.3em] text-xs sm:text-sm">
                        ISHAN
                    </div>
                    <div className="flex gap-1 sm:gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-white/80 animate-[bounce_1s_infinite]" style={{ animationDelay: '0s' }} />
                        <div className="w-1 h-1 rounded-full bg-white/80 animate-[bounce_1s_infinite]" style={{ animationDelay: '0.2s' }} />
                        <div className="w-1 h-1 rounded-full bg-white/80 animate-[bounce_1s_infinite]" style={{ animationDelay: '0.4s' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoLoader;