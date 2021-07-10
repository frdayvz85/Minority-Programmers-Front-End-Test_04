import React from 'react'
import taskImg from '../../../img/createtaskback.png'
import './TaskHeader.css'

const TaskHeader = () => {
    return (
        <div className="task--header">
            <img src={taskImg} alt="" />
        </div>
    )
}

export default TaskHeader
