import {RefObject, useEffect} from "react";
import {Theme} from "@/types/theme";
import {colorThemes} from "@/data/theme";

export const useParticleSystem = (particleContainerRef: RefObject<HTMLDivElement | null>, theme: Theme) => {
    useEffect(() => {
        const createParticle = () => {
            if (!particleContainerRef.current) return;

            const currentTheme = colorThemes[theme.colorTheme];
            const particle = document.createElement("div");
            particle.className = `particle ${currentTheme.accent[theme.mode]}`;
            particle.style.left = Math.random() * 100 + "%";
            particle.style.animationDelay = Math.random() * 2 + "s";
            particle.style.animationDuration = Math.random() * 3 + 7 + "s";

            particleContainerRef.current.appendChild(particle);

            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 10000);
        };

        const interval = setInterval(createParticle, 2000);
        return () => clearInterval(interval);
    }, [theme, particleContainerRef]);
};
