"use client"

import {lazy, Suspense, useEffect, useState} from "react"
import {Moon, Palette, Settings, Sun} from "lucide-react"
import PageGrid from "../components/page-grid"

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

const colorThemes = {
    blue: {
        primary: {dark: "from-blue-600 to-cyan-600", light: "from-blue-500 to-cyan-500"},
        accent: {dark: "text-blue-400", light: "text-blue-600"},
        bg: {dark: "from-slate-900 via-slate-800 to-slate-900", light: "from-slate-50 via-white to-slate-100"},
        card: {dark: "bg-slate-800/30 border-slate-700/30", light: "bg-white/70 border-slate-200/50"},
        text: {dark: "text-white", light: "text-slate-900"},
        textSecondary: {dark: "text-slate-300", light: "text-slate-600"},
        textMuted: {dark: "text-slate-400", light: "text-slate-500"},
    },
    purple: {
        primary: {dark: "from-purple-600 to-pink-600", light: "from-purple-500 to-pink-500"},
        accent: {dark: "text-purple-400", light: "text-purple-600"},
        bg: {dark: "from-slate-900 via-purple-900 to-slate-900", light: "from-purple-50 via-white to-pink-50"},
        card: {dark: "bg-slate-800/30 border-purple-700/30", light: "bg-white/70 border-purple-200/50"},
        text: {dark: "text-white", light: "text-slate-900"},
        textSecondary: {dark: "text-slate-300", light: "text-slate-600"},
        textMuted: {dark: "text-slate-400", light: "text-slate-500"},
    },
    green: {
        primary: {dark: "from-green-600 to-emerald-600", light: "from-green-500 to-emerald-500"},
        accent: {dark: "text-green-400", light: "text-green-600"},
        bg: {dark: "from-slate-900 via-green-900 to-slate-900", light: "from-green-50 via-white to-emerald-50"},
        card: {dark: "bg-slate-800/30 border-green-700/30", light: "bg-white/70 border-green-200/50"},
        text: {dark: "text-white", light: "text-slate-900"},
        textSecondary: {dark: "text-slate-300", light: "text-slate-600"},
        textMuted: {dark: "text-slate-400", light: "text-slate-500"},
    },
    orange: {
        primary: {dark: "from-orange-600 to-red-600", light: "from-orange-500 to-red-500"},
        accent: {dark: "text-orange-400", light: "text-orange-600"},
        bg: {dark: "from-slate-900 via-orange-900 to-slate-900", light: "from-orange-50 via-white to-red-50"},
        card: {dark: "bg-slate-800/30 border-orange-700/30", light: "bg-white/70 border-orange-200/50"},
        text: {dark: "text-white", light: "text-slate-900"},
        textSecondary: {dark: "text-slate-300", light: "text-slate-600"},
        textMuted: {dark: "text-slate-400", light: "text-slate-500"},
    },
}

