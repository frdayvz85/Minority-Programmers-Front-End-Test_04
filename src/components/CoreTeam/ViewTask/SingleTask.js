import React from 'react'
import pPhoto from '../../../img/pPhoto.png'
import username from '../../../img/username.png'
import '../../Global/Task/TaskStatus.css'
import { FaFlag, FaEllipsisV } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SingleTask = (props) => {
    return (
        <div className="single--task">
            <div className="task--header__content">
                <Link to="todo-tasks" className="todo-task__link">{props.title}</Link>
                <div className="user--profile__image">
                    <img src={pPhoto} alt="" className="username--photo" />
                    <img src={username} className="username-img" alt="" />
                </div>
            </div>
            <div className="task--flag">
                <span>
                    <FaFlag />
                </span>
                <span>{props.date}</span>
            </div>
            <div className="task--category--more">
                <ul className="task--categories">
                    <li className="task--design">Design</li>
                    <li className="task--develop">Develop</li>
                </ul>
                <div className="task--more__options">
                    <span>More options</span>
                    <FaEllipsisV />
                </div>
            </div>
        </div>
    )
}

export default SingleTask
