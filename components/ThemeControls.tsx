import React from "react";
import { Moon, Palette, Settings, Sun } from "lucide-react";
import { colorThemes } from "@/data/theme";
import { ColorTheme, Theme, ThemeVariant } from "@/types/theme";

interface ThemeControlsProps {
    theme: Theme;
    currentTheme: ThemeVariant;
    changeTheme: (newTheme: Partial<Theme>) => void;
    showThemePanel: boolean;
    setShowThemePanel: (show: boolean) => void;
}

const ThemeControls: React.FC<ThemeControlsProps> = ({
    theme,
    currentTheme,
    changeTheme,
    showThemePanel,
    setShowThemePanel,
}) => {
    return (
        <>
            {/* Theme Controls */}
            <div className="fixed top-6 right-6 z-50 flex gap-3">
                <button
                    onClick={() => changeTheme({ mode: theme.mode === "dark" ? "light" : "dark" })}
                    className={`p-3 rounded-full ${currentTheme.card[theme.mode]} backdrop-blur-sm enhanced-button transition-all duration-300 border hover:scale-110`}
                >
                    {theme.mode === "dark" ? (
                        <Sun className={`w-5 h-5 ${currentTheme.accent[theme.mode]}`} />
                    ) : (
                        <Moon className={`w-5 h-5 ${currentTheme.accent[theme.mode]}`} />
                    )}
                </button>

                <button
                    onClick={() => setShowThemePanel(!showThemePanel)}
                    className={`p-3 rounded-full ${currentTheme.card[theme.mode]} backdrop-blur-sm enhanced-button transition-all duration-300 border hover:scale-110`}
                >
                    <Settings
                        className={`w-5 h-5 ${currentTheme.accent[theme.mode]} ${showThemePanel ? "rotate-90" : ""} transition-transform duration-300`}
                    />
                </button>
            </div>

            {/* Enhanced Theme Selection Panel */}
            <div
                className={`fixed top-20 right-6 z-40 transition-all duration-300 ${showThemePanel ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
            >
                <div
                    className={`p-4 rounded-2xl ${currentTheme.card[theme.mode]} backdrop-blur-sm border interactive-card`}>
                    <div className="flex items-center gap-2 mb-3">
                        <Palette className={`w-4 h-4 ${currentTheme.accent[theme.mode]}`} />
                        <span className={`text-sm font-medium ${currentTheme.textSecondary[theme.mode]}`}>Color Theme</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        {(Object.keys(colorThemes) as ColorTheme[]).map((colorTheme) => (
                            <button
                                key={colorTheme}
                                onClick={() => changeTheme({ colorTheme })}
                                className={`w-8 h-8 rounded-full enhanced-button transition-all duration-300 hover:scale-110 ${
                                    theme.colorTheme === colorTheme ? "ring-2 ring-offset-2 ring-offset-transparent" : ""
                                }`}
                                style={{
                                    background:
                                        colorTheme === "blue"
                                            ? "linear-gradient(135deg, #3b82f6, #06b6d4)"
                                            : colorTheme === "purple"
                                                ? "linear-gradient(135deg, #9333ea, #ec4899)"
                                                : colorTheme === "green"
                                                    ? "linear-gradient(135deg, #059669, #10b981)"
                                                    : "linear-gradient(135deg, #ea580c, #dc2626)",
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ThemeControls;
