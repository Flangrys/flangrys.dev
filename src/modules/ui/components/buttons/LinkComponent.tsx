import {Link} from "wouter";
import {useThemeContext} from "../../hooks/useThemeContext.ts";
import {LINK_THEME_CLASSES} from "../../constants/button.consts.ts";
import type {LinkProps} from "../../types/props.interface.ts";

export function LinkComponent(props: LinkProps) {
    const {children, to} = props;
    const {theme} = useThemeContext();

    const linkTheme = LINK_THEME_CLASSES[theme];

    return (
        <Link to={to} className={`px-4 py-2 outline rounded-full ${linkTheme} transition-all cursor-pointer`}>
            {children}
        </Link>
    )
}
