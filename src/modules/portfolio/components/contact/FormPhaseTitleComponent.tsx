interface FormPhaseTitleComponentProps {
    currentPhase: number;
    totalPhases: number;
    phaseLabel: string;
}

export function FormPhaseTitleComponent(props: FormPhaseTitleComponentProps) {
    const {currentPhase, totalPhases, phaseLabel} = props;

    const leftSide = String(currentPhase).padStart(2, "0");
    const rightSide = String(totalPhases).padStart(2, "0");

    return (
        <>
            <p className="text-lg md:text-base lg:text-sm text-primary font-mono">{leftSide} / {rightSide}</p>
            <p className="text-sm md:text-base lg:text-lg text-foreground font-medium">{phaseLabel}</p>
        </>
    )
}