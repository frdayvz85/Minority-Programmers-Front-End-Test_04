import React from 'react'
import './ProposalStatus.css'

const ProposalStatus = () => {
    return (
        <div className="proposal--status__type">
            <h1>Change status of proposal</h1>
            <p>Notify users that the proposal moved to planned stage, once task has been created and assigned.</p>
            <button>Planned</button>
        </div>
    )
}

export default ProposalStatus
