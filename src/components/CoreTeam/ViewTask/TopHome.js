import React from 'react'
import viewtaskback from '../../../img/viewtaskback.png'
import pm from '../../../img/pm.png'
import '../../Global/TopHome.css'

const TopHome = () => {
    return (
        <div className="proposal--top view__task--page">
            <div className="proposal--text">
                <h1><img src={pm} alt="" />View Tasks </h1>
                <p>View, organize and access your tasks here.</p>
            </div>
            <div className="proposal--image">
                <img src={viewtaskback} alt="" />
            </div>
        </div>
    )
}

export default TopHome
