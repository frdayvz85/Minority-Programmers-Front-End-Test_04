import React from 'react'
import TopHome from './TopHome'
import './Home.css'
import Main from './Main'

const Home = () => {
    return (
        <div className="manager-home-page">
            <TopHome />
            <Main />
        </div>
    )
}

export default Home
