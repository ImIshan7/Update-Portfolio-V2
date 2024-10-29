import React from 'react';
import { Sparkles } from 'lucide-react';

const Logo: React.FC = () => {
    const scrollToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <a href="#home" onClick={scrollToHome} className="group flex items-center gap-2 px-2">
            <Sparkles className="w-5 h-5 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
            <span className="text-xl font-bold bg-clip-text text-transparent
                bg-gradient-to-r from-purple-400 to-pink-400 group-hover:from-purple-500
                group-hover:to-pink-500 transition-all duration-300">
                ISHAN
            </span>
        </a>
    );
};

export default Logo;
