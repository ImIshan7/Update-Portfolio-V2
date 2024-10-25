import React from 'react';
import headerImage from '../assets/images/pngwing.com (1).png'; // Update path as needed

const Header = () => {
    return (
        <div
            id="header"
            className="relative pt-48 pb-32 bg-gradient-to-b from-white to-white/50 bg-cover bg-center"
            style={{ backgroundImage: 'url(./assets/images/back02.jpg)' }}
        >
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:block hidden">
                        <div className="header-img">
                            <img src={headerImage} alt="Product" className="w-full transition-transform duration-500 hover:scale-105" />
                        </div>
                    </div>
                    <div className="md:w-1/2 text-left">
                        <div className="header-content">
                            <h2 className="text-6xl font-bold animate__animated animate__fadeIn">
                                View The World<br />
                                With <span className="text-black uppercase">Drones</span>
                            </h2>
                            <p className="text-gray-800 text-xl mt-4 animate__animated animate__fadeIn animate__delay-1s">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet ultricies
                            </p>
                            <a
                                href="https://htmlcodex.com/product-landing-page-template"
                                className="btn mt-6 px-8 py-2 text-gray-800 border-2 border-gray-800 transition duration-300 ease-in-out hover:bg-[#FFD662] hover:text-gray-800"
                            >
                                Buy Now
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:block hidden">
                        <div className="header-img">
                            <img src={headerImage} alt="Product" className="w-full transition-transform duration-500 hover:scale-105" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
