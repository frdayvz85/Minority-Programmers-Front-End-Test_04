import React from 'react'
import '../../Global/Sidebar.css'
import userPhoto from '../../../img/userPhoto.png'
import pm from '../../../img/pm.png'
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
                    <div className="sidebar scroll--advanced">
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
                                                <img src={pm} alt="" />
                                                <img src={user} alt="" />
                                            </div>
                                        </li>
                                        <li className="active aproved">
                                           <Link to="/manager"  onClick={toggleSidebar}> Aproved Proposals</Link>
                                            <div className="notifaction">5</div>
                                        </li>
                                        <li>
                                            <Link to="/manager/task-status" onClick={toggleSidebar}>Check task status</Link>
                                        </li>
                                        <li className="aproved">
                                            <Link to="/manager/notifications" onClick={toggleSidebar}>Task notifications</Link>
                                            <div className="notifaction">9</div>
                                        </li>
                                        <li>
                                        <Link to="/manager/create-task" onClick={toggleSidebar}>Create porposals</Link>
                                        </li>
                                        <li>
                                        <Link to="/manager/view-task" onClick={toggleSidebar}>View tasks</Link>
                                        </li>
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
