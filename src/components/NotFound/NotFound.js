import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notfound">
            <h1>Sorry, but we dont have so page. Thank you</h1>
            <Link to="/">Back to Home page</Link>
        </div>
    )
}

export default NotFound
