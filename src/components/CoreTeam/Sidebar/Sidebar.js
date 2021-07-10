import React from 'react'
import '../../Global/Sidebar.css'
import userPhoto from '../../../img/userPhoto.png'
import ct from '../../../img/ct.png'
import user from '../../../img/user.png'
import {
    FaAngleDown
} from "react-icons/fa";
import { Link } from 'react-router-dom'

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
                                        <FaAngleDown className="fas" />
                                    </h3>
                                    <ul className="sub-category-list">
                                        <li className="roles">
                                            <span>Roles</span>
                                            <div className="roles-img">
                                                <img src={ct} alt="" />
                                                <img src={user} alt="" />
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="/core-team/view-tasks" onClick={toggleSidebar}>View Task</Link>
                                        </li>
                                        <li className="active aproved">
                                            <span>Notifications</span>
                                            <div className="notifaction">7</div>
                                        </li>
                                        <li>Create porposals</li>
                                        <li>My Created porposals</li>
                                        <li>Vote & Win insights</li>
                                        <li>All porposals</li>
                                        <li>My vote points</li>
                                        <li>Check $MPA to Vote</li>
                                        <li>Conver $ minority to $MPA</li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>
            )}
        </>

    )
}

export default Sidebar