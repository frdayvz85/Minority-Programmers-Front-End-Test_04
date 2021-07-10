import React from 'react'
import '../../Global/Sidebar.css'
import userPhoto from '../../../img/userPhoto.png'
import mood from '../../../img/mood.png'
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
                                                <img src={mood} alt="" />
                                                <img src={user} alt="" />
                                            </div>
                                        </li>
                                        <li>All porposals</li>
                                        
                                        <li className="active">
                                            Elected proposal
                                        </li>
                                        <li>
                                            <Link to="/moderator/my-elected" onClick={toggleSidebar}>My elected proposal</Link>
                                        </li>
                                        <li className="aproved">
                                            <span>Task status notifications</span>
                                            <div className="notifaction">7</div>
                                        </li>
                                        <li className="aproved">
                                        <Link to="/moderator/notification" onClick={toggleSidebar}>Proposal notifications</Link>
                                            <div className="notifaction">5</div>
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