export default function PortfolioIntro() {
    const [currentRole, setCurrentRole] = useState(0)
    const [theme, setTheme] = useState<Theme>({mode: "dark", colorTheme: "blue"})
    const [showThemePanel, setShowThemePanel] = useState(false)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [currentPage, setCurrentPage] = useState<string | null>(null)

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
        setCurrentPage(page)
    }

    const handleBack = () => {
        setCurrentPage(null)
    }

    const handleExternalLink = (url: string) => {
        window.open(url, "_blank", "noopener,noreferrer")
    }

    const currentTheme = colorThemes[theme.colorTheme]

    return (
        <div
            className={`transition-all duration-500 ease-in-out ${isTransitioning ? "opacity-50 scale-95" : "opacity-100 scale-100"} 
        ${currentPage ? "min-h-screen" : "h-screen lg:h-screen"} 
        ${currentPage ? "overflow-y-auto" : "lg:overflow-hidden"}`}
        >
            <div
                className={`bg-gradient-to-br ${currentTheme.bg[theme.mode]} ${currentTheme.text[theme.mode]} relative transition-all duration-700
          ${currentPage ? "min-h-screen" : "lg:h-full min-h-screen"}`}
            >
                {/* Theme Controls */}
                <div className="fixed top-6 right-6 z-50 flex gap-3">
                    {/* Mode Toggle */}
                    <button
                        onClick={() => changeTheme({mode: theme.mode === "dark" ? "light" : "dark"})}
                        className={`p-3 rounded-full ${currentTheme.card[theme.mode]} backdrop-blur-sm hover:scale-110 transition-all duration-300 border`}
                    >
                        {theme.mode === "dark" ? (
                            <Sun className={`w-5 h-5 ${currentTheme.accent[theme.mode]}`}/>
                        ) : (
                            <Moon className={`w-5 h-5 ${currentTheme.accent[theme.mode]}`}/>
                        )}
                    </button>

                    {/* Theme Panel Toggle */}
                    <button
                        onClick={() => setShowThemePanel(!showThemePanel)}
                        className={`p-3 rounded-full ${currentTheme.card[theme.mode]} backdrop-blur-sm hover:scale-110 transition-all duration-300 border`}
                    >
                        <Settings
                            className={`w-5 h-5 ${currentTheme.accent[theme.mode]} ${showThemePanel ? "rotate-90" : ""} transition-transform duration-300`}
                        />
                    </button>
                </div>

                {/* Theme Selection Panel */}
                <div
                    className={`fixed top-20 right-6 z-40 transition-all duration-300 ${showThemePanel ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
                >
                    <div className={`p-4 rounded-2xl ${currentTheme.card[theme.mode]} backdrop-blur-sm border`}>
                        <div className="flex items-center gap-2 mb-3">
                            <Palette className={`w-4 h-4 ${currentTheme.accent[theme.mode]}`}/>
                            <span className={`text-sm font-medium ${currentTheme.textSecondary[theme.mode]}`}>Color Theme</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            {(Object.keys(colorThemes) as ColorTheme[]).map((colorTheme) => (
                                <button
                                    key={colorTheme}
                                    onClick={() => changeTheme({colorTheme})}
                                    className={`w-8 h-8 rounded-full transition-all duration-300 hover:scale-110 ${
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

                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div
                        className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]`}
                    ></div>
                    <div className="grid-pattern"></div>
                </div>

                {/* Floating Elements */}
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

                {/* Geometric Shapes */}
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

                {/* Main Content Container */}
                <div
                    className={`relative z-10 w-full max-w-6xl mx-auto px-6 ${currentPage ? "py-6 min-h-screen" : "h-full flex flex-col lg:justify-center py-6 lg:py-0"}`}
                >
                    {/* Header - Show on all views */}
                    <div className={`text-center ${currentPage ? "mb-8" : "mb-8 lg:mb-16"} mt-12 sm:mt-8`}>
                        <div
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${currentTheme.card[theme.mode]} backdrop-blur-sm mb-6 lg:mb-8 border`}
                        >
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className={`text-sm ${currentTheme.textSecondary[theme.mode]}`}>Available for opportunities</span>
                        </div>

                        <div className="relative">
                            <div
                                className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-${theme.colorTheme}-400 to-transparent`}
                            ></div>
                            <div
                                className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-${theme.colorTheme === "blue" ? "cyan" : theme.colorTheme === "purple" ? "pink" : theme.colorTheme === "green" ? "emerald" : "red"}-400 to-transparent`}
                            ></div>

                            <h1
                                className={`${currentPage ? "text-3xl md:text-5xl" : "text-4xl md:text-6xl lg:text-7xl"} font-bold mb-4 lg:mb-6 bg-gradient-to-r ${theme.mode === "dark" ? "from-white via-slate-200 to-slate-400" : "from-slate-900 via-slate-700 to-slate-500"} bg-clip-text text-transparent`}
                            >
                                Farro Axza Febsinatra Sofi'ie
                            </h1>
                        </div>

                        <div className={`${currentPage ? "h-6" : "h-6 lg:h-8"} mb-6 lg:mb-8`}>
                            <p
                                className={`${currentPage ? "text-base md:text-lg" : "text-lg md:text-xl lg:text-2xl"} ${currentTheme.textSecondary[theme.mode]} transition-all duration-500 ease-in-out`}
                            >
                                {roles[currentRole]}
                            </p>
                        </div>
                    </div>

                    {/* Homepage Layout */}
                    {!currentPage && (
                        <div className="flex flex-col items-center justify-center flex-1 lg:min-h-0">
                            {/* Page Grid */}
                            <PageGrid
                                onNavigate={handleNavigate}
                                onExternalLink={handleExternalLink}
                                currentTheme={currentTheme}
                                theme={theme}
                            />

                            {/* Stats */}
                            <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-8 lg:mb-16">
                                <div className="text-center">
                                    <div
                                        className={`text-2xl lg:text-3xl font-bold ${currentTheme.text[theme.mode]} mb-1`}>5+
                                    </div>
                                    <div className={`text-xs lg:text-sm ${currentTheme.textMuted[theme.mode]}`}>Projects
                                        Completed
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div
                                        className={`text-2xl lg:text-3xl font-bold ${currentTheme.text[theme.mode]} mb-1`}>50+
                                    </div>
                                    <div
                                        className={`text-xs lg:text-sm ${currentTheme.textMuted[theme.mode]}`}>Certificates
                                        Earned
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div
                                        className={`text-2xl lg:text-3xl font-bold ${currentTheme.text[theme.mode]} mb-1`}>100+
                                    </div>
                                    <div className={`text-xs lg:text-sm ${currentTheme.textMuted[theme.mode]}`}>Tools
                                        Mastered
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Individual Views */}
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

                    {/* Footer */}
                    <footer className={`w-full ${currentPage ? "mt-8" : "mt-auto lg:mt-8"} pb-6 lg:pb-8`}>
                        <div className="max-w-4xl mx-auto">
                            <div
                                className={`border-t ${theme.mode === "dark" ? "border-slate-700/30" : "border-slate-300/30"} pt-6 lg:pt-8`}
                            >
                                <div className="flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-6">
                                    <div className="text-center md:text-left">
                                        <h3 className={`text-base lg:text-lg font-semibold ${currentTheme.text[theme.mode]} mb-1 lg:mb-2`}>
                                            Farro Axza Febsinatra Sofi'ie
                                        </h3>
                                        <p className={`text-xs lg:text-sm ${currentTheme.textMuted[theme.mode]}`}>
                                            Full Stack Developer & Tech Innovator
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4">
                                        <a
                                            href="mailto:facronactz@example.com"
                                            className={`text-xs lg:text-sm ${currentTheme.textSecondary[theme.mode]} hover:${currentTheme.text[theme.mode]} transition-colors`}
                                        >
                                            facronactz@example.com
                                        </a>
                                        <div className="flex items-center gap-3 lg:gap-4">
                                            <a
                                                href="https://linkedin.com/in/facronactz"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`text-xs lg:text-sm ${currentTheme.textSecondary[theme.mode]} hover:${currentTheme.text[theme.mode]} transition-colors`}
                                                aria-label="LinkedIn Profile"
                                            >
                                                LinkedIn
                                            </a>
                                            <a
                                                href="https://github.com/facronactz"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`text-xs lg:text-sm ${currentTheme.textSecondary[theme.mode]} hover:${currentTheme.text[theme.mode]} transition-colors`}
                                                aria-label="GitHub Profile"
                                            >
                                                GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-slate-700/20 text-center">
                                    <p className={`text-xs ${currentTheme.textMuted[theme.mode]}`}>
                                        © 2024 Farro Axza Febsinatra Sofi'ie. All rights reserved. •
                                        <button
                                            onClick={() => handleNavigate("online-profiles")}
                                            className={`ml-1 hover:${currentTheme.textSecondary[theme.mode]} transition-colors underline`}
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
