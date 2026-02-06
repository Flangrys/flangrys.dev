import {useThemeContext} from "../../hooks/useThemeContext.ts";
import {LINK_THEME_CLASSES} from "../../constants/button.consts.ts";
import type {LinkProps} from "../../types/props.interface.ts";
import {Link, useLocation} from "react-router";

export function LinkComponent(props: LinkProps) {
    const {children, to} = props;
    const {theme} = useThemeContext();
    const location = useLocation();

    const linkStateTheme = location.pathname == to ? "active" : "inactive";
    const linkTheme = LINK_THEME_CLASSES[theme][linkStateTheme];

    return (
        <Link to={to} className={`px-4 py-2 no-underline outline rounded-full ${linkTheme} transition-all cursor-pointer`}>
            {children}
        </Link>
    )
}
