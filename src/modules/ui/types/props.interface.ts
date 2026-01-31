import type {ReactNode} from "react";

export interface HasChildren {
    children?: ReactNode;
}

export interface ContainerProps extends HasChildren {
    className?: string;
}

export interface ButtonProps extends HasChildren {
    round?: string;
    roundSize?: string;
}

export interface LinkProps extends ButtonProps {
    location?: string;

    to: string;
}


export interface ErrorBoundaryProps {
    heading: string;
    summary: string;
    contact: string;
}

