import { useEffect, useRef } from 'react';

const SpiderWeb = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const points: Array<{ x: number; y: number }> = [];
        const numPoints = 20;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Reset points on resize
            points.length = 0;
            for (let i = 0; i < numPoints; i++) {
                points.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                });
            }
        };

        const drawWeb = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            points.forEach((point, i) => {
                points.forEach((otherPoint, j) => {
                    if (i !== j) {
                        const dx = point.x - otherPoint.x;
                        const dy = point.y - otherPoint.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < 200) {
                            ctx.beginPath();
                            ctx.moveTo(point.x, point.y);
                            ctx.lineTo(otherPoint.x, otherPoint.y);
                            ctx.strokeStyle = `rgba(16, 185, 129, ${0.1 * (1 - distance / 200)})`;
                            ctx.stroke();
                        }
                    }
                });
            });

            requestAnimationFrame(drawWeb);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        drawWeb();

        return () => window.removeEventListener('resize', resizeCanvas);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
        />
    );
};

export default SpiderWeb;