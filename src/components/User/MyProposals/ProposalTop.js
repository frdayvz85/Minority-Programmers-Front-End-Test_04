import React from 'react'
import proposalImg from '../../../img/proposal-img.png'
import '../../Global/TopHome.css'

const ProposalTop = () => {
    return (
        <div className="proposal--top">
            <div className="proposal--text">
                <h1>My Proposals</h1>
                <p>Proposals I have submitted to the community governance.</p>
            </div>
            <div className="proposal--image">
                <img src={proposalImg} alt="" />
            </div>
        </div>
    )
}

export default ProposalTop
