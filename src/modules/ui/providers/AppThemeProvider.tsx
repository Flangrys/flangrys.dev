import ThemeContext from "../contexts/ThemeContext.tsx";
import type {Theme, ThemeProviderProps} from "../types/theme.interface.ts";
import {useEffect, useState} from "react";

export default function AppThemeProvider({children}: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme>(() => {

        if (!window) return 'light';

        const saved = localStorage.getItem('theme') as Theme;

        if (saved) return saved;

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        const root = document.documentElement;

        root.classList.remove('light', 'dark');
        root.classList.add(theme);

        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setThemeState(prev => prev === 'light' ? 'dark' : 'light');
    };

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}
