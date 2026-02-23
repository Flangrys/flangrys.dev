import type {AnchorHTMLAttributes, PropsWithChildren} from "react";

export interface LinkProps extends PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> {
    to: string;
}
