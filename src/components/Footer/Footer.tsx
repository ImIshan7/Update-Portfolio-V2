import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Top Section with Gradient Separator */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                    </div>
                    <div className="relative flex justify-center">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4 text-sm text-gray-400">
              connect with me
            </span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-4">
                        <div id="contact" className="transform transition-all duration-300 hover:translate-x-2">
                            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Let's Connect
                            </h3>
                            <p className="text-sm text-gray-400 mt-2">
                                Feel free to reach out for collaborations or just a friendly hello
                            </p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <a
                                href="mailto:ishandhananjana61@gmail.com"
                                className="text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                            >
                                <Mail size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                                <span>ishandhananjana61@gmail.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col items-center md:items-end space-y-4">
                        {/* Social Links */}
                        <div className="flex items-center space-x-6">
                            <a
                                href="https://github.com/ImIshan7"
                                className="transform transition-all duration-300 hover:scale-110 hover:text-white hover:-translate-y-1"
                                aria-label="GitHub"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github size={20} className="hover:rotate-12 transition-transform" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ishan-dhananjana-615878226"
                                className="transform transition-all duration-300 hover:scale-110 hover:text-white hover:-translate-y-1"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin size={20} className="hover:rotate-12 transition-transform" />
                            </a>
                            <a
                                href="https://twitter.com/ishandananjay10"
                                className="transform transition-all duration-300 hover:scale-110 hover:text-white hover:-translate-y-1"
                                aria-label="Twitter"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter size={20} className="hover:rotate-12 transition-transform" />
                            </a>
                        </div>

                        {/* Copyright */}
                        <div className="text-center md:text-right">
                            <p className="text-sm group">
                                <span className="text-gray-400">© {currentYear} </span>
                                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">
                  All rights reserved
                </span>
                            </p>
                            <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-400 transition-colors duration-300">
                                Design By ISHAN
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}