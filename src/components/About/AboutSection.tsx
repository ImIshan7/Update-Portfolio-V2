import React from 'react';
import { Github, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';
import AnimatedContent from '../About/AnimatedContent';
import about from '../../assets/images/mine.jpeg';

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
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            </div>

            {/* Animated Gradient Orbs */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-5 w-32 h-32 xs:w-48 xs:h-48 md:w-72 md:h-72 bg-purple-500/20 rounded-full filter blur-[80px] animate-pulse" />
                <div className="absolute bottom-10 right-5 w-32 h-32 xs:w-48 xs:h-48 md:w-72 md:h-72 bg-blue-500/20 rounded-full filter blur-[80px] animate-pulse" />
            </div>

            {/* Main Content */}
            <div className="relative container mx-auto px-4 py-12 xs:py-16 md:py-20">
                <AnimatedContent>
                    <div className="max-w-2xl sm:max-w-4xl lg:max-w-6xl mx-auto px-2 xs:px-4">
                        <div className="grid gap-6 xs:gap-8 lg:grid-cols-2 items-center">
                            {/* Image Column */}
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-1000" />
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl"
                                         style={{
                                             backgroundImage: "radial-gradient(circle at 20px 20px, rgba(255,255,255,0.1) 2px, transparent 0)",
                                             backgroundSize: "40px 40px"
                                         }}
                                    />
                                    <div className="relative aspect-square overflow-hidden rounded-2xl">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 to-pink-900/30 mix-blend-overlay" />
                                        <img
                                            src={about}
                                            alt="Profile"
                                            className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110 group-hover:rotate-2"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="space-y-4 xs:space-y-6 md:space-y-8">
                                <div>
                                    <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold font-mono mb-2 xs:mb-4 gradient-text">
                                        Who Am I?
                                    </h1>
                                    <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold text-purple-300 mb-4 xs:mb-6">
                                        Ishan Dhananjana: A Journey of Passion
                                    </h2>
                                </div>

                                <div className="glass-effect rounded-xl p-3 xs:p-4 sm:p-6 space-y-2 xs:space-y-3 md:space-y-4 shadow-xl">
                                    <p className="text-sm xs:text-base sm:text-lg text-gray-200 leading-relaxed">
                                        In the charming city of Galle, Sri Lanka, my story unfolds with a vibrant
                                        tapestry of passion and purpose. Born on February 20, 2001, my journey is a testament
                                        to resilience and determination.
                                    </p>
                                    <p className="text-sm xs:text-base sm:text-lg text-gray-200 leading-relaxed">
                                        From my early fascination with technology to freelance
                                        endeavors, my portfolio reflects creativity and commitment. This narrative inspires
                                        others to embrace their dreams and persevere against all odds.
                                    </p>
                                </div>

                                {/* Social Links */}
                                <div className="flex items-center justify-start space-x-3 xs:space-x-4 sm:space-x-6 pt-4">
                                    <SocialLink href="https://github.com/ImIshan7" icon={<Github className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />} />
                                    <SocialLink href="https://www.linkedin.com/in/ishan-dhananjana-615878226/" icon={<Linkedin className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />} />
                                    <SocialLink href="https://www.instagram.com/im_i__shan/" icon={<Instagram className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />} />
                                    <SocialLink href="https://twitter.com/ishandananjay10" icon={<Twitter className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />} />
                                    <SocialLink href="https://www.facebook.com/ishan.danu.9" icon={<Facebook className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />} />
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
        className="social-icon p-1 xs:p-2 sm:p-3 rounded-full glass-effect hover:bg-white/20"
    >
        {icon}
    </a>
);

export default AboutSection;
