export interface ThemeGradients {
    divider: {
        dark: string;
        light: string;
    };
    accent: {
        dark: string;
        light: string;
    };
    text: {
        dark: string;
        light: string;
    };
}

export interface ThemeBackground {
    floatingElementColor1: string;
    floatingElementColor2: string;
    floatingElementColor3: string;
    floatingElementColor4: string;
    geometricShapeColor: string;
}

export interface ThemeVariant {
    primary: {
        dark: string;
        light: string;
    };
    accent: {
        dark: string;
        light: string;
    };
    bg: {
        dark: string;
        light: string;
    };
    card: {
        dark: string;
        light: string;
    };
    text: {
        dark: string;
        light: string;
    };
    textSecondary: {
        dark: string;
        light: string;
    };
    textMuted: {
        dark: string;
        light: string;
    };
    gradients: ThemeGradients;
    background: ThemeBackground;
    hex: string;
}

type ThemeName = 'blue' | 'purple' | 'green' | "orange";

export type ColorTheme = ThemeName;

export const colorThemes: Record<ColorTheme, ThemeVariant> = {
    blue: {
        primary: {dark: "from-blue-600 to-cyan-600", light: "from-blue-500 to-cyan-500"},
        accent: {dark: "text-blue-400", light: "text-blue-600"},
        bg: {dark: "from-slate-900 via-slate-800 to-slate-900", light: "from-slate-50 via-white to-slate-100"},
        card: {dark: "bg-slate-800/30 border-slate-700/30", light: "bg-white/70 border-slate-200/50"},
        text: {dark: "text-white", light: "text-slate-900"},
        textSecondary: {dark: "text-slate-300", light: "text-slate-600"},
        textMuted: {dark: "text-slate-400", light: "text-slate-500"},
        gradients: {
            divider: {
                dark: "via-blue-400",
                light: "via-blue-500"
            },
            accent: {
                dark: "via-cyan-400",
                light: "via-blue-500"
            },
            text: {
                dark: "from-white via-slate-200 to-slate-400",
                light: "from-slate-900 via-slate-700 to-slate-500"
            }
        },
        background: {
            floatingElementColor1: "bg-blue-400",
            floatingElementColor2: "bg-cyan-400",
            floatingElementColor3: "bg-blue-300",
            floatingElementColor4: "bg-cyan-300",
            geometricShapeColor: "border-blue-500/10"
        },
        hex: "#3b82f6"
    },
    purple: {
        primary: {dark: "from-purple-600 to-pink-600", light: "from-purple-500 to-pink-500"},
        accent: {dark: "text-purple-400", light: "text-purple-600"},
        bg: {dark: "from-slate-900 via-purple-900 to-slate-900", light: "from-purple-50 via-white to-fuchsia-50"},
        card: {dark: "bg-slate-800/30 border-purple-700/30", light: "bg-white/70 border-purple-200/50"},
        text: {dark: "text-white", light: "text-slate-900"},
        textSecondary: {dark: "text-slate-300", light: "text-slate-600"},
        textMuted: {dark: "text-slate-400", light: "text-slate-500"},
        gradients: {
            divider: {
                dark: "via-purple-400",
                light: "via-purple-500"
            },
            accent: {
                dark: "via-pink-400",
                light: "via-purple-500"
            },
            text: {
                dark: "from-white via-slate-200 to-slate-400",
                light: "from-slate-900 via-slate-700 to-slate-500"
            }
        },
        background: {
            floatingElementColor1: "bg-purple-400",
            floatingElementColor2: "bg-pink-400",
            floatingElementColor3: "bg-purple-300",
            floatingElementColor4: "bg-pink-300",
            geometricShapeColor: "border-purple-500/10"
        },
        hex: "#a855f7"
    },
    green: {
        primary: {dark: "from-green-600 to-emerald-600", light: "from-green-500 to-emerald-500"},
        accent: {dark: "text-green-400", light: "text-green-600"},
        bg: {dark: "from-slate-900 via-green-900 to-slate-900", light: "from-green-50 via-white to-emerald-50"},
        card: {dark: "bg-slate-800/30 border-green-700/30", light: "bg-white/70 border-green-200/50"},
        text: {dark: "text-white", light: "text-slate-900"},
        textSecondary: {dark: "text-slate-300", light: "text-slate-600"},
        textMuted: {dark: "text-slate-400", light: "text-slate-500"},
        gradients: {
            divider: {
                dark: "via-green-400",
                light: "via-green-500"
            },
            accent: {
                dark: "via-emerald-400",
                light: "via-green-500"
            },
            text: {
                dark: "from-white via-slate-200 to-slate-400",
                light: "from-slate-900 via-slate-700 to-slate-500"
            }
        },
        background: {
            floatingElementColor1: "bg-green-400",
            floatingElementColor2: "bg-emerald-400",
            floatingElementColor3: "bg-green-300",
            floatingElementColor4: "bg-emerald-300",
            geometricShapeColor: "border-green-500/10"
        },
        hex: "#22c55e"
    },
    orange: {
        primary: {dark: "from-orange-600 to-red-600", light: "from-orange-500 to-red-500"},
        accent: {dark: "text-orange-400", light: "text-orange-600"},
        bg: {dark: "from-slate-900 via-orange-900 to-slate-900", light: "from-orange-50 via-white to-red-50"},
        card: {dark: "bg-slate-800/30 border-orange-700/30", light: "bg-white/70 border-orange-200/50"},
        text: {dark: "text-white", light: "text-slate-900"},
        textSecondary: {dark: "text-slate-300", light: "text-slate-600"},
        textMuted: {dark: "text-slate-400", light: "text-slate-500"},
        gradients: {
            divider: {
                dark: "via-orange-400",
                light: "via-orange-500"
            },
            accent: {
                dark: "via-red-400",
                light: "via-orange-500"
            },
            text: {
                dark: "from-white via-slate-200 to-slate-400",
                light: "from-slate-900 via-slate-700 to-slate-500"
            }
        },
        background: {
            floatingElementColor1: "bg-orange-400",
            floatingElementColor2: "bg-red-400",
            floatingElementColor3: "bg-orange-300",
            floatingElementColor4: "bg-red-300",
            geometricShapeColor: "border-orange-500/10"
        },
        hex: "#f97316"
    },
}