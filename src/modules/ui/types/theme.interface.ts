import type {ReactNode} from "react";

export interface ThemeContextType {
    theme: Theme;

    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

export interface ThemeProviderProps {
    children: ReactNode;
}

export type Theme = "light" | "dark";
