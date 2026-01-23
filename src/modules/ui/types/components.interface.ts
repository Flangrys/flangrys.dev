import type {ReactNode} from "react";
import type {TailwindBreaks, TailwindCols, TailwindRows} from "./tailwind.types.ts";

export interface ContainerProps {
    children?: ReactNode;
    className?: string;
}

export interface GridProps extends ContainerProps {
    rows: TailwindRows;
    columns: TailwindCols;

    gap?: TailwindBreaks;
}

export interface ButtonProps {
    children?: ReactNode;
}

export interface LinkButtonProps extends ButtonProps {
    to: string;
}

export interface NavButtonProps extends LinkButtonProps {
    location?: string;
}

