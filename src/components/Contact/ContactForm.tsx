import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import ContactInfo from './ContactInfo';
import FormInput from './FormInput';
import { EMAILJS_CONFIG } from './emailjs';

interface FormData {
    user_name: string;
    user_email: string;
    message: string;
    reply_to: string; // Added for EmailJS auto-response
}

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState<FormData>({
        user_name: '',
        user_email: '',
        message: '',
        reply_to: '', // Will be set to user's email
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsSubmitting(true);

        // Set reply_to to user's email for auto-response
        const templateParams = {
            ...formData,
            reply_to: formData.user_email,
        };

        try {
            // Send email to you (the owner)
            const result = await emailjs.sendForm(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                formRef.current
            );

            if (result.status === 200) {
                // Send auto-response to the user
                await emailjs.send(
                    EMAILJS_CONFIG.serviceId,
                    EMAILJS_CONFIG.autoReplyTemplateId,
                    templateParams
                );

                toast.success('Message sent successfully! Check your email for confirmation.');
                setFormData({ user_name: '', user_email: '', message: '', reply_to: '' });
            }
        } catch (error) {
            toast.error('Failed to send message. Please try again.');
            console.error('EmailJS Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
            reply_to: name === 'user_email' ? value : prev.reply_to,
        }));
    };

    return (
        <div id="contact" className="relative bg-black overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:500px_500px] animate-gradient"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="pt-16"
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-center  text-white font-['Oswald']"> Let's Connect </h2>

                </motion.div>

                <div className="mt-12 grid md:grid-cols-2 gap-x-8 gap-y-12 pb-16">
                    <ContactInfo />

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <FormInput
                                name="user_name"
                                value={formData.user_name}
                                onChange={handleChange}
                                placeholder="Full Name"
                            />

                            <FormInput
                                type="email"
                                name="user_email"
                                value={formData.user_email}
                                onChange={handleChange}
                                placeholder="Email Address"
                            />

                            <FormInput
                                type="textarea"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                rows={6}
                            />

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors duration-300 flex items-center justify-center space-x-2"
                            >
                                {isSubmitting ? (
                                    <div className="w-6 h-6 border-2 border-neutral-800 border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
            <Toaster position="top-right" />
        </div>
    );
};

export default ContactForm;