import {useMemo} from "react";
import {useThemeContext} from "./useThemeContext.ts";

interface ThemeAttr {
    light: string;
    dark: string;
}

type ThemedClassesProps<T extends Record<string, ThemeAttr>> = T;

type ThemedClassesOut<T extends Record<string, ThemeAttr>> = {
    [K in keyof T]: string;
};


/**
 * A hook that retrieves the current theme for the provided attributes. In the
 * background, it reduces the provided attributes based on the current theme.
 *
 * In this example will suppose that the current theme is dark:
 * ```TypeScript
 * const themedClasses = useThemedClasses({
 *   container: { light: "bg-white", dark: "bg-gray-900" },
 *   button: { light: "text-blue-600", dark: "text-blue-400" }
 * });
 * ```
 *
 * Therefore, `themedClasses` will contain:
 * ```TypeScript
 * { container: "bg-gray-900", button: "text-blue-400" }
 * ```
 *
 * @param props - An object containing the theme attributes to be retrieved.
 * @returns An object containing the theme attributes but with the current theme applied.
 */
export function useThemedClasses<T extends Record<string, ThemeAttr>>(props: ThemedClassesProps<T>): ThemedClassesOut<T> {
    const {theme} = useThemeContext();

    const cachedReduce = useMemo(() =>
        Object.entries(props).reduce((acc, [key, value]) => {
            acc[key as keyof T] = value[theme];
            return acc;
        }, {} as ThemedClassesOut<T>), [props, theme]);

    return cachedReduce;
}
