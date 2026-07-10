import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import '../globals.css'

const Layout = () => {
     return (
          <div className="app-container">
               <main>
                    <NavBar />
                    <Outlet />
               </main>
               <Footer />
          </div>
     )
}

export default Layout
