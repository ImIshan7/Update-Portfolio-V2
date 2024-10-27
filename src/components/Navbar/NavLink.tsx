import React from 'react';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const NavLink = ({ href, children, onClick, className = '' }: NavLinkProps) => {
    return (
        <a
            href={href}
            onClick={onClick}
            className={`relative group px-4 py-2 text-white/90 font-medium text-sm tracking-wide 
      hover:text-white transition-colors duration-300 ${className}`}
        >
            {/* Animated background */}
            <span className="absolute inset-0 w-full h-full bg-white/0 group-hover:bg-white/5
        rounded-lg transition-all duration-300 transform origin-left"></span>

            {/* Text and hover line */}
            <span className="relative z-10 flex items-center gap-1">
        {children}
                <span className="h-[2px] w-0 group-hover:w-full absolute -bottom-1 left-0
          bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"></span>
      </span>
        </a>
    );
};

export default NavLink;