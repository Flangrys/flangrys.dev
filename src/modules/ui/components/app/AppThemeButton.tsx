import SvgThemeDark from "/src/assets/theme-dark.svg?react";
import SvgThemeLight from "/src/assets/theme-light.svg?react";
import {useThemeContext} from "../../hooks/useThemeContext.ts";

export default function AppThemeButton() {
    const {theme, toggleTheme} = useThemeContext();

    const themeIcon = theme === 'light' ? <SvgThemeDark/> : <SvgThemeLight/>;

    return (
        <div className="fixed bottom-4 right-4 z-10">
            <button
                onClick={toggleTheme}
                className={"p-2 rounded-full shadow-lg"}
                aria-label="Cambiar tema"
            >{themeIcon}</button>
        </div>
    )
}
