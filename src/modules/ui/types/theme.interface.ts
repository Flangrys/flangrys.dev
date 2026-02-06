import type {ReactNode} from "react";
import type {TailwindBreaks} from "./tailwind.types.ts";

export interface ThemeContextType {
    theme: Theme;

    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

export interface ThemeProviderProps {
    children: ReactNode;
}

export type Theme = "light" | "dark";

export type ButtonVariant = "default" | "info" | "success" | "warning" | "error" | "special";

export type ContainerVariant = TailwindBreaks;
