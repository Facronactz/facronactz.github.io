"use client"

import {Award, Briefcase, ExternalLink, FileText, FolderOpen, Globe, GraduationCap} from "lucide-react"
import {useEffect, useRef} from "react"
import {getProgressIndicatorClasses} from "@/utils/theme-utils"

import {Theme, ThemeVariant} from "@/types/theme"

interface PageGridProps {
    onNavigate: (page: string) => void
    onExternalLink: (url: string) => void
    currentTheme: ThemeVariant
    theme: Theme
    resumeUrl: string
}

// Define types for navigation items
type NavigationItem = {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    gradient: string;
    bgGradient: string;
    borderColor: string;
    iconColor: string;
    type: 'internal' | 'external';
    url?: string;
};

// Define static gradient classes
type GradientClasses = {
    [key: string]: {
        gradient: string;
        bgGradient: string;
        borderColor: string;
        iconColor: string;
    };
};

const gradientClasses: GradientClasses = {
    blue: {
        gradient: 'from-blue-500 to-cyan-500',
        bgGradient: 'from-blue-500/20 to-cyan-500/20',
        borderColor: 'border-blue-500/20',
        iconColor: 'text-blue-400',
    },
    purple: {
        gradient: 'from-purple-500 to-pink-500',
        bgGradient: 'from-purple-500/20 to-pink-500/20',
        borderColor: 'border-purple-500/20',
        iconColor: 'text-purple-400',
    },
    green: {
        gradient: 'from-green-500 to-emerald-500',
        bgGradient: 'from-green-500/20 to-emerald-500/20',
        borderColor: 'border-green-500/20',
        iconColor: 'text-green-400',
    },
    orange: {
        gradient: 'from-orange-500 to-red-500',
        bgGradient: 'from-orange-500/20 to-red-500/20',
        borderColor: 'border-orange-500/20',
        iconColor: 'text-orange-400',
    },
    cyan: {
        gradient: 'from-cyan-500 to-teal-500',
        bgGradient: 'from-cyan-500/20 to-teal-500/20',
        borderColor: 'border-cyan-500/20',
        iconColor: 'text-cyan-400',
    },
    indigo: {
        gradient: 'from-indigo-500 to-purple-500',
        bgGradient: 'from-indigo-500/20 to-purple-500/20',
        borderColor: 'border-indigo-500/20',
        iconColor: 'text-indigo-400',
    },
};

const navigationItems: NavigationItem[] = [
    {
        id: 'studies',
        title: 'Studies',
        description: 'Academic background and education',
        icon: GraduationCap,
        type: 'internal',
        ...gradientClasses.blue,
    },
    {
        id: 'experiences',
        title: 'Experiences',
        description: 'Professional work history',
        icon: Briefcase,
        type: 'internal',
        ...gradientClasses.purple,
    },
    {
        id: 'projects',
        title: 'Projects',
        description: 'Featured work and portfolio',
        icon: FolderOpen,
        type: 'internal',
        ...gradientClasses.green,
    },
    {
        id: 'certificates',
        title: 'Certificates',
        description: 'Professional certifications',
        icon: Award,
        type: 'internal',
        ...gradientClasses.orange,
    },
    {
        id: 'online-profiles',
        title: 'Online Profiles',
        description: 'Social media and professional networks',
        icon: Globe,
        type: 'internal',
        ...gradientClasses.cyan,
    },
    {
        id: 'resume',
        title: 'View Resume',
        description: 'Download or view complete CV',
        icon: FileText,
        type: 'external',
        url: "https://facronactz.vercel.app/",
        ...gradientClasses.indigo,
    },
];

// Utility function to get text colors based on theme mode
const getTextColors = (mode: string) => {
    return {
        title: mode === 'dark' ? 'text-white' : 'text-gray-900',
        description: mode === 'dark' ? 'text-gray-300' : 'text-gray-600',
        actionHint: mode === 'dark' ? 'bg-gray-800/50 text-gray-300' : 'bg-gray-100 text-gray-700',
        background: mode === 'dark' ? 'bg-gray-900' : 'bg-white',
        border: mode === 'dark' ? 'border-gray-800/50' : 'border-gray-200/50',
    };
};

export default function PageGrid({onNavigate, onExternalLink, currentTheme, theme}: PageGridProps) {
    const gridRef = useRef<HTMLDivElement>(null);
    const textColors = getTextColors(theme.mode);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeInUp');
                    }
                });
            },
            {threshold: 0.1}
        );

        if (gridRef.current) {
            const items = gridRef.current.querySelectorAll('.grid-card');
            items.forEach((item) => observer.observe(item));
        }

        return () => observer.disconnect();
    }, []);

    const handleItemClick = (item: NavigationItem) => {
        if (item.type === 'external' && item.url) {
            onExternalLink(item.url);
        } else {
            onNavigate(item.id);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent, item: NavigationItem) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleItemClick(item);
        }
    };

    return (
        <section className="w-full max-w-5xl" aria-label="Portfolio Navigation">
            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {navigationItems.map((item, index) => {
                    const Icon = item.icon;
                    const cardClasses = [
                        'grid-card',
                        'group',
                        'relative',
                        'overflow-hidden',
                        'rounded-3xl',
                        'border',
                        'backdrop-blur-sm',
                        'interactive-card',
                        'enhanced-button',
                        'cursor-pointer',
                        'will-change-transform',
                        'shadow-lg',
                        'hover:shadow-2xl',
                        'transition-all',
                        'duration-500',
                        theme.mode === 'dark' ? 'bg-gray-900/50' : 'bg-white/80',
                        theme.mode === 'dark' ? 'border-gray-800/50' : 'border-gray-200/50',
                    ].join(' ');

                    return (
                        <article
                            key={item.id}
                            className={cardClasses}
                            onClick={() => handleItemClick(item)}
                            onKeyDown={(e) => handleKeyDown(e, item)}
                            tabIndex={0}
                            role="button"
                            aria-label={`Navigate to ${item.title} section`}
                        >
                            {/* Background Gradient */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-all duration-500 ${item.bgGradient}`}
                                aria-hidden="true"
                            />


                            {/* Gradient Border Effect */}
                            <div
                                className={`absolute inset-0 gradient-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                            ></div>

                            {/* Content */}
                            <div className="relative z-10 p-6 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <div
                                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${item.iconColor} bg-opacity-10`}>
                                        <Icon className="w-6 h-6"/>
                                    </div>
                                    {item.type === 'external' && (
                                        <ExternalLink
                                            className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"/>
                                    )}
                                </div>

                                <h3 className={`text-xl font-bold mb-3 ${textColors.title}`}>
                                    {item.title}
                                </h3>
                                <p className={`text-sm mb-6 ${textColors.description}`}>
                                    {item.description}
                                </p>

                                <div className="mt-auto flex justify-between items-center">
                                    {/* Progress Indicator */}
                                    <div className="flex gap-2">
                                        {[400, 300, 200].map((shade, idx) => (
                                            <div
                                                key={idx}
                                                className={getProgressIndicatorClasses(item.iconColor, shade, idx)}
                                            />
                                        ))}
                                    </div>

                                    {/* Action Hint */}
                                    <div
                                        className={`text-sm ${item.iconColor} font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                                        {item.type === 'external' ? 'Open Link →' : 'Explore →'}
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
                    );
                })}
            </div>
        </section>
    );
}
