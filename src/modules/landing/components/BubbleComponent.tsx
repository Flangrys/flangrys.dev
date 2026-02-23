import {useThemedClasses} from "../../ui/hooks/useThemedClasses.ts";
import type {PropsWithChildren} from "react";

const BubbleColorThemes = {
    red: {light: "bg-red", dark: ""},
    orange: {light: "", dark: ""},
    yellow: {light: "", dark: ""},
    green: {light: "bg-green-400", dark: "bg-green-600"},
    blue: {light: "bg-blue-500", dark: "bg-blue-600"},
    indigo: {light: "bg-indigo-400", dark: "bg-indigo-500"},
    violet: {light: "", dark: ""},
    pink: {light: "", dark: ""},
}

type BubbleColorType = keyof typeof BubbleColorThemes;

interface BubbleComponentProps {
    color: BubbleColorType;
}

export function BubbleComponent(props: PropsWithChildren<BubbleComponentProps>) {
    const {color, children} = props;

    const themedClasses = useThemedClasses(BubbleColorThemes);

    return (
        <div className="flex items-center gap-2">
            <div className={`content-[' '] w-2 h-2 rounded-full animate-pulse ${themedClasses[color]}`}/>
            {children}
        </div>
    )
}
