import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    Icon: LucideIcon;
    delay: number;
    imagePath: string;
}

export function ServiceCard({ title, description, Icon, delay, imagePath }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 lg:w-1/3 p-4"
        >
            <motion.div
                whileHover={{ y: -5 }}
                className="group h-full bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/10"
            >
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={imagePath}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: delay + 0.2 }}
                        className="absolute bottom-4 left-4 flex items-center"
                    >
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="p-3 rounded-xl bg-emerald-500/90 text-white backdrop-blur-sm"
                        >
                            <Icon size={24} />
                        </motion.div>
                        <h3 className="text-xl font-bold text-white ml-4">{title}</h3>
                    </motion.div>
                </div>
                <div className="p-6">
                    <p className="text-gray-300 leading-relaxed">{description}</p>
                </div>
            </motion.div>
        </motion.div>
    );
}