import {useThemeContext} from "../../hooks/useThemeContext.ts";
import {BUTTON_THEME_CLASSES} from "../../constants/button.consts.ts";
import type {ButtonHTMLAttributes, PropsWithChildren} from "react";
import type {ButtonVariant} from "../../types/theme.interface.ts";

interface ButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
    variant?: ButtonVariant;
}

export function ButtonComponent(props: ButtonProps) {
    const {children, onClick} = props;
    const {theme} = useThemeContext();

    const buttonTheme = BUTTON_THEME_CLASSES[theme];

    return (
        <button
            {...props}
            onClick={onClick}
            className={`px-4 py-2 outline rounded-full ${buttonTheme} transition-all cursor-pointer`}
        >
            {children}
        </button>
    )
}
