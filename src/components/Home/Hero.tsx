import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import ParticleEffect from './ParticleEffect';
import SpiderWeb from './SpiderWeb';
import SocialLinks from './SocialLinks';
import mine from '../../assets/images/profile.png';
const Hero = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
            <ParticleEffect />
            <SpiderWeb />

            <div className="container mx-auto px-4 py-12 min-h-screen flex items-center relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
                    {/* Text Content */}
                    <div className="space-y-5 lg:space-y-7 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="text-emerald-400 text-xl sm:text-2xl font-semibold tracking-wide"
                        >
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                        >
                            <span className="text-emerald-500">Ishan</span>
                            <br />
                            <span className="text-emerald-400 h-[1.2em] inline-block">
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
                            className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed"
                        >
                            With over 5 years of experience, I specialize in building responsive websites
                            and modern web applications with a focus on user experience and innovative design.
                        </motion.p>

                        <SocialLinks />

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="pt-5"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={scrollToContact}
                                className="bg-emerald-500 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-emerald-400 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
                            >
                                Let's Connect
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full max-w-md mx-auto">
                            <motion.img
                                src={mine}
                                alt="Professional portrait"
                                className="rounded-2xl w-full shadow-xl transition-transform duration-300 hover:scale-105"
                                whileHover={{ rotate: [0, 2, -2, 2, -2, 0], scale: 1.05 }}
                                transition={{ duration: 0.5, type: 'spring' }}
                            />
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;