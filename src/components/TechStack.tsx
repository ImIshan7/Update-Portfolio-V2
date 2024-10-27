import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TechItem {
    name: string;
    logo: string;
    category: 'languages' | 'frontend' | 'backend' | 'tools';
}

const techStack: TechItem[] = [
    // Languages
    {
        name: 'Java',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        category: 'languages'
    },
    {
        name: 'JavaScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        category: 'languages'
    },
    {
        name: 'TypeScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        category: 'languages'
    },
    {
        name: 'HTML5',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        category: 'frontend'
    },
    {
        name: 'CSS3',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        category: 'frontend'
    },
    // Frontend
    {
        name: 'React',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        category: 'frontend'
    },
    {
        name: 'Angular',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        category: 'frontend'
    },
    {
        name: 'Tailwind CSS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        category: 'frontend'
    },
    {
        name: 'Bootstrap',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        category: 'frontend'
    },
    // Backend & Database
    {
        name: 'Node.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        category: 'backend'
    },
    {
        name: 'Spring Boot',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        category: 'backend'
    },
    {
        name: 'MySQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        category: 'backend'
    },
    {
        name: 'MongoDB',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        category: 'backend'
    },
    {
        name: 'Firebase',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
        category: 'backend'
    },
    {
        name: 'Tomcat',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg',
        category: 'backend'
    },
    // Tools
    {
        name: 'Git',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        category: 'tools'
    },
    {
        name: 'GitHub',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        category: 'tools'
    },
    {
        name: 'VS Code',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        category: 'tools'
    },
    {
        name: 'IntelliJ IDEA',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
        category: 'tools'
    },
    {
        name: 'Figma',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        category: 'tools'
    }
];

const categories = [
    { id: 'languages', name: 'Programming Languages' },
    { id: 'frontend', name: 'Frontend Development' },
    { id: 'backend', name: 'Backend & Database' },
    { id: 'tools', name: 'Development Tools' }
];

const TechStack = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-white font-['Oswald']">Technical Expertise</h2>
                </motion.div>

                {categories.map((category) => (
                    <div key={category.id} className="mb-16">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl font-semibold text-white mb-8 border-l-4 border-purple-500 pl-4"
                        >
                            {category.name}
                        </motion.h3>

                        <motion.div
                            ref={ref}
                            variants={containerVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
                        >
                            {techStack
                                .filter((tech) => tech.category === category.id)
                                .map((tech) => (
                                    <motion.div
                                        key={tech.name}
                                        variants={itemVariants}
                                        className="relative group"
                                    >
                                        <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 transform transition-all duration-300 hover:scale-110 hover:shadow-2xl border border-gray-700/50 hover:border-purple-500/50">
                                            <div className="flex items-center justify-center mb-4">
                                                <div className="w-16 h-16 relative group-hover:animate-bounce">
                                                    <img
                                                        src={tech.logo}
                                                        alt={tech.name}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                            </div>
                                            <h3 className="text-lg font-semibold text-white text-center">
                                                {tech.name}
                                            </h3>
                                        </div>
                                    </motion.div>
                                ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;