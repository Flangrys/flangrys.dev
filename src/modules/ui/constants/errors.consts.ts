export const KnownBoundaryErrors = [
    "unknown", "Error",
] as const;

export type KnownBoundaryError = typeof KnownBoundaryErrors[number];
