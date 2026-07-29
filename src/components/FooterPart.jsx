import React from 'react'

export default function FooterPart() {
  return (
    <footer className="text-gray-600 body-font bg-slate-900 text-white border-t border-slate-800">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        
        {/* Логотип и Название */}
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white group cursor-pointer">
          <div className="w-10 h-10 text-white p-2 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-xl shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform flex items-center justify-center">
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
          <span className="ml-3 text-xl font-bold tracking-wide bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
            Alif Academy
          </span>
        </a>

        {/* Копирайт и информация */}
        <p className="text-sm text-slate-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-slate-800 sm:py-2 sm:mt-0 mt-4">
          © 2026 Alif Academy —
          <span className="text-indigo-400 ml-1 font-medium">
            Frontend Development Course
          </span>
        </p>

        {/* Иконки соцсетей */}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-2">
          
          {/* Facebook */}
          <a 
            href="#" 
            className="w-9 h-9 rounded-lg bg-slate-800/80 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all duration-200 hover:-translate-y-1 shadow-md"
            aria-label="Facebook"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>

          {/* Twitter / X */}
          <a 
            href="#" 
            className="w-9 h-9 rounded-lg bg-slate-800/80 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all duration-200 hover:-translate-y-1 shadow-md"
            aria-label="Twitter"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>

          {/* Instagram */}
          <a 
            href="#" 
            className="w-9 h-9 rounded-lg bg-slate-800/80 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 transition-all duration-200 hover:-translate-y-1 shadow-md"
            aria-label="Instagram"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4"
              viewBox="0 0 24 24"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a 
            href="#" 
            className="w-9 h-9 rounded-lg bg-slate-800/80 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-200 hover:-translate-y-1 shadow-md"
            aria-label="LinkedIn"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="w-4 h-4"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </a>

        </span>
      </div>
    </footer>
  )
}