import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar';
import './Header.css'
import TopHeader from './TopHeader';

const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };

    if (sidebar) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    return (
        <section id="header">
            <TopHeader />
            <Navbar
                toggleSidebar={toggleSidebar}
            />
            <Sidebar
                sidebar={sidebar}
                toggleSidebar={toggleSidebar}
            />
        </section>
    )
}

export default Header
