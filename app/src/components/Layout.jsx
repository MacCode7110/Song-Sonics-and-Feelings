import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import '../globals.css';

const Layout = () => {
    return (
        <div className="app-container">
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout