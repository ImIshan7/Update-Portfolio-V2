
import './assets/styles/styles.css';
import Timeline from './components/Education/TimeLine';
import AboutSection from './components/About/AboutSection';
import TechStack from './components/TechStack/TechStack';
import Navbar from './components/Navbar/Navbar';
import {Boxes, Cloud, Code2, Database,  Layout, Smartphone } from 'lucide-react';
import { ProjectSlider } from './components/ProjectSlider';
import { StatsCounter } from './components/Service/StatsCounter';
import { ServiceCard } from './components/Service/ServiceCard';
import ContactForm from './components/Contact/ContactForm';
import Footer from './components/Footer/Footer';
import Hero from './components/Home/Hero';
import {useEffect, useState } from 'react';
import LogoLoader from './components/Loader/LogoLoader';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time (remove this in production and use real loading states)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LogoLoader/>;
    }


    const services = [
        {
            icon: Code2,
            title: "Web Development",
            description: "Custom web applications built with modern technologies and best practices for scalable, maintainable solutions.",
            image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800"
        },
        {
            icon: Smartphone,
            title: "Mobile Development",
            description: "Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
        },
        {
            icon: Cloud,
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure and services that power your applications with reliability and performance.",
            image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800"
        },
        {
            icon: Database,
            title: "Backend Development",
            description: "Robust and secure server-side solutions with optimized databases and API architectures.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
        },
        {
            icon: Layout,
            title: "UI/UX Design",
            description: "User-centered design solutions that combine aesthetics with functionality to create engaging digital experiences.",
            image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=800"
        },
        {
            icon: Boxes,
            title: "DevOps Services",
            description: "Streamlined development operations with automated workflows and continuous integration/deployment.",
            image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800"
        }

    ];



    /*const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };*/


    return (
        <>
            {/* Navbar */}

                <Navbar/>

            <main className="bg-black">
                <Hero />
            </main>


            <div id="about" className="min-h-screen bg-[#0a0a0a] text-gray-100">
                <AboutSection />
            </div>


            <div className="min-h-screen bg-cover bg-center bg-fixed"
                 style={{
                     backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(23, 23, 23, 0.9)), 
           url('https://images.unsplash.com/photo-1534009916851-7850ba974f9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                 }}>
                <Timeline />
            </div>


            <TechStack/>

            <ProjectSlider/>

            <div id="services" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16">
                <div className="max-w-7xl mx-auto px-4">

                    <h1 className="text-2xl md:text-4xl font-bold text-white text-center font-['Oswald']">Service</h1>

                    <StatsCounter />

                    <div className="flex flex-wrap -mx-4">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                Icon={service.icon}
                                title={service.title}
                                description={service.description}
                                delay={index * 0.1}
                                imagePath={service.image}
                            />
                        ))}
                    </div>
                </div>
            </div>


            <ContactForm/>

             <Footer/>


        </>
    );
}



export default App;




