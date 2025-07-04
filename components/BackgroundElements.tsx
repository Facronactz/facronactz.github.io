import React, {RefObject} from "react";
import {Theme, ThemeVariant} from "@/types/theme";
import Particles from "@/components/bits/Particles";
import Squares from "@/components/bits/Squares";

interface BackgroundElementsProps {
    particleContainerRef: RefObject<HTMLDivElement | null>;
    theme: Theme;
    currentTheme: ThemeVariant;
}

const BackgroundElements: React.FC<BackgroundElementsProps> = ({particleContainerRef, theme, currentTheme}) => {
    const particleColor = currentTheme.hex;
    const {
        floatingElementColor1,
        floatingElementColor2,
        floatingElementColor3,
        floatingElementColor4,
        geometricShapeColor
    } = currentTheme.background;
    return (
        <div className="fixed top-0 left-0 w-full h-full z-10">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="grid-pattern"></div>
            </div>

            {/* Dynamic Background Shapes */}
            <div className="dynamic-bg-shapes">
                <div className="morphing-blob"></div>
                <div className="morphing-blob"></div>
                <div className="morphing-blob"></div>
            </div>

            {/* Ripple Effects */}
            <div className="ripple-container">
                <div className="ripple"></div>
                <div className="ripple"></div>
                <div className="ripple"></div>
            </div>

            {/* Particle System */}
            <div ref={particleContainerRef} className="absolute inset-0 overflow-hidden pointer-events-none"></div>

            {/* Enhanced Floating Elements */}
            <div id="particle-container" className="absolute w-full h-full z-50">
                <Particles
                    sizeRandomness={6}
                    particleColors={[particleColor]}
                    particleCount={400}
                    particleSpread={2}
                    speed={0.12}
                    particleBaseSize={50}
                    moveParticlesOnHover={false}
                    disableRotation={false}
                />
            </div>

            <div className="absolute opacity-10 inset-0 overflow-hidden pointer-events-none">
                <Squares
                    speed={0.5}
                    squareSize={40}
                    direction='diagonal' // up, down, left, right, diagonal
                    borderColor={currentTheme.hex}
                    hoverFillColor='#000'
                />
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className={`floating-element absolute top-20 left-10 w-2 h-2 ${floatingElementColor1} rounded-full opacity-60`}
                ></div>
                <div
                    className={`floating-element absolute top-40 right-20 w-1 h-1 ${floatingElementColor2} rounded-full opacity-40`}
                    style={{animationDelay: "2s"}}
                ></div>
                <div
                    className={`floating-element absolute bottom-40 left-20 w-1.5 h-1.5 ${floatingElementColor3} rounded-full opacity-50`}
                    style={{animationDelay: "4s"}}
                ></div>
                <div
                    className={`floating-element absolute bottom-20 right-40 w-1 h-1 ${floatingElementColor4} rounded-full opacity-30`}
                    style={{animationDelay: "6s"}}
                ></div>
            </div>

            {/* Enhanced Geometric Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className={`absolute -top-40 -right-40 w-80 h-80 rounded-full border ${theme.mode === "dark" ? "border-slate-700/20" : "border-slate-300/30"} animate-pulse`}
                ></div>
                <div
                    className={`absolute -top-32 -right-32 w-64 h-64 rounded-full border ${geometricShapeColor}`}
                ></div>

                <div
                    className={`absolute top-1/4 -left-20 w-40 h-40 rotate-45 border ${theme.mode === "dark" ? "border-slate-600/20" : "border-slate-400/30"}`}
                ></div>
                <div
                    className={`absolute top-1/3 -left-16 w-32 h-32 rotate-45 border ${geometricShapeColor}`}
                ></div>

                <div className={`hexagon absolute top-20 left-1/4 ${theme.colorTheme}`}></div>
                <div
                    className={`hexagon absolute bottom-32 right-1/4 opacity-50 ${theme.colorTheme}`}
                    style={{animationDelay: "3s"}}
                ></div>
            </div>
        </div>
    );
};

export default BackgroundElements;
