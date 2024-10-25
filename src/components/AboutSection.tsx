import React from 'react';
import { Github, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';
import AnimatedContent from './AnimatedContent';

const AboutSection: React.FC = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: "url('https://images.stockcake.com/public/1/9/a/19ad3bdd-03c7-48f5-ab63-ec53becb13e6_large/coding-late-hours-stockcake.jpg')",
                }}
            >
                {/* Dark overlay for better readability */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            </div>

            {/* Animated Gradient Orbs */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full filter blur-[100px] animate-pulse" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-[100px] animate-pulse" />
            </div>

            {/* Main Content */}
            <div className="relative container mx-auto px-4 py-20">
                <AnimatedContent>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            {/* Enhanced Image Column */}
                            <div className="relative group">
                                {/* Decorative elements */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-1000" />

                                {/* Main image container */}
                                <div className="relative">
                                    {/* Background pattern */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl"
                                         style={{
                                             backgroundImage: "radial-gradient(circle at 20px 20px, rgba(255,255,255,0.1) 2px, transparent 0)",
                                             backgroundSize: "40px 40px"
                                         }} />

                                    {/* Image wrapper */}
                                    <div className="relative aspect-square overflow-hidden rounded-2xl">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 to-pink-900/30 mix-blend-overlay" />
                                        <img
                                            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop"
                                            alt="Profile"
                                            className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110 group-hover:rotate-2"
                                        />
                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="space-y-8">
                                <div>
                                    <h1 className="text-5xl font-bold  font-mono mb-4 gradient-text">
                                        Who Am I?
                                    </h1>
                                    <h2 className="text-2xl font-semibold text-purple-300 mb-6">
                                        Ishan Dhananjana : A Journey of Passion
                                    </h2>
                                </div>

                                <div className="glass-effect rounded-xl p-6 space-y-4 shadow-xl">
                                    <p className="text-lg text-gray-200 leading-relaxed">
                                        In the charming city of Galle, Sri Lanka, my story unfolds with a vibrant
                                        tapestry of passion and purpose. Born on February 20, 2001, my journey is a testament
                                        to resilience and determination.
                                    </p>
                                    <p className="text-lg text-gray-200 leading-relaxed">
                                        From my early fascination with technology to freelance
                                        endeavors, my portfolio reflects creativity and commitment. This narrative inspires
                                        others to embrace their dreams and persevere against all odds.
                                    </p>
                                </div>

                                {/* Social Links */}
                                <div className="flex items-center justify-start space-x-6 pt-4">
                                    <SocialLink href="https://github.com/ImIshan7" icon={<Github className="w-6 h-6" />} />
                                    <SocialLink href="https://www.linkedin.com/in/ishan-dhananjana-615878226/" icon={<Linkedin className="w-6 h-6" />} />
                                    <SocialLink href="https://www.instagram.com/im_i__shan/" icon={<Instagram className="w-6 h-6" />} />
                                    <SocialLink href="https://twitter.com/ishandananjay10" icon={<Twitter className="w-6 h-6" />} />
                                    <SocialLink href="https://www.facebook.com/ishan.danu.9" icon={<Facebook className="w-6 h-6" />} />
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedContent>
            </div>
        </div>
    );
};

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon p-3 rounded-full glass-effect hover:bg-white/20"
    >
        {icon}
    </a>
);

export default AboutSection;