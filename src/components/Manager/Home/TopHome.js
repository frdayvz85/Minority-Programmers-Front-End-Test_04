import React from 'react'
import modBack from '../../../img/moderatorBack.png'
import pm from '../../../img/pm.png'
import '../../Global/TopHome.css'

const TopHome = () => {
    return (
        <div className="proposal--top">
            <div className="proposal--text">
                <h1><img src={pm} alt="" />Aproved Proposals </h1>
                <p>Create tasks from proposals approved by core team.</p>
            </div>
            <div className="proposal--image">
                <img src={modBack} alt="" />
            </div>
        </div>
    )
}

export default TopHome
