import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactInfo = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
        >
            <div>
                <p className="text-white text-lg font-semibold leading-relaxed">
                    Have something to say? We're here to help. Fill out the form or reach out through any of these channels.
                </p>
            </div>

            <div className="space-y-6">
                <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 text-neutral-200"
                >
                    <div className="bg-neutral-800 p-3 rounded-full">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <span>Galle, Sri Lanka</span>
                </motion.div>

                <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 text-neutral-200"
                >
                    <div className="bg-neutral-800 p-3 rounded-full">
                        <Mail className="w-5 h-5" />
                    </div>
                    <a href="mailto:ishandhananjana61@gmail.com" className="hover:text-white transition-colors">
                        ishandhananjana61@gmail.com
                    </a>
                </motion.div>

                <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 text-neutral-200"
                >
                    <div className="bg-neutral-800 p-3 rounded-full">
                        <Phone className="w-5 h-5" />
                    </div>
                    <a href="tel:+94771867407" className="hover:text-white transition-colors">
                        +94 771867407
                    </a>
                </motion.div>
            </div>

            <div className="mt-8">
                <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                    alt="Office Space"
                    className="rounded-lg object-cover h-48 w-full"
                />
            </div>
        </motion.div>
    );
};

export default ContactInfo;