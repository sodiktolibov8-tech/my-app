
import { NavLink } from 'react-router-dom'

export default function HeaderPart() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center justify-between">
        
        {/* Логотип */}
        <NavLink to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 group">
          <div className="w-10 h-10 text-white p-2 bg-gradient-to-tr from-indigo-600 to-purple-500 rounded-xl shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="ml-3 text-xl font-bold bg-gradient-to-r from-gray-900 via-indigo-900 to-indigo-600 bg-clip-text text-transparent">
            Alif Academy
          </span>
        </NavLink>

        {/* Навигационные ссылки */}
        <nav className="md:ml-auto md:mr-6 flex flex-wrap items-center text-base justify-center gap-1 sm:gap-2">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `px-4 py-2 rounded-lg font-medium transition-all ${
                isActive 
                  ? 'text-indigo-600 bg-indigo-50 font-semibold' 
                  : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
              }`
            }
          >
            Главная
          </NavLink>

          <NavLink 
            to="/first" 
            className={({ isActive }) => 
              `px-4 py-2 rounded-lg font-medium transition-all ${
                isActive 
                  ? 'text-indigo-600 bg-indigo-50 font-semibold' 
                  : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
              }`
            }
          >
            Модули
          </NavLink>

          <NavLink 
            to="/setting" 
            className={({ isActive }) => 
              `px-4 py-2 rounded-lg font-medium transition-all ${
                isActive 
                  ? 'text-indigo-600 bg-indigo-50 font-semibold' 
                  : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
              }`
            }
          >
            Настройки
          </NavLink>
        </nav>

        {/* Кнопка действия */}
        <button className="inline-flex items-center font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0 py-2 px-5 focus:outline-none hover:opacity-90 rounded-xl text-sm shadow-md shadow-indigo-500/20 active:scale-95 transition-all mt-4 md:mt-0">
          Связаться
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>

      </div>
    </header>
  )
}