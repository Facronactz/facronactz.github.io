import React from "react";
import PageGrid from "@/components/page-grid-old";
import {Theme, ThemeVariant} from "@/types/theme";

interface HomepageContentProps {
    handleNavigate: (page: string) => void;
    handleExternalLink: (url: string) => void;
    currentTheme: ThemeVariant;
    theme: Theme;
}

const HomepageContent: React.FC<HomepageContentProps> = ({
    handleNavigate,
    handleExternalLink,
    currentTheme,
    theme,
}) => {
    return (
        <div className="flex flex-col items-center flex-1">
            <div className="my-6">
                <PageGrid
                    onNavigate={handleNavigate}
                    onExternalLink={handleExternalLink}
                    currentTheme={currentTheme}
                    theme={theme}
                    resumeUrl="https://facronactz.vercel.app/"
                />
            </div>

            {/* Enhanced Stats */}
            <div className="flex flex-wrap justify-center gap-6 2xl:gap-8 my-auto">
                <div className="text-center stat-counter">
                    <div
                        className={`text-2xl 2xl:text-3xl font-bold ${currentTheme.text[theme.mode]} mb-1`}>5+
                    </div>
                    <div
                        className={`text-xs 2xl:text-sm ${currentTheme.textMuted[theme.mode]}`}>Projects
                        Completed
                    </div>
                </div>
                <div className="text-center stat-counter" style={{ animationDelay: "0.2s" }}>
                    <div
                        className={`text-2xl 2xl:text-3xl font-bold ${currentTheme.text[theme.mode]} mb-1`}>50+
                    </div>
                    <div
                        className={`text-xs 2xl:text-sm ${currentTheme.textMuted[theme.mode]}`}>Certificates
                        Earned
                    </div>
                </div>
                <div className="text-center stat-counter" style={{ animationDelay: "0.4s" }}>
                    <div
                        className={`text-2xl 2xl:text-3xl font-bold ${currentTheme.text[theme.mode]} mb-1`}>100+
                    </div>
                    <div className={`text-xs 2xl:text-sm ${currentTheme.textMuted[theme.mode]}`}>Tools
                        Mastered
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomepageContent;
