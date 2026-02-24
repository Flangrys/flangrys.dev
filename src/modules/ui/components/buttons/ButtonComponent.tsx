import type {ButtonProps} from "../../types/button-component.props.ts";
import {useThemedClasses} from "../../hooks/useThemedClasses.ts";

const ButtonThemeClasses = {
    light: "outline-slate-800 hover:outline-slate-400 hover:bg-slate-200 active:outline-slate-800 active:hover:outline-slate-400 active:bg-slate-200",
    dark: "outline-slate-600 hover:outline-slate-800 hover:bg-slate-800 active:outline-slate-800 active:hover:outline-slate-500 active:bg-slate-600"
}

export function ButtonComponent(props: ButtonProps) {
    const {children, onClick} = props;

    const themedClasses = useThemedClasses({button: ButtonThemeClasses});

    return (
        <button
            {...props}
            onClick={onClick}
            className={`px-4 py-2 outline rounded-full transition-all cursor-pointer ${themedClasses.button}`}
        >
            {children}
        </button>
    )
}
