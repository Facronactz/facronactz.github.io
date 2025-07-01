import React, {RefObject} from "react";
import {Theme} from "@/types/theme";

interface BackgroundElementsProps {
    particleContainerRef: RefObject<HTMLDivElement | null>;
    theme: Theme;
}

const BackgroundElements: React.FC<BackgroundElementsProps> = ({particleContainerRef, theme}) => {
    return (
        <>
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
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className={`floating-element absolute top-20 left-10 w-2 h-2 ${theme.colorTheme === "blue" ? "bg-blue-400" : theme.colorTheme === "purple" ? "bg-purple-400" : theme.colorTheme === "green" ? "bg-green-400" : "bg-orange-400"} rounded-full opacity-60`}
                ></div>
                <div
                    className={`floating-element absolute top-40 right-20 w-1 h-1 ${theme.colorTheme === "blue" ? "bg-cyan-400" : theme.colorTheme === "purple" ? "bg-pink-400" : theme.colorTheme === "green" ? "bg-emerald-400" : "bg-red-400"} rounded-full opacity-40`}
                    style={{animationDelay: "2s"}}
                ></div>
                <div
                    className={`floating-element absolute bottom-40 left-20 w-1.5 h-1.5 ${theme.colorTheme === "blue" ? "bg-blue-300" : theme.colorTheme === "purple" ? "bg-purple-300" : theme.colorTheme === "green" ? "bg-green-300" : "bg-orange-300"} rounded-full opacity-50`}
                    style={{animationDelay: "4s"}}
                ></div>
                <div
                    className={`floating-element absolute bottom-20 right-40 w-1 h-1 ${theme.colorTheme === "blue" ? "bg-cyan-300" : theme.colorTheme === "purple" ? "bg-pink-300" : theme.colorTheme === "green" ? "bg-emerald-300" : "bg-red-300"} rounded-full opacity-30`}
                    style={{animationDelay: "6s"}}
                ></div>
            </div>

            {/* Enhanced Geometric Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className={`absolute -top-40 -right-40 w-80 h-80 rounded-full border ${theme.mode === "dark" ? "border-slate-700/20" : "border-slate-300/30"} animate-pulse`}
                ></div>
                <div
                    className={`absolute -top-32 -right-32 w-64 h-64 rounded-full border ${theme.colorTheme === "blue" ? "border-blue-500/10" : theme.colorTheme === "purple" ? "border-purple-500/10" : theme.colorTheme === "green" ? "border-green-500/10" : "border-orange-500/10"}`}
                ></div>

                <div
                    className={`absolute top-1/4 -left-20 w-40 h-40 rotate-45 border ${theme.mode === "dark" ? "border-slate-600/20" : "border-slate-400/30"}`}
                ></div>
                <div
                    className={`absolute top-1/3 -left-16 w-32 h-32 rotate-45 border ${theme.colorTheme === "blue" ? "border-blue-500/10" : theme.colorTheme === "purple" ? "border-purple-500/10" : theme.colorTheme === "green" ? "border-green-500/10" : "border-orange-500/10"}`}
                ></div>

                <div className={`hexagon absolute top-20 left-1/4 ${theme.colorTheme}`}></div>
                <div
                    className={`hexagon absolute bottom-32 right-1/4 opacity-50 ${theme.colorTheme}`}
                    style={{animationDelay: "3s"}}
                ></div>
            </div>
        </>
    );
};

export default BackgroundElements;
