import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    // Handle sticky navbar on scroll
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 30) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Smooth scrolling function
    const smoothScroll = ({event, targetId}: { event: any, targetId: any }) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 45,
                behavior: 'smooth'
            });
        }

        // Update active link
        const activeLinks = document.querySelectorAll('.navbar-nav .active');
        activeLinks.forEach(link => link.classList.remove('active'));
        event.currentTarget.classList.add('active');
    };

    return (
        <div id="nav" className={`absolute w-full top-8 z-10 transition duration-300 ease-in-out ${isSticky ? 'nav-sticky fixed bg-white bg-opacity-95 shadow-md' : ''}`}>
            <nav className="navbar navbar-expand-md bg-light navbar-light">
                <a href="https://htmlcodex.com/product-landing-page-template" className="navbar-brand text-black font-bold uppercase text-2xl">Drones</a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-between" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        {["Home", "Features", "Installation", "Products", "Reviews", "FAQs", "Contact"].map(item => (
                            <li className="nav-item" key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="nav-link text-gray-600 hover:text-black transition duration-300 ease-in-out relative"
                                    onClick={(e) => smoothScroll({event: e, targetId: item.toLowerCase()})} // Smooth scroll function
                                >
                                    {item}
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-600 transition-all duration-300 ease-in-out hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
