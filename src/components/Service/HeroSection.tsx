import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function HeroSection() {
    // Define the glow variants
    const glowVariants = {
        initial: { scale: 0.8, opacity: 0.5 },
        animate: {
            scale: 1.2,
            opacity: 0.8,
            transition: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 2,
            },
        },
    };

    // Define fade-in variants for text
    const fadeInVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    };

    // @ts-ignore
    return (
        <div className="relative overflow-hidden mb-20">
            {/* Background glow */}
           {/* <motion.div
                variants={glowVariants}
                initial="initial"
                animate="animate"
                className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-[100px]"></motion.div>*/}
            {/* Text content */}
            <motion.div
                initial="initial"
                animate="animate"
                variants={fadeInVariants} // Using fadeIn variants for this div
                transition={{ duration: 0.5 }}
                className="relative text-center pt-20 pb-12 px-4"
            >
                <motion.div
                    initial={{ scale: 0.5, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    className="inline-block mb-6"
                >
                    <Sparkles className="w-12 h-12 text-emerald-400 mx-auto mb-4 animate-pulse" />
                </motion.div>
                <motion.h1
                    variants={fadeInVariants} // Using fadeIn variants for the h1
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 mb-6"
                >
                    Our Services
                </motion.h1>
                <motion.p
                    variants={fadeInVariants} // Using fadeIn variants for the p
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.5 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
                >
                    Transforming ideas into digital reality with cutting-edge technology and creative solutions.
                </motion.p>
            </motion.div>
        </div>
    );
}
