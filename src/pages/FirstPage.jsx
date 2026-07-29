import React from 'react'
import { NavLink } from "react-router-dom"

export default function FirstPage() {
  return (
    <div>
      <section className="text-gray-600 body-font bg-gradient-to-b from-slate-50 via-white to-indigo-50/30 py-12">
        <div className="container px-5 py-12 mx-auto">
          
          {/* Главный заголовок с градиентом */}
          <div className="flex flex-wrap w-full mb-16">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-3xl font-extrabold title-font mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
                Модули обучения & Проекты
              </h1>
              <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full" />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-600 text-lg">
              Пошаговый путь от базовой верстки до создания масштабируемых SPA-приложений. Каждая карточка — ключевая веха в изучении <span className="text-indigo-600 font-semibold">Frontend-разработки</span>! 🚀
            </p>
          </div>

          {/* Сетка карточек */}
          <div className="flex flex-wrap -m-4">
            
            {/* Карточка 1: HTML & CSS */}
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1.5 h-full flex flex-col justify-between group">
                <div>
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      className="h-44 rounded-xl w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                      src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=800&auto=format&fit=crop"
                      alt="HTML5 & CSS3"
                    />
                    <span className="absolute top-3 left-3 bg-indigo-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                      Модуль 1
                    </span>
                  </div>
                  <h2 className="text-xl text-gray-900 font-bold title-font mb-3 group-hover:text-indigo-600 transition-colors">
                    HTML5 & Tailwind CSS
                  </h2>
                  <p className="leading-relaxed text-gray-500 text-sm">
                    Освоил семантическую верстку, адаптивный дизайн, Flexbox и CSS Grid. Использую <span className="text-indigo-500 font-medium">Tailwind CSS</span> для быстрой верстки интерфейсов.
                  </p>
                </div>
              </div>
            </div>

            {/* Карточка 2: JavaScript */}
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1.5 h-full flex flex-col justify-between group">
                <div>
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      className="h-44 rounded-xl w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                      src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=800&auto=format&fit=crop"
                      alt="JavaScript ES6+"
                    />
                    <span className="absolute top-3 left-3 bg-amber-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                      Модуль 2
                    </span>
                  </div>
                  <h2 className="text-xl text-gray-900 font-bold title-font mb-3 group-hover:text-amber-500 transition-colors">
                    JavaScript ES6+
                  </h2>
                  <p className="leading-relaxed text-gray-500 text-sm">
                    Прокачал логику, работы с <span className="text-amber-600 font-medium">DOM</span>, массивами, асинхронным кодом (Promises, Async/Await) и REST API.
                  </p>
                </div>
              </div>
            </div>

            {/* Карточка 3: React */}
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1.5 h-full flex flex-col justify-between group">
                <div>
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      className="h-44 rounded-xl w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                      src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop"
                      alt="React Ecosystem"
                    />
                    <span className="absolute top-3 left-3 bg-cyan-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                      Модуль 3
                    </span>
                  </div>
                  <h2 className="text-xl text-gray-900 font-bold title-font mb-3 group-hover:text-cyan-600 transition-colors">
                    React & Ecosystem
                  </h2>
                  <p className="leading-relaxed text-gray-500 text-sm">
                    Создание интерактивных SPA: компоненты, хуки, роутинг с <span className="text-cyan-600 font-medium">React Router</span> и менеджмент состояния.
                  </p>
                </div>
              </div>
            </div>

            {/* Карточка 4: Дипломный проект */}
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1.5 h-full flex flex-col justify-between group">
                <div>
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      className="h-44 rounded-xl w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
                      alt="Финальный проект"
                    />
                    <span className="absolute top-3 left-3 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                      Финал
                    </span>
                  </div>
                  <h2 className="text-xl text-gray-900 font-bold title-font mb-3 group-hover:text-emerald-600 transition-colors">
                    Финальный проект
                  </h2>
                  <p className="leading-relaxed text-gray-500 text-sm">
                    Разработка полноценного веб-приложения на <span className="text-emerald-600 font-medium">Vite + React</span> с хранилищем Zustand и адаптивным UI.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}