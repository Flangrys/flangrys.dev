import SVGArrowDownIcon from "/src/assets/arrow-down-icon.svg?react";
import * as motion from "motion/react-client";

export function HeroScrollDownLinkComponent() {
    return (
        <motion.a
            href="#about"
            animate={{
                y: [0, 10, 0],
            }}
            transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className="flex items-center justify-center size-16 lg:size-10 p-2 rounded-full text-secondary bg-primary hover:bg-accent transition-colors"
        >
            <SVGArrowDownIcon className="size-10 lg:size-8"/>
        </motion.a>
    )
}