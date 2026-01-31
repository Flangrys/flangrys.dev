import SvgThemeDark from "/src/assets/theme-dark.svg?react";
import SvgThemeLight from "/src/assets/theme-light.svg?react";
import {useThemeContext} from "../../hooks/useThemeContext.ts";

export default function AppThemeButton() {
    const {theme, toggleTheme} = useThemeContext();

    const themeClasses = {
        light: "bg-indigo-200 text-indigo-800",
        dark: "bg-indigo-950 text-indigo-100",
    }

    return (
        <div className="fixed bottom-4 right-4 z-20">
            <button
                onClick={toggleTheme}
                className={`p-2 rounded-full shadow-lg ${themeClasses[theme]}`}
                aria-label="Cambiar tema"
            >
                {theme === 'light' ? <SvgThemeDark/> : <SvgThemeLight/>}
            </button>
        </div>
    )
}
