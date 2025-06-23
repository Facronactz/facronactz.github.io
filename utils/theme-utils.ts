// Theme color mappings for consistent theming across the application

type ColorTheme = 'blue' | 'purple' | 'green' | 'orange' | 'cyan' | 'indigo';

// Map icon colors to their corresponding background colors
export const getBackgroundColorFromIcon = (iconColor: string): string => {
    const colorMap: Record<string, ColorTheme> = {
        'text-blue-400': 'blue',
        'text-purple-400': 'purple',
        'text-green-400': 'green',
        'text-orange-400': 'orange',
        'text-cyan-400': 'cyan',
        'text-indigo-400': 'indigo'
    };
    
    return colorMap[iconColor] || 'indigo';
};

// Generate complete static class names for progress indicators
export const getProgressIndicatorClasses = (iconColor: string, shade: number, index: number): string => {
    const baseColor = getBackgroundColorFromIcon(iconColor);
    const baseClasses = 'w-2.5 h-2.5 rounded-full transition-all duration-300 group-hover:scale-125 shadow-sm';
    const delayClass = index === 1 ? 'delay-75' : index === 2 ? 'delay-150' : '';
    
    // Map of all possible color and shade combinations
    const colorShadeMap: Record<string, Record<number, string>> = {
        blue: {
            200: 'bg-blue-200',
            300: 'bg-blue-300',
            400: 'bg-blue-400'
        },
        purple: {
            200: 'bg-purple-200',
            300: 'bg-purple-300',
            400: 'bg-purple-400'
        },
        green: {
            200: 'bg-green-200',
            300: 'bg-green-300',
            400: 'bg-green-400'
        },
        orange: {
            200: 'bg-orange-200',
            300: 'bg-orange-300',
            400: 'bg-orange-400'
        },
        cyan: {
            200: 'bg-cyan-200',
            300: 'bg-cyan-300',
            400: 'bg-cyan-400'
        },
        indigo: {
            200: 'bg-indigo-200',
            300: 'bg-indigo-300',
            400: 'bg-indigo-400'
        }
    };
    
    const colorClass = colorShadeMap[baseColor]?.[shade] || 'bg-indigo-400';
    
    return `${baseClasses} ${delayClass} ${colorClass}`.trim();
};

// Generate button variant classes based on theme and mode
export const getButtonVariant = (colorTheme: string, mode: 'dark' | 'light') => {
    const baseClasses = 'px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105';
    
    const variants: Record<string, Record<string, string>> = {
        blue: {
            dark: 'bg-slate-800/50 hover:bg-slate-700/50 text-white hover:ring-2 hover:ring-blue-400/30',
            light: 'bg-white/80 hover:bg-white text-slate-900 hover:ring-2 hover:ring-blue-500/20'
        },
        purple: {
            dark: 'bg-slate-800/50 hover:bg-slate-700/50 text-white hover:ring-2 hover:ring-purple-400/30',
            light: 'bg-white/80 hover:bg-white text-slate-900 hover:ring-2 hover:ring-purple-500/20'
        },
        green: {
            dark: 'bg-slate-800/50 hover:bg-slate-700/50 text-white hover:ring-2 hover:ring-green-400/30',
            light: 'bg-white/80 hover:bg-white text-slate-900 hover:ring-2 hover:ring-green-500/20'
        },
        orange: {
            dark: 'bg-slate-800/50 hover:bg-slate-700/50 text-white hover:ring-2 hover:ring-orange-400/30',
            light: 'bg-white/80 hover:bg-white text-slate-900 hover:ring-2 hover:ring-orange-500/20'
        }
    };
    
    const variant = variants[colorTheme] || variants.blue;
    return `${baseClasses} ${variant[mode]}`.trim();
};
