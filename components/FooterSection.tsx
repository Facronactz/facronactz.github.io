import React from "react";
import {Theme, ThemeVariant} from "@/types/theme";

interface FooterSectionProps {
    currentPage: string | null;
    currentTheme: ThemeVariant;
    handleNavigate: (page: string) => void;
    theme: Theme;
}

const FooterSection: React.FC<FooterSectionProps> = ({
    currentPage,
    currentTheme,
    handleNavigate,
    theme,
}) => {
    return (
        <footer className={`w-full ${currentPage ? "mt-4" : "mt-auto"} 2xl:pb-6`}>
            <div className="max-w-4xl mx-auto">
                <div
                    className={`border-t ${theme.mode === "dark" ? "border-slate-700/30" : "border00/30"} 2xl:pt-6`}
                >
                    <div
                        className="flex flex-col lg:flex-row items-center justify-between gap-4 2xl:gap-6 my-4">
                        <div className="text-center lg:text-left">
                            <h3 className={`text-base 2xl:text-lg font-semibold ${currentTheme.text[theme.mode]} mb-1 2xl:mb-2`}>
                                Farro Axza Febsinatra Sofi'ie
                            </h3>
                            <p className={`text-xs 2xl:text-sm ${currentTheme.textMuted[theme.mode]}`}>
                                Full Stack Developer & Tech Innovator
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-3 2xl:gap-4">
                            <a
                                href="mailto:facronactz@example.com"
                                className={`text-xs 2xl:text-sm ${currentTheme.textSecondary[theme.mode]} hover:${currentTheme.text[theme.mode]} transition-all duration-300 hover:scale-105`}
                            >
                                facronactz@example.com
                            </a>
                            <div className="flex items-center gap-3 2xl:gap-4">
                                <a
                                    href="https://linkedin.com/in/facronactzon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-xs 2xl:text-sm ${currentTheme.textSecondary[theme.mode]} hover:${currentTheme.text[theme.mode]} transition-all duration-300 hover:scale-105`}
                                    aria-label="LinkedIn Profile"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com/facronactzon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-xs 2xl:text-sm ${currentTheme.textSecondary[theme.mode]} hover:${currentTheme.text[theme.mode]} transition-all duration-300 hover:scale-105`}
                                    aria-label="GitHub Profile"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="py-2 2xl:mt-6 2xl:pt-6 border-t border-slate-700/20 text-center">
                        <p className={`text-xs ${currentTheme.textMuted[theme.mode]}`}>
                            © 2025 • Farro Axza Febsinatra Sofi'ie • All rights reserved •
                            <button
                                onClick={() => handleNavigate("online-profiles")}
                                className={`ml-1 hover:${currentTheme.textSecondary[theme.mode]} transition-all duration-300 underline hover:scale-105`}
                            >
                                View all profiles
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
