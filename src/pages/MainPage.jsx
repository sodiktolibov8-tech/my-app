import React from 'react';
// Импортируем иконки для каждого этапа таймлайна
import { ShieldCheck, Activity, Code2, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import AlifLearningImg from "../assets/d5bb19e6-eb41-41f1-922c-996f0723bbd2.jpg";

export default function MainPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <section className="text-gray-600 dark:text-gray-300 body-font bg-gradient-to-b from-slate-50 via-white to-indigo-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950/50 py-12 transition-colors duration-300">
        <div className="container px-5 py-8 mx-auto">
          
          {/* Главный заголовок секции */}
          <div className="flex flex-col text-center w-full mb-12">
            <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 w-fit mx-auto mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Frontend Developer
            </span>
            <h1 className="sm:text-4xl text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
              Мой путь обучения в <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-indigo-600 to-purple-600 dark:from-emerald-400 dark:via-indigo-400 dark:to-purple-400">Alif Academy</span>
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-slate-600 dark:text-slate-400 text-base">
              Пошаговый прогресс превращения из новичка в уверенного разработчика SPA-приложений на React и Tailwind CSS.
            </p>
          </div>

          <div className="flex flex-wrap w-full items-center">
            
            {/* Левая часть: Таймлайн обучения */}
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              
              {/* МЕСЯЦ 1 */}
              <div className="flex relative pb-10 group">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gradient-to-b from-indigo-500 to-amber-500 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 inline-flex items-center justify-center text-white relative z-10 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-xs text-indigo-600 dark:text-indigo-400 mb-1 tracking-widest uppercase">
                    Месяц 1: HTML5 & CSS3
                  </h2>
                  <p className="leading-relaxed text-slate-600 dark:text-slate-400 text-sm">
                    Освоил семантическую верстку, адаптивный дизайн, Flexbox и CSS Grid. Активно использую фреймворк <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Tailwind CSS</span> для быстрой и чистой верстки.
                  </p>
                </div>
              </div>

              {/* МЕСЯЦ 2 */}
              <div className="flex relative pb-10 group">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gradient-to-b from-amber-500 to-cyan-500 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 inline-flex items-center justify-center text-white relative z-10 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-xs text-amber-600 dark:text-amber-400 mb-1 tracking-widest uppercase">
                    Месяц 2: JavaScript ES6+
                  </h2>
                  <p className="leading-relaxed text-slate-600 dark:text-slate-400 text-sm">
                    Изучил базовый JS, работу с DOM-деревом, асинхронность (<span className="text-amber-600 dark:text-amber-400 font-semibold">Promises, async/await</span>), работу с API (Fetch/Axios) и Git/GitHub для командной разработки.
                  </p>
                </div>
              </div>

              {/* МЕСЯЦ 3 */}
              <div className="flex relative pb-10 group">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gradient-to-b from-cyan-500 to-purple-500 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 inline-flex items-center justify-center text-white relative z-10 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-xs text-cyan-600 dark:text-cyan-400 mb-1 tracking-widest uppercase">
                    Месяц 3: React Ecosystem
                  </h2>
                  <p className="leading-relaxed text-slate-600 dark:text-slate-400 text-sm">
                    Погрузился в React (компоненты, хуки, React Router DOM), научился управлять глобальным состоянием с помощью <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Zustand</span> и собирать приложения на Vite.
                  </p>
                </div>
              </div>

              {/* ИТОГОВЫЙ ПРОЕКТ */}
              <div className="flex relative pb-10 group">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gradient-to-b from-purple-500 to-emerald-500 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 inline-flex items-center justify-center text-white relative z-10 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-xs text-purple-600 dark:text-purple-400 mb-1 tracking-widest uppercase">
                    Практика и Портфолио
                  </h2>
                  <p className="leading-relaxed text-slate-600 dark:text-slate-400 text-sm">
                    Закрепил знания созданием собственных веб-приложений (Todo App, динамические панели управления) с навигацией и стейт-менеджментом.
                  </p>
                </div>
              </div>

              {/* ФИНАЛ */}
              <div className="flex relative group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 inline-flex items-center justify-center text-white relative z-10 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-xs text-emerald-600 dark:text-emerald-400 mb-1 tracking-widest uppercase">
                    Выпуск и старт в IT
                  </h2>
                  <p className="leading-relaxed text-slate-600 dark:text-slate-400 text-sm">
                    Успешное завершение обучения в <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Alif Academy</span>, готовые проекты и база для работы Junior Frontend Developer! ✨
                  </p>
                </div>
              </div>

            </div>

            {/* Правая часть: Картинка с красивой рамкой и тенью */}
            <div className="lg:w-3/5 md:w-1/2 md:mt-0 mt-12 p-2">
              <div className="relative group">
                {/* Неоновое свечение на фоне */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                
                {/* Изображение */}
                <img
                  className="relative rounded-2xl shadow-2xl w-full object-cover object-center transform group-hover:scale-[1.01] transition duration-300 border border-white/20 dark:border-slate-800"
                  src={AlifLearningImg}
                  alt="Alif Academy Frontend Course Learning Path"
                />

                {/* Бейджик поверх картинки с эффектом стекла */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-white/50 dark:border-slate-800 shadow-lg flex items-center justify-between transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Курс пройден</span>
                  </div>
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">Alif Academy</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}