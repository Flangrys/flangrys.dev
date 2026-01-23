import {createContext} from "react";
import type {Theme} from "../types/theme.interface.ts";


interface ThemeContextType {
    theme: Theme;

    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => {},
    setTheme: () => {},
});

export default ThemeContext;
