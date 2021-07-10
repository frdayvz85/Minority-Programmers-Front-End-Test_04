import React from 'react'
import notify from '../../../img/notify.png'
import ct from '../../../img/ct.png'
import '../../Global/TopHome.css'

const TopHome = () => {
    return (
        <div className="proposal--top notifaction--page">
            <div className="proposal--text">
                <h1><img src={ct} alt="" />Task notifications </h1>
                <p>You have <span className="orange">7</span> new proposal notifications.</p>
            </div>
            <div className="proposal--image">
                <img src={notify} alt="" />
            </div>
        </div>
    )
}

export default TopHome

