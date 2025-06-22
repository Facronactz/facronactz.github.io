"use client"

import {ArrowLeft, Award, Calendar, MapPin} from "lucide-react"
import {Button} from "@/components/ui/button"

interface StudiesViewProps {
    onBack: () => void
    currentTheme: any
    theme: any
}

const educationData = [
    {
        degree: "Master of Computer Science",
        institution: "Stanford University",
        location: "Stanford, CA",
        period: "2018 - 2020",
        gpa: "3.9/4.0",
        highlights: ["Machine Learning Specialization", "Thesis: AI in Web Development", "Dean's List"],
    },
    {
        degree: "Bachelor of Software Engineering",
        institution: "MIT",
        location: "Cambridge, MA",
        period: "2014 - 2018",
        gpa: "3.8/4.0",
        highlights: ["Summa Cum Laude", "Computer Science Society President", "Hackathon Winner"],
    },
]

export default function StudiesView({onBack, currentTheme, theme}: StudiesViewProps) {
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

                <h1 className={`text-4xl font-bold ${currentTheme.text[theme.mode]} mb-2`}>Educational Background</h1>
                <p className={`text-lg ${currentTheme.textMuted[theme.mode]}`}>Academic journey and achievements</p>
            </header>

            <div className="space-y-6">
                {educationData.map((education, index) => (
                    <article
                        key={index}
                        className={`${currentTheme.card[theme.mode]} border rounded-2xl p-6 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300`}
                    >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div className="flex-1">
                                <h2 className={`text-xl font-semibold ${currentTheme.text[theme.mode]} mb-2`}>{education.degree}</h2>
                                <h3 className={`text-lg ${currentTheme.textSecondary[theme.mode]} mb-2`}>{education.institution}</h3>

                                <div className="flex flex-wrap gap-4 text-sm">
                                    <div className={`flex items-center gap-1 ${currentTheme.textMuted[theme.mode]}`}>
                                        <MapPin className="w-4 h-4"/>
                                        {education.location}
                                    </div>
                                    <div className={`flex items-center gap-1 ${currentTheme.textMuted[theme.mode]}`}>
                                        <Calendar className="w-4 h-4"/>
                                        {education.period}
                                    </div>
                                    <div className={`flex items-center gap-1 ${currentTheme.textMuted[theme.mode]}`}>
                                        <Award className="w-4 h-4"/>
                                        GPA: {education.gpa}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className={`font-medium ${currentTheme.textSecondary[theme.mode]} mb-2`}>Key
                                Highlights</h4>
                            <ul className="space-y-1">
                                {education.highlights.map((highlight, idx) => (
                                    <li key={idx}
                                        className={`text-sm ${currentTheme.textMuted[theme.mode]} flex items-center gap-2`}>
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
