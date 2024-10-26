import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import { navItems } from './navData';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <>
            <nav
                className={`fixed w-full z-40 transition-all duration-500 ${
                    scrolled
                        ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg shadow-black/5'
                        : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Logo />

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex md:items-center md:space-x-1">
                            {navItems.map((item) => (
                                <NavLink key={item.name} href={item.href}>
                                    <item.icon className="w-4 h-4 mr-1" />
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg text-white/90 hover:text-white 
                hover:bg-white/10 transition-colors duration-300 focus:outline-none"
                        >
                            {isOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};

export default Navbar;