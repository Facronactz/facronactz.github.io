"use client"

import {ArrowLeft, Calendar, ExternalLink, Github} from "lucide-react"
import {Button} from "@/components/ui/button"

interface ProjectsViewProps {
    onBack: () => void
    currentTheme: any
    theme: any
}

const projectsData = [
    {
        title: "E-Commerce Platform",
        description:
            "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
        image: "/placeholder.svg?height=200&width=400",
        technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
        liveUrl: "https://example-ecommerce.com",
        githubUrl: "https://github.com/facronactz/ecommerce-platform",
        completedDate: "2023",
        status: "Live",
    },
    {
        title: "Task Management App",
        description:
            "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.",
        image: "/placeholder.svg?height=200&width=400",
        technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
        liveUrl: "https://example-taskmanager.com",
        githubUrl: "https://github.com/facronactz/task-manager",
        completedDate: "2023",
        status: "Live",
    },
    {
        title: "AI Content Generator",
        description:
            "Machine learning powered content generation tool with natural language processing and custom model training.",
        image: "/placeholder.svg?height=200&width=400",
        technologies: ["Python", "TensorFlow", "FastAPI", "React", "Docker"],
        liveUrl: "https://example-ai-content.com",
        githubUrl: "https://github.com/facronactz/ai-content-generator",
        completedDate: "2022",
        status: "Live",
    },
]

export default function ProjectsView({onBack, currentTheme, theme}: ProjectsViewProps) {
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

                <h1 className={`text-4xl font-bold ${currentTheme.text[theme.mode]} mb-2`}>Featured Projects</h1>
                <p className={`text-lg ${currentTheme.textMuted[theme.mode]}`}>Showcase of recent work and
                    achievements</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project, index) => (
                    <article
                        key={index}
                        className={`${currentTheme.card[theme.mode]} border rounded-2xl overflow-hidden backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 group`}
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={project.image || "/placeholder.svg"}
                                alt={`${project.title} preview`}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-3 right-3">
                <span
                    className={`px-2 py-1 text-xs rounded-full ${project.status === "Live" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"} border ${project.status === "Live" ? "border-green-500/30" : "border-yellow-500/30"}`}
                >
                  {project.status}
                </span>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flex items-start justify-between mb-3">
                                <h2
                                    className={`text-lg font-semibold ${currentTheme.text[theme.mode]} group-hover:text-green-400 transition-colors`}
                                >
                                    {project.title}
                                </h2>
                                <div
                                    className={`flex items-center gap-1 text-xs ${currentTheme.textMuted[theme.mode]}`}>
                                    <Calendar className="w-3 h-3"/>
                                    {project.completedDate}
                                </div>
                            </div>

                            <p className={`text-sm ${currentTheme.textMuted[theme.mode]} mb-4 leading-relaxed`}>
                                {project.description}
                            </p>

                            <div className="mb-4">
                                <div className="flex flex-wrap gap-1 mb-3">
                                    {project.technologies.slice(0, 3).map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className={`px-2 py-1 text-xs rounded ${currentTheme.card[theme.mode]} border ${currentTheme.textMuted[theme.mode]}`}
                                        >
                      {tech}
                    </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span
                                            className={`px-2 py-1 text-xs rounded ${currentTheme.textMuted[theme.mode]}`}>
                      +{project.technologies.length - 3} more
                    </span>
                                    )}
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-1 text-sm ${currentTheme.textSecondary[theme.mode]} hover:text-green-400 transition-colors`}
                                    aria-label={`View ${project.title} live demo`}
                                >
                                    <ExternalLink className="w-4 h-4"/>
                                    Live Demo
                                </a>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-1 text-sm ${currentTheme.textSecondary[theme.mode]} hover:text-green-400 transition-colors`}
                                    aria-label={`View ${project.title} source code`}
                                >
                                    <Github className="w-4 h-4"/>
                                    Source
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
