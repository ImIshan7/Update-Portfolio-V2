import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialLinks = () => {
    const socialLinks = [
        {
            href: "https://github.com/ImIshan7",
            icon: Github,
            label: "GitHub"
        },
        {
            href: "https://www.linkedin.com/in/ishan-dhananjana-615878226",
            icon: Linkedin,
            label: "LinkedIn"
        },
        {
            href: "mailto:ishandhananjana61@gmail.com",
            icon: Mail,
            label: "Email"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center md:justify-start gap-4 sm:gap-6 pt-4 sm:pt-6"
        >
            {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
            ))}
        </motion.div>
    );
};

export default SocialLinks;