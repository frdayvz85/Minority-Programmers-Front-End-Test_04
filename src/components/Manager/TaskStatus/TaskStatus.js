import React from 'react'
import Proposal from '../../Global/Proposal/Proposal'
import TaskHeader from '../../Global/Task/TaskHeader'
import TaskSubTask from '../../Global/TaskSubTask/TaskSubTask'

const Task = () => {
    return (
        <div className="task">
            <div className="task--wrapper">
                <TaskHeader />
                <div className="general">
                <Proposal />
                <TaskSubTask />
                </div>
            </div>
        </div>
    )
}

export default Task
