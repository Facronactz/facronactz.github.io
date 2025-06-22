"use client"

import {Award, Briefcase, ExternalLink, FileText, FolderOpen, Globe, GraduationCap} from "lucide-react"

interface PageGridProps {
    onNavigate: (page: string) => void
    onExternalLink: (url: string) => void
    currentTheme: any
    theme: any
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
        url: "https://your-resume-website.com/cv.pdf",
    },
]

export default function PageGrid({onNavigate, onExternalLink, currentTheme, theme}: PageGridProps) {
    return (
        <section className="w-full max-w-4xl" aria-label="Portfolio Navigation">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {navigationItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                        <article
                            key={item.id}
                            className={`group relative overflow-hidden rounded-2xl ${currentTheme.card[theme.mode]} border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer`}
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
                                    onNavigate(item.id)
                                }
                            }}
                            tabIndex={0}
                            role="button"
                            aria-label={`Navigate to ${item.title} section`}
                        >
                            {item.type === "external" && (
                                <div className="absolute top-3 right-3">
                                    <ExternalLink className={`w-4 h-4 ${item.iconColor} opacity-60`}
                                                  aria-hidden="true"/>
                                </div>
                            )}
                            {/* Background Gradient */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                            ></div>

                            {/* Content */}
                            <div className="relative p-6 z-10">
                                <div className="flex items-start justify-between mb-4">
                                    <div
                                        className={`p-3 rounded-xl bg-gradient-to-br ${item.bgGradient} border ${item.borderColor}`}>
                                        <Icon className={`w-6 h-6 ${item.iconColor}`} aria-hidden="true"/>
                                    </div>
                                    <div className="text-right">
                                        <div
                                            className={`text-xs ${currentTheme.textMuted[theme.mode]} opacity-60`}>0{index + 1}</div>
                                    </div>
                                </div>

                                <h3
                                    className={`text-xl font-semibold ${currentTheme.text[theme.mode]} mb-2 group-hover:${item.iconColor} transition-colors duration-300`}
                                >
                                    {item.title}
                                </h3>

                                <p className={`${currentTheme.textMuted[theme.mode]} text-sm leading-relaxed mb-4`}>
                                    {item.description}
                                </p>

                                {/* Progress Indicator */}
                                <div className="flex gap-2">
                                    <div
                                        className={`w-2 h-2 rounded-full ${item.iconColor.replace("text-", "bg-")}`}></div>
                                    <div
                                        className={`w-2 h-2 rounded-full ${item.iconColor.replace("text-", "bg-").replace("400", "300")}`}
                                    ></div>
                                    <div
                                        className={`w-2 h-2 rounded-full ${item.iconColor.replace("text-", "bg-").replace("400", "200")}`}
                                    ></div>
                                </div>
                            </div>

                            {/* Hover Effect Border */}
                            <div
                                className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:${item.gradient} rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-100`}
                            ></div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
