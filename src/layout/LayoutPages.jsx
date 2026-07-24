import React from 'react'

import HeaderPart from '../components/HeaderPart'
import FooterPart from '../components/FooterPart'
import { Outlet } from 'react-router-dom'

export default function LayoutPages() {
    return (
        <div className="[100vh]">
            <HeaderPart />
            <main className="[110vh]">
                <Outlet />
            </main>
            <FooterPart />
        </div>
    )
}
