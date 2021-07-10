import React from 'react'
import './TaskSubTask.css'
import { FaAngleRight, FaPrint, FaShareAlt, FaCircle, FaBars, FaRegFlag, FaRegHourglass, FaPlayCircle, FaPlus, FaRegSmile, FaEnvelope, FaComment, FaAngleDown } from "react-icons/fa";
import username from '../../../img/username.png'
import pPhoto from '../../../img/pPhoto.png'
import usersIcon from '../../../img/usersIcon.png'
import eyeIcon from '../../../img/eyeIcon.png'
import pin from '../../../img/pin.png'

const TaskSubTask = () => {
    return (
        <div className="task--sub__task">
            <div className="task--sub--task__wrapper">
                <div className="task--sub--header__part">
                    <div className="task--sub--task__header">
                        <div className="task--sub--task__cat--people">
                            <span className="task--sub--task-cat__subcat">In<b>Category</b><FaAngleRight /><b>Sub Category</b></span>
                            <span className="task--sub--task__participant">
                                <span>For</span>
                                <img src={pPhoto} alt="" />
                                <img src={username} alt="" />
                                <img src={usersIcon} alt="" />
                            </span>
                        </div>
                        <div className="print--share">
                            <FaPrint />
                            <FaShareAlt />
                        </div>
                    </div>
                    <div className="task--sub--header__yellow">
                        <FaCircle className="fa-circle" />
                        <h3>Task Name Here</h3>
                    </div>
                    <div className="task--sub--all_details">
                        <div className="task--sub__cat__feature">
                            <span className="task--sub__design">Design</span>
                            <span className="task--sub__feature">Feature</span>
                            <span className="task--sub__icon">
                                <FaBars />
                            </span>
                            <span className="task--sub__icon">
                                <FaRegHourglass />
                            </span>
                            <span className="task--sub__icon">
                                <FaRegFlag />
                            </span>
                        </div>
                        <div className="task--sub--date__properties">
                            <div className="task--sub__created">
                                <span>Created</span>
                                <h4>Jun 11th, 3:00 pm</h4>
                            </div>
                            <div className="task--sub__created">
                                <span>Time Tracked</span>
                                <h4><FaPlayCircle className="fa-play" />0:00:00</h4>
                            </div>
                            <div className="task--sub__created">
                                <span>Estimate</span>
                                <h4><FaRegHourglass className="fa-hour" />15h</h4>
                            </div>
                            <div className="task--sub__created">
                                <span>Start date</span>
                                <h4>Jun 12</h4>
                            </div>
                            <div className="task--sub__created">
                                <span>Due date</span>
                                <h4 className="purple">Jun 15</h4>
                            </div>
                            <img src={eyeIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="task--sub__body">
                <div className="task--sub--body__wrapper">
                    <div className="task--sub--body__top">
                        <div className="task--sub--body__description task-scroll">
                            <div className="task--sub--body__description--top">
                                <h3 className="text-center">Task Description</h3>
                                <div className="task--sub--input">
                                    <textarea name="" id="" cols="30" rows="20" placeholder="Task Description here"></textarea>
                                    <button className="show__more--task--btn">Show more</button>
                                    <button className="add--attachment--task--btn">
                                        <span>Add atachment</span>
                                        <FaAngleDown />
                                    </button>
                                </div>
                            </div>
                            <div className="task--sub--body__description--bottom">
                                <h3><span><FaPlus /></span> Add Subtask</h3>
                                <div className="task--sub--input">
                                    <textarea name="" id="" cols="50" rows="10" placeholder="Sub Task description here"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="task--sub--body__checklist task-scroll">
                            <h3 className="text-center">Definition Of Done Checklist</h3>
                            <ul className="task--sub--checklist">
                                <li>Checklist Point 1</li>
                                <li>Checklist Point 2</li>
                                <li>Checklist Point 3</li>
                            </ul>
                        </div>
                    </div>
                    <div className="task--sub--body__bottom ">
                        <div className="task--sub--body__description task-scroll-bottom">
                            <h3 className="text-center">Task Status Updates</h3>
                            <ul className="task--sub--input task--sub--status__update">
                                <li>
                                    <span>Lorem created this task</span>
                                    <span>Yesterday at 11:02 am</span>
                                </li>
                            </ul>
                        </div>
                        <div className="task--sub--body__comment task-scroll-bottom">
                            <h3 className="text-center">Add Comments Or Email</h3>
                            <div className="task--sub--input">
                                <textarea name="" id="" cols="50" rows="10" placeholder="Type Your Comments Here"></textarea>
                            </div>
                            <div className="add--comment">
                                <div className="comment--icons__sare">
                                      <img src={pin} alt="" className="fas" />
                                    <FaRegSmile className="fa-smile"/>
                                </div>
                                <div className="comment--icons__sare">
                                    <FaComment className="fa-comment"/>
                                    <FaEnvelope className="fa-message"/>
                                    <button className="btn btn--comment">Comment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskSubTask
