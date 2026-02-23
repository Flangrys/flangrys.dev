export const BUTTON_THEME_CLASSES = {
    light: "outline-slate-800 hover:outline-slate-400 hover:bg-slate-200 active:outline-slate-800 active:hover:outline-slate-400 active:bg-slate-200",
    dark: "outline-slate-600 hover:outline-slate-800 hover:bg-slate-800 active:outline-slate-800 active:hover:outline-slate-500 active:bg-slate-600"
} as const;

export const LINK_THEME_CLASSES = {
    light: {
        active: "outline-slate-800 hover:outline-slate-400 bg-slate-200",
        inactive: "outline-slate-800 hover:outline-slate-400 hover:bg-slate-200"
    },

    dark: {
        active: "outline-slate-600 hover:outline-slate-700 bg-slate-900",
        inactive: "outline-slate-600 hover:outline-slate-700 hover:bg-slate-900"
    },
} as const;
