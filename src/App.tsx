import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './assets/styles/styles.css';
import Timeline from './components/TimeLine';
import AboutSection from './components/AboutSection';
import TechStack from './components/TechStack';
import Navbar from './components/Navbar';
import SpiderWeb from './components/SpiderWeb';
import TypewriterText from './components/TypewriterText';
import { Github, Linkedin, Mail } from 'lucide-react';
import ParticleEffect from './components/ParticleEffect';
import { Typewriter } from 'react-simple-typewriter';
import mine from './assets/images/profile.png';

function App() {

    // @ts-ignore
    return (
        <>
            {/* Navbar */}
            
                <Navbar/>

            <div id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
                <ParticleEffect />
                <SpiderWeb />

                <div className="container mx-auto px-4 min-h-screen flex items-center relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
                        <div className="space-y-5 lg:space-y-7">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.6 }}
                                className="text-emerald-400 text-xl sm:text-2xl font-semibold tracking-wide"
                            >
                                WELCOME TO MY PORTFOLIO
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-snug lg:leading-tight"
                            >
                                Hi, I’m <span className="text-emerald-500">Ishan</span>, a <br />
                                <span className="text-emerald-400">
                <Typewriter
                    words={['Full Stack Developer', 'Freelancer']}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={60}
                    deleteSpeed={40}
                    delaySpeed={2000}
                />
              </span>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-md lg:max-w-xl"
                            >
                                With over 5 years of experience, I specialize in building responsive websites and modern web applications with a focus on user experience and innovative design.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="flex gap-4 sm:gap-6 pt-4 sm:pt-6"
                            >
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                                    <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                                </a>
                                <a href="mailto:contact@example.com" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                                </a>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="pt-5"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-emerald-500 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-emerald-400 transition-transform duration-300"
                                >
                                    Let’s Connect
                                </motion.button>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="relative hidden lg:block"
                        >
                            <motion.img
                                src={mine}
                                alt="Professional portrait"
                                className="rounded-2xl w-full max-w-md sm:max-w-lg mx-auto shadow-lg transition-transform duration-300 hover:scale-105"
                                whileHover={{ rotate: [0, 2, -2, 2, -2, 0], scale: 1.05 }}
                                transition={{ duration: 0.5, type: 'spring' }}
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




