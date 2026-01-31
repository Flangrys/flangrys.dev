import type {ButtonProps} from "../../types/props.interface.ts";
import {useThemeContext} from "../../hooks/useThemeContext.ts";
import {BUTTON_THEME_CLASSES} from "../../constants/button.consts.ts";

export function ButtonComponent(props: ButtonProps) {
    const {children} = props;
    const {theme} = useThemeContext();

    const buttonTheme = BUTTON_THEME_CLASSES[theme];

    return (
        <button className={`px-4 py-2 rounded-full ${buttonTheme} transition-all cursor-pointer`}>
            {children}
        </button>
    )
}
