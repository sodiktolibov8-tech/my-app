import React, { useState } from 'react'
import { FolderGit2, ExternalLink, Code2, Sparkles, Filter } from 'lucide-react'

const projects = [
    {
        id: 1,
        title: "Todo App (Zustand + Tailwind)",
        category: "React",
        description: "Приложение для управления задачами с фильтрацией, редактированием текста и сохранением состояния в Zustand.",
        tags: ["React", "Zustand", "Tailwind CSS"],
        demo: "#",
        github: "https://github.com",
        badge: "В разработке"
    },
    {
        id: 2,
        title: "Multi-page Theme Switcher",
        category: "CSS / JS",
        description: "Многостраничный макет с полноценной поддержкой светлой и темной темы через CSS переменные и Zustand.",
        tags: ["HTML/CSS", "JavaScript", "React Router"],
        demo: "#",
        github: "https://github.com",
        badge: "Готово"
    },
    {
        id: 3,
        title: "Alif Academy Educational Hub",
        category: "React",
        description: "Интерактивная платформа для отслеживания прогресса по модулям обучения с адаптивным дизайном.",
        tags: ["React", "Vite", "Lucide Icons"],
        demo: "#",
        github: "https://github.com",
        badge: "Готово"
    }
]

export default function ProjectsPage() {
    const [filter, setFilter] = useState('Все')
    const categories = ['Все', 'React', 'CSS / JS']

    const filteredProjects = filter === 'Все'
        ? projects
        : projects.filter(p => p.category === filter)

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 py-12 relative overflow-hidden">
            <div className="container px-5 py-8 mx-auto max-w-6xl relative z-10">

                {/* Заголовок */}
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">
                        <Sparkles className="w-4 h-4" /> Портфолио
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Мои Проекты</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Практические веб-приложения и работы, выполненные во время обучения.
                    </p>
                </div>

                {/* Фильтры */}
                <div className="flex items-center justify-center gap-3 mb-10">
                    <Filter className="w-4 h-4 text-slate-400 mr-1" />
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${filter === cat
                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Сетка проектов */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-indigo-600/20 text-indigo-400 rounded-2xl border border-indigo-500/30">
                                        <FolderGit2 className="w-6 h-6" />
                                    </div>
                                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-emerald-400 border border-slate-700">
                                        {project.badge}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 text-xs font-medium border border-slate-700/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-colors"
                                    >
                                        <Code2 className="w-4 h-4" /> Код
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" /> Демо
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}