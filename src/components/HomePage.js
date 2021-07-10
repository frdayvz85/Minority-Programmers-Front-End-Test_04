import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <section className="home--page">
            <h1>Welcome to <span className="company--name">MINORITY PROGRAMMERS ASSOCIATION</span></h1>
            <div className="pages">
            <div className="page user--page">
                <Link to="/user">User</Link>
            </div>
            <div className="page manager--page">
                <Link to="/manager">Manager</Link>
            </div>
            <div className="page moderator--page">
                <Link to="/moderator">Moderator</Link>
            </div>
            <div className="page moderator--page">
                <Link to="/core-team">Core Team</Link>
            </div>
            </div>
        </section>
    )
}

export default HomePage
