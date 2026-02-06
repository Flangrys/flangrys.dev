export const BUTTON_THEME_CLASSES = {
    light: "bg-indigo-200/75 text-indigo-800 outline-indigo-800 hover:bg-indigo-300",
    dark: "bg-indigo-900 text-indigo-100 outline-indigo-800 hover:bg-indigo-900/75"
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
