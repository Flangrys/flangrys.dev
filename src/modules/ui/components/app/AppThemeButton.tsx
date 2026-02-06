import SvgThemeDark from "/src/assets/theme-dark.svg?react";
import SvgThemeLight from "/src/assets/theme-light.svg?react";
import {useThemeContext} from "../../hooks/useThemeContext.ts";
import {ButtonComponent} from "../buttons/ButtonComponent.tsx";

export default function AppThemeButton() {
    const {theme, toggleTheme} = useThemeContext();

    return (
        <div className="fixed bottom-4 right-4 z-20">
            <ButtonComponent onClick={toggleTheme}>
                {theme === 'light' ? <SvgThemeDark/> : <SvgThemeLight/>}
            </ButtonComponent>
        </div>
    )
}
