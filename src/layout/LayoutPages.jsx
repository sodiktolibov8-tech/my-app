import React from 'react'
import HeaderPart from '../components/HeaderPart'
import FooterPart from '../components/FooterPart'
import { Outlet } from 'react-router-dom'

export default function LayoutPages() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300 flex flex-col justify-between">
      <HeaderPart />
      
      {/* main растягивается и занимает всё свободное место */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <FooterPart />
    </div>
  )
}