import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
  Code2, 
  Terminal, 
  Sparkles, 
  Rocket, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2, 
  Cpu
} from 'lucide-react'

export default function AboutPage() {
  const skills = [
    'HTML5 / CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS',
    'Zustand', 'React Router', 'Git / GitHub', 'REST API', 'Vite'
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 relative overflow-hidden">
      
      {/* Декоративные фоновые эффекты */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-5 py-8 mx-auto max-w-5xl relative z-10">
        
        {/* Заголовок */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4" /> Frontend Developer
          </span>
          
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4">
            Создаю <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">современные</span> интерфейсы
          </h1>
          
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Студент <span className="text-emerald-400 font-semibold">Alif Academy</span>, увлеченный созданием быстрых, красивых и отзывчивых веб-приложений.
          </p>
        </div>

        {/* Сетка карточек */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          {/* Описание о себе */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl relative group hover:border-indigo-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-indigo-600/20 text-indigo-400 rounded-2xl border border-indigo-500/30">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Кто я?</h2>
                <p className="text-xs text-slate-400">Коротко о моей мотивации</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Я специализируюсь на разработке клиентской части веб-приложений. Мой стек — это <span className="text-indigo-400 font-semibold">React</span>, <span className="text-emerald-400 font-semibold">Tailwind CSS</span> и современные инструменты сборки вроде Vite. Стремлюсь писать чистый, поддерживаемый код и уделяю особое внимание UX/UI деталям.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                <span className="text-sm text-slate-300 font-medium">Alif Academy Student</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                <Rocket className="w-5 h-5 text-indigo-400" />
                <span className="text-sm text-slate-300 font-medium">Готов к проектам</span>
              </div>
            </div>
          </div>

          {/* Стек технологий */}
          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-600/20 text-purple-400 rounded-2xl border border-purple-500/30">
                  <Cpu className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-white">Мой Стек</h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700/60 hover:border-indigo-500 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Статус:</span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                В поиске проектов
              </span>
            </div>
          </div>

        </div>

        {/* Раздел с навыками */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 backdrop-blur-xl mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-600/20 text-emerald-400 rounded-2xl border border-emerald-500/30">
              <Briefcase className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white">Ключевые навыки</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4" /> Адаптивная верстка
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Отличная адаптация под любые экраны благодаря CSS Grid, Flexbox и Tailwind CSS.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4" /> SPA Приложения
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Быстрые переходы и маршутизация на стороне клиента с помощью React Router.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4" /> Глобальное состояние
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Легкое и понятное управление состоянием приложения с помощью Zustand.
              </p>
            </div>
          </div>
        </div>

        {/* Нижний блок с кнопками */}
        <div className="text-center p-8 rounded-3xl bg-slate-900/50 border border-slate-800">
          <h3 className="text-2xl font-bold text-white mb-3">Ознакомьтесь с моими работами</h3>
          <p className="text-slate-400 text-sm mb-6">
            Переходите к учебным модулям или взгляните на репозитории в GitHub!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <NavLink
              to="/first"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:opacity-90 active:scale-95 transition-all"
            >
              <Code2 className="w-4 h-4" /> Модули обучения
            </NavLink>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm hover:bg-slate-700 active:scale-95 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}