export type TailwindBreaks = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";

export const TailwindAllowedColsAndRows = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] as const;
export type TailwindRows = typeof TailwindAllowedColsAndRows[number];
export type TailwindCols = typeof TailwindAllowedColsAndRows[number];
