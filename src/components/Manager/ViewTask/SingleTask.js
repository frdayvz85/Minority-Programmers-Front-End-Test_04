import React from 'react'
import pPhoto from '../../../img/pPhoto.png'
import '../../Global/Task/TaskStatus.css'
import { FaFlag,FaEllipsisV } from "react-icons/fa";

const SingleTask = (props) => {
    console.log(props.users)
    return (
        <div className="single--task">
            <div className="task--header__content">
                <p>{props.text}
                </p>
                <div className="user--profile__image">
                       <img src={pPhoto} alt="" />
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
