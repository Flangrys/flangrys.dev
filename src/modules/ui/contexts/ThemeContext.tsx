import {createContext} from "react";
import {type ThemeContextType} from "../types/theme.interface.ts";


const ThemeContext = createContext<ThemeContextType>({
    theme: "dark"
});

export default ThemeContext;
