"use client"

import {Award, Briefcase, ExternalLink, FileText, FolderOpen, Globe, GraduationCap} from "lucide-react"
import {useEffect, useRef} from "react"
import {Theme, ThemeVariant} from "@/types/theme"

interface PageGridProps {
    onNavigate: (page: string) => void
    onExternalLink: (url: string) => void
    currentTheme: ThemeVariant
    theme: Theme
    resumeUrl: string
}

const navigationItems = [
    {
        id: "studies",
        title: "Studies",
        description: "Academic background and education",
        icon: GraduationCap,
        gradient: "from-blue-500 to-cyan-500",
        bgGradient: "from-blue-500/20 to-cyan-500/20",
        borderColor: "border-blue-500/20",
        iconColor: "text-blue-400",
        type: "internal" as const,
        hover: "group-hover:text-blue-400",
    },
    {
        id: "experiences",
        title: "Experiences",
        description: "Professional work history",
        icon: Briefcase,
        gradient: "from-purple-500 to-pink-500",
        bgGradient: "from-purple-500/20 to-pink-500/20",
        borderColor: "border-purple-500/20",
        iconColor: "text-purple-400",
        type: "internal" as const,
        hover: "group-hover:text-purple-400",
    },
    {
        id: "projects",
        title: "Projects",
        description: "Featured work and portfolio",
        icon: FolderOpen,
        gradient: "from-green-500 to-emerald-500",
        bgGradient: "from-green-500/20 to-emerald-500/20",
        borderColor: "border-green-500/20",
        iconColor: "text-green-400",
        type: "internal" as const,
        hover: "group-hover:text-green-400",
    },
    {
        id: "certificates",
        title: "Certificates",
        description: "Professional certifications",
        icon: Award,
        gradient: "from-orange-500 to-red-500",
        bgGradient: "from-orange-500/20 to-red-500/20",
        borderColor: "border-orange-500/20",
        iconColor: "text-orange-400",
        type: "internal" as const,
        hover: "group-hover:text-orange-400",
    },
    {
        id: "online-profiles",
        title: "Online Profiles",
        description: "Social media and professional networks",
        icon: Globe,
        gradient: "from-cyan-500 to-teal-500",
        bgGradient: "from-cyan-500/20 to-teal-500/20",
        borderColor: "border-cyan-500/20",
        iconColor: "text-cyan-400",
        type: "internal" as const,
        hover: "group-hover:text-cyan-400",
    },
    {
        id: "resume",
        title: "View Resume",
        description: "Download or view complete CV",
        icon: FileText,
        gradient: "from-indigo-500 to-purple-500",
        bgGradient: "from-indigo-500/20 to-purple-500/20",
        borderColor: "border-indigo-500/20",
        iconColor: "text-indigo-400",
        type: "external" as const,
        url: "https://facronactz.vercel.app/",
        hover: "group-hover:text-indigo-400",
    },
]

