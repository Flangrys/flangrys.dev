import {
    type TailwindBreakpointRange,
    TailwindPlacements,
    TailwindSizeBreakpoints,
    TailwindZIndexes
} from "./tailwind.consts.ts";

export type TailwindModifier<T extends string, K extends string> = T | `${T}-${K}`;


export type TailwindAutoModifier<K extends string> = TailwindModifier<K, "auto">;


export type TailwindFullModifier<K extends string> = TailwindModifier<K, "full">;


export type TailwindNumericModifier<T extends string, K extends number> =
    | TailwindModifier<T, `<${K}>`>
    | TailwindModifier<T, `[${K}]`>;


export type TailwindBreaks = typeof TailwindSizeBreakpoints[number];


export type TailwindZIndex = typeof TailwindZIndexes[number];


export type TailwindRows = typeof TailwindBreakpointRange[number];


export type TailwindCols = typeof TailwindBreakpointRange[number];


export type TailwindPlacements = typeof TailwindPlacements[number];
