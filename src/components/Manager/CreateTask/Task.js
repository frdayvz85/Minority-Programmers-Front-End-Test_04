import React from 'react'
import Proposal from '../../Global/Proposal/Proposal'
import ProposalStatus from '../../Global/Proposal/ProposalStatus'
import NewTask from '../../Global/Task/NewTask'
import TaskHeader from '../../Global/Task/TaskHeader'

const Task = () => {
    return (
        <div className="task">
            <div className="task--wrapper">
                <TaskHeader />
                <div className="general">
                    <Proposal />
                    <NewTask />
                    <ProposalStatus />
                </div>
            </div>
        </div>
    )
}

export default Task
