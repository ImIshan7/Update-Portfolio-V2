import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { LoadingScreen } from './components/LoadingScreen';
import { AnimatedTitle } from './components/AnimatedTitle';
import './assets/styles/styles.css';
import ast01 from './assets/images/pngwing.com.png'
import ast02 from './assets/images/pngwing.com (1).png'
import ast03 from './assets/images/pngwing.com (2).png'
import aboutback from './assets/images/aboutback.jpg'
import back from './assets/images/back02.jpg'
import Timeline from './components/TimeLine';
import AboutSection from './components/AboutSection';
function App() {
    const [loading, setLoading] = useState(true);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

    return (
        <>
            {/* Navbar */}


            <nav className="bg-black text-white py-3  px-4 flex items-center justify-between sticky top-0 z-50 w-full">
                <a className="font-extrabold font-mono text-white text-xl tracking-tight" href="#">ISHAN</a>
                <div className="hidden md:flex items-center space-x-4">
                    <a className="text-xl font-bold font-mono px-4 py-2 leading-none rounded-full hover:bg-gray-700"
                       href="#home">Home</a>
                    <a className="text-xl font-bold font-mono px-4 py-2 leading-none rounded-full hover:bg-gray-700"
                       href="#about">About</a>
                    <a className="text-xl font-bold font-mono px-4 py-2 leading-none rounded-full hover:bg-gray-700"
                       href="#project">Project</a>
                    <a className="text-xl font-bold font-mono px-4 py-2 leading-none rounded-full hover:bg-gray-700"
                       href="#service">Service</a>
                    <a className="text-xl font-bold font-mono px-4 py-2 leading-none rounded-full hover:bg-gray-700"
                       href="#contact">Contact</a>



                </div>

                {/* Hamburger Menu for Mobile */}
                <button
                    className="block md:hidden px-2 py-1 text-xl font-bold focus:outline-none"
                    onClick={toggleMobileMenu}
                >
                    ☰
                </button>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div
                        className="absolute  top-full left-0 right-0 bg-black md:hidden flex flex-col items-center space-y-4 py-4">
                        <a onClick={toggleMobileMenu}
                           className="text-xl font-bold font-mono px-4 py-2 rounded-full hover:bg-gray-700"
                           href="#home">Home</a>
                        <a onClick={toggleMobileMenu}
                           className="text-xl font-bold font-mono px-4 py-2 rounded-full hover:bg-gray-700"
                           href="#about">About</a>
                        <a onClick={toggleMobileMenu}
                           className="text-xl font-bold font-mono px-4 py-2 rounded-full hover:bg-gray-700"
                           href="#project">Project</a>
                        <a onClick={toggleMobileMenu}
                           className="text-xl font-bold font-mono px-4 py-2 rounded-full hover:bg-gray-700"
                           href="#service">Service</a>
                        <a onClick={toggleMobileMenu}
                           className="text-xl font-bold font-mono px-4 py-2 rounded-full hover:bg-gray-700"
                           href="#contact">Contact</a>
                    </div>
                )}
            </nav>

            <AnimatePresence>
                {loading && <LoadingScreen/>}
            </AnimatePresence>

            <div id="home" className="min-h-screen relative overflow-hidden text-white">
                {/* Background image with overlay */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${back})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed'
                    }}
                />
                <div className="absolute inset-0 bg-black/80 z-0"/>

                <div className="container mx-auto px-4 py-12 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-20">
                            <AnimatedTitle text="Full Stack Developer" delay={0.2}/>
                            <AnimatedTitle text="Entrepreneur" delay={0.4}/>
                            <AnimatedTitle text="Digital Creator" delay={0.6}/>

                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 0.8}}
                                className="text-xl md:text-2xl mt-8 mb-12 text-blue-400"
                            >
                                <Typewriter
                                    options={{
                                        strings: ['Give The Best Things For You and Modern Work Experience For Your Business'],
                                        autoStart: true,
                                        delay: 50,
                                    }}
                                />
                            </motion.div>

                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 1}}
                                className="flex gap-4 justify-center mb-16"
                            >
                                <motion.button
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                    className="px-8 py-3 bg-blue-600 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 relative overflow-hidden group"
                                >
                                    <span className="relative z-10">Hire Me</span>
                                    <motion.div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{
                                            background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.8) 0%, transparent 100%)',
                                        }}
                                    />
                                </motion.button>

                                <motion.button
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                    className="px-8 py-3 bg-transparent border-2 border-white rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    Contact Us
                                </motion.button>
                            </motion.div>
                        </div>

                        {/* Remove existing image and replace with astronaut PNGs */}
                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 1.8}}
                            className="relative group"
                        >
                            {/* Astronaut PNGs */}
                            <div className="relative">
                                {/* First Astronaut */}


                               {/* {<motion.img
                                    src={aboutback}
                                    alt="Astronaut 1"
                                    className="absolute top-0 left-0"
                                    animate={{y: [0, -20, 0], rotate: [0, 10, -10, 0]}}
                                    transition={{repeat: Infinity, duration: 6}}
                                />}*/}

                                {/* Second Astronaut */}

                                {/* <motion.img
                                    src={ast02}   // Your astronaut PNG source
                                    alt="Astronaut 2"
                                    className="absolute bottom-0 right-0"
                                    style={{
                                        width: '150px'     // Adjust the size of the astronaut image
                                    }}
                                    initial={{ x: 200, opacity: 0 }} // Start off-screen to the right
                                    animate={{ x: 0, opacity: 1 }}   // Move into the right side
                                    transition={{
                                        type: "spring",     // Smooth spring effect
                                        stiffness: 50,      // Adjust spring stiffness for bounce
                                        damping: 10,        // Adjust damping to control bounce effect
                                        duration: 1.5,      // Time it takes to pop into the screen
                                        repeat: Infinity,   // Repeats the hover animation infinitely
                                        repeatType: "mirror", // Makes the animation bounce back and forth
                                        repeatDelay: 1      // Adds delay between the animation repeats
                                    }}
                                    whileHover={{
                                        y: [0, -5, 0],      // Slight up and down hover effect
                                        rotate: [0, 10, -10, 0], // Slight rotation on hover
                                    }}
                                />*/}

                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Animated gradient overlay */}
                <motion.div
                    animate={{
                        background: [
                            'radial-gradient(circle at 0% 0%, rgba(29,78,216,0.15) 0%, transparent 50%)',
                            'radial-gradient(circle at 100% 100%, rgba(29,78,216,0.15) 0%, transparent 50%)',
                            'radial-gradient(circle at 0% 0%, rgba(29,78,216,0.15) 0%, transparent 50%)',
                        ],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 15,
                        ease: 'linear',
                    }}
                    className="absolute inset-0 z-10 pointer-events-none"
                />
            </div>

           {/* <div
                id="about"
                className="px-2 py-20 w-full flex justify-center bg-black bg-opacity-50"
                style={{
                    backgroundImage: `url(${aboutback})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay', // Blends with the black background
                    backgroundColor: 'rgba(0, 0, 0, 0.9)' // Black transparent overlay
                }}>
            </div>*/}

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
















        </>
    );
}



export default App;




