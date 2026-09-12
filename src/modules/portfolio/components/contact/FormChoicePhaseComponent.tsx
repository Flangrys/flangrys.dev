import {type MouseEventHandler, type ReactNode} from "react";

interface FormChoicePhaseComponentProps {
    selected: boolean;

    children?: ReactNode;

    onClick?: MouseEventHandler<HTMLButtonElement>;
    formAction?: (data: FormData) => void;
}

export function FormChoicePhaseComponent(props: FormChoicePhaseComponentProps) {
    const {selected, children, onClick, formAction} = props;

    return (
        <button
            type="button"
            onClick={onClick}
            formAction={formAction}
            className="rounded-full px-4 py-2 text-sm transition-colors"
            style={{
                border: "1px solid color-mix(in oklab, var(--primary) 30%, transparent)",
                background: selected ? "var(--primary)" : "transparent",
                color: selected ? "var(--primary-foreground)" : "var(--foreground)",
            }}
        >
            {children}
        </button>

    )
}