import React from "react";
import {Theme, ThemeVariant} from "@/types/theme";
import {biodata, socials} from "@/data/biodata";

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
            <div className="max-w-5xl mx-auto">
                <div
                    className={`border-t ${theme.mode === "dark" ? "border-slate-700/30" : "border00/30"} 2xl:pt-6`}
                >
                    <div
                        className="flex flex-col lg:flex-row items-center justify-between gap-4 2xl:gap-6 my-4">
                        <div className="text-center lg:text-left">
                            <h3 className={`text-base 2xl:text-lg font-semibold ${currentTheme.text[theme.mode]} mb-1 2xl:mb-2`}>
                                {biodata.name}
                            </h3>
                            <p className={`text-xs 2xl:text-sm ${currentTheme.textMuted[theme.mode]}`}>
                                {biodata.title}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-3 2xl:gap-4">
                            <a
                                href={`mailto:${biodata.email}`}
                                className={`text-xs 2xl:text-sm ${currentTheme.textSecondary[theme.mode]} hover:${currentTheme.text[theme.mode]} transition-all duration-300 hover:scale-105`}
                            >
                                {biodata.email}
                            </a>
                            <div className="flex items-center gap-3 2xl:gap-4">
                                <a
                                    href={socials[1].url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-xs 2xl:text-sm ${currentTheme.textSecondary[theme.mode]} hover:${currentTheme.text[theme.mode]} transition-all duration-300 hover:scale-105`}
                                    aria-label={`${socials[1].name} Profile`}
                                >
                                    {socials[1].name}
                                </a>
                                <a
                                    href={`${socials[0].url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-xs 2xl:text-sm ${currentTheme.textSecondary[theme.mode]} hover:${currentTheme.text[theme.mode]} transition-all duration-300 hover:scale-105`}
                                    aria-label={`${socials[0].name} Profile`}
                                >
                                    {socials[0].name}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="py-2 2xl:mt-6 2xl:pt-6 border-t border-slate-700/20 text-center">
                        <p className={`text-xs ${currentTheme.textMuted[theme.mode]}`}>
                            {biodata.copyright}
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
