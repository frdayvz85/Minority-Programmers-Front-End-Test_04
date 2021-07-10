import React from 'react'
import '../../Global/Sidebar.css'
import userPhoto from '../../../img/userPhoto.png'
import {
    FaAngleDown
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebar, toggleSidebar }) => {
    return (
        <>
            {sidebar && (
                <section id="sidebar">
                    <div className="overlay" onClick={toggleSidebar}></div>
                    <div className="sidebar">
                        <div className="user-profile">
                            <img src={userPhoto} alt="user" />
                            <h3 className="user-name">Hello, <span>Shot</span></h3>
                        </div>
                        <nav className="sidebar-menu">
                            <ul className="sidebar-links">
                                <li className="home-link">
                                <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <h3 className="category-title">
                                        <span>Governance</span>
                                        <FaAngleDown className="fas"/>
                                    </h3>
                                    <ul className="sub-category-list">
                                        <li>Vote & win insight</li>
                                        <li className="active">My porposals</li>
                                        <li>All porposals</li>
                                        <li>Check $MPA to Vote</li>
                                        <li>Create porposals</li>
                                        <li>Conver $ minority to $MPA</li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>
            ) }
        </>

    )
}

export default Sidebar
