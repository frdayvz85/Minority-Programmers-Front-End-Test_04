import React, { useState } from 'react'
import '../../Global/Navbar.css'
import {
    FaBars, FaSearch,FaTimes
} from "react-icons/fa";

const Navbar = ({toggleSidebar}) => {
    const [showNav, setShowNav] = useState(true)
    const showNavHandler = () => {
        setShowNav(!showNav)
    }
    
    return (
        <>
            <div className="navbar"></div>
            <div className="navbar-container">
                    <div className="all" onClick={toggleSidebar}>
                        <FaBars />
                        <span>All</span>
                    </div>
                    <ul className={showNav?"navbar--lniks":"navbar--lniks active"}>
                        <li>Learn</li>
                        <li>Incubator</li>
                        <li>Mentorship</li>
                        <li>Events</li>
                        <li>Careers</li>
                        <li>Consultancy</li>
                    </ul>
                    <div className="search__hamburger">
                        <div className="hamburger" onClick={showNavHandler}>
                            {showNav?<FaBars />:<FaTimes />}
                        </div>
                    <div className="search">
                        <FaSearch />
                    </div>
                    </div>
                </div>
        </>
    )
}

export default Navbar
