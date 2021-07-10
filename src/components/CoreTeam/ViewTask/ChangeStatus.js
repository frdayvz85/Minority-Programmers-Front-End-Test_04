import React from 'react'
import { Link } from 'react-router-dom'
import './ChangeStatus.css'

const ChangeStatus = () => {
    return (
        <div className="proposal--status__type">
            <h1>MOVE TASK TO In-Progress</h1>
            <p>Claim task and notify project manager that the task is being done.</p>
            <Link to="progress-tasks" className="btn-progress">In-Progress</Link>
        </div>
    )
}

export default ChangeStatus
