import type {MotionlessComponentProps} from "@/types/MotionlessComponentProp.ts";
import {motion} from "motion/react";

export function DoneFormPhaseComponent(props: MotionlessComponentProps) {
    const {initialTransition} = props;

    return (
        <motion.div
            key="done"
            initial={initialTransition}
            animate={{opacity: 1, scale: 1}}
            className="flex h-full min-h-60 flex-col items-center justify-center text-center"
        >
            <div
                className="flex h-12 w-12 items-center justify-center rounded-full text-lg"
                style={{
                    background: "color-mix(in oklab, var(--primary) 18%, transparent)",
                    color: "var(--primary)",
                }}
            >
                ✓
            </div>
            <h3 className="mt-4 text-lg font-medium text-foreground">
                ¡Gracias! Tu respuesta fue recibida.
            </h3>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                Te contacto pronto a través de los canales que usaste para
                llegar acá.
            </p>
        </motion.div>
    )
}