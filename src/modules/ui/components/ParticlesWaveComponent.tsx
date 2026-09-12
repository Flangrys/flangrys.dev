import {motion, useReducedMotion} from "motion/react";
import {useState} from "react";

interface Dot {
    x: number;
    y: number;
    col: number;
    row: number;
}

export default function ParticlesWaveComponent() {
    const reduce = useReducedMotion();
    const [mounted] = useState(true);

    const cols = 24;
    const rows = 14;
    const width = 1600;
    const height = 900;
    const stepX = width / (cols - 1);
    const stepY = height / (rows - 1);

    const dots: Dot[] = [];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            dots.push({x: col * stepX, y: row * stepY, col: col, row: row});
        }
    }

    return (
        <div aria-hidden className="fixed inset-0 -z-50 pointer-events-none bg-background-gradient">
            <svg
                viewBox={`0 0 ${width} ${height}`}
                preserveAspectRatio="xMidYMid slice"
                className="h-full w-full"
            >
                {dots.map((dot, index) => {
                    const phase = (dot.col / cols) * Math.PI * 2;
                    const amp = 10 + (dot.row % 3) * 4;
                    const useMotion = mounted && !reduce;
                    return (
                        <motion.circle
                            key={index}
                            cx={dot.x}
                            cy={dot.y}
                            r={1.2}
                            fill="currentColor"
                            className="text-primary"
                            style={{opacity: 0.18}}
                            animate={
                                useMotion
                                    ? {cy: [dot.y - amp, dot.y + amp, dot.y - amp]}
                                    : undefined
                            }
                            transition={
                                useMotion
                                    ? {
                                        duration: 6 + (dot.row % 4),
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: phase * 0.3
                                    }
                                    : undefined
                            }
                        />
                    );
                })}
            </svg>

            <div className="min-h-screen w-full relative">
                <div
                    className="absolute inset-0 -z-10"
                    style={{
                        background: `
         radial-gradient(ellipse 80% 60% at 5% 40%, rgba(175, 109, 255, 0.48), transparent 67%),
        radial-gradient(ellipse 70% 60% at 45% 45%, rgba(255, 100, 180, 0.41), transparent 67%),
        radial-gradient(ellipse 62% 52% at 83% 76%, rgba(255, 235, 170, 0.44), transparent 63%),
        radial-gradient(ellipse 60% 48% at 75% 20%, rgba(120, 190, 255, 0.36), transparent 66%),
        linear-gradient(45deg, #f7eaff 0%, #fde2ea 100%)`,
                    }}
                />
            </div>
        </div>
    );
}