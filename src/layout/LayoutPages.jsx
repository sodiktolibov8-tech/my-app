// layout/LayoutPages.jsx
import { Outlet } from 'react-router-dom'
import HeaderPart from '../components/HeaderPart'
import FooterPart from '../components/FooterPart'

export default function LayoutPages() {
  return (
    // Добавьте dark:bg-slate-950 сюды
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 flex flex-col justify-between">
      <HeaderPart />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterPart />
    </div>
  )
}