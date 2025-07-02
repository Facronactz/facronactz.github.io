import React, { lazy, Suspense } from "react";
import {Theme, ThemeVariant} from "@/types/theme";

const StudiesView = lazy(() => import("../views/studies-view"));
const ExperiencesView = lazy(() => import("../views/experiences-view"));
const ProjectsView = lazy(() => import("../views/projects-view"));
const CertificatesView = lazy(() => import("../views/certificates-view"));
const OnlineProfilesView = lazy(() => import("../views/online-profiles-view"));

interface DynamicViewRendererProps {
    currentPage: string | null;
    handleBack: () => void;
    currentTheme: ThemeVariant;
    theme: Theme;
}

const DynamicViewRenderer: React.FC<DynamicViewRendererProps> = ({
    currentPage,
    handleBack,
    currentTheme,
    theme,
}) => {
    return (
        <div className="w-full flex-1">
            <Suspense
                fallback={
                    <div className="flex items-center justify-center py-20">
                        <div
                            className={`animate-spin rounded-full h-8 w-8 border-b-2 ${currentTheme.accent[theme.mode].replace("text-", "border-")}`}
                        ></div>
                    </div>
                }
            >
                {currentPage === "studies" && (
                    <StudiesView onBack={handleBack} currentTheme={currentTheme} theme={theme} />
                )}
                {currentPage === "experiences" && (
                    <ExperiencesView onBack={handleBack} currentTheme={currentTheme} theme={theme} />
                )}
                {currentPage === "projects" && (
                    <ProjectsView onBack={handleBack} currentTheme={currentTheme} theme={theme} />
                )}
                {currentPage === "certificates" && (
                    <CertificatesView onBack={handleBack} currentTheme={currentTheme} theme={theme} />
                )}
                {currentPage === "online-profiles" && (
                    <OnlineProfilesView onBack={handleBack} currentTheme={currentTheme} theme={theme} />
                )}
            </Suspense>
        </div>
    );
};

export default DynamicViewRenderer;
