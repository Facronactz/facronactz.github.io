"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Sparkles, Globe, Palette, Sun, Moon, Settings } from "lucide-react"
// import {colorThemes} from "@/data/theme";
import {biodata, roles, socials} from "@/data/biodata";

type ColorTheme = "blue" | "purple" | "green" | "orange"
type Mode = "dark" | "light"

interface Theme {
  mode: Mode
  colorTheme: ColorTheme
}

export default function PortfolioIntro() {
  const [currentRole, setCurrentRole] = useState(0)
  const [theme, setTheme] = useState<Theme>({ mode: "dark", colorTheme: "blue" })
  const [showThemePanel, setShowThemePanel] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const colorThemes = {
    blue: {
      primary: { dark: "from-blue-600 to-cyan-600", light: "from-blue-500 to-cyan-500" },
      accent: { dark: "text-blue-400", light: "text-blue-600" },
      bg: { dark: "from-slate-900 via-slate-800 to-slate-900", light: "from-slate-50 via-white to-slate-100" },
      card: { dark: "bg-slate-800/30 border-slate-700/30", light: "bg-white/70 border-slate-200/50" },
      text: { dark: "text-white", light: "text-slate-900" },
      textSecondary: { dark: "text-slate-300", light: "text-slate-600" },
      textMuted: { dark: "text-slate-400", light: "text-slate-500" },
    },
    purple: {
      primary: { dark: "from-purple-600 to-pink-600", light: "from-purple-500 to-pink-500" },
      accent: { dark: "text-purple-400", light: "text-purple-600" },
      bg: { dark: "from-slate-900 via-purple-900 to-slate-900", light: "from-purple-50 via-white to-fuchsia-50" },
      card: { dark: "bg-slate-800/30 border-purple-700/30", light: "bg-white/70 border-purple-200/50" },
      text: { dark: "text-white", light: "text-slate-900" },
      textSecondary: { dark: "text-slate-300", light: "text-slate-600" },
      textMuted: { dark: "text-slate-400", light: "text-slate-500" },
    },
    green: {
      primary: { dark: "from-green-600 to-emerald-600", light: "from-green-500 to-emerald-500" },
      accent: { dark: "text-green-400", light: "text-green-600" },
      bg: { dark: "from-slate-900 via-green-900 to-slate-900", light: "from-green-50 via-white to-emerald-50" },
      card: { dark: "bg-slate-800/30 border-green-700/30", light: "bg-white/70 border-green-200/50" },
      text: { dark: "text-white", light: "text-slate-900" },
      textSecondary: { dark: "text-slate-300", light: "text-slate-600" },
      textMuted: { dark: "text-slate-400", light: "text-slate-500" },
    },
    orange: {
      primary: { dark: "from-orange-600 to-red-600", light: "from-orange-500 to-red-500" },
      accent: { dark: "text-orange-400", light: "text-orange-600" },
      bg: { dark: "from-slate-900 via-orange-900 to-slate-900", light: "from-orange-50 via-white to-red-50" },
      card: { dark: "bg-slate-800/30 border-orange-700/30", light: "bg-white/70 border-orange-200/50" },
      text: { dark: "text-white", light: "text-slate-900" },
      textSecondary: { dark: "text-slate-300", light: "text-slate-600" },
      textMuted: { dark: "text-slate-400", light: "text-slate-500" },
    },
  }


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
      const updatedTheme = { ...theme, ...newTheme }
      setTheme(updatedTheme)
      localStorage.setItem("portfolio-theme", JSON.stringify(updatedTheme))
      setIsTransitioning(false)
    }, 150)
  }

  const currentTheme = colorThemes[theme.colorTheme]

  return (
    <div
      className={`min-h-screen transition-all duration-500 ease-in-out ${isTransitioning ? "opacity-50 scale-95" : "opacity-100 scale-100"}`}
    >
      <div
        className={`min-h-screen bg-gradient-to-br ${currentTheme.bg[theme.mode]} ${currentTheme.text[theme.mode]} overflow-hidden relative transition-all duration-700`}
      >
        {/* Theme Controls */}
        <div className="fixed top-6 right-6 z-50 flex gap-3">
          {/* Mode Toggle */}
          <button
            onClick={() => changeTheme({ mode: theme.mode === "dark" ? "light" : "dark" })}
            className={`p-3 rounded-full ${currentTheme.card[theme.mode]} backdrop-blur-sm hover:scale-110 transition-all duration-300 border`}
          >
            {theme.mode === "dark" ? (
              <Sun className={`w-5 h-5 ${currentTheme.accent[theme.mode]}`} />
            ) : (
              <Moon className={`w-5 h-5 ${currentTheme.accent[theme.mode]}`} />
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
              <Palette className={`w-4 h-4 ${currentTheme.accent[theme.mode]}`} />
              <span className={`text-sm font-medium ${currentTheme.textSecondary[theme.mode]}`}>Color Theme</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(colorThemes) as ColorTheme[]).map((colorTheme) => (
                <button
                  key={colorTheme}
                  onClick={() => changeTheme({ colorTheme })}
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
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className={`floating-element absolute bottom-40 left-20 w-1.5 h-1.5 ${theme.colorTheme === "blue" ? "bg-blue-300" : theme.colorTheme === "purple" ? "bg-purple-300" : theme.colorTheme === "green" ? "bg-green-300" : "bg-orange-300"} rounded-full opacity-50`}
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className={`floating-element absolute bottom-20 right-40 w-1 h-1 ${theme.colorTheme === "blue" ? "bg-cyan-300" : theme.colorTheme === "purple" ? "bg-pink-300" : theme.colorTheme === "green" ? "bg-emerald-300" : "bg-red-300"} rounded-full opacity-30`}
            style={{ animationDelay: "6s" }}
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
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        {/* Main Content */}
        <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${currentTheme.card[theme.mode]} backdrop-blur-sm mb-8 border`}
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
                className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${theme.mode === "dark" ? "from-white via-slate-200 to-slate-400" : "from-slate-900 via-slate-700 to-slate-500"} bg-clip-text text-transparent`}
              >
                {biodata.name}
              </h1>
            </div>

            <div className="h-8 mb-8">
              <p
                className={`text-xl md:text-2xl ${currentTheme.textSecondary[theme.mode]} transition-all duration-500 ease-in-out`}
              >
                {roles[currentRole]}
              </p>
            </div>

            <p className={`text-lg ${currentTheme.textMuted[theme.mode]} max-w-2xl mx-auto leading-relaxed mb-12`}>
              Passionate about creating exceptional digital experiences through clean code, innovative solutions, and
              cutting-edge technology. Specializing in modern web development and scalable architecture.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full max-w-4xl">
            <div
              className={`group gradient-border-${theme.colorTheme} p-6 ${currentTheme.card[theme.mode]} hover:scale-105 transition-all duration-300 border rounded-2xl`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${theme.colorTheme === "blue" ? "from-blue-500/20 to-blue-600/20 border-blue-500/20" : theme.colorTheme === "purple" ? "from-purple-500/20 to-purple-600/20 border-purple-500/20" : theme.colorTheme === "green" ? "from-green-500/20 to-green-600/20 border-green-500/20" : "from-orange-500/20 to-orange-600/20 border-orange-500/20"} border`}
                >
                  <Code2
                    className={`w-6 h-6 ${theme.colorTheme === "blue" ? "text-blue-400" : theme.colorTheme === "purple" ? "text-purple-400" : theme.colorTheme === "green" ? "text-green-400" : "text-orange-400"}`}
                  />
                </div>
                <h3 className={`font-semibold ${currentTheme.text[theme.mode]}`}>Frontend</h3>
              </div>
              <p className={`${currentTheme.textMuted[theme.mode]} text-sm leading-relaxed`}>
                React, Next.js, TypeScript, Tailwind CSS
              </p>
              <div className="mt-4 flex gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${theme.colorTheme === "blue" ? "bg-blue-400" : theme.colorTheme === "purple" ? "bg-purple-400" : theme.colorTheme === "green" ? "bg-green-400" : "bg-orange-400"}`}
                ></div>
                <div
                  className={`w-2 h-2 rounded-full ${theme.colorTheme === "blue" ? "bg-blue-300" : theme.colorTheme === "purple" ? "bg-purple-300" : theme.colorTheme === "green" ? "bg-green-300" : "bg-orange-300"}`}
                ></div>
                <div
                  className={`w-2 h-2 rounded-full ${theme.colorTheme === "blue" ? "bg-blue-200" : theme.colorTheme === "purple" ? "bg-purple-200" : theme.colorTheme === "green" ? "bg-green-200" : "bg-orange-200"}`}
                ></div>
              </div>
            </div>

            <div
              className={`group gradient-border-${theme.colorTheme} p-6 ${currentTheme.card[theme.mode]} hover:scale-105 transition-all duration-300 border rounded-2xl`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${theme.colorTheme === "blue" ? "from-cyan-500/20 to-cyan-600/20 border-cyan-500/20" : theme.colorTheme === "purple" ? "from-pink-500/20 to-pink-600/20 border-pink-500/20" : theme.colorTheme === "green" ? "from-emerald-500/20 to-emerald-600/20 border-emerald-500/20" : "from-red-500/20 to-red-600/20 border-red-500/20"} border`}
                >
                  <Globe
                    className={`w-6 h-6 ${theme.colorTheme === "blue" ? "text-cyan-400" : theme.colorTheme === "purple" ? "text-pink-400" : theme.colorTheme === "green" ? "text-emerald-400" : "text-red-400"}`}
                  />
                </div>
                <h3 className={`font-semibold ${currentTheme.text[theme.mode]}`}>Backend</h3>
              </div>
              <p className={`${currentTheme.textMuted[theme.mode]} text-sm leading-relaxed`}>
                Node.js, Python, PostgreSQL, AWS
              </p>
              <div className="mt-4 flex gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${theme.colorTheme === "blue" ? "bg-cyan-400" : theme.colorTheme === "purple" ? "bg-pink-400" : theme.colorTheme === "green" ? "bg-emerald-400" : "bg-red-400"}`}
                ></div>
                <div
                  className={`w-2 h-2 rounded-full ${theme.colorTheme === "blue" ? "bg-cyan-300" : theme.colorTheme === "purple" ? "bg-pink-300" : theme.colorTheme === "green" ? "bg-emerald-300" : "bg-red-300"}`}
                ></div>
                <div
                  className={`w-2 h-2 rounded-full ${theme.colorTheme === "blue" ? "bg-cyan-200" : theme.colorTheme === "purple" ? "bg-pink-200" : theme.colorTheme === "green" ? "bg-emerald-200" : "bg-red-200"}`}
                ></div>
              </div>
            </div>

            <div
              className={`group gradient-border-${theme.colorTheme} p-6 ${currentTheme.card[theme.mode]} hover:scale-105 transition-all duration-300 border rounded-2xl`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${theme.colorTheme === "blue" ? "from-indigo-500/20 to-indigo-600/20 border-indigo-500/20" : theme.colorTheme === "purple" ? "from-violet-500/20 to-violet-600/20 border-violet-500/20" : theme.colorTheme === "green" ? "from-teal-500/20 to-teal-600/20 border-teal-500/20" : "from-amber-500/20 to-amber-600/20 border-amber-500/20"} border`}
                >
                  <Sparkles
                    className={`w-6 h-6 ${theme.colorTheme === "blue" ? "text-indigo-400" : theme.colorTheme === "purple" ? "text-violet-400" : theme.colorTheme === "green" ? "text-teal-400" : "text-amber-400"}`}
                  />
                </div>
                <h3 className={`font-semibold ${currentTheme.text[theme.mode]}`}>Innovation</h3>
              </div>
              <p className={`${currentTheme.textMuted[theme.mode]} text-sm leading-relaxed`}>
                AI/ML, Analyst, Implementation, Support, DevOps
              </p>
              <div className="mt-4 flex gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${theme.colorTheme === "blue" ? "bg-indigo-400" : theme.colorTheme === "purple" ? "bg-violet-400" : theme.colorTheme === "green" ? "bg-teal-400" : "bg-amber-400"}`}
                ></div>
                <div
                  className={`w-2 h-2 rounded-full ${theme.colorTheme === "blue" ? "bg-indigo-300" : theme.colorTheme === "purple" ? "bg-violet-300" : theme.colorTheme === "green" ? "bg-teal-300" : "bg-amber-300"}`}
                ></div>
                <div
                  className={`w-2 h-2 rounded-full ${theme.colorTheme === "blue" ? "bg-indigo-200" : theme.colorTheme === "purple" ? "bg-violet-200" : theme.colorTheme === "green" ? "bg-teal-200" : "bg-amber-200"}`}
                ></div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="text-center">
              <div className={`text-3xl font-bold ${currentTheme.text[theme.mode]} mb-1`}>5+</div>
              <div className={`text-sm ${currentTheme.textMuted[theme.mode]}`}>Projects Completed</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold ${currentTheme.text[theme.mode]} mb-1`}>50+</div>
              <div className={`text-sm ${currentTheme.textMuted[theme.mode]}`}>Certificates Earned</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold ${currentTheme.text[theme.mode]} mb-1`}>100+</div>
              <div className={`text-sm ${currentTheme.textMuted[theme.mode]}`}>Tools Mastered</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Button
              className={`group bg-gradient-to-r ${currentTheme.primary[theme.mode]} hover:shadow-xl text-white font-medium px-8 py-4 text-lg rounded-xl border-0 shadow-lg transition-all duration-300 transform hover:scale-105`}
              onClick={() => window.open("https://your-main-portfolio.com", "_blank")}
            >
              View Full Portfolio
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <p className={`text-sm ${currentTheme.textMuted[theme.mode]} mt-4`}>
              Explore my projects, experience, and achievements
            </p>
          </div>

          {/* Contact Info */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className={`flex items-center gap-6 text-sm ${currentTheme.textMuted[theme.mode]}`}>
              {socials.map((social) => (
                  <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:${currentTheme.textSecondary[theme.mode]} transition-colors`}
              >
                {social.name}
              </a>
              ))}
              <a
                href="mailto:alex@example.com"
                className={`hover:${currentTheme.textSecondary[theme.mode]} transition-colors`}
              >
                alex@example.com
              </a>
              <span>•</span>
              <a
                href="https://linkedin.com/in/alexjohnson"
                className={`hover:${currentTheme.textSecondary[theme.mode]} transition-colors`}
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="https://github.com/alexjohnson"
                className={`hover:${currentTheme.textSecondary[theme.mode]} transition-colors`}
              >
                GitHub
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
