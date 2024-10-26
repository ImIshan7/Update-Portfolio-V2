import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { LoadingScreen } from './components/LoadingScreen';
import { AnimatedTitle } from './components/AnimatedTitle';
import './assets/styles/styles.css';
import back from './assets/images/back02.jpg'
import Timeline from './components/TimeLine';
import AboutSection from './components/AboutSection';
import TechStack from './components/TechStack';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import SpiderWeb from './components/SpiderWeb';
import TypewriterText from './components/TypewriterText';
import { Github, Linkedin, Mail } from 'lucide-react';
function App() {

    return (
        <>
            {/* Navbar */}
            
                <Navbar/>

            <div className="min-h-screen bg-black text-white relative overflow-hidden">
                <SpiderWeb />

                <div className="container mx-auto px-4 min-h-screen flex items-center relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                        <div className="space-y-6">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-emerald-400 text-xl"
                            >
                                <TypewriterText text="HI THERE," />
                            </motion.h2>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-6xl font-bold leading-tight"
                            >
                                <TypewriterText text="Full Stack Developer" delay={100} />

                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-gray-400 text-lg leading-relaxed max-w-xl"
                            >
                                <TypewriterText
                                    text="I'm a Web Developer with extensive experience for over 5 years. My expertise is to create and Websites design, graphic design and many more..."
                                    delay={50}
                                />
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="pt-4"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-emerald-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-emerald-400 transition-colors"
                                >
                                    Hire Me
                                </motion.button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="flex gap-6 pt-6"
                            >
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    <Github size={24} />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    <Linkedin size={24} />
                                </a>
                                <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors">
                                    <Mail size={24} />
                                </a>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="relative hidden lg:block"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
                                alt="Professional portrait"
                                className="rounded-2xl w-full max-w-lg mx-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            <div id="about" className="min-h-screen bg-[#0a0a0a] text-gray-100">
                <AboutSection />
            </div>


            <div className="min-h-screen bg-cover bg-center bg-fixed"
                 style={{
                     backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(23, 23, 23, 0.9)), 
           url('https://images.unsplash.com/photo-1534009916851-7850ba974f9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                 }}>
                <Timeline />
            </div>


            <TechStack/>


        </>
    );
}



export default App;




