import React from 'react'
import { Link } from 'react-router-dom'
import './ChangeStatus.css'

const Ready = () => {
    return (
        <div className="proposal--status__type">
            <h1>MOVE TASK TO Ready for review</h1>
            <p>Notify project manager that the task is done.</p>
            <Link to="progress-tasks" className="btn-progress">Ready For Review</Link>
        </div>
    )
}

export default Ready
