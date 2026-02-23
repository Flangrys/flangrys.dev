import type {PropsWithChildren} from "react";
import {useThemedClasses} from "../../ui/hooks/useThemedClasses.ts";

interface TagComponentProps {

}

export function TagComponent(props: PropsWithChildren<TagComponentProps>) {
    const {children} = props;

    const themedClasse = useThemedClasses({
        border: {light: "border-slate-300 group-hover:border-slate-400", dark: "border-slate-800 group-hover:border-slate-700"},
    });

    return (
        <span className={`text-xs px-3 py-1 rounded-full border ${themedClasse.border} transition-colors duration-300`}>
            {children}
        </span>
    );
}
