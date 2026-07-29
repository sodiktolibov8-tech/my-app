import React from 'react';
// Заменили Github на GitBranch
import { LayoutGrid, Palette, BrainCircuit, Atom, Sigma, GitBranch } from 'lucide-react';

const projects = [
  {
    id: 1,
    subtitle: "ALIF ACADEMY",
    title: "Основы Frontend",
    description: "Изучение верстки: семантический HTML5, адаптивная и отзывчивая верстка на CSS3 с использованием Flexbox и Grid.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    icon: LayoutGrid,
    badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-300",
  },
  {
    id: 2,
    subtitle: "TAILWIND CSS",
    title: "Современный UI / UX",
    description: "Быстрая стилизация компонентов с помощью утилитарных классов Tailwind CSS, создание чистых интерфейсов.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
    icon: Palette,
    badgeColor: "bg-sky-100 text-sky-700 border-sky-300",
  },
  {
    id: 3,
    subtitle: "JAVASCRIPT",
    title: "Интерактивность и Логика",
    description: "Работа с DOM, массивами, объектами, асинхронными запросами (Fetch/Axios) и обработкой JSON данных.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    icon: BrainCircuit,
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
  },
  {
    id: 4,
    subtitle: "REACT.JS",
    title: "Компонентный подход",
    description: "Создание масштабируемых SPA-приложений, использование хуков (useState, useEffect) и React Router.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80",
    icon: Atom,
    badgeColor: "bg-indigo-100 text-indigo-700 border-indigo-300",
  },
  {
    id: 5,
    subtitle: "STATE MANAGEMENT",
    title: "Управление состоянием (Zustand)",
    description: "Организация глобального состояния приложения, фильтрация данных и оптимизация рендеринга.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    icon: Sigma,
    badgeColor: "bg-purple-100 text-purple-700 border-purple-300",
  },
  {
    id: 6,
    subtitle: "GIT & GITHUB",
    title: "Командная разработка",
    description: "Контроль версий, работа с ветками, отправка проектов на GitHub и деплой веб-приложений.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=600&q=80",
    icon: GitBranch,
    badgeColor: "bg-rose-100 text-rose-700 border-rose-300",
  },
];

export default function SettingPage() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen py-12">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          
          {/* Заголовок */}
          <div className="flex flex-col text-center w-full mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 mb-2">
              Портфолио
            </span>
            <h1 className="sm:text-4xl text-3xl font-extrabold title-font mb-4 text-slate-900">
              Мой путь во Frontend-разработке
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-slate-600">
              Проекты и технологии, которые я освоил во время обучения в{" "}
              <span className="font-bold text-emerald-600">Alif Academy</span>. Разрабатываю современные, быстрые и удобные веб-приложения.
            </p>
          </div>

          {/* Сетка карточек */}
          <div className="flex flex-wrap -m-4">
            {projects.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="group relative h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200/80 bg-white">
                    
                    {/* Фотографический фоновый слой */}
                    <img
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      src={item.image}
                    />
                    
                    {/* Тёмный оверлей для контраста */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-black/20 group-hover:opacity-10 transition-opacity duration-300" />

                    {/* Цветная плашка с информацией (показывается при наведении) */}
                    <div className="px-6 py-6 relative z-10 w-full h-full bg-white/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`p-1.5 rounded-lg border text-xs font-bold flex items-center gap-1.5 ${item.badgeColor}`}>
                          <Icon className="w-4 h-4" />
                          {item.subtitle}
                        </span>
                      </div>
                      <h1 className="title-font text-xl font-bold text-slate-900 mb-2">
                        {item.title}
                      </h1>
                      <p className="leading-relaxed text-sm text-slate-600 font-normal">
                        {item.description}
                      </p>
                    </div>

                    {/* Плашка, видная до наведения */}
                    <div className="absolute bottom-0 inset-x-0 p-6 z-10 group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md flex items-center gap-1.5 ${item.badgeColor}`}>
                        <Icon className="w-3.5 h-3.5" />
                        {item.subtitle}
                      </span>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}