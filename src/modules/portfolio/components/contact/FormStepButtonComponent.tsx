import type {MouseEventHandler, ReactNode} from "react";

interface FormStepButtonComponentProps {
    busy?: boolean
    disabled: boolean,
    children: ReactNode,
    type?: HTMLButtonElement["type"],
    onClick?: MouseEventHandler<HTMLButtonElement>,
}

export function FormStepButtonComponent(props: FormStepButtonComponentProps) {
    const {children, disabled, busy, type, onClick} = props;

    return (
        <button type={type} disabled={disabled} onClick={onClick} aria-busy={busy}
                className="group btn text-button text-primary-foreground px-4 py-2 rounded-full border border-border bg-primary transition-colors focus-visible:ring-4 focus-visible:ring-ring focus-visible:outline-none"
        >
            {children}
        </button>
    )
}