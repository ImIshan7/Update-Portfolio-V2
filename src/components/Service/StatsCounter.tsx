import { motion } from 'framer-motion';
import { Users, Briefcase, Code2, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

interface CounterProps {
    end: number;
    duration: number;
    suffix?: string;
}

function Counter({ end, duration, suffix = '' }: CounterProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const updateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            setCount(Math.floor(end * percentage));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(updateCount);
            }
        };

        animationFrame = requestAnimationFrame(updateCount);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <span>{count}{suffix}</span>;
}

export function StatsCounter() {
    return (
        <div className="py-16 relative">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 blur-3xl"
            />
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center"
                >
                    <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm mb-4">
                        <Briefcase className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div className="text-4xl font-bold mb-2">
                        <Counter end={250} duration={2000} suffix="+" />
                    </div>
                    <div className="text-gray-400">Projects Completed</div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-col items-center text-center"
                >
                    <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm mb-4">
                        <Users className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="text-4xl font-bold mb-2">
                        <Counter end={150} duration={2000} suffix="+" />
                    </div>
                    <div className="text-gray-400">Happy Clients</div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col items-center text-center"
                >
                    <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm mb-4">
                        <Code2 className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div className="text-4xl font-bold mb-2">
                        <Counter end={500} duration={2000} suffix="k+" />
                    </div>
                    <div className="text-gray-400">Lines of Code</div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col items-center text-center"
                >
                    <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm mb-4">
                        <Award className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="text-4xl font-bold mb-2">
                        <Counter end={15} duration={2000} suffix="+" />
                    </div>
                    <div className="text-gray-400">Awards Won</div>
                </motion.div>
            </div>
        </div>
    );
}