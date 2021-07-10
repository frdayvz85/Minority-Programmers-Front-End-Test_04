import React from 'react'
import TaskSubTask from '../../Global/TaskSubTask/TaskSubTask'
import ChangeStatus from'./ChangeStatus'

const TodoTask = () => {
    return (
        <div className="core-team-todo__tasks">
            <TaskSubTask />
           <div className="change--status__tasks">
           <ChangeStatus />
           </div>
        </div>
    )
}

export default TodoTask
