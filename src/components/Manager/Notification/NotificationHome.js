import React from 'react'
import NewNotification from './NewNotification'
import TopHome from './TopHome'
import './Notification.css'
import EarlierNotification from './EarlierNotification'

const Home = () => {
    return (
        <div className="manager--notification__page">
            <TopHome />
            <div className="new--notification__page">
                <div className="new--notification__header">
                    <h1>New</h1>
                    <p></p>
                </div>
            <NewNotification />
            </div>
            <div className="new--notification__page">
                <div className="new--notification__header">
                    <h1>Earlier</h1>
                    <p></p>
                </div>
            <EarlierNotification />
            </div>
        </div>
    )
}

export default Home
