import { useState } from "react";

export const usePageNavigation = () => {
    const [currentPage, setCurrentPage] = useState<string | null>(null);
    const [pageTransition, setPageTransition] = useState(false);

    const handleNavigate = (page: string) => {
        setPageTransition(true);
        setTimeout(() => {
            setCurrentPage(page);
            setPageTransition(false);
        }, 300);
    };

    const handleBack = () => {
        setPageTransition(true);
        setTimeout(() => {
            setCurrentPage(null);
            setPageTransition(false);
        }, 300);
    };

    const handleExternalLink = (url: string) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return { currentPage, pageTransition, handleNavigate, handleBack, handleExternalLink };
};
