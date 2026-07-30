import React, { useState } from 'react'
import { Mail, Send, MessageSquare, CheckCircle, Sparkles } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 py-12 relative overflow-hidden transition-colors duration-300">
      <div className="container px-5 py-8 mx-auto max-w-4xl relative z-10">
        
        {/* Заголовок */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4" /> Связь
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">Напишите мне</h1>
          <p className="text-gray-600 dark:text-slate-400 max-w-xl mx-auto">
            Открыт к предложениям, совместным учебным проектам и вопросам по разработке.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          
          {/* Контактные данные */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-gray-50/80 border border-gray-200/80 dark:bg-slate-900/80 dark:border-slate-800 backdrop-blur-xl flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Контакты</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-50 text-indigo-600 border border-indigo-100 dark:bg-indigo-600/20 dark:text-indigo-400 rounded-2xl dark:border-indigo-500/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400">Email</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">example@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-50 text-emerald-600 border border-emerald-100 dark:bg-emerald-600/20 dark:text-emerald-400 rounded-2xl dark:border-emerald-500/30">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400">Telegram</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">@username</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-800 text-xs text-gray-500 dark:text-slate-500">
              Быстрый ответ в течение 24 часов.
            </div>
          </div>

          {/* Форма */}
          <div className="md:col-span-3 p-8 rounded-3xl bg-gray-50/80 border border-gray-200/80 dark:bg-slate-900/80 dark:border-slate-800 backdrop-blur-xl shadow-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-500 dark:text-emerald-400 animate-bounce" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Сообщение отправлено!</h3>
                <p className="text-sm text-gray-600 dark:text-slate-400">Спасибо за обращение, я отвечу вам в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 uppercase tracking-wider mb-2">Ваше Имя</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 text-slate-900 placeholder-gray-400 dark:bg-slate-800/80 dark:border-slate-700 dark:text-white dark:placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 uppercase tracking-wider mb-2">Email / Telegram</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="@username или mail@example.com"
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 text-slate-900 placeholder-gray-400 dark:bg-slate-800/80 dark:border-slate-700 dark:text-white dark:placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 uppercase tracking-wider mb-2">Сообщение</label>
                  <textarea 
                    rows={4} 
                    required 
                    placeholder="Привет! Хочу обсудить проект..."
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 text-slate-900 placeholder-gray-400 dark:bg-slate-800/80 dark:border-slate-700 dark:text-white dark:placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Отправить Сообщение
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  )
}