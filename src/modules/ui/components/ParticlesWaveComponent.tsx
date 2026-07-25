import {motion, useReducedMotion} from "motion/react";
import {useEffect, useState} from "react";

interface Dot {
    x: number;
    y: number;
    col: number;
    row: number;
}

export default function ParticlesWaveComponent() {
    const reduce = useReducedMotion();
    const [mounted, setMounted] = useState(false);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(() => setMounted(true), []);

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
        <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
            style={{
                background:
                    "radial-gradient(ellipse at 20% 0%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 60%), radial-gradient(ellipse at 90% 100%, color-mix(in oklab, var(--accent) 14%, transparent), transparent 55%), var(--background)",
            }}
        >
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
                                    ? { duration: 6 + (dot.row % 4), repeat: Infinity, ease: "easeInOut", delay: phase * 0.3}
                                    : undefined
                            }
                        />
                    );
                })}
            </svg>
        </div>
    );
}