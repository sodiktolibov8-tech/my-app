import { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppStore } from '../store/useAppStore'
import { Home, LayoutGrid, Settings, User, FolderGit2, Mail, MessageCircle } from 'lucide-react'

export default function HeaderPart() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  // Zustand состояние темы
  const theme = useAppStore((state) => state.theme)
  const toggleTheme = useAppStore((state) => state.toggleTheme)
  const isDark = theme === 'dark'

  // Синхронизация классов и с <html> (для Tailwind), и с <body>
  useEffect(() => {
    const root = document.documentElement
    const body = document.body

    if (isDark) {
      root.classList.add('dark')
      body.className = 'dark'
    } else {
      root.classList.remove('dark')
      body.className = 'light'
    }
  }, [isDark])

  // Закрытие меню при клике вне его области
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const whatsappNumber = '992907161771'
  const defaultText = encodeURIComponent('Привет! Я посмотрел твое портфолио и хочу написать тебе.')

  const menuItems = [
    { to: '/', label: 'Главная', icon: Home },
    { to: '/first', label: 'Модули', icon: LayoutGrid },
    { to: '/projects', label: 'Проекты', icon: FolderGit2 },
    { to: '/about', label: 'Обо мне', icon: User },
    { to: '/contact', label: 'Контакты', icon: Mail },
    { to: '/setting', label: 'Портфолио', icon: Settings },
    {
      to: `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${defaultText}`,
      label: 'WhatsApp',
      icon: MessageCircle,
      isExternal: true
    },
  ]

  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${isDark
      ? 'bg-slate-950/90 border-slate-800 text-white shadow-lg'
      : 'bg-white/90 border-gray-100 text-gray-900 shadow-sm'
      }`}>
      <div className="container mx-auto flex p-4 items-center justify-between">

        {/* Логотип Alif Academy */}
        <NavLink to="/" className="flex title-font font-medium items-center group">
          <div className="w-10 h-10 text-white p-2 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform flex items-center justify-center">
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
          <span className={`ml-3 text-xl font-bold transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Alif Academy
          </span>
        </NavLink>

        {/* Правый блок: Гамбургер-меню и Кнопка Темы */}
        <div className="flex items-center gap-3 relative" ref={menuRef}>

          {/* Кнопка-гамбургер */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2.5 rounded-xl border text-sm transition-all active:scale-95 ${isDark
              ? 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800'
              : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
              }`}
            aria-label="Открыть меню"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Кнопка смены темы */}
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0 py-2 px-4 focus:outline-none hover:opacity-90 rounded-xl text-sm shadow-md shadow-indigo-500/20 active:scale-95 transition-all cursor-pointer"
          >
            <span className="mr-1.5 text-base">{isDark ? '🌙' : '☀️'}</span>
            <span>{isDark ? 'Темная' : 'Светлая'}</span>
          </button>

          {/* Выпадающее меню */}
          {isOpen && (
            <div className={`absolute right-0 top-14 w-56 rounded-2xl shadow-2xl border p-2 z-50 transition-all ${isDark
              ? 'bg-slate-900 border-slate-800 text-slate-200'
              : 'bg-white border-slate-100 text-slate-700'
              }`}>
              <div className="flex flex-col gap-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const linkClass = `flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${isDark
                    ? 'hover:bg-slate-800 hover:text-white'
                    : 'hover:bg-gray-50 hover:text-gray-900'
                    }`;

                  if (item.isExternal) {
                    return (
                      <a
                        key={item.label}
                        href={item.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className={`${linkClass} text-emerald-500 hover:text-emerald-400 font-semibold`}
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        <span>{item.label}</span>
                      </a>
                    );
                  }

                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive
                          ? isDark
                            ? 'bg-blue-600/20 text-blue-400 font-semibold'
                            : 'bg-indigo-50 text-indigo-600 font-semibold'
                          : isDark
                            ? 'hover:bg-slate-800 hover:text-white'
                            : 'hover:bg-gray-50 hover:text-gray-900'
                        }`
                      }
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      <span>{item.label}</span>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          )}

        </div>

      </div>
    </header>
  )
}