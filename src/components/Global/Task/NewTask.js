import React from 'react'
import eyeIcon from '../../../img/eyeIcon.png'
import userIcon from '../../../img/usersIcon.png'
import { FaAngleDown, FaBars, FaCircle, FaPlus, FaRegCalendarCheck, FaRegFlag, FaRegHourglass, FaSearch } from 'react-icons/fa'
import './NewTask.css'

const NewTask = () => {
    return (
        <div className="new-task">
            <div className="task--header__yellow">
                <FaCircle className="fa-circle" />
                <h1> Type task name here</h1>
            </div>
            <div className="new-task__contents">
                <ul className="new--task__icons">
                    <li><FaRegFlag /></li>
                    <li><FaRegCalendarCheck /></li>
                    <li><FaBars /></li>
                    <li><FaRegHourglass /></li>
                    <li><FaBars /></li>
                    <li>
                        <img src={eyeIcon} alt="" />
                    </li>
                </ul>
                <div className="task__for--user__details">
                    <span>In</span>
                    <div className="search--list">
                        <FaSearch className="fa-search" />
                        <input type="search" placeholder="Search List" />
                    </div>
                    <div className="for--users">
                        <span>For</span>
                        <p>
                            <img src={userIcon} alt="" />
                        </p>
                    </div>
                </div>

            </div>
            <div className="taskk--add">
                <textarea name="" id="" cols="30" rows="10" placeholder="Type task description here"></textarea>
                <div className="task__small--content">
                    <p>
                        <span className="fa--plus" ><FaPlus /></span>
                        <span>Add Subtask</span>
                    </p>
                    <p>
                        <span>Add Definition of done Checklist</span>
                        <span className="fa--plus" ><FaPlus /></span>
                    </p>
                </div>
            </div>
            <div className="task--attachments">
                <button>
                    <span>Add Atachments</span>
                    <FaAngleDown className="fa-angle-down" />
                </button>
            </div>
            <div className="create--btn">
                <button>Create task</button>
            </div>
        </div>
    )
}

export default NewTask
