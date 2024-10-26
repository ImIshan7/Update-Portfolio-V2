import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Point {
    x: number;
    y: number;
    connections: number[];
    vx: number;
    vy: number;
}

const SpiderWeb = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const pointsRef = useRef<Point[]>([]);

    const springConfig = { damping: 25, stiffness: 100 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (rect) {
                mouseX.set(e.clientX - rect.left);
                mouseY.set(e.clientY - rect.top);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const generatePoints = (count: number): Point[] => {
        const points: Point[] = [];
        const gridSize = Math.ceil(Math.sqrt(count));

        for (let i = 0; i < count; i++) {
            const gridX = (i % gridSize) / gridSize;
            const gridY = Math.floor(i / gridSize) / gridSize;

            points.push({
                x: (gridX * 80 + Math.random() * 20) + 10,
                y: (gridY * 80 + Math.random() * 20) + 10,
                connections: [],
                vx: (Math.random() - 0.5) * 0.1,
                vy: (Math.random() - 0.5) * 0.1
            });
        }

        points.forEach((point, i) => {
            const distances = points
                .map((p, index) => ({
                    index,
                    distance: Math.sqrt(
                        Math.pow(p.x - point.x, 2) + Math.pow(p.y - point.y, 2)
                    )
                }))
                .filter(p => p.index !== i)
                .sort((a, b) => a.distance - b.distance);

            const connectionCount = 2 + Math.floor(Math.random() * 3);
            point.connections = distances
                .slice(0, connectionCount)
                .map(d => d.index);
        });

        return points;
    };

    useEffect(() => {
        pointsRef.current = generatePoints(30);
        let animationFrame: number;

        const animate = () => {
            pointsRef.current = pointsRef.current.map(point => {
                // Update position based on velocity
                let newX = point.x + point.vx;
                let newY = point.y + point.vy;

                // Bounce off edges
                if (newX <= 10 || newX >= 90) point.vx *= -1;
                if (newY <= 10 || newY >= 90) point.vy *= -1;

                // Apply small random movement
                point.vx += (Math.random() - 0.5) * 0.02;
                point.vy += (Math.random() - 0.5) * 0.02;

                // Limit velocity
                point.vx = Math.max(Math.min(point.vx, 0.2), -0.2);
                point.vy = Math.max(Math.min(point.vy, 0.2), -0.2);

                return {
                    ...point,
                    x: Math.max(10, Math.min(90, newX)),
                    y: Math.max(10, Math.min(90, newY))
                };
            });

            containerRef.current?.querySelector('svg')?.replaceChildren();
            animationFrame = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animationFrame);
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="w-full h-full">
                <defs>
                    <radialGradient id="web-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" stopColor="rgba(16, 185, 129, 0.15)" />
                        <stop offset="100%" stopColor="rgba(16, 185, 129, 0.02)" />
                    </radialGradient>
                </defs>

                {pointsRef.current.map((point, i) =>
                    point.connections.map((connectionIndex, j) => (
                        <motion.line
                            key={`${i}-${j}`}
                            x1={`${point.x}%`}
                            y1={`${point.y}%`}
                            x2={`${pointsRef.current[connectionIndex].x}%`}
                            y2={`${pointsRef.current[connectionIndex].y}%`}
                            stroke="url(#web-gradient)"
                            strokeWidth="0.5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            transition={{ duration: 1 }}
                        />
                    ))
                )}

                {pointsRef.current.map((point, i) => (
                    <motion.circle
                        key={`point-${i}`}
                        cx={`${point.x}%`}
                        cy={`${point.y}%`}
                        r="1.5"
                        fill="#10b981"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.5 }}
                        transition={{ duration: 0.5 }}
                    />
                ))}

                <motion.circle
                    cx={x}
                    cy={y}
                    r="4"
                    fill="#10b981"
                    opacity={0.3}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                />
            </svg>
        </div>
    );
};

export default SpiderWeb;