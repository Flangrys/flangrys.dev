import ThemeContext from "../contexts/ThemeContext.tsx";
import type {Theme, ThemeProviderProps} from "../types/theme.interface.ts";
import {useEffect, useState} from "react";

export default function AppThemeProvider({children}: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme>(() => {
        if (!window) return "dark";

        const savedTheme = window.localStorage.getItem('theme');

        switch (savedTheme) {
            case "light":
            case "dark":
                return savedTheme;

            default:
                return "dark";
        }
    });

    useEffect(() => {
        if (!window) return;

        const root = document.documentElement;

        root.classList.remove('light', 'dark');
        root.classList.add(theme);

        localStorage.setItem('theme', theme);
    }, [theme]);

    function toggleTheme() {
        setThemeState(prev => prev == "light" ? "dark" : "light");
    }

    function setTheme(newTheme: Theme) {
        setThemeState(newTheme);
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}
