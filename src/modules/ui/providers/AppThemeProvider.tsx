import ThemeContext from "../contexts/ThemeContext.tsx";
import type {Theme, ThemeProviderProps} from "../types/theme.interface.ts";
import {useEffect, useState} from "react";

export default function AppThemeProvider({children}: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme>(() => {
        return window.matchMedia('(prefers-color-scheme: light)').matches ? "light" : "dark"
    });

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
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