export default function PageGrid({onNavigate, onExternalLink, currentTheme, theme}: PageGridProps) {
    const gridRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("grid-item")
                    }
                })
            },
            {threshold: 0.1},
        )

        if (gridRef.current) {
            const items = gridRef.current.querySelectorAll(".grid-card")
            items.forEach((item) => observer.observe(item))
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section className="w-full max-w-5xl" aria-label="Portfolio Navigation">
            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-8">
                {navigationItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                        <article
                            key={item.id}
                            className={`grid-card group relative overflow-hidden rounded-3xl ${currentTheme.card[theme.mode]} border backdrop-blur-sm interactive-card enhanced-button cursor-pointer will-change-transform shadow-lg hover:shadow-2xl transition-all duration-500`}
                            onClick={() => {
                                if (item.type === "external" && item.url) {
                                    onExternalLink(item.url)
                                } else {
                                    onNavigate(item.id)
                                }
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault()
                                    if (item.type === "external" && item.url) {
                                        onExternalLink(item.url)
                                    } else {
                                        onNavigate(item.id)
                                    }
                                }
                            }}
                            tabIndex={0}
                            role="button"
                            aria-label={`Navigate to ${item.title} section`}
                        >
                            {/* External Link Indicator */}
                            {item.type === "external" && (
                                <div className="absolute bottom-5 right-5 z-20">
                                    <ExternalLink
                                        className={`w-4 h-4 ${item.iconColor} opacity-50 group-hover:opacity-100 transition-all duration-300`}
                                        aria-hidden="true"
                                    />
                                </div>
                            )}

                            {/* Enhanced Background Gradient */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                            ></div>

                            {/* Gradient Border Effect */}
                            <div
                                className={`absolute inset-0 gradient-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                            ></div>

                            {/* Main Content Container */}
                            <div
                                className="relative p-8 z-10 h-full flex flex-wrap 2xl:flex-nowrap 2xl:flex-col justify-center items-center 2xl:items-start">
                                {/* Header Section */}
                                <div className="flex items-start justify-between basis-1/3 2xl:basis-full 2xl:w-full">
                                    <div
                                        className={`p-4 rounded-2xl bg-gradient-to-br ${item.bgGradient} border ${item.borderColor} group-hover:scale-110 transition-all duration-300 will-change-transform shadow-sm`}
                                    >
                                        <Icon
                                            className={`w-7 h-7 ${item.iconColor} group-hover:scale-125 transition-transform duration-300`}
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div className="text-right hidden 2xl:block">
                                        <div
                                            className={`text-xs font-medium ${currentTheme.textMuted[theme.mode]} opacity-60 group-hover:opacity-100 transition-opacity duration-300 tracking-wider`}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 flex flex-col flex-grow basis-2/3 2xl:basis-full 2xl:my-8">
                                    <div className="text-right absolute top-5 right-5 2xl:hidden">
                                        <div
                                            className={`text-xs font-medium ${currentTheme.textMuted[theme.mode]} opacity-60 group-hover:opacity-100 transition-opacity duration-300 tracking-wider`}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </div>
                                    </div>
                                    <h3
                                        className={`text-xl font-bold ${currentTheme.text[theme.mode]} ${item.hover} transition-all duration-300 transform hover:scale-105 hover:translate-x-1 leading-tight 2xl:mb-2`}
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className={`${currentTheme.textMuted[theme.mode]} text-sm leading-relaxed group-hover:text-opacity-90 transition-all duration-300`}
                                    >
                                        {item.description}
                                    </p>
                                </div>

                                {/* Footer Section */}
                                <div className="mt-auto justify-between items-center flex">
                                    {/* Enhanced Progress Indicator */}
                                    <div className="gap-2 hidden 2xl:flex">
                                        <div
                                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 group-hover:scale-125 shadow-sm ${
                                                item.iconColor === "text-blue-400"
                                                    ? "bg-blue-400"
                                                    : item.iconColor === "text-purple-400"
                                                        ? "bg-purple-400"
                                                        : item.iconColor === "text-green-400"
                                                            ? "bg-green-400"
                                                            : item.iconColor === "text-orange-400"
                                                                ? "bg-orange-400"
                                                                : item.iconColor === "text-cyan-400"
                                                                    ? "bg-cyan-400"
                                                                    : "bg-indigo-400"
                                            }`}
                                        ></div>
                                        <div
                                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 delay-75 group-hover:scale-125 shadow-sm ${
                                                item.iconColor === "text-blue-400"
                                                    ? "bg-blue-300"
                                                    : item.iconColor === "text-purple-400"
                                                        ? "bg-purple-300"
                                                        : item.iconColor === "text-green-400"
                                                            ? "bg-green-300"
                                                            : item.iconColor === "text-orange-400"
                                                                ? "bg-orange-300"
                                                                : item.iconColor === "text-cyan-400"
                                                                    ? "bg-cyan-300"
                                                                    : "bg-indigo-300"
                                            }`}
                                        ></div>
                                        <div
                                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 delay-150 group-hover:scale-125 shadow-sm ${
                                                item.iconColor === "text-blue-400"
                                                    ? "bg-blue-200"
                                                    : item.iconColor === "text-purple-400"
                                                        ? "bg-purple-200"
                                                        : item.iconColor === "text-green-400"
                                                            ? "bg-green-200"
                                                            : item.iconColor === "text-orange-400"
                                                                ? "bg-orange-200"
                                                                : item.iconColor === "text-cyan-400"
                                                                    ? "bg-cyan-200"
                                                                    : "bg-indigo-200"
                                            }`}
                                        ></div>
                                    </div>

                                    {/* Action Hint */}
                                    <div
                                        className={`absolute bottom-5 ${item.type === "external" ? "right-10" : "right-5"} opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                                        <div className={`text-sm ${item.iconColor} font-medium tracking-wide`}>
                                            {item.type === "external" ? "Open Link " : "Explore →"}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Shine Effect */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div
                                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
