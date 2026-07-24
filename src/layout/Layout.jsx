import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Layout() {
    return (
        <div className="[100vh]">
            <Header />
            <main className="[110vh]">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
