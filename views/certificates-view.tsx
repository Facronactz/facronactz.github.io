"use client"

import {ArrowLeft, Award, Calendar, ExternalLink} from "lucide-react"
import {Button} from "@/components/ui/button"
import {certificatesData} from "@/data/certificates";

interface CertificatesViewProps {
    onBack: () => void
    currentTheme: any
    theme: any
}

export default function CertificatesView({onBack, currentTheme, theme}: CertificatesViewProps) {
    const getLevelColor = (level: string) => {
        switch (level) {
            case "Expert":
                return "bg-red-500/20 text-red-400 border-red-500/30"
            case "Professional":
                return "bg-purple-500/20 text-purple-400 border-purple-500/30"
            case "Advanced":
                return "bg-blue-500/20 text-blue-400 border-blue-500/30"
            default:
                return "bg-green-500/20 text-green-400 border-green-500/30"
        }
    }

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

                <h1 className={`text-4xl font-bold ${currentTheme.text[theme.mode]} mb-2`}>Professional
                    Certifications</h1>
                <p className={`text-lg ${currentTheme.textMuted[theme.mode]}`}>
                    Industry-recognized credentials and achievements
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificatesData.map((certificate, index) => (
                    <article
                        key={index}
                        className={`${currentTheme.card[theme.mode]} border rounded-2xl p-6 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 group`}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div
                                    className="p-2 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/20">
                                    <Award className="w-5 h-5 text-orange-400"/>
                                </div>
                                <span
                                    className={`px-2 py-1 text-xs rounded-full ${getLevelColor(certificate.level)} border`}>
                  {certificate.level}
                </span>
                            </div>
                        </div>

                        <h2
                            className={`text-lg font-semibold ${currentTheme.text[theme.mode]} mb-2 group-hover:text-orange-400 transition-colors`}
                        >
                            {certificate.title}
                        </h2>

                        <h3 className={`text-sm ${currentTheme.textSecondary[theme.mode]} mb-4`}>{certificate.issuer}</h3>

                        <div className="space-y-2 mb-4 text-sm">
                            <div className={`flex items-center gap-2 ${currentTheme.textMuted[theme.mode]}`}>
                                <Calendar className="w-4 h-4"/>
                                <span>Issued: {certificate.issueDate}</span>
                                <span>•</span>
                                <span>Expires: {certificate.expiryDate}</span>
                            </div>
                            <div className={`text-xs ${currentTheme.textMuted[theme.mode]}`}>
                                Credential ID: {certificate.credentialId}
                            </div>
                        </div>

                        <div className="mb-4">
                            <h4 className={`text-sm font-medium ${currentTheme.textSecondary[theme.mode]} mb-2`}>Key
                                Skills</h4>
                            <div className="flex flex-wrap gap-1">
                                {certificate.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className={`px-2 py-1 text-xs rounded ${currentTheme.card[theme.mode]} border ${currentTheme.textMuted[theme.mode]}`}
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>

                        <a
                            href={certificate.verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1 text-sm ${currentTheme.textSecondary[theme.mode]} hover:text-orange-400 transition-colors`}
                            aria-label={`Verify ${certificate.title} certification`}
                        >
                            <ExternalLink className="w-4 h-4"/>
                            Verify Certificate
                        </a>
                    </article>
                ))}
            </div>
        </div>
    )
}
