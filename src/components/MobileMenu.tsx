import React from 'react';
import NavLink from './NavLink';
import { navItems } from './navData';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    return (
        <div
            className={`fixed inset-0 z-50 transform transition-all duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={onClose}
            />

            {/* Menu content */}
            <div className="absolute right-0 h-full w-64 bg-gray-900/95 shadow-xl">
                <div className="flex flex-col p-6 space-y-4">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            href={item.href}
                            onClick={onClose}
                            className="text-lg"
                        >
                            <item.icon className="w-4 h-4 mr-2" />
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;