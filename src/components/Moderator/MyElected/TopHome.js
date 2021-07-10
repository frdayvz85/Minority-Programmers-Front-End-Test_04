import React from 'react'
import modBack from '../../../img/moderatorBack.png'
import mood from '../../../img/pm.png'
import '../../Global/TopHome.css'

const TopHome = () => {
    return (
        <div className="proposal--top">
            <div className="proposal--text">
                <h1><img src={mood} alt="" />My elected Proposals </h1>
                <p>Check the status of proposals you elected.</p>
            </div>
            <div className="proposal--image">
                <img src={modBack} alt="" />
            </div>
        </div>
    )
}

export default TopHome
