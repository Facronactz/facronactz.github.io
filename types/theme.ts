export type ColorTheme = "blue" | "purple" | "green" | "orange";
export type Mode = "dark" | "light";

export interface Theme {
    mode: Mode;
    colorTheme: ColorTheme;
}
