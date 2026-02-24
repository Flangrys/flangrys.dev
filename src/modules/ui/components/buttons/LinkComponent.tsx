import {NavLink} from "react-router";
import {useThemedClasses} from "../../hooks/useThemedClasses.ts";
import type {LinkProps} from "../../types/link-component.props.ts";

const LinkComponentThemes = {
    buttonIdle: {
        light: "outline-slate-800 hover:outline-slate-400 hover:bg-slate-200",
        dark: "outline-slate-600 hover:outline-slate-700 hover:bg-slate-900"
    },

    buttonActive: {
        light: "outline-slate-800 hover:outline-slate-400 bg-slate-200",
        dark: "outline-slate-600 hover:outline-slate-700 bg-slate-900",
    }
}

export function LinkComponent(props: LinkProps) {
    const {children, to} = props;
    const themedClasses = useThemedClasses(LinkComponentThemes);

    return (
        <NavLink
            to={to}
            className={({isActive}) => {
                return `px-4 py-2 no-underline outline rounded-full transition-all cursor-pointer ${
                    isActive ? themedClasses.buttonActive : themedClasses.buttonIdle
                }`
            }}
        >
            {children}
        </NavLink>
    )
}
