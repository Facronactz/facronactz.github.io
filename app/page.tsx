"use client"

import {RefObject, useEffect, useRef, useState} from "react";
import {colorThemes} from "@/data/theme";
import {useThemeManager} from "@/hooks/useThemeManager";
import {useParticleSystem} from "@/hooks/useParticleSystem";
import {usePageNavigation} from "@/hooks/usePageNavigation";
import BackgroundElements from "@/components/BackgroundElements";
import ThemeControls from "@/components/ThemeControls";
import HeaderSection from "@/components/HeaderSection";
import HomepageContent from "@/components/HomepageContent";
import DynamicViewRenderer from "@/components/DynamicViewRenderer";
import FooterSection from "@/components/FooterSection";
import ClickSpark from "@/components/bits/ClickSpark";

export default function PortfolioIntro() {
    const [currentRole, setCurrentRole] = useState(0);
    const particleContainerRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);

    const roles = ["Full Stack Developer", "Software Engineer", "Tech Innovator", "Problem Solver"];

    const {theme, changeTheme, isTransitioning, showThemePanel, setShowThemePanel} = useThemeManager();
    const {currentPage, pageTransition, handleNavigate, handleBack, handleExternalLink} = usePageNavigation();
    useParticleSystem(particleContainerRef, theme);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [roles.length]);

    const currentTheme = colorThemes[theme.colorTheme];

    return (
        <ClickSpark
            sparkColor='#fff'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
        >
            <div
                className={`transition-all duration-500 ease-in-out ${isTransitioning ? "opacity-50 scale-95" : "opacity-100 scale-100"}
        ${currentPage ? "min-h-screen" : "h-screen lg:overflow-hidden"} overflow-x-hidden overflow-y-scroll`}
            >
                <div
                    className={`bg-gradient-to-br ${currentTheme.bg[theme.mode]} ${currentTheme.text[theme.mode]} relative transition-all duration-700 min-h-screen overflow-auto overflow-x-hidden`}
                >
                    <BackgroundElements particleContainerRef={particleContainerRef} theme={theme}
                                        currentTheme={currentTheme}/>
                    <ThemeControls
                        theme={theme}
                        currentTheme={currentTheme}
                        changeTheme={changeTheme}
                        showThemePanel={showThemePanel}
                        setShowThemePanel={setShowThemePanel}
                    />

                    <div
                        className={`relative z-10 w-full h-screen max-w-6xl mx-auto px-6
            ${currentPage ? "pt-6" : "pt-8 2xl:pt-12"}
            ${pageTransition ? "page-transition-exit-active" : "page-transition-enter-active"}
            flex flex-col`}
                    >
                        <HeaderSection
                            currentPage={currentPage}
                            currentTheme={{...currentTheme, mode: theme.mode}}
                            roles={roles}
                            currentRole={currentRole}
                        />

                        {!currentPage && (
                            <HomepageContent
                                handleNavigate={handleNavigate}
                                handleExternalLink={handleExternalLink}
                                currentTheme={currentTheme}
                                theme={theme}
                            />
                        )}

                        {currentPage && (
                            <DynamicViewRenderer
                                currentPage={currentPage}
                                handleBack={handleBack}
                                currentTheme={currentTheme}
                                theme={theme}
                            />
                        )}

                        <FooterSection
                            currentPage={currentPage}
                            currentTheme={currentTheme}
                            handleNavigate={handleNavigate}
                            theme={theme}
                        />
                    </div>
                </div>
            </div>
        </ClickSpark>
    );
}


