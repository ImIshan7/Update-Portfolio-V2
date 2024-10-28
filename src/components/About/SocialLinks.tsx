import React from 'react';

const socialLinks = [
    { href: "https://www.facebook.com/ishan.danu.9", icon: "https://img.icons8.com/fluent/30/000000/facebook-new.png", label: "Facebook" },
    { href: "https://www.linkedin.com/in/ishan-dhananjana-615878226", icon: "https://img.icons8.com/fluent/30/000000/linkedin-2.png", label: "LinkedIn" },
    { href: "https://www.instagram.com/im_i__shan", icon: "https://img.icons8.com/fluent/30/000000/instagram-new.png", label: "Instagram" },
    { href: "https://twitter.com/ishandananjay10", icon: "https://img.icons8.com/fluent/30/000000/twitter.png", label: "Twitter" },
    { href: "https://github.com/ImIshan7", icon: "https://img.icons8.com/fluent/30/000000/github.png", label: "GitHub" }
];

const SocialLinks: React.FC = () => {
    return (
        <div className="mt-8 flex justify-center items-center space-x-4">
            {socialLinks.map((social, index) => (
                <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="social-icon-link"
                >
                    <img
                        src={social.icon}
                        alt={social.label}
                        className="w-8 h-8 transition-all duration-300 transform hover:scale-125"
                    />
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;