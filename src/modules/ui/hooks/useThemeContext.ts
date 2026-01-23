import {useContext} from "react";
import ThemeContext from "../contexts/ThemeContext.tsx";

export function useThemeContext() {
    return useContext(ThemeContext);
}
