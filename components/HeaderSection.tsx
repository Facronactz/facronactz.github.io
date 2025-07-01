import React from "react";
import {ThemeVariant} from "@/data/theme";

interface HeaderSectionProps {
    currentPage: string | null;
    currentTheme: ThemeVariant & { mode: 'dark' | 'light' };
    roles: string[];
    currentRole: number;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
                                                         currentPage,
                                                         currentTheme,
                                                         roles,
                                                         currentRole,
                                                     }) => {
    return (
        <div className={`${currentPage ? "mb-8" : "mb-0"} header-animate lg:text-center`}>
            <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm mb-6 2xl:mb-8 border enhanced-button ${currentTheme.card[currentTheme.mode]}`}
            >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span
                    className={`text-sm ${currentTheme.textSecondary[currentTheme.mode]}`}>Available for opportunities</span>
            </div>

            <div className="relative text-center">
                <div
                    className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent ${currentTheme.gradients.divider[currentTheme.mode]} to-transparent`}
                ></div>
                <div
                    className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent ${currentTheme.gradients.accent[currentTheme.mode]} to-transparent`}
                ></div>

                <h1
                    className={`${currentPage ? "text-3xl lg:text-4xl 2xl:text-5xl" : "text-3xl lg:text-5xl 2xl:text-7xl"} font-bold mb-4 2xl:mb-6 bg-clip-text text-transparent bg-gradient-to-r ${currentTheme?.gradients?.text?.[currentTheme.mode] || 'from-white via-slate-200 to-slate-400'}`}
                >
                    Farro Axza Febsinatra Sofi'ie
                </h1>
            </div>

            <div className={`${currentPage ? "h-6" : "h-6 2xl:h-8"} text-center`}>
                <p
                    className={`${currentPage ? "text-base lg:text-lg" : "text-lg lg:text-xl 2xl:text-2xl"} ${currentTheme.textSecondary[currentTheme.mode]} role-text`}
                >
                    {roles[currentRole]}
                </p>
            </div>
        </div>
    );
};

export default HeaderSection;
