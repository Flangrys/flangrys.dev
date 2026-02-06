import type {AnchorHTMLAttributes, HTMLAttributes, PropsWithChildren} from "react";
import type {ContainerVariant} from "./theme.interface.ts";

export interface ContainerProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
    variant?: ContainerVariant;
}

export interface LinkProps extends PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> {
    to: string;
}
