import React from 'react'
import AlifLearningImg from "../assets/d5bb19e6-eb41-41f1-922c-996f0723bbd2.jpg"

export default function MainPage() {
  return (
    <>
      <section className="text-gray-600 body-font bg-gradient-to-b from-slate-50 via-white to-indigo-50/20 py-12">
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full items-center">
            
            {/* Левая часть: Таймлайн обучения */}
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              
              {/* МЕСЯЦ 1 */}
              <div className="flex relative pb-10 group">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gradient-to-b from-indigo-500 to-amber-500 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 inline-flex items-center justify-center text-white relative z-10 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-xs text-indigo-600 mb-1 tracking-widest uppercase">
                    Месяц 1: HTML5 & CSS3
                  </h2>
                  <p className="leading-relaxed text-gray-600 text-sm">
                    Освоил семантическую верстку, адаптивный дизайн, Flexbox и CSS Grid. Нашел удобный стилизатор <span className="text-indigo-600 font-semibold">Tailwind CSS</span> для быстрой верстки интерфейсов.
                  </p>
                </div>
              </div>

              {/* МЕСЯЦ 2 */}
              <div className="flex relative pb-10 group">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gradient-to-b from-amber-500 to-cyan-500 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 inline-flex items-center justify-center text-white relative z-10 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-xs text-amber-600 mb-1 tracking-widest uppercase">
                    Месяц 2: JavaScript ES6+
                  </h2>
                  <p className="leading-relaxed text-gray-600 text-sm">
                    Изучил базовый JS, работу с DOM-деревом, асинхронность (<span className="text-amber-600 font-medium">Promises, async/await</span>), API (Fetch/Axios) и Git/GitHub для командной разработки.
                  </p>
                </div>
              </div>

              {/* МЕСЯЦ 3 */}
              <div className="flex relative pb-10 group">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gradient-to-b from-cyan-500 to-purple-500 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 inline-flex items-center justify-center text-white relative z-10 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx={12} cy={5} r={3} />
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-xs text-cyan-600 mb-1 tracking-widest uppercase">
                    Месяц 3: React Ecosystem
                  </h2>
                  <p className="leading-relaxed text-gray-600 text-sm">
                    Погрузился в React (компоненты, хуки, React Router DOM), научился управлять глобальным состоянием с помощью <span className="text-cyan-600 font-medium">Zustand</span> и собирать приложения на Vite.
                  </p>
                </div>
              </div>

              {/* ИТОГОВЫЙ ПРОЕКТ */}
              <div className="flex relative pb-10 group">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gradient-to-b from-purple-500 to-emerald-500 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 inline-flex items-center justify-center text-white relative z-10 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-xs text-purple-600 mb-1 tracking-widest uppercase">
                    Практика и Портфолио
                  </h2>
                  <p className="leading-relaxed text-gray-600 text-sm">
                    Закрепил знания созданием собственных веб-приложений (Todo App, динамические панели) с маршрутизацией и стейт-менеджментом.
                  </p>
                </div>
              </div>

              {/* ФИНАЛ */}
              <div className="flex relative group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 inline-flex items-center justify-center text-white relative z-10 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-xs text-emerald-600 mb-1 tracking-widest uppercase">
                    Выпуск и старт в IT
                  </h2>
                  <p className="leading-relaxed text-gray-600 text-sm">
                    Успешное завершение обучения в <span className="text-emerald-600 font-semibold">Alif Academy</span>, готовое портфолио и база для работы Junior Frontend Developer! ✨
                  </p>
                </div>
              </div>

            </div>

            {/* Правая часть: Картинка с красивой рамкой и тенью */}
            <div className="lg:w-3/5 md:w-1/2 md:mt-0 mt-12 p-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                <img
                  className="relative rounded-2xl shadow-xl w-full object-cover object-center transform group-hover:scale-[1.01] transition duration-300"
                  src={AlifLearningImg}
                  alt="Alif Academy Frontend Course Learning Path"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}