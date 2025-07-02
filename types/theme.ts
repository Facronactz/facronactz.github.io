export type ColorTheme = "blue" | "purple" | "green" | "orange";
export type Mode = "dark" | "light";

export interface ThemeVariant {
    bg: { dark: string; light: string };
    text: { dark: string; light: string };
    textSecondary: { dark: string; light: string };
    textMuted: { dark: string; light: string };
    accent: { dark: string; light: string };
    card: { dark: string; light: string };
    gradients: {
        divider: { dark: string; light: string };
        accent: { dark: string; light: string };
        text: { dark: string; light: string };
    };
}

export interface Theme {
    mode: Mode;
    colorTheme: ColorTheme;
}
