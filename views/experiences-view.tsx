"use client"

import {ArrowLeft, Building, Calendar, MapPin} from "lucide-react"
import {Button} from "@/components/ui/button"
import {experienceData} from "@/data/experiences";

interface ExperiencesViewProps {
    onBack: () => void
    currentTheme: any
    theme: any
}

export default function ExperiencesView({onBack, currentTheme, theme}: ExperiencesViewProps) {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <header className="mb-8">
                <Button
                    onClick={onBack}
                    variant="ghost"
                    className={`mb-4 ${currentTheme.textSecondary[theme.mode]} hover:${currentTheme.text[theme.mode]}`}
                >
                    <ArrowLeft className="w-4 h-4 mr-2"/>
                    Back to Portfolio
                </Button>

                <h1 className={`text-4xl font-bold ${currentTheme.text[theme.mode]} mb-2`}>Professional Experience</h1>
                <p className={`text-lg ${currentTheme.textMuted[theme.mode]}`}>Career journey and key achievements</p>
            </header>

            <div className="space-y-6">
                {experienceData.map((experience, index) => (
                    <article
                        key={index}
                        className={`${currentTheme.card[theme.mode]} border rounded-2xl p-6 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300`}
                    >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div className="flex-1">
                                <h2 className={`text-xl font-semibold ${currentTheme.text[theme.mode]} mb-1`}>{experience.title}</h2>
                                <h3 className={`text-lg ${currentTheme.textSecondary[theme.mode]} mb-3`}>{experience.company}</h3>

                                <div className="flex flex-wrap gap-4 text-sm mb-4">
                                    <div className={`flex items-center gap-1 ${currentTheme.textMuted[theme.mode]}`}>
                                        <Building className="w-4 h-4"/>
                                        {experience.type}
                                    </div>
                                    <div className={`flex items-center gap-1 ${currentTheme.textMuted[theme.mode]}`}>
                                        <MapPin className="w-4 h-4"/>
                                        {experience.location}
                                    </div>
                                    <div className={`flex items-center gap-1 ${currentTheme.textMuted[theme.mode]}`}>
                                        <Calendar className="w-4 h-4"/>
                                        {experience.period}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h4 className={`font-medium ${currentTheme.textSecondary[theme.mode]} mb-3`}>Key
                                Achievements</h4>
                            <ul className="space-y-2">
                                {experience.achievements.map((achievement, idx) => (
                                    <li key={idx}
                                        className={`text-sm ${currentTheme.textMuted[theme.mode]} flex items-start gap-2`}>
                                        <div
                                            className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className={`font-medium ${currentTheme.textSecondary[theme.mode]} mb-2`}>Technologies
                                Used</h4>
                            <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className={`px-3 py-1 text-xs rounded-full ${currentTheme.card[theme.mode]} border ${currentTheme.textMuted[theme.mode]}`}
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
