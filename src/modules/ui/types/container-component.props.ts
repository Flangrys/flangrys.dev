import type {TailwindBreaks} from "./tailwind/tailwind.types.ts";
import type {HTMLAttributes, PropsWithChildren} from "react";

export interface ContainerProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
    size?: TailwindBreaks;
}
