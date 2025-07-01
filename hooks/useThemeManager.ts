import {useEffect, useState} from "react";
import {Theme} from "@/types/theme";

export const useThemeManager = () => {
    const [theme, setTheme] = useState<Theme>({mode: "dark", colorTheme: "blue"});
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [showThemePanel, setShowThemePanel] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("portfolio-theme");
        if (savedTheme) {
            setTheme(JSON.parse(savedTheme));
        }
    }, []);

    const changeTheme = (newTheme: Partial<Theme>) => {
        setIsTransitioning(true);
        setTimeout(() => {
            const updatedTheme = {...theme, ...newTheme};
            setTheme(updatedTheme);
            localStorage.setItem("portfolio-theme", JSON.stringify(updatedTheme));
            setIsTransitioning(false);
        }, 150);
    };

    return {theme, changeTheme, isTransitioning, showThemePanel, setShowThemePanel};
};
