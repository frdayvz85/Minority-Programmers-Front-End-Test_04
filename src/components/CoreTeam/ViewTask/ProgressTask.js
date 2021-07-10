import React from 'react'
import TaskSubTask from '../../Global/TaskSubTask/TaskSubTask'
import Ready from'./Ready'

const ProgressTask = () => {
    return (
        <div className="core-team-todo__tasks">
            <TaskSubTask />
           <div className="change--status__tasks">
           <Ready />
           </div>
        </div>
    )
}

export default ProgressTask

