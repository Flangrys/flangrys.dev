import {motion} from "motion/react";

export function FormInvisiblePhaseComponent() {
    return (
        <motion.div
            key="idle"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="flex h-full min-h-60 items-center justify-center text-sm text-muted-foreground"
        >
            Seguí scrolleando…
        </motion.div>
    )
}