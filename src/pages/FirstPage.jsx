import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Code2, Atom, Rocket, ArrowRight } from 'lucide-react';

const modules = [
  {
    id: 1,
    tag: "Модуль 1",
    title: "HTML5 & Tailwind CSS",
    description: "Освоил семантическую верстку, адаптивный дизайн, Flexbox и CSS Grid. Использую Tailwind CSS для быстрой верстки интерфейсов.",
    image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=800&auto=format&fit=crop",
    link: "/setting",
    badgeColor: "bg-indigo-600/90",
    hoverColor: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
    icon: Layout,
  },
  {
    id: 2,
    tag: "Модуль 2",
    title: "JavaScript ES6+",
    description: "Прокачал логику, работу с DOM, массивами, асинхронным кодом (Promises, Async/Await) и REST API.",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=800&auto=format&fit=crop",
    link: "/setting",
    badgeColor: "bg-amber-500/90",
    hoverColor: "group-hover:text-amber-500 dark:group-hover:text-amber-400",
    icon: Code2,
  },
  {
    id: 3,
    tag: "Модуль 3",
    title: "React & Ecosystem",
    description: "Создание интерактивных SPA: компоненты, хуки, роутинг с React Router DOM и менеджмент состояния.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    link: "/setting",
    badgeColor: "bg-cyan-500/90",
    hoverColor: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400",
    icon: Atom,
  },
  {
    id: 4,
    tag: "Финал",
    title: "Финальный проект",
    description: "Разработка полноценного веб-приложения на Vite + React с хранилищем Zustand и адаптивным UI.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    link: "/setting",
    badgeColor: "bg-emerald-500/90",
    hoverColor: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
    icon: Rocket,
  },
];

export default function FirstPage() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Добавлены тёмные классы для фона всей секции */}
      <section className="text-gray-600 dark:text-gray-300 body-font bg-gradient-to-b from-slate-50 via-white to-indigo-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950/50 py-12 transition-colors duration-300 min-h-screen">
        <div className="container px-5 py-12 mx-auto">
          
          {/* Главный заголовок */}
          <div className="flex flex-wrap w-full mb-16">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-3xl font-extrabold title-font mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                Модули обучения & Проекты
              </h1>
              <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full" />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-slate-600 dark:text-slate-400 text-lg">
              Пошаговый путь от базовой верстки до создания масштабируемых SPA-приложений. Каждая карточка — ключевая веха в изучении <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Frontend-разработки</span>! 🚀
            </p>
          </div>

          {/* Сетка карточек */}
          <div className="flex flex-wrap -m-4">
            {modules.map((item) => {
              const IconComponent = item.icon;

              return (
                <div key={item.id} className="xl:w-1/4 md:w-1/2 p-4">
                  {/* Добавлены dark:bg-slate-900 и dark:border-slate-800 для карточек */}
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-slate-950/50 border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1.5 h-full flex flex-col justify-between group">
                    <div>
                      {/* Картинка и плашка */}
                      <div className="relative overflow-hidden rounded-xl mb-6">
                        <img
                          className="h-44 rounded-xl w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                          src={item.image}
                          alt={item.title}
                        />
                        <span className={`absolute top-3 left-3 ${item.badgeColor} backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow flex items-center gap-1`}>
                          <IconComponent className="w-3.5 h-3.5" />
                          {item.tag}
                        </span>
                      </div>

                      {/* Заголовок и описание */}
                      <h2 className={`text-xl text-slate-900 dark:text-white font-bold title-font mb-3 ${item.hoverColor} transition-colors`}>
                        {item.title}
                      </h2>
                      <p className="leading-relaxed text-slate-500 dark:text-slate-400 text-sm mb-6">
                        {item.description}
                      </p>
                    </div>

                    {/* Интерактивная кнопка-ссылка */}
                    <NavLink
                      to={item.link}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors pt-2 border-t border-slate-100 dark:border-slate-800 group/btn"
                    >
                      Подробнее о модуле
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </NavLink>

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