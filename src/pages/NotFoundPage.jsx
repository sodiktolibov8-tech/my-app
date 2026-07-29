import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, AlertOctagon } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-5 relative overflow-hidden">
      <div className="text-center max-w-md relative z-10">
        
        <div className="inline-flex p-4 rounded-3xl bg-rose-500/10 border border-rose-500/20 text-rose-400 mb-6">
          <AlertOctagon className="w-12 h-12" />
        </div>

        <h1 className="text-7xl font-black text-white mb-2">404</h1>
        <h2 className="text-2xl font-bold text-slate-200 mb-4">Страница не найдена</h2>
        
        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
          Упс! Страница, которую вы ищете, не существует или была перемещена по другому адресу.
        </p>

        <NavLink 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/30 transition-all active:scale-95"
        >
          <Home className="w-4 h-4" /> Вернуться на главную
        </NavLink>

      </div>
    </div>
  )
}