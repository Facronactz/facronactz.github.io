"use client"

import {lazy, Suspense, useEffect, useRef, useState} from "react"
import {Moon, Palette, Settings, Sun} from "lucide-react"
import {colorThemes} from "@/data/theme"
import PageGrid from "@/components/page-grid-old";

// const PageGrid = lazy(() => import("../components/page-grid-old"))

// Lazy load views for better performance
const StudiesView = lazy(() => import("../views/studies-view"))
const ExperiencesView = lazy(() => import("../views/experiences-view"))
const ProjectsView = lazy(() => import("../views/projects-view"))
const CertificatesView = lazy(() => import("../views/certificates-view"))
const OnlineProfilesView = lazy(() => import("../views/online-profiles-view"))

type ColorTheme = "blue" | "purple" | "green" | "orange"
type Mode = "dark" | "light"

interface Theme {
    mode: Mode
    colorTheme: ColorTheme
}

export default function PortfolioIntro() {
    const [currentRole, setCurrentRole] = useState(0)
    const [theme, setTheme] = useState<Theme>({mode: "dark", colorTheme: "blue"})
    const [showThemePanel, setShowThemePanel] = useState(false)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [currentPage, setCurrentPage] = useState<string | null>(null)
    const [pageTransition, setPageTransition] = useState(false)
    const particleContainerRef = useRef<HTMLDivElement>(null)

    const roles = ["Full Stack Developer", "Software Engineer", "Tech Innovator", "Problem Solver"]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        // Load theme from localStorage
        const savedTheme = localStorage.getItem("portfolio-theme")
        if (savedTheme) {
            setTheme(JSON.parse(savedTheme))
        }
    }, [])

    // Particle system effect
    useEffect(() => {
        const createParticle = () => {
            if (!particleContainerRef.current) return

            const particle = document.createElement("div")
            particle.className = `particle ${currentTheme.accent[theme.mode]}`
            particle.style.left = Math.random() * 100 + "%"
            particle.style.animationDelay = Math.random() * 2 + "s"
            particle.style.animationDuration = Math.random() * 3 + 7 + "s"

            particleContainerRef.current.appendChild(particle)

            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle)
                }
            }, 10000)
        }

        const interval = setInterval(createParticle, 2000)
        return () => clearInterval(interval)
    }, [theme])


    const changeTheme = (newTheme: Partial<Theme>) => {
        setIsTransitioning(true)
        setTimeout(() => {
            const updatedTheme = {...theme, ...newTheme}
            setTheme(updatedTheme)
            localStorage.setItem("portfolio-theme", JSON.stringify(updatedTheme))
            setIsTransitioning(false)
        }, 150)
    }

    const handleNavigate = (page: string) => {
        setPageTransition(true)
        setTimeout(() => {
            setCurrentPage(page)
            setPageTransition(false)
        }, 300)
    }

    const handleBack = () => {
        setPageTransition(true)
        setTimeout(() => {
            setCurrentPage(null)
            setPageTransition(false)
        }, 300)
    }

    const handleExternalLink = (url: string) => {
        window.open(url, "_blank", "noopener,noreferrer")
    }

    const currentTheme = colorThemes[theme.colorTheme]

    return (
        <div
            className={`transition-all duration-500 ease-in-out ${isTransitioning ? "opacity-50 scale-95" : "opacity-100 scale-100"} 
        ${currentPage ? "min-h-screen" : "h-screen lg:overflow-hidden"} overflow-x-hidden overflow-y-scroll`}
        >
            <div
                className={`bg-gradient-to-br ${currentTheme.bg[theme.mode]} ${currentTheme.text[theme.mode]} relative transition-all duration-700 min-h-screen overflow-auto overflow-x-hidden`}
            >
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

                {/* Theme Controls */}
                <div className="fixed top-6 right-6 z-50 flex gap-3">
                    <button
                        onClick={() => changeTheme({mode: theme.mode === "dark" ? "light" : "dark"})}
                        className={`p-3 rounded-full ${currentTheme.card[theme.mode]} backdrop-blur-sm enhanced-button transition-all duration-300 border hover:scale-110`}
                    >
                        {theme.mode === "dark" ? (
                            <Sun className={`w-5 h-5 ${currentTheme.accent[theme.mode]}`}/>
                        ) : (
                            <Moon className={`w-5 h-5 ${currentTheme.accent[theme.mode]}`}/>
                        )}
                    </button>

                    <button
                        onClick={() => setShowThemePanel(!showThemePanel)}
                        className={`p-3 rounded-full ${currentTheme.card[theme.mode]} backdrop-blur-sm enhanced-button transition-all duration-300 border hover:scale-110`}
                    >
                        <Settings
                            className={`w-5 h-5 ${currentTheme.accent[theme.mode]} ${showThemePanel ? "rotate-90" : ""} transition-transform duration-300`}
                        />
                    </button>
                </div>

                {/* Enhanced Theme Selection Panel */}
                <div
                    className={`fixed top-20 right-6 z-40 transition-all duration-300 ${showThemePanel ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
                >
                    <div
                        className={`p-4 rounded-2xl ${currentTheme.card[theme.mode]} backdrop-blur-sm border interactive-card`}>
                        <div className="flex items-center gap-2 mb-3">
                            <Palette className={`w-4 h-4 ${currentTheme.accent[theme.mode]}`}/>
                            <span className={`text-sm font-medium ${currentTheme.textSecondary[theme.mode]}`}>Color Theme</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            {(Object.keys(colorThemes) as ColorTheme[]).map((colorTheme) => (
                                <button
                                    key={colorTheme}
                                    onClick={() => changeTheme({colorTheme})}
                                    className={`w-8 h-8 rounded-full enhanced-button transition-all duration-300 hover:scale-110 ${
                                        theme.colorTheme === colorTheme ? "ring-2 ring-offset-2 ring-offset-transparent" : ""
                                    }`}
                                    style={{
                                        background:
                                            colorTheme === "blue"
                                                ? "linear-gradient(135deg, #3b82f6, #06b6d4)"
                                                : colorTheme === "purple"
                                                    ? "linear-gradient(135deg, #9333ea, #ec4899)"
                                                    : colorTheme === "green"
                                                        ? "linear-gradient(135deg, #059669, #10b981)"
                                                        : "linear-gradient(135deg, #ea580c, #dc2626)",
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content Container with Page Transitions */}
                <div
                    className={`relative z-10 w-full h-screen max-w-6xl mx-auto px-6 
            ${currentPage ? "pt-6" : "pt-8 2xl:pt-12"} 
            ${pageTransition ? "page-transition-exit-active" : "page-transition-enter-active"}
            flex flex-col`}
                >
                    {/* Enhanced Header */}
                    <div className={`${currentPage ? "mb-8" : "mb-0"} header-animate lg:text-center`}>
                        <div
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm mb-6 2xl:mb-8 border enhanced-button ${currentTheme.card[theme.mode]}`}
                        >
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className={`text-sm ${currentTheme.textSecondary[theme.mode]}`}>Available for opportunities</span>
                        </div>

                        <div className="relative text-center">
                            <div
                                className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent ${currentTheme.gradients.divider[theme.mode]} to-transparent`}
                            ></div>
                            <div
                                className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent ${currentTheme.gradients.accent[theme.mode]} to-transparent`}
                            ></div>

                            <h1
                                className={`${currentPage ? "text-3xl lg:text-4xl 2xl:text-5xl" : "text-3xl lg:text-5xl 2xl:text-7xl"} font-bold mb-4 2xl:mb-6 bg-clip-text text-transparent bg-gradient-to-r ${currentTheme.gradients.text[theme.mode]}`}
                            >
                                Farro Axza Febsinatra Sofi'ie
                            </h1>
                        </div>

                        <div className={`${currentPage ? "h-6" : "h-6 2xl:h-8"} text-center`}>
                            <p
                                className={`${currentPage ? "text-base lg:text-lg" : "text-lg lg:text-xl 2xl:text-2xl"} ${currentTheme.textSecondary[theme.mode]} role-text`}
                            >
                                {roles[currentRole]}
                            </p>
                        </div>
                    </div>

                    {/* Homepage Layout */}
                    {!currentPage && (
                        <div className="flex flex-col items-center flex-1">
                            <div className="my-6">
                                <PageGrid
                                    onNavigate={handleNavigate}
                                    onExternalLink={handleExternalLink}
                                    currentTheme={currentTheme}
                                    theme={theme}
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
                                <div className="text-center stat-counter" style={{animationDelay: "0.2s"}}>
                                    <div
                                        className={`text-2xl 2xl:text-3xl font-bold ${currentTheme.text[theme.mode]} mb-1`}>50+
                                    </div>
                                    <div
                                        className={`text-xs 2xl:text-sm ${currentTheme.textMuted[theme.mode]}`}>Certificates
                                        Earned
                                    </div>
                                </div>
                                <div className="text-center stat-counter" style={{animationDelay: "0.4s"}}>
                                    <div
                                        className={`text-2xl 2xl:text-3xl font-bold ${currentTheme.text[theme.mode]} mb-1`}>100+
                                    </div>
                                    <div className={`text-xs 2xl:text-sm ${currentTheme.textMuted[theme.mode]}`}>Tools
                                        Mastered
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Individual Views with Enhanced Transitions */}
                    {currentPage && (
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
                                    <StudiesView onBack={handleBack} currentTheme={currentTheme} theme={theme}/>
                                )}
                                {currentPage === "experiences" && (
                                    <ExperiencesView onBack={handleBack} currentTheme={currentTheme} theme={theme}/>
                                )}
                                {currentPage === "projects" && (
                                    <ProjectsView onBack={handleBack} currentTheme={currentTheme} theme={theme}/>
                                )}
                                {currentPage === "certificates" && (
                                    <CertificatesView onBack={handleBack} currentTheme={currentTheme} theme={theme}/>
                                )}
                                {currentPage === "online-profiles" && (
                                    <OnlineProfilesView onBack={handleBack} currentTheme={currentTheme} theme={theme}/>
                                )}
                            </Suspense>
                        </div>
                    )}

                    {/* Enhanced Footer */}
                    <footer className={`w-full ${currentPage ? "mt-4" : "mt-auto"} 2xl:pb-6`}>
                        <div className="max-w-4xl mx-auto">
                            <div
                                className={`border-t ${theme.mode === "dark" ? "border-slate-700/30" : "border00/30"} 2xl:pt-6`}
                            >
                                <div
                                    className="flex flex-col lg:flex-row items-center justify-between gap-4 2xl:gap-6 my-4">
                                    <div className="text-center lg:text-left">
                                        <h3 className={`text-base 2xl:text-lg font-semibold ${currentTheme.text[theme.mode]} mb-1 2xl:mb-2`}>
                                            Farro Axza Febsinatra Sofi'ie
                                        </h3>
                                        <p className={`text-xs 2xl:text-sm ${currentTheme.textMuted[theme.mode]}`}>
                                            Full Stack Developer & Tech Innovator
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center gap-3 2xl:gap-4">
                                        <a
                                            href="mailto:facronactz@example.com"
                                            className={`text-xs 2xl:text-sm ${currentTheme.textSecondary[theme.mode]} hover:${currentTheme.text[theme.mode]} transition-all duration-300 hover:scale-105`}
                                        >
                                            facronactz@example.com
                                        </a>
                                        <div className="flex items-center gap-3 2xl:gap-4">
                                            <a
                                                href="https://linkedin.com/in/facronactzon"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`text-xs 2xl:text-sm ${currentTheme.textSecondary[theme.mode]} hover:${currentTheme.text[theme.mode]} transition-all duration-300 hover:scale-105`}
                                                aria-label="LinkedIn Profile"
                                            >
                                                LinkedIn
                                            </a>
                                            <a
                                                href="https://github.com/facronactzon"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`text-xs 2xl:text-sm ${currentTheme.textSecondary[theme.mode]} hover:${currentTheme.text[theme.mode]} transition-all duration-300 hover:scale-105`}
                                                aria-label="GitHub Profile"
                                            >
                                                GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="py-2 2xl:mt-6 2xl:pt-6 border-t border-slate-700/20 text-center">
                                    <p className={`text-xs ${currentTheme.textMuted[theme.mode]}`}>
                                        © 2025 • Farro Axza Febsinatra Sofi'ie • All rights reserved •
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
                </div>
            </div>
        </div>
    )
}

