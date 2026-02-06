export type TailwindModifier<T extends string, K extends string> = T | `${T}-${K}`;
export type TailwindNumericModifier<T extends string, K extends number> = T | `${T}-${K}` | `${T}-[${K}px]` | `${T}-<${K}>`;

export type TailwindAutoModifier<K extends string> = TailwindModifier<K, "auto">;
export type TailwindFullModifier<K extends string> = TailwindModifier<K, "full">;

export const TailwindSizeRange = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"] as const;
export const TailwindBreakpointRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
export const TailwindZIndexes = {
    "z0": 0,
    "z10": 10,
    "z20": 20,
    "z30": 30,
    "z40": 40,
    "z50": 50,
} as const;

export type TailwindBreaks = typeof TailwindSizeRange[number];

export type TailwindZIndex = typeof TailwindZIndexes[keyof typeof TailwindZIndexes];

export type TailwindRows = typeof TailwindBreakpointRange[number];
export type TailwindCols = typeof TailwindBreakpointRange[number];

export type TailwindPlacements = "top" | "bottom" | "right" | "left" | "end" | "start";

export type TailwindPositions =
    | TailwindFullModifier<"inset">
    | TailwindAutoModifier<"inset">
    | TailwindNumericModifier<"inset", 10 | 20 | 30 | 40 | 50>;
