import { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await container?.refresh();
    }, []);

    return (
        <Particles
            className="absolute inset-0"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: 'transparent',
                    },
                },
                fpsLimit: 60,
                particles: {
                    color: {
                        value: '#10b981',
                    },
                    links: {
                        color: '#10b981',
                        distance: 150,
                        enable: true,
                        opacity: 0.3,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: 'none',
                        random: false,
                        straight: false,
                        outModes: {
                            default: 'bounce',
                        },
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.4,
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: 'repulse',
                        },
                        onClick: {
                            enable: true,
                            mode: 'push',
                        },
                        resize: true,
                    },
                    modes: {
                        repulse: {
                            distance: 150,
                            duration: 0.4,
                        },
                        push: {
                            quantity: 4,
                        },
                    },
                },
            }}
        />
    );
};

export default ParticlesBackground;