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
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 py-12 relative overflow-hidden transition-colors duration-300">
      <div className="container px-5 py-8 mx-auto max-w-6xl relative z-10">

        {/* Заголовок */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600 dark:bg-indigo-500/10 dark:border-indigo-500/30 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4" /> Портфолио
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">Мои Проекты</h1>
          <p className="text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
            Практические веб-приложения и работы, выполненные во время обучения.
          </p>
        </div>

        {/* Фильтры */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <Filter className="w-4 h-4 text-gray-400 dark:text-slate-400 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${filter === cat
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                  : 'bg-gray-100 border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800'
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
              className="p-6 rounded-3xl bg-gray-50/80 border border-gray-200/80 dark:bg-slate-900/80 dark:border-slate-800 backdrop-blur-xl flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-indigo-50 text-indigo-600 dark:bg-indigo-600/20 dark:text-indigo-400 rounded-2xl border border-indigo-100 dark:border-indigo-500/30">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-slate-800 dark:text-emerald-400 dark:border-slate-700">
                    {project.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-gray-200/60 text-gray-700 dark:bg-slate-800/80 dark:text-slate-300 text-xs font-medium border border-gray-300/40 dark:border-slate-700/50">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-slate-800">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-xs font-bold text-white dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Code2 className="w-4 h-4" /> Код
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white transition-colors shadow-md shadow-indigo-500/20"
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