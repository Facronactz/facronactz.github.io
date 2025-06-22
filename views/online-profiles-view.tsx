"use client"

import {ArrowLeft, ExternalLink, Github, Globe, Instagram, Linkedin, Twitter} from "lucide-react"
import {Button} from "@/components/ui/button"

interface OnlineProfilesViewProps {
    onBack: () => void
    currentTheme: any
    theme: any
}

const profilesData = [
    {
        platform: "GitHub",
        username: "@facronactz",
        url: "https://github.com/facronactz",
        description: "Open source projects and code repositories",
        icon: Github,
        color: "text-gray-400",
        bgColor: "from-gray-500/20 to-gray-600/20",
        borderColor: "border-gray-500/20",
        followers: "1.2K followers",
        stats: "150+ repositories",
    },
    {
        platform: "LinkedIn",
        username: "Farro Axza Febsinatra Sofi'ie",
        url: "https://linkedin.com/in/facronactz",
        description: "Professional network and career updates",
        icon: Linkedin,
        color: "text-blue-400",
        bgColor: "from-blue-500/20 to-blue-600/20",
        borderColor: "border-blue-500/20",
        followers: "5K+ connections",
        stats: "Software Engineer",
    },
    {
        platform: "Twitter",
        username: "@facronactzdev",
        url: "https://twitter.com/facronactzdev",
        description: "Tech insights and industry discussions",
        icon: Twitter,
        color: "text-sky-400",
        bgColor: "from-sky-500/20 to-sky-600/20",
        borderColor: "border-sky-500/20",
        followers: "2.5K followers",
        stats: "Tech enthusiast",
    },
    {
        platform: "Portfolio Website",
        username: "facronactz.dev",
        url: "https://facronactz.dev",
        description: "Complete portfolio and blog",
        icon: Globe,
        color: "text-green-400",
        bgColor: "from-green-500/20 to-green-600/20",
        borderColor: "border-green-500/20",
        followers: "Personal website",
        stats: "Full portfolio",
    },
    {
        platform: "Instagram",
        username: "@facronactz.codes",
        url: "https://instagram.com/facronactz.codes",
        description: "Behind the scenes and coding journey",
        icon: Instagram,
        color: "text-pink-400",
        bgColor: "from-pink-500/20 to-pink-600/20",
        borderColor: "border-pink-500/20",
        followers: "800 followers",
        stats: "Coding lifestyle",
    },
    {
        platform: "Dev.to",
        username: "@facronactz",
        url: "https://dev.to/facronactz",
        description: "Technical articles and tutorials",
        icon: Globe,
        color: "text-purple-400",
        bgColor: "from-purple-500/20 to-purple-600/20",
        borderColor: "border-purple-500/20",
        followers: "1K+ followers",
        stats: "50+ articles",
    },
]

export default function OnlineProfilesView({onBack, currentTheme, theme}: OnlineProfilesViewProps) {
    const handleProfileClick = (url: string, platform: string) => {
        window.open(url, "_blank", "noopener,noreferrer")
    }

    return (
        <div className="w-full max-w-6xl mx-auto">
            <header className="mb-8">
                <Button
                    onClick={onBack}
                    variant="ghost"
                    className={`mb-4 ${currentTheme.textSecondary[theme.mode]} hover:${currentTheme.text[theme.mode]}`}
                >
                    <ArrowLeft className="w-4 h-4 mr-2"/>
                    Back to Portfolio
                </Button>

                <h1 className={`text-4xl font-bold ${currentTheme.text[theme.mode]} mb-2`}>Online Profiles</h1>
                <p className={`text-lg ${currentTheme.textMuted[theme.mode]}`}>
                    Connect with me across various platforms and networks
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {profilesData.map((profile, index) => {
                    const Icon = profile.icon
                    return (
                        <article
                            key={index}
                            className={`group ${currentTheme.card[theme.mode]} border rounded-2xl p-6 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden`}
                            onClick={() => handleProfileClick(profile.url, profile.platform)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault()
                                    handleProfileClick(profile.url, profile.platform)
                                }
                            }}
                            tabIndex={0}
                            role="button"
                            aria-label={`Visit ${profile.platform} profile`}
                        >
                            {/* Background Gradient */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${profile.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                            ></div>

                            {/* External Link Indicator */}
                            <div className="absolute top-4 right-4">
                                <ExternalLink
                                    className={`w-4 h-4 ${profile.color} opacity-60 group-hover:opacity-100 transition-opacity`}
                                />
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex items-start gap-4 mb-4">
                                    <div
                                        className={`p-3 rounded-xl bg-gradient-to-br ${profile.bgColor} border ${profile.borderColor}`}>
                                        <Icon className={`w-6 h-6 ${profile.color}`} aria-hidden="true"/>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h2
                                            className={`text-lg font-semibold ${currentTheme.text[theme.mode]} mb-1 group-hover:${profile.color} transition-colors duration-300`}
                                        >
                                            {profile.platform}
                                        </h2>
                                        <p className={`text-sm ${currentTheme.textSecondary[theme.mode]} truncate`}>{profile.username}</p>
                                    </div>
                                </div>

                                <p className={`text-sm ${currentTheme.textMuted[theme.mode]} mb-4 leading-relaxed`}>
                                    {profile.description}
                                </p>

                                <div className="flex items-center justify-between text-xs">
                                    <span className={`${currentTheme.textMuted[theme.mode]}`}>{profile.followers}</span>
                                    <span className={`${profile.color} font-medium`}>{profile.stats}</span>
                                </div>

                                {/* Progress Indicator */}
                                <div className="flex gap-2 mt-4">
                                    <div
                                        className={`w-2 h-2 rounded-full ${profile.color.replace("text-", "bg-")}`}></div>
                                    <div
                                        className={`w-2 h-2 rounded-full ${profile.color.replace("text-", "bg-").replace("400", "300")}`}
                                    ></div>
                                    <div
                                        className={`w-2 h-2 rounded-full ${profile.color.replace("text-", "bg-").replace("400", "200")}`}
                                    ></div>
                                </div>
                            </div>

                            {/* Hover Effect Border */}
                            <div
                                className={`absolute inset-0 border-2 border-transparent group-hover:${profile.borderColor.replace("border-", "border-")} rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-100`}
                            ></div>
                        </article>
                    )
                })}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
                <p className={`text-sm ${currentTheme.textMuted[theme.mode]} mb-4`}>
                    Feel free to connect with me on any of these platforms
                </p>
                <div className="flex flex-wrap justify-center gap-4">
          <span
              className={`text-xs ${currentTheme.textMuted[theme.mode]} px-3 py-1 rounded-full ${currentTheme.card[theme.mode]} border`}
          >
            Always open to collaboration
          </span>
                    <span
                        className={`text-xs ${currentTheme.textMuted[theme.mode]} px-3 py-1 rounded-full ${currentTheme.card[theme.mode]} border`}
                    >
            Quick to respond
          </span>
                </div>
            </div>
        </div>
    )
}
