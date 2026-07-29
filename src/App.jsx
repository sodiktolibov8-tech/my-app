import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import FirstPage from './pages/FirstPage'
import MainPage from './pages/MainPage'
import SettingPage from './pages/SettingPage'
import LayoutPages from './layout/LayoutPages'
// Подключаем ваш Zustand стор
import { useAppStore } from './store/useAppStore' // Убедитесь, что путь к файлу верный
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  // 1. Достаем тему из стора
  const theme = useAppStore((state) => state.theme)

  // 2. Вешаем класс темы на <body> при каждом её изменении
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <Routes>
      <Route element={<LayoutPages />}>
        <Route path='/' element={<MainPage />} />
        <Route path='/first' element={<FirstPage />} />
        <Route path='/setting' element={<SettingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App