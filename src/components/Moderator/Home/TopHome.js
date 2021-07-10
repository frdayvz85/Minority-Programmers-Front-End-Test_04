import React from 'react'
import modBack from '../../../img/moderatorBack.png'
import mood from '../../../img/mood.png'
import '../../Global/TopHome.css'

const TopHome = () => {
    return (
        <div className="proposal--top">
            <div className="proposal--text">
                <h1><img src={mood} alt="" />Choose proposals to be elected </h1>
                <p>You can elect upto 3 proposals a day from the proposals that made it to the 10 % percentile.</p>
            </div>
            <div className="proposal--image">
                <img src={modBack} alt="" />
            </div>
        </div>
    )
}

export default TopHome
