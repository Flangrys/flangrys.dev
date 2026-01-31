import {createContext} from "react";
import {type ThemeContextType} from "../types/theme.interface.ts";


const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => {
    },
    setTheme: () => {
    },
});

export default ThemeContext;
